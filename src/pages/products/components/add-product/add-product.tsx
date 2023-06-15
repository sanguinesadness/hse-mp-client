import { TOzonProductExtended } from 'api/models';
import { Button } from 'components/button';
import { InputImage } from 'components/image-input';
import { InputField } from 'components/input-field';
import { MultipleImagesInput } from 'components/multiple-images-input';
import { ButtonTypes } from 'consts';
import { observer } from 'mobx-react';
import { InputBlock } from 'pages/products-detail/components/product-edit';
import { useState } from 'react';
import { productsStore } from 'stores';
import { addProductStyle as style } from './add-product.style';

export const AddProduct = observer((): JSX.Element => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isDisabled, setIsDisabled] = useState<boolean>(false);

  const [name, setName] = useState<string>('');
  const [id, setId] = useState<string>('');
  const [offerId, setOfferId] = useState<string>('');
  const [barcode, setBarcode] = useState<string>('');
  const [category, setCategory] = useState<string>('');
  const [oldPrice, setOldPrice] = useState<string>('');
  const [newPrice, setNewPrice] = useState<string>('');
  const [vat, setVat] = useState<string>('');
  const [weight, setWeight] = useState<string>('');
  const [height, setHeight] = useState<string>('');
  const [length, setLength] = useState<string>('');
  const [width, setWidth] = useState<string>('');
  const [primaryImage, setPrimaryImage] = useState<string>('');
  const [images, setImages] = useState<Array<string>>([]);

  const handleSaveClick = async (): Promise<void> => {
    setIsLoading(true);

    const data: TOzonProductExtended = {
      name,
      id: 235234234,
      offerId,
      barcode,
      categoryId: 23,
      oldPrice,
      price: newPrice,
      vat,
      volumeWeight: 0.8,
      primaryImage,
      images,
      buyboxPrice: '',
      createdAt: '2023-06-15T17:18:27.942539Z',
      marketingPrice: '',
      minOzonPrice: '',
      premiumPrice: '',
      recommendedPrice: '',
      minPrice: '',
      sources: [],
      stocks: {
        coming: 0,
        reserved: 0,
        present: 0
      },
      errors: [],
      visible: true,
      visibilityDetails: {
        hasPrice: true,
        hasStock: true,
        activeProduct: true
      },
      priceIndex: '',
      commissions: [],
      isPrepayment: false,
      isPrepaymentAllowed: false,
      images360: [],
      colorImage: '',
      status: {
        state: 'price_sent',
        stateFailed: '',
        moderateStatus: '',
        declineReasons: [],
        validationState: 'success',
        stateName: 'Проверка',
        stateDescription: 'На модерации',
        isFailed: false,
        isCreated: true,
        stateTooltip: '',
        itemErrors: [],
        stateUpdatedAt: '2023-06-15T01:13:39.426842Z'
      },
      state: '',
      serviceType: '',
      fboSku: 0,
      fbsSku: 0,
      currencyCode: '',
      isKgt: false,
      discountedStocks: {
        coming: 0,
        present: 0,
        reserved: 0
      },
      isDiscounted: false,
      hasDiscountedItem: false,
      barcodes: [],
      updatedAt: '',
      description: '',
      priceIndexes: {
        priceIndex: 'WITHOUT_INDEX',
        externalIndexData: {
          minimalPrice: '',
          minimalPriceCurrency: '',
          priceIndexValue: 0
        },
        ozonIndexData: {
          minimalPrice: '',
          minimalPriceCurrency: '',
          priceIndexValue: 0
        },
        selfMarketplacesIndexData: {
          minimalPrice: '',
          minimalPriceCurrency: '',
          priceIndexValue: 0
        }
      }
    };

    setIsLoading(true);
    productsStore.addProduct(data).finally(() => {
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
            placeholder="237431924239"
            onChange={(e) => setId(e.event.target.value)}
            name="id"
            value={id}
          />
          <InputField
            label="Артикул"
            placeholder="AG-20"
            onChange={(e) => setOfferId(e.event.target.value)}
            name="offerId"
            value={offerId}
          />
          <InputField
            label="Штрихкод"
            placeholder="OZN1026563891"
            onChange={(e) => setBarcode(e.event.target.value)}
            name="barcode"
            value={barcode}
          />
          <InputField
            label="Категория"
            placeholder="Электроника"
            onChange={(e) => setCategory(e.event.target.value)}
            name="category"
            value={category}
          />
          <InputField
            label="Цена до скидки"
            placeholder="0 ₽"
            onChange={(e) => setOldPrice(e.event.target.value)}
            name="oldPrice"
            value={oldPrice}
          />
          <InputField
            label="Цена после скидки"
            placeholder="0 ₽"
            onChange={(e) => setNewPrice(e.event.target.value)}
            name="newPrice"
            value={newPrice}
          />
          <InputField
            label="НДС"
            placeholder="20%"
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
            placeholder="0"
            onChange={(e) => setWeight(e.event.target.value)}
            name="volumeWeight"
            value={weight}
          />
          <InputField
            label="Длина упаковки, мм"
            placeholder="0"
            onChange={(e) => setLength(e.event.target.value)}
            name="packageLength"
            value={length}
          />
          <InputField
            label="Ширина упаковки, мм"
            placeholder="0"
            onChange={(e) => setWidth(e.event.target.value)}
            name="packageWidth"
            value={width}
          />
          <InputField
            label="Высота упаковки, мм"
            placeholder="0"
            onChange={(e) => setHeight(e.event.target.value)}
            name="packageHeight"
            value={height}
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
});
