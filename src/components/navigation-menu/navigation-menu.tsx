import { cx } from '@emotion/css';
import { NavigationMenuItems, RoutesEnum, TNavigationMenuItem } from 'consts';
import { useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { navigationMenuStyle as style } from './navigation-menu.style';

export const NavigationMenu = (): JSX.Element => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleMenuItemClick = useCallback((route: RoutesEnum) => {
    return () => navigate(route);
  }, []);

  return (
    <div className={style.list}>
      {NavigationMenuItems.map((item: TNavigationMenuItem) => (
        <div
          key={item.route}
          onClick={handleMenuItemClick(item.route)}
          className={cx(style.listItem.default, {
            [style.listItem.selected]: location.pathname === item.route
          })}>
          {item.text}
        </div>
      ))}
    </div>
  );
};
