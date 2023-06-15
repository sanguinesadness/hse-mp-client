import { TOzonProduct } from 'api/models/ozon-product.model';

export type TOzonProductExtended = TOzonProduct & {
  description: string;
};
