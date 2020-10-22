import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class UserInfoOptions extends Component {
    render() {
        const { text, info } = this.props;
        return (
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginHorizontal: 11,
                marginTop: 19,
                borderBottomWidth: 1,
                paddingBottom: 18,
                borderBottomColor: '#707070'
            }}>
                <Text style={{ fontSize: 15 }}>{text}:</Text>
                <Text style={{ fontSize: 15, fontWeight: 'bold' }}>{info}</Text>
            </View>
        )
    }
}
