import { css } from '@emotion/css';

export const productsPageStyle = {
  wrapper: css``,
  header: {
    wrapper: css`
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-end;
    `,
    titleBlock: {
      wrapper: css`
        display: flex;
        flex-direction: column;
        gap: 10px;
      `,
      title: css`
        font-weight: 600;
        font-size: 30px;
      `,
      description: css``
    },
    filterBlock: {
      wrapper: css`
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 10px;
      `,
      icon: css`
        width: 25px;
        height: 25px;
      `,
      text: css`
        font-weight: 700;
      `
    }
  },
  grid: {
    wrapper: css`
      padding: 30px 0;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
      justify-items: center;
    `
  }
};
