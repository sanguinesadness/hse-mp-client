import { css } from '@emotion/css';
import {
  ColorsBasicEnum,
  ColorsErrorEnum,
  ColorsShadesEnum,
  ColorsSuccessEnum,
  SMOOTH_BOUNCE_EASE
} from 'consts';

export const buttonStyle = {
  wrapper: {
    default: css`
      padding: 13px 20px;
      border-radius: 10px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      gap: 15px;
      outline: none;
      border: none;
      font: inherit;
      font-weight: 500;
      width: 100%;
      cursor: pointer;
      transition: 100ms ${SMOOTH_BOUNCE_EASE} transform;

      &:active {
        transform: scale(0.97);
      }
    `,
    neutral: css`
      background: ${ColorsShadesEnum.GRAY_200};
      color: ${ColorsShadesEnum.GRAY_1000};
    `,
    success: css`
      background: ${ColorsSuccessEnum.SUCCESS_200};
      color: ${ColorsBasicEnum.SUCCESS_GREEN};
    `,
    error: css`
      background: ${ColorsErrorEnum.ERROR_200};
      color: ${ColorsBasicEnum.ERROR_RED};
    `,
    disabled: css`
      background: ${ColorsShadesEnum.GRAY_100} !important;
      color: ${ColorsShadesEnum.GRAY_600} !important;
      cursor: not-allowed !important;

      &:active {
        transform: unset;
      }
    `,
    loading: css`
      cursor: unset;

      &:active {
        transform: unset;
      }
    `
  }
};
