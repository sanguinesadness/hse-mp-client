import { cx } from '@emotion/css';
import {
  MarketplacesEnum,
  MarketplaceTextIconMap,
  TMarketplaceInfo
} from 'consts';
import { useState } from 'react';
import { redirect } from 'utils/redirect';
import { marketplaceSelectStyle } from './marketplace-select.style';

const handleImageClick = (id: MarketplacesEnum) => () => {
  const url = MarketplaceTextIconMap[id].url;
  return redirect(url);
};

export const MarketplaceSelect = (): JSX.Element => {
  const [selectedMarketplace, setSelectedMarketplace] =
    useState<MarketplacesEnum>(MarketplacesEnum.OZON);

  const handleMarketplaceChange = (id: MarketplacesEnum) => () => {
    setSelectedMarketplace(id);
  };

  return (
    <div className={marketplaceSelectStyle.wrapper}>
      <div className={marketplaceSelectStyle.list}>
        {Object.entries(MarketplaceTextIconMap).map(
          ([id, info]: [string, TMarketplaceInfo]) => (
            <div
              key={id}
              onClick={handleMarketplaceChange(id as MarketplacesEnum)}
              className={cx(marketplaceSelectStyle.listItem.default, {
                [marketplaceSelectStyle.listItem.selected]:
                  id === selectedMarketplace
              })}>
              {info.text}
            </div>
          )
        )}
      </div>
      <div
        className={marketplaceSelectStyle.imgWrapper}
        onClick={handleImageClick(selectedMarketplace)}>
        <img
          className={marketplaceSelectStyle.img}
          src={require(`assets/logos/${MarketplaceTextIconMap[selectedMarketplace].icon}`)}
        />
      </div>
    </div>
  );
};
