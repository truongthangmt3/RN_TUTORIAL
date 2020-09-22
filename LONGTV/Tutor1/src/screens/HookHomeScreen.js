import React, { Component, useState, useEffect } from 'react'
import { View, Text, SafeAreaView, StyleSheet, ActivityIndicator, FlatList, Image, ImageBackground, TextInput } from 'react-native'
import Loading from '../component/Loading.tsx'
import CustomScreen from '../component/CustomScreen.js';
import axios from 'axios';

export default HookHomeScreen = () => {

    const [isLoading, setLoading] = useState(true)
    const [isError, setError] = useState(false)
    const [data, setData] = useState({})

    useEffect(() => {
        getData()
    }, [])


    getData = async () => {
        try {
            const response = await axios.get('http://3.0.209.176/api/GetHome');
            const jsonResponse = response.data
            setData(jsonResponse.data)
            setLoading(false)
            setError(false)

            // this.setState({
            //     isLoading: false,
            //     isError: false,
            //     data: jsonResponse.data
            // })
        } catch (error) {
            //alert(JSON.stringify(error))
            setLoading(false)
            setError(true)
            setData({})
        }
    }

    if (isLoading) {
        return (
            <Loading />
        );
    } else if (isError) {
        return (
            <View style={styles.title}>
                <Text>Đã có lỗi xảy ra</Text>
            </View>
        );
    } return (
        <SafeAreaView style={styles.container}>
            <View>
                <ImageBackground
                    source={require('../../assets/ImgBackground.jpg')}
                    style={{ width: 425, height: 172 }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Tôi muốn mua sỉ</Text>
                    <View style={styles.v_row}>
                        <TextInput style={styles.v_listsp}
                            placeholder={' Danh mục sản phẩm'} >
                        </TextInput>
                        <View style={styles.v_location}>
                            <Text style={styles.txt_location}>Toàn quốc</Text>
                            <Image
                                resizeMethod='contain'
                                source={require('../../assets/ic_arrow_down.png')}
                                style={{ width: 11.53, height: 6.65, marginRight: 6.2 }} />
                        </View>
                    </View>
                    <Text style={styles.txt}>
                        Để tìm kiếm khách hàng được tốt nhất bạn nên đăng ký đúng danh mục sản phẩm !
                        </Text>
                    <View style={{ alignItems: 'center', flex: 1 }}>
                        <View style={styles.v_button}>
                            <Text style={styles.txt_button}>Đăng tin</Text>
                        </View>
                    </View>
                </ImageBackground>
            </View>
            <View style={styles.title}><Text style={styles.text_title}>Từ khóa tìm kiếm</Text></View>
            <FlatList
                style={styles.text_key}
                numColumns={data.listpost.length / 4}
                data={data.listpost}
                renderItem={({ item, index }) => {
                    return (
                        <Text>{item.namekey}</Text>
                    )
                }}
            />
            <View style={styles.title}>
                <Text style={styles.text_title}>Danh mục sản phảm cần mua </Text>
                <Text style={styles.text_title_2}>Tất cả </Text>
            </View>
            <FlatList style={styles.list_post}
                data={data.listpost}
                renderItem={({ item, index }) => {
                    return (
                        <View style={styles.body}>
                            <CustomScreen
                                Namekey={item.namekey}
                                Username={item.username}
                                img={require('../../assets/ic_location.png')}
                                Province={item.province}
                                Phone={item.phone}
                                ImgTime={require('../../assets/ic_time.png')}
                                Modified_date={item.modified_date}
                            />
                        </View>
                    );
                }}
            />

        </SafeAreaView>
    )

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#F2F2F2',
        },
        list_post: {
            flex: 1,

        },
        title: {
            height: 40,
            backgroundColor: '#F2F2F2',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
        },
        text_title: {
            flex: 1,
            fontSize: 20,
            marginHorizontal: 8
        },
        text_title_2: {
            fontSize: 18,
            color: '#2ECCFA',
        },


        body: {
            marginTop: 10,
            height: 100,
            backgroundColor: 'white',
            flexDirection: 'column'

        },
        body_2: {
            height: 30,
            backgroundColor: '#64FE2E'
        },

        text_body: {
            fontSize: 18
        },
        body_3: {
            height: 70,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center'
        },
        boder_img: {
            width: 60,
            height: 60,
            backgroundColor: '#81DAF5',
            borderRadius: 30,
            justifyContent: 'center',
            alignItems: 'center'
        },
        information: {
            height: 60,
            flex: 1,
            flexDirection: 'column',
            marginLeft: 5
        },
        top: {
            flexDirection: 'row',

        },
        Top_information: {
            backgroundColor: '#D8D8D8',
            height: 30,
            flex: 1
        },
        left: {
            flexDirection: 'row',
        },
        Bottom_information: {
            height: 30,
            backgroundColor: 'yellow',
            flex: 1
        },
        left_top: {
            height: 30,
            width: 100,
            backgroundColor: '#DF01D7',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',

        },
        left_bottom: {
            height: 30,
            width: 180,
            backgroundColor: '#81F7F3',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center'
        },
        img_location: {
            height: 20,
            width: 20
        },
        img_time: {
            height: 16,
            width: 16,
            marginRight: 5
        },
        ImageBackground: {
            height: 200,
            width: 450,
            alignItems: "flex-start"
        },
        Text: {
            fontSize: 18,
            fontWeight: 'bold',
            flexDirection: 'row'
        },
        v_row: {
            marginHorizontal: 3,
            marginTop: 8,
            flexDirection: 'row'
        },
        v_listsp: {
            backgroundColor: '#DFDFDE',
            borderRadius: 17,
            flex: 1,
            marginRight: 4
        },
        v_location: {
            backgroundColor: '#DFDFDE',
            borderRadius: 17,
            width: 91,
            flexDirection: 'row',
            alignItems: 'center'
        },
        txt_location: {
            marginVertical: 10,
            marginLeft: 6,
            color: '#2A2A2A',
            fontSize: 13,
            flex: 1,
        },
        txt: {
            marginTop: 6,
            marginHorizontal: 15,
            fontSize: 12,
            color: 'black'
        },
        v_button: {
            marginTop: 6, width: 115,
            backgroundColor: '#69AAFF',
            alignItems: 'center',
            borderRadius: 15,
            marginBottom: 13
        },
        txt_button: {
            marginVertical: 8,
            color: 'white',
            fontSize: 16,
            fontWeight: '400'
        },
        text_key: {
            fontSize: 30,
            backgroundColor: 'white',
        }
    })
}