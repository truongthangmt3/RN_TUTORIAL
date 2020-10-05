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


export default class LoginScreen extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.logo}>
                    <Image
                        resizeMode='cover'
                        style={{
                            width: 313,
                            height: 126
                        }} source={img.img_logo} />
                </View>

                <View style={styles.information}>
                    <View style={styles.text_input}>
                        <TextInput
                            style={{
                                flex: 1,
                                height: 40,
                                paddingLeft: 20,
                                borderBottomWidth: 1,
                                borderBottomColor: '#515C6F'
                            }}
                            placeholder="Số điện thoại"
                        //onChangeText={text => setText(text)}
                        //defaultValue={text}
                        />

                        <TextInput
                            style={{
                                height: 40,
                                flex: 1,
                                paddingLeft: 20,
                                borderBottomWidth: 1,
                                borderBottomColor: '#515C6F'
                            }}
                            placeholder="Mật khẩu"
                        //onChangeText={text => setText(text)}
                        //defaultValue={text}
                        />
                    </View>

                    <View style={styles.text}>
                        <Text style={{
                            color: '#6E7786',
                            borderBottomColor: 'red',
                            borderBottomWidth: 1
                        }}>Quên mật khẩu?
                        </Text>
                    </View>

                </View>
                <View style={styles.form_login}>
                    <View style={styles.login}>

                        <TouchableOpacity
                            onPress={() => { NavigationUtil.navigate(SCREEN_ROUTE.HOME) }}
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
                        <View style={styles.registration}>
                            <Text
                                style={{
                                    color: '#515C6F',
                                    fontSize: 12
                                }}>Bạn chưa có tài khoản?</Text>

                            <TouchableOpacity
                                onPress={() => { NavigationUtil.navigate(SCREEN_ROUTE.RIGIST) }}>
                                <Text
                                    style={{
                                        color: '#FF3030',
                                        fontSize: 12
                                    }}>Dang ki</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F6F8'

    },
    logo: {
        flex: 1,
        //backgroundColor: 'red',
        paddingHorizontal: 31,
        paddingTop: 104
    },
    information: {
        flex: 1,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.3,
        shadowRadius: 7,
        elevation: 1,

    },
    text_input: {
        flex: 2,
        backgroundColor: '#FFFFFF',
        marginHorizontal: 25,
        borderRadius: 10,

    },
    text: {
        flex: 0.5,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginHorizontal: 25,
    },

    form_login: {
        flex: 2,
        //backgroundColor: 'blue'
    },
    login: {
        flex: 0.3,

        // backgroundColor: 'red',
        top: 100,
        alignItems: 'center',
    },
    click: {
        width: 330,
        height: 46,
        borderRadius: 20,
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#8D8D8D'
    },
    registration: {

        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: 231,
        height: 34,

    }

})
