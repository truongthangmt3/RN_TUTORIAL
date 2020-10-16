import React, { Component } from 'react'
import {
    Text,
    StyleSheet,
    View,
    SafeAreaView,
    FlatList,
    Image
} from 'react-native'
import axios from 'axios'
import img from '../../assest/image.js'

export default class CareScreen extends Component {
    state = {
        isLoading: true,
        isError: false,
        data: {},
    }

    componentDidMount = async () => {
        try {
            const response = await axios.get('http://3.0.209.176/api/GetHome');
            const jsonResponse = response.data;
            this.setState({
                isLoading: false,
                isError: false,
                data: jsonResponse.data
            })
        } catch (error) {
            this.setState({
                isLoading: true,
                isError: true,
                data: {},
            })
        }

    }
    render() {
        const { isLoading, isError, data } = this.state
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.hd_title}>
                        <Text >Khách Hàng Quan Tâm</Text>

                    </View>
                    <View style={styles.hd_icon}>
                        <Image
                            source={require = (img.ic_back)}
                        />
                    </View>

                </View>
                <View style={styles.body}>
                    <FlatList
                        data={data.listpost}
                        renderItem={({ item, index }) => {
                            return (
                                <View style={styles.fl_item}>
                                    <View style={styles.fl_title}>
                                        <Text>{item.namekey}</Text>
                                    </View>
                                    <View style={styles.fl_information}>
                                        <View style={styles.fl_ifo_phone}>
                                            <Image
                                                source={require = (img.ic_bell)} />
                                            <Text
                                                style={{ marginLeft: 8 }}
                                            >{item.phone}</Text>
                                        </View>
                                        <View style={styles.fl_ifo_address}>
                                            <Image
                                                source={require = (img.ic_bell)} />
                                            <Text
                                                style={{ marginLeft: 8 }}
                                            >{item.phone}</Text>
                                        </View>
                                    </View>

                                    <View style={styles.fl_name}>
                                        <Image
                                            source={require = (img.ic_bell)} />
                                        <Text
                                            style={{ marginLeft: 8 }}
                                        >{item.phone}</Text>
                                    </View>

                                    <View style={styles.fl_icon}>

                                        <View style={styles.fl_ic_chat}>
                                            <View style={styles.fl_ic}>
                                                <Image
                                                    style={{
                                                        width: 22,
                                                        height: 20,
                                                        marginBottom: 6
                                                    }}
                                                    source={require = (img.ic_bell)} />
                                                <Text>chat</Text>
                                            </View>
                                        </View>

                                        <View style={styles.fl_ic_zalo}>
                                            <View style={styles.fl_ic}>
                                                <Image
                                                    style={{
                                                        width: 22,
                                                        height: 20,
                                                        marginBottom: 6
                                                    }}
                                                    source={require = (img.ic_bell)} />
                                                <Text>chat</Text>
                                            </View>
                                        </View>
                                        <View style={styles.fl_ic_tele}>
                                            <View style={styles.fl_ic}>
                                                <Image
                                                    style={{
                                                        width: 22,
                                                        height: 20,
                                                        marginBottom: 6
                                                    }}
                                                    source={require = (img.ic_bell)} />
                                                <Text>chat</Text>
                                            </View>
                                        </View>
                                    </View>
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
    //container 
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#F5F6F8'
    },


    //header

    header: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 14,
        backgroundColor: 'red'

    },
    hd_title: {
        flex: 1
    },
    hd_icon: {

    },

    //body
    body: {
        flex: 9,
    },
    fl_item: {
        flex: 1,
        marginTop: 15,
        // backgroundColor: 'blue'
    },
    //flatlist
    fl_title: {
        width: 324,
        height: 42,
        paddingTop: 9,
        paddingHorizontal: 25

    },
    fl_information: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        paddingTop: 9,
        paddingHorizontal: 25,

    },
    fl_ifo_phone: {
        flex: 1,
        // backgroundColor: 'pink',
        flexDirection: 'row',
    },
    fl_ifo_address: {
        flex: 1,
        justifyContent: 'flex-end',
        flexDirection: 'row',
    },

    fl_name: {
        width: '100%',
        height: 18,
        paddingHorizontal: 26,
        flexDirection: 'row',
        marginTop: 9,

    },

    fl_icon: {
        width: '100%',
        height: 50,
        flexDirection: 'row',
        marginTop: 9,
        // backgroundColor: 'pink',

    },
    fl_ic: {
        width: 48,
        height: 40,
        alignItems: 'center',
        // backgroundColor: 'red'
    },
    fl_ic_chat: {
        width: '33%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },

    fl_ic_zalo: {
        width: '33%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',


    },
    fl_ic_tele: {
        width: '33%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center'

    }
})
