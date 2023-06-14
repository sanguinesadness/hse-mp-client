import { css } from '@emotion/css';

export const productsDetailPageStyle = {
  wrapper: css``,
  body: {
    wrapper: css`
      display: flex;
      flex-direction: column;
    `,
    title: css`
      font-size: 26px;
      font-weight: 500;
      margin-bottom: 20px;
    `,
    details: {
      wrapper: css`
        padding: 20px 0;
      `,
      photoViewer: {
        wrapper: css``
      },
      fields: {
        wrapper: css``
      }
    }
  }
};
