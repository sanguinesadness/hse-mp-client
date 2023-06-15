import { ReactComponent as TrashIcon } from 'assets/icons/trash.svg';
import { Button } from 'components/button';
import { InputField } from 'components/input-field';
import { ButtonTypes } from 'consts';
import { InputBlock } from 'pages/products-detail/components/product-edit';
import { useEffect, useState } from 'react';
import { fakePromise } from 'utils';
import { warehousesPageStyle as style } from './warehouses-page.style';

const addresses = [
  'ул. Пушкина, д. 10, кв. 25, г. Санкт-Петербург, Россия',
  'пр. Ленинградский, д. 78, кв. 9, г. Новосибирск, Россия',
  'ул. Гагарина, д. 15, кв. 3, г. Екатеринбург, Россия',
  'пр. Победы, д. 55, кв. 12, г. Казань, Россия',
  'ул. Кирова, д. 30, кв. 8, г. Самара, Россия',
  'пр. Мира, д. 92, кв. 17, г. Уфа, Россия',
  'ул. Советская, д. 5, кв. 2, г. Омск, Россия',
  'пр. Красная, д. 20, кв. 6, г. Челябинск, Россия',
  'ул. Калинина, д. 48, кв. 11, г. Ростов-на-Дону, Россия',
  'пр. Ленина, д. 72, кв. 4, г. Ульяновск, Россия'
];

export const WarehousesPage = (): JSX.Element => {
  const [address, setAddress] = useState<string>('');
  const [addressList, setAddressList] = useState<Array<string>>(addresses);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isDisabled, setIsDisabled] = useState<boolean>(true);

  const addAddress = (value: string): void => {
    setAddressList((prev) => [...prev, value]);
  };

  const deleteAddress = (value: string): void => {
    setAddressList((prev) => prev.filter((a) => a !== value));
  };

  const handleAddAddress = async (): Promise<void> => {
    setIsLoading(true);
    await fakePromise(1000);
    addAddress(address);
    setAddress('');
    setIsLoading(false);
  };

  const handleClearClick = (): void => {
    setAddress('');
  };

  useEffect(() => {
    setIsDisabled(!address.length);
  }, [address]);

  return (
    <div className={style.wrapper}>
      <InputBlock title="Ваши склады">
        <div className={style.warehouses.wrapper}>
          {addressList.map((a: string, index: number) => (
            <div key={index} className={style.warehouses.warehouse.wrapper}>
              <span className={style.warehouses.warehouse.title}>{a}</span>
              <div
                className={style.warehouses.warehouse.deleteButton.wrapper}
                onClick={() => deleteAddress(a)}>
                <TrashIcon
                  className={style.warehouses.warehouse.deleteButton.icon}
                />
              </div>
            </div>
          ))}
        </div>
      </InputBlock>
      <InputBlock title="Добавить новый склад">
        <InputField
          label="Адрес склада"
          onChange={(e) => setAddress(e.event.target.value)}
          name="address"
          placeholder="ул. Ленина, д. 123, кв. 45, г. Москва, Россия"
          value={address}
        />
        <div className={style.buttons}>
          <Button
            type={ButtonTypes.NEUTRAL}
            disabled={isDisabled}
            onClick={handleClearClick}>
            Очистить
          </Button>
          <Button
            type={ButtonTypes.SUCCESS}
            isLoading={isLoading}
            disabled={isDisabled}
            onClick={handleAddAddress}>
            Добавить
          </Button>
        </div>
      </InputBlock>
    </div>
  );
};
