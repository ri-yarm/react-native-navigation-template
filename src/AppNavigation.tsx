import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import React, { useState } from 'react';

import MainLayout from '@/layouts/MainLayout';

// инициация laytов для  более сложной логики приложения, допустим приветвенный экран, при первой загрузке приложения,
// или реализация слоёв с внутренней логикой отрезанной от бизнес логики
// или реализиация deeplinking и так далее
const AppNavigation = () => {
  const navigationRef = useNavigationContainerRef();
  const [isReady, setIsReady] = useState<boolean>(false);

  const onReady = () => {
    setIsReady(true);
  };

  return (
    <NavigationContainer ref={navigationRef} onReady={onReady}>
      {isReady && <MainLayout />}
    </NavigationContainer>
  );
};

export default React.memo(AppNavigation);
