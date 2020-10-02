import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import NavigationUtil from '../navigation/NavigationUtil'

export default class UserSreen extends Component {
    render() {
        return (
            <View
                style={{
                    backgroundColor: 'blue',
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <TouchableOpacity
                    onPress={() => {
                        NavigationUtil.goBack()
                    }}
                >
                    <Text> UserScreen</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
