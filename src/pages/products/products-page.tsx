import { ReactComponent as BallotIcon } from 'assets/icons/ballot.svg';
import { ReactComponent as PlusSquareIcon } from 'assets/icons/square-plus (1).svg';
import { ReactComponent as TrashIcon } from 'assets/icons/trash.svg';
import { PageMenu, TPageMenuItem } from 'components/page-menu';
import { Separator } from 'components/separator';
import { observer } from 'mobx-react';
import { ActiveProductsList } from 'pages/products/components/active-products-list';
import { ArchivedProductsList } from 'pages/products/components/archived-products-list';
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
  const { activeProducts, archivedProducts, isLoading } = productsStore;

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
      {selectedTab === TabsEnum.LIST && (
        <ActiveProductsList products={activeProducts} isLoading={isLoading} />
      )}
      {selectedTab === TabsEnum.ARCHIVE && (
        <ArchivedProductsList
          products={archivedProducts}
          isLoading={isLoading}
        />
      )}
      <Separator height={40} />
    </div>
  );
});
