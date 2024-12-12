import { RouteProp } from '@react-navigation/native';

import { PathsProducts } from '@/navigation/pathsProducts';
import { ProductsStackParamList } from '@/navigation/stacks/Product/types';

type DetailProductRouteProp = RouteProp<
  ProductsStackParamList,
  typeof PathsProducts.DETAIL_PRODUCT
>;

export type DetailProductProps = {
  route: DetailProductRouteProp;
};
