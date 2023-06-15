import { ReactComponent as AddDocumentIcon } from 'assets/icons/add-document.svg';
import { ReactComponent as BallotIcon } from 'assets/icons/ballot.svg';
import { ReactComponent as ChartIcon } from 'assets/icons/chart-network.svg';
import { ReactComponent as EyeIcon } from 'assets/icons/eye.svg';
import { ReactComponent as FileMinusIcon } from 'assets/icons/file-minus.svg';
import { ReactComponent as ListTimelineIcon } from 'assets/icons/list-timeline.svg';
import { ReactComponent as TextIcon } from 'assets/icons/text.svg';
import { ReactComponent as TrashIcon } from 'assets/icons/trash.svg';
import { RoutesEnum } from 'consts';
import { ContentBlock } from 'pages/home/components/content-block';
import { useNavigate } from 'react-router-dom';
import { homePageStyle as style } from './home-page.style';

export const HomePage = (): JSX.Element => {
  const navigate = useNavigate();

  const handleProductsClick = (): void => {
    navigate(RoutesEnum.PRODUCTS);
  };

  const handleAnalyticsClick = (): void => {
    navigate(RoutesEnum.ANALYTICS);
  };

  return (
    <div className={style.wrapper}>
      <ContentBlock
        title="Загрузка и обновление товаров"
        description="Добавляйте новый товары на площадку с помощью удобного конструктора, просматривайте список существующих и добавляйте в архив."
        navButtons={[
          {
            title: 'Создание',
            description:
              'Ручное добавление товара с ценами, весом и мультимедиа',
            icon: AddDocumentIcon,
            onClick: handleProductsClick
          },
          {
            title: 'Просмотр',
            description:
              'Список товаров с возможностью просмотра и редактирования деталей',
            icon: ListTimelineIcon,
            onClick: handleProductsClick
          },
          {
            title: 'Архив',
            description:
              'Список перемещенных товаров в архив. Можно вернуть в любой момент',
            icon: FileMinusIcon,
            onClick: handleProductsClick
          }
        ]}
      />
      <ContentBlock
        title="Управление товарами"
        description="Просматривайте детали товаров, редактируйте любые доступные поля, загружайте фотографии и перемещайте товары в архив."
        navButtons={[
          {
            title: 'Детали',
            description:
              'Просмотр деталей товара: штрихкод, цены, остатки, фото и видео',
            icon: EyeIcon,
            onClick: handleProductsClick
          },
          {
            title: 'Редактирование',
            description: 'Изменение любой доступной информации о товаре',
            icon: TextIcon,
            onClick: handleProductsClick
          },
          {
            title: 'Удаление',
            description:
              'Перемещение ненужного товара в архив. Мгновенное применение изменений',
            icon: TrashIcon,
            onClick: handleProductsClick
          }
        ]}
      />
      <ContentBlock
        title="Продуктовая аналитика"
        description="Будьте в курсе событий, происходящих на рынке прямо сейчас. В вашем распоряжении постоянно обновляемая статистика о конкурентах и самых продаваемых товарах в разных категориях в данный момент"
        navButtons={[
          {
            title: 'Конкуренты',
            description:
              'Товары прямых конкурентов, разбитые по названиям из Вашего ассортимента',
            icon: BallotIcon,
            onClick: handleAnalyticsClick
          },
          {
            title: 'Топ продаж',
            description:
              'Список самых популярных товаров с маркетплейса Ozon за последние 2 недели',
            icon: ChartIcon,
            onClick: handleAnalyticsClick
          }
        ]}
      />
    </div>
  );
};
