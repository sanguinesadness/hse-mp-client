import { css, cx } from '@emotion/css';
import { ColorsShadesEnum, FontsBasic } from 'consts';

export const authFormStyle = {
  wrapper: css`
    width: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
  `,
  label: cx(
    FontsBasic.BUNGEE,
    css`
      font-size: 24px;
      text-transform: uppercase;
      padding: 10px 15px;
      border-radius: 10px;
      background: ${ColorsShadesEnum.GRAY_400};
    `
  ),
  title: css`
    text-align: center;
  `,
  fields: css`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
  `,
  buttons: css`
    display: grid;
    grid-template-columns: 1.3fr 2fr;
    gap: 10px;
    width: 100%;
  `
};
