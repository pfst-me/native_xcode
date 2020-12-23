import React from 'react';
import Navigation from './Navigation';
// import DrawerNavigation from './DrawerNavigation';

// import Constants from 'expo-constants';

const App = () => {
  return (
    <>
      <StatusBar backgroundColor="blue" barStyle="dark-content" />
      <StatusBar hidden={false} />
      <Navigation />
      {/* <DrawerNavigation /> */}
    </>
  );
};

export default App;
