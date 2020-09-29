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
import UserScreen from './src/screens/User';
import LoginScreen from './src/screens/LoginScreen';
import Splash from './src/screens/Splash'
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
  Login: LoginScreen,
  Splash,
  home: HomeScreen,
  user: UserScreen,

}, {
  headerMode: 'none',
})

export default createAppContainer(AppNavigator);
