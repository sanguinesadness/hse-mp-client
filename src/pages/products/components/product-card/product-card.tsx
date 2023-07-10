import { cx } from '@emotion/css';
import { TOzonProduct } from 'api/models/ozon-product.model';
import { ReactComponent as CheckIcon } from 'assets/icons/check.svg';
import { ReactComponent as CrossIcon } from 'assets/icons/cross.svg';
import { RoutesEnum } from 'consts';
import { useMouseHover } from 'hooks';
import { observer } from 'mobx-react';
import { useRef, useState } from 'react';
import LinesEllipsis from 'react-lines-ellipsis';
import { useNavigate } from 'react-router-dom';
import { formatDate } from 'utils';
import { productCardStyle as style } from './product-card.style';

type TProductCardProps = {
  product: TOzonProduct;
};

const CheckedIconGreen = () => (
  <CheckIcon
    className={cx(
      style.body.info.additional.fboFbs.item.icon.default,
      style.body.info.additional.fboFbs.item.icon.positive
    )}
  />
);

const CrossIconRed = () => (
  <CrossIcon
    className={cx(
      style.body.info.additional.fboFbs.item.icon.default,
      style.body.info.additional.fboFbs.item.icon.negative
    )}
  />
);

export const ProductCard = observer(
  ({ product }: TProductCardProps): JSX.Element => {
    const navigate = useNavigate();
    const [amount, setAmount] = useState(Math.floor(Math.random() * 20));

    const isFbsEnabled = !!product.sources.find(
      ({ source }: any) => source === 'fbs'
    )?.isEnabled;
    const isFboEnabled = !!product.sources.find(
      ({ source }: any) => source === 'fbo'
    )?.isEnabled;

    const wrapperRef = useRef<HTMLDivElement>(null);
    const isHovered = useMouseHover(wrapperRef);

    const handleCardClick = (): void => {
      navigate(`${RoutesEnum.PRODUCTS}/${product.id}`);
    };

    return (
      <div
        onClick={handleCardClick}
        className={cx(style.wrapper.default, {
          [style.wrapper.hovered]: isHovered
        })}
        ref={wrapperRef}>
        <div className={style.body.wrapper}>
          <div className={style.body.image.wrapper}>
            <img
              className={style.body.image.self}
              alt=""
              src={
                product.primaryImage ||
                'https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-6.png'
              }
            />
          </div>
          <div className={style.body.info.wrapper}>
            <div className={style.body.info.priceDate.wrapper}>
              <span className={style.body.info.priceDate.price}>
                {Number.parseFloat(product.price)} ₽
              </span>
              <span className={style.body.info.priceDate.date}>
                {formatDate(product.createdAt)}
              </span>
            </div>
            <div className={style.body.info.title.wrapper}>
              <LinesEllipsis
                className={style.body.info.title.self}
                text={product.name}
                maxLine={3}
                basedOn="letters"
              />
            </div>
            <div className={style.body.info.additional.wrapper}>
              <div className={style.body.info.additional.barcodeOffer.wrapper}>
                <span className={style.body.info.additional.barcodeOffer.item}>
                  {product.barcode || '—'}
                </span>
                <span className={style.body.info.additional.barcodeOffer.item}>
                  {product.offerId || '—'}
                </span>
              </div>
              <div className={style.body.info.additional.fboFbs.wrapper}>
                <div className={style.body.info.additional.fboFbs.item.wrapper}>
                  <span className={style.body.info.additional.fboFbs.item.text}>
                    FBS
                  </span>
                  {isFbsEnabled ? <CheckedIconGreen /> : <CrossIconRed />}
                </div>
                <div className={style.body.info.additional.fboFbs.item.wrapper}>
                  <span className={style.body.info.additional.fboFbs.item.text}>
                    FBO
                  </span>
                  {isFboEnabled ? <CheckedIconGreen /> : <CrossIconRed />}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={style.footer.wrapper}>
          <div className={style.footer.weightAmount.wrapper}>
            <span className={style.footer.weightAmount.weight}>
              {product.volumeWeight} кг
            </span>
            <span className={style.footer.weightAmount.amount}>
              {amount} шт
            </span>
          </div>
          <div className={style.footer.status.wrapper}>
            <div className={style.footer.status.name}>
              {product.status.stateName}
            </div>
            <div className={style.footer.status.description}>
              {product.status.stateDescription}
            </div>
          </div>
        </div>
      </div>
    );
  }
);
