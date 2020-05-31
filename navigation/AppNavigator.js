import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import MainNavigator from './MainNavigator';

import { NavigationContainer } from '@react-navigation/native';

export default function App(props) {
  return (
    <NavigationContainer>
      <MainNavigator></MainNavigator>
    </NavigationContainer>
  );
}
