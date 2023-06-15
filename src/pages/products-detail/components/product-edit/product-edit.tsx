import { TOzonProductExtended } from 'api/models';
import { Button } from 'components/button';
import { InputImage } from 'components/image-input';
import { InputField } from 'components/input-field';
import { MultipleImagesInput } from 'components/multiple-images-input';
import { ButtonTypes } from 'consts';
import { observer } from 'mobx-react';
import { ReactNode, useState } from 'react';
import { productDetailsStore } from 'stores';
import { formatPercentageFromString, formatPriceRub } from 'utils';
import { productEditStyle as style } from './product-edit.style';

type TProductEditProps = {
  product: TOzonProductExtended;
};

export const InputBlock = ({
  title,
  children
}: {
  title: string;
  children: ReactNode | JSX.Element;
}): JSX.Element => {
  return (
    <div className={style.inputBlock.wrapper}>
      <div className={style.inputBlock.title}>{title}</div>
      <div className={style.inputBlock.content.wrapper}>{children}</div>
    </div>
  );
};

export const ProductEdit = observer(
  ({ product }: TProductEditProps): JSX.Element => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isDisabled, setIsDisabled] = useState<boolean>(false);

    const [name, setName] = useState<string>(product.name);
    const [id, setId] = useState<number>(product.id);
    const [offerId, setOfferId] = useState<string>(product.offerId);
    const [barcode, setBarcode] = useState<string>(product.barcode);
    const [categoryId, setCategoryId] = useState<number>(product.categoryId);
    const [oldPrice, setOldPrice] = useState<string>(
      formatPriceRub(product.oldPrice) ?? ''
    );
    const [newPrice, setNewPrice] = useState<string>(
      formatPriceRub(product.price) ?? ''
    );
    const [vat, setVat] = useState<string>(
      formatPercentageFromString(product.vat)
    );
    const [weight, setWeight] = useState<number>(product.volumeWeight * 1000);
    const [primaryImage, setPrimaryImage] = useState<string>(
      product.primaryImage
    );
    const [images, setImages] = useState<Array<string>>(product.images);

    const handleSaveClick = async (): Promise<void> => {
      setIsLoading(true);

      const data: TOzonProductExtended = {
        ...product,
        name,
        id,
        offerId,
        barcode,
        categoryId,
        oldPrice,
        price: newPrice,
        vat,
        volumeWeight: weight,
        primaryImage,
        images
      };

      productDetailsStore.editProduct(data).finally(() => {
        setIsLoading(false);
        setIsDisabled(true);
      });
    };

    return (
      <div className={style.wrapper}>
        <InputBlock title="Информация о товаре">
          <div className={style.inputBlock.content.singleInput}>
            <InputField
              label="Название"
              onChange={(e) => setName(e.event.target.value)}
              name="name"
              value={name}
            />
          </div>
          <div className={style.inputBlock.content.gridInput}>
            <InputField
              label="Идентификатор"
              onChange={(e) => setId(parseInt(e.event.target.value))}
              name="id"
              value={id}
            />
            <InputField
              label="Артикул"
              onChange={(e) => setOfferId(e.event.target.value)}
              name="offerId"
              value={offerId}
            />
            <InputField
              label="Штрихкод"
              onChange={(e) => setBarcode(e.event.target.value)}
              name="barcode"
              value={barcode}
            />
            <InputField
              label="Категория"
              onChange={(e) => setCategoryId(parseInt(e.event.target.value))}
              name="categoryId"
              value={categoryId}
            />
            <InputField
              label="Цена до скидки"
              onChange={(e) => setOldPrice(e.event.target.value)}
              name="oldPrice"
              value={oldPrice}
            />
            <InputField
              label="Цена после скидки"
              onChange={(e) => setNewPrice(e.event.target.value)}
              name="newPrice"
              value={newPrice}
            />
            <InputField
              label="НДС"
              onChange={(e) => setVat(e.event.target.value)}
              name="vat"
              value={vat}
            />
          </div>
        </InputBlock>
        <InputBlock title="Габариты и вес в упаковке">
          <div className={style.inputBlock.content.gridInput}>
            <InputField
              label="Вес с упаковкой, г"
              onChange={(e) => setWeight(parseInt(e.event.target.value))}
              name="volumeWeight"
              value={weight}
            />
            <InputField
              label="Длина упаковки, мм"
              onChange={() => void 0}
              name="packageLength"
              value={400}
            />
            <InputField
              label="Ширина упаковки, мм"
              onChange={() => void 0}
              name="packageWidth"
              value={600}
            />
            <InputField
              label="Высота упаковки, мм"
              onChange={() => void 0}
              name="packageHeight"
              value={1000}
            />
          </div>
        </InputBlock>
        <InputBlock title="Медиа">
          <InputImage
            label="Главное изображение"
            defaultValue={primaryImage}
            onChange={setPrimaryImage}
          />
          <MultipleImagesInput
            label="Изображения в профиле"
            images={images}
            onChange={setImages}
          />
        </InputBlock>
        <div className={style.buttons.wrapper}>
          <Button type={ButtonTypes.NEUTRAL} disabled={isDisabled}>
            Очистить
          </Button>
          <Button
            type={ButtonTypes.SUCCESS}
            onClick={handleSaveClick}
            isLoading={isLoading}
            disabled={isDisabled}>
            Сохранить
          </Button>
        </div>
      </div>
    );
  }
);
