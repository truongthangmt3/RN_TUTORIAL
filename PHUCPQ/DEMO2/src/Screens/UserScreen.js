import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet, SafeAreaView, Image } from 'react-native'
import NavigationUtil from '../Navigation/NavigationUtil';
import Icon from '../../asset/ic/icon'
export default class UserSreen extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.header_information}>
                        <View style={styles.information_left}>
                            <Text style={{
                                fontSize: 20,
                                fontWeight: 'bold',
                                color: '#59C200'
                            }}>
                                TC
                            </Text>
                        </View>
                    </View>
                    <View style={styles.information_right}>
                        <Text style={{
                            fontSize: 25,
                            fontWeight: 'bold',
                        }}>
                            Trần Văn Kim Cương
                        </Text>
                        <Text>
                            039741253
                        </Text>
                        <View style={styles.Header_infor}>
                            <Text>
                                Chỉnh sửa
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={styles.headerBootom}>
                    {_setting(Icon.ic_Awsome, 'Tin mua của bạn', Icon.ic_arrows)}
                    {_setting(Icon.ic_Group, 'Thông tin cá nhân', Icon.ic_arrows)}
                    {_setting(Icon.ic_menu, 'Danh mục của tôi', Icon.ic_arrows)}
                    {_setting(Icon.ic_lock, 'Đổi mật khẩu', Icon.ic_arrows)}
                    {_logout(Icon.ic_logout, 'Đăng xuất')}
                </View>
            </SafeAreaView>
        );
    }
}
_setting = (img, label, img1) => {
    return (
        <TouchableOpacity>
            <View style={{
                flexDirection: 'row',
                backgroundColor: 'white',
            }}>
                <View style={{
                    height: 50,
                    width: 40,
                    backgroundColor: 'white',
                    justifyContent: 'center',
                }}>
                    <Image
                        style={styles.ic_infor}
                        source={img}>
                    </Image>

                </View>
                <View style={{
                    borderBottomWidth: 1,
                    height: 50,
                    width: 330,
                    backgroundColor: 'white',
                    justifyContent: 'center',

                }}>
                    <Text style={{
                        fontSize: 15,
                    }}>
                        {label}
                    </Text>
                </View>
                <View style={{
                    borderBottomWidth: 1,
                    justifyContent: 'center',
                }}>
                    <Image
                        style={styles.img_infor}
                        source={img1}>
                    </Image>
                </View>
            </View>
        </TouchableOpacity>
    );
},
    _logout = (img, label) => {
        return (
            <TouchableOpacity>
                <View style={{
                    flexDirection: 'row',
                    backgroundColor: 'white',
                }}>
                    <View style={{
                        height: 50,
                        width: 40,
                        backgroundColor: 'white',
                        justifyContent: 'center',
                    }}>
                        <Image
                            style={styles.ic_infor}
                            source={img}>
                        </Image>

                    </View>
                    <View style={{
                        height: 50,
                        width: 330,
                        backgroundColor: 'white',
                        justifyContent: 'center',
                    }}>
                        <Text style={{
                            fontSize: 15,
                        }}>
                            {label}
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>
        );

    }
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F3F3F3',
    },
    header: {
        flex: 0.4,
        backgroundColor: 'red',
        flexDirection: 'row'
    },
    header_information: {
        flex: 0.4,
        backgroundColor: 'white',
        justifyContent: 'center',
    },
    information_left: {
        flex: 0.01,
        width: 120,
        height: 120,
        borderRadius: 120,
        position: 'absolute',
        backgroundColor: '#C1FFC1',
        marginLeft: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    information_right: {
        flex: 0.7,
        backgroundColor: 'white',
        justifyContent: 'center',
    },
    headerBootom: {
        flex: 1,
        marginTop: 10,
        flexDirection: 'column',
        elevation: 30
    },
    Header_infor: {
        backgroundColor: 'white',
        alignItems: 'center',
        borderRadius: 20,
        padding: 5,
        marginTop: 10,
        marginRight: 150,
        borderWidth: 0.2,
    },
    txt_infor: {

    },
    ic_infor: {
        height: 20,
        width: 20,
        resizeMode: 'contain',
        marginLeft: 10
    },
    img_infor: {
        height: 18,
        width: 18,
        resizeMode: 'contain',
        backgroundColor: 'white'
    }

});
