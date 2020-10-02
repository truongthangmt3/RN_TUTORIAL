
import React, { Component } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';

export default class ChangePasswordScreen extends Component {

    render() {
        return (
            <SafeAreaView>
                <TouchableOpacity onPress={() => { this.props.navigation.goBack() }}>
                    <Text> textInComponent </Text>
                </TouchableOpacity>
            </SafeAreaView>
        );
    }
}