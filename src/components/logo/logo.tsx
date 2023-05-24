import { cx } from '@emotion/css';
import { ReactComponent as LogoIcon } from 'assets/logos/hse-mp.svg';
import { RoutesEnum } from 'consts';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { logoStyle as style } from './logo.style';

export const Logo = (): JSX.Element => {
  const [hovered, setHovered] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleLogoClick = (): void => {
    navigate(RoutesEnum.HOME);
  };

  const handleMouseEnter = (): void => {
    setHovered(true);
  };

  const handleMouseLeave = (): void => {
    setHovered(false);
  };

  return (
    <div
      className={style.wrapper}
      onClick={handleLogoClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      <LogoIcon className={style.icon} />
      <span
        className={cx(style.text.default, {
          [style.text.hover]: hovered
        })}>
        HSE MP
      </span>
    </div>
  );
};
