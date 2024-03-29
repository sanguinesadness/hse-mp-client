import { productService } from 'api';
import { TOzonProductExtended } from 'api/models';
import { TOzonProduct } from 'api/models/ozon-product.model';
import { makeAutoObservable, toJS } from 'mobx';
import { fakePromise } from 'utils';

class ProductsStore {
  private _archivedIds: Array<number> = [];

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

  public get activeProducts(): Array<TOzonProduct> {
    return toJS(
      this._products.filter((product: TOzonProduct) => {
        return !this._archivedIds.includes(product.id);
      })
    );
  }

  public get archivedProducts(): Array<TOzonProduct> {
    return toJS(
      this._products.filter((product: TOzonProduct) => {
        return this._archivedIds.includes(product.id);
      })
    );
  }

  constructor() {
    makeAutoObservable(this);
  }

  public async addProduct(product: TOzonProductExtended): Promise<void> {
    await fakePromise(3000);
    this._products = [product, ...this._products];
  }

  public addToArchived(id: number): void {
    this._archivedIds = [...this._archivedIds, id];
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
