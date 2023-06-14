import { productService } from 'api';
import { TOzonProduct } from 'api/models/ozon-product.model';
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

  private _products: Array<TOzonProduct> = [];

  public get products(): Array<TOzonProduct> {
    return toJS(this._products);
  }

  constructor() {
    makeAutoObservable(this);
  }

  public destroy(): void {}

  public getProduct(id: number): TOzonProduct | null {
    const product = this._products.find(
      (product: TOzonProduct) => product.id === id
    );
    return product ?? null;
  }

  public init(): void {
    void this.loadProducts();
  }

  public async loadProducts(): Promise<void> {
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
