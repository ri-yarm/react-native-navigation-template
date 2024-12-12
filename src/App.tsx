import 'react-native-gesture-handler';

import AppNavigation from '@/AppNavigation';
import AppProviders from '@/AppProviders';

import InitLayout from './layouts/InitLayouts';

function App() {
  return (
    <AppProviders>
      <InitLayout.Base />
      <AppNavigation />
    </AppProviders>
  );
}

export default App;
