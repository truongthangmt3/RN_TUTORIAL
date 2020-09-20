import React, { Component } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Image,
    View,
    Text,
    TouchableOpacity,
    ScrollView,
} from 'react-native';

export default class CustomButton extends Component {


    render() {
        const { img, label, isWarning, action } = this.props;
        return (
            <TouchableOpacity
                onPress={() => {
                    action();
                }}>
                <View style={styles.action_block}>
                    <Image style={styles.img_header} source={img} />
                    <Text style={styles.text_hearder}>{label}</Text>
                    {isWarning ? <View style={styles.warning}>
                        <Text style={styles.notification}>!</Text>
                    </View> : null}
                </View>

            </TouchableOpacity>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',

    },
    title: {
        backgroundColor: 'white',
        flexDirection: 'row',
        marginHorizontal: 20,

    },
    dating: {
        flex: 1,
        fontSize: 25,
        fontWeight: 'bold',
    },
    title_boder: {
        height: 30,
        width: 30,
        backgroundColor: '#e4e5ea',
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',

    },
    img_setting: {
        height: 20,
        width: 20,

    },
    img_header: {
        height: 18,
        width: 18,
        marginLeft: 3,
    },
    hearder: {
        margin: 5,
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'flex-start',

    },
    text_hearder: {
        marginLeft: 5,
        fontWeight: 'bold',
        fontSize: 15,
    },
    action_block: {
        marginLeft: 10,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#e4e5ea',
        borderRadius: 20,
        padding: 5,
    },
    warning: {
        // position: 'absolute',
        backgroundColor: 'red',
        width: 18,
        height: 18,
        right: -11,
        top: -11,
        borderRadius: 9,
        alignItems: 'center',
        justifyContent: 'center',
    },
    notification: {
        color: 'white',
        fontSize: 12,
    },
    body: {
        marginHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        marginTop: 15,
        marginBottom: 15,
        borderRadius: 15,
        backgroundColor: '#ffffff',
        shadowColor: '#000',
        shadowOffset: {
            width: 1,
            height: 5,
        },
        shadowOpacity: 0.5,
        shadowRadius: 3.84,
        elevation: 5,
    },
    img_gai: {
        resizeMode: 'cover',
        width: 393,
        height: 350,
    },


    icon: {
        flexDirection: 'row',
        position: 'absolute',
        left: 230,
        top: 345,
        height: 70,
        width: 160,
    },
    icon_like: {
        height: 65,
        width: 65,
        marginLeft: 10,
        backgroundColor: '#A901DB',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 32.5,
        backgroundColor: '#AC58FA',
        shadowColor: '#000',
        shadowOffset: {
            width: 1,
            height: 5,
        },
        shadowOpacity: 0.3,
        shadowRadius: 3.84,
        elevation: 5,
    },
    icon_dis: {
        height: 65,
        width: 65,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 32.5,
        backgroundColor: '#ffffff',
        shadowColor: '#000',
        shadowOffset: {
            width: 1,
            height: 5,
        },
        shadowOpacity: 0.3,
        shadowRadius: 3.84,
        elevation: 5,
    },
    img_like: {
        height: 30,
        width: 30,
    },
    img_dis: {
        height: 30,
        width: 30,
    },
    text_allbody: {
        marginTop: 17,
    },
    text_body2: {
        marginTop: 10,
        fontSize: 22,
        fontWeight: 'bold',
        marginRight: 210,
    },

    text_body3: {
        marginRight: 210,
        marginTop: 5,
        fontSize: 15,
    },
    body_tow: {
        marginLeft: 5,
        fontSize: 23,
        fontWeight: 'bold',
    },
    scrollView_boder: {
        marginTop: 5,
        backgroundColor: 'white',
        height: 100,
        width: 100,
        alignItems: 'center',
        justifyContent: 'center',
    },
    scrollView_boder3: {
        backgroundColor: 'white',
        height: 65,
        width: 65,
        borderRadius: 35,
        alignItems: 'center',
        justifyContent: 'center',
    },
    scrollView_boder2: {
        backgroundColor: '#A901DB',
        height: 70,
        width: 70,
        borderRadius: 35,
        alignItems: 'center',
        justifyContent: 'center',
    },
    scrollView_img: {
        height: 60,
        width: 60,
        borderRadius: 30,
        resizeMode: 'cover',
    },
    scrollView_img_2: {
        height: 25,
        width: 25,
        borderRadius: 30,
        resizeMode: 'cover',
    },
    add_img: {
        height: 60,
        width: 60,
        borderRadius: 30,
        backgroundColor: '#BDBDBD',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text_scrollView: {
        marginTop: 5,
        // fontWeight: 'bold',
    },
    boder_radius: {
        marginHorizontal: 5,
        height: 150,
        width: 500,
        backgroundColor: '#ffffff',
        shadowColor: '#000',
        shadowOffset: {
            width: 1,
            height: 5,
        },
        shadowOpacity: 0.1,
        shadowRadius: 2.84,
        elevation: 5,

    },
    footer: {
        marginHorizontal: 10,
        height: 60,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    img_footer: {
        marginHorizontal: 5,
        height: 30,
        width: 30,
    },
});
