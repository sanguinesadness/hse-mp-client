import { RoutesEnum } from 'consts/routes-enum';
import { AnalyticsPage, HomePage, ProductsPage, WarehousesPage } from 'pages';

export type TClientRoutes =
  | RoutesEnum.HOME
  | RoutesEnum.PRODUCTS
  | RoutesEnum.WAREHOUSES
  | RoutesEnum.ANALYTICS;

export const ClientRoutesPagesMap: Record<TClientRoutes, JSX.Element> = {
  [RoutesEnum.HOME]: <HomePage />,
  [RoutesEnum.PRODUCTS]: <ProductsPage />,
  [RoutesEnum.ANALYTICS]: <AnalyticsPage />,
  [RoutesEnum.WAREHOUSES]: <WarehousesPage />
};
