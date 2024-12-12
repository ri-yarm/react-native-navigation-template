import { useNavigation } from '@react-navigation/native';
import { FC, useState } from 'react';
import {
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import { PathsProducts } from '@/navigation/pathsProducts';

import { styles } from '@/screens/ListProducts/index.styles';
import { NavigationProp } from '@/screens/ListProducts/types';

import listMock from '@/lib/mock/productsMock.json';

const ListProducts: FC = () => {
  const navigation = useNavigation<NavigationProp>();

  const [products, _] = useState<Product[]>(listMock);
  const [searchText, setSearchText] = useState<string>('');
  const [sortAsc, setSortAsc] = useState<boolean>(true);

  const filteredProducts = products
    .filter((product) =>
      product.name.toLowerCase().includes(searchText.toLowerCase()),
    )
    .sort((a, b) =>
      sortAsc ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name),
    );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Поиск"
        value={searchText}
        onChangeText={setSearchText}
      />
      <TouchableOpacity onPress={() => setSortAsc(!sortAsc)}>
        <Text style={styles.sortButton}>
          Сортировка по: {sortAsc ? 'увеличению' : 'уменьшению'}
        </Text>
      </TouchableOpacity>
      <FlatList
        data={filteredProducts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(PathsProducts.DETAIL_PRODUCT, {
                product: item,
              })
            }
          >
            <Text style={styles.item}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default ListProducts;
