import React, { Component } from 'react'
import { Text, View } from 'react-native'
import NavigationUtil from '../Navigation/NavigationUtil'
import { SCREEN_ROUTER } from '../utils/Constant'

export default class LoginScreen extends Component {
    render() {
        return (
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <TouchableOpacity>
                    onPress={() => {
                        NavigationUtil.navigate(SCREEN_ROUTER.MAIN)
                    }}
                </TouchableOpacity>
                <Text> textInComponent </Text>
            </View>
        )
    }
}
