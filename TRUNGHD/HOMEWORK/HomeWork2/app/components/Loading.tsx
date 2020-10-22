import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { PacmanIndicator } from "react-native-indicators";
export default class Loading extends Component {
    render() {
        return (
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <PacmanIndicator color='blue' />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    textLoading: {
        fontSize: 13
    }
});