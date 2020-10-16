import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import NavigationUtil from '../Navigation/NavigationUtil';
export default class Notify extends Component {
    render() {
        return (
            <View
                style={{
                    backgroundColor: 'red',
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <TouchableOpacity
                    onPress={() => {
                        NavigationUtil.goBack();
                    }}
                >
                    <Text> NotifyScreen</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
