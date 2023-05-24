import { css } from '@emotion/css';
import {
  ColorsBasicEnum,
  DEFAULT_SIDE_PADDING,
  FOOTER_HEIGHT,
  SMOOTH_BOUNCE_EASE
} from 'consts';

export const footerStyle = {
  wrapper: css`
    height: ${FOOTER_HEIGHT};
    padding: 0 ${DEFAULT_SIDE_PADDING};
    color: ${ColorsBasicEnum.WHITE};
    font-weight: 300;
    font-size: 14px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background: linear-gradient(
      91.05deg,
      ${ColorsBasicEnum.PRIMARY} 11.95%,
      ${ColorsBasicEnum.BLUE_PILLOW} 67.43%,
      ${ColorsBasicEnum.LIME_GREEN} 117.42%
    );
  `,
  projectTitle: css`
    max-width: 400px;
  `,
  copyright: css``,
  socialButtons: css`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;
  `,
  socialButton: css`
    height: 30px;
    width: 50px;
    cursor: pointer;
    transition: 200ms ${SMOOTH_BOUNCE_EASE} all;

    &:hover {
      transform: scale(0.95);
    }
  `,
  socialButtonIcon: css`
    width: 100%;
    height: 100%;
  `
};
