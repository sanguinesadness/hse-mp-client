import { Button } from 'components/button';
import { InputField } from 'components/input-field';
import { TInputFieldChangeEvent } from 'components/input-field/input-field';
import { ButtonTypes } from 'consts';
import { observer } from 'mobx-react';
import { authFormStore, TAuthFormStoreField } from 'stores/auth-form.store';
import { authFormStyle as style } from './auth-form.style';

export const AuthForm = observer((): JSX.Element => {
  const { apiKey, clientId, isFormEmpty, isFormValid } = authFormStore;

  const handleFieldValueChange = (
    e: TInputFieldChangeEvent<TAuthFormStoreField>
  ) => {
    authFormStore.updateField(e.fieldName, e.event.target.value);
  };

  const handleResetClick = (): void => {
    authFormStore.resetStore();
  };

  return (
    <div className={style.wrapper}>
      <div className={style.label}>Login</div>
      <span className={style.title}>Введите свои данные продавца</span>
      <div className={style.fields}>
        <InputField<TAuthFormStoreField>
          placeholder="1119147"
          value={clientId}
          label="Client ID"
          name="clientId"
          toolTip="Ваш клиентский идентификатор"
          onChange={handleFieldValueChange}
        />
        <InputField<TAuthFormStoreField>
          placeholder="97cd9ef4-8c9a-49ef-bf66-5b4d55130772"
          value={apiKey}
          label="API Key"
          name="apiKey"
          toolTip="Уникальный ключ, дающий доступ к API"
          onChange={handleFieldValueChange}
        />
      </div>
      <div className={style.buttons}>
        <Button
          type={ButtonTypes.NEUTRAL}
          disabled={isFormEmpty}
          onClick={handleResetClick}>
          Очистить
        </Button>
        <Button
          type={ButtonTypes.SUCCESS}
          disabled={!isFormValid}
          onClick={console.log}>
          Войти
        </Button>
      </div>
    </div>
  );
});
