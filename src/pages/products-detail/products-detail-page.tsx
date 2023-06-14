import { ReactComponent as EyeIcon } from 'assets/icons/eye.svg';
import { ReactComponent as TextIcon } from 'assets/icons/text.svg';
import { ReactComponent as TrashIcon } from 'assets/icons/trash.svg';
import { ContextualNotification } from 'components/contextual-notification';
import { PageMenu, TPageMenuItem } from 'components/page-menu';
import { observer } from 'mobx-react';
import { PhotoViewer } from 'pages/products-detail/components/photo-viewer';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { productsStore } from 'stores';
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
  const product = productsStore.getProduct(parseInt(id ?? '', 10));
  const [selectedTab, setSelectedTab] = useState<TabsEnum>(TabsEnum.VIEW);

  const handleTabChange = (tab: TabsEnum): void => {
    setSelectedTab(tab);
  };

  if (!product) {
    return <div>Неизвестный Id продукта</div>;
  }

  return (
    <div className={style.wrapper}>
      <PageMenu
        value={selectedTab}
        items={PAGE_MENU_ITEMS}
        onChange={handleTabChange}
      />
      <div className={style.body.wrapper}>
        <div className={style.body.title}>{product.name}</div>
        {product.status.stateTooltip && (
          <ContextualNotification text={product.status.stateTooltip} />
        )}
        <div className={style.body.details.wrapper}>
          <div className={style.body.details.photoViewer.wrapper}>
            <PhotoViewer
              primaryImage={product.primaryImage}
              secondaryImages={product.images}
            />
          </div>
          <div className={style.body.details.fields.wrapper}></div>
        </div>
      </div>
    </div>
  );
});
