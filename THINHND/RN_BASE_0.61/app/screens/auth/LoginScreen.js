import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Dimensions } from 'react-native';
import { LoginButton, AccessToken, LoginManager } from 'react-native-fbsdk';
import NavigationUtil from '../../navigation/NavigationUtil';
import { GoogleSignin, statusCodes } from '@react-native-community/google-signin';
import { TextInput } from 'react-native-gesture-handler';
import { requestRegister } from '@app/constants/Api';
import { requestLogin } from '@api'
import { SCREEN_ROUTER } from '@app/constants/Constant'
import R from '@app/assets/R';
import theme from '@app/constants/Theme';
import AsyncStorage from "@react-native-community/async-storage"
// Lưu dữ liệu xuống ổ cứng
GoogleSignin.configure();
//  GoogleSignin.configure({
//             scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
//             webClientId: '<FROM DEVELOPER CONSOLE>', // client ID of type WEB for your server (needed to verify user ID and offline access)
//             offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
//             hostedDomain: '', // specifies a hosted domain restriction
//             loginHint: '', // [iOS] The user's ID, or email address, to be prefilled in the authentication UI if possible. [See docs here](https://developers.google.com/identity/sign-in/ios/api/interface_g_i_d_sign_in.html#a0a68c7504c31ab0b728432565f6e33fd)
//             forceConsentPrompt: true, // [Android] if you want to show the authorization prompt at each login.
//             accountName: '', // [Android] specifies an account name on the device that should be used
//             // iosClientId: '<FROM DEVELOPER CONSOLE>', // [iOS] optional, if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
//         });
export default class LoginScreen extends Component {

    // Somewhere in your code
    _ggLogin = async () => {
        try {
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            this.setState({ userInfo });
            console.log(userInfo)
            NavigationUtil.navigate("Main")

        } catch (error) {
            console.log(error)
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                // user cancelled the login flow
            } else if (error.code === statusCodes.IN_PROGRESS) {
                // operation (e.g. sign in) is in progress already
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                // play services not available or outdated
            } else {
                // some other error happened
            }
        }
    };

    _fbLogin() {
        LoginManager.logInWithPermissions(["public_profile"]).then(
            function (result) {
                if (result.isCancelled) {
                    console.log("Login cancelled");
                } else {
                    AccessToken.getCurrentAccessToken().then(
                        (data) => {
                            console.log(data.accessToken.toString())
                            NavigationUtil.navigate("Main")
                        }
                    )
                }
            },
            function (error) {
                console.log("Login fail with error: " + error);
            }
        );
    }

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
                        style={styles.txt_password}
                        placeholder='Mật khẩu'
                        placeholderTextColor='#A8ADB7'
                        onChangeText={(newText) => {
                            // reactotron.log(newText);
                            this.setState({
                                password: newText
                            })
                        }}
                    />
                </View>
                <TouchableOpacity
                    onPress={() => { NavigationUtil.navigate(SCREEN_ROUTER.FORGOT_PASS) }}
                    style={styles.v_forgotPassword}>
                    <Text style={styles.txt_forgotPassword}>Quên mật khẩu?</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={async () => {
                        try {
                            result = await requestLogin({
                                "phone": this.state.phoneNumber,
                                "password": this.state.password,
                                "device_id": ""
                            })
                            const token = result.data.token
                            await AsyncStorage.setItem("token", token)
                            NavigationUtil.navigate(SCREEN_ROUTER.MAIN)
                        } catch (error) {

                        }
                    }}
                    style={styles.v_button}>
                    <Text style={styles.txt_login}>Đăng nhập</Text>
                    <Image style={styles.img_arrow} source={R.images.ic_arrow2} />
                </TouchableOpacity>

                <View style={styles.v_register}>
                    <Text style={{ fontSize: 12, }}>Bạn chưa có tài khoản?</Text>
                    <TouchableOpacity
                        onPress={() => { NavigationUtil.navigate(SCREEN_ROUTER.REGISTER) }}
                        style={{ marginLeft: 5 }}>
                        <Text style={styles.text_register}>
                            Đăng ký
                    </Text>
                    </TouchableOpacity>
                </View>


            </View>
        );
    }
}
const styles = StyleSheet.create({
    img_logo: {
        marginTop: 74,
        height: 126,
        width: 313,
        alignSelf: 'center'
    },
    v_input: {
        marginTop: 73,
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
        padding: 22
    },
    v_forgotPassword: {
        marginTop: 9,
        marginRight: 25,
        alignSelf: 'flex-end'
    },
    txt_forgotPassword: {
        fontSize: 12,
        fontWeight: '300',
        textDecorationLine: 'underline'
    },
    v_button: {
        alignSelf: 'center',
        justifyContent: 'center',
        borderRadius: 23,
        height: 46,
        width: Dimensions.get('window').width - 23 * 2,
        backgroundColor: 'grey',
        marginTop: 93
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
    v_register: {
        marginTop: 12,
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    text_register: {
        fontSize: 12,
        color: 'red'
    }

})
