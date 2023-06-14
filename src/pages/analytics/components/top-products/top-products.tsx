import { ContentLoader } from 'components/content-loader';
import { observer } from 'mobx-react';
import { SectionTitle } from 'pages/analytics/components/section-title';
import { TopProductsTable } from 'pages/analytics/components/top-products/components/top-products-table';
import { useEffect } from 'react';
import { topProductsStore } from 'stores';
import { topProductsStyle as style } from './top-products.style';

export const TopProducts = observer((): JSX.Element => {
  const { topProducts, isLoading } = topProductsStore;

  useEffect(() => {
    topProductsStore.init();
    return () => {
      topProductsStore.destroy();
    };
  }, []);

  const handleRefreshClick = (): void => {
    // void topProductsStore.fakeRefresh();
    void topProductsStore.loadData();
  };

  const handleDownloadClick = (): void => {
    void topProductsStore.download();
  };

  return (
    <div className={style.wrapper}>
      <SectionTitle
        title="Что продавать?"
        description="Данные с публичных распродаж на Ozon, показывающие самые популярные товары за последнюю неделю. Cобираются и обновляются каждые 12 часов, чтобы отразить актуальную популярность товаров. Используя эту информацию, вы можете увидеть, какие товары на данный момент продаются лучше всего на платформе Ozon."
        onDownload={handleDownloadClick}
        onRefresh={handleRefreshClick}
      />
      <div className={style.body.wrapper}>
        {isLoading ? (
          <ContentLoader />
        ) : (
          <div className={style.body.products.wrapper}>
            <TopProductsTable products={topProducts} />
          </div>
        )}
      </div>
    </div>
  );
});
