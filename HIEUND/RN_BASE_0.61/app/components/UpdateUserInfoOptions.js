import React, { Component } from 'react'
import { Text, View, TextInput } from 'react-native'

export default class UpdateUserInfoOptions extends Component {
    render() {
        const { text, onChangeText } = this.props;
        return (
            <View style={{ flexDirection: 'column', marginLeft: 10, marginTop: 10 }}>
                <Text style={{ fontSize: 16, marginBottom: 7, marginLeft: 10 }}>{text}(*)</Text>
                <TextInput
                    style={{
                        width: '95%',
                        height: 50,
                        borderRadius: 8,
                        backgroundColor: '#F5F6F8'
                    }}
                    onChangeText={onChangeText}
                />
            </View>
        )
    }
}
