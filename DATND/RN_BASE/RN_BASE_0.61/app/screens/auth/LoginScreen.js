import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    SafeAreaView,
    StyleSheet,
    Image
} from 'react-native';
import { LoginButton, AccessToken, LoginManager } from 'react-native-fbsdk';
import NavigationUtil from '../../navigation/NavigationUtil';
import { GoogleSignin, statusCodes } from '@react-native-community/google-signin';
import { TouchableHighlight } from 'react-native-gesture-handler';
import reactotron from '@app/debug/ReactotronConfig';
import { requestLogin } from '@api'
import R from '@R';
import { SCREEN_ROUTER } from '@app/constants/Constant';
import AsyncStorage from '@react-native-community/async-storage';

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

class CustomInput extends Component {
    render() {
        const { onChangeText, value, placeholder, secureTextEntry } = this.props;

        return (
            <TextInput
                style={{
                    flex: 1,
                    height: 40,
                    paddingLeft: 20,

                }}
                placeholder={placeholder}
                onChangeText={onChangeText}
                value={value}
                secureTextEntry={secureTextEntry}

            />
        )
    }
}
export default class LoginScreen extends Component {
    state = {
        isLoading: false,
        error: null,
        data: {},
        phone: '09793536999',
        password: '123456',
    };

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
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.logo}>
                    <Image
                        resizeMode='cover'
                        style={{
                            width: 313,
                            height: 126
                        }} source={R.images.ic_logo} />
                </View>

                <View style={styles.information}>
                    <View style={styles.text_input}>
                        <CustomInput
                            onChangeText={(textnew) => {
                                this.setState({
                                    phone: textnew
                                })
                            }}
                            placeholder="So Dien Thoai"
                            value={this.state.phone}
                        />
                        {_horizontal()}

                        <CustomInput
                            onChangeText={(textnew) => {
                                this.setState({
                                    password: textnew
                                })
                            }}
                            placeholder="pass"
                            value={this.state.password}
                            secureTextEntry={true}
                        />
                    </View>

                    <TouchableOpacity style={styles.text}
                        onPress={async () => { }}  >

                        <Text style={{
                            color: '#6E7786',
                            borderBottomColor: 'red',
                            borderBottomWidth: 1
                        }}>Quên mật khẩu?
                    </Text>
                    </TouchableOpacity>

                </View>
                <View style={styles.form_login}>
                    <View style={styles.login}>

                        <TouchableOpacity
                            onPress={async () => {
                                try {
                                    result = await requestLogin({
                                        "phone": this.state.phone,
                                        "password": this.state.password,
                                        "device_id": "",
                                    })
                                    const token = result.data.token
                                    await AsyncStorage.setItem("token", token)
                                    reactotron.log(result)
                                    NavigationUtil.navigate(SCREEN_ROUTER.MAIN)

                                } catch (error) {

                                }
                            }}
                            style={styles.click}>
                            <Text
                                style={{
                                    flex: 1,
                                    textAlign: 'center',
                                    color: '#FFFFFF'
                                }}>Đăng nhập </Text>
                            <Image
                                style={{
                                    width: 28,
                                    height: 29.62,
                                    marginRight: 8.2
                                }} source={R.images.ic_next}></Image>
                        </TouchableOpacity>
                        <View style={styles.registration}>
                            <Text
                                style={{
                                    color: '#515C6F',
                                    fontSize: 12
                                }}>Bạn chưa có tài khoản?</Text>
                            <TouchableOpacity
                                onPress={() => { NavigationUtil.navigate(SCREEN_ROUTER.REGISTER) }}>
                                <Text
                                    style={{
                                        color: '#FF3030',
                                        fontSize: 12
                                    }}>Dang ki</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

            </SafeAreaView>
        );
    }
};
_horizontal = () => {
    return (
        <View style={{
            width: '100%',
            height: 1,
            backgroundColor: '#727C8E',
            opacity: 0.2

        }} />


    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F6F8'

    },
    logo: {
        flex: 1,
        //backgroundColor: 'red',
        paddingHorizontal: 31,
        paddingTop: 104
    },
    information: {
        flex: 1,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.3,
        shadowRadius: 7,
        elevation: 1,

    },
    text_input: {
        flex: 2,
        backgroundColor: '#FFFFFF',
        marginHorizontal: 25,
        borderRadius: 10,

    },
    text: {
        flex: 0.5,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginHorizontal: 25,
    },

    form_login: {
        flex: 2,
        //backgroundColor: 'blue'
    },
    login: {
        flex: 0.3,

        // backgroundColor: 'red',
        top: 100,
        alignItems: 'center',
    },
    click: {
        width: 330,
        height: 46,
        borderRadius: 20,
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#8D8D8D'
    },
    registration: {

        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: 231,
        height: 34,

    }

})
