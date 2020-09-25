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
import UserScreen from './src/components/UserScreen'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
class App extends Component {
  render() {
    return (
      <HomeScreen />
    )
  }
};

const AppNavigator = createStackNavigator({
  home: HomeScreen,
  user: UserScreen
}, {
  headerMode: 'none'
})

export default createAppContainer(AppNavigator)