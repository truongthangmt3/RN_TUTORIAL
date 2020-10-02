import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';


//yarn li tao anh 
export default class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
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
