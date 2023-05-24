import { css, cx } from '@emotion/css';
import { ColorsBasicEnum, FontsBasic, Routes } from 'consts';
import 'index.scss';
import { HomePage } from 'pages';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: Routes.ROOT,
    element: <HomePage />
  },
  {
    path: Routes.HOME,
    element: <HomePage />
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
