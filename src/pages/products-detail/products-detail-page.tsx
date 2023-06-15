import { ReactComponent as EyeIcon } from 'assets/icons/eye.svg';
import { ReactComponent as TextIcon } from 'assets/icons/text.svg';
import { ReactComponent as TrashIcon } from 'assets/icons/trash.svg';
import { ContentLoader } from 'components/content-loader';
import { PageMenu, TPageMenuItem } from 'components/page-menu';
import { RoutesEnum } from 'consts';
import { observer } from 'mobx-react';
import { ProductEdit } from 'pages/products-detail/components/product-edit';
import { ProductDetail } from 'pages/products-detail/product-detail';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { productDetailsStore } from 'stores';
import { productsDetailPageStyle as style } from './products-detail-page.style';

enum TabsEnum {
  VIEW = 'VIEW',
  EDIT = 'EDIT',
  TO_ARCHIVE = 'T0_ARCHIVE'
}

const PAGE_MENU_ITEMS: Array<TPageMenuItem<TabsEnum>> = [
  {
    value: TabsEnum.VIEW,
    text: 'Просмотр',
    icon: EyeIcon
  },
  {
    value: TabsEnum.EDIT,
    text: 'Редактирование',
    icon: TextIcon
  },
  {
    value: TabsEnum.TO_ARCHIVE,
    text: 'В архив',
    icon: TrashIcon
  }
];

export const ProductsDetailPage = observer((): JSX.Element => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState<TabsEnum>(TabsEnum.VIEW);
  const { product, isError, isLoading } = productDetailsStore;

  useEffect(() => {
    const idNum = parseInt(id || '0');
    productDetailsStore.init(idNum);
  }, [id]);

  const handleTabChange = (tab: TabsEnum): void => {
    setSelectedTab(tab);
  };

  if (isError) {
    navigate(RoutesEnum.PRODUCTS);
  }

  if (isLoading) {
    return <ContentLoader />;
  }

  return (
    <div className={style.wrapper}>
      <PageMenu
        value={selectedTab}
        items={PAGE_MENU_ITEMS}
        onChange={handleTabChange}
      />
      {selectedTab === TabsEnum.VIEW && product && (
        <ProductDetail product={product} />
      )}
      {selectedTab === TabsEnum.EDIT && product && (
        <ProductEdit product={product} />
      )}
    </div>
  );
});
