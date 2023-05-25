import { SocialButtons } from 'components/social-buttons';
import { ColorsBasicEnum, FOOTER_TEXTS } from 'consts';
import { authFooterStyle as style } from './auth-footer.style';

export const AuthFooter = (): JSX.Element => {
  return (
    <div className={style.wrapper}>
      <div>{FOOTER_TEXTS.COPYRIGHT}</div>
      <div className={style.projectTitle}>{FOOTER_TEXTS.PROJECT_TITLE}</div>
      <SocialButtons iconsFill={ColorsBasicEnum.PRIMARY} />
    </div>
  );
};
