import { css } from '@emotion/css';
import { ColorsBasicEnum, ColorsShadesEnum } from 'consts';

export const productBlockStyle = {
  wrapper: css``,
  self: {
    wrapper: css`
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 20px;
      padding: 10px;
      border-radius: 10px;
      cursor: pointer;
      transition: 200ms ease all;

      :hover {
        transform: translateY(-2px);
      }
    `,
    counter: css`
      font-size: 40px;
      font-weight: 600;
      min-width: 46px;
    `,
    image: {
      wrapper: css`
        width: 40px;
        height: 40px;
        margin-left: auto;
      `,
      self: css`
        width: 100%;
        height: 100%;
        border-radius: 5px;
        box-shadow: 0 2px 7px rgb(0, 0, 0, 0.2);
      `
    },
    name: css`
      font-size: 20px;
      font-weight: 300;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    `,
    expandButton: {
      wrapper: {
        default: css`
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-left: auto;
          transition: 200ms ease all;
        `,
        rotated: css`
          transform: rotateX(180deg);
        `
      },
      icon: css`
        width: 50px;
        height: 40px;

        * {
          fill: ${ColorsBasicEnum.PRIMARY};
        }
      `,
      text: css`
        font-weight: 500;
        font-size: 14px;
      `
    }
  },
  resultCount: {
    wrapper: css`
      display: flex;
      flex-direction: row;
      gap: 5px;
      color: ${ColorsShadesEnum.GRAY_800};
      padding-left: 76px;
    `,
    text: css`
      font-weight: 300;
    `,
    value: css`
      font-weight: 400;
    `
  },
  competitors: {
    wrapper: css`
      padding: 30px 0;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      row-gap: 40px;
      column-gap: 20px;
      justify-items: center;
    `
  }
};
