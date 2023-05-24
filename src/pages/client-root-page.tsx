import { AppHeader } from 'components/app-header';
import { ClientRoutesPagesMap, TClientRoutes } from 'consts';

type TClientRootPageProps = {
  route: TClientRoutes;
};

export const ClientRootPage = ({
  route
}: TClientRootPageProps): JSX.Element => {
  return (
    <div>
      <AppHeader />
      <div>{ClientRoutesPagesMap[route]}</div>
    </div>
  );
};
