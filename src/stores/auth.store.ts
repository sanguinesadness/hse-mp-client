import { userService } from 'api';
import { RoutesEnum } from 'consts';
import { makeAutoObservable } from 'mobx';

class AuthStore {
  public isLoading: boolean = false;
  public isLoggedIn: boolean = false;
  private _initialRoute: string = RoutesEnum.ROOT;

  public get initialRoute(): string {
    return this._initialRoute;
  }

  constructor() {
    makeAutoObservable(this);
  }

  public async checkAuth(): Promise<void> {
    this.isLoading = true;
    return userService
      .checkAuth()
      .catch(() => {
        this.isLoggedIn = false;
      })
      .finally(() => {
        this.isLoading = false;
      });
  }

  public setInitialRoute(value: string): void {
    this._initialRoute = value;
  }

  public setIsLoggedIn(value: boolean): void {
    this.isLoggedIn = value;
  }
}

export const authStore = new AuthStore();
