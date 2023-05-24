import { AppHeader } from 'components/app-header/app-header';
import { Routes } from 'consts';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const HomePage = (): JSX.Element => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate(Routes.HOME);
  }, []);

  return (
    <div>
      <AppHeader />
    </div>
  );
};
