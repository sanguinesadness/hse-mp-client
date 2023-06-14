import { TProductWithCompetitors } from 'api/models';
import { ReactComponent as DownloadIcon } from 'assets/icons/download.svg';
import { ReactComponent as RefreshIcon } from 'assets/icons/refresh.svg';
import { ContentLoader } from 'components/content-loader';
import { observer } from 'mobx-react';
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
    void productsWithCompetitorsStore.loadData(true);
  };

  return (
    <div className={style.wrapper}>
      <div className={style.header.wrapper}>
        <div className={style.header.texts.wrapper}>
          <div className={style.header.texts.title}>Товары конкурентов</div>
          <div className={style.header.texts.description}>
            Посмотрите, какие товары, похожие на Ваши, были найдены на Ozon у
            конкурентов
          </div>
        </div>
        <div className={style.header.buttons.wrapper}>
          <div className={style.header.buttons.button.wrapper}>
            <div className={style.header.buttons.button.icon.wrapper}>
              <DownloadIcon className={style.header.buttons.button.icon.svg} />
            </div>
            <span className={style.header.buttons.button.text}>Скачать</span>
          </div>
          <div
            className={style.header.buttons.button.wrapper}
            onClick={handleRefreshClick}>
            <div className={style.header.buttons.button.icon.wrapper}>
              <RefreshIcon className={style.header.buttons.button.icon.svg} />
            </div>
            <span className={style.header.buttons.button.text}>Обновить</span>
          </div>
        </div>
      </div>
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
