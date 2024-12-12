import { FC } from 'react';
import { Text, View } from 'react-native';

import { styles } from '@/screens/DetailProduct/index.styles';
import { DetailProductProps } from '@/screens/DetailProduct/types';

const DetailProduct: FC<DetailProductProps> = ({ route }) => {
  const { product } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.description}>{product.description}</Text>
    </View>
  );
};

export default DetailProduct;
