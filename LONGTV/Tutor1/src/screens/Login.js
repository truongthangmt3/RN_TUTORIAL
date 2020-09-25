import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'

export default class Login extends Component {
    render() {
        return (
            <View>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate("home")
                    }
                    }>
                    <Text>Login</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#0F4960",
        justifyContent: "center",
        alignItems: "center"
    }
})