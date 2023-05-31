import { productService } from 'api';
import { makeAutoObservable, toJS } from 'mobx';

class ProductsStore {
  private _isError: boolean = false;

  public get isError(): boolean {
    return toJS(this._isError);
  }

  private _isLoading: boolean = false;

  public get isLoading(): boolean {
    return toJS(this._isLoading);
  }

  private _products: Array<any> = [];

  public get products(): Array<any> {
    return toJS(this._products);
  }

  constructor() {
    makeAutoObservable(this);
  }

  public destroy(): void {}

  public init(): void {
    void this.loadProducts();
  }

  public loadProducts(): Promise<void> {
    this._isError = false;
    this._isLoading = true;

    return productService
      .fetchProductsDetailed()
      .then((products) => {
        this._products = products;
        this._isError = false;
      })
      .catch(() => {
        this._isError = true;
      })
      .finally(() => {
        this._isLoading = false;
      });
  }
}

export const productsStore = new ProductsStore();
