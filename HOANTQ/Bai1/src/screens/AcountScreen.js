import React, { Component } from 'react'
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native'
import NavigationUtil from '../navigation/NavigationUtil'
import { SCREEN_ROUTER } from '../utils/Contans'
import BuyScreen from '../screens/BuyScreen'

export default class AcountScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, }}>
        <View
          style={styles.container}>
          <View style={{ width: 100, height: 100, borderRadius: 50, backgroundColor: '#E2E6B7' }} />
          <View style={{ marginLeft: 20, justifyContent: 'space-around' }}>
            <Text style={{
              fontSize: 21,
              fontWeight: 'bold'
            }}>Tran Van Kim Cuong</Text>
            <Text>0987678709</Text>
            <View style={{ width: 121, height: 30, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFFFFF', borderWidth: 1, borderRadius: 15 }}>
              <Text>Chinh sua</Text>
            </View>
          </View>
        </View>
        <View>
          <TouchableOpacity
          onPress={()=>{
            NavigationUtil.navigate(SCREEN_ROUTER.BUY)
          }}>
          {_funtionBody(require('../../img/ic_create.png'), 'Tin mua của bạn')}
          </TouchableOpacity>
          {_funtionBody(require('../../img/single.png'), 'Thông tin cá nhân')}
          {_funtionBody(require('../../img/ic_awesome.png'), 'Danh muc của tôi')}
          {_funtionBody(require('../../img/ic_feather.png'), 'Đổi mật khẩu')}
          {_funtionBody(require('../../img/recipe.png'), 'Hướng dẫn sử dụng')}
          {_funtionBody(require('../../img/logout.png'), 'Đăng Xuất')}
        </View>
      </View>
    )
  }
}
_funtionBody = (img, label, onPress) => {
  return (
    <TouchableOpacity>
    < View style={styles.body} >
      <Image source={img} />
      <Text style={{ marginLeft: 16, fontSize: 15, flex: 1, }}>{label}</Text>
      <Image source={require('../../img/arrow.png')} />
    </View >
    </TouchableOpacity>
  )

};
const styles = StyleSheet.create({
  container: {

    height: 142,
    backgroundColor: '#ffff',
    flexDirection: 'row',
    padding: 20,
    elevation: 4

  },
  body: {

    flexDirection: 'row',
    marginLeft: 24,
    marginTop: 13,
    borderBottomWidth: 0.2,
    padding: 8

  }
})