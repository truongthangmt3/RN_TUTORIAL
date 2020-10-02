import React, { Component } from 'react';
import { Text, View, ActivityIndicator } from 'react-native';
import NavigationUtil from '../../navigation/NavigationUtil';
import { SCREEN_ROUTER } from '../../utils/Constants';

export default class SplashScreen extends Component {

    componentDidMount = async () => {
        setTimeout(() => {
            NavigationUtil.navigate(SCREEN_ROUTER.LOGIN_SCREEN)
        }, 1000);
    }

    render() {
        return (
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <ActivityIndicator
                    color='red'
                />
            </View>
        )
    }


}