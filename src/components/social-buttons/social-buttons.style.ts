import { css } from '@emotion/css';
import { ColorsBasicEnum, SMOOTH_BOUNCE_EASE } from 'consts';

export const socialButtonsStyle = {
  wrapper: css`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;
  `,
  socialButton: (fill: ColorsBasicEnum) => css`
    height: 30px;
    width: 50px;
    cursor: pointer;
    transition: 200ms ${SMOOTH_BOUNCE_EASE} all;

    &:hover {
      transform: scale(0.95);
    }

    * {
      fill: ${fill};
    }
  `,
  socialButtonIcon: css`
    width: 100%;
    height: 100%;
  `
};
