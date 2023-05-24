import { css, cx } from '@emotion/css';
import { FontsBasic } from 'consts';

export const logoStyle = {
  wrapper: css`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 15px;
  `,
  icon: css`
    height: 50px;
    width: 50px;
  `,
  text: cx(
    FontsBasic.BUNGEE,
    css`
      font-size: 18px;
      background: linear-gradient(90deg, #0fffa9 -29.57%, #4970fb 136.02%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    `
  )
};
