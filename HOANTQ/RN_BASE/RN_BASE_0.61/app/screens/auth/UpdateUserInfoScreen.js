import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity, TextInput, Button, StyleSheet, } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import NavigationUtil from '@app/navigation/NavigationUtil';
import { SCREEN_ROUTER } from '@app/constants/Constant';
import R from '@R'
export class UpdateUserInfoScreen extends Component {
   static propTypes = {
      prop: PropTypes
   }
   render() {
      return (
         <View>
         <View style={styles.container}>
            <TouchableOpacity
               onPress={() => {
                  NavigationUtil.navigate(SCREEN_ROUTER.ACOUNT)
               }}>
               <Image source={R.images.ic_arrowback} style={{ marginTop: 20, marginLeft: 13 }} />
            </TouchableOpacity>
            <Text style={{
               fontSize: 20,
               flex: 1, color: '#ffff',
               marginLeft: 16, marginTop: 15
            }}>Cập nhật thông tin </Text>
         </View>
         <View>
            {_funtionUpdate('Họ tên(*)')}
            {_funtionUpdate('Giới tính(*)')}
            {_funtionUpdate('Tỉnh/Thành phố(*)')}
            {_funtionUpdate('Địa chỉ(*)')}
            {_funtionUpdate('Email(*)')}
            {_funtionUpdate('Số điện thoại(*)')}
         </View>
         <TouchableOpacity>
            <TouchableOpacity
               onPress={() => {
                  NavigationUtil.navigate(SCREEN_ROUTER.ACOUNT)
               }}>
               <View style={styles.v_update}>
                  <Text style={styles.v_text}>Cập nhật</Text>
               </View>
            </TouchableOpacity>
         </TouchableOpacity>
      </View>
   )
}
}
_funtionUpdate = (title) => {
return (
   <View style={{ padding: 8 }}>
      <Text>{title}</Text>
      <TextInput style={styles.t_input} ></TextInput>
   </View>
)
}
const mapStateToProps = (state) => ({
  GetUserState: state.GetUserInfo
})
const mapDispatchToProps = {
}
const styles = StyleSheet.create({
   container: {
      height: 55,
      backgroundColor: '#69AAFF',
      flexDirection: 'row'
   },
   t_input: {
      height: 46,
      backgroundColor: '#F5F6F8',
      borderRadius: 20,
      marginLeft: 8
   },
   v_update: {
      width: 250,
      marginLeft: 80,
      backgroundColor: '#69AAFF',
      borderRadius: 15
   },
   v_text: {
      color: 'white',
      textAlign: 'center',
      fontSize: 18,
      padding: 8,
   }
})
export default connect(mapStateToProps, mapDispatchToProps)(UpdateUserInfoScreen)









