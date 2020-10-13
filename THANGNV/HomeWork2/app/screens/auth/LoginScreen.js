import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    TextInput,
    Dimensions,
    SafeAreaView,
    TouchableOpacity
} from 'react-native';
import {
    LoginButton,
    AccessToken,
    LoginManager
} from 'react-native-fbsdk';
import reactotron from 'reactotron-react-native';
import NavigationUtil from '../../navigation/NavigationUtil';
import images from '@app/assets/imagesAsset';
import { GoogleSignin, statusCodes } from '@react-native-community/google-signin';
import { requestLogin } from '@api';
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
            <SafeAreaView style={{
                flex: 1,
                backgroundColor: '#F7F7F7'
            }}>
                <Image style={{
                    marginTop: 79,
                    width: 313,
                    height: 126,
                    marginHorizontal: 31,
                    alignSelf: 'center'
                }}
                    source={images.img_muasi_logo}
                />

                <View style={{
                    marginTop: 68,
                    marginHorizontal: 25,
                    borderWidth: 0.5,
                    borderRadius: 20,
                    borderColor: '#707070',
                    backgroundColor: 'white',
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 4,
                        height: 4,
                    },
                    shadowOpacity: 0.2,
                    shadowRadius: 10,
                }}>
                    <TextInput
                        style={{
                            height: 59,
                            padding: 22,
                            borderBottomWidth: 1,
                            borderBottomColor: 'rgba(70, 70, 70, 0.3)'
                        }}
                        onChangeText={(newText) => {
                            this.setState({
                                phoneNumber: newText
                            })
                        }}
                        //value={this.state.phoneNumber}
                        keyboardType={'numbers-and-punctuation'}
                        returnKeyType={'next'}
                        placeholder={'Số Điện Thoại'}
                        placeholderTextColor='grey'
                    />
                    <TextInput
                        style={{
                            height: 59,
                            padding: 22
                        }}
                        onChangeText={(newText) => {
                            this.setState({
                                password: newText
                            })
                        }}
                        //value={this.state.password}
                        returnKeyType={'go'}
                        secureTextEntry={true}
                        placeholder={'Mật khẩu'}
                        placeholderTextColor='grey'
                    />
                </View>

                <TouchableOpacity
                    onPress={() => {
                        NavigationUtil.navigate("ForgotPassword")
                    }}
                    style={{
                        marginTop: 9,
                        marginRight: 25,
                        marginBottom: 93,
                        alignSelf: 'flex-end'
                    }}>
                    <Text style={{
                        fontSize: 12,
                        fontWeight: 'bold',
                        textDecorationLine: 'underline'
                    }}>
                        Quên mật khẩu?
                        </Text>
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
                            NavigationUtil.navigate("Home")
                        } catch (error) {
                            reactotron.log(result);
                            alert(JSON.stringify(result))
                        }
                        //NavigationUtil.navigate("Home")
                    }}
                    style={{
                        alignSelf: 'center',
                        justifyContent: 'center',
                        borderRadius: 23,
                        height: 46,
                        width: Dimensions.get('window').width - 23 * 2,
                        backgroundColor: 'grey',
                    }}>
                    <Text style={{
                        fontSize: 12,
                        alignSelf: 'center',
                        fontWeight: 'bold',
                        color: 'white',
                    }}>
                        Đăng nhập
                    </Text>
                    <Image style={{
                        alignSelf: 'flex-end',
                        position: 'absolute',
                        width: 29,
                        height: 29,
                        right: 8
                    }}
                        source={images.ic_next} />
                </TouchableOpacity>

                <View style={{
                    marginTop: 12,
                    alignSelf: 'center',
                    flexDirection: 'row',
                    justifyContent: 'center'
                }}>

                    <Text style={{
                        fontSize: 12,
                    }}>
                        Bạn chưa có tài khoản?
                    </Text>
                    <TouchableOpacity onPress={() => {
                        NavigationUtil.navigate("Register")
                    }}
                        style={{
                            marginLeft: 5
                        }}>
                        <Text style={{
                            fontSize: 12,
                            color: 'red'
                        }}>
                            Đăng ký
                    </Text>
                    </TouchableOpacity>
                </View>
                <View style={{
                    marginTop: 20,
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                }}>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: 'bold',
                    }}>
                        Hoặc
                        </Text>
                    <Text style={{
                        marginVertical: 15
                    }}>
                        Đăng nhập với
                        </Text>
                    <View style={{
                        flexDirection: 'row',
                    }}>
                        <TouchableOpacity onPress={this._fbLogin}>
                            <Image style={{
                                width: 40,
                                height: 40,
                                marginRight: 40
                            }} source={images.ic_facebook} />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={
                            this._ggLogin
                        }>
                            <Image style={{
                                width: 40,
                                height: 40
                            }} source={images.ic_google} />
                        </TouchableOpacity>

                    </View>
                </View>
            </SafeAreaView>
        )
    }
}