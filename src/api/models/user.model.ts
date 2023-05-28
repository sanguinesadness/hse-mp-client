export class UserModel {
  apiKey: string = '';
  clientId: string = '';
  id: string = '';

  constructor(data: Partial<UserModel>) {
    Object.assign(this, data);
  }
}
