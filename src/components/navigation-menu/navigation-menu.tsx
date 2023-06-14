import { cx } from '@emotion/css';
import { ClientNamesRoutesMap, RoutesEnum } from 'consts';
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
      {Object.entries(ClientNamesRoutesMap).map(
        ([title, routes]: [string, Array<string>]) => (
          <div
            key={title}
            onClick={handleMenuItemClick(routes[0] as RoutesEnum)}
            className={cx(style.listItem.default, {
              [style.listItem.selected]: routes.includes(location.pathname)
            })}>
            {title}
          </div>
        )
      )}
    </div>
  );
};
