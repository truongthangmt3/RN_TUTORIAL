import React, { Component } from 'react'
import { Text, View, SafeAreaView, TouchableOpacity, StyleSheet, Image } from 'react-native'
import NavigationUtil from '../navigation/NavigationUtil';
export default class UserScreen extends Component {
    render() {
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: '#F5F6F8' }}>
                <TouchableOpacity onPress={() => { }} style={styles.v_header}>
                    <Image resizeMode='contain' source={require('../../assets/images/circle_heart.png')} style={styles.v_avatar} />
                    <View style={{ flexDirection: 'column' }}>
                        <Text style={[styles.txt_name]}>Nguyễn Đức Thịnh</Text>
                        <Text style={[styles.txt_phone]}>0965520555</Text>
                        <TouchableOpacity onPress={() => { }}
                            style={styles.v_button}>
                            <Text styles={{ color: '#727C8E', fontSize: 12 }}>Chỉnh sửa</Text>
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>

                <View style={{ marginTop: 6, backgroundColor: 'white' }}>

                    {_functionBody(require('../../assets/images/ic_text.png'), "Tin mua của bạn",
                        () => { NavigationUtil.navigate('home') })}
                    {_functionBody(require('../../assets/images/ic_info.png'), "Thông tin cá nhân",
                        () => { NavigationUtil.navigate('home') })}
                    {_functionBody(require('../../assets/images/ic_list.png'), "Danh muc của tôi",
                        () => { NavigationUtil.navigate('home') })}
                    {_functionBody(require('../../assets/images/ic_lock.png'), "Đổi mật khẩu",
                        () => { NavigationUtil.navigate('home') })}
                    {_functionBody(require('../../assets/images/ic_exit.png'), "Đăng xuất",
                        () => { NavigationUtil.navigate('home') })}


                </View>
            </SafeAreaView>
        )
    }
}
const _functionBody = (iconLocal, label, onPress) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.v_body}>
                <Image resizeMode='contain' source={iconLocal} style={styles.icon} />
                <Text style={[styles.txt_body]}>{label}</Text>
                <Image source={require('../../assets/images/ic_arrow_grey.png')} style={styles.iconRight} />
            </View>

            <View style={styles.v_line} />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    v_header: {
        flexDirection: 'row',
        backgroundColor: 'white',
        marginTop: 3
    },
    v_avatar: {
        width: 100,
        height: 100,
        marginTop: 19,
        marginBottom: 23,
        marginLeft: 20,
        marginRight: 20
    },
    txt_name: {
        marginTop: 27,
        color: '#000000',
        fontSize: 21,
        fontWeight: '400'
    },
    txt_phone: {
        marginTop: 6,
        color: '#515C6F',
        fontSize: 15
    },
    v_body: {
        flexDirection: 'row',
        marginTop: 17,
        marginLeft: 24,
        marginRight: 18.6,
        alignItems: 'center',
        marginBottom: 15
    },
    txt_body: {
        fontSize: 14,
        marginLeft: 17.5,
        flex: 1,
        color: '#515C6F'
    },
    txt_body_red: {
        fontSize: 14,
        marginLeft: 17.5,
        flex: 1,
        color: '#C61D23'
    },
    v_line: {
        height: 0.5,
        backgroundColor: '#8B8B8B',
        marginLeft: 60,
        marginRight: 15
    },
    v_button: {
        marginTop: 11, width: 121,
        alignItems: 'center',
        borderRadius: 20,
        marginBottom: 13,
        borderColor: '#D4D7DD',
        borderWidth: 1,
        paddingVertical: 7.3
    },

    iconRight: { width: 18, height: 18 },
    icon: { width: 17, height: 22 }
});