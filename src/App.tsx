import { css, cx } from '@emotion/css';
import { FullPageLoader } from 'components/full-page-loader';
import { ColorsBasicEnum, FontsBasic, RoutesEnum } from 'consts';
import { observer } from 'mobx-react';
import { AuthPage, ClientRootPage } from 'pages';
import React, { useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { authStore } from 'stores';

const router = createBrowserRouter([
  {
    path: RoutesEnum.ROOT,
    element: <AuthPage />
  },
  {
    path: RoutesEnum.AUTH,
    element: <AuthPage />
  },
  {
    path: RoutesEnum.HOME,
    element: <ClientRootPage route={RoutesEnum.HOME} />
  },
  {
    path: RoutesEnum.PRODUCTS,
    element: <ClientRootPage route={RoutesEnum.PRODUCTS} />
  },
  {
    path: RoutesEnum.WAREHOUSES,
    element: <ClientRootPage route={RoutesEnum.WAREHOUSES} />
  },
  {
    path: RoutesEnum.ANALYTICS,
    element: <ClientRootPage route={RoutesEnum.ANALYTICS} />
  }
]);

const appStyle = cx(
  FontsBasic.RUBIK,
  css`
    color: ${ColorsBasicEnum.PRIMARY};
    font-size: 16px;
  `
);

export const App = observer((): JSX.Element => {
  useEffect(() => {
    void authStore.checkAuth();
  }, []);

  if (authStore.isLoading) {
    return <FullPageLoader />;
  }

  return (
    <div className={appStyle}>
      <RouterProvider router={router} />
    </div>
  );
});
