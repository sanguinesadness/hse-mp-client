import { TLoginRequestModel } from 'api/models';
import { requestService } from 'api/request-service';
import { ApiEndpoints } from 'consts';

class UserService {
  public async checkAuth(): Promise<void> {
    return requestService.axios.get(ApiEndpoints.USER.CHECK_AUTH);
  }

  public async login(data: TLoginRequestModel): Promise<void> {
    return requestService.axios.post(ApiEndpoints.USER.LOGIN, data);
  }
}

export const userService = new UserService();
