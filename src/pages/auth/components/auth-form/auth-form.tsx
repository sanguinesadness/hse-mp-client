import { Button } from 'components/button';
import { InputField } from 'components/input-field';
import { ButtonTypes } from 'consts';
import { authFormStyle as style } from './auth-form.style';

export const AuthForm = (): JSX.Element => {
  return (
    <div className={style.wrapper}>
      <div className={style.label}>Login</div>
      <span className={style.title}>Введите свои данные продавца</span>
      <div className={style.fields}>
        <InputField
          placeholder="1049138"
          label="Client ID"
          toolTip="Ваш клиентский идентификатор"
        />
        <InputField
          placeholder="97c89234u8sdfl34weff4as772"
          label="API Key"
          toolTip="Уникальный ключ, дающий доступ к API"
        />
      </div>
      <div className={style.buttons}>
        <Button type={ButtonTypes.NEUTRAL} onClick={console.log}>
          Очистить
        </Button>
        <Button type={ButtonTypes.SUCCESS} onClick={console.log}>
          Войти
        </Button>
      </div>
    </div>
  );
};
