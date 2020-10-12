import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import NavigationUtil from '../Navigation/NavigationUtil'
import { SCREEN_ROUTER } from '../utils/Constant'

export default class ListPostScreen extends Component {
    render() {
        return (
            <TouchableOpacity onPress={() => {
                NavigationUtil.navigate(SCREEN_ROUTER.HOME)
            }}>

                <View>
                    <Text> textInComponent </Text>
                </View>
            </TouchableOpacity>
        )
    }

}
