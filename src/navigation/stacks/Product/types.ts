import { PathsProducts } from '@/navigation/pathsProducts';

export type ProductsStackParamList = {
  [PathsProducts.LIST_PRODUCTS]: undefined;
  [PathsProducts.DETAIL_PRODUCT]: { product: Product };
};
