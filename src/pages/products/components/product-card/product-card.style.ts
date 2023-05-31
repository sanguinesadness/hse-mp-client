import { css } from '@emotion/css';
import { ColorsBasicEnum, ColorsShadesEnum, SMOOTH_BOUNCE_EASE } from 'consts';

export const productCardStyle = {
  wrapper: {
    default: css`
      display: flex;
      flex-direction: column;
      cursor: pointer;
      width: 400px;
      min-height: 240px;
      transition: 300ms ${SMOOTH_BOUNCE_EASE} all;
    `,
    hovered: css`
      transform: scale(1.02);
    `
  },
  body: {
    wrapper: css`
      display: flex;
      flex-direction: row;
      gap: 20px;
      padding: 10px 15px;
    `,
    image: {
      wrapper: css`
        display: flex;
        align-items: flex-start;
        justify-content: center;
      `,
      self: css`
        max-width: 120px;
        max-height: 180px;
        border-radius: 10px;
      `
    },
    info: {
      wrapper: css`
        display: flex;
        flex-direction: column;
        gap: 12px;
        padding: 5px 0;
      `,
      priceDate: {
        wrapper: css`
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: flex-end;
        `,
        price: css`
          font-size: 20px;
          font-weight: 600;
        `,
        date: css`
          font-size: 14px;
          font-weight: 600;
          color: ${ColorsShadesEnum.GRAY_600};
        `
      },
      title: {
        wrapper: css`
          max-width: 100%;
        `,
        self: css`
          max-width: 100%;
        `
      },
      additional: {
        wrapper: css`
          display: flex;
          align-items: center;
          justify-content: space-between;
        `,
        barcodeOffer: {
          wrapper: css`
            display: flex;
            flex-direction: column;
            gap: 5px;
          `,
          item: css`
            font-weight: 600;
            color: ${ColorsShadesEnum.GRAY_600};
          `
        },
        fboFbs: {
          wrapper: css`
            display: flex;
            flex-direction: column;
            gap: 5px;
          `,
          item: {
            wrapper: css`
              display: flex;
              flex-direction: row;
              align-items: center;
              gap: 10px;
            `,
            text: css`
              font-weight: 600;
            `,
            icon: {
              default: css`
                width: 14px;
                height: 14px;
              `,
              negative: css`
                * {
                  fill: ${ColorsBasicEnum.ERROR_RED};
                }
              `,
              positive: css`
                * {
                  fill: ${ColorsBasicEnum.SUCCESS_GREEN};
                }
              `
            }
          }
        }
      }
    }
  },
  footer: {
    wrapper: css`
      padding: 10px 15px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      border-radius: 10px;
      font-size: 14px;
      margin-top: auto;
      background: ${ColorsShadesEnum.GRAY_200};
    `,
    weightAmount: {
      wrapper: css`
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 5px;
      `,
      weight: css`
        font-weight: 500;
      `,
      amount: css``
    },
    status: {
      wrapper: css`
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        gap: 5px;
      `,
      name: css`
        font-weight: 500;
      `,
      description: css``
    }
  }
};
