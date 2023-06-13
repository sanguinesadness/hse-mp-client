import { css } from '@emotion/css';
import { ColorsBasicEnum, SMOOTH_BOUNCE_EASE } from 'consts';

export const productCompetitorsStyle = {
  wrapper: css``,
  header: {
    wrapper: css`
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    `,
    texts: {
      wrapper: css`
        display: flex;
        flex-direction: column;
        gap: 10px;
      `,
      title: css`
        font-size: 30px;
        font-weight: 600;
      `,
      description: css``
    },
    buttons: {
      wrapper: css`
        display: flex;
        flex-direction: row;
        gap: 20px;
      `,
      button: {
        wrapper: css`
          display: flex;
          align-items: center;
          flex-direction: column;
          gap: 5px;
          position: relative;
          cursor: pointer;

          transition: 300ms ${SMOOTH_BOUNCE_EASE} all;

          :hover {
            transform: scale(0.95);
          }
        `,
        icon: {
          wrapper: css`
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 12px;
            border-radius: 10px;
            background: ${ColorsBasicEnum.PRIMARY};
          `,
          svg: css`
            height: 20px;
            width: 20px;

            * {
              fill: ${ColorsBasicEnum.WHITE};
            }
          `
        },
        text: css`
          font-size: 14px;
          font-weight: 600;
        `
      }
    }
  },
  body: {
    wrapper: css``,
    products: {
      wrapper: css``,
      product: {
        wrapper: css`
          padding: 30px 0;
        `,
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
      }
    }
  }
};
