import { css, cx } from '@emotion/css';
import { ColorsBasicEnum, FontsBasic, RoutesEnum } from 'consts';
import 'index.scss';
import { HomePage } from 'pages';
import { ClientRootPage } from 'pages/client-root-page';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: RoutesEnum.ROOT,
    element: <HomePage />
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
    padding: 0 120px;
  `
);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div className={appStyle}>
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>
);
