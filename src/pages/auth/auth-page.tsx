import { RoutesEnum } from 'consts';
import { observer } from 'mobx-react';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { authStore } from 'stores';
import { authPageStyle as style } from './auth-page.style';
import { AuthFooter } from './components/auth-footer';
import { AuthForm } from './components/auth-form';
import { AuthHeader } from './components/auth-header';

export const AuthPage = observer((): JSX.Element => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === RoutesEnum.ROOT) {
      navigate(RoutesEnum.AUTH);
    }
  }, [location.pathname]);

  useEffect(() => {
    if (authStore.isLoggedIn) {
      navigate(RoutesEnum.HOME);
    }
  }, [authStore.isLoggedIn]);

  return (
    <div className={style.wrapper}>
      <AuthHeader />
      <div className={style.content}>
        <AuthForm />
      </div>
      <AuthFooter />
    </div>
  );
});
