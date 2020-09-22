import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
export default class TaskBarButtons extends Component {
  render() {
    const {icon, label} = this.props;
    return (
      <TouchableOpacity
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Icon
          color="#808080"
          name={icon}
          size={30}
          style={{marginTop: '5%', marginBottom: '8%'}}
        />
        <Text style={{textAlign: 'justify', fontSize: 13}}>{label}</Text>
      </TouchableOpacity>
    );
  }
}
