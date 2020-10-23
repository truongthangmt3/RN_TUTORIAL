
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import { SCREEN_ROUTE } from '../Util/Costan'
import { createBottomTabNavigator, BottomTabBar } from 'react-navigation-tabs'
import 'react-native-gesture-handler';

import React from "react";
import UserScreen from '../sceens/UserScreen';
import HomeScreen from '../sceens/HomeScreen';
import HookHomeScreen from '../sceens/HookHomeScreen';
import LoginScreen from '../sceens/LoginScreen';
import RegistScreen from '../sceens/Registration';
import SplashScreen from '../sceens/SplashScreen'
import ListPost from '../sceens/ListPostScreen'
import NotifyScreen from '../sceens/NotifyScreen';
import CareScreen from '../sceens/CareScreen';
import { Image } from 'react-native'




const tabNav = createBottomTabNavigator({
    [SCREEN_ROUTE.HOME]: {
        screen: HomeScreen,
        navigationOptions: {
            label: "Trang chủ"
        }
    },
    [SCREEN_ROUTE.KH]: {
        screen: CareScreen,
        navigationOptions: {
            label: "User"
        }
    },
    [SCREEN_ROUTE.NOTIFY]: {
        screen: NotifyScreen,
        navigationOptions: {
            label: "Thông báo "
        }
    },
    [SCREEN_ROUTE.USER]: {
        screen: UserScreen,
        navigationOptions: {
            label: "User"
        },
    },
},
    {
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, tintColor }) => {
                return (
                    <Image
                        style={{
                            tintColor: focused ? "#69AAFF" : '#ABABAB',
                            width: focused ? 25 : 20,
                            height: focused ? 25 : 20,
                            resizeMode: 'contain'

                        }}
                        source={require('../../assest/ic_user.png')}
                    />)

            },

        })
    }
)


const StackNav = createStackNavigator({
    // login: LoginScreen,
    // user: UserScreen
    tabNav,
    [SCREEN_ROUTE.LISTPOST]: ListPost,
    [SCREEN_ROUTE.RIGIST]: RegistScreen,


}, {
    headerMode: 'none',
})



const SwitchNav = createSwitchNavigator({
    // [SCREEN_ROUTE.SPLASH]: SplashScreen,
    //[SCREEN_ROUTE.LOGIN]: LoginScreen,
    StackNav

})


export default createAppContainer(SwitchNav);