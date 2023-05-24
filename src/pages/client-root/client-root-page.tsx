import { Footer } from 'components/footer';
import { Header } from 'components/header';
import { ClientRoutesPagesMap, TClientRoutes } from 'consts';
import { clientRootPageStyle as style } from './client-root-page.style';

type TClientRootPageProps = {
  route: TClientRoutes;
};

export const ClientRootPage = ({
  route
}: TClientRootPageProps): JSX.Element => {
  return (
    <div>
      <Header />
      <div className={style.content}>{ClientRoutesPagesMap[route]}</div>
      <Footer />
    </div>
  );
};
