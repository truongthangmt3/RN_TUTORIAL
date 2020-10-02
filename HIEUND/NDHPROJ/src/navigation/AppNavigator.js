import React, {Component} from 'react';
import HomeScreen from '../.././screens/HomeScreen';
import UserScreen from '../.././screens/UserScreen';
import SplashScreen from '../.././screens/SplashScreen';
import LoginScreen from '../.././screens/LoginScreen';
import CustomerScreen from '../../screens/CustomerScreen';
import MessageScreen from '../.././screens/MessageScreen';
import NotificationScreen from '../.././screens/NotificationScreen';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator, BottomTabBar} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import {SCREEN_ROUTER} from '../../utils/Constants';
import {Image} from 'react-native';

const TabBarIcon = {
  [SCREEN_ROUTER.HOME]: require('../../assets/muasi_icon/icon_home_navbar.png'),
  [SCREEN_ROUTER.CUSTOMER]: require('../../assets/muasi_icon/icon_customers_navbar.png'),
  [SCREEN_ROUTER.MESSAGE]: require('../../assets/muasi_icon/icon_message.png'),
  [SCREEN_ROUTER.NOTIFY]: require('../../assets/muasi_icon/icon_noti_navbar.png'),
  [SCREEN_ROUTER.USER]: require('../../assets/muasi_icon/icon_user_navbar.png'),
};

const tabNav = createBottomTabNavigator(
  {
    [SCREEN_ROUTER.HOME]: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarLabel: 'Trang chủ',
      },
    },
    [SCREEN_ROUTER.CUSTOMER]: {
      screen: CustomerScreen,
      navigationOptions: {
        tabBarLabel: 'KH quan tâm',
      },
    },
    [SCREEN_ROUTER.MESSAGE]: {
      screen: MessageScreen,
      navigationOptions: {
        tabBarLabel: 'Tin nhắn',
      },
    },
    [SCREEN_ROUTER.NOTIFY]: {
      screen: NotificationScreen,
      navigationOptions: {
        tabBarLabel: 'Thông báo',
      },
    },
    [SCREEN_ROUTER.USER]: {
      screen: UserScreen,
      navigationOptions: {
        tabBarLabel: 'Người dùng',
      },
    },
  },
  {
    defaultNavigationOptions: ({navigation, route}) => ({
      tabBarIcon: ({focused, tintColor}) => {
        // const getTabbarIcon = () => {
        //   if (routeName === SCREEN_ROUTER.HOME) {
        //     return require();
        //   }
        // };
        const {routeName} = navigation.state;
        const iconSource = tabbarIcons[routeName];
        const sizeIcon = focused ? 28 : 25;
        const colorIcon = focused ? '#69AAFF' : '#ABABAB';
        return (
          <Image
            style={{
              marginTop: '1%',
              tintColor: colorIcon,
              width: sizeIcon,
              height: sizeIcon,
              resizeMode: 'contain',
            }}
            source={iconSource}
          />
        );
      },
    }),
  },
);

const stackNav = createStackNavigator(
  {
    tabNav,
    // [SCREEN_ROUTER.LIST_POST]: ListPostScreen,
  },
  {
    headerMode: 'none',
  },
);

const switchNav = createSwitchNavigator({
  [SCREEN_ROUTER.MAIN]: tabNav,
  [SCREEN_ROUTER.SPLASH]: SplashScreen,
  [SCREEN_ROUTER.LoginScreen]: LoginScreen,
});

const AppNavigator = createStackNavigator(
  {
    [SCREEN_ROUTER.HOME]: HomeScreen,
    [SCREEN_ROUTER.USER]: UserScreen,
  },
  {headerMode: 'none'},
);
export default createAppContainer(switchNav);
