import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import LoginScreen from './apps/component/LoginScreen';
import UserScreen from './apps/component/UserScreen';
import Huongdansudung from './apps/component/Huongdansudung';
import UserBuyScreen from './apps/component/UserBuyScreen';
import UserInforScreen from './apps/component/UserInforScreen';

export class App extends Component {
  render() {
    return <UserScreen />;
  }
}

const AppNavigator = createStackNavigator(
  {
    user: UserScreen,
    login: LoginScreen,
    huongdansudung: Huongdansudung,
    userbuyscreen: UserBuyScreen,
    userinforscreen: UserInforScreen,
  },
  {
    headerMode: 'none',
  },
);

export default createAppContainer(AppNavigator);