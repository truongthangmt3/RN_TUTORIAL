import React, { Component } from 'react';
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
// import FastImage from 'react-native-fast-image'
import axios from 'axios'
import Loading from '../Compoment/Loading'
import NavigationUtil from '../Navigation/NavigationUtil';
import { SCREEN_ROUTER } from '../utils/Constant';

export default class HomeScreen extends Component {
    state = {
        isLoading: true,
        isError: false,
        data: {},
    }
    componentDidMount = async () => {
        // gọi api và chờ dữ liệu trả về
        // Cách cổ điển
        // fetch('http://3.0.209.176/api/GetHome')
        //     .then((response) => response.json())
        //     .then(res => {
        //         alert(JSON.stringify(res))
        //     })

        //  Cách hiện đại từ es6 dùng async await (thay đổi hàm async mới dùng được )
        const response = await axios.get('http://3.0.209.176/api/GetHome')
        const jsonResponse = response.data;
        //alert(JSON.stringify(jsonResponse))
        //Tùy vào dữ liệu trả về mà set err hay d
        try {
            this.setState({
                isLoading: false,
                isError: false,
                data: jsonResponse.data
            })

        } catch (error) {
            this.setState({
                isLoading: false,
                isError: true,
                data: {}
            })
        }
    }
    render() {
        const { isLoading, isError, data } = this.state;
        if (isLoading) {
            return (
                <Loading>
                </Loading>
                // <View style={styles.container}>
                //     <ActivityIndicator
                //         color='red'
                //     ></ActivityIndicator>
                // </View>
            )
        } if (isError) {
            return (
                <View style={styles.container}>
                    <Text> Đã có lỗi xảy ra</Text>
                </View>
            )
        }

        return (
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
                    backgroundColor: '#e4e5ea',
                }}>Từ khóa tìm kiếm</Text>
                <View style={{
                    marginTop: 10,
                    height: 230,
                    flexWrap: 'wrap',
                    backgroundColor: 'white',
                    flexDirection: 'row',
                }}>
                    {this.state.data.listhotkey?.map((item, index) => {
                        return (
                            <TouchableOpacity onPress={() => {
                                NavigationUtil.navigate(SCREEN_ROUTER.LIST_POST)
                            }}>
                                <View
                                    key={index}
                                    style={{
                                        height: 35,
                                        padding: 10,
                                        backgroundColor: 'white',
                                        borderRadius: 5,
                                        margin: 5,
                                        boderRadius: 40,
                                        borderWidth: 0.5,
                                        justifyContent: 'center',
                                        alignItems: 'center',

                                    }}>
                                    <Text>
                                        #{item.name}
                                    </Text>
                                </View>
                            </TouchableOpacity>

                        )
                    })}
                </View>
                <View style={{
                    flexDirection: 'row',
                    backgroundColor: '#e4e5ea',
                }}>
                    <Text style={{
                        fontSize: 20,
                        marginLeft: 15,

                    }}>
                        Danh mục sản phẩm cần mua
                </Text>
                    <Text style={{
                        fontSize: 15,
                        marginLeft: 70,

                    }}>
                        Tất Cả
                </Text>
                </View>
                <SafeAreaView style={styles.container1}>
                    <FlatList
                        keyExtractor={(item, index) => index.toString()}
                        data={this.state.data.listpost}
                        renderItem={({ item, index }) => {
                            return (
                                <View style={{
                                    width: '100%',
                                    height: 100,
                                    marginTop: 5,
                                    flexDirection: 'row',
                                    backgroundColor: 'white'
                                }}>
                                    <View style={{
                                        marginLeft: 15,
                                        width: '50%',
                                        height: 100,

                                    }}>
                                        <Text style={{
                                            marginTop: 10
                                        }}>
                                            {item.namekey}
                                        </Text>
                                        <View style={{
                                            flexDirection: 'row',
                                            marginTop: 20
                                        }}>
                                            <View style={{
                                                flex: 0.01,
                                                width: 40,
                                                height: 40,
                                                borderRadius: 30,
                                                position: 'absolute',
                                                backgroundColor: 'aqua',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                            }}>
                                                <Text>
                                                    NV
                                                </Text>
                                            </View>
                                            <View style={{
                                                flexDirection: 'column',
                                                marginLeft: 60
                                            }}>
                                                <Text>
                                                    {item.username}
                                                </Text>
                                                <Text>
                                                    {item.phone}
                                                </Text>
                                            </View>

                                        </View>
                                    </View>
                                    <View style={{
                                        width: '50%',
                                        height: 100,
                                    }}>
                                        <View style={{
                                            flexDirection: 'row',
                                            marginLeft: 110,
                                            marginTop: 55
                                        }}>
                                            <Image source={require('../../asset/ic/ic_marker.png')}
                                                style={{
                                                    height: 14,
                                                    width: 14,
                                                    resizeMode: 'contain'
                                                }}>

                                            </Image>
                                            <Text>
                                                {item.address}
                                            </Text>
                                        </View>
                                        <View style={{
                                            flexDirection: 'row',
                                            marginLeft: 50
                                        }}>
                                            <Image source={require('../../asset/ic/ic_oclock.png')}
                                                style={{
                                                    marginTop: 2,
                                                    height: 18,
                                                    width: 18,
                                                    resizeMode: 'contain'
                                                }}>

                                            </Image>
                                            <Text>
                                                {item.created_date}
                                            </Text>
                                        </View>
                                    </View>

                                </View>
                            )
                        }}>
                    </FlatList>
                </SafeAreaView>
                {/* <View style={{
                    flex: 0.3,
                    flexDirection: 'row',
                    borderTopWidth: 0.5
                }}>
                    {_Taskbar(require('../../asset/ic/ic_home.png'), 'Trang chủ')}
                    {_Taskbar(require('../../asset/ic/ic_usergroups.png'), 'KH quan tâm')}
                    {_Taskbar(require('../../asset/ic/ic_mess.png'), 'Tin nhắn')}
                    {_Taskbar(require('../../asset/ic/ic_bell.png'), 'Thông báo')}
                    {_Taskbar(require('../../asset/ic/ic_user.png'), 'Người dùng')}
                </View> */}
            </SafeAreaView >
        )
    }
}
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
    container1: {
        flex: 1,
        backgroundColor: '#e4e5ea',
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
        marginTop: 10,
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
