import { RoutesEnum } from 'consts';
import { authPageStyle as style } from 'pages/auth/auth-page.style';
import { AuthFooter } from 'pages/auth/components/auth-footer';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthHeader } from './components/auth-header';

export const AuthPage = (): JSX.Element => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === RoutesEnum.ROOT) {
      navigate(RoutesEnum.AUTH);
    }
  }, [location.pathname]);

  return (
    <div className={style.wrapper}>
      <AuthHeader />
      <div className={style.content}>content</div>
      <AuthFooter />
    </div>
  );
};
