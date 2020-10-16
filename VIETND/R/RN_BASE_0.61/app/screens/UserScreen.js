import React, { Component } from 'react';
import { Text, View, SafeAreaView, TouchableOpacity, Alert, Image, StyleSheet, FlatList } from 'react-native';
import R from '@R'
export default class UserScreen extends Component {

    render() {

        return (

            <SafeAreaView style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.header_boder}>

                        <View style={styles.image_name}>
                            <Text style={styles.text_image}>TC</Text>
                        </View>

                        <View style={styles.Information}>
                            <Text style={styles.text_name}>Trần Văn Kim Cương</Text>
                            <Text style={styles.text_phone}>039741253</Text>
                            <TouchableOpacity style={styles.btn_edit}
                                onPress={() => {
                                    alert('Xin mời chỉnh sửa')
                                }}>
                                <Text>Chỉnh sửa</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                </View>
                <View style={styles.body}>

                    <View style={styles.body_row} >
                        <View style={styles.body_image}>
                            <Image
                                style={styles.image_icon}
                                source={R.images.ic_book}
                            />
                        </View>
                        <View style={styles.body_Information}>
                            <Text style={styles.text_Information}>Tin mua của bạn</Text>
                            <View style={styles.image_icon_next}>
                                <Image
                                    style={styles.image_next}
                                    source={R.images.ic_path}
                                />
                            </View>
                        </View>
                    </View>
                    {/* Thông tin cá nhân */}
                    <View style={styles.body_row} >
                        <View style={styles.body_image}>
                            <Image
                                style={styles.image_icon}
                                source={R.images.ic_user2}
                            />
                        </View>
                        <View style={styles.body_Information}>
                            <Text style={styles.text_Information}>Thông tin cá nhân</Text>
                            <View style={styles.image_icon_next}>
                                <Image
                                    style={styles.image_next}
                                    source={R.images.ic_path}
                                />
                            </View>
                        </View>
                    </View>

                    {/* Danh muc */}
                    <View style={styles.body_row} >
                        <View style={styles.body_image}>
                            <Image
                                style={styles.image_icon}
                                source={R.images.ic_list}
                            />
                        </View>
                        <View style={styles.body_Information}>
                            <Text style={styles.text_Information}>Danh mục của tôi</Text>
                            <View style={styles.image_icon_next}>
                                <Image
                                    style={styles.image_next}
                                    source={R.images.ic_path}
                                />
                            </View>
                        </View>
                    </View>
                    {/* hướng dẫn sưr dụng */}
                    <View style={styles.body_row} >
                        <View style={styles.body_image}>
                            <Image
                                style={styles.image_icon}
                                source={R.images.ic_HD}
                            />
                        </View>
                        <View style={styles.body_Information}>
                            <Text style={styles.text_Information}>Hướng dẫn sử dụng</Text>
                            <View style={styles.image_icon_next}>
                                <Image
                                    style={styles.image_next}
                                    source={R.images.ic_path}
                                />
                            </View>
                        </View>
                    </View>
                    {/* Đăng xuất */}
                    <View style={styles.body_row} >
                        <TouchableOpacity
                            onPress={async () => {
                                await AsyncStorage.setItem("token", "")
                                NavigationUtil.navigate(SCREEN_ROUTER.LOGIN)
                            }}
                            style={styles.body_image}>
                            <Image
                                style={styles.image_icon}
                                source={R.images.ic_logout}
                            />
                        </TouchableOpacity>
                        <View style={styles.body_Information}>
                            <Text style={styles.text_Information}>Đăng xuất</Text>
                            <View style={styles.image_icon_next}>
                                <Image
                                    style={styles.image_next}
                                    source={R.images.ic_path}
                                />
                            </View>
                        </View>
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
    header: {
        height: 142,
        width: '100%',
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'
    },
    header_boder: {
        height: 100,
        width: '100%',
        flexDirection: 'row',
    },
    image_name: {
        height: 100,
        width: 100,
        backgroundColor: '#E2E6B7',
        borderRadius: 50,
        marginLeft: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text_image: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#B8CB85'
    },
    Information: {
        marginLeft: 20,
        height: 100,
        width: 270,
    },
    text_name: {
        fontSize: 21,
        fontWeight: '500'
    },
    text_phone: {
        fontSize: 15,
        marginTop: 8
    },
    btn_edit: {
        height: 30,
        width: 121,
        borderRadius: 15,
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: "#E6E6E6",
        borderRadius: 15,
        backgroundColor: '#fff',
        shadowColor: "rgba(171, 180, 189, 035)",
        shadowOffset: { width: 0.2, height: 0.2 },
        shadowOpacity: 0.5,
        elevation: 0.2
    },
    body: {
        marginTop: 10,
        height: 330,
        width: '100%',
        backgroundColor: 'white'
    },
    body_row: {
        marginTop: 15,
        height: 50,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
    },
    body_image: {
        marginLeft: 24,
        alignItems: 'center',
        justifyContent: 'center'
    },
    image_icon: {
        height: 18,
        width: 18,
    },
    body_Information: {
        height: 50,
        flex: 1,
        marginLeft: 20,
        alignItems: 'center',
        borderBottomColor: '#D8D8D8',
        borderBottomWidth: 1,
        flexDirection: 'row',
        marginRight: 15,

    },
    text_Information: {
        fontSize: 15,
        flex: 1,

    },
    image_icon_next: {
        width: 30,
        height: 30,
        backgroundColor: '#F2F2F2',
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center'


    },
    image_next: {
        height: 14,
        width: 10
    }


});
