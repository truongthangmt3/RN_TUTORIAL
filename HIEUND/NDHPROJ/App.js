/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import CustomButtons from './src/components/CustomButtons';
import Stories from './src/components/Stories';
import HomeScreen from './screens/HomeScreen';
import HomeHookScreen from './screens/HomeHookScreen';
import UserScreen from './screens/UserScreen';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

class App extends Component {
  render() {
    return <HomeScreen />;
  }
}
const AppNavigator = createStackNavigator(
  {
    home: HomeScreen,
    user: UserScreen,
  },
  {headerMode: 'none'},
);
export default createAppContainer(AppNavigator);
