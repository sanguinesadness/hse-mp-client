import { ReactComponent as CaretDownIcon } from 'assets/icons/caret-down.svg';
import { ScrollProgressBar } from '../scroll-progress-bar';
import { sectionHeaderStyle as style } from './section-header.style';

type TSectionHeaderProps = {
  pageName: string;
};

const handleCaretButtonClick = (): void => {
  document?.scrollingElement?.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

export const SectionHeader = ({
  pageName
}: TSectionHeaderProps): JSX.Element => {
  return (
    <div className={style.wrapper}>
      <ScrollProgressBar />
      <div className={style.innerWrapper}>
        <div className={style.title}>HSE MP — {pageName}</div>
        <div className={style.caretButton} onClick={handleCaretButtonClick}>
          <CaretDownIcon className={style.caretIcon} />
        </div>
      </div>
      <ScrollProgressBar />
    </div>
  );
};
