import React, {Component} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

export class Huongdansudung extends Component {
  render() {
    return (
      <TouchableOpacity
        onPress={() => {
          this.props.navigation.goBack();
        }}
        style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text> Hướng dẫn sử dụng </Text>
      </TouchableOpacity>
    );
  }
}

export default Huongdansudung;
