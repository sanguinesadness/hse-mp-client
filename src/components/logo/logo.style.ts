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
  icon: css`
    height: 50px;
    width: 50px;
  `,
  text: {
    default: cx(
      FontsBasic.BUNGEE,
      css`
        font-size: 18px;
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
    hover: css`
      background-position-x: 69px;
    `
  }
};
