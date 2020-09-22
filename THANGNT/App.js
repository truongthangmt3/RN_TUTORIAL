/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  View,
  SafeAreaView,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import img from './assets/imagesAsset';
import CustomButton from './src/components/CustomButton'
import HomeScreen from './src/screens/HomeScreen.js'
import UserScreen from './src/screens/UserSreen.js'
import HomeHookScreen from './src/screens/HomeHookScreen'
import data from './mockData.json'
import HookHomeScreen from './src/screens/HookHomeScreen';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

class App extends Component {
  render() {
    return (
      <HomeScreen />
    );
  }
};

const AppNavigator = createStackNavigator({
  home: HomeScreen,
  user: UserScreen
}, {
  headerMode: 'none',
})

export default createAppContainer(AppNavigator);
