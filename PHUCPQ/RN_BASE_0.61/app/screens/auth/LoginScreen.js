import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, Image, StyleSheet, SafeAreaView } from 'react-native';
import NavigationUtil from '../../navigation/NavigationUtil';
import { requestLogin } from '@api';
import { SCREEN_ROUTER } from '@constant';
import img from '../../assets/imagesAsset';
import AsyncStorage from '@react-native-community/async-storage';//lưu dữ liệu xuống ổ cứng


export default class LoginScreen extends Component {

    state = {
        isLoading: false,
        error: null,
        data: {},
        phoneNumber: "0328044883",
        password: "phuc13031999"
    }
    render() {
        return (
            <SafeAreaView style={styles.folder}>
                <Image style={styles.img_trademark}
                    source={img.img_Asset} />
                <TextInput style={styles.phone}
                    placeholder=" Số điện thoại"
                    onChangeText={(newText) => {
                        this.setState({
                            phoneNumber: newText
                        })
                    }}
                    value={this.state.phoneNumber}>
                </TextInput>
                <TextInput style={styles.password}
                    secureTextEntry={true}
                    placeholder=" Mật khẩu"
                    onChangeText={(newText) => {
                        this.setState({
                            password: newText
                        })
                    }}
                    value={this.state.password}>
                </TextInput>
                <TouchableOpacity onPress={() => {
                    NavigationUtil.navigate(SCREEN_ROUTER.FORGOT_PASS)
                }}>
                    <Text style={styles.txt_forgotPass}>
                        Quên mật khẩu?
                </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.headerlogin}
                    onPress={async () => {
                        try {
                            const result = await requestLogin({
                                "phone": this.state.phoneNumber,
                                "password": this.state.password,
                                "device_id": ""
                            })
                            const token = result.data.token
                            await AsyncStorage.setItem("token", token)
                            NavigationUtil.navigate(SCREEN_ROUTER.MAIN)
                        } catch (err) {
                            alert(JSON.stringify(result))
                        }
                    }}>
                    <Text style={styles.txt_login}>
                        Đăng nhập
                        </Text>
                    <Image
                        style={styles.img_login}
                        source={img.img_Group}
                    />
                </TouchableOpacity>
                <View style={{
                    flexDirection: 'row'
                }}>
                    <Text style={{ marginBottom: 80 }}>
                        Bạn chưa có tài khoản?
                </Text>
                    <TouchableOpacity onPress={() => {
                        NavigationUtil.navigate(SCREEN_ROUTER.REGISTER)
                    }}>
                        <Text style={{ color: "red" }}>Đăng ký</Text>
                    </TouchableOpacity>
                </View>

            </SafeAreaView >
        );
    }
}
const styles = StyleSheet.create({
    folder: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F3F3F3'
    },
    img_trademark: {
        height: "30%",
        width: "90%",
        resizeMode: 'contain',
        marginBottom: 50,
    },
    phone: {
        width: '80%',
        height: 50,
        backgroundColor: "white",
        color: '#ABABAB',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        elevation: 10,
        paddingLeft: 10,
    },
    password: {
        marginTop: 3,
        width: '80%',
        height: 50,
        backgroundColor: "white",
        color: '#ABABAB',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        elevation: 10,
        paddingLeft: 10,
    },
    txt_forgotPass: {
        marginLeft: 230,
        marginBottom: 60,
        textDecorationLine: "underline",
    },
    headerlogin: {
        marginTop: 50,
        width: '80%',
        height: '5%',
        backgroundColor: '#ABABAB',
        flexDirection: 'row',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    txt_login: {
        height: '100%',
        width: '90%',
        padding: 10,
        paddingLeft: 130,
        color: "white",
    },
    img_login: {
        height: 25,
        width: '10%',
        resizeMode: 'contain',
    }
})
