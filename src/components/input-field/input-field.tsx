import { cx } from '@emotion/css';
import { Tooltip } from 'components/tooltip';
import { InputHTMLAttributes } from 'react';
import { inputFieldStyle as style } from './input-field.style';

type TInputFieldProps = {
  className?: string;
  label?: string;
  toolTip?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export const InputField = ({
  className,
  label,
  toolTip,
  ...rest
}: TInputFieldProps): JSX.Element => {
  return (
    <div className={style.wrapper}>
      {label && (
        <div className={style.label.wrapper}>
          <span>{label}</span>
          {toolTip && <Tooltip text={toolTip} />}
        </div>
      )}
      <input className={cx(style.input, className)} {...rest} />
    </div>
  );
};
