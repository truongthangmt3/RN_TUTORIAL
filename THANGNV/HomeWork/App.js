import React, { Component } from 'react';
import {
  SafeAreaView
} from 'react-native';
import AppNavigator from './src/navigation/AppNavigator';
import NavigationUtil from './src/navigation/NavigationUtil';
export default class App extends Component {
  render() {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: '#F5F6F8'
        }}>
        <AppNavigator ref={(ref) => NavigationUtil.setTopLevelNavigator(ref)} />
      </SafeAreaView>
    );
  }
}