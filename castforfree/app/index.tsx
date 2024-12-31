import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Routes from '../navigation'; // Adjust the path as necessary

const index = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Routes />
    </GestureHandlerRootView >
  );
};

export default index;