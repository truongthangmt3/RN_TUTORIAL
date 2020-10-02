import React, {Component} from 'react';

import AppNavigator from './src/navigation/AppNavigator';
import NavigationUtil from './src/navigation/NavigationUtil';

import NotificationScreen from './src/components/BottomTab/NotificationScreen';
import CustomerScreen from './src/components/BottomTab/CustomerScreen';
import UserScreen from './src/components/BottomTab/UserScreen';

export class App extends Component {
  render() {
    return (
      <AppNavigator ref={(ref) => NavigationUtil.setTopLevelNavigator(ref)} />
      //<CustomerScreen />
      //<NotificationScreen />
      // <UserScreen />
    );
  }
}

export default App;
