import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput,SafeAreaView,Image,TouchableOpacity} from 'react-native';
import NavigationUtil from '../../navigation/NavigationUtil';
import { GoogleSignin, statusCodes } from '@react-native-community/google-signin';
import { TouchableHighlight } from 'react-native-gesture-handler';
import reactotron from '@app/debug/ReactotronConfig';
import { requestLogin } from '@api'
import R from '@R';
import { SCREEN_ROUTER } from '@app/constants/Constant';
export default class ForgotPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View>
                    <Image
                        source={R.images.ic_logo}
                        style={styles.logo}
                    />
                </View>

                <View style={styles.herder}>

                    <View style={styles.herder_tk}>
                        <Text style={styles.inputTitle} >Email</Text>
                        <TextInput
                            style={styles.text_herder}
                        />
                    </View>

                
                    <TouchableOpacity onPress={() => {

                    }}>
                        <View style={styles.button_background}>


                            <View style={styles.button_title}>

                                <Text style={styles.button_text} >Xác nhận</Text>

                                <View style={styles.button_next}>
                                    <Image
                                        source={R.images.ic_path}
                                        style={styles.img_next}
                                    />
                                </View>

                            </View>
                        </View>
                    </TouchableOpacity>

                    <View style={styles.footer}>
                    <TouchableOpacity 
                    onPress={() => {
                                NavigationUtil.navigate(SCREEN_ROUTER.REGISTER)

                            }}>
                        <Text>Bạn chưa có tài khoản?
                        

                            <Text style={styles.text_register} >Đăng kí</Text>
                           
                        </Text>
                        </TouchableOpacity>
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
        height: 70,
        marginTop: 100,
        marginHorizontal: 20,
        borderRadius: 18,
        backgroundColor: '#fff',
        shadowColor: '#D8D8D8',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 1,
        shadowRadius: 15,
    },
    herder_tk: {
        height: 70,
        borderColor: '#fff',
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
        borderBottomColor: '#D8D8D8',
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



    button_background: {
        height: 70,
        marginTop: 100
    },
    button_title: {
        marginTop: 5,
        backgroundColor: '#69AAFF',
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
})