import { cx } from '@emotion/css';
import { ReactComponent as CheckIcon } from 'assets/icons/check.svg';
import { ReactComponent as CrossIcon } from 'assets/icons/cross.svg';
import { useMouseHover } from 'hooks';
import { observer } from 'mobx-react';
import { useRef } from 'react';
import LinesEllipsis from 'react-lines-ellipsis';
import { productCardStyle as style } from './product-card.style';

type TProductCardProps = {
  product: any;
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
    const isFbsEnabled = !!product.sources.find(
      ({ source }: any) => source === 'fbs'
    )?.is_enabled;
    const isFboEnabled = !!product.sources.find(
      ({ source }: any) => source === 'fbo'
    )?.is_enabled;

    const wrapperRef = useRef<HTMLDivElement>(null);
    const isHovered = useMouseHover(wrapperRef);

    return (
      <div
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
                product.primary_image ||
                'https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-6.png'
              }
            />
          </div>
          <div className={style.body.info.wrapper}>
            <div className={style.body.info.priceDate.wrapper}>
              <span className={style.body.info.priceDate.price}>
                {Number.parseFloat(product.price)} ₽
              </span>
              <span className={style.body.info.priceDate.date}>30.04.2023</span>
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
                  {product.offer_id || '—'}
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
              {product.volume_weight} кг
            </span>
            <span className={style.footer.weightAmount.amount}>19 шт</span>
          </div>
          <div className={style.footer.status.wrapper}>
            <span className={style.footer.status.name}>
              {product.status.state_name}
            </span>
            <span className={style.footer.status.description}>
              {product.status.state_description}
            </span>
          </div>
        </div>
      </div>
    );
  }
);
