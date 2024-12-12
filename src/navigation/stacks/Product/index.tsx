import { createStackNavigator } from '@react-navigation/stack';

import { PathsProducts } from '@/navigation/pathsProducts';
import { ProductsStackParamList } from '@/navigation/stacks/Product/types';

import { DetailProduct, ListProducts } from '@/screens';

const Stack = createStackNavigator<ProductsStackParamList>();

function ProductStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={PathsProducts.LIST_PRODUCTS}
        component={ListProducts}
        options={{ title: 'Cписок продуктов' }}
      />
      <Stack.Screen
        name={PathsProducts.DETAIL_PRODUCT}
        component={DetailProduct}
        options={({ route }) => ({
          title: route?.params?.product?.name || 'Подробнее',
        })}
      />
    </Stack.Navigator>
  );
}

export default ProductStack;
