import { css } from '@emotion/css';
import { ColorsSuccessEnum } from 'consts';

export const productsPageStyle = {
  wrapper: css``,
  menu: {
    wrapper: css`
      padding: 40px 0;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    `,
    item: {
      wrapper: {
        default: css`
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 20px;
          padding: 15px 35px;
          border-radius: 10px;
          transition: 200ms ease all;
          cursor: pointer;
        `,
        selected: css`
          background: ${ColorsSuccessEnum.SUCCESS_300};
        `
      },
      icon: css`
        height: 34px;
        width: 34px;
      `,
      text: css`
        font-size: 20px;
        font-weight: 600;
      `
    }
  },
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
