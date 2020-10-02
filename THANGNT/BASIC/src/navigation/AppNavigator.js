import React from "react";
import HomeScreen from '../screens/HomeScreen'
import UserScreen from '../screens/UserSreen'
import SplashScreen from '../screens/SplashScreen.js'
import LoginScreen from '../screens/LoginScreen.js'
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
                const routeName = navigation.state.routeName
                const getTabbarIcon = () => {
                    if (routeName === SCREEN_ROUTER.HOME) {
                        return require('../../assets/ic_home.png')
                    } else if (routeName === SCREEN_ROUTER.USER) {
                        return require('../../assets/ic_user.png')
                    }
                }
                return (
                    <Image
                        style={{
                            tintColor: focused ? "#69AAFF" : '#ABABAB',
                            width: focused ? 25 : 20,
                            height: focused ? 25 : 20,
                            resizeMode: 'contain'
                        }}
                        source={getTabbarIcon()}
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