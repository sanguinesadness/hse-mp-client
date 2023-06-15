import { css } from '@emotion/css';
import { SMOOTH_BOUNCE_EASE } from 'consts';

export const advancedFieldStyle = {
  wrapper: css`
    position: relative;
  `,
  titleBlock: {
    wrapper: css`
      display: flex;
      flex-direction: row;
      gap: 8px;
      cursor: pointer;
    `,
    text: css`
      font-weight: 500;
    `,
    icon: {
      wrapper: css`
        height: 20px;
        width: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
      `,
      self: css`
        max-height: 100%;
        max-width: 100%;
      `
    }
  },
  detailsPopup: {
    wrapper: {
      default: css`
        position: absolute;
        top: 30px;
        transition: 200ms ${SMOOTH_BOUNCE_EASE} all;
        opacity: 0;
        transform: scale(0.5);
        min-width: 240px;
        z-index: 100;
        backdrop-filter: blur(15px);
        padding: 16px;
        font-size: 14px !important;
        display: flex;
        flex-direction: column;
        gap: 7px;
        border: 1px solid rgba(10, 41, 58, 0.1);
        border-radius: 10px;
      `,
      visible: css`
        opacity: 1;
        transform: scale(1);
      `
    }
  }
};
