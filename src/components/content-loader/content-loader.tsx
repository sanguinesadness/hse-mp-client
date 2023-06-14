import { ColorsBasicEnum } from 'consts';
import { HashLoader } from 'react-spinners';
import { contentLoaderStyle as style } from './content-loader.style';

export const ContentLoader = (): JSX.Element => {
  return (
    <div className={style.wrapper}>
      <HashLoader color={ColorsBasicEnum.PRIMARY} size={80} />
    </div>
  );
};
