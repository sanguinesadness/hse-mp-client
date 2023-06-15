import { TOzonProduct } from 'api/models/ozon-product.model';
import { ReactComponent as CaretDownIcon } from 'assets/icons/caret-down.svg';
import { ContentLoader } from 'components/content-loader';
import { ProductCard } from 'pages/products/components/product-card';
import { productsPageStyle as style } from 'pages/products/products-page.style';

type TArchivedProductsList = {
  products: Array<TOzonProduct>;
  isLoading: boolean;
};

export const ArchivedProductsList = ({
  products,
  isLoading
}: TArchivedProductsList): JSX.Element => {
  return (
    <>
      <div className={style.header.wrapper}>
        <div className={style.header.titleBlock.wrapper}>
          <span className={style.header.titleBlock.title}>Архивные товары</span>
          <span className={style.header.titleBlock.description}>
            Список товаров, которые были добавлены в архив и временно не
            доступны для продажи на площадке
          </span>
        </div>
        <div className={style.header.filterBlock.wrapper}>
          <CaretDownIcon className={style.header.filterBlock.icon} />
          <div className={style.header.filterBlock.text}>Дата</div>
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
    </>
  );
};
