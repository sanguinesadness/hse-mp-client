import { css } from '@emotion/css';
import { ColorsBasicEnum, ColorsSuccessEnum, SMOOTH_BOUNCE_EASE } from 'consts';

export const productCompetitorCardStyle = {
  wrapper: css`
    text-decoration: none;
    color: inherit;
    display: flex;
    flex-direction: column;
    gap: 10px;
    transition: 300ms ${SMOOTH_BOUNCE_EASE} all;

    :hover {
      transform: scale(1.02);
    }
  `,
  image: {
    wrapper: css`
      height: 200px;
      width: 200px;
      display: flex;
      align-items: center;
      justify-content: center;
    `,
    self: css`
      border-radius: 10px;
      max-width: 100%;
      max-height: 100%;
    `
  },
  title: {
    wrapper: css`
      max-width: 100%;
      min-height: 50px;
    `,
    self: css`
      max-width: 100%;
      font-size: 14px;
      white-space: break-spaces;
    `
  },
  price: {
    wrapper: css`
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 10px;
    `,
    newPrice: css`
      font-weight: 600;
      font-size: 20px;
      padding: 3px 7px;
      border-radius: 5px;
      background: ${ColorsSuccessEnum.SUCCESS_300};
    `,
    oldPrice: css`
      font-size: 14px;
      text-decoration: line-through;
    `
  },
  ratingComments: {
    wrapper: css`
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 20px;
    `,
    item: {
      wrapper: css`
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 5px;
      `,
      icon: {
        default: css`
          height: 14px;
          width: 14px;
        `,
        rating: css`
          * {
            fill: ${ColorsBasicEnum.GOLD};
          }
        `,
        comment: css`
          * {
            fill: ${ColorsBasicEnum.PRIMARY};
          }
        `
      },
      value: css`
        font-weight: 500;
        font-size: 14px;
      `
    }
  }
};
