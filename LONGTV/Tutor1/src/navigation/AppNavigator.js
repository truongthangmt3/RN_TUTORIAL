import React, { Component } from 'react'
import {
    View,
    Text,
    SafeAreaView,
    StyleSheet,
    ActivityIndicator,
    FlatList,
    ImageBackground,
    Image,
    Dimensions
} from 'react-native';
import HomeScreen from '../screens/HomeScreen'
import ChangePasswordScreen from '../screens/ChangePasswordScreen'
import UserScreen from '../screens/UserScreen'
import SplashScreen from '../screens/SplashScreen'
import LoginScreen from '../screens/LoginScreen'

import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { SCREEN_ROUTER } from '../utils/Constant';

const AppNav = createStackNavigator({
    [SCREEN_ROUTER.SPLASH]: SplashScreen
})

const AppNavigator = createStackNavigator({
    [SCREEN_ROUTER.USER]: UserScreen,
    [SCREEN_ROUTER.LOGIN]: LoginScreen,
    [SCREEN_ROUTER.HOME]: HomeScreen,
}, {
    headerMode: 'screen'
})

export default createAppContainer(AppNavigator)
