import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import images from '../assets/imagesAsset'

class Bottom extends Component {
    render() {
        return (
            <View style={styles.v_bottomtab}>
                <CustomOneTab
                    imgtab={images.ic_home}
                    labeltab="Trang chủ"
                />
                <CustomOneTab
                    imgtab={images.ic_customers}
                    labeltab="KH quan tâm"
                />
                <CustomOneTab
                    imgtab={images.ic_notifications}
                    labeltab="Thông báo"
                />
                <CustomOneTab
                    imgtab={images.ic_user}
                    labeltab="Tài khoản"
                    style={{ color: '#69AAFF' }}
                />
            </View>
        );
    }
}

class CustomOneTab extends Component {
    render() {
        const { imgtab, labeltab } = this.props;
        return (
            <TouchableOpacity
                style={styles.v_onetab}
                onPress={() => {
                    alert('DemoTab');
                }}>
                <Image style={styles.img_tab} source={imgtab} />
                <Text style={styles.t_onetab}>{labeltab}</Text>
            </TouchableOpacity>
        );
    }
}

export default Bottom;
const styles = StyleSheet.create({
    v_bottomtab: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
    },

    v_onetab: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    img_tab: {
        width: 30,
        height: 25,
        resizeMode: 'contain',
        margin: 3,
    },
    t_onetab: {
        fontSize: 11,
        color: '#ABABAB',
    },
});
