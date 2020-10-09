import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, Image } from 'react-native';
import NavigationUtil from '../../navigation/NavigationUtil';
import { requestLogin } from '@app/constants/Api';
import { SCREEN_ROUTER } from '@constant';
import img from '../../assets/imagesAsset';
import AsyncStorage from '@react-native-community/async-storage';//lưu dữ liệu xuống ổ cứng
// GoogleSignin.configure();

export default class LoginScreen extends Component {

    state = {
        isLoading: false,
        error: null,
        data: {},
        phoneNumber: "",
        password: ""
    }



    render() {
        return (
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#F3F3F3'
            }}>
                <View style={{
                    height: "20%",
                    width: "100%",
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: 100
                }}>
                    <Image style={{
                        height: "100%",
                        width: "90%",
                        resizeMode: 'contain',
                    }}
                        source={img.img_Asset}>

                    </Image>
                </View>
                <View style={{
                    width: '80%',
                    height: 50,
                    backgroundColor: "white",
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                    elevation: 5
                }}>
                    <TextInput style={{
                        width: '90%',
                        height: 50,
                        backgroundColor: "white",
                        color: '#ABABAB'
                    }}
                        placeholder=" Số điện thoại"
                        onChangeText={(newText) => {
                            this.setState({
                                phoneNumber: newText
                            })
                        }}
                    //value={this.state.phoneNumber}
                    >

                    </TextInput>
                </View>
                <View style={{
                    marginTop: 3,
                    width: '80%',
                    height: 50,
                    backgroundColor: "white",
                    borderBottomLeftRadius: 10,
                    borderBottomRightRadius: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                    elevation: 5
                }}>
                    <TextInput style={{
                        width: '90%',
                        height: 50,
                        backgroundColor: "white",
                        color: '#ABABAB'
                    }}

                        secureTextEntry={true}
                        placeholder=" Mật khẩu"
                        onChangeText={(newText) => {
                            this.setState({
                                password: newText
                            })
                        }}
                    //value={this.state.password}
                    >
                    </TextInput>
                </View>
                <View style={{
                    //borderBottomWidth: 1,
                    //backgroundColor: 'red'
                }}>
                    <Text style={{
                        marginLeft: 230
                    }}>
                        Quên mật khẩu?
                    </Text>
                </View>
                <View style={{
                    width: '100%',
                    height: '10%',
                    backgroundColor: '#656565',
                    flexDirection: 'row'
                }}>
                    <View style={{
                        width: '50%',
                        height: '100%',
                        backgroundColor: 'red'
                    }}>
                        <Text>
                            Đăng nhập
                        </Text>
                    </View>
                    <View style={{
                        width: '50%',
                        height: '100%',
                        backgroundColor: 'green'
                    }}>
                        <Image
                            source={img.img_Group}
                            style={{
                                height: '50%',
                                width: '50%',
                                resizeMode: 'contain'
                            }}
                        >
                        </Image>
                    </View>
                </View>
                <TouchableOpacity onPress={async () => {
                    // alert(JSON.stringify(this.state))
                    try {
                        const result = await requestLogin({
                            "phone": this.state.phoneNumber,
                            "password": this.state.password,
                            "device_id": ""
                        })
                        // alert("534535")
                        // alert(JSON.stringify(result))
                        const token = result.data.token
                        await AsyncStorage.setItem("token", token)
                        NavigationUtil.navigate(SCREEN_ROUTER.MAIN)
                    } catch (err) {
                        alert(JSON.stringify(result))
                    }

                }}>
                    <Text>
                        Login
                    </Text>
                </TouchableOpacity>
            </View >
        );
    }
}
