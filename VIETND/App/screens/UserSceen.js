import React, { Component } from 'react';
import { Text, View, TouchableOpacity, SafeAreaView, StyleSheet, Image, FlatList } from 'react-native';
import NavigationUtil from '../navigation/NavigationUtil';
import CustomUser from '../component/CustomUser';


export default class UserSceen extends Component {


    render() {
        const DATA = [
            {
                id: 'Tin mục mua',
                Image_Next: require('../assets/ic_next.png'),
                Image: require('../assets/ic_book.png')
            },
            {
                id: 'Thông tin cá nhân',
                Image_Next: require('../assets/ic_next.png'),
                Image: require('../assets/ic_user.png')
            },
            {
                id: 'Danh mục của tôi',
                Image_Next: require('../assets/ic_next.png'),
                Image: require('../assets/ic_list.png')
            },
            {
                id: 'Đổi mật khẩu',
                Image_Next: require('../assets/ic_next.png'),
                Image: require('../assets/ic_lock.png')
            },
            {
                id: 'Hướng dẫn sử dụng',
                Image_Next: require('../assets/ic_next.png'),
                Image: require('../assets/ic_HuongDan.png')
            },
            {
                id: 'Đăng xuất',
                Image_Next: require('../assets/ic_next.png'),
                Image: require('../assets/ic_DangXuat.png')
            },


        ];

        return (

            <SafeAreaView style={styles.container}>
                <View style={styles.banner} >
                    <View style={styles.image_banner}>
                        <Text style={styles.text_baner} >TC</Text>
                    </View>
                    <View style={styles.information}>
                        <View style={styles.font_baner}>
                            <Text style={{ marginTop: 10, fontSize: 18, fontWeight: '500' }}>Trần Văn Kim Cương</Text>
                            <Text style={{ marginTop: 10 }}>0968189970</Text>
                            <View style={styles.btn_banner}>
                                <Text>Chỉnh sửa</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.herder}>
                    <View>
                        <FlatList
                            data={DATA}
                            renderItem={({ item, index }) => {
                                return (
                                    <CustomUser
                                        Name={item.id}
                                        image={item.Image}
                                        image_Next={item.Image_Next}

                                    />

                                );
                            }}
                        />
                    </View>
                </View>
            </SafeAreaView>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F5F6F8',
        flex: 1
    },
    banner: {
        height: 142,
        width: '100%',
        backgroundColor: 'white',
        alignItems: 'center',

        flexDirection: "row"
    },
    image_banner: {
        height: 100,
        width: 100,
        marginLeft: 20,
        marginTop: 19,
        marginBottom: 23,
        backgroundColor: '#E2E6B7',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50
    },
    information: {

        height: 100,
        width: 250,
        marginLeft: 20,
        backgroundColor: 'white',
    },
    text_baner: {
        fontSize: 40,
        fontWeight: '500',

    },
    btn_banner: {
        height: 30,
        width: 121,
        marginTop: 10,
        backgroundColor: 'white',
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        shadowColor: '#D8D8D8',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 1,
        shadowRadius: 0.5,
    },

    //herder
    herder: {
        marginTop: 10,
        // height: 450,
        width: '100%',
        backgroundColor: 'white',
    }
})
