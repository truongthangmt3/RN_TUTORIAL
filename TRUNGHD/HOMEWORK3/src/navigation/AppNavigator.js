import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator, BottomTabBar} from 'react-navigation-tabs';

import LoginScreen from '../components/LoginScreen';
import Huongdansudung from '../components/StackUserScreen/Huongdansudung';
import UserBuyScreen from '../components/StackUserScreen/UserBuyScreen';
import UserInforScreen from '../components/StackUserScreen/UserInforScreen';

import HomeScreen from '../components/BottomTab/HomeScreen';
import CustomerScreen from '../components/BottomTab/CustomerScreen';
import UserScreen from '../components/BottomTab/UserScreen.js';
import NotificationScreen from '../components/BottomTab/NotificationScreen';

import SplashScreen from '../components/SplashScreen';

import {SCREEN_ROUTER} from '../utils/constant';

const bottomtabNav = createBottomTabNavigator({
  [SCREEN_ROUTER.USER_SCREEN]: UserScreen,
  [SCREEN_ROUTER.HOME_SCREEN]: HomeScreen,
  [SCREEN_ROUTER.CUSTOMER_SCREEN]: CustomerScreen,
  [SCREEN_ROUTER.NOTIFICATION_SCREEN]: NotificationScreen,
});

const stackNav = createStackNavigator({
  bottomtabNav,
  [SCREEN_ROUTER.HUONG_DAN_SU_DUNG]: Huongdansudung,
  [SCREEN_ROUTER.USER_BUY_SCREEN]: UserBuyScreen,
  [SCREEN_ROUTER.USER_INFOR_SCREEN]: UserInforScreen,
});

const switchNav = createSwitchNavigator({
  [SCREEN_ROUTER.MAIN]: stackNav,
  [SCREEN_ROUTER.SPLASH_SCREEN]: SplashScreen,
  [SCREEN_ROUTER.LOGIN_SCREEN]: LoginScreen,
});

export default createAppContainer(switchNav);
