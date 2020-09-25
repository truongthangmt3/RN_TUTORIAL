import React, { Component } from 'react'
import { Text, View, SafeAreaView, TouchableOpacity } from 'react-native'

export default class UserScreen extends Component {
    render() {
        return (
            <SafeAreaView>
                <TouchableOpacity onPress={() => { this.props.navigation.goBack() }}>
                    <Text> textInComponent </Text>
                </TouchableOpacity>
            </SafeAreaView>
        )
    }
}
