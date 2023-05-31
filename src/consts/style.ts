import { css } from '@emotion/css';

export enum ColorsBasicEnum {
  LIME_GREEN = '#0FFFA9',
  BLUE_PILLOW = '#4970FB',
  PRIMARY = '#0A293A',
  SUCCESS_GREEN = '#13D38E',
  ERROR_RED = '#FF5A5A',
  WHITE = '#FFFFFF',
  BLACK = '#000000',
  TRANSPARENT = 'transparent'
}

export enum ColorsShadesEnum {
  GRAY_100 = '#f5f5f5',
  GRAY_200 = '#f1f1f1',
  GRAY_400 = '#E8E8E8',
  GRAY_600 = '#ADADAD',
  GRAY_800 = '#727272',
  GRAY_1000 = '#4d4d4d'
}

export enum ColorsSuccessEnum {
  SUCCESS_200 = '#E7FBF4',
  SUCCESS_300 = '#DCF9EE'
}

export enum ColorsErrorEnum {
  ERROR_200 = '#FFEEEE'
}

export type ColorEnum =
  | ColorsBasicEnum
  | ColorsSuccessEnum
  | ColorsErrorEnum
  | ColorsShadesEnum;

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
