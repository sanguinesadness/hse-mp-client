import { css } from '@emotion/css';
import { ColorsBasicEnum, SMOOTH_BOUNCE_EASE } from 'consts';

export const tooltipStyle = {
  wrapper: css`
    position: relative;
  `,
  text: {
    default: css`
      position: absolute;
      padding: 5px 15px;
      border-radius: 10px;
      box-shadow: 0 2px 10px rgb(0, 0, 0, 0.1);
      background: ${ColorsBasicEnum.WHITE};
      text-align: center;
      white-space: nowrap;
      overflow: hidden;
      z-index: 10;
      opacity: 0;
      transform: scale(0.5);
      transition: 200ms ${SMOOTH_BOUNCE_EASE} all;
    `,
    visible: css`
      opacity: 1;
      transform: scale(1);
    `
  },
  icon: {
    wrapper: css`
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    `,
    svg: css`
      width: 15px;
      height: 15px;
      transition: 200ms ${SMOOTH_BOUNCE_EASE} all;

      &:hover {
        transform: scale(1.1);
      }

      * {
        fill: ${ColorsBasicEnum.PRIMARY};
      }
    `
  }
};
