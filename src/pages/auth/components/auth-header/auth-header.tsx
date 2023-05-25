import { Logo } from 'components/logo';
import { MarketplaceSelect } from 'components/marketplace-select';
import { authHeaderStyle as style } from './auth-header.style';

export const AuthHeader = (): JSX.Element => {
  return (
    <div className={style.wrapper}>
      <Logo size="large" />
      <MarketplaceSelect />
    </div>
  );
};
