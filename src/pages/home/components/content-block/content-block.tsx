import {
  NavigateButton,
  TNavigateButtonProps
} from 'pages/home/components/navigate-button';
import { contentBlockStyle as style } from './content-block.style';

type TContentBlockProps = {
  title: string;
  description: string;
  navButtons: Array<TNavigateButtonProps>;
};

export const ContentBlock = ({
  title,
  description,
  navButtons
}: TContentBlockProps): JSX.Element => {
  return (
    <div className={style.wrapper}>
      <div className={style.title}>{title}</div>
      <div className={style.description}>{description}</div>
      <div className={style.buttons.wrapper}>
        {navButtons.map((props: TNavigateButtonProps, index: number) => (
          <NavigateButton key={index} {...props} />
        ))}
      </div>
    </div>
  );
};
