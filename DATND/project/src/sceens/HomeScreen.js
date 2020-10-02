import React, { Component } from 'react'
import { } from "react";
import {
    Text,
    View,
    SafeAreaView,
    StyleSheet,
    ActivityIndicator,
    FlatList,
    Image,
    TouchableOpacity,
    SearchBar,
    ImageBackground,
    Picker,
    TouchableWithoutFeedback

} from 'react-native';
import mockData from '../../mockData.json';
import axios from 'axios';
import Loading from '../components/Loading';
import { TextInput } from 'react-native-gesture-handler';
import AppCopy from '../../AppCopy';
import img from '../../assest/image.js'
import NavigationUtil from '../navigation/NavigationUtil'
import { SCREEN_ROUTE } from '../Util/Costan'



export default class HomeScreen extends Component {

    state = {
        isLoading: true,
        isError: false,
        // data: mockData.homeData.data,
        data: {},
    }
    componentDidMount = async () => {

        //lấy api  và chờ dữ liệu trả về  
        //cách cổ điển
        // fetch('http://3.0.209.176/api/GetHome')
        //     .then((response) => response.json())
        //     .then(res => {
        //         alert(JSON.stringify(res))
        //     })


        //cách hiện đại dùng async await(thay  doi ham thành async mới dung dk )
        //khi nào hàm trả về cái j thì dùng promise hoặc .then



        // try {
        //     const response = await fetch('http://3.0.209.176/api/GetHome');
        //     const jsonResponse = await response.json();
        //     this.setState({
        //         isLoading: false,
        //         isError: false,
        //         data: jsonResponse.data
        //     })
        // } catch (error) {

        //     this.setState({
        //         isLoading: false,
        //         isError: true,
        //         data: {},
        //     })

        // }


        //Dung Aixos
        try {
            const response = await axios.get('http://3.0.209.176/api/GetHome');
            const jsonResponse = response.data
            this.setState({
                isLoading: false,
                isError: false,
                data: jsonResponse.data
            })
        } catch (error) {
            // alert(JSON.stringify(error))
            this.setState({
                isLoading: true,
                isError: true,
                data: {},
            })

        }
        // setTimeout(() => {
        //     this.setState({
        //         isLoading: false,
        //         isError: false,
        //         data: mockData.homeData.data,
        //     })
        // }, 100)

    }

    render() {
        const { isLoading, isError, data } = this.state



        if (isLoading) {
            return (
                // <View style={styles.isLoad} >
                //     {<ActivityIndicator color='pink' />}
                // </View>
                <Loading />
            );
        }

        if (isError) {
            return (
                <View style={styles.isLoad}>
                    <Text>da co loi</Text>
                </View>
            );
        }
        return (
            <SafeAreaView
                style={styles.container} >
                <View style={styles.list_post}>
                    <FlatList
                        data={data.listpost}
                        renderItem={({ item, index }) => {
                            return (
                                <RenDerItem item={item} index={index} />
                            );
                        }}
                        ListHeaderComponent={() => {
                            return (
                                <View style={{ flex: 1 }}>
                                    <View style={{ width: '100%' }}>
                                        <ImageBackground
                                            style={{
                                                width: '100%',
                                                height: 172
                                            }} source={img.bg_header}>
                                            <View style={{ flex: 1, justifyContent: 'center', paddingLeft: 8 }}><Text style={{ fontSize: 20, color: '#FFFFFF' }}>Tôi Muốn Mua Lẻ</Text></View>
                                            <View style={{ flex: 1, marginHorizontal: 8, flexDirection: 'row' }}>
                                                <TextInput
                                                    style={{ flex: 2, backgroundColor: '#ffff', opacity: 0.8, borderRadius: 30, marginRight: 4, paddingLeft: 8 }}
                                                    placeholder="Type here to translate!"
                                                //  onChangeText={text => setText(text)}
                                                //defaultValue={text}

                                                />
                                                <View style={{ flex: 1, backgroundColor: '#ffff', opacity: 0.8, borderRadius: 30 }}></View>
                                            </View>
                                            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                                                <Text numberOfLines={2} style={{ color: '#FFFFFF' }}>Để tìm kiếm khách hàng được tốt nhất bạn nên đăng kí đúng danh mục!</Text>
                                            </View>
                                            <View
                                                style={{
                                                    flex: 1,
                                                    alignItems: 'center',
                                                    paddingBottom: 10,
                                                }}>
                                                <TouchableOpacity
                                                    style={{
                                                        width: 115,
                                                        height: 36,
                                                        backgroundColor: '#69AAFF',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        borderRadius: 30
                                                    }}
                                                    onPress={() => {
                                                        NavigationUtil.navigate(SCREEN_ROUTE.LISTPOST)
                                                    }}>
                                                    <Text style={{ color: '#ffff' }}>Đăng tin</Text>
                                                </TouchableOpacity>
                                            </View>
                                        </ImageBackground>

                                    </View>
                                    <View style={styles.txt_search}>
                                        <Text >Từ khóa tìm kiếm</Text>
                                    </View>
                                    <View style={styles.vContentKeySearch}>
                                        {this.state.data.listhotkey.map((item, index) => {
                                            return (

                                                <Text
                                                    style={{
                                                        padding: 5,
                                                        borderColor: 'gray',
                                                        borderWidth: 1,
                                                        margin: 2,
                                                        borderRadius: 15

                                                    }}
                                                    key={item.name}>{item.name}</Text>
                                            )
                                        })}

                                    </View>
                                    <View style={styles.txt_search}>
                                        <Text> Danh mục cần mua</Text>
                                    </View>
                                </View>

                            )
                        }}

                        ListFooterComponent={() => {
                            return (<Text></Text>)
                        }} />
                </View>

            </SafeAreaView>
        );

    }
}



