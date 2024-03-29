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

  public async downloadFile(endpoint: string, fileName: string): Promise<void> {
    try {
      const response: AxiosResponse = await this._axios.get(endpoint, {
        responseType: 'blob'
      });

      const blob: Blob = new Blob([response.data], {
        type: response.headers['content-type']
      });

      const url: string = URL.createObjectURL(blob);

      const a: HTMLAnchorElement = document.createElement('a');
      a.href = url;
      a.download = `${fileName}.xlsx`;

      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Ошибка загрузки файла:', error);
    }
  }

  public async postPromise<T>(endpoint: string, payload?: object): Promise<T> {
    const resp = await this._axios.post<TDefaultResponse<T>>(endpoint, payload);
    return resp.data.result;
  }
}
