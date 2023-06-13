import { analyticsPageStyle as style } from './analytics-page.style';
import { ProductCompetitors } from './components/product-competitors';

export const AnalyticsPage = (): JSX.Element => {
  return (
    <div className={style.wrapper}>
      <ProductCompetitors />
    </div>
  );
};
