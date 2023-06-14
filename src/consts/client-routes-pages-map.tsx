import { RoutesEnum } from 'consts/routes-enum';
import { AnalyticsPage, HomePage, ProductsPage, WarehousesPage } from 'pages';
import { ProductsDetailPage } from 'pages/products-detail';

export type TClientRoutes =
  | RoutesEnum.HOME
  | RoutesEnum.PRODUCTS
  | RoutesEnum.PRODUCTS_DETAIL
  | RoutesEnum.WAREHOUSES
  | RoutesEnum.ANALYTICS;

export const ClientRoutesPagesMap: Record<TClientRoutes, JSX.Element> = {
  [RoutesEnum.HOME]: <HomePage />,
  [RoutesEnum.PRODUCTS]: <ProductsPage />,
  [RoutesEnum.PRODUCTS_DETAIL]: <ProductsDetailPage />,
  [RoutesEnum.ANALYTICS]: <AnalyticsPage />,
  [RoutesEnum.WAREHOUSES]: <WarehousesPage />
};

export const ClientNamesRoutesMap: Record<string, Array<TClientRoutes>> = {
  ['Главная']: [RoutesEnum.HOME],
  ['Товары']: [RoutesEnum.PRODUCTS, RoutesEnum.PRODUCTS_DETAIL],
  ['Склады']: [RoutesEnum.WAREHOUSES],
  ['Аналитика']: [RoutesEnum.ANALYTICS]
};
