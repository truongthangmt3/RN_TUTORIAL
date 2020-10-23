import React, { Component } from 'react';
import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import R from '@R'

import NavigationUtil from '@app/navigation/NavigationUtil';
import { SCREEN_ROUTER } from '@app/constants/Constant';
class RegisterScreen extends Component {
   render() {
      state= {
         phoneNumber:" ",
         Email:" ",
         fullName:" ",
         city:" ",
         password:" ",
         comfirm:" ",
      }
      return (
         <View style={styles.container}>
            <Image source={R.images.ic_arrowback}
               style={styles.img_back} />
            <Image source={R.images.splash}
               style={styles.img_splash} />
            <View style={styles.v_textinput}>
               {_funtionInput('Số điện thoại')}
               {_funtionInput('Email')}
               {_funtionInput('Họ và tên')}
               {_funtionInput('Tỉnh/Thành phố')}
               {_funtionInput('Mật khẩu')}
               {_funtionInput('Xác nhận mật khẩu')}
            </View>
            <TouchableOpacity
               onPress={() => {
                  NavigationUtil.navigate(SCREEN_ROUTER.LOGIN)
               }}>
               <View
                  style={styles.v_register}>
                  <Text style={styles.t_register}
                  >Đăng ký</Text>
                  <View>
                     <Image source={R.images.ic_login}
                        style={styles.ic_register} />
                  </View>
               </View>
            </TouchableOpacity>
         </View>
      );
   }
}
_funtionInput = (title, textEntry = false) => {
   return (
      <View>
         <TextInput
            style={styles.t_input}
            placeholder={title} />
         {/* {textEntry ? <View><TextInput secureTextEntry={true}/></View> :null} */}
      </View>
   )
}
const styles = StyleSheet.create({
   container: {
      flex: 1,
      alignItems: 'center',
   },
   img_back: {
      marginTop: 18,
      marginRight: 380,
      marginLeft: 15
   },
   img_splash: {
      width: 177,
      height: 72,
      marginTop: 27
   },
   v_textinput: {
      marginTop: 18,
      width: 365,
      borderRadius: 15,
      backgroundColor: '#ffff',
      elevation: 30
   },
   t_input: {
      width: 365,
      height: 59,
      borderBottomWidth: 0.5,
   },
   v_register: {
      width: 340,
      height: 46,
      marginLeft: 25,
      backgroundColor: 'gray',
      marginTop: 100,
      borderRadius: 20
   },
   t_register: {
      fontSize: 16,
      textAlign: 'center',
      padding: 10,
   },
   ic_register: {
      position: 'absolute',
      marginLeft: 5,
      left: 290,
      top: -34
   },
})

export default RegisterScreen;
