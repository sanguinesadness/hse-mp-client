import { ReactComponent as EyeIcon } from 'assets/icons/eye.svg';
import { ReactComponent as TextIcon } from 'assets/icons/text.svg';
import { ReactComponent as TrashIcon } from 'assets/icons/trash.svg';
import { Button } from 'components/button';
import { ContentLoader } from 'components/content-loader';
import { Modal } from 'components/modal';
import { PageMenu, TPageMenuItem } from 'components/page-menu';
import { ButtonTypes, RoutesEnum } from 'consts';
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
  const { product, isError, isLoading, isArchived } = productDetailsStore;
  const [isArchiveLoading, setIsArchiveLoading] = useState<boolean>(false);

  useEffect(() => {
    const idNum = parseInt(id || '0');
    productDetailsStore.init(idNum);
  }, [id]);

  const handleTabChange = (tab: TabsEnum): void => {
    setSelectedTab(tab);
  };

  const handleModalClose = (): void => {
    setSelectedTab(TabsEnum.VIEW);
  };

  const handleArchiveClick = async (): Promise<void> => {
    setIsArchiveLoading(true);
    productDetailsStore.archiveProduct().finally(() => {
      handleModalClose();
      setIsArchiveLoading(false);
    });
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
      {(selectedTab === TabsEnum.VIEW || selectedTab === TabsEnum.TO_ARCHIVE) &&
        product && <ProductDetail product={product} isArchived={isArchived} />}
      {selectedTab === TabsEnum.EDIT && product && (
        <ProductEdit product={product} />
      )}
      <Modal
        isOpen={selectedTab === TabsEnum.TO_ARCHIVE}
        onClose={handleModalClose}>
        <div className={style.modal.wrapper}>
          <div className={style.modal.title}>Подтвердите действие</div>
          <div className={style.modal.texts.wrapper}>
            <span className={style.modal.texts.main}>
              Вы уверены, что хотите перенести в архив товар
            </span>
            <span className={style.modal.texts.bold}>{product?.name}?</span>
          </div>
          <div className={style.modal.buttons.wrapper}>
            <Button
              className={style.modal.buttons.button}
              type={ButtonTypes.NEUTRAL}
              onClick={handleModalClose}>
              Отменить
            </Button>
            <Button
              className={style.modal.buttons.button}
              type={ButtonTypes.ERROR}
              isLoading={isArchiveLoading}
              onClick={handleArchiveClick}>
              Да
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
});
