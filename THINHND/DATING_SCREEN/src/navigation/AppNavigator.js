import React from "react";
import HomeScreen from '../screens/HomeScreen'
import UserScreen from '../screens/UserScreen'
import SplashScreen from '../screens/SplashScreen.js'
import LoginScreen from '../screens/LoginScreen'
import ListPostScreen from '../screens/ListPostScreen.js'
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator, BottomTabBar } from "react-navigation-tabs";
import { createStackNavigator } from 'react-navigation-stack';
import { SCREEN_ROUTER } from '../utils/Constant';
import { Image } from 'react-native'


const tabNav = createBottomTabNavigator({
    [SCREEN_ROUTER.HOME]: {
        screen: HomeScreen,
        navigationOptions: {
            tabBarLabel: "Trang chủ",
        }
    },
    [SCREEN_ROUTER.USER]: {
        screen: UserScreen,
        navigationOptions: {
            tabBarLabel: "Tài khoản",
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
                            width: focused ? 25 : 10,
                            height: focused ? 25 : 10,

                        }}
                        source={require('../../assets/images/user.png')}
                    />)
            },

        })
    }
)

const stackNav = createStackNavigator({
    tabNav,
    [SCREEN_ROUTER.LIST_POST]: ListPostScreen

},
    {
        headerMode: 'none'
    })

const switchNav = createSwitchNavigator({
    [SCREEN_ROUTER.MAIN]: stackNav,
    [SCREEN_ROUTER.SPLASH]: SplashScreen,
    [SCREEN_ROUTER.LOGIN]: LoginScreen,
})


export default createAppContainer(switchNav);