import React, { Component } from 'react';

import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    Image,
    StatusBar,
    TextInput
} from 'react-native';
import BottomSheet from 'reanimated-bottom-sheet';

export default class Login extends Component {

    render() {
        return (

            <SafeAreaView >
                <ScrollView>
                    <View style={styles.container}>
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
                            <View style={styles.herder_email}>
                                <Text style={styles.inputTitle}>Email</Text>
                                <TextInput
                                    style={styles.text_herder}
                                />
                            </View>
                            <View style={styles.herder_email}>
                                <Text style={styles.inputTitle}>Name</Text>
                                <TextInput
                                    style={styles.text_herder}
                                />
                            </View>
                            <View style={styles.herder_email}>
                                <View style={{ flexDirection: 'row', marginTop: 15 }}>
                                    <Text style={styles.inputTitle}>Tính/Thành phố</Text>
                                    <Image
                                        source={require('../acseets/ic_dow.png')}
                                        style={{ marginTop: 15, marginRight: 10 }}
                                    />
                                </View>
                                <TextInput
                                    style={styles.text_herder}
                                />
                            </View>

                            <View style={styles.herder_pass}>
                                <Text style={styles.inputTitle}>Pass</Text>
                                <TextInput style={styles.text_herder}
                                    secureTextEntry={true}
                                />
                            </View>
                            <View style={styles.herder_XD_pass}>
                                <Text style={styles.inputTitle}>Xác nhận mật khẩu</Text>
                                <TextInput style={styles.text_herder}
                                    secureTextEntry={true}
                                />
                            </View>



                        </View>
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
                </ScrollView>
            </SafeAreaView>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
        alignItems: 'center',
        // marginHorizontal: '50'
    },
    logo: {
        width: 313,
        height: 126,
        marginHorizontal: 50,
        marginTop: 10
    },
    herder: {
        width: 350,
        height: 390,
        marginTop: 20,
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
    herder_email: {
        height: 65,
        borderColor: '#fff',
        borderWidth: 1,
        borderBottomColor: '#D8D8D8',
        borderBottomWidth: 1,
    },
    inputTitle: {
        color: '#A4A4A4',
        marginTop: 10,
        marginLeft: 10,
        flex: 1,
    },
    text_herder: {
        marginTop: 15,
        marginLeft: 20
    },

    herder_pass: {
        height: 65,
        borderColor: '#fff',
        borderWidth: 1,
        borderBottomColor: '#D8D8D8',
        borderBottomWidth: 1,


    },
    herder_XD_pass: {
        height: 65,
        borderColor: '#fff',
        borderWidth: 1,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
    },



    button_title: {
        marginTop: 80,
        backgroundColor: '#69AAFF',
        height: 55,
        borderRadius: 30,
        alignItems: 'center',
        textAlign: 'center',
        flexDirection: 'row',
        marginHorizontal: 30
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


});
