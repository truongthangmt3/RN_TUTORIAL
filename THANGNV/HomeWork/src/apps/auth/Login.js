import React, { Component } from 'react'
import {
    Text,
    View,
    Image,
    TextInput,
    Dimensions,
    TouchableOpacity
} from 'react-native';
import images from '../../assets/imagesAsset';
import NavigationUtil from '../../navigation/NavigationUtil';
import { SCREEN_ROUTER } from '../../utils/Constants';

export class Login extends Component {
    render() {
        return (
            <View>
                <Image style={{
                    marginTop: 79,
                    alignSelf: 'center'
                }}
                    source={images.logo}
                />

                <View style={{
                    marginTop: 68,
                    marginHorizontal: 25,
                    borderWidth: 0.5,
                    borderRadius: 20,
                    borderColor: '#707070',
                    backgroundColor: 'white',
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 4,
                        height: 4,
                    },
                    shadowOpacity: 0.2,
                    shadowRadius: 10,
                }}>
                    <TextInput
                        style={{
                            height: 59,
                            padding: 22,
                            borderBottomWidth: 1,
                            borderBottomColor: 'rgba(70, 70, 70, 0.3)'
                        }}
                        placeholder={'Số Điện Thoại'}
                        placeholderTextColor='grey'
                    />
                    <TextInput
                        style={{
                            height: 59,
                            padding: 22
                        }}
                        placeholder={'Mật khẩu'}
                        placeholderTextColor='grey'
                    />
                </View>

                <TouchableOpacity
                    onPress={() => { }}
                    style={{
                        marginTop: 9,
                        marginRight: 25,
                        marginBottom: 93,
                        alignSelf: 'flex-end'
                    }}>
                    <Text style={{
                        fontSize: 12,
                        fontWeight: 'bold',
                        textDecorationLine: 'underline'
                    }}>
                        Quên mật khẩu?
                        </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {
                        NavigationUtil.navigate(SCREEN_ROUTER.HOME_SCREEN)
                    }}
                    style={{
                        alignSelf: 'center',
                        justifyContent: 'center',
                        borderRadius: 23,
                        height: 46,
                        width: Dimensions.get('window').width - 23 * 2,
                        backgroundColor: 'grey',
                    }}>
                    <Text style={{
                        fontSize: 12,
                        alignSelf: 'center',
                        fontWeight: 'bold',
                        color: 'white',
                    }}>
                        Đăng nhập
                    </Text>
                    <Image style={{
                        alignSelf: 'flex-end',
                        position: 'absolute',
                        right: 8
                    }}
                        source={images.arrow} />
                </TouchableOpacity>

                <View style={{
                    marginTop: 12,
                    alignSelf: 'center',
                    flexDirection: 'row',
                    justifyContent: 'center'
                }}>

                    <Text style={{
                        fontSize: 12,
                    }}>
                        Bạn chưa có tài khoản?
                    </Text>
                    <TouchableOpacity onPress={() => { }}
                        style={{
                            marginLeft: 5
                        }}>
                        <Text style={{
                            fontSize: 12,
                            color: 'red'
                        }}>
                            Đăng ký
                    </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

export default Login