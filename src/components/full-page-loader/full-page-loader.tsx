import { ColorsBasicEnum } from 'consts';
import { HashLoader } from 'react-spinners';
import { fullPageLoaderStyle as style } from './full-page-loader.style';

export const FullPageLoader = (): JSX.Element => {
  return (
    <div className={style.wrapper}>
      <HashLoader color={ColorsBasicEnum.PRIMARY} size={100} />
    </div>
  );
};
