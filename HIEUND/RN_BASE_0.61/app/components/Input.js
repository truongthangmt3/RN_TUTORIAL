import React, { Component } from 'react'
import { Text, View, TextInput } from 'react-native'
import theme from '@app/constants/Theme'
export default class Input extends Component {
    render() {
        const { placeholder, onChangeText, value, placeholderTextColor,isUnderline } = this.props;
        return (
            <TextInput
                style={{
                    flex:1,
                    borderBottomColor: '#727C8E',
                    paddingLeft: 24
                }}
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
                placeholderTextColor={placeholderTextColor}
            />
        )
    }
}
