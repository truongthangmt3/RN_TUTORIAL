import React, { Component } from "react";
import { View, Text, TouchableOpacity, TextInput, Image, SafeAreaView, StyleSheet } from "react-native";
import { LoginButton, AccessToken, LoginManager } from "react-native-fbsdk";
import NavigationUtil from "../../navigation/NavigationUtil";
import {
  GoogleSignin,
  statusCodes
} from "@react-native-community/google-signin";
import { requestLogin } from "@app/constants/Api";
import { SCREEN_ROUTER } from "@constant";
import Input from '@app/components/Input'
import theme from '@theme'
import R from '@R'
import Loading from '@app/components/Loading';
import AsyncStorage from '@react-native-community/async-storage'//luu du lieu xuong o cung
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
  state = {
    isLoading: true,
    isError: false,
    error: null,
    phone: "",
    password: "",
  };
  _ggLogin = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      this.setState({ userInfo });
      console.log(userInfo);
      NavigationUtil.navigate("Main");
    } catch (error) {
      console.log(error);
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
          AccessToken.getCurrentAccessToken().then(data => {
            console.log(data.accessToken.toString());
            NavigationUtil.navigate("Main");
          });
        }
      },
      function (error) {
        console.log("Login fail with error: " + error);
      }
    );
  }

  render() {

    return (
      <SafeAreaView
        style={{
          flex: 1,
          alignItems: 'center',
          backgroundColor: '#F5F6F8'
        }}
      >
        <Image source={R.images.img_login} style={{
          width: theme.dimension.width * 0.8,
          height: theme.dimension.height * 0.16,
          resizeMode: 'contain',
          marginTop: theme.dimension.height * 0.08,
          marginBottom: theme.dimension.height * 0.09
        }} />
        <View style={styles.login_container} >
          <Input placeholder="Số điện thoại" value={this.state.phone} onChangeText={(newPhoneNumber) => {
            this.setState({
              phone: newPhoneNumber
            })
          }} placeholderTextColor="#515C6F" />
          <Input placeholder="Mật khẩu" value={this.state.password} onChangeText={(newPassword) => {
            this.setState({
              password: newPassword
            })
          }} placeholderTextColor="#515C6F" />
        </View>
        <TouchableOpacity style={{ marginTop: 9, marginLeft: theme.dimension.width * 0.6 }}
          onPress={() => { NavigationUtil.navigate("ForgotPassword") }}
        >
          <Text style={{ textDecorationLine: 'underline' }} >Quên mật khẩu?</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: theme.dimension.width * 0.88,
            height: theme.dimension.height * 0.06,
            backgroundColor: '#69AAFF',
            borderRadius: 30,
            marginTop: theme.dimension.height * 0.14,
          }}
          onPress={async () => {
            try {
              result = await requestLogin({
                "phone": this.state.phone,
                "password": this.state.password,
                "device_id": ""
              })
              const token = result.data.token;
              await AsyncStorage.setItem("token", token)
              NavigationUtil.navigate("home")
            }
            catch (error) {
            }
          }}
        >
          <View style={{
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'row',
            paddingTop: 8,
          }}>
            <Text style={{ color: 'white', paddingLeft: '40%' }} >Đăng Nhập</Text>
            <Image source={R.images.img_login_button} style={{
              resizeMode: 'contain',
              marginRight: '3%',
              width: theme.dimension.width * 0.08,
              height: theme.dimension.height * 0.04
            }} />
          </View>
        </TouchableOpacity>
        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 14 }}>
          <Text>Bạn chưa có tài khoản?</Text>
          <TouchableOpacity onPress={() => { NavigationUtil.navigate("Register") }}>
            <Text style={{ color: '#FF3030' }}>Đăng kí</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  login_container: {
    width: theme.dimension.width * 0.87,
    height: theme.dimension.height * 0.15,
    backgroundColor: "#FFFFFF",
    borderBottomColor: '#727C8E',
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
  }
})