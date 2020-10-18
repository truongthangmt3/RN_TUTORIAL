import React, { Component } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'

export default class BuyScreen extends Component {
  render() {
    return (
      <View >
        <View style={{ height: 55, backgroundColor: '#69AAFF',flexDirection:'row'}}>
          <Image source={require('../../img/ic_back.png')} style={{marginTop:20,marginLeft:13}}/>
          <Text style={{
            fontSize:20,
            flex:1,color:'#ffff',
            marginLeft:16,marginTop:15}}>Tin mua cua ban</Text>
          <Image source={require('../../img/ic_add.png')} style={{marginTop:20,marginRight:13}}/>
        </View>
        <View style={styles.v_body}>
          <Text style={styles.text_title}>Cần mau nhi hoa nghệ tây(Saffon) gia si trong Ha Noi</Text>
          <View style={styles.view_title}>
            <View
              style={styles.view_round}>
            </View >
            <View style={styles.view_name}>
              <Text>Nguyễn Minh Châu </Text>
              <Text>0982145632</Text>
            </View>
            <View style={styles.view_map}>
              <Image source={require('../../img/ic_map.png')}
                style={{ width: 16, height: 16 }} />
            </View>
            <View style={styles.view_address}>
              <Text>Hà Nội</Text>
              <Text>20/09/2020</Text>
            </View>

          </View>
        </View>

      </View>
    )
  }
}
const styles = StyleSheet.create({
  v_body: {
    backgroundColor: 'white',
    padding: 24,
    marginBottom: 16,
    elevation: 2
  },
  text_title: {
    fontSize: 20
  },
  view_title: {
    flexDirection: 'row',
    justifyContent: "center",
    marginTop: 10
  },
  view_round: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#a8d4ff',
  },
  view_name: {
    marginLeft: 8,
    flex: 1,
    padding: 4
  },
  view_map: {
    flexDirection: 'row'
  },
  view_address: {
    flex: 1,
    padding: 4
  }
})