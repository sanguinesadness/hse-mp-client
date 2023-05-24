import { RoutesEnum } from 'consts/routes-enum';

export type TNavigationMenuItem = {
  text: string;
  route: RoutesEnum;
};

export const NavigationMenuItems: Array<TNavigationMenuItem> = [
  {
    text: 'Главная',
    route: RoutesEnum.HOME
  },
  {
    text: 'Товары',
    route: RoutesEnum.PRODUCTS
  },
  {
    text: 'Склады',
    route: RoutesEnum.WAREHOUSES
  },
  {
    text: 'Аналитика',
    route: RoutesEnum.ANALYTICS
  }
];
