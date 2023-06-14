import { css } from '@emotion/css';
import { ColorsBasicEnum, ColorsShadesEnum } from 'consts';

export const contextualNotificationStyle = {
  wrapper: {
    default: css`
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 16px;
      padding: 10px 20px;
      border-radius: 8px;
      background: ${ColorsShadesEnum.GRAY_100};
    `,
    hidden: css`
      display: none;
    `
  },
  icon: {
    wrapper: css`
      display: flex;
      align-items: center;
      justify-content: center;
    `,
    self: css`
      width: 22px;
      height: 22px;

      * {
        fill: ${ColorsBasicEnum.PRIMARY};
      }
    `
  },
  text: css`
    font-size: 14px;
    font-weight: 400;
  `,
  closeButton: {
    wrapper: css`
      cursor: pointer;
      margin-left: auto;
      display: flex;
      align-items: center;
      justify-content: center;
    `,
    icon: css`
      width: 22px;
      height: 22px;

      * {
        fill: ${ColorsShadesEnum.GRAY_600};
      }
    `
  }
};
