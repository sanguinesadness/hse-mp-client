import { Logo } from '../logo';
import { MarketplaceSelect } from '../marketplace-select';
import { NavigationMenu } from '../navigation-menu';
import { appHeaderStyle } from './app-header.style';

export const AppHeader = (): JSX.Element => {
  return (
    <div className={appHeaderStyle.wrapper}>
      <Logo />
      <NavigationMenu />
      <MarketplaceSelect />
    </div>
  );
};
