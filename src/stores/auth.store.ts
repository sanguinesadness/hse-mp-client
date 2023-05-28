import { userService } from 'api';
import { makeAutoObservable } from 'mobx';

class AuthStore {
  public isLoading: boolean = false;
  public isLoggedIn: boolean = false;

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

  public setIsLoggedIn(value: boolean): void {
    this.isLoggedIn = value;
  }
}

export const authStore = new AuthStore();
