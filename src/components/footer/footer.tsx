import { ColorsBasicEnum, FOOTER_TEXTS } from 'consts';
import { SocialButtons } from '../social-buttons';
import { footerStyle as style } from './footer.style';

export const Footer = (): JSX.Element => {
  return (
    <div className={style.wrapper}>
      <div className={style.projectTitle}>{FOOTER_TEXTS.PROJECT_TITLE}</div>
      <div className={style.copyright}>{FOOTER_TEXTS.COPYRIGHT}</div>
      <SocialButtons iconsFill={ColorsBasicEnum.WHITE} />
    </div>
  );
};
