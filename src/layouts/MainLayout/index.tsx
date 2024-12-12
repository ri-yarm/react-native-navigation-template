import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { RootsPath } from '@/navigation/pathsProducts';
import { ProductStack, ProfileStack } from '@/navigation/stacks';

const Tab = createBottomTabNavigator();

function MainLayout() {
  return (
    <Tab.Navigator
      initialRouteName={RootsPath.MAIN}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen name={RootsPath.MAIN} component={ProductStack} />
      <Tab.Screen name={RootsPath.PROFILE} component={ProfileStack} />
    </Tab.Navigator>
  );
}

export default MainLayout;
