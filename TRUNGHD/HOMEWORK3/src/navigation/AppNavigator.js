import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator, BottomTabBar} from 'react-navigation-tabs';

import LoginScreen from '../components/LoginScreen';
import Huongdansudung from '../components/StackUserScreen/Huongdansudung';
import UserBuyScreen from '../components/StackUserScreen/UserBuyScreen';
import UserInforScreen from '../components/StackUserScreen/UserInforScreen';
import ChangePassword from '../components/StackUserScreen/ChangePassword';
import MyList from '../components/StackUserScreen/MyList';

import HomeScreen from '../components/BottomTab/HomeScreen';
import CustomerScreen from '../components/BottomTab/CustomerScreen';
import UserScreen from '../components/BottomTab/UserScreen.js';
import NotificationScreen from '../components/BottomTab/NotificationScreen';

import SplashScreen from '../components/SplashScreen';

import {SCREEN_ROUTER} from '../utils/constant';

const bottomtabNav = createBottomTabNavigator({
  [SCREEN_ROUTER.HOME_SCREEN]: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarLabel: 'Trang chủ',
      tabBarIcon: ({focused, tintColor}) => {
        return (
          <Image
            style={{
              tintColor: focused ? '#69AAFF' : '#ABABAB',
              width: focused ? 25 : 20,
              height: focused ? 25 : 20,
              resizeMode: 'contain',
            }}
            source={require('../assets/images/ImgUserScreen/ic_home.png')}
          />
        );
      },
    },
  },
  [SCREEN_ROUTER.CUSTOMER_SCREEN]: {
    screen: CustomerScreen,
    navigationOptions: {
      tabBarLabel: 'KH quan tâm',
      tabBarIcon: ({focused, tintColor}) => {
        return (
          <Image
            style={{
              tintColor: focused ? '#69AAFF' : '#ABABAB',
              width: focused ? 25 : 20,
              height: focused ? 25 : 20,
              resizeMode: 'contain',
            }}
            source={require('../assets/images/ImgUserScreen/ic_awesome_users.png')}
          />
        );
      },
    },
  },
  [SCREEN_ROUTER.NOTIFICATION_SCREEN]: {
    screen: NotificationScreen,
    navigationOptions: {
      tabBarLabel: 'Thông báo',
      tabBarIcon: ({focused, tintColor}) => {
        return (
          <Image
            style={{
              tintColor: focused ? '#69AAFF' : '#ABABAB',
              width: focused ? 25 : 20,
              height: focused ? 25 : 20,
              resizeMode: 'contain',
            }}
            source={require('../assets/images/ImgUserScreen/ic_bell.png')}
          />
        );
      },
    },
  },
  [SCREEN_ROUTER.USER_SCREEN]: {
    screen: UserScreen,
    navigationOptions: {
      tabBarLabel: 'Tài khoản',
      tabBarIcon: ({focused, tintColor}) => {
        return (
          <Image
            style={{
              tintColor: focused ? '#69AAFF' : '#ABABAB',
              width: focused ? 25 : 20,
              height: focused ? 25 : 20,
              resizeMode: 'contain',
            }}
            source={require('../assets/images/ImgUserScreen/ic_human.png')}
          />
        );
      },
    },
  },
});

const stackNav = createStackNavigator({
  bottomtabNav,
  [SCREEN_ROUTER.HUONG_DAN_SU_DUNG]: Huongdansudung,
  [SCREEN_ROUTER.USER_BUY_SCREEN]: UserBuyScreen,
  [SCREEN_ROUTER.USER_INFOR_SCREEN]: UserInforScreen,
  [SCREEN_ROUTER.CHANGE_PASSWORD]: ChangePassword,
  [SCREEN_ROUTER.MY_LIST]: MyList,
});

const switchNav = createSwitchNavigator({
  [SCREEN_ROUTER.SPLASH_SCREEN]: SplashScreen,
  [SCREEN_ROUTER.LOGIN_SCREEN]: LoginScreen,
  [SCREEN_ROUTER.MAIN]: stackNav,
});

export default createAppContainer(switchNav);
