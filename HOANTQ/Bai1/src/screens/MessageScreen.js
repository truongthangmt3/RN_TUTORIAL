import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import ProductBotton from '../screens/ProductBotton'
export default class MessageScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#ffff' }}>
        <View style={{ height: 55, backgroundColor: '#69AAFF' }}>
          <Text style={{ fontSize: 20, fontWeight: 'Medium', color: '#FFFFFF', padding: 15 }}>Thông báo</Text>
        </View>
        <View style={{ flexDirection: 'row', padding: 30 }}>
          <View style={{ width: 50, height: 50, backgroundColor: '#8B9DFF', borderRadius: 50 / 2, }}>
            
          </View>
          {_funtionMessade()}
        </View>
        <View style={{ flexDirection: 'row', padding: 30 }}>
          <View style={{ width: 50, height: 50, backgroundColor: '#4AD1C7', borderRadius: 50 / 2, }}>
            
          </View>
          {_funtionMessade()}
        </View>
        <View style={{ flexDirection: 'row', padding: 30 }}>
          <View style={{ width: 50, height: 50, backgroundColor: '#FFCB52', borderRadius: 50 / 2, }}>    
          </View>
          {_funtionMessade()}
        </View>
        <View style={{ flexDirection: 'row', padding: 30 }}>
          <View style={{ width: 50, height: 50, backgroundColor: 'green', borderRadius: 50 / 2, }}>
          </View>
          {_funtionMessade()}
        </View>
      </View>
    )
  }
}
_funtionMessade = (isWarnig=true) => {
  return (
    <View style={{ marginLeft: 18, borderBottomWidth: 0.2, }}>
      <Text style={{ fontSize: 17, marginLeft: 18, }}>Yeu cau tham gia cua ban da duoc phe duyet</Text>
      <View>
        <Text style={{ marginLeft: 210 }}>25/09/2020</Text>
        {isWarnig ? <View style={{position: 'absolute',width: 9,height: 9,borderRadius: 10,backgroundColor: 'red',top: -15,left: 280}}></View> : null}
      </View>
    </View>
  )
};
const styles = StyleSheet.create({

})
