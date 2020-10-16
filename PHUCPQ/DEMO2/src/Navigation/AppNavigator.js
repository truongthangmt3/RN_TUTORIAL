import React from 'react';
import { Image } from 'react-native'
import UserScreen from '../Screens/UserScreen'
import HomeScreen from '../Screens/HomeScreen';
import Notify from '../Screens/NotifyScreen';
import Customer from '../Screens/CustomerScreen';
import SplashScreen from '../Screens/SplashScreen'
import LoginScreen from '../Screens/LoginScreen'
import ListPostScreen from '../Screens/ListPostScreen';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from "react-navigation-tabs"
import { createStackNavigator } from 'react-navigation-stack';
import { SCREEN_ROUTER } from '../utils/Constant';
import Icon from '../../asset/ic/icon';

const tabNav = createBottomTabNavigator({
    [SCREEN_ROUTER.HOME]: {
        screen: HomeScreen,
        navigationOptions: {
            tabBarLabel: "Trang chủ",
            tabBarIcon: ({ focused, tintColor }) => {
                return (
                    <Image style={{
                        height: 25,
                        width: 25,
                        resizeMode: 'contain'
                    }}
                        source={Icon.ic_home}
                    >

                    </Image>
                )
            },
        }
    },
    [SCREEN_ROUTER.CUSTOMER]: {
        screen: Customer,
        navigationOptions: {
            tabBarLabel: "Kh Quan Tâm",
            tabBarIcon: ({ focused, tintColor }) => {
                return (
                    <Image style={{
                        tintColor: focused ? "blue" : '',
                        height: 25,
                        width: 25,
                        resizeMode: 'contain'
                    }}
                        source={Icon.ic_usergr}
                    >

                    </Image>
                )
            },
        },
    },
    [SCREEN_ROUTER.NOTIFY]: {
        screen: Notify,
        navigationOptions: {
            tabBarLabel: "Thông báo",
            tabBarIcon: ({ focused, tintColor }) => {
                return (
                    <Image style={{
                        tintColor: focused ? "blue" : '',
                        height: 25,
                        width: 25,
                        resizeMode: 'contain'
                    }}
                        source={Icon.ic_bell}
                    >

                    </Image>
                )
            },
        },
    },
    [SCREEN_ROUTER.USER]: {
        screen: UserScreen,
        navigationOptions: {
            tabBarLabel: "Tài khoản",
            tabBarIcon: ({ focused, tintColor }) => {
                return (
                    <Image style={{
                        tintColor: focused ? "blue" : '',
                        height: 25,
                        width: 25,
                        resizeMode: 'contain'
                    }}
                        source={Icon.ic_user}
                    >

                    </Image>
                )
            },
        },
    },

},
    // {
    //     defaultNavigationOptions: ({ navigation }) => ({
    //         tabBarIcon: ({ focused, tintColor }) => {
    //             console.log(navigation.state.routeName, '\n');
    //             return (
    //                 // <Image
    //                 //     style={{
    //                 //         // tintColor: focused ? "red" : 'green',
    //                 //         // width: focused ? 25 : 10,
    //                 //         // height: focused ? 25 : 10,
    //                 //         height: 25,
    //                 //         width: 25,

    //                 //     }}
    //                 //     // source={require('../../asset/ic/ic_user.png')}
    //                 //     // source={require('../../asset/ic/ic_bell.png')}
    //                 //     // source={require('../../asset/ic/ic_home.png')}
    //                 //     source={Icon.ic_user}

    //                 // />,

    //                 // <Image style={{
    //                 //     height: 25,
    //                 //     width: 25,
    //                 // }}
    //                 //     source={Icon.ic_bell}>

    //                 // </Image>
    //                 )
    //         },

    //     })
    // }

)
const stackNav = createStackNavigator({
    tabNav,
    [SCREEN_ROUTER.LIST_POST]: ListPostScreen
},
    {
        headerMode: 'none'
    }

)
const switchNav = createSwitchNavigator({
    [SCREEN_ROUTER.MAIN]: stackNav,
    [SCREEN_ROUTER.SPLASH]: SplashScreen,
    [SCREEN_ROUTER.LOGIN]: LoginScreen,

}, {
    headerMode: 'none',// tắt header trên cùng khi navigation sinh ra 
})

export default createAppContainer(switchNav);