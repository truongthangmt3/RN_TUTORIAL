import { requestRegister } from '@app/constants/Api';
import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, SafeAreaView } from 'react-native';
import Reactotron from 'reactotron-react-native'
import image from '@app/assets/imagesAsset'
import NavigationUtil from '@app/navigation/NavigationUtil';
import { SCREEN_ROUTER } from '@app/constants/Constant';
class RegisterScreen extends Component {
    state = {
        isLoading: false,
        error: null,
        data: {},
        phoneNumber: "",
        password: ""
    }
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <TouchableOpacity onPress={() => {

                    NavigationUtil.goBack();
                }}>
                    <Image
                        style={styles.ic_back}
                        source={image.ic_back}>
                    </Image>
                </TouchableOpacity>
                <Image
                    style={styles.img_logo}
                    source={image.img_Asset}>
                </Image>

                <View style={styles.V_information}>
                    {_informationTop('Số điện thoại')}
                    {_informationMid('Email')}
                    {_informationMid('Họ tên')}
                    {_informationMid('Tỉnh/Thành phố', image.ic_show)}
                    {_informationMid('Mật khẩu')}
                    {_informationBottom('Xác nhận mật khẩu')}
                </View>
            </SafeAreaView>
        );
    }
}
_informationTop = (label) => {
    return (
        <View style={styles.V_headerTop}>
            <Text style={styles.txt}>
                {label}
            </Text>
            <TextInput style={styles.txtInput}>

            </TextInput>
        </View>
    )
};
_informationMid = (label, img) => {
    return (
        <View style={styles.V_headerMid}>
            <View>
                <Text style={styles.txt}>
                    {label}
                </Text>
                <TextInput style={styles.txtInput}>
                </TextInput>
            </View>
            <Image style={styles.img_show}
                source={img}>
            </Image>
        </View>
    );
};
_informationBottom = (label) => {
    return (
        <View style={styles.V_headerBottom}>
            <Text style={styles.txt}>
                {label}
            </Text>
            <TextInput style={styles.txtInputBotom}>
            </TextInput>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F3F3F3'
    },

    img_logo: {
        height: 100,
        width: "100%",
        resizeMode: 'contain',
        backgroundColor: '#F3F3F3'
    },
    ic_back: {
        height: 18,
        width: 18,
        resizeMode: 'contain',
        marginLeft: 5,
        marginTop: 10
    },
    V_information: {
        backgroundColor: '#F3F3F3',
        width: "90%",
        marginLeft: 20,
        borderRadius: 10,
        elevation: 10,
        marginTop: 20,
    },
    txtInput: {
        backgroundColor: 'white',
        height: 37,
    },
    txtInputBotom: {
        backgroundColor: 'white',
        height: 37,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10
    },
    txt: {
        fontSize: 14,
        color: '#ABABAB'
    },
    V_headerTop: {
        backgroundColor: 'white',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        marginBottom: 5,
        padding: 10
    },
    V_headerBottom: {
        backgroundColor: 'white',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        padding: 10
    },
    V_headerMid: {
        flexDirection: 'row',
        backgroundColor: 'white',
        marginBottom: 5,
        padding: 10
    },
    img_show: {
        height: 16,
        width: 16,
        marginLeft: 230
    }
})
export default RegisterScreen;
