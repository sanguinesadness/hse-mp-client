import { TResponseWrapper } from 'api/models';
import axios, {
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig
} from 'axios';
import { SERVER_URL } from 'config';
import { authStore } from 'stores';
import Cookies from 'universal-cookie';

class RequestService {
  private readonly _axios: AxiosInstance;
  private _cookies: Cookies;

  public get axios(): AxiosInstance {
    return this._axios;
  }

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
      (config: AxiosResponse<TResponseWrapper>) => {
        authStore.setIsLoggedIn('user' in config.data.result);
        return config;
      }
    );
  }
}

export const requestService = new RequestService();
