export enum MarketplacesEnum {
  YANDEX_MARKET = 'YANDEX_MARKET',
  WILDBERRIES = 'WILDBERRIES',
  OZON = 'OZON'
}

export type TMarketplaceInfo = {
  text: string;
  icon: string;
  url: string;
};

export const MarketplaceTextIconMap: Record<
  MarketplacesEnum,
  TMarketplaceInfo
> = {
  [MarketplacesEnum.YANDEX_MARKET]: {
    text: 'Y.MARKET',
    icon: 'yandex-market.png',
    url: 'https://market.yandex.ru/'
  },
  [MarketplacesEnum.OZON]: {
    text: 'OZON',
    icon: 'ozon.png',
    url: 'https://www.ozon.ru/'
  },
  [MarketplacesEnum.WILDBERRIES]: {
    text: 'WB',
    icon: 'wildberries.png',
    url: 'https://www.wildberries.ru/'
  }
};
