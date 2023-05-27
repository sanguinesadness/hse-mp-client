import { makeAutoObservable } from 'mobx';

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
