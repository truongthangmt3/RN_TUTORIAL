import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';

export default class RightHeaderCustom extends Component {
  render() {
    return (
      <View>
        <Image
          source={require('../../assets/muasi_icon/icon_message_header.png')}
          style={{
            width: 25,
            height: 25,
            marginRight: '3%',
            resizeMode: 'contain',
          }}
        />
        <Image
          source={require('../../assets/muasi_icon/red_dot.png')}
          style={{
            width: 40,
            height: 40,
            position: 'absolute',
            top: 3,
            right: 2,
          }}
        />
      </View>
    );
  }
}
