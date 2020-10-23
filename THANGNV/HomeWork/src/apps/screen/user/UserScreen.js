import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    SafeAreaView,
    Image,
} from 'react-native';
import images from '../../../assets/imagesAsset';

export default class UserScreen extends Component {
    render() {
        var name = 'Nguyen Van Thang';
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.v_blockinfor}>
                    <View style={styles.v_icshortname}>
                        <Text style={styles.t_shortname}>
                            {this._func_getshortname(name)}
                        </Text>
                    </View>
                    <View style={styles.v_userinfor}>
                        <Text style={styles.t_username}>{name}</Text>
                        <Text style={styles.t_phonenumber}>0987654321</Text>
                        <View style={styles.v_chinhsua}>
                            <Text style={styles.t_chinhsua}>Chỉnh sửa</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.v_blockuseroption}>
                    <CustomOption
                        img1={images.ic_user}
                        label="Tin mua của bạn"
                        img2={images.arrow}
                        action={alert('Hello')}
                    />
                    <View style={styles.v_line} />
                </View>
            </SafeAreaView>
        );
    }
    _func_getshortname = (text) => {
        var shortname = text.charAt(0);
        for (let i = text.length; i > 0; i--) {
            if (text.charAt(i) == ' ') {
                shortname += text.charAt(i + 1);
                return shortname;
            }
        }
    };
}

class CustomOption extends Component {
    render() {
        const { img1, label, img2, action } = this.props;
        return (
            <TouchableOpacity
                style={styles.v_oneoption}
                onPress={() => {
                    action();
                }}>
                <Image style={styles.img_list} source={img1} />
                <Text style={styles.t_option}>{label}</Text>
                <Image style={styles.img_arrow} source={img2} />
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F6F8',
    },

    v_blockinfor: {
        flex: 2,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        padding: 20,
    },

    v_icshortname: {
        backgroundColor: '#E2E6B7',
        width: 100,
        height: 100,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },

    t_shortname: {
        fontSize: 36,
        fontWeight: 'bold',
        color: '#B8CB85',
    },

    v_userinfor: {
        padding: 10,
    },
    t_phonenumber: {
        padding: 5,
        fontSize: 15,
        fontWeight: '200',
    },
    t_username: {
        fontSize: 21,
        fontWeight: 'bold',
    },
    v_chinhsua: {
        borderWidth: 1,
        width: 121,
        height: 30,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#727C8E',
    },

    t_chinhsua: {
        fontSize: 12,
    },
    v_blockuseroption: {
        flex: 3,
        backgroundColor: '#FFFFFF',
        marginTop: 5,
    },
    v_oneoption: {
        flex: 1,
        flexDirection: 'row',
        marginRight: 15,
        marginLeft: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },

    img_list: {
        width: 15,
        height: 17,
    },
    t_option: {
        flex: 1,
        marginLeft: 18,
    },
    img_arrow: {
        width: 15,
        height: 15,
    },
    v_line: {
        height: 1,
        backgroundColor: '#727C8E',
        marginLeft: 60,
        marginRight: 15,
    },
    v_emty: {
        flex: 3,
    },
});
