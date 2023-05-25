import { css } from '@emotion/css';

export enum ColorsBasicEnum {
  LIME_GREEN = '#0FFFA9',
  BLUE_PILLOW = '#4970FB',
  PRIMARY = '#0A293A',
  SUCCESS_GREEN = '#13D38E',
  WHITE = '#FFFFFF',
  BLACK = '#000000',
  TRANSPARENT = 'transparent'
}

export enum ColorsShadesEnum {
  GRAY_400 = '#E8E8E8'
}

export const FontsBasic = {
  BUNGEE: css`
    font-family: 'Bungee', cursive;
  `,
  RUBIK: css`
    font-family: 'Rubik', sans-serif;
  `
};

export const HEADER_HEIGHT = '100px';
export const SECTION_HEADER_HEIGHT = '70px';
export const FOOTER_HEIGHT = '70px';

export const AUTH_HEADER_HEIGHT = '150px';
export const AUTH_FOOTER_HEIGHT = '100px';

export const DEFAULT_SIDE_PADDING = '150px';

export const SMOOTH_BOUNCE_EASE = 'cubic-bezier(0.52, -0.38, 0.49, 1.31)';
