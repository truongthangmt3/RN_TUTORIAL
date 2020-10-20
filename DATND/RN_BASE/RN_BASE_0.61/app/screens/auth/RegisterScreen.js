import React, { Component } from 'react';
import {
    Text,
    StyleSheet,
    View,
    SafeAreaView,
    Image,
    TextInput,
    TouchableOpacity,
    TouchableHighlight
} from 'react-native';
import { SCREEN_ROUTER } from '@app/constants/Constant';
import { requestRegist } from '@api'
import reactotron from '@app/debug/ReactotronConfig';
import NavigationUtil from '../../navigation/NavigationUtil';
import R from '@R';



class CustomInput extends Component {
    render() {
        const { place, onChange, secureTextEntry } = this.props;
        return (
            <TextInput
                style={{
                    flex: 1,
                    height: 40,
                    paddingLeft: 20,


                }}
                placeholder={place}
                onChangeText={onChange}
                secureTextEntry={secureTextEntry}
            //onChangeText={text => setText(text)}
            //defaultValue={text}
            />

        );
    }
}

class RegisterScreen extends Component {

    state = {
        isLoading: false,
        error: null,
        data: {},
        phone: '',
        password: '',
        email: ''
    };
    render() {

        return (

            <SafeAreaView style={styles.container}>
                <TouchableOpacity
                    style={styles.toobar}
                    onPress={() => {
                        NavigationUtil.navigate(SCREEN_ROUTER.LOGIN)
                    }}
                >

                    <Image
                        source={R.images.ic_backk}
                    />
                </TouchableOpacity>
                <View style={styles.header}>
                    <View style={styles.logo}>
                        <Image
                            resizeMode='cover'
                            style={{
                                width: 177,
                                height: 72
                            }} source={R.images.ic_logo} />
                    </View>

                    <View style={styles.information}>
                        <View style={styles.text_input}>
                            <CustomInput
                                place="So Dien Thoai"
                                onChange={(textnew) => {
                                    this.setState({
                                        phone: textnew
                                    })
                                }}

                            />
                            {_horizontal()}
                            <CustomInput
                                place="Email"
                            />
                            {_horizontal()}
                            <CustomInput
                                place="Ho Ten"
                            />
                            {_horizontal()}
                            <CustomInput
                                place="Tinh/Pho"
                            />
                            {_horizontal()}

                            <CustomInput
                                place="Mật Khẩu "
                                onChange={(textnew) => {
                                    this.setState({
                                        password: textnew
                                    })
                                }}
                                secureTextEntry={true}
                            />
                            {_horizontal()}
                            <CustomInput
                                place="Xác nhận mật khẩu"
                            />

                        </View>



                    </View>
                    <View style={styles.form_login}>
                        <View style={styles.login}>

                            <TouchableOpacity
                                onPress={async () => {
                                    try {
                                        result = await requestRegist({
                                            "phone": this.state.phone,
                                            "password": this.state.password,
                                            "device_id": "",
                                        })
                                        reactotron.log(result)
                                        NavigationUtil.navigate(SCREEN_ROUTER.LOGIN)

                                    } catch (error) {

                                    }
                                }}
                                style={styles.click}>
                                <Text
                                    style={{
                                        flex: 1,
                                        textAlign: 'center',
                                        color: '#FFFFFF'
                                    }}>Đăng Kí </Text>
                                <Image
                                    style={{
                                        width: 28,
                                        height: 29.62,
                                        marginRight: 8.2
                                    }} source={R.images.ic_next}></Image>
                            </TouchableOpacity>

                        </View>
                    </View>
                </View>
                <View style={styles.button}></View>
            </SafeAreaView>
            // <View style={{
            //     flex: 1,
            //     justifyContent: 'center',
            //     alignItems: 'center',
            // }}>

            //     <TextInput
            //         style={{
            //             width: '80%',
            //             height: 50,
            //             backgroundColor: '#69AAFF'
            //         }}
            //         onChangeText={(textnew) => {
            //             // reactotron.log(textnew)
            //             this.setState({
            //                 phone: textnew
            //             })
            //         }}

            //     />
            //     <TextInput
            //         style={{
            //             width: '80%',
            //             height: 50,
            //             backgroundColor: '#69AAFF',
            //             marginTop: 20
            //         }}
            //         onChangeText={(textnew) => {
            //             this.setState({
            //                 password: textnew
            //             })
            //         }}
            //         secureTextEntry={true}
            //     />
            //     <TextInput
            //         style={{
            //             width: '80%',
            //             height: 50,
            //             marginTop: 20,
            //             backgroundColor: '#69AAFF'
            //         }}
            //         onChangeText={(textnew) => {
            //             // reactotron.log(textnew)
            //             this.setState({
            //                 email: textnew
            //             })
            //         }}


            //     />

            //     <TouchableHighlight
            //         //cach1
            //         // onPress={() => {
            //         //     requestLogin({
            //         //         "phone": this.state.phone,
            //         //         "password": this.state.password,
            //         //         "device_id": "",
            //         //     }).then(result => {
            //         //         reactotron.log(result)
            //         //         NavigationUtil.navigate(SCREEN_ROUTER.MAIN)

            //         //     }).catch(error => {
            //         //         reactotron.log(error)
            //         //     })

            //         // }}

            //         //cach 2
            //         onPress={async () => {
            //             try {
            //                 result = await requestRegist({
            //                     "phone": this.state.phone,
            //                     "password": this.state.password,
            //                     "device_id": "",

            //                 })
            //                 reactotron.log(result)
            //                 NavigationUtil.navigate(SCREEN_ROUTER.LOGIN)

            //             } catch (err) {
            //                 ß
            //             }



            //         }}
            //     >
            //         <Text>Dang ki</Text>
            //     </TouchableHighlight>





            // </View>
        );
    }
};
_horizontal = () => {
    return (
        <View style={{
            width: '100%',
            height: 1,
            backgroundColor: '#727C8E',
            opacity: 0.2

        }} />


    )
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
export default RegisterScreen;
