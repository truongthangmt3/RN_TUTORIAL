import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    Image,
    SafeAreaView,
    TouchableOpacity,
    ImageBackground,
    TextInput
} from 'react-native';
import { requestHomeData } from '@api'
import reactotron from 'reactotron-react-native';
import Loading from '@component/Loading'
import { SCREEN_ROUTER } from '@constant'
import R from '@R'




export default class CareScreen extends Component {
    state = {
        isLoading: true,
        isError: false,
        data: {},
    }

    componentDidMount = async () => {
        try {
            const response = await requestHomeData()
            // response.log("API",response)
            const jsonResponse = response.data
            //response.log("API", jsonResponse)

            this.setState({
                isLoading: false,
                isError: false,
                data: jsonResponse
            }, () => {
                //reactotron.log("API", jsonResponse)
            })
        } catch (error) {
            reactotron.log(error)
            this.setState({
                isLoading: false,
                isError: true,
                data: {}
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
                            source={require = (R.images.ic_backk)}
                        />
                    </View>

                </View>
                <View style={styles.body}>
                    <FlatList
                        data={data.listpost}
                        renderItem={({ item, index }) => {
                            return (
                                <CustomItem item={item} index={index} />
                            )
                        }}
                    />
                </View>
            </SafeAreaView>
        )
    }
}

class CustomItem extends Component {
    render() {
        const { namekey, phone, username, address } = this.props.item;
        return (
            <View style={styles.fl_item}>
                <View style={styles.information}>
                    <View style={styles.info_title}>
                        <Text
                            style={{
                                color: '#111111',
                                fontSize: 16,
                                fontFamily: R.fonts.roboto_bold
                            }}
                        >{namekey}</Text>
                    </View>
                    <View style={styles.info_location}>
                        <View style={styles.phone}>
                            <Image source={R.images.ic_phone_red} />
                            <Text
                                style={{ marginLeft: 8 }}
                            >{phone}</Text>
                        </View>
                        <View style={styles.address}>
                            <Image source={R.images.ic_location} />

                            <Text>{address}</Text>
                        </View>
                    </View>

                    <View style={styles.ic_name}>
                        <Image source={R.images.Ic_metro_user} />

                        <Text>{username}</Text>
                    </View>
                </View>

                <View style={styles.contacts}>
                    <View style={styles.c_message}>
                        <Image source={R.images.ic_messeg} />
                        <Text style={styles.txt_mzp}>Message</Text>
                    </View>
                    <View style={styles.c_zalo}>
                        <Image source={R.images.ic_zalo} />
                        <Text style={styles.txt_mzp}>Zalo</Text>

                    </View>
                    <View style={styles.c_telephone}>
                        <Image source={R.images.ic_phone} />
                        <Text style={styles.txt_mzp}>Phone</Text>

                    </View>

                </View>
            </View>
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

    body: {
        flex: 9,

    },
    fl_item: {

        width: '100%',
        height: 161,
        flexDirection: 'column',
        backgroundColor: '#FFFFFF',
        marginTop: 10,


    },
    information: {
        flex: 2,
        paddingHorizontal: 25,
        // backgroundColor: 'blue',
    },
    info_title: {
        flex: 1,
        // backgroundColor: 'red'
    },
    info_location: {
        flex: 0.5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    phone: {
        flexDirection: 'row',
    },
    address: {
        flexDirection: 'row',
    },
    ic_name: {
        flex: 0.5,
        // backgroundColor: 'yellow',


        flexDirection: 'row'
    },
    contacts: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,


    },
    c_message: {
        flex: 1,
        // backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center'
    },
    c_zalo: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'

    },
    c_telephone: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
    ,
    txt_mzp: {
        color: '#69AAFF'
    }

})
