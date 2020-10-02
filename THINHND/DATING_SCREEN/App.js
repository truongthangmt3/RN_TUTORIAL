import React, { Component } from 'react'
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ActivityIndicator,
  FlatList,
  ImageBackground,
  Image,
  Dimensions
} from 'react-native';
import HomeScreen from './src/screens/HomeScreen'
import ChangePasswordScreen from './src/screens/ChangePasswordScreen'
import UserScreen from './src/components/UserScreen'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import AppNavigator from './src/navigation/AppNavigator';
import NavigationUtil from './src/navigation/NavigationUtil';
class App extends Component {
  render() {
    return (
      <AppNavigator
        ref={ref => NavigationUtil.setTopLevelNavigator(ref)}

      />
    )
  }
};

export default App