import { css } from '@emotion/css';

export const contentBlockStyle = {
  wrapper: css`
    display: flex;
    flex-direction: column;
    gap: 10px;
  `,
  title: css`
    font-size: 28px;
    font-weight: 500;
  `,
  description: css``,
  buttons: {
    wrapper: css`
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 20px;
      justify-items: center;
      margin-top: 10px;
    `
  }
};
