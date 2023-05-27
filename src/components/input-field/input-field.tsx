import { cx } from '@emotion/css';
import { Tooltip } from 'components/tooltip';
import { ChangeEvent } from 'react';
import { inputFieldStyle as style } from './input-field.style';

export type TInputFieldChangeEvent<T extends string> = {
  event: ChangeEvent<HTMLInputElement>;
  fieldName: T;
};

type TInputFieldProps<T extends string> = {
  className?: string;
  label?: string;
  toolTip?: string;
  onChange: (e: TInputFieldChangeEvent<T>) => void;
  name: T;
  value: string | number;
  placeholder?: string;
};

export function InputField<T extends string>({
  className,
  label,
  toolTip,
  name,
  value,
  onChange,
  placeholder
}: TInputFieldProps<T>): JSX.Element {
  const handleValueChange = (e: ChangeEvent<HTMLInputElement>): void => {
    onChange({ event: e, fieldName: name });
  };

  return (
    <div className={style.wrapper}>
      {label && (
        <div className={style.label.wrapper}>
          <span>{label}</span>
          {toolTip && <Tooltip text={toolTip} />}
        </div>
      )}
      <input
        className={cx(style.input, className)}
        name={name}
        value={value}
        onChange={handleValueChange}
        placeholder={placeholder}
      />
    </div>
  );
}
