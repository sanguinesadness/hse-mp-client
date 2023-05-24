import { cx } from '@emotion/css';
import { ReactComponent as LogoIcon } from 'assets/logos/hse-mp.svg';
import { RoutesEnum } from 'consts';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { logoStyle } from './logo.style';

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
      className={logoStyle.wrapper}
      onClick={handleLogoClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      <LogoIcon className={logoStyle.icon} />
      <span
        className={cx(logoStyle.text.default, {
          [logoStyle.text.hover]: hovered
        })}>
        HSE MP
      </span>
    </div>
  );
};
