import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator, BottomTabBar } from "react-navigation-tabs";
import AuthLoadingScreen from "../screens/auth/AuthLoadingScreen";
import LoginScreen from "../screens/auth/LoginScreen";
import RegisterScreen from "../screens/auth/RegisterScreen";
import ForgotPasswordScreen from "../screens/auth/ForgotPasswordScreen";
import HomeScreen from "@screen/HomeScreen";
import UserScreen from "../screens/UserScreen";
import CustomerScreen from "@screen/CustomerScreen";
import MessageScreen from "@screen/MessageScreen";
import NotificationScreen from "@screen/NotificationScreen";
import UserInfoScreen from '@screen/UserInfoScreen'
import UpdateUserInfoScreen from '@screen/UpdateUserInfoScreen'
import { SCREEN_ROUTER } from "@constant";
import R from "@R";
import * as theme from "@theme";
import { Image } from "react-native";
const TabBarComponent = props => <BottomTabBar {...props} />;
const App = createStackNavigator({
  // [SCREEN_ROUTER.USER]: UserScreen,
  [SCREEN_ROUTER.USER_INFO_SCREEN]: UserInfoScreen,
  [SCREEN_ROUTER.UPDATE_USER_INFO_SCREEN]: UpdateUserInfoScreen
}, {
  headerMode: 'none'
})
const Auth = createStackNavigator({
  [SCREEN_ROUTER.LOGIN]: LoginScreen,
  [SCREEN_ROUTER.REGISTER]: RegisterScreen,
  [SCREEN_ROUTER.FORGOT_PASS]: ForgotPasswordScreen
},
  {
    headerMode: 'none'
  }
);

const tabbarIcons = {
  [SCREEN_ROUTER.HOME]: R.images.icon_home_navbar,
  [SCREEN_ROUTER.CUSTOMER]: R.images.icon_customers_navbar,
  [SCREEN_ROUTER.MESSAGE]: R.images.icon_message_navbar,
  [SCREEN_ROUTER.NOTIFY]: R.images.icon_noti_navbar,
  [SCREEN_ROUTER.USER]: R.images.icon_user_navbar
};

const getTabBarIcon = (navigation, focused, tintColor) => {
  const { routeName } = navigation.state;
  const iconSource = tabbarIcons[routeName] || R.images.home;
  const iconSize = focused ? 25 : 22;
  return (
    <Image
      source={iconSource}
      fadeDuration={0}
      style={{
        tintColor: tintColor,
        width: iconSize,
        height: iconSize,
        resizeMode: "contain"
      }}
    />
  );
};

const Main = createBottomTabNavigator(
  {
    [SCREEN_ROUTER.HOME]: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarLabel: "Trang chủ"
      }
    },
    [SCREEN_ROUTER.CUSTOMER]: {
      screen: CustomerScreen,
      navigationOptions: {
        tabBarLabel: "KH quan tâm"
      }
    },
    [SCREEN_ROUTER.MESSAGE]: {
      screen: MessageScreen,
      navigationOptions: {
        tabBarLabel: "Tin nhắn"
      }
    },
    [SCREEN_ROUTER.NOTIFY]: {
      screen: NotificationScreen,
      navigationOptions: {
        tabBarLabel: "Thông báo"
      }
    },
    [SCREEN_ROUTER.USER]: {
      screen: UserScreen,
      navigationOptions: {
        tabBarLabel: "Người dùng"
      }
    },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) =>
        getTabBarIcon(navigation, focused, tintColor)
    }),
    tabBarOptions: {
      activeBackgroundColor: theme.colors.bottombarBg,
      inactiveBackgroundColor: theme.colors.bottombarBg,
      inactiveTintColor: theme.colors.inactive,
      activeTintColor: theme.colors.active
    },
    tabBarComponent: props => {
      return (
        <TabBarComponent
          {...props}
          onTabPress={props.onTabPress}
          style={{
            borderTopColor: theme.colors.borderTopColor,
            backgroundColor: theme.colors.primary,
            height: 58
          }}
        />
      );
    },
    initialRouteName: "home"
  }
);

export default createAppContainer(
  createSwitchNavigator(
    {
      [SCREEN_ROUTER.AUTH_LOADING]: AuthLoadingScreen,
      [SCREEN_ROUTER.AUTH]: Auth,
      [SCREEN_ROUTER.MAIN]: Main,
      [SCREEN_ROUTER.USER_OPTIONS]: App
    },
    {
      initialRouteName: SCREEN_ROUTER.AUTH_LOADING
    },
  )
);
