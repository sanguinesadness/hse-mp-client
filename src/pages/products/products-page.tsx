import { cx } from '@emotion/css';
import { ReactComponent as SquarePlusIcon } from 'assets/icons/ballot.svg';
import { ReactComponent as CaretDownIcon } from 'assets/icons/caret-down.svg';
import { ReactComponent as PlusSquareIcon } from 'assets/icons/square-plus (1).svg';
import { ReactComponent as TrashIcon } from 'assets/icons/trash.svg';
import { ContentLoader } from 'components/content-loader';
import { observer } from 'mobx-react';
import { ProductCard } from 'pages/products/components/product-card';
import { useEffect } from 'react';
import { productsStore } from 'stores/products.store';
import { productsPageStyle as style } from './products-page.style';

export const ProductsPage = observer((): JSX.Element => {
  const { products, isLoading } = productsStore;

  useEffect(() => {
    productsStore.init();
    return () => productsStore.destroy();
  }, []);

  return (
    <div className={style.wrapper}>
      <div className={style.menu.wrapper}>
        <div className={style.menu.item.wrapper.default}>
          <PlusSquareIcon className={style.menu.item.icon} />
          <span className={style.menu.item.text}>Добавить</span>
        </div>
        <div
          className={cx(
            style.menu.item.wrapper.default,
            style.menu.item.wrapper.selected
          )}>
          <SquarePlusIcon className={style.menu.item.icon} />
          <span className={style.menu.item.text}>Мои товары</span>
        </div>
        <div className={style.menu.item.wrapper.default}>
          <TrashIcon className={style.menu.item.icon} />
          <span className={style.menu.item.text}>Архив</span>
        </div>
      </div>
      <div className={style.header.wrapper}>
        <div className={style.header.titleBlock.wrapper}>
          <span className={style.header.titleBlock.title}>Мои товары</span>
          <span className={style.header.titleBlock.description}>
            Список ваших товаров, участвующих в продаже на маркетплейсе
          </span>
        </div>
        <div className={style.header.filterBlock.wrapper}>
          <CaretDownIcon className={style.header.filterBlock.icon} />
          <div className={style.header.filterBlock.text}>Дата добавления</div>
        </div>
      </div>
      {isLoading ? (
        <ContentLoader />
      ) : (
        <div className={style.grid.wrapper}>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
});
