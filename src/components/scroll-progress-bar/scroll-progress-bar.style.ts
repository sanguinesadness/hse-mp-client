import { css } from '@emotion/css';
import { ColorsBasicEnum } from 'consts';

export const scrollProgressBarStyle = {
  wrapper: css`
    width: 100vw;
    height: 4px;
    background: ${ColorsBasicEnum.WHITE};
    position: relative;
  `,
  bar: css`
    width: 0;
    height: 100%;
    background: linear-gradient(
      91.05deg,
      ${ColorsBasicEnum.PRIMARY} 11.95%,
      ${ColorsBasicEnum.BLUE_PILLOW} 67.43%,
      ${ColorsBasicEnum.LIME_GREEN} 117.42%
    );
    position: absolute;
    top: 0;
    left: 0;
    transition: 0.5s ease all;
  `
};