class RenDerItem extends Component {
    render() {
        const { namekey, username, phone, address, created_date } = this.props.item
        return (

            <View style={styles.list_item} >
                <View style={styles.item_name}>
                    <Text style={{ fontSize: 20, }}>
                        {namekey}
                    </Text>
                </View>

                <View style={styles.item_information}>

                    <View style={styles.item_inforname}>
                        <Text>VN</Text>
                    </View>

                    <View style={styles.item_infoplan}>
                        <View style={styles.item_infoplanName}>
                            <Text >{username}</Text>
                        </View>

                        <View style={styles.item_infoplanPhone}>
                            <Text >{phone}</Text>
                        </View>
                    </View>

                    <View style={styles.item_infoaddress}>
                        <View style={styles.item_infolocation}>
                            <Image
                                source={require('../../assest/ic_location.png')}
                                style={{ marginRight: 3, }} />
                            <Text style={styles.item_infoaddressName}>{address}</Text>
                        </View>

                        <View style={styles.item_infodate}>
                            <Image
                                source={require('../../assest/ic-clock.png')}
                                style={{ marginRight: 5, }} />
                            <Text numberOfLines={1}>{created_date}</Text>
                        </View>
                    </View>
                </View>
            </View>

        );
    }
}
const styles = StyleSheet.create({

    vContentKeySearch: {
        flexWrap: "wrap",
        padding: 5,
        flexDirection: "row",
        width: '100%',
        backgroundColor: "white"
    },

    isLoad: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    container: {
        flex: 1,
        backgroundColor: '#F5F6F8',
    },
    list_header: {
        flex: 1,


    },
    img_bg: {
        width: '100%',
        height: 176,
    },
    txt_search: {

        width: '100%',
        height: 30,
        paddingLeft: 11,
        paddingTop: 3,
        justifyContent: 'center',
    },

    fl_keywords: {
        width: '100%',
        height: 132,
        backgroundColor: 'pink'
    },

    text_product: {
        width: '100%',
        height: 50,
        backgroundColor: 'white'
    },

    list_post: {
        flex: 1,

        flexDirection: 'column'

    },

    list_item: {
        width: '100%',
        height: 100,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        marginTop: 10,
    },
    item_name: {

        width: '100%',
        height: 30,
        paddingLeft: 10,


    },
    item_information: {
        width: '100%',
        height: 50,
        paddingLeft: 10,
        flexDirection: 'row',
    },
    item_inforname: {
        flex: 0.8,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'pink'
    },
    item_infoplan: {
        flex: 3,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        paddingHorizontal: 10

    },

    item_infoplanName: {
        flex: 1,
        justifyContent: 'center',
    },
    item_infoplanPhone: {
        flex: 1,
        justifyContent: 'center',
    },
    item_infoaddress: {
        flex: 2,
        marginRight: 10,
        flexDirection: 'column',
        paddingLeft: 20,

    },
    item_infolocation: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        flexDirection: 'row',
    },
    item_infodate: {
        flex: 1,
        // justifyContent: 'flex-end',
        alignItems: 'center',
        flexDirection: 'row',

    }



})
