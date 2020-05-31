import React from 'react';
import { Platform, TouchableOpacity, Image, Dimensions } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { connect } from 'react-redux';

// import * as SecureStore from "expo-secure-store";

import { Feather } from '@expo/vector-icons';
import SignInScreen from '../Account/SignIn';
import SignUpScreen from '../Account/SignUp';

const Stack = createStackNavigator();

function AccountStackScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          title: '',
          headerStyle: {
            backgroundColor: 'yellow',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
        name='Home'
        component={Home}
      />
    </Stack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

function MainStack(props) {
  if (!props.isSignedIn) {
    return (
      <Stack.Navigator initialRouteName='SignIn'>
        {/* Auth */}
        <Stack.Screen
          name='SignIn'
          options={{
            title: '',
            headerStyle: {
              backgroundColor: 'yellow',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
          component={SignInScreen}
        />
        <Stack.Screen
          name='SignUp'
          options={{
            title: '',
            headerStyle: {
              backgroundColor: 'yellow',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
          component={SignUpScreen}
        />

        {/* Auth */}
      </Stack.Navigator>
    );
  }
  return <View></View>;
}

const mapStateToProps = (state) => ({
  isSignedIn: state.account.isLoggedIn,
  hasOnboarded: state.account.hasOnboarded,
});

export default connect(mapStateToProps)(MainStack);
