import { TOzonProductExtended } from 'api/models';
import { ReactComponent as ExclamationIcon } from 'assets/icons/exclamation.svg';
import { ContextualNotification } from 'components/contextual-notification';
import { Separator } from 'components/separator';
import { observer } from 'mobx-react';
import { AdvancedField } from 'pages/products-detail/components/advanced-field';
import { PhotoViewer } from 'pages/products-detail/components/photo-viewer';
import { SimpleField } from 'pages/products-detail/components/simple-field';
import {
  extractTimeFromISOString,
  formatDate,
  formatPercentageFromString,
  formatPriceRub
} from 'utils';
import { productDetailStyle as style } from './product-detail.style';

type TProductDetailProps = {
  product: TOzonProductExtended;
  isArchived: boolean;
};

export const ProductDetail = observer(
  ({ product, isArchived }: TProductDetailProps): JSX.Element => {
    return (
      <div className={style.wrapper}>
        <div className={style.title}>{product.name}</div>
        {product.status.stateTooltip && (
          <ContextualNotification text={product.status.stateTooltip} />
        )}
        <div className={style.details.wrapper}>
          <div className={style.details.photoViewer.wrapper}>
            <PhotoViewer
              primaryImage={product.primaryImage}
              secondaryImages={product.images}
            />
          </div>
          <div className={style.details.fields.wrapper}>
            <div className={style.details.fields.header.wrapper}>
              {isArchived && (
                <div className={style.details.fields.header.archive.wrapper}>
                  <ExclamationIcon
                    className={style.details.fields.header.archive.icon}
                  />
                  <span className={style.details.fields.header.archive.text}>
                    Товар в архиве
                  </span>
                </div>
              )}
            </div>
            <div className={style.details.fields.list.wrapper}>
              <SimpleField title="Идентификатор" value={product.id} />
              <SimpleField title="Артикул" value={product.offerId} />
              <SimpleField title="Штрихкод" value={product.barcode} />
              <SimpleField title="Категория" value={product.categoryId} />
              <SimpleField
                title="Дата создания"
                value={formatDate(product.createdAt)}
                additionalValue={extractTimeFromISOString(product.createdAt)}
              />
              <SimpleField
                title="Дата обновления"
                value={formatDate(product.updatedAt)}
                additionalValue={extractTimeFromISOString(product.updatedAt)}
              />
              <Separator height={5} />
              <SimpleField title="Статус" value={product.status.stateName} />
              <SimpleField
                title="НДС"
                value={formatPercentageFromString(product.vat)}
              />
              <SimpleField title="Вес" value={product.volumeWeight + ' кг'} />
              <Separator height={5} />
              <AdvancedField
                title="Цена"
                simpleFieldsProps={[
                  {
                    title: 'Итог.',
                    value: formatPriceRub(product.marketingPrice)
                  },
                  {
                    title: 'Обычная',
                    value: formatPriceRub(product.price)
                  },
                  {
                    title: 'Старая',
                    value: formatPriceRub(product.oldPrice)
                  },
                  {
                    title: 'Рекоменд.',
                    value: formatPriceRub(product.recommendedPrice)
                  }
                ]}
              />
              <AdvancedField
                title="Комиссия"
                simpleFieldsProps={[
                  {
                    title: 'Процент',
                    value: product.commissions[0].percent + ' %'
                  },
                  {
                    title: 'Сумма',
                    value: product.commissions[0].value + ' ₽'
                  },
                  {
                    title: 'Доставка',
                    value: product.commissions[0].deliveryAmount
                  },
                  {
                    title: 'Возврат',
                    value: product.commissions[0].returnAmount
                  }
                ]}
              />
              <AdvancedField
                title="Остатки"
                simpleFieldsProps={[
                  {
                    title: 'Ожидается поставка',
                    value: product.discountedStocks.coming
                  },
                  {
                    title: 'Сейчас на складе',
                    value: product.discountedStocks.present
                  },
                  {
                    title: 'Зарезервировано',
                    value: product.discountedStocks.reserved
                  }
                ]}
              />
            </div>
          </div>
        </div>
        <Separator height={40} />
        <div className={style.description.wrapper}>
          <div className={style.description.title}>Описание</div>
          <div
            className={style.description.text}
            dangerouslySetInnerHTML={{ __html: product.description }}
          />
        </div>
        <Separator height={60} />
      </div>
    );
  }
);
