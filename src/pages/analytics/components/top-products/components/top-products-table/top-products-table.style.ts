import { css } from '@emotion/css';
import { SMOOTH_BOUNCE_EASE } from 'consts';

export const topProductsTableStyle = {
  wrapper: css``,
  table: {
    wrapper: css`
      border-collapse: collapse;
    `,
    head: {
      wrapper: css``,
      row: {
        wrapper: css``,
        cell: {
          default: css`
            border: none;
            padding: 10px;
            text-align: left;
            font-weight: 500;
          `,
          image: css`
            width: 100px;
          `,
          title: css`
            width: 40%;
          `,
          newPrice: css`
            width: 20%;
          `,
          oldPrice: css`
            width: 20%;
          `,
          rating: css``,
          comments: css``
        }
      }
    },
    body: {
      wrapper: css``,
      row: {
        wrapper: css`
          cursor: pointer;
          transition: 300ms ${SMOOTH_BOUNCE_EASE} all;

          :hover {
            transform: scale(1.01);
          }
        `,
        cell: {
          default: css`
            padding: 10px;
            border: none;
            font-weight: 300;
          `,
          image: {
            wrapper: css`
              display: flex;
              align-items: center;
              justify-content: center;
              width: 100px;
              height: 100px;
            `,
            self: css`
              max-height: 100%;
              max-width: 100%;
              border-radius: 5px;
            `
          },
          title: css`
            width: 40%;
          `,
          newPrice: css`
            width: 20%;
          `,
          oldPrice: css`
            width: 20%;
          `,
          rating: css``,
          comments: css``
        }
      }
    }
  }
};
