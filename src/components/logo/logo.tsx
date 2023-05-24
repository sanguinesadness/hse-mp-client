import { ReactComponent as LogoIcon } from 'assets/logos/hse-mp.svg';
import { logoStyle } from './logo.style';

export const Logo = (): JSX.Element => {
  return (
    <div className={logoStyle.wrapper}>
      <LogoIcon className={logoStyle.icon} />
      <span className={logoStyle.text}>HSE MP</span>
    </div>
  );
};
