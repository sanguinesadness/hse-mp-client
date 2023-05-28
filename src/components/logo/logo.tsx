import { cx } from '@emotion/css';
import { ReactComponent as LogoIcon } from 'assets/logos/hse-mp.svg';
import { RoutesEnum } from 'consts';
import { useMouseHover } from 'hooks';
import { observer } from 'mobx-react';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { authStore } from 'stores';
import { logoStyle as style } from './logo.style';

type TLogoProps = {
  size: 'large' | 'small';
};

export const Logo = observer(({ size }: TLogoProps): JSX.Element => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);

  const [textBgPosition, setTextBgPosition] = useState<number>(0);
  const navigate = useNavigate();
  const isHovered = useMouseHover(wrapperRef);

  const handleLogoClick = (): void => {
    if (authStore.isLoggedIn) {
      navigate(RoutesEnum.HOME);
    } else {
      navigate(RoutesEnum.AUTH);
    }
  };

  useEffect(() => {
    if (textRef.current && isHovered) {
      setTextBgPosition(textRef.current.clientWidth);
    } else {
      setTextBgPosition(0);
    }
  }, [isHovered]);

  return (
    <div ref={wrapperRef} className={style.wrapper} onClick={handleLogoClick}>
      <LogoIcon
        className={cx({
          [style.icon.small]: size === 'small',
          [style.icon.large]: size === 'large'
        })}
      />
      <span
        ref={textRef}
        className={cx(style.text.default, {
          [style.text.small]: size === 'small',
          [style.text.large]: size === 'large'
        })}
        style={{
          backgroundPositionX: textBgPosition
        }}>
        HSE MP
      </span>
    </div>
  );
});
