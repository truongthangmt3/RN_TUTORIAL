import React, {Component} from 'react';
import {Text, View, TouchableOpacity, Image, Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default class Contact extends Component {
  render() {
    const {img, text} = this.props;
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          borderRightWidth: 0.25,
          borderTopWidth: 0.25,
          borderColor: '#BBBBBB',
        }}>
        <TouchableOpacity>
          <Image source={img} style={{width: 24, height: 24}} />
          <Text style={{fontSize: 13, marginTop: '2%', color: '#69AAFF'}}>
            {text}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
