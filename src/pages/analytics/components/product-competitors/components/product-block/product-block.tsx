import { cx } from '@emotion/css';
import { TProductCompetitor, TProductWithCompetitors } from 'api/models';
import { ReactComponent as ArrowIcon } from 'assets/icons/caret-down.svg';
import { observer } from 'mobx-react';
import { useState } from 'react';
import { ProductCompetitorCard } from '../product-competitor-card';
import { productBlockStyle as style } from './product-block.style';

type TProductBlockProps = {
  product: TProductWithCompetitors;
  index: number;
};

export const ProductBlock = observer(
  ({ product, index }: TProductBlockProps): JSX.Element => {
    const [isCompetitorsVisible, setIsCompetitorsVisible] =
      useState<boolean>(false);

    const handleVisibilityToggle = (): void => {
      setIsCompetitorsVisible((prev) => !prev);
    };

    return (
      <div key={product.id} className={style.wrapper}>
        <div className={style.self.wrapper} onClick={handleVisibilityToggle}>
          <div className={style.self.counter}>{index + 1}</div>
          <div className={style.self.name}>{product.name}</div>
          <div
            className={cx(style.self.expandButton.wrapper.default, {
              [style.self.expandButton.wrapper.rotated]: isCompetitorsVisible
            })}>
            <ArrowIcon className={style.self.expandButton.icon} />
          </div>
        </div>
        <div className={style.resultCount.wrapper}>
          <span className={style.resultCount.text}>Найдено:</span>
          <span className={style.resultCount.value}>
            {product.competitors.length}
          </span>
        </div>
        {isCompetitorsVisible && (
          <div className={style.competitors.wrapper}>
            {product.competitors.map((competitor: TProductCompetitor) => (
              <ProductCompetitorCard
                key={competitor.id}
                competitor={competitor}
              />
            ))}
          </div>
        )}
      </div>
    );
  }
);
