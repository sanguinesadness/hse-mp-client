import { TProductCompetitor, TProductWithCompetitors } from 'api/models';
import { ReactComponent as DownloadIcon } from 'assets/icons/download.svg';
import { ReactComponent as RefreshIcon } from 'assets/icons/refresh.svg';
import { useEffect } from 'react';
import { productsWithCompetitorsStore } from 'stores';
import { ProductCompetitorCard } from './components/product-competitor-card';
import { productCompetitorsStyle as style } from './product-competitors.style';

export const ProductCompetitors = (): JSX.Element => {
  const { productsWithCompetitors } = productsWithCompetitorsStore;

  useEffect(() => {
    productsWithCompetitorsStore.init();
    return () => {
      productsWithCompetitorsStore.destroy();
    };
  }, []);

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
          <div className={style.header.buttons.button.wrapper}>
            <div className={style.header.buttons.button.icon.wrapper}>
              <RefreshIcon className={style.header.buttons.button.icon.svg} />
            </div>
            <span className={style.header.buttons.button.text}>Обновить</span>
          </div>
        </div>
      </div>
      <div className={style.body.wrapper}>
        <div className={style.body.products.wrapper}>
          {productsWithCompetitors.map(
            (product: TProductWithCompetitors, productIndex: number) => (
              <div
                key={product.id}
                className={style.body.products.product.wrapper}>
                <div className={style.body.products.product.self.wrapper}>
                  <div className={style.body.products.product.self.counter}>
                    {productIndex + 1}
                  </div>
                  <div className={style.body.products.product.self.name}>
                    {product.name}
                  </div>
                  {product.primaryImage && (
                    <div
                      className={
                        style.body.products.product.self.image.wrapper
                      }>
                      <img
                        alt=""
                        className={style.body.products.product.self.image.self}
                        src={product.primaryImage}
                      />
                    </div>
                  )}
                </div>
                <div
                  className={style.body.products.product.competitors.wrapper}>
                  {product.competitors.map((competitor: TProductCompetitor) => (
                    <ProductCompetitorCard
                      key={competitor.id}
                      competitor={competitor}
                    />
                  ))}
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};
