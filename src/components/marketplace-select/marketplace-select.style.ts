import { css, cx } from '@emotion/css';
import { ColorsShadesEnum, FontsBasic } from 'consts';

export const marketplaceSelectStyle = {
  wrapper: css`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;
  `,
  list: css`
    display: flex;
    flex-direction: column;
  `,
  listItem: {
    default: cx(
      FontsBasic.BUNGEE,
      css`
        border-radius: 5px;
        padding: 2px 8px;
        text-align: center;
        cursor: pointer;
        font-size: 14px;
        transition: 200ms ease all;
      `
    ),
    selected: css`
      background: ${ColorsShadesEnum.GRAY_400};
    `
  },
  imgWrapper: css`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 3px;
    height: 50px;
    width: 50px;
    border-radius: 50%;
    box-shadow: 0 2px 4px rgb(0, 0, 0, 0.25);
    cursor: pointer;
    transition: 200ms ease all;

    &:hover {
      transform: translate(0.5px, 0.5px);
      box-shadow: 0 1.5px 4px rgba(0, 0, 0, 0.25);
    }
  `,
  img: css`
    border-radius: 50%;
    height: 100%;
    width: 100%;
  `
};
