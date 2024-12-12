import React, { memo } from 'react';

//? RENDERING ALL STATES
function Base() {
  //   инициация при первом запуске приложения
  return (
    <>
      {/*<ThemeInit />*/}
      {/*<StatusBarInit />*/}
    </>
  );
}

//? RENDERING ONLY WHEN USER SKIP INTRODUCTION SCREEN
function App() {
  //   инициация ключевых элементов приложения, уведомления firebase, интеграция с яндекс картами, испольщование локации и так далее
  return (
    <>
      {/*<UserInit />*/}
      {/*<NotificationInit />*/}
      {/*<LocationInit />*/}
      {/*<BadgeInit />*/}
      {/*<YMapInit />*/}
    </>
  );
}

//? RENDERING ONLY DEV MODE
// function Dev(props: DevInitProps) {
//   // if (!IS_DEV) {
//   //   return null;
//   // }
//   // return <DevInit {...props} />;
// }

const InitLayout = {
  Base: memo(Base),
  App: memo(App),
  // Dev: memo(Dev), ? иниациализация только в режиме разработки допустим Flipper
};

export default InitLayout;
