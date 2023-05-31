import { TDefaultResponse } from 'api/models';
import axios, {
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig
} from 'axios';
import { SERVER_URL } from 'config';
import { authStore } from 'stores';
import Cookies from 'universal-cookie';

export class RootRequestService {
  private readonly _axios: AxiosInstance;
  private _cookies: Cookies;

  constructor() {
    this._cookies = new Cookies();

    this._axios = axios.create({
      baseURL: SERVER_URL,
      withCredentials: true
    });

    this._axios.interceptors.request.use(
      (config: InternalAxiosRequestConfig) => {
        config.headers['Api-Key'] = this._cookies.get('api-key');
        config.headers['Client-Id'] = this._cookies.get('client-id');
        return config;
      }
    );

    this._axios.interceptors.response.use(
      (config: AxiosResponse<TDefaultResponse<unknown>>) => {
        const isApiKeyValid =
          config.config.headers.get('api-key') === this._cookies.get('api-key');
        const isClientIdValid =
          config.config.headers.get('client-id') ===
          this._cookies.get('client-id');
        authStore.setIsLoggedIn(isApiKeyValid && isClientIdValid);
        return config;
      }
    );
  }

  public async postPromise<T>(endpoint: string, payload?: object): Promise<T> {
    const resp = await this._axios.post<TDefaultResponse<T>>(endpoint, payload);
    return resp.data.result;
  }
}
