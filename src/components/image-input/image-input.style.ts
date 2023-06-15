import { css } from '@emotion/css';
import { ColorsBasicEnum, ColorsShadesEnum, SMOOTH_BOUNCE_EASE } from 'consts';

export const imageInputStyle = {
  wrapper: css`
    display: flex;
    flex-direction: column;
    gap: 10px;
  `,
  input: css`
    display: none;
  `,
  label: css``,
  image: {
    wrapper: css`
      position: relative;
      width: 220px;
      height: 220px;
      cursor: pointer;
      border: 1px solid ${ColorsShadesEnum.GRAY_100};
      border-radius: 8px;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
    `,
    self: css`
      max-width: 100%;
      max-height: 100%;
    `,
    deleteButton: {
      wrapper: css`
        position: absolute;
        cursor: pointer;
        padding: 5px;
        border-radius: 10px;
        transition: 200ms ${SMOOTH_BOUNCE_EASE} all;
        right: 0;
        top: 0;

        :hover {
          transform: scale(0.9);
        }
      `,
      icon: css`
        width: 30px;
        height: 30px;
        filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.2));

        * {
          fill: ${ColorsBasicEnum.WHITE};
        }
      `
    }
  }
};
