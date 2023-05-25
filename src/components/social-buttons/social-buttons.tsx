import { ReactComponent as TelegramIcon } from 'assets/icons/iconmonstr-telegram-1.svg';
import { ReactComponent as VkIcon } from 'assets/icons/vk-120.svg';
import { ColorsBasicEnum, SOCIAL_LINKS } from 'consts';
import { redirect } from 'utils/redirect';
import { socialButtonsStyle as style } from './social-buttons.style';

const handleSocialButtonClick = (url: string) => () => {
  redirect(url);
};

type TSocialButtonsProps = {
  iconsFill: ColorsBasicEnum;
};

export const SocialButtons = ({
  iconsFill
}: TSocialButtonsProps): JSX.Element => {
  return (
    <div className={style.wrapper}>
      <div
        className={style.socialButton(iconsFill)}
        onClick={handleSocialButtonClick(SOCIAL_LINKS.TELEGRAM)}>
        <TelegramIcon className={style.socialButtonIcon} />
      </div>
      <div
        className={style.socialButton(iconsFill)}
        onClick={handleSocialButtonClick(SOCIAL_LINKS.VK)}>
        <VkIcon className={style.socialButtonIcon} />
      </div>
    </div>
  );
};
