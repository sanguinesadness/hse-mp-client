import { cx } from '@emotion/css';
import { ReactComponent as CaretDownIcon } from 'assets/icons/caret-down.svg';
import { useMouseHover } from 'hooks';
import { useRef } from 'react';
import { SimpleField, TSimpleFieldProps } from '../simple-field';
import { advancedFieldStyle as style } from './advanced-field.style';

type TAdvancedFieldProps = {
  title: string;
  simpleFieldsProps: Array<TSimpleFieldProps>;
};

export const AdvancedField = ({
  title,
  simpleFieldsProps
}: TAdvancedFieldProps): JSX.Element => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const isHovered = useMouseHover(wrapperRef);

  return (
    <div className={style.wrapper} ref={wrapperRef}>
      <div className={style.titleBlock.wrapper}>
        <span className={style.titleBlock.text}>{title}</span>
        <div className={style.titleBlock.icon.wrapper}>
          <CaretDownIcon className={style.titleBlock.icon.self} />
        </div>
      </div>
      <div
        className={cx(style.detailsPopup.wrapper.default, {
          [style.detailsPopup.wrapper.visible]: isHovered
        })}>
        {simpleFieldsProps.map((props: TSimpleFieldProps, index: number) => (
          <SimpleField key={index} {...props} />
        ))}
      </div>
    </div>
  );
};
