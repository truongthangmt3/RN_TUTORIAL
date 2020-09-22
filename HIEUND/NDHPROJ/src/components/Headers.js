import React, {Component} from 'react';
import {Text, View, Dimensions, TouchableOpacity} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default class Headers extends Component {
  render() {
    const {text, all} = this.props;
    return (
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: '#F4F7F8',
        }}>
        <Text
          style={{
            fontSize: 20,
            paddingLeft: '3%',
            paddingTop: '2%',
            height: windowHeight * 0.05,
          }}>
          {text}
        </Text>
        {all && (
          <TouchableOpacity
            style={{position: 'absolute', right: '2%', top: '30%'}}>
            <Text style={{color: 'deepskyblue', fontSize: 15}}>Tất cả</Text>
          </TouchableOpacity>
        )}
      </View>
    );
  }
}
