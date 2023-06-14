import { productService } from 'api';
import { TTopProduct } from 'api/models';
import { makeAutoObservable, toJS } from 'mobx';
import { fakePromise } from 'utils';

class TopProductsStore {
  private _isError: boolean = false;

  public get isError(): boolean {
    return toJS(this._isError);
  }

  private _isLoading: boolean = false;

  public get isLoading(): boolean {
    return toJS(this._isLoading);
  }

  private _topProducts: Array<TTopProduct> = [];

  public get topProducts(): Array<TTopProduct> {
    return toJS(this._topProducts);
  }

  constructor() {
    makeAutoObservable(this);
  }

  public destroy(): void {}

  public async fakeRefresh(): Promise<void> {
    this._isLoading = true;
    await fakePromise(5000);
    this._isLoading = false;
  }

  public init(): void {
    void this.loadData();
  }

  public async loadData(refresh?: boolean): Promise<void> {
    this._isError = false;
    this._isLoading = true;

    await fakePromise(1000);

    return productService
      .fetchTopProducts(refresh)
      .then(({ topProducts }) => {
        this._topProducts = topProducts;
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

export const topProductsStore = new TopProductsStore();
