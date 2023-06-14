import { TProductWithCompetitors } from 'api/models';
import { ContentLoader } from 'components/content-loader';
import { observer } from 'mobx-react';
import { SectionTitle } from 'pages/analytics/components/section-title';
import { useEffect } from 'react';
import { productsWithCompetitorsStore } from 'stores';
import { ProductBlock } from './components/product-block';
import { productCompetitorsStyle as style } from './product-competitors.style';

export const ProductCompetitors = observer((): JSX.Element => {
  const { productsWithCompetitors, isLoading } = productsWithCompetitorsStore;

  useEffect(() => {
    productsWithCompetitorsStore.init();
    return () => {
      productsWithCompetitorsStore.destroy();
    };
  }, []);

  const handleRefreshClick = (): void => {
    // void productsWithCompetitorsStore.fakeRefresh();
    void productsWithCompetitorsStore.loadData();
  };

  const handleDownloadClick = (): void => {
    void productsWithCompetitorsStore.download();
  };

  return (
    <div className={style.wrapper}>
      <SectionTitle
        title="Товары конкурентов"
        description="Ознакомьтесь с товарами, найденными на платформе Ozon у ваших конкурентов, которые схожи с вашими. Эта информация позволит вам получить представление о продуктах, которые предлагаются конкурентами на рынке."
        onDownload={handleDownloadClick}
        onRefresh={handleRefreshClick}
      />
      <div className={style.body.wrapper}>
        {isLoading ? (
          <ContentLoader />
        ) : (
          <div className={style.body.products.wrapper}>
            {productsWithCompetitors.map(
              (product: TProductWithCompetitors, index: number) => (
                <ProductBlock
                  key={product.id}
                  product={product}
                  index={index}
                />
              )
            )}
          </div>
        )}
      </div>
    </div>
  );
});
