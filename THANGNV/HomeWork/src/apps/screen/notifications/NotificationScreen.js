import React, { Component } from 'react';
import {
    View,
    Text,
    SafeAreaView,
    Image,
    StyleSheet,
} from 'react-native';
import images from '../../../assets/imagesAsset'

export default class NotificationScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <CustomOnenotify
                    icon={images.ic_accept}
                    text="This is a notification"
                    date="1/12020"
                />
                <View style={styles.v_line} />
                <CustomOnenotify
                    icon={images.ic_reject}
                    text="This is a notification"
                    date="1/12020"
                />
                <View style={styles.v_line} />
            </SafeAreaView>
        );
    }
}

class CustomOnenotify extends Component {
    render() {
        const { icon, text, date } = this.props;
        return (
            <View style={styles.v_onenotify}>
                <Image style={styles.v_iconnotify} source={icon} />
                <View>
                    <Text style={styles.t_notify}>{text}</Text>
                    <View style={styles.v_textdate}>
                        <Text style={styles.t_date}>{date}</Text>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    v_notice: {
        flex: 4,
        padding: 10,
    },
    v_onenotify: {
        flex: 1,
        flexDirection: 'row',
        marginLeft: 20,
        marginRight: 35,
        marginTop: 15,
        alignItems: 'center',
    },
    v_iconnotify: {
        width: 48,
        height: 48,
        borderRadius: 24,
        marginRight: 20,
        resizeMode: 'cover',
    },
    t_notify: {
        flex: 1,
        fontSize: 15,
        flexWrap: 'wrap',
        marginRight: 35,
    },
    v_line: {
        height: 1,
        width: 262,
        marginLeft: 88,
        backgroundColor: '#727C8E',
    },
    v_textdate: {
        width: 262,
    },
    t_date: {
        color: '#515C6F',
        fontWeight: '200',
        alignSelf: 'flex-end',
        fontSize: 14,
    },
    v_blockemty: {
        flex: 4,
    },
    v_bottomtab: {
        flex: 1,
    },
});