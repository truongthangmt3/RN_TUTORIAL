import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Image } from 'react-native';
import { LoginButton, AccessToken, LoginManager } from 'react-native-fbsdk';
import NavigationUtil from '../../navigation/NavigationUtil';
import { GoogleSignin, statusCodes } from '@react-native-community/google-signin';
import { Login, requestRegister } from '@api'
import R from '@R'
import { SCREEN_ROUTER } from '@app/constants/Constant';
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
   state = {
      isLoading: false,
      isError: false,
      data: {},
      phoneNumber: "",
      password: "",
   }
   render() {
      return (
         <View style={styles.container}>
            <Image source={R.images.splash}
               style={styles.img} />
            <View
               style={styles.v_text}>
               <TextInput style={styles.t_input}
                  placeholder="Số điện thoại"
                  onChangeText={(newText) => {
                     this.setState({
                        phoneNumber: newText
                     })
                  }}>
               </TextInput>
               <TextInput style={styles.t_input}
                  secureTextEntry={true}
                  placeholder="Password"
                  onChangeText={(newText) => {
                     this.setState({
                        password: newText
                     })
                  }}
               >
               </TextInput>
            </View>
            <Text style={{ marginTop: 6, marginLeft: 250 }}>Quên mật khẩu?</Text>
            <TouchableOpacity
               onPress={() => {
                  Login({
                     "phone": this.state.phoneNumber,
                     "password": this.state.password,
                     "device_id": ""
                  }).then(result => {
                     alert(result)
                     const token = result.data.token
                     AsyncStorage.setItem("token", token)
                     NavigationUtil.navigate(SCREEN_ROUTER.MAIN)
                  }).catch(error => {
                  })
               }}
            >
               <View
                  style={styles.v_login}>
                  <Text style={styles.t_login}
                  >Đăng nhập</Text>
                  <View>
                     <Image source={R.images.ic_login}
                        style={styles.ic_login} />
                  </View>
               </View>
               <View style={styles.v_footer}>
                  <Text>Bạn chưa có tài khoản?</Text>
                  <TouchableOpacity
                     onPress={() => {
                        NavigationUtil.navigate(SCREEN_ROUTER.REGISTER)
                     }}
                  >
                     <Text style={{ color: 'red', marginLeft: 4 }}>Đăng ký</Text>
                  </TouchableOpacity>
               </View>
            </TouchableOpacity>
         </View>

      )
   }
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
   },
   img: {
      marginTop: 140,
      marginLeft: 31,
      marginRight: 31
   },
   v_text: {
      marginTop: 68,
      marginLeft: 25,
      marginRight: 25,
      borderWidth: 0.1,
      elevation: 20,
   },
   t_input: {
      width: '100%',
      height: 50,
      backgroundColor: 'white',
      borderBottomWidth: 0.5,
   },
   v_login: {
      width: 340,
      height: 46,
      marginLeft: 25,
      backgroundColor: 'gray',
      marginTop: 100,
      borderRadius: 20
   },
   t_login: {
      fontSize: 16,
      textAlign: 'center',
      padding: 10,
   },
   ic_login: {
      position: 'absolute',
      marginLeft: 5,
      left: 290,
      top: -34
   },
   v_footer: {
      flexDirection: 'row',
      marginLeft: 86
   }
})

















    // Somewhere in your code
    // _ggLogin = async () => {
    //     try {
    //         await GoogleSignin.hasPlayServices();
    //         const userInfo = await GoogleSignin.signIn();
    //         this.setState({ userInfo });
    //         console.log(userInfo)
    //         NavigationUtil.navigate("Main")

    //     } catch (error) {
    //         console.log(error)
    //         if (error.code === statusCodes.SIGN_IN_CANCELLED) {
    //             // user cancelled the login flow
    //         } else if (error.code === statusCodes.IN_PROGRESS) {
    //             // operation (e.g. sign in) is in progress already
    //         } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
    //             // play services not available or outdated
    //         } else {
    //             // some other error happened
    //         }
    //     }
    // };

    // _fbLogin() {
    //     LoginManager.logInWithPermissions(["public_profile"]).then(
    //         function (result) {
    //             if (result.isCancelled) {
    //                 console.log("Login cancelled");
    //             } else {
    //                 AccessToken.getCurrentAccessToken().then(
    //                     (data) => {
    //                         console.log(data.accessToken.toString())
    //                         NavigationUtil.navigate("Main")
    //                     }
    //                 )
    //             }
    //         },
    //         function (error) {
    //             console.log("Login fail with error: " + error);
    //         }
    //     );
    // }




// <View style={{
            //     flex: 1,
            //     justifyContent: 'center',
            //     alignItems: 'center',
            // }}>
            //     <TouchableOpacity
            //         onPress={() => {
            //             this._fbLogin()
            //         }}>
            //         <Text> Facebook Login </Text>
            //     </TouchableOpacity>
            //     <TouchableOpacity
            //         style={{
            //             marginTop: 50
            //         }}
            //         onPress={() => {
            //             this._ggLogin()
            //         }}>
            //         <Text> Google Login </Text>
            //     </TouchableOpacity>

            // </View>
