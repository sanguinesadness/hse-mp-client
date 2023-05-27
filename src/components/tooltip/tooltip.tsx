import { cx } from '@emotion/css';
import { ReactComponent as QuestionSquareIcon } from 'assets/icons/question-square.svg';
import { useMouseHover } from 'hooks';
import { useRef } from 'react';
import { tooltipStyle as style } from './tooltip.style';

type TTooltipProps = {
  text: string;
};

export const Tooltip = ({ text }: TTooltipProps): JSX.Element => {
  const popupRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);

  const popupWidth = popupRef.current?.clientWidth ?? 0;
  const iconHeight = iconRef.current?.clientHeight ?? 0;

  const isHovered = useMouseHover(iconRef);

  return (
    <div className={style.wrapper}>
      <div
        ref={popupRef}
        style={{
          right: `-${popupWidth / 2}px`,
          bottom: `${iconHeight + 10}px`
        }}
        className={cx(style.text.default, { [style.text.visible]: isHovered })}>
        {text}
      </div>
      <div ref={iconRef} className={style.icon.wrapper}>
        <QuestionSquareIcon className={style.icon.svg} />
      </div>
    </div>
  );
};
