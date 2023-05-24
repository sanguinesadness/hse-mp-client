import { css } from '@emotion/css';
import { ColorsBasicEnum } from 'consts';

export const navigationMenuStyle = {
  list: css`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 40px;
  `,
  listItem: {
    default: css`
      font-weight: 300;
      cursor: pointer;
      letter-spacing: 2px;
      text-transform: uppercase;
      padding: 2px;
      transition: 200ms ease all;
      border-bottom: 1px solid ${ColorsBasicEnum.TRANSPARENT};
    `,
    selected: css`
      border-color: ${ColorsBasicEnum.PRIMARY};
    `
  }
};
