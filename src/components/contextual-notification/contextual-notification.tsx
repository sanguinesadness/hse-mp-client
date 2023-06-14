import { cx } from '@emotion/css';
import { ReactComponent as CrossIcon } from 'assets/icons/cross.svg';
import { ReactComponent as ExclamationIcon } from 'assets/icons/exclamation.svg';
import { useState } from 'react';
import { contextualNotificationStyle as style } from './contextual-notification.style';

type TContextualNotificationProps = {
  text: string;
};

export const ContextualNotification = ({
  text
}: TContextualNotificationProps): JSX.Element | null => {
  const [isVisible, setIsVisible] = useState<boolean>(true);

  const hideNotification = (): void => {
    setIsVisible(false);
  };

  return (
    <div
      className={cx(style.wrapper.default, {
        [style.wrapper.hidden]: !isVisible
      })}>
      <div className={style.icon.wrapper}>
        <ExclamationIcon className={style.icon.self} />
      </div>
      <span className={style.text}>{text}</span>
      <div className={style.closeButton.wrapper} onClick={hideNotification}>
        <CrossIcon className={style.closeButton.icon} />
      </div>
    </div>
  );
};
