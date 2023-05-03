import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from './navigation/AppNavigator';
import {StatusBar} from 'react-native';

const App: React.FC = () => {
  return (
    <>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </>
  );
};

export default App;
