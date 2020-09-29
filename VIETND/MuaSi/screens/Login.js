
import React, { Component } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    Image,
    StatusBar,
    TextInput,
    TouchableOpacity
} from 'react-native';
import Loading from '../Loading'


export default class Login extends Component {
    state = {
        isLoading: true,
        isError: false,
        // data: {},   
    }
    render() {
        //setTime
        setTimeout(() => {
            this.setState({
                isLoading: false,
                isError: false

            })
        }, 300)
        const { isLoading, isError, data } = this.state
        if (isLoading) {
            return (
                <Loading />

            );

        }
        if (isError) {
            return (
                <View style={styles.title}>
                    <Text>Đã có lỗi xảy ra</Text>
                </View>
            );
        }
        return (


            <SafeAreaView style={styles.container}>
                <View>
                    <Image
                        source={require('../acseets/ic_logo.png')}
                        style={styles.logo}
                    />
                </View>

                <View style={styles.herder}>

                    <View style={styles.herder_tk}>
                        <Text style={styles.inputTitle}>Số điện thoại</Text>
                        <TextInput
                            style={styles.text_herder}
                        />
                    </View>

                    <View style={styles.herder_pass}>
                        <Text style={styles.inputTitle}>Mật khẩu</Text>
                        <TextInput style={styles.text_herder}
                            secureTextEntry={true}
                        />

                    </View>

                    <View style={styles.forget}>
                        <Text style={styles.forget_pass}>
                            Quên mật khẩu ?
                </Text>
                    </View>
                    <TouchableOpacity onPress={() => {
                        this.props.navigation.navigate('login1')
                    }}>
                        <View style={styles.button_background}>


                            <View style={styles.button_title}>

                                <Text style={styles.button_text} >Đăng nhập</Text>

                                <View style={styles.button_next}>
                                    <Image
                                        source={require('../acseets/ic_Path11.png')}
                                        style={styles.img_next}
                                    />
                                </View>

                            </View>
                        </View>
                    </TouchableOpacity>

                    <View style={styles.footer}>
                        <Text>Bạn chưa có tài khoản? <Text style={styles.text_register}>Đăng kí</Text></Text>
                    </View>
                </View>

            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
        alignItems: 'center',
    },
    logo: {
        width: 313,
        height: 126,
        marginHorizontal: 50,
        marginTop: 50
    },
    herder: {
        width: 350,
        height: 130,
        marginTop: 50,
        marginHorizontal: 20,
        borderRadius: 18,
        backgroundColor: '#fff',
        shadowColor: '#D8D8D8',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 1,
        shadowRadius: 15,
    },
    herder_tk: {
        height: 65,
        borderColor: '#fff',
        borderWidth: 1,
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
        borderBottomColor: '#D8D8D8',
        borderBottomWidth: 1,
    },
    inputTitle: {
        color: '#A4A4A4',
        marginTop: 10,
        marginLeft: 10
    },
    text_herder: {
        marginTop: 15,
        marginLeft: 20
    },

    herder_pass: {
        height: 65,
        borderColor: '#fff',
        borderWidth: 1,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15
    },
    forget: {
        borderBottomColor: 'black',
        borderBottomWidth: 0.5,
        width: 110,
        marginLeft: 240
    },
    forget_pass: {
        marginTop: 10,
        color: '#A4A4A4',
        textAlign: 'center',

    },
    button_background: {
        height: 70,
        marginTop: 100
    },
    button_title: {
        marginTop: 5,
        backgroundColor: '#8D8D8D',
        height: 55,
        borderRadius: 30,
        alignItems: 'center',
        textAlign: 'center',
        flexDirection: 'row'
    },
    button_text: {
        flex: 1,
        textAlign: 'center',
    },
    button_next: {
        height: 40,
        width: 40,
        backgroundColor: '#fff',
        borderRadius: 20,
        marginRight: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    img_next: {
        width: 10,
        height: 16,
    },
    footer: {
        marginTop: 10,
        alignItems: 'center'
    },
    text_register: {
        color: 'red'
    }
});
