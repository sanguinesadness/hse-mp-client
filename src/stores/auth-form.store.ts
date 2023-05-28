import { userService } from 'api';
import { makeAutoObservable } from 'mobx';
import Cookies from 'universal-cookie';

const STORE_FIELDS = ['apiKey', 'clientId'] as const;
type StoreFieldsTuple = typeof STORE_FIELDS;
export type TAuthFormStoreField = StoreFieldsTuple[number];

const FieldsValidationsMap: Record<
  TAuthFormStoreField,
  (v: string) => boolean
> = {
  apiKey: (v: string) => v.length === 36,
  clientId: (v: string) => v.length === 7
};

class AuthFormStore {
  public apiKey: string = '';
  public clientId: string = '';
  public isError: boolean = false;
  public isLoading: boolean = false;

  public get isFormEmpty(): boolean {
    return STORE_FIELDS.every(
      (fieldName: TAuthFormStoreField) => this[fieldName] === ''
    );
  }

  public get isFormValid(): boolean {
    return STORE_FIELDS.every((fieldName: TAuthFormStoreField) =>
      this.isFieldValid(fieldName)
    );
  }

  constructor() {
    makeAutoObservable(this);
  }

  public isFieldValid(name: TAuthFormStoreField): boolean {
    return FieldsValidationsMap[name](this[name]);
  }

  public async requestLogin(): Promise<void> {
    this.isLoading = true;
    this.isError = false;

    userService
      .login({
        clientId: this.clientId,
        apiKey: this.apiKey
      })
      .then(() => {
        this.isError = false;
        const cookies = new Cookies();
        cookies.set('api-key', this.apiKey);
        cookies.set('client-id', this.clientId);
      })
      .catch(() => (this.isError = true))
      .finally(() => (this.isLoading = false));
  }

  public resetStore(): void {
    STORE_FIELDS.forEach((fieldName: TAuthFormStoreField) => {
      this[fieldName] = '';
    });
  }

  public updateField(name: TAuthFormStoreField, value: string): void {
    this[name] = value;
  }
}

export const authFormStore = new AuthFormStore();
