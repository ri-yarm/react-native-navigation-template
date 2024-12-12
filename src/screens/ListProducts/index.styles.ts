import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  searchInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 8,
    marginBottom: 10,
  },
  sortButton: { color: 'blue', marginBottom: 10, fontSize: 16 },
  item: { padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' },
});
