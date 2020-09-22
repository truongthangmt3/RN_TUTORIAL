import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

export default class UserScreen extends Component {
  render() {
    return (
      <View
        style={{
          backgroundColor: 'blue',
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.goBack();
          }}>
          <Text> UserScreen </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
