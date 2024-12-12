import { memo, ReactNode } from 'react';
import { StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { MMKV } from 'react-native-mmkv';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { ThemeProvider } from '@/theme';

export const storage = new MMKV();

//? 1 - STORE
//? 2 - THEME
//? 3 - Save area
//? 4 - GESTURE

type IChildren = {
  children: ReactNode;
};

const AppProviders = ({ children }: IChildren) => {
  // иницация стора если бы он здесь был
  return (
    // <Provider store={store}>
    <ThemeProvider storage={storage}>
      <SafeAreaProvider>
        <GestureHandlerRootView style={styles.flex}>
          {children}
        </GestureHandlerRootView>
      </SafeAreaProvider>
    </ThemeProvider>
  );
};

const styles = StyleSheet.create({ flex: { flex: 1 } });

export default memo(AppProviders);
