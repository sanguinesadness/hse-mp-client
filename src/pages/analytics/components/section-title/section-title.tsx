import { ReactComponent as DownloadIcon } from 'assets/icons/download.svg';
import { ReactComponent as RefreshIcon } from 'assets/icons/refresh.svg';
import { sectionTitleStyle as style } from './section-title.style';

type TSectionTitleProps = {
  title: string;
  description: string;
  onDownload: VoidFunction;
  onRefresh: VoidFunction;
};

export const SectionTitle = ({
  title,
  description,
  onDownload,
  onRefresh
}: TSectionTitleProps): JSX.Element => {
  return (
    <div className={style.wrapper}>
      <div className={style.texts.wrapper}>
        <div className={style.texts.title}>{title}</div>
        <div className={style.texts.description}>{description}</div>
      </div>
      <div className={style.buttons.wrapper}>
        <div className={style.buttons.button.wrapper} onClick={onDownload}>
          <div className={style.buttons.button.icon.wrapper}>
            <DownloadIcon className={style.buttons.button.icon.svg} />
          </div>
          <span className={style.buttons.button.text}>Скачать</span>
        </div>
        <div className={style.buttons.button.wrapper} onClick={onRefresh}>
          <div className={style.buttons.button.icon.wrapper}>
            <RefreshIcon className={style.buttons.button.icon.svg} />
          </div>
          <span className={style.buttons.button.text}>Обновить</span>
        </div>
      </div>
    </div>
  );
};
