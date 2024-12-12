import { NativeStackNavigationProp } from 'react-native-screens/native-stack';

import { PathsProducts } from '@/navigation/pathsProducts';
import { ProductsStackParamList } from '@/navigation/stacks/Product/types';

export type NavigationProp = NativeStackNavigationProp<
  ProductsStackParamList,
  typeof PathsProducts.LIST_PRODUCTS
>;
