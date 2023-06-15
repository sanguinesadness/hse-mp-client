import { css, cx } from '@emotion/css';
import { ColorsBasicEnum, SMOOTH_BOUNCE_EASE } from 'consts';

const GRADIENT_BACKGROUNDS = [
  css`
    background: radial-gradient(
      70.17% 101.57% at 25.92% 25.81%,
      #0a293a 0%,
      #4970fb 49.99%,
      #0fffa9 99.48%
    );
  `,
  css`
    background: radial-gradient(
      87.16% 120.14% at 30.81% 54.84%,
      #0a293a 0%,
      #4970fb 45.43%,
      #0fffa9 99.48%
    );
  `,
  css`
    background: radial-gradient(
      64.67% 95.06% at 57.09% 54.38%,
      #0a293a 0%,
      #4970fb 45.43%,
      #0fffa9 99.48%
    );
  `,
  css`
    background: linear-gradient(
      71.23deg,
      #0a293a -11.51%,
      #4970fb 39.15%,
      #0fffa9 99.42%
    );
  `,
  css`
    background: conic-gradient(
      from -5.36deg at 58.07% 50.23%,
      #0a293a 0deg,
      #4970fb 176.25deg,
      #0fffa9 358.13deg,
      #0a293a 360deg
    );
  `,
  css`
    background: conic-gradient(
      from 56.11deg at 58.68% 26.73%,
      #0a333a 0deg,
      #4970fb 176.25deg,
      #0fffa9 358.13deg,
      #0a333a 360deg
    );
  `
];

export const navigateButtonStyle = {
  wrapper: (bg: number) =>
    cx(
      css`
        border-radius: 15px;
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 20px;
        padding: 24px 16px;
        cursor: pointer;
        transition: 300ms ${SMOOTH_BOUNCE_EASE} all;

        :hover {
          transform: scale(1.02);
        }
      `,
      GRADIENT_BACKGROUNDS[bg]
    ),
  texts: {
    wrapper: css`
      color: ${ColorsBasicEnum.WHITE};
      text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      display: flex;
      flex-direction: column;
      gap: 5px;
    `,
    title: css`
      font-size: 20px;
      font-weight: 600;
    `,
    description: css`
      font-size: 14px;
      font-weight: 200;
    `
  },
  icon: {
    wrapper: css``,
    self: css`
      width: 70px;
      height: 70px;
      filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.1));

      * {
        fill: ${ColorsBasicEnum.WHITE};
      }
    `
  }
};
