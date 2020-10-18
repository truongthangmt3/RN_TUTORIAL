import React, { Component } from 'react'
import { Text, View ,Image,TouchableOpacity,TextInput,Button,} from 'react-native'

export default class EditScreen extends Component {
    render() {
        return (
            <View>
               <View style={{ height: 55, backgroundColor: '#69AAFF', flexDirection: 'row' }}>
                    <Image source={require('../../img/ic_back.png')} style={{ marginTop: 20, marginLeft: 13 }} />
                    <Text style={{
                        fontSize: 20,
                        flex: 1, color: '#ffff',
                        marginLeft: 16, marginTop: 15
                    }}>Cập nhật thông tin </Text>  
                </View>
                <View style={{padding:8}}>
                    <Text>Họ tên(*)</Text>
                    <TextInput style={{height:46,backgroundColor:'#F5F6F8',marginLeft:8}}>Trương Quốc Hoan</TextInput>
                </View>
                <View style={{padding:8}}>
                    <Text>Giới tính(*)</Text>
                    
                </View>
                <View style={{padding:8}}>
                    <Text>Tỉnh/Thành phố(*)</Text>
                    <TextInput style={{height:46,backgroundColor:'#F5F6F8',marginLeft:8}}>Trương Quốc Hoan</TextInput>
                </View>
               <Button title="Cập nhật" color="#69AAFF" />
            </View>
        )
    }
}
