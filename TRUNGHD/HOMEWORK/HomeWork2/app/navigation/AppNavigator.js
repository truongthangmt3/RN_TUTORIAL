import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator, BottomTabBar } from 'react-navigation-tabs';

import AuthLoadingScreen from '../screens/auth/AuthLoadingScreen';
import LoginScreen from '../screens/auth/LoginScreen';
import RegisterScreen from '../screens/auth/RegisterScreen';
import ForgotPasswordScreen from '../screens/auth/ForgotPasswordScreen';
import CheckForgotPasswordScreen from '../screens/auth/CheckForgotPasswordScreen';

import HomeScreen from '../screens/HomeScreen';
import CustomerScreen from '../screens/CustomerScreen';
import NotificationScreen from '../screens/NotificationScreen';
import UserScreen from '../screens/user/UserScreen';

import UserInfo from '@app/screens/user/stackScreen/UserInfo';


import { SCREEN_ROUTER } from '@constant';
import R from '@R';
import * as theme from "@theme";

import {
    Image
} from "react-native";


const TabBarComponent = props => <BottomTabBar {...props} />;

const Auth = createStackNavigator({
    [SCREEN_ROUTER.LOGIN]: LoginScreen,
    [SCREEN_ROUTER.REGISTER]: RegisterScreen,
    [SCREEN_ROUTER.FORGOT_PASS]: ForgotPasswordScreen,
    [SCREEN_ROUTER.CHECK_PASSWORD]: CheckForgotPasswordScreen,
}, {
    headerMode: 'none'
})

const User = createStackNavigator({
    [SCREEN_ROUTER.USER_INFO]: UserInfo,
},
    {
        headerMode: 'none'
    }
)

const tabbarIcons = {
    [SCREEN_ROUTER.HOME]: R.images.ic_home,
    [SCREEN_ROUTER.USER]: R.images.ic_user,
    [SCREEN_ROUTER.NOTIFICATION]: R.images.ic_notifications,
    [SCREEN_ROUTER.CUSTOMER]: R.images.ic_customer,
};

const getTabBarIcon = (navigation, focused, tintColor) => {
    const { routeName } = navigation.state;
    const iconSource = tabbarIcons[routeName] || R.images.home;
    const iconSize = focused ? 25 : 20;
    return (
        <Image
            source={iconSource}
            fadeDuration={0}
            resizeMode={'contain'}
            style={{ tintColor: tintColor, width: iconSize, height: iconSize }}
        />
    );
};

const Main = createBottomTabNavigator(
    {
        [SCREEN_ROUTER.HOME]: {
            screen: HomeScreen,
            title: R.strings.home,
            navigationOptions: {
                tabBarLabel: R.strings.home,
            },
        },
        [SCREEN_ROUTER.CUSTOMER]: {
            screen: CustomerScreen,
            title: R.strings.customer,
            navigationOptions: {
                tabBarLabel: R.strings.customer,
            },
        },
        [SCREEN_ROUTER.NOTIFICATION]: {
            screen: NotificationScreen,
            title: R.strings.notification,
            navigationOptions: {
                tabBarLabel: R.strings.notification,
            },
        },
        [SCREEN_ROUTER.USER]: {
            screen: UserScreen,
            title: R.strings.user,
            navigationOptions: {
                tabBarLabel: R.strings.user,
            },
        },
    },
    {
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, tintColor }) => getTabBarIcon(navigation, focused, tintColor),
        }),
        tabBarOptions: {
            activeBackgroundColor: theme.colors.bottombarBg,
            inactiveBackgroundColor: theme.colors.bottombarBg,
            inactiveTintColor: theme.colors.inactive,
            activeTintColor: theme.colors.active,
        },
        tabBarComponent: props => {
            return (
                <TabBarComponent
                    {...props}
                    onTabPress={props.onTabPress}
                    style={{
                        borderTopColor: theme.colors.borderTopColor,
                        backgroundColor: theme.colors.primary,
                        height: 58,
                    }}
                />
            );
        },
        initialRouteName: 'User'
    }
)


export default createAppContainer(
    createStackNavigator({
        [SCREEN_ROUTER.AUTH_LOADING]: AuthLoadingScreen,
        [SCREEN_ROUTER.AUTH]: Auth,
        [SCREEN_ROUTER.MAIN]: Main,
        [SCREEN_ROUTER.USER]: User,
    },
        {
            headerMode: 'none'
        },
        {
            initialRouteName: SCREEN_ROUTER.AUTH_LOADING
        }
    )
)
