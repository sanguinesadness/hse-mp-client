import { ReactComponent as BallotIcon } from 'assets/icons/ballot.svg';
import { ReactComponent as CaretDownIcon } from 'assets/icons/caret-down.svg';
import { ReactComponent as PlusSquareIcon } from 'assets/icons/square-plus (1).svg';
import { ReactComponent as TrashIcon } from 'assets/icons/trash.svg';
import { ContentLoader } from 'components/content-loader';
import { PageMenu, TPageMenuItem } from 'components/page-menu';
import { Separator } from 'components/separator';
import { observer } from 'mobx-react';
import { ProductCard } from 'pages/products/components/product-card';
import { useEffect, useState } from 'react';
import { productsStore } from 'stores/products.store';
import { productsPageStyle as style } from './products-page.style';

enum TabsEnum {
  ADD = 'ADD',
  LIST = 'LIST',
  ARCHIVE = 'ARCHIVE'
}

const PAGE_MENU_ITEMS: Array<TPageMenuItem<TabsEnum>> = [
  {
    value: TabsEnum.ADD,
    text: 'Добавить',
    icon: PlusSquareIcon
  },
  {
    value: TabsEnum.LIST,
    text: 'Мои товары',
    icon: BallotIcon
  },
  {
    value: TabsEnum.ARCHIVE,
    text: 'Архив',
    icon: TrashIcon
  }
];

export const ProductsPage = observer((): JSX.Element => {
  const [selectedTab, setSelectedTab] = useState<TabsEnum>(TabsEnum.LIST);
  const { products, isLoading } = productsStore;

  const handleTabChange = (tab: TabsEnum): void => {
    setSelectedTab(tab);
  };

  useEffect(() => {
    productsStore.init();
    return () => productsStore.destroy();
  }, []);

  return (
    <div className={style.wrapper}>
      <PageMenu<TabsEnum>
        items={PAGE_MENU_ITEMS}
        value={selectedTab}
        onChange={handleTabChange}
      />
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
      <Separator height={40} />
    </div>
  );
});
