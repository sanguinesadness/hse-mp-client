import {
  TOzonProductExtended,
  TProductWithCompetitors,
  TTopProduct
} from 'api/models';
import { TOzonProduct } from 'api/models/ozon-product.model';
import { ApiEndpoints } from 'consts';
import { snakeToCamel } from 'utils';
import { RootRequestService } from './root-request-service';

class ProductService extends RootRequestService {
  public async downloadCompetitors(): Promise<void> {
    return this.downloadFile(
      ApiEndpoints.PRODUCT.DOWNLOAD_COMPETITORS,
      'product_competitors'
    );
  }

  public async downloadTopProducts(): Promise<void> {
    return this.downloadFile(ApiEndpoints.PRODUCT.DOWNLOAD_TOP, 'top_products');
  }

  public async fetchProductInfo(id: number): Promise<TOzonProductExtended> {
    const resp = await this.postPromise<{ productInfo: TOzonProductExtended }>(
      ApiEndpoints.PRODUCT.INFO,
      { product_id: id }
    );
    return snakeToCamel(resp.productInfo);
  }

  public async fetchProductsDetailed(): Promise<Array<TOzonProduct>> {
    const resp = await this.postPromise<any>(
      ApiEndpoints.PRODUCT.DETAILED_LIST
    );
    return resp.productList.map(snakeToCamel);
  }

  public async fetchProductsShort(): Promise<any> {
    return await this.postPromise(ApiEndpoints.PRODUCT.LIST);
  }

  public async fetchProductsWithCompetitors(refresh?: boolean): Promise<{
    products: Array<TProductWithCompetitors>;
  }> {
    return await this.postPromise(
      ApiEndpoints.PRODUCT.PRODUCTS_WITH_COMPETITORS,
      {
        refresh
      }
    );
  }

  public async fetchTopProducts(refresh?: boolean): Promise<{
    topProducts: Array<TTopProduct>;
  }> {
    return await this.postPromise(ApiEndpoints.PRODUCT.TOP, { refresh });
  }
}

export const productService = new ProductService();
