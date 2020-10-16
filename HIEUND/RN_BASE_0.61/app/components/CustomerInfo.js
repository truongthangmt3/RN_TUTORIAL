import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';

export default class CustomerInfo extends Component {
  render() {
    const {img, text} = this.props;
    return (
      <View
        style={{
          flexDirection: 'row',
          marginRight: '3%',
          marginBottom: '4%',
        }}>
        <Image
          source={img}
          style={{width: 15, height: 15, resizeMode: 'contain'}}
        />
        <Text style={{marginLeft: '8%', fontSize: 15}}>{text}</Text>
      </View>
    );
  }
}
