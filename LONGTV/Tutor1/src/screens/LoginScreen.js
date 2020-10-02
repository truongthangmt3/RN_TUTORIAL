import React, { Component } from 'react'
import { Text, TextInput, View, StyleSheet, Image, TouchableOpacity } from 'react-native'

export default class LoginScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image style={{
                    width: 350, height: 100, marginBottom: 50
                }}
                    source={require('../../assets/MainSquare.png')}
                />
                <TextInput style={styles.inputView}
                    placeholder="Số điện thoại"
                    placeholderTextColor='#707070'
                    borderColor='black'
                />
                <TextInput style={styles.inputView}
                    secureTextEntry
                    placeholder="Mật khẩu"
                    placeholderTextColor='#707070'
                    borderColor='black'
                />
                <TouchableOpacity onPress={() => { }}>
                    <Text>Quên mật khẩu ?</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => { }}
                >
                    <Image
                        source={require('../../assets/Login.png')}
                    /></TouchableOpacity>
                <View style={{
                    flexDirection: 'row'
                }}>
                    <Text>Bạn chưa có tài khoản? </Text>
                    <TouchableOpacity
                        onPress={() => { }}
                    >
                        <Text>Đăng ký</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'pink'
    },
    inputView: {
        width: "80%",
        backgroundColor: "#FFFFFF",
        borderRadius: 25,
        height: 60,
        padding: 20,
        marginVertical: 3
    },
    login: {
        marginTop: 30,
        borderRadius: 25,
        backgroundColor: "#FFFFFF",
    }

})
