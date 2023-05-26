import { ColorEnum, ColorsBasicEnum, ColorsShadesEnum } from './style';

export enum ButtonTypes {
  SUCCESS = 'SUCCESS',
  NEUTRAL = 'NEUTRAL',
  ERROR = 'ERROR'
}

export const ButtonTypesColorsMap: Record<ButtonTypes, ColorEnum> = {
  [ButtonTypes.ERROR]: ColorsBasicEnum.ERROR_RED,
  [ButtonTypes.SUCCESS]: ColorsBasicEnum.SUCCESS_GREEN,
  [ButtonTypes.NEUTRAL]: ColorsShadesEnum.GRAY_1000
};
