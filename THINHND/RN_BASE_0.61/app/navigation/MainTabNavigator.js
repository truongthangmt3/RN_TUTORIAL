import React from "react";
import { createBottomTabNavigator, BottomTabBar } from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";
import {
    SCREEN_ROUTER,
} from "@constant";
import {
    Image,
    View,
    Text,
    TouchableWithoutFeedback,
    Platform,
    NativeAppEventEmitter
} from "react-native";
import R from "@R";
import HomeScreen from "@screen/HomeScreen";
import UserScreen from "../screens/UserScreen";
import CustomerScreen from "@screen/CustommerScreen";
import NotifyScreen from "@screen/NotifyScreen";
import StackCustomer from "./StackCustomer";
import * as theme from "@theme";

const TabBarComponent = props => <BottomTabBar {...props} />;
const tabbarIcons = {
    [SCREEN_ROUTER.HOME]: R.images.ic_home,
    [SCREEN_ROUTER.USER]: R.images.ic_human,
    [SCREEN_ROUTER.CUSTOMER_SCREEN]: R.images.ic_awesome_users,
    [SCREEN_ROUTER.NOTIFY_SCREEN]: R.images.ic_bell
};

const getTabBarIcon = (navigation, focused, tintColor) => {
    const { routeName } = navigation.state;
    const iconSource = tabbarIcons[routeName] || R.images.home;
    const iconSize = focused ? 25 : 22;
    return (
        <Image
            source={iconSource}
            fadeDuration={0}
            style={{
                tintColor: tintColor,
                width: iconSize,
                height: iconSize,
                resizeMode: "contain"
            }}
        />
    );
};
const bottomNavigator = bottomRouter =>
    createBottomTabNavigator(bottomRouter, {
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, tintColor }) =>
                getTabBarIcon(navigation, focused, tintColor)
        }),
        tabBarOptions: {
            activeBackgroundColor: theme.colors.bottombarBg,
            inactiveBackgroundColor: theme.colors.bottombarBg,
            inactiveTintColor: theme.colors.inactive,
            activeTintColor: theme.colors.active
        },
        tabBarComponent: props => {
            return (
                <TabBarComponent
                    {...props}
                    onTabPress={props.onTabPress}
                    style={{
                        borderTopColor: theme.colors.borderTopColor,
                        backgroundColor: theme.colors.primary,
                        height: 58
                    }}
                />
            );
        },
    });
const createStack = stackScreen =>
    createStackNavigator(stackScreen, {
        defaultNavigationOptions: {
            //header: null
        }
    });

const getBottomTitle = (screen, title) => ({
    screen: screen,
    title,
    navigationOptions: {
        tabBarLabel: title
    }
});
const stackCustomer = {
    [SCREEN_ROUTER.MAIN]: bottomNavigator({
        [SCREEN_ROUTER.HOME]: getBottomTitle(
            HomeScreen,
            R.strings.home
        ),
        [SCREEN_ROUTER.CUSTOMER_SCREEN]: getBottomTitle(
            CustomerScreen,
            R.strings.customer
        ),
        [SCREEN_ROUTER.NOTIFY_SCREEN]: getBottomTitle(
            NotifyScreen,
            R.strings.notification
        ),
        [SCREEN_ROUTER.USER]: getBottomTitle(
            UserScreen,
            R.strings.user
        )
    }),
    ...StackCustomer
};
export default {
    MainCustomer: createStack(stackCustomer)
};