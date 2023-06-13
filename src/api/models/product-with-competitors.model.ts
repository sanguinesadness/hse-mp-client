import { TProductCompetitor } from './product-competitor.model';
import { TProduct } from './product.model';

export type TProductWithCompetitors = TProduct & {
  competitors: Array<TProductCompetitor>;
};
