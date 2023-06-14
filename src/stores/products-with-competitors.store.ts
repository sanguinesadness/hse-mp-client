import { productService } from 'api';
import { TProductWithCompetitors } from 'api/models';
import { makeAutoObservable, toJS } from 'mobx';
import { fakePromise } from 'utils';

class ProductsWithCompetitorsStore {
  private _isError: boolean = false;

  public get isError(): boolean {
    return toJS(this._isError);
  }

  private _isLoading: boolean = false;

  public get isLoading(): boolean {
    return toJS(this._isLoading);
  }

  private _productsWithCompetitors: Array<TProductWithCompetitors> = [];

  public get productsWithCompetitors(): Array<TProductWithCompetitors> {
    return toJS(this._productsWithCompetitors);
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
      .fetchProductsWithCompetitors(refresh)
      .then((data) => {
        this._productsWithCompetitors = data.products;
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

export const productsWithCompetitorsStore = new ProductsWithCompetitorsStore();
