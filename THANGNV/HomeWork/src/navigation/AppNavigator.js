import React from 'react';
import { Image } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import SplashScreen from '../apps/screen/SplashScreen';
import LoginScreen from '../apps/auth/Login';

import HomeScreen from '../apps/screen/home/HomeScreen';
import CustomerScreen from '../apps/screen/customers/CustomerScreen';
import UserScreen from '../apps/screen/user/UserScreen';
import NotificationScreen from '../apps/screen/notifications/NotificationScreen';

import { SCREEN_ROUTER } from '../utils/Constants';
import images from '../assets/imagesAsset';

const bottomtabNav = createBottomTabNavigator({
    [SCREEN_ROUTER.HOME_SCREEN]: {
        screen: HomeScreen,
        navigationOptions: {
            tabBarLabel: 'Trang chủ',
            tabBarIcon: ({ focused, tintColor }) => {
                return (
                    <Image
                        style={{
                            tintColor: focused ? '#69AAFF' : '#ABABAB',
                            width: focused ? 25 : 20,
                            height: focused ? 25 : 20,
                            resizeMode: 'contain',
                        }}
                        source={images.ic_home}
                    />
                );
            },
        },
    },
    [SCREEN_ROUTER.CUSTOMER_SCREEN]: {
        screen: CustomerScreen,
        navigationOptions: {
            tabBarLabel: 'KH quan tâm',
            tabBarIcon: ({ focused, tintColor }) => {
                return (
                    <Image
                        style={{
                            tintColor: focused ? '#69AAFF' : '#ABABAB',
                            width: focused ? 25 : 20,
                            height: focused ? 25 : 20,
                            resizeMode: 'contain',
                        }}
                        source={images.ic_customers}
                    />
                );
            },
        },
    },
    [SCREEN_ROUTER.NOTIFICATION_SCREEN]: {
        screen: NotificationScreen,
        navigationOptions: {
            tabBarLabel: 'Thông báo',
            tabBarIcon: ({ focused, tintColor }) => {
                return (
                    <Image
                        style={{
                            tintColor: focused ? '#69AAFF' : '#ABABAB',
                            width: focused ? 25 : 20,
                            height: focused ? 25 : 20,
                            resizeMode: 'contain',
                        }}
                        source={images.ic_notifications}
                    />
                );
            },
        },
    },
    [SCREEN_ROUTER.USER_SCREEN]: {
        screen: UserScreen,
        navigationOptions: {
            tabBarLabel: 'Tài khoản',
            tabBarIcon: ({ focused, tintColor }) => {
                return (
                    <Image
                        style={{
                            tintColor: focused ? '#69AAFF' : '#ABABAB',
                            width: focused ? 25 : 20,
                            height: focused ? 25 : 20,
                            resizeMode: 'contain',
                        }}
                        source={images.ic_user}
                    />
                );
            },
        },
    },
});

const stackNav = createStackNavigator({
    bottomtabNav,
});

const switchNav = createSwitchNavigator({
    [SCREEN_ROUTER.SPLASH_SCREEN]: SplashScreen,
    [SCREEN_ROUTER.LOGIN_SCREEN]: LoginScreen,
    [SCREEN_ROUTER.MAIN]: stackNav,
});

export default createAppContainer(switchNav);