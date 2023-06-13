export type TProduct = {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  barcode?: string;
  offerId: string;
  weight: number;
  primaryImage?: string;
  oldPrice: number;
  newPrice: number;
  userId: string;
};
