/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Image,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import CustomButton from './src/component/CustomButton.js';
import HomeScreen from './src/screens/HomeScreen.js';
import HookHomeScreen from './src/screens/HookHomeScreen.js';
import UserScreen from './src/screens/User';
import LoginScreen from './src/screens/Login';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

class App extends Component {
  render() {
    return (
      <Login />
    );
  }
};

const AppNavigator = createStackNavigator({
  home: HomeScreen,
  user: UserScreen,
  Login: LoginScreen
}, {
  headerMode: 'none',
})

export default createAppContainer(AppNavigator);
