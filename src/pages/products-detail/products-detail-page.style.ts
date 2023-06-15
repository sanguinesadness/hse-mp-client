import { css } from '@emotion/css';

export const productsDetailPageStyle = {
  wrapper: css``,
  modal: {
    wrapper: css`
      max-width: 400px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 20px;
    `,
    title: css`
      font-weight: 500;
      font-size: 24px;
      align-items: center;
    `,
    texts: {
      wrapper: css`
        display: flex;
        flex-direction: column;
      `,
      main: css`
        text-align: center;
      `,
      bold: css`
        font-weight: 500;
        text-align: center;
      `
    },
    buttons: {
      wrapper: css`
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        gap: 10px;
        width: 100%;
      `,
      button: css`
        width: 100%;
      `
    }
  }
};
