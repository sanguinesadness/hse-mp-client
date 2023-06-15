import { productService } from 'api';
import { TOzonProductExtended } from 'api/models';
import { makeAutoObservable, toJS } from 'mobx';
import { productsStore } from 'stores/products.store';
import { fakePromise } from 'utils';

class ProductDetailsStore {
  private _isArchived: boolean = false;

  public get isArchived(): boolean {
    return this._isArchived;
  }

  private _isError: boolean = false;

  public get isError(): boolean {
    return toJS(this._isError);
  }

  private _isLoading: boolean = false;

  public get isLoading(): boolean {
    return toJS(this._isLoading);
  }

  private _product: TOzonProductExtended | null = null;

  public get product(): TOzonProductExtended | null {
    return toJS(this._product);
  }

  constructor() {
    makeAutoObservable(this);
  }

  public async archiveProduct(): Promise<void> {
    if (!this._product) {
      return;
    }

    await fakePromise(1000);
    this._isArchived = true;
    productsStore.addToArchived(this._product.id);
  }

  public destroy(): void {}

  // fake
  public async editProduct(data: TOzonProductExtended): Promise<void> {
    await fakePromise(1000);
    this._product = data;
  }

  public init(id: number): void {
    void this.loadData(id);
  }

  public async loadData(id: number): Promise<void> {
    this._isError = false;
    this._isLoading = true;

    return productService
      .fetchProductInfo(id)
      .then((product: TOzonProductExtended) => {
        this._product = product;
        this._isError = false;
      })
      .catch(() => {
        this._isError = true;
      })
      .finally(() => {
        this._isLoading = false;
      });
  }

  public async unarchivedProduct(): Promise<void> {
    this._isArchived = false;
  }
}

export const productDetailsStore = new ProductDetailsStore();
