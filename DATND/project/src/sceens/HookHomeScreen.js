import React, { Component, useState, useEffect } from 'react'

import {
    Text,
    View,
    StyleSheet,
    SafeAreaView,
    FlatList, Image
} from 'react-native';
import Loading from '../components/Loading';
import axios from 'axios'


export default HookHomeScreen = () => {
    const [isLoading, setLoading] = useState(true);
    const [isError, setError] = useState(false);
    const [data, setData] = useState({});

    useEffect(() => {
        getData();

    }, [])

    getData = async () => {
        try {
            const response = await axios.get('http://3.0.209.176/api/GetHome');
            const jsonResponse = response.data
            alert(JSON.stringify(jsonResponse.data))
            setData(jsonResponse.data)
            setLoading(false);
            setError(false);

        } catch (error) {
            setLoading(false);
            setError(true);
            setData({})
            alert(JSON.stringify(error))


        }

    }

    // if (isLoading) {
    //     return <Loading />

    // } else 
    // if (isError) {
    //     return (
    //         <View style={styles.isLoad}>
    //             <Text>da co loi</Text>
    //         </View>
    //     );
    // } else {
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
                // ListHeaderComponent={() => {
                //     return (
                //         <HeaderView />
                //     );
                // }}

                // ListFooterComponent={() => {
                //     return (<Text>he</Text>)
                // }}

                />
            </View>

        </SafeAreaView>

    );
}

// }
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

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    isLoad: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
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
