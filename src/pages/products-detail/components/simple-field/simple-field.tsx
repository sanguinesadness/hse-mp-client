import { simpleFieldStyle as style } from './simple-field.style';

export type TSimpleFieldProps = {
  title: string;
  value: string | number | null;
  additionalValue?: string | number;
};

export const SimpleField = ({
  title,
  value,
  additionalValue
}: TSimpleFieldProps): JSX.Element => {
  return (
    <div className={style.wrapper}>
      <div className={style.title}>{title}</div>
      <div className={style.value.wrapper}>
        <div className={style.value.main}>{value || '–'}</div>
        {additionalValue && (
          <div className={style.value.additional}>{additionalValue}</div>
        )}
      </div>
    </div>
  );
};
