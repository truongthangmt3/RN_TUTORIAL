import React, {Component} from 'react';
import {View} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import LoginScreen from './src/components/LoginScreen';
import UserScreen from './src/components/UserScreen';
import Huongdansudung from './src/components/Huongdansudung';
import UserBuyScreen from './src/components/UserBuyScreen';
import UserInforScreen from './src/components/UserInforScreen';

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
