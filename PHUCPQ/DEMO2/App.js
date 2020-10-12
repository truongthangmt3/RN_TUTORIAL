/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import AppNavigator from './src/Navigation/AppNavigator';
import NavigationUtil from './src/Navigation/NavigationUtil';

class App extends Component {

  render() {
    return (
      <AppNavigator
        ref={ref => NavigationUtil.setTopLevelNavigator(ref)}
      ></AppNavigator>
    );
  }
};
export default App;
