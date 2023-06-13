import { TProductWithCompetitors } from 'api/models';
import { ApiEndpoints } from 'consts';
import { RootRequestService } from './root-request-service';

class ProductService extends RootRequestService {
  public async fetchProductsDetailed(): Promise<any> {
    const resp = await this.postPromise<any>(
      ApiEndpoints.PRODUCT.DETAILED_LIST
    );
    return resp.productList;
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
}

export const productService = new ProductService();
