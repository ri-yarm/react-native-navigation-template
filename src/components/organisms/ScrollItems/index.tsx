import { FlatList, ListRenderItem } from 'react-native';

type ScrollItemsProps<T> = {
  data: T[];
  renderItem: ListRenderItem<T>;
};

const ScrollItems = <T,>({ data, renderItem }: ScrollItemsProps<T>) => {
  // ? тут допустим будет логика загрузки данных при достижеени конца списка
  return (
    <>
      <FlatList
        data={data}
        keyExtractor={(item, index) => (item as any).id || index.toString()}
        renderItem={renderItem}
      />
    </>
  );
};

export default ScrollItems;
