import React, { Component } from 'react'
import { Text, View, TouchableOpacity, Image } from 'react-native'

export default class UserScreen extends Component {
    render() {
        return (
            <View style={{ backgroundColor: "white", flex: 1 }}>
                <View style={{ height: 55, backgroundColor: '#69AAFF', flexDirection: 'row' }}>
                    <Image source={require('../../img/ic_back.png')} style={{ marginTop: 20, marginLeft: 13 }} />
                    <Text style={{
                        fontSize: 20,
                        flex: 1, color: '#ffff',
                        marginLeft: 16, marginTop: 15
                    }}>Thông tin cá nhân</Text>
                    <Image source={require('../../img/ic_edit.png')} style={{ marginTop: 20, marginRight: 13 }} />
                </View>
                <View style={{}}>
                    {_funHeader('Họ tên','Trương Quốc Hoan')}
                    {_funHeader('Giới tính','Nam')}
                    {_funHeader('Tỉnh/Thành phố',' Phú Thọ')}
                    {_funHeader('Địa chỉ','xã Vĩnh Chân,huyện Hạ Hòa,tỉnh Phú Thọ')}
                    {_funHeader('Email','Chưa có')}
                    {_funHeader('Số diện thoại','0987634543')}
                </View>
            </View>
        )
    }
}
_funHeader = (title,label) => {
    return (
        <View style={{ fontSize: 14, padding: 16, flexDirection: 'row', borderBottomWidth: 0.2 }}>
            <Text style={{ flex: 1, marginRight: 70 }}>{title}</Text>
            <Text style={{flex:1, marginLeft: 30 }}>{label}</Text>
        </View>
    )
}