import React from "react";
import HomeScreen from '../screens/HomeScreen';
import UserSceen from '../screens/UserSceen';
import ListPostScreen from '../screens/ListPostScreen';
import SplashScreen from '../screens/SplashScreen.js';
// import LoginScreen from '../screens/SplashScreen/LoginScreen';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator, BottomTabBar } from "react-navigation-tabs";
import { createStackNavigator } from 'react-navigation-stack';
import { SCREEN_ROUTER } from '../utils/Constant';
import { Image } from 'react-native'
import LoginScren from "../screens/LoginScreen";


// const AppNavigator = createStackNavigator({
//     [SCREEN_ROUTER.HOME]: HomeScreen,
//     [SCREEN_ROUTER.USER]: UserSceen,
// },
//     // {
//     //     headerMode: 'none',
//     // }
// )


// export default createAppContainer(AppNavigator);




const tabNav = createBottomTabNavigator({
    [SCREEN_ROUTER.HOME]: {
        screen: HomeScreen,
        navigationOptions: {
            tabBarLabel: "Trang chủ",
        }
    },
    [SCREEN_ROUTER.USER]: {
        screen: UserSceen,
        navigationOptions: {
            tabBarLabel: "Tài khoản",
        },
    },
    // [SCREEN_ROUTER.LOGIN]: {
    //     screen: LoginScreen,
    //     navigationOptions: {
    //         tabBarLabel: "Login",
    //     },
    // },
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
                        source={require('../assets/ic_HuongDan.png')}
                    />)
            },

        })
    }
)

const stackNav = createStackNavigator({
    tabNav,
    [SCREEN_ROUTER.LIST_POST]: ListPostScreen,
},
    {
        headerMode: 'none'
    })

const switchNav = createSwitchNavigator({
    [SCREEN_ROUTER.HOME]: stackNav,
    [SCREEN_ROUTER.SPLASH]: SplashScreen,


})


export default createAppContainer(switchNav);