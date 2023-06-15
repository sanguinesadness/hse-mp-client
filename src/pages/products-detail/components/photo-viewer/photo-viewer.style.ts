import { css } from '@emotion/css';
import { ColorsBasicEnum, ColorsShadesEnum } from 'consts';

export const photoViewerStyle = {
  wrapper: css`
    display: flex;
    flex-direction: row;
    gap: 30px;
  `,
  list: {
    wrapper: css`
      display: flex;
      flex-direction: column;
      gap: 5px;
    `,
    item: {
      wrapper: {
        default: css`
          width: 80px;
          height: 80px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid ${ColorsBasicEnum.TRANSPARENT};
          border-radius: 8px;
          padding: 3px;
          overflow: hidden;
        `,
        selected: css`
          border: 1px solid ${ColorsShadesEnum.GRAY_600};
        `
      },
      image: css`
        max-width: 100%;
        max-height: 100%;
        border-radius: 8px;
      `
    }
  },
  primary: {
    wrapper: css`
      width: 400px;
      height: 400px;
      display: flex;
      align-items: center;
      justify-content: center;
    `,
    image: css`
      max-width: 100%;
      max-height: 100%;
      border-radius: 8px;
    `
  }
};
