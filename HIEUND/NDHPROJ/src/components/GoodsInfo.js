import React, {Component} from 'react';
import {Text, View, Dimensions} from 'react-native';
import CustomerInfo from './CustomerInfo';
import Contact from './Contact';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default class GoodsInfo extends Component {
  render() {
    return (
      <View
        style={{
          flexDirection: 'column',
          backgroundColor: 'white',
          marginTop: '2%',
          width: windowWidth,
          height: windowHeight * 0.19,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.18,
          shadowRadius: 1.0,
          elevation: 1,
        }}>
        <Text
          style={{
            fontSize: 16,
            fontWeight: 'bold',
            marginHorizontal: '8%',
            marginVertical: '3%',
          }}>
          iPhone X xuất xứ Hồng Kông còn bảo hành 6 tháng
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginLeft: '8%',
          }}>
          <View
            style={{
              flexDirection: 'column',
            }}>
            <CustomerInfo
              img={require('../../assets/muasi_icon/icon_phone.png')}
              text="0378515518"
            />
            <CustomerInfo
              img={require('../../assets/muasi_icon/icon_customer.png')}
              text="Nguyễn Thị Hoa"
            />
          </View>
          <CustomerInfo
            img={require('../../assets/muasi_icon/icon_location.png')}
            text="Toàn quốc"
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            flex: 1,
            justifyContent: 'center',
          }}>
          <Contact
            img={require('../../assets/muasi_icon/icon_chat.png')}
            text="Chat"
          />
          <Contact
            img={require('../../assets/muasi_icon/icon_zalo.png')}
            text="Zalo"
          />
          <Contact
            img={require('../../assets/muasi_icon/icon_call.png')}
            text="Gọi điện"
          />
        </View>
      </View>
    );
  }
}
