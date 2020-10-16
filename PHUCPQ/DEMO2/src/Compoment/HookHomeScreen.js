import React, { Component, useState, useEffect, useRef } from 'react';
import {
    StyleSheet,
    SafeAreaView,
    //ActivityIndicator,
    View,
    Text,
    FlatList,
    Image,
    ImageBackground,
    TextInput,
    TouchableOpacity,
} from 'react-native';
import axios from 'axios'
import Loading from './Loading'

export default HookHomeScreen = () => {
    const [isLoading, setLoading] = useState(true)
    const [isError, setError] = useState(false)
    const [data, setData] = useState({})


    useEffect(() => {
        getData();
    }, [])

    getData = async () => {

        try {
            const response = await axios.get('http://3.0.209.176/api/GetHome');
            const jsonResponse = response.data
            setData(jsonResponse.data)
            setLoading(false)
            setError(false)

        } catch (error) {
            setLoading(false)
            setError(true)
            setData({})

        }

    }
    if (isLoading) {
        return (
            <Loading>
            </Loading>
        )

    } else if (isError) {
        return (
            <View style={styles.container}>
                <Text> Đã có lỗi xảy ra</Text>
            </View>
        )
    } return (
        <SafeAreaView style={styles.container}>

            <View style={styles.block_search}>
                <Image
                    source={require('../../asset/ic/ic_search.png')}
                    style={styles.img_search}
                />
                <Text style={styles.txt_search}>Search</Text>
            </View>
            <View style={styles.block_background}>
                <ImageBackground
                    style={styles.img_backgruond}
                    source={{ uri: 'https://dean2020.edu.vn/wp-content/uploads/2019/10/stt-13.jpg' }}>
                    <View style={styles.v_herader}>
                        <Text style={styles.txt_tmms}>
                            Tôi muốn mua sỉ
                        </Text>
                        <View style={{ flexDirection: 'row' }}>
                            <TextInput
                                style={styles.txt_input}>
                                <Text style={styles.txt_dmsp}>
                                    Danh mục sản phẩm
                                    </Text>
                            </TextInput>

                            <View style={styles.list_book}>
                                <Text>
                                    Toàn quốc
                                </Text>
                                <Image style={
                                    styles.img_list}
                                    source={require('../../asset/ic/ic_arrow.png')}>
                                </Image>
                            </View>
                        </View>
                        <Text style={styles.txt_dktk}>
                            Để tìm kiếm khách hàng được tốt nhất bạn nên đăng ký đúng danh mục sản phẩm!
                        </Text>
                        <View style={styles.login}>
                            <Text>
                                Đăng tin
                            </Text>
                        </View>
                    </View>
                </ImageBackground>
            </View>
            <Text style={{
                fontSize: 20,
                backgroundColor: 'white'
            }}>Từ khóa tìm kiếm</Text>
            <View style={{
                flexWrap: 'wrap',
                backgroundColor: 'white',
                flexDirection: 'row',
            }}>
                {data.listhotkey?.map((item, index) => {
                    return (
                        <View
                            key={index}
                            style={{
                                padding: 10,
                                backgroundColor: '#e4e5ea',
                                borderRadius: 5,
                                margin: 2

                            }}>
                            <Text>
                                #{item.name}
                            </Text>
                        </View>
                    )
                })}
            </View>
            <View style={{
                flexDirection: 'row'
            }}>
                <Text style={{
                    fontSize: 20,

                }}>
                    Danh mục sản phẩm cần mua
            </Text>
                <Text style={{
                    fontSize: 15,
                    marginLeft: 100,

                }}>
                    Tất Cả
            </Text>
            </View>
            <SafeAreaView style={styles.container}>
                <FlatList
                    keyExtractor={(item, index) => index.toString()}
                    data={data.listpost}
                    renderItem={({ item, index }) => {
                        return (
                            <View style={{
                                width: '100%',
                                height: 200,
                                //margin: 10,
                                backgroundColor: '#f9c2ff',
                            }}>
                                <Text style={{
                                }}>
                                    {item.namekey}
                                </Text>
                                <View>
                                    <View style={{
                                        flex: 0.001,
                                        height: 40,
                                        width: 40,
                                        borderRadius: 40,
                                        marginTop: 20,
                                        backgroundColor: 'red',
                                        position: 'absolute',
                                    }}>
                                    </View>
                                    <Text style={{
                                        marginTop: 20,
                                        marginLeft: 40,
                                    }}>

                                        {item.username}
                                    </Text>
                                </View>
                                <View>
                                    <View style={{

                                        //backgroundColor: 'green',
                                        flexDirection: 'column'
                                    }}>
                                        <Text style={{
                                            backgroundColor: 'red',
                                            marginLeft: 350,
                                        }}>
                                            {item.province}
                                        </Text>
                                        <Image style={{
                                            marginLeft: 300,
                                            height: 15,
                                            width: 15,
                                            backgroundColor: 'green'
                                        }}
                                            source={require('../../asset/ic/ic_marker.png')}>

                                        </Image>
                                    </View>
                                    <View style={{

                                    }}>
                                        <Image style={{
                                            marginLeft: 200,
                                            height: 18,
                                            width: 18
                                        }}
                                            source={require('../../asset/ic/ic_oclock.png')}>

                                        </Image>
                                        <Text>
                                            {item.created_date}
                                        </Text>
                                    </View>

                                </View>
                            </View>)
                    }}>
                </FlatList>
            </SafeAreaView>
            <View style={{
                flex: 0.3,
                flexDirection: 'row',
                borderTopWidth: 0.5
            }}>
                {_Taskbar(require('../../asset/ic/ic_home.png'), 'Trang chủ')}
                {_Taskbar(require('../../asset/ic/ic_usergroups.png'), 'KH quan tâm')}
                {_Taskbar(require('../../asset/ic/ic_mess.png'), 'Tin nhắn')}
                {_Taskbar(require('../../asset/ic/ic_bell.png'), 'Thông báo')}
                {_Taskbar(require('../../asset/ic/ic_user.png'), 'Người dùng')}
            </View>
        </SafeAreaView >
    )
};
_Taskbar = (img, label) => {
    return (
        <TouchableOpacity>
            <View style={styles.heart_Taskbar}>
                <Image style={styles.image_Taskbar} source={img} >
                </Image>
                <Text style={{
                    width: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    {label}
                </Text>
            </View>

        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    block_search: {
        flex: 0.07,
        flexDirection: 'row',
        backgroundColor: '#00BFFF',

    },
    img_search: {
        width: 13,
        height: 13,
        backgroundColor: '#00BFFF',
        marginLeft: 8,
    },
    txt_search: {
        fontSize: 10,
        color: 'white',
    },
    block_background: {
        flex: 1,
    },
    img_backgruond: {
        width: '100%',
        height: '100%',
        backgroundColor: 'green',
    },
    v_action_block: {
        flexDirection: 'row',
        margin: 10,
    },
    v_herader: {
        flexDirection: 'column',
        marginTop: 40,
        margin: 5,
    },
    txt_tmms: {
        color: 'white',
        fontSize: 20,
        marginLeft: 5,
    },
    txt_input: {
        height: 40,
        width: '70%',
        backgroundColor: 'white',
        borderRadius: 20,
        marginTop: 10,
        marginLeft: 2,
        justifyContent: 'center',
        alignItems: 'center',
        //textAlign: "right",
    },
    txt_dmsp: {
        marginLeft: 15,
        color: '#A9A9A9',
    },
    list_book: {
        height: 40,
        width: '29%',
        marginLeft: 4,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        marginTop: 10,
        borderRadius: 20,
        padding: 5,
    },
    login: {
        height: 40,
        width: '29%',
        margin: 150,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#00BFFF',
        marginTop: 10,
        borderRadius: 20,
        padding: 5,
    },
    img_list: {
        height: 16,
        width: 16,
    },
    txt_dktk: {
        color: 'white',
        marginTop: 5,
        marginLeft: 15,
    },
    heart_Taskbar: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        width: '100%',
        height: '100%',
        marginTop: 17,
        marginHorizontal: 6,
        flexDirection: 'column',
    },
    image_Taskbar: {
        width: 28,
        height: 28,
    },
})
