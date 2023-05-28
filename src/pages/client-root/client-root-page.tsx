import { Footer } from 'components/footer';
import { Header } from 'components/header';
import { SectionHeader } from 'components/section-header';
import {
  ClientRoutesNamesMap,
  ClientRoutesPagesMap,
  RoutesEnum,
  TClientRoutes
} from 'consts';
import { observer } from 'mobx-react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { authStore } from 'stores';
import { clientRootPageStyle as style } from './client-root-page.style';

type TClientRootPageProps = {
  route: TClientRoutes;
};

export const ClientRootPage = observer(
  ({ route }: TClientRootPageProps): JSX.Element => {
    const navigate = useNavigate();

    useEffect(() => {
      if (!authStore.isLoggedIn) {
        navigate(RoutesEnum.AUTH);
      }
    }, [authStore.isLoggedIn]);

    return (
      <div>
        <Header />
        <SectionHeader pageName={ClientRoutesNamesMap[route]} />
        <div className={style.content}>{ClientRoutesPagesMap[route]}</div>
        <Footer />
      </div>
    );
  }
);
