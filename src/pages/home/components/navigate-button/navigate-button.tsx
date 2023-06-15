import { FunctionComponent, SVGProps } from 'react';
import { navigateButtonStyle as style } from './navigate-button.style';

export type TNavigateButtonProps = {
  title: string;
  description: string;
  icon: FunctionComponent<SVGProps<SVGSVGElement>>;
  onClick: VoidFunction;
};

export const NavigateButton = (props: TNavigateButtonProps): JSX.Element => {
  return (
    <div
      className={style.wrapper(Math.floor(Math.random() * 6))}
      onClick={props.onClick}>
      <div className={style.texts.wrapper}>
        <div className={style.texts.title}>{props.title}</div>
        <div className={style.texts.description}>{props.description}</div>
      </div>
      <div className={style.icon.wrapper}>
        <props.icon className={style.icon.self} />
      </div>
    </div>
  );
};
