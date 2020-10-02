import React from "react";
import SplashScreen from '../screens/SplashScreen.js'
import LoginScreen from '../screens/LoginScreen'
import ListPostScreen from '../screens/ListPostScreen.js'
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator, BottomTabBar } from "react-navigation-tabs";
import { createStackNavigator } from 'react-navigation-stack';
import { SCREEN_ROUTER } from '../utils/Constant';
import { Image } from 'react-native'


import HomeScreen from '../screens/TabScreens/HomeScreen';
import CustomerScreen from '../screens/TabScreens/CustomerScreen';
import UserScreen from '../screens/TabScreens/UserScreen';
import NotificationScreen from '../screens/TabScreens/NotificationScreen';


const tabNav = createBottomTabNavigator({
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
                        source={require('../../assets/images/ic_home.png')}
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
                        source={require('../../assets/images/ic_awesome_users.png')}
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
                        source={require('../../assets/images/ic_bell.png')}
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
                        source={require('../../assets/images/ic_human.png')}
                    />
                );
            },
        },
    },
})

const stackNav = createStackNavigator({
    tabNav,
})

const switchNav = createSwitchNavigator({
    [SCREEN_ROUTER.MAIN]: stackNav,
    [SCREEN_ROUTER.SPLASH]: SplashScreen,
    [SCREEN_ROUTER.LOGIN]: LoginScreen,
})


export default createAppContainer(switchNav);