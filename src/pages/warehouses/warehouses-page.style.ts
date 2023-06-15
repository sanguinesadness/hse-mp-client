import { css } from '@emotion/css';
import { ColorsBasicEnum, ColorsShadesEnum } from 'consts';

export const warehousesPageStyle = {
  wrapper: css`
    padding: 60px 0;
    display: flex;
    flex-direction: column;
    gap: 60px;
  `,
  buttons: css`
    display: flex;
    flex-direction: row;
    gap: 20px;
  `,
  warehouses: {
    wrapper: css`
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 10px;
    `,
    warehouse: {
      wrapper: css`
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        gap: 10px;
        border-radius: 10px;
        padding: 10px;
        background: ${ColorsBasicEnum.WHITE};
        border: 1px solid ${ColorsShadesEnum.GRAY_400};
      `,
      title: css`
        font-size: 12px;
      `,
      deleteButton: {
        wrapper: css`
          cursor: pointer;

          :hover {
            * {
              fill: ${ColorsBasicEnum.PRIMARY};
            }
          }
        `,
        icon: css`
          width: 20px;
          height: 20px;

          * {
            transition: 100ms ease all;
            fill: ${ColorsShadesEnum.GRAY_800};
          }
        `
      }
    }
  }
};
