import { Logo } from '../logo';
import { MarketplaceSelect } from '../marketplace-select';
import { NavigationMenu } from '../navigation-menu';
import { headerStyle as style } from './header.style';

export const Header = (): JSX.Element => {
  return (
    <div className={style.wrapper}>
      <Logo />
      <NavigationMenu />
      <MarketplaceSelect />
    </div>
  );
};
