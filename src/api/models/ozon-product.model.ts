export type TSource = {
  isEnabled: boolean;
  sku: number;
  source: string;
};

export type TStock = {
  coming: number;
  present: number;
  reserved: number;
};

export type TCommission = {
  percent: number;
  minValue: number;
  value: number;
  saleSchema: string;
  deliveryAmount: number;
  returnAmount: number;
};

export type TStatus = {
  state: string;
  stateFailed: string;
  moderateStatus: string;
  declineReasons: string[];
  validationState: string;
  stateName: string;
  stateDescription: string;
  isFailed: boolean;
  isCreated: boolean;
  stateTooltip: string;
  itemErrors: any[];
  stateUpdatedAt: string;
};

export type TPriceIndexData = {
  minimalPrice: string;
  minimalPriceCurrency: string;
  priceIndexValue: number;
};

export type TPriceIndexes = {
  priceIndex: string;
  externalIndexData: TPriceIndexData;
  ozonIndexData: TPriceIndexData;
  selfMarketplacesIndexData: TPriceIndexData;
};

export type TVisibilityDetails = {
  hasPrice: boolean;
  hasStock: boolean;
  activeProduct: boolean;
};

export type TOzonProduct = {
  id: number;
  name: string;
  offerId: string;
  barcode: string;
  buyboxPrice: string;
  categoryId: number;
  createdAt: string;
  images: string[];
  marketingPrice: string;
  minOzonPrice: string;
  oldPrice: string;
  premiumPrice: string;
  price: string;
  recommendedPrice: string;
  minPrice: string;
  sources: TSource[];
  stocks: TStock;
  errors: any[];
  vat: string;
  visible: boolean;
  visibilityDetails: TVisibilityDetails;
  priceIndex: string;
  commissions: TCommission[];
  volumeWeight: number;
  isPrepayment: boolean;
  isPrepaymentAllowed: boolean;
  images360: string[];
  colorImage: string;
  primaryImage: string;
  status: TStatus;
  state: string;
  serviceType: string;
  fboSku: number;
  fbsSku: number;
  currencyCode: string;
  isKgt: boolean;
  discountedStocks: TStock;
  isDiscounted: boolean;
  hasDiscountedItem: boolean;
  barcodes: string[];
  updatedAt: string;
  priceIndexes: TPriceIndexes;
};
