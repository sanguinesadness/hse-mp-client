import { Logo } from '../logo';
import { MarketplaceSelect } from '../marketplace-select';
import { appHeaderStyle } from './app-header.style';

export const AppHeader = (): JSX.Element => {
  return (
    <div className={appHeaderStyle.wrapper}>
      <Logo />
      <MarketplaceSelect />
    </div>
  );
};
