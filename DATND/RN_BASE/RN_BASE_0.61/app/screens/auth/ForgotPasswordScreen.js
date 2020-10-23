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
        const { place } = this.props;
        return (
            <TextInput
                style={{
                    flex: 1,
                    height: 40,
                    paddingLeft: 20,


                }}
                placeholder={place}
            //onChangeText={text => setText(text)}
            //defaultValue={text}
            />

        );
    }
}
export default class ForgotPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <TouchableOpacity
                    style={styles.toobar}
                    onPress={() => {
                        NavigationUtil.navigate(SCREEN_ROUTER.LOGIN)
                    }} >

                    <Image
                        source={R.images.ic_backk}
                    />
                </TouchableOpacity>
                <View style={styles.header}>
                    <View style={styles.logo}>
                        <Image
                            resizeMode='cover'
                            style={{
                                width: 297,
                                height: 120
                            }} source={R.images.ic_logo} />
                    </View>

                    <View style={styles.information}>
                        <View style={styles.text_input}>
                            <CustomInput
                                place="Email"
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
                                    }}>Xác nhận  </Text>
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
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F6F8'

    },
    header: {
        flex: 5,
        // backgroundColor: 'red'

    },
    toobar: {
        flex: 0.5,
        paddingHorizontal: 16,
        justifyContent: 'flex-start',
        // backgroundColor: 'red'
    },
    logo: {
        flex: 2.5,

        alignItems: 'center',
        // backgroundColor: 'blue',




    },
    information: {
        flex: 0.5,
        flexDirection: 'column',
        // backgroundColor: 'pink',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.3,
        shadowRadius: 7,
        elevation: 1,

    },
    text_input: {
        width: 325,
        height: 59,
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
        justifyContent: 'flex-end',
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
        flex: 3.5,
    },

})