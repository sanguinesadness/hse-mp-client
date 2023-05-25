import { useScrollPosition } from 'hooks';
import { scrollProgressBarStyle as style } from './scroll-progress-bar.style';

export const ScrollProgressBar = (): JSX.Element => {
  const { percent } = useScrollPosition();

  console.log({ percent });
  return (
    <div className={style.wrapper}>
      <div className={style.bar} style={{ width: `${percent}%` }} />
    </div>
  );
};
