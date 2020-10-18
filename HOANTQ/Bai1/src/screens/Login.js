import React, { Component } from 'react'
import { Text, View ,TouchableOpacity} from 'react-native'
import NavigationUtil from '../navigation/NavigationUtil'
import { SCREEN_ROUTER } from '../utils/Contans'

export default class Login extends Component {
    render() {
        return (
            <View style={{
                flex:1,
                justifyContent:'center',
                alignItems:'center'
            }}>
                <TouchableOpacity
                onPress = {()=>{
                    NavigationUtil.navigate(SCREEN_ROUTER.HOME)
                }}>
                <Text> LOGIN </Text>
                </TouchableOpacity>
                
            </View>
        )
    }
}
