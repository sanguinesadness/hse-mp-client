import { css, cx } from '@emotion/css';
import { ColorsBasicEnum, FontsBasic } from 'consts';

export const logoStyle = {
  wrapper: css`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 16px;
    cursor: pointer;
  `,
  icon: {
    small: css`
      height: 50px;
      width: 50px;
    `,
    large: css`
      height: 70px;
      width: 70px;
    `
  },
  text: {
    default: cx(
      FontsBasic.BUNGEE,
      css`
        background: linear-gradient(
          90deg,
          ${ColorsBasicEnum.LIME_GREEN} -29.57%,
          ${ColorsBasicEnum.BLUE_PILLOW} 136.02%
        );
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        transition: 0.7s ease all;
      `
    ),
    small: css`
      font-size: 18px;
    `,
    large: css`
      font-size: 24px;
    `,
    hover: css`
      background-position-x: 69px;
    `
  }
};
