import React, { Component } from 'react'
import { Image, View, StyleSheet } from 'react-native'

export default class Login extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image source={require('../../assets/Main.png')}
                    style={{
                        width: 450,
                        height: 650
                    }}
                />
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