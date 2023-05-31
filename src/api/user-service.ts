import { ApiEndpoints } from 'consts';
import { TLoginRequestModel } from './models';
import { RootRequestService } from './root-request-service';

class UserService extends RootRequestService {
  public async checkAuth(): Promise<any> {
    return this.postPromise(ApiEndpoints.USER.CHECK_AUTH);
  }

  public async login(data: TLoginRequestModel): Promise<void> {
    return this.postPromise(ApiEndpoints.USER.LOGIN, data);
  }
}

export const userService = new UserService();
