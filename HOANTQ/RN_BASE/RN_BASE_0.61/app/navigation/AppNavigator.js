import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator, BottomTabBar } from 'react-navigation-tabs'
import AuthLoadingScreen from '../screens/auth/AuthLoadingScreen'
import LoginScreen from '../screens/auth/LoginScreen'
import RegisterScreen from '../screens/auth/RegisterScreen'
import ForgotPasswordScreen from '../screens/auth/ForgotPasswordScreen'
import HomeScreen from '@screen/HomeScreen'
import UserScreen from '../screens/UserScreen'
import { SCREEN_ROUTER } from '@constant'
import R from '@R';
import * as theme from "@theme";

import {
    Image
} from "react-native";
import ProductScreen from '@app/screens/ProductScreen';
import AcountScreen from '@app/screens/AcountScreen';
import UpdateUserInfoScreen from '@app/screens/auth/UpdateUserInfoScreen'
const TabBarComponent = props => <BottomTabBar {...props} />;

const Auth = createStackNavigator({
    [SCREEN_ROUTER.LOGIN]: LoginScreen,
    [SCREEN_ROUTER.REGISTER]: RegisterScreen,
    [SCREEN_ROUTER.FORGOT_PASS]: ForgotPasswordScreen,
    [SCREEN_ROUTER.UPDATE]: UpdateUserInfoScreen,
},{
    headerMode:'none'
})


const tabbarIcons = {
    [SCREEN_ROUTER.HOME]: R.images.ic_home,
    [SCREEN_ROUTER.USER]: R.images.ic_user,
    [SCREEN_ROUTER.PRODUCT]: R.images.ic_alarm,
    [SCREEN_ROUTER.ACOUNT]: R.images.ic_metrouser,
};

const getTabBarIcon = (navigation, focused, tintColor) => {
    const { routeName } = navigation.state;
    const iconSource = tabbarIcons[routeName] || R.images.home;
    const iconSize = focused ? 25 : 22;
    return (
        <Image
            source={iconSource}
            fadeDuration={0}
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
        [SCREEN_ROUTER.USER]: {
            screen: UserScreen,
            title: R.strings.user,
            navigationOptions: {
                tabBarLabel: R.strings.user,
            },
        },
        [SCREEN_ROUTER.PRODUCT]: {
            screen: ProductScreen,
            title: R.strings.alarm,
            navigationOptions: {
                tabBarLabel: R.strings.alarm,
            },
        },
        [SCREEN_ROUTER.ACOUNT]: {
            screen: AcountScreen,
            title: R.strings.account,
            navigationOptions: {
                tabBarLabel: R.strings.account,
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
    createSwitchNavigator({
        [SCREEN_ROUTER.AUTH_LOADING]: AuthLoadingScreen,
        [SCREEN_ROUTER.AUTH]: Auth,
        [SCREEN_ROUTER.MAIN]: Main
    },
        {
            
            initialRouteName: SCREEN_ROUTER.AUTH_LOADING
            
        }
    )
)
