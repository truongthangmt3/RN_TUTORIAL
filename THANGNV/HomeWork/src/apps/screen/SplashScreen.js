import React, { Component } from 'react';
import {
    Image, SafeAreaView
} from 'react-native';

export default class SplashScreen extends Component {
    render() {
        return (
            <SafeAreaView style={{
                flex: 1,
                justifyContent: 'center',
            }}>
                <Image style={{
                    alignSelf: 'center'
                }}
                    source={require('../../assets/img/logo.png')}
                />
            </SafeAreaView>
        )
    }
}