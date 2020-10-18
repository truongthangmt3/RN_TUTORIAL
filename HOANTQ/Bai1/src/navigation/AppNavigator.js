import HomeScreen from '../screens/HomeScreen'
import UserScreen from '../screens/UserScreen'
import AcountScreen from '../screens/AcountScreen'
import React, { Component } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import BuyScreen from '../screens/BuyScreen'
import MessageScreen from '../screens/MessageScreen'
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator, BottomTabBar } from "react-navigation-tabs";
import { createStackNavigator } from 'react-navigation-stack';
import {SCREEN_ROUTER} from '../utils/Contans'
import Splash from '../screens/Splash';
import Login from '../screens/Login'

const tabNav = createBottomTabNavigator({
    [SCREEN_ROUTER.HOME]: {
        screen: HomeScreen,
        navigationOptions: {
            tabBarLabel: "Trang chủ",
        }
    },
    [SCREEN_ROUTER.MESSAGE]: {
        screen: MessageScreen,
        navigationOptions: {
            tabBarLabel: "Thong bao",
        },
    },
    [SCREEN_ROUTER.USER]: {
        screen: AcountScreen,
        navigationOptions: {
            tabBarLabel: "Tai khoan",
        },
    },
},
    {
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, tintColor }) => {
                return (
                    <Image
                        style={{
                            tintColor: focused ? "red" : 'green',
                            width: focused ? 25 : 20,
                            height: focused ? 25 : 20,

                        }}
                        source={require('../../img/ic_home.png')}
                    />)
            },

        })
    }
)

// const tabNav = createBottomTabNavigator({
//     [SCREEN_ROUTER.HOME]:HomeScreen,
//     [SCREEN_ROUTER.MESSAGE]:MessageScreen,
//     [SCREEN_ROUTER.USER]:AcountScreen,
// })
const stackNav = createStackNavigator({
    tabNav,
},{
    headerMode:'none'
})
const switchNav = createSwitchNavigator({
    [SCREEN_ROUTER.SPLASH]:Splash,
    [SCREEN_ROUTER.LOGIN]:Login,
    [SCREEN_ROUTER.MAIN]: stackNav,
})
export default createAppContainer(switchNav);