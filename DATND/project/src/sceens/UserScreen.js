import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity, SafeAreaView, Image, FlatList } from 'react-native'
import NavigationUtil from '../navigation/NavigationUtil'
import img from '../../assest/image.js'

const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        icon: require('../../assest/ic_recipe-create.png'),
        title: 'Tin mua của bạn ',
        ic_next: require('../../assest/arrow.png')

    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        icon: require('../../assest/ic_single.png'),
        title: 'Thong tin ca nhan',
        ic_next: require('../../assest/arrow.png')
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        icon: require('../../assest/ic_awesome-list-ul.png'),
        title: 'Danh muc cua toi ',
        ic_next: require('../../assest/arrow.png')

    },
    {
        id: '58694a0f-3da1-471f-bd96-5545571e29d72',
        icon: require('../../assest/Ic_feather-lock.png'),
        title: 'Doi mat khau',
        ic_next: require('../../assest/arrow.png')
    },
    {
        id: '58694a0f-3da1-471f-bd96-885571e29d72',
        icon: require('../../assest/ic_recipe.png'),
        title: 'Tin mua của bạn ',
        ic_next: require('../../assest/arrow.png')

    },
];
export default class UserScreen extends Component {
    render() {
        return (
            <SafeAreaView style={styles.lv_user}>

                <View style={styles.infomation}>
                    <View style={styles.user_img}>
                        <Image source={img.ic_user} style={styles.icUser} />
                    </View>

                    <View style={styles.user_PN}>
                        <Text style={styles.user_name}>Trần Văn Kim Cương</Text>
                        <Text style={styles.user_phone}>0945666456</Text>
                        <TouchableOpacity style={styles.user_edit}>
                            <Text
                                style={{
                                    color: '#4D4D4D',
                                    fontSize: 12
                                }}>Chỉnh Sửa</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.fl_item}>
                    <FlatList

                        data={DATA}
                        renderItem={({ item, index }) => {
                            return (
                                <View style={styles.item}>
                                    <View style={styles.fl_ic}>
                                        <Image
                                            style={{
                                                width: 15,
                                                height: 16
                                            }}
                                            source={item.icon} />
                                    </View>
                                    <View style={styles.fl_title}>
                                        <Text
                                            style={{
                                                color: '#515C6F',
                                                fontSize: 15
                                            }}
                                        >{item.title}</Text>
                                    </View>
                                    <View style={styles.fl_next}>
                                        <Image
                                            style={{
                                                width: 18,
                                                height: 18
                                            }}
                                            source={item.ic_next} />

                                    </View>
                                </View>
                            )
                        }}

                        ListFooterComponent={() => {
                            return (
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        paddingHorizontal: 25,
                                        marginTop: 10,
                                    }}
                                >
                                    <Image
                                        style={{
                                            width: 14,
                                            height: 15,
                                        }}
                                        source={img.log_out} />
                                    <Text
                                        style={{
                                            paddingLeft: 20,
                                            color: '#515C6F',
                                            fontSize: 15
                                        }}
                                    >Đăng Xuất</Text>
                                </View>
                            )
                        }}
                    />
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({

    lv_user: {
        flex: 1,
        backgroundColor: '#F5F6F8'

    },

    infomation: {
        width: '100%',
        height: 142,
        flexDirection: 'row',
        backgroundColor: 'white',
        paddingHorizontal: 20,
        alignItems: 'center',

    },
    user_img: {
        width: 100,
        height: 100,
        paddingTop: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    user_PN: {
        flex: 1,

        paddingHorizontal: 20,
    },
    user_name: {
        fontSize: 21,
        color: '#515C6F'
    },
    user_phone: {
        fontSize: 15,
        color: '#515C6F',
        marginTop: 6
    },
    user_edit: {
        width: 121,
        height: 30,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#727C8E',
        borderRadius: 20,
        marginTop: 11
    },

    fl_item: {
        width: '100%',
        height: 288,
        marginTop: 10,
        justifyContent: 'center',
        backgroundColor: '#fff',


    },
    item: {
        width: '100%',
        height: 40,
        marginTop: 10,

        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 25,
        paddingRight: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#727C8E',

    },
    fl_ic: {

    },
    fl_title: {
        flex: 1,
        paddingHorizontal: 20
    },
    fl_next: {

    }
})
