import { ReactComponent as TelegramIcon } from 'assets/icons/iconmonstr-telegram-1.svg';
import { ReactComponent as VkIcon } from 'assets/icons/vk-120.svg';
import { FOOTER_TEXTS, SOCIAL_LINKS } from 'consts';
import { redirect } from 'utils/redirect';
import { footerStyle as style } from './footer.style';

const handleSocialButtonClick = (url: string) => () => {
  redirect(url);
};

export const Footer = (): JSX.Element => {
  return (
    <div className={style.wrapper}>
      <div className={style.projectTitle}>{FOOTER_TEXTS.PROJECT_TITLE}</div>
      <div className={style.copyright}>{FOOTER_TEXTS.COPYRIGHT}</div>
      <div className={style.socialButtons}>
        <div
          className={style.socialButton}
          onClick={handleSocialButtonClick(SOCIAL_LINKS.TELEGRAM)}>
          <TelegramIcon className={style.socialButtonIcon} />
        </div>
        <div
          className={style.socialButton}
          onClick={handleSocialButtonClick(SOCIAL_LINKS.VK)}>
          <VkIcon className={style.socialButtonIcon} />
        </div>
      </div>
    </div>
  );
};
