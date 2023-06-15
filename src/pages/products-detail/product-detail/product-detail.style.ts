import { css } from '@emotion/css';

export const productDetailStyle = {
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
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    `,
    photoViewer: {
      wrapper: css``
    },
    fields: {
      wrapper: css`
        display: flex;
        flex-direction: column;
        width: 100%;
        padding-left: 30px;
      `,
      header: {
        wrapper: css`
          display: flex;
          flex-direction: row;
        `
      },
      list: {
        wrapper: css`
          display: flex;
          flex-direction: column;
          gap: 15px;
        `
      }
    }
  },
  description: {
    wrapper: css`
      display: flex;
      flex-direction: column;
      gap: 10px;
    `,
    title: css`
      font-size: 20px;
      font-weight: 500;
    `,
    text: css`
      padding: 3px 0;
      line-height: 25px;
    `
  }
};
