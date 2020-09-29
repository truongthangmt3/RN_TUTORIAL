/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import AppNavigator from './navigation/AppNavigator';
import NavigationUtil from './navigation/NavigationUtil';
class App extends Component {

  render() {
    return (
      < AppNavigator
        ref={ref => NavigationUtil.setTopLevelNavigator(ref)} />
    );
  }
};
export default App;