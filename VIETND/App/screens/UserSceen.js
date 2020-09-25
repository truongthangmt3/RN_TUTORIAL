import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import NavigationUtil from '../navigation/NavigationUtil';

export default class UserSceen extends Component {
    render() {
        return (
            <View style={{ backgroundColor: 'red', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <TouchableOpacity onPress={() => {
                    NavigationUtil.goBack();
                }}>
                    <Text> textInComponent </Text>
                </TouchableOpacity>
            </View>
        )
    }
}
