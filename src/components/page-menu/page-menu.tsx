import { cx } from '@emotion/css';
import { FunctionComponent, SVGProps } from 'react';
import { pageMenuStyle as style } from './page-menu.style';

export type TPageMenuItem<T extends string> = {
  text: string;
  value: T;
  icon: FunctionComponent<SVGProps<SVGSVGElement>>;
};

type TPageMenuProps<T extends string> = {
  value: T;
  items: Array<TPageMenuItem<T>>;
  onChange: (value: T) => void;
};

export function PageMenu<T extends string>({
  value,
  items,
  onChange
}: TPageMenuProps<T>): JSX.Element {
  const handleValueChange = (value: T) => () => {
    onChange(value);
  };

  return (
    <div className={style.wrapper}>
      {items.map((item: TPageMenuItem<T>) => (
        <div
          key={item.value}
          onClick={handleValueChange(item.value)}
          className={cx(style.item.wrapper.default, {
            [style.item.wrapper.selected]: item.value === value
          })}>
          <item.icon className={style.item.icon} />
          <span className={style.item.text}>{item.text}</span>
        </div>
      ))}
    </div>
  );
}
