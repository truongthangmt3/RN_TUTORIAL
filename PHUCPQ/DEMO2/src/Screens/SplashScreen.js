import React, { Component } from 'react'
import { Text, View, TouchableOpacitypacity } from 'react-native'
import NavigationUtil from '../Navigation/NavigationUtil'
import { SCREEN_ROUTER } from '../utils/Constant'

export default class SplashScreen extends Component {
    componentDidMount = async () => {
        setTimeout(() => {
            NavigationUtil.navigate(SCREEN_ROUTER.LOGIN)
        }, 1000);

    }

    render() {
        return (
            <TouchableOpacitypacity onPress={() => {
                NavigationUtil.navigate(SCREEN_ROUTER.LOGIN)
            }}>
                <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'red'
                }}>

                    <Text>Hello</Text>
                </View>
            </TouchableOpacitypacity>
        )
    }
}


