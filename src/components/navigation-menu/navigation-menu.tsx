import { cx } from '@emotion/css';
import { ClientRoutesNamesMap, RoutesEnum } from 'consts';
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
      {Object.entries(ClientRoutesNamesMap).map(
        ([route, text]: [string, string]) => (
          <div
            key={route}
            onClick={handleMenuItemClick(route as RoutesEnum)}
            className={cx(style.listItem.default, {
              [style.listItem.selected]: location.pathname === route
            })}>
            {text}
          </div>
        )
      )}
    </div>
  );
};
