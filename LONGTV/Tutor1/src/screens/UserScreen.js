import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet, Image, SafeAreaView } from 'react-native'
import NavigationUtil from '../navigation/NavigationUtil';

export default class UserSreen extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.InformationUser}>
                    <View style={styles.User}>
                        <Text style={{ fontSize: 40 }}>TC</Text>
                    </View>
                    <View style={styles.TextUser}>
                        <Text style={{ fontWeight: 'bold', fontSize: 23, }}>Trần Văn Kim Cương</Text>
                        <Text> 039741253</Text>
                        <TouchableOpacity>
                            <View style={{ height: 25, width: 80, borderRadius: 25, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center', marginVertical: 10 }}>
                                <Text>Chỉnh sửa</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <View>
                    {_list(require('../../assets/recipe.png'),
                        "Tin mua của bạn",
                        () => { NavigationUtil.navigate('home') }
                    )}
                    {_list(require('../../assets/single.png'),
                        "Thông tin cá nhân",
                        () => { NavigationUtil.navigate('home') }
                    )}
                    {_list(require('../../assets/list-ul.png'),
                        "Danh mục của tôi",
                        () => { NavigationUtil.navigate('home') }
                    )}
                    {_list(require('../../assets/lock.png'),
                        "Đổi mật khẩu",
                        () => { NavigationUtil.navigate('home') }
                    )}
                    {_list(require('../../assets/recipe2.png'),
                        "Hướng dẫn sử dụng",
                        () => { NavigationUtil.navigate('home') }
                    )}
                    {_list(require('../../assets/log-out.png'),
                        "Đăng xuất",
                        () => { NavigationUtil.navigate('login') }
                    )}
                </View>
            </SafeAreaView >
        )
    }
}


_list = (iconLocal, label, onPress) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.v_body}>
                <Image resizeMode='contain' source={iconLocal} style={styles.Image} />
                <Text style={[styles.txt_body]}>{label}</Text>
                <Image source={require('../../assets/Ellipse.png')} style={styles.iconRight} />
            </View>

            <View style={styles.v_line} />
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F6F8'
    }
    ,
    InformationUser: {
        flexDirection: 'row',
    },
    User: {
        height: 100,
        width: 100,
        borderRadius: 50,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 25,
        marginVertical: 15
    },
    TextUser: {
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        marginVertical: 20

    },
    Image: {
        height: 30,
        width: 25
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
    }
})