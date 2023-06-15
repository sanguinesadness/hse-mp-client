import { css } from '@emotion/css';

export const productEditStyle = {
  wrapper: css`
    display: flex;
    flex-direction: column;
    gap: 60px;
  `,
  buttons: {
    wrapper: css`
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 20px;
    `
  },
  inputBlock: {
    wrapper: css`
      display: flex;
      flex-direction: column;
      gap: 20px;
    `,
    title: css`
      font-size: 24px;
      font-weight: 500;
    `,
    content: {
      wrapper: css`
        display: flex;
        flex-direction: column;
        gap: 20px;
      `,
      singleInput: css``,
      gridInput: css`
        display: grid;
        grid-template-columns: 1fr 1fr;
        row-gap: 20px;
        column-gap: 40px;
      `
    }
  }
};
