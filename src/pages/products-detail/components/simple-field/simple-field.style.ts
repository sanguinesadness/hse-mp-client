import { css } from '@emotion/css';
import { ColorsShadesEnum } from 'consts';

export const simpleFieldStyle = {
  wrapper: css`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  `,
  title: css`
    font-weight: 500;
  `,
  value: {
    wrapper: css`
      display: flex;
      flex-direction: row;
      gap: 5px;
    `,
    main: css`
      font-weight: 300;
    `,
    additional: css`
      font-weight: 300;
      color: ${ColorsShadesEnum.GRAY_800};
    `
  }
};
