import { cx } from '@emotion/css';
import { ButtonTypes, ButtonTypesColorsMap } from 'consts';
import { PropsWithChildren } from 'react';
import { ClipLoader } from 'react-spinners';
import { buttonStyle as style } from './button.style';

type TButtonProps = {
  type?: ButtonTypes;
  onClick?: VoidFunction;
  disabled?: boolean;
  isLoading?: boolean;
  className?: string;
} & PropsWithChildren;

export const Button = ({
  type = ButtonTypes.NEUTRAL,
  onClick,
  disabled,
  isLoading,
  className,
  children
}: TButtonProps): JSX.Element => {
  const handleButtonClick = (): void => {
    if (disabled || isLoading) return;
    onClick?.call(null);
  };

  return (
    <button
      className={cx(style.wrapper.default, className, {
        [style.wrapper.neutral]: type === ButtonTypes.NEUTRAL,
        [style.wrapper.success]: type === ButtonTypes.SUCCESS,
        [style.wrapper.error]: type === ButtonTypes.ERROR,
        [style.wrapper.disabled]: disabled,
        [style.wrapper.loading]: isLoading
      })}
      onClick={handleButtonClick}>
      {isLoading && !disabled ? (
        <ClipLoader size={20} color={ButtonTypesColorsMap[type]} />
      ) : (
        children
      )}
    </button>
  );
};
