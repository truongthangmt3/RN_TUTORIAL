import React, { Component } from 'react'
import {
    Text,
    View,
    SafeAreaView,
    StyleSheet,
    ActivityIndicator,
    FlatList,
    Image,
    TouchableOpacity
} from 'react-native'
import mockData from '../../mockData.json'



export default class HomeScreen extends Component {
    state = {
        isLoading: true,
        isError: false,
        data: {},
    }
    componentDidMount() {

        setTimeout(() => {
            this.setState({
                isLoading: false,
                isError: false,
                data: mockData.homeData.data,
            })
        }, 100)

    }


    render() {
        const { isLoading, isError, data } = this.state
        if (isLoading) {
            return (
                <View style={styles.container} >
                    {<ActivityIndicator color='pink' />}
                </View>
            );
        }

        if (isError) {
            return (
                <View style={styles.container}>
                    <Text>da co loi</Text>
                </View>
            );
        }

        return (
            <SafeAreaView
                style={styles.container} >
                <View style={styles.title}>
                    <View style={styles.titleDM}>
                        <Text style={{ fontSize: 20 }}>Danh Mục Sản Phẩm </Text>
                    </View>

                    <TouchableOpacity
                        onPress={() => { }}
                        style={styles.titleAll}>
                        <Text style={{ fontSize: 16, color: 'blue' }}>Tất Cả</Text>
                    </TouchableOpacity>

                </View>
                <View style={styles.list_post}>
                    <FlatList

                        data={data.listpost}
                        renderItem={({ item, index }) => {

                            return (

                                <RenDerItem item={item} index={index} />
                            );
                        }}

                    />
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
                    <Text style={{ fontSize: 20, }}>{namekey}</Text>
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
                                style={{ marginRight: 3, }}
                            />
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
    container: {
        flex: 1,
        backgroundColor: '#D3D3D3',
        // alignItems: 'center',
        // justifyContent: 'center'
    },



    title: {
        flex: 0.5,
        flexDirection: 'row',
        alignItems: 'center',



    },
    titleDM: {
        flex: 1,
        paddingHorizontal: 10
    },
    titleAll: {
        paddingRight: 10,
    },

    list_post: {
        flex: 9.6,

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
        //backgroundColor: 'red',
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
