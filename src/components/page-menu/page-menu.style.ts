import { css } from '@emotion/css';
import { ColorsSuccessEnum } from 'consts';

export const pageMenuStyle = {
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
};
