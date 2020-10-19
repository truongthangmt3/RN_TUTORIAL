import R from '@app/assets/R';
import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native'
import NavigationUtil from '@app/navigation/NavigationUtil'
import { SCREEN_ROUTER } from '@app/constants/Constant';
export default class CustomHeader extends Component {
    render() {
        const { text, edit } = this.props;
        return (
            <View style={{ flexDirection: 'row' }} >
                <TouchableOpacity style={{ flexDirection: 'row' }}
                    onPress={() => { NavigationUtil.navigate(SCREEN_ROUTER.USER) }}
                >
                    <Image source={R.images.ic_back} style={{
                        width: 15,
                        height: 15,
                        resizeMode: 'contain',
                        marginRight: 11,
                        marginTop: 10
                    }} />
                    <Text style={{ fontSize: 20, color: 'white', marginTop: 5 }}>{text}</Text>
                </TouchableOpacity>
                {edit && (<TouchableOpacity onPress={() => { NavigationUtil.navigate(SCREEN_ROUTER.UPDATE_USER_INFO_SCREEN) }}>
                    <Image source={R.images.ic_edit} style={{
                        width: 23,
                        height: 23,
                        resizeMode: 'contain',
                        alignSelf: 'flex-end',
                        marginLeft: '48%',
                        marginTop: 5
                    }} />
                </TouchableOpacity>)}
            </View>
        )
    }
}
