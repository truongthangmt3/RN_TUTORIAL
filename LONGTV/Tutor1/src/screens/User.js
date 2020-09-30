import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet, Image } from 'react-native'

export default class UserSreen extends Component {
    render() {
        return (
            <View style={styles.container}>

                <TouchableOpacity
                    onPress={() => {
                        this.props.navigation.goBack();
                    }}
                >
                    <Text> UserScreen</Text>
                </TouchableOpacity>

                <Image
                    source={require('../../assets/Main.png')}
                    style={{ height: 812, width: 375 }}
                />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0F4960'
    }
})