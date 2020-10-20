import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    SafeAreaView,
    Image,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import NavigationUtil from '@app/navigation/NavigationUtil';
import R from '@app/assets/R';
import { SCREEN_ROUTER } from '@app/constants/Constant'

export default class UserScreen extends Component {
    render() {
        let name = 'Nguyễn Văn Thắng', phone = '0964523650'
        return (
            <SafeAreaView style={{
                flex: 1,
                backgroundColor: '#F5F6F8'
            }}>

                <View style={styles.header}>
                    <View style={styles.userAvatar}>
                        <Text style={{
                            fontSize: 36, fontWeight: 'bold', color: 'blue'
                        }}>
                            {_func_getshortname(name)}
                        </Text>
                    </View>

                    <View style={{
                        flex: 1, flexDirection: 'column'
                    }}>
                        <Text style={{
                            fontSize: 21, fontWeight: 'bold'
                        }}>{name}</Text>
                        <Text style={{
                            marginVertical: 8, fontSize: 15
                        }}>{phone}</Text>
                        <TouchableOpacity style={styles.modifyButton}
                            onPress={() => {
                                NavigationUtil.navigate(SCREEN_ROUTER.USER_INFO)
                            }}>
                            <Text style={{
                                fontSize: 12
                            }}>
                                Chỉnh sửa
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.menu}>
                    {_menu(
                        R.images.ic_user_my_post,
                        'Tin đăng của tôi',
                    )}
                    <View style={styles.line} />
                    {_menu(
                        R.images.ic_user_infor,
                        'Thông tin cá nhân'
                    )}
                    <View style={styles.line} />
                    {_menu(
                        R.images.ic_user_list,
                        'Danh mục của tôi'
                    )}
                    <View style={styles.line} />
                    {_menu(
                        R.images.ic_user_change_password,
                        'Đổi mật khẩu'
                    )}
                    <View style={styles.line} />
                    {_menu(
                        R.images.ic_user_guide,
                        'Hướng dẫn sử dụng'
                    )}
                    <View style={styles.line} />
                    {_menu(
                        R.images.ic_user_log_out,
                        'Đăng xuất',
                        async () => {
                            const token = ""
                            await AsyncStorage.setItem("token", token)
                            NavigationUtil.navigate("Login")
                        }
                    )}
                </View>

            </SafeAreaView>
        )
    }
}

_func_getshortname = (text) => {
    var shortname = text.charAt(0);
    for (let i = text.length; i > 0; i--) {
        if (text.charAt(i) == ' ') {
            shortname += text.charAt(i + 1);
            return shortname;
        }
    }
};

const styles = StyleSheet.create({
    header: {
        height: 142,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    modifyButton: {
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'flex-start',
        borderRadius: 15,
        height: 30,
        width: 120
    },
    userAvatar: {
        backgroundColor: '#E2E6B7',
        width: 100,
        height: 100,
        margin: 20,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    menu: {
        height: 288,
        backgroundColor: 'white',
        marginTop: 6,
        paddingHorizontal: 20
    },
    line: {
        borderWidth: 0.5,
        borderColor: '#727C8E',
        marginLeft: 40
    },
    menuItem: {
        height: 48,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    }
})

_menu = (
    icon,
    label,
    action
) => {
    return (
        <TouchableOpacity
            onPress={action}
            style={styles.menuItem}>
            <Image style={{
                resizeMode: 'contain', width: 20, height: 20
            }} source={icon} />
            <Text style={{
                flex: 1, fontSize: 15, marginLeft: 18
            }}>{label}</Text>
            <Image style={{ width: 20, height: 20 }} source={R.images.ic_user_arrow} />
        </TouchableOpacity>
    )
}