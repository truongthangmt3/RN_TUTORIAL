import React, { Component } from 'react'
import {
    Text,
    StyleSheet,
    View,
    SafeAreaView,
    Image,
    TextInput,
    TouchableOpacity, Button
} from 'react-native'
import img from '../../assest/image.js'
import NavigationUtil from '../navigation/NavigationUtil';
import { SCREEN_ROUTE } from '../Util/Costan'
import { FloatingLabelInput } from 'react-native-floating-label-input';


class CustomInput extends Component {
    render() {
        const { place } = this.props;
        return (
            <TextInput
                style={{
                    flex: 1,
                    height: 40,
                    paddingLeft: 20,
                    borderBottomWidth: 1,
                    borderBottomColor: '#515C6F',

                }}
                placeholder={place}
            //onChangeText={text => setText(text)}
            //defaultValue={text}
            />

        );
    }
}
export default class Registration extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <TouchableOpacity
                    style={styles.toobar}
                    onPress={() => {
                        NavigationUtil.navigate(SCREEN_ROUTE.LOGIN)
                    }}
                >

                    <Image
                        source={img.ic_backk}
                    />
                </TouchableOpacity>
                <View style={styles.header}>
                    <View style={styles.logo}>
                        <Image
                            resizeMode='cover'
                            style={{
                                width: 177,
                                height: 72
                            }} source={img.img_logo} />
                    </View>

                    <View style={styles.information}>
                        <View style={styles.text_input}>
                            <CustomInput
                                place="So Dien Thoai"
                            />
                            <CustomInput
                                place="Email"
                            />
                            <CustomInput
                                place="Ho Ten"
                            />
                            <CustomInput
                                place="Tinh/Pho"
                            />
                            <CustomInput
                                place="hello"
                            />
                            <CustomInput
                                place="hello"
                            />

                        </View>



                    </View>
                    <View style={styles.form_login}>
                        <View style={styles.login}>

                            <TouchableOpacity
                                onPress={() => { NavigationUtil.navigate(SCREEN_ROUTE.LOGIN) }}
                                style={styles.click}>
                                <Text
                                    style={{
                                        flex: 1,
                                        textAlign: 'center',
                                        color: '#FFFFFF'
                                    }}>Đăng nhập </Text>
                                <Image
                                    style={{
                                        width: 28,
                                        height: 29.62,
                                        marginRight: 8.2
                                    }} source={img.ic_next}></Image>
                            </TouchableOpacity>

                        </View>
                    </View>
                </View>
                <View style={styles.button}></View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F6F8'

    },
    header: {
        flex: 7.5,
        backgroundColor: '#F5F6F8'
    },
    toobar: {
        flex: 0.3,
        paddingHorizontal: 16,
        justifyContent: 'flex-end',
        // backgroundColor: 'red'
    },
    logo: {
        flex: 0.7,
        // backgroundColor: 'blue',
        alignItems: 'center',



    },
    information: {
        flex: 3,
        flexDirection: 'column',
        // backgroundColor: 'pink',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.3,
        shadowRadius: 7,
        elevation: 1,

    },
    text_input: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        marginHorizontal: 25,
        borderRadius: 10,

    },

    form_login: {
        flex: 1,
        // backgroundColor: 'blue',
    },
    login: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    click: {
        width: 330,
        height: 46,
        borderRadius: 20,
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#69AAFF'
    },


    button: {
        flex: 2.5,
    },
})