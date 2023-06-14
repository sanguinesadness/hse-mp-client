import { analyticsPageStyle as style } from './analytics-page.style';
import { ProductCompetitors } from './components/product-competitors';
import { TopProducts } from './components/top-products/top-products';

export const AnalyticsPage = (): JSX.Element => {
  return (
    <div className={style.wrapper}>
      <ProductCompetitors />
      <TopProducts />
    </div>
  );
};
