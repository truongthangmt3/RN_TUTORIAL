import React, { Component } from 'react';
import { View, Text, SafeAreaView, StyleSheet, ActivityIndicator, FlatList, Image, ImageBackground, TextInput, TouchableOpacity } from 'react-native';
import CustomScreen from '../component/CustomScreen';
import mockData from '../mockData.json';
import axios from 'axios';
import Loading from '../component/Loading';

import NavigationUtil from '../navigation/NavigationUtil';
import { SCREEN_ROUTER } from '../utils/Constant';
export default class HomeScreen extends Component {
    state = {
        isLoading: true,
        isError: false,
        data: {},
    }
    componentDidMount = async () => {

        try {
            const response = await axios.get('http://3.0.209.176/api/GetHome');
            const jsonResponse = response.data
            // alert(JSON.stringify(jsonResponse))
            this.setState({
                isLoading: false,
                isError: false,
                data: jsonResponse.data
            })
        } catch (error) {
            setTimeout(() => {
                this.setState({
                    isLoading: false,
                    isError: true,
                    data: {}
                })
            }, 5000)
        }



    }
    render() {
        const { isLoading, isError, data } = this.state
        if (isLoading) {
            return (
                <Loading />
            );

        }
        if (isError) {
            return (
                <View style={styles.title}>
                    <Text>Đã có lỗi xảy ra</Text>
                </View>
            );
        }
        return (
            <SafeAreaView style={styles.container}>






                <FlatList style={styles.list_post}
                    data={this.state.data.listpost}
                    renderItem={({ item, index }) => {
                        return (
                            <View style={styles.body}>
                                <CustomScreen
                                    Namekey={item.namekey}
                                    Username={item.username}
                                    img={require('../assets/ic_location.png')}
                                    Province={item.province}
                                    Phone={item.phone}
                                    ImgTime={require('../assets/ic_time.png')}
                                    Modified_date={item.modified_date}
                                />
                            </View>
                        );
                    }}
                    ListHeaderComponent={() => {

                        return (

                            <View >
                                <ImageBackground source={require('../assets/ic_Group873.png')} style={styles.img_herder} >
                                    <Text style={styles.text_herder}>Tôi muốn mua sỉ</Text>
                                    <View style={styles.input}>
                                        <View style={styles.input_nav}>
                                            <TextInput
                                                style={styles.text_input}
                                                placeholder="Danh mục sản phẩm">

                                            </TextInput>
                                        </View>
                                        <View style={styles.input_aside}>
                                            <View>
                                                <Text style={styles.text_aside}> Toàn quốc</Text>
                                            </View>
                                            <View style={styles.img_aside_all}>
                                                <Image
                                                    style={styles.img_aside}
                                                    source={require('../assets/ic_dow.png')}
                                                />
                                            </View>
                                        </View>
                                    </View>
                                    <View style={styles.suggestions}>
                                        <Text style={{ color: '#fff' }} >Để tìm kiếm khách hàng được tốt nhất bạn nên đăng ký đúng danh mục sản phẩm! </Text>
                                    </View>

                                    <TouchableOpacity
                                        onPress={() => {
                                            NavigationUtil.navigate(SCREEN_ROUTER.USER);
                                        }}>
                                        <View style={styles.post}>
                                            <View style={styles.btn_post}>
                                                <Text style={{ color: '#fff', fontSize: 19, fontWeight: '500' }}>Đăng tin</Text>
                                            </View>
                                        </View>

                                    </TouchableOpacity>
                                </ImageBackground>
                                <View style={{ backgroundColor: 'F2F2F2', height: 50, justifyContent: 'center' }}>
                                    <Text style={{ color: 'black', fontSize: 18, fontWeight: '500', marginLeft: 15 }}> Từ khoá tìm kiếm</Text>
                                </View>

                                <View style={{ height: 200, backgroundColor: '#fff' }}>
                                    <View style={styles.search}>
                                        {this.state.data.listhotkey.map((item, index) => {
                                            return (
                                                <Text style={{
                                                    marginTop: 5,
                                                    padding: 5,
                                                    borderColor: 'gray',
                                                    borderWidth: 1,
                                                    margin: 2,
                                                    borderRadius: 15
                                                }}
                                                    key={item.name}>{item.name}</Text>
                                            );
                                        })}

                                    </View>
                                </View>


                                <View style={styles.title}>
                                    <Text style={styles.text_title}>Danh mục sản phảm cần mua </Text>
                                    <Text style={styles.text_title_2}>Tất cả </Text>
                                </View>

                            </View>
                        );

                    }}
                />
            </SafeAreaView>
        )
    }
}
const styles = StyleSheet.create({
    search: {
        height: 200,
        marginTop: 5,
        flexWrap: "wrap",
        flexDirection: "row",
        width: '100%',
    },
    container: {
        flex: 1,
        backgroundColor: '#F2F2F2',
    },
    list_post: {
        flex: 1,

    },
    img_herder: {
        height: 200,
        width: '100%'
    },

    text_herder: {
        marginTop: 15,
        marginLeft: 13,
        color: '#fff',
        fontSize: 20
    },
    input: {
        height: 40,
        flexDirection: 'row',
        marginTop: 10,
    },
    input_nav: {
        marginHorizontal: 5,
        borderRadius: 20,
        backgroundColor: '#fff',
        height: 40,
        flex: 1,

    },
    text_input: {
        marginTop: 10,
        marginLeft: 5
    },
    input_aside: {
        backgroundColor: '#fff',
        marginRight: 5,
        height: 40,
        width: 100,
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text_aside: {


    },
    img_aside_all: {
        height: 20,
        width: 20,
        marginLeft: 3,
        alignItems: 'center',
        justifyContent: 'center'
    },
    img_aside: {
        height: 8,
        width: 13,
    },
    suggestions: {
        marginTop: 10,
        marginHorizontal: 15,
        fontSize: 13,
    },
    post: {
        marginTop: 14,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btn_post: {
        backgroundColor: '#69AAFF',
        height: 45,
        width: 130,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
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
        // backgroundColor: 'blue',
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
    // left_information: {
    //     height: 60,
    //     width: 180,
    //     backgroundColor: 'blue',
    //     flexDirection: 'column'
    // },
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
    }
})