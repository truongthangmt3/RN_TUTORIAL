import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, Dimensions } from 'react-native';
import R from '@app/assets/R';
import { requestRegister } from '@app/constants/Api';
import { SCREEN_ROUTER } from '@app/constants/Constant'
import NavigationUtil from '../../navigation/NavigationUtil';
class RegisterScreen extends Component {
    state = {
        isLoading: false,
        error: null,
        data: {},
        phoneNumber: "",
        password: ""
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Image resizeMode='contain' style={styles.img_logo} source={R.images.img_logo2} />
                <View style={styles.v_input}>
                    <TextInput
                        style={styles.txt_phone}
                        placeholder='Số Điện Thoại'
                        placeholderTextColor='##A8ADB7'
                        onChangeText={(newText) => {
                            this.setState({
                                phoneNumber: newText
                            })
                        }}
                    />
                    <TextInput
                        style={styles.txt_phone}
                        placeholder='Email'
                        placeholderTextColor='#A8ADB7'
                    />
                    <TextInput
                        style={styles.txt_phone}
                        placeholder='Họ và tên'
                        placeholderTextColor='#A8ADB7'

                    />
                    <TextInput
                        style={styles.txt_phone}
                        placeholder='Tỉnh/Thành phố'
                        placeholderTextColor='#A8ADB7'

                    />
                    <TextInput
                        style={styles.txt_phone}
                        placeholder='Mật khẩu'
                        placeholderTextColor='#A8ADB7'
                        secureTextEntry='true'
                        onChangeText={(newText) => {
                            // reactotron.log(newText);
                            this.setState({
                                password: newText
                            })
                        }}
                    />
                    <TextInput
                        style={styles.txt_password}
                        placeholder='Xác nhận mật khẩu'
                        placeholderTextColor='#A8ADB7'
                        secureTextEntry='true'

                    />
                </View>
                <TouchableOpacity
                    onPress={async () => {
                        try {
                            result = await requestRegister({
                                "phone": this.state.phoneNumber,
                                "password": this.state.password,
                                "device_id": ""
                            })
                            NavigationUtil.navigate(SCREEN_ROUTER.MAIN)
                        } catch (error) {

                        }
                    }}
                    style={styles.v_button}>
                    <Text style={styles.txt_login}>Đăng kí</Text>
                    <Image style={styles.img_arrow} source={R.images.ic_arrow2} />
                </TouchableOpacity>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    img_logo: {
        marginTop: 27,
        height: 72,
        width: 177,
        alignSelf: 'center'
    },
    v_input: {
        marginTop: 18,
        marginHorizontal: 25,
        borderRadius: 10,
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 4,
            height: 4,
        },
        shadowOpacity: 0.2,
        shadowRadius: 15,
    },
    txt_phone: {
        height: 59,
        padding: 22,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(70, 70, 70, 0.3)'
    },
    txt_password: {
        height: 59,
        padding: 22,

    },
    v_forgotPassword: {
        marginTop: 9,
        marginRight: 25,
        alignSelf: 'flex-end'
    }, v_button: {
        alignSelf: 'center',
        justifyContent: 'center',
        borderRadius: 23,
        height: 46,
        width: Dimensions.get('window').width - 23 * 2,
        backgroundColor: '#69AAFF',
        marginTop: 65
    },
    txt_login: {
        fontSize: 12,
        alignSelf: 'center',
        fontWeight: 'bold',
        color: 'white',
    },
    img_arrow: {
        alignSelf: 'flex-end',
        position: 'absolute',
        right: 8,
        width: 29,
        height: 29
    },
})
export default RegisterScreen;
