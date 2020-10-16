import React, { Component } from 'react'
import { Text, View, SafeAreaView, TouchableOpacity } from 'react-native'

export default class UpdateUserInfoScreen extends Component {
    render() {
        const action = this.props.navigation.getParam("action")
        return (
            <SafeAreaView>
                <TouchableOpacity
                    onPress={() => {
                        action();
                    }}
                >
                    <Text> textInComponent </Text>
                </TouchableOpacity>
            </SafeAreaView>
        )
    }
}
