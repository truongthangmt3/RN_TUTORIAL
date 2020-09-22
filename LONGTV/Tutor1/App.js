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
import HookHomeScreen from './src/screens/HookHomeScreen.js'
import createAppContainer from 'react-navigation'
import createStackNavigator from 'react-navigation-stack'
import User from './src/screens/User'

class App extends Component {

  render() {
    return (
      <HomeScreen />
    );
  }
};

const AppNavigator = createAppContainer({
  home: HomeScreen,
  user: User,
}, {
  headerMode: 'none',
}

)

export default createAppContainer(AppNavigator);
