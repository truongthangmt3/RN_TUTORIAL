import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import NavigationUtil from '../Navigation/NavigationUtil'
export default class Customer extends Component {
    render() {
        return (
            <View
                style={{
                    backgroundColor: 'green',
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                <TouchableOpacity
                    onPress={() => {
                        NavigationUtil.goBack();
                    }}
                >
                    <Text> textInComponent </Text>
                </TouchableOpacity>
            </View>
        )
    }
}
