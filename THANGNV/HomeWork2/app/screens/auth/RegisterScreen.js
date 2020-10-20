import images from '@app/assets/imagesAsset';
import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    TextInput,
    Dimensions,
    TouchableOpacity
} from 'react-native';
import NavigationUtil from '@app/navigation/NavigationUtil';
import R from '@app/assets/R';
import RNHeader from '@app/components/WHeader';
class RegisterScreen extends Component {
    render() {
        return (
            <View style={{
                flex: 1,
                backgroundColor: '#F5F6F8'
            }}>
                <TouchableOpacity onPress={() => {
                    NavigationUtil.navigate("Login")
                }}>
                    <Image style={{
                        width: 9,
                        height: 17,
                        marginTop: 43,
                        marginLeft: 16,
                        resizeMode: 'contain'
                    }} source={images.ic_back} />
                </TouchableOpacity>


                <Image style={{
                    //marginTop: 52,
                    width: 177,
                    height: 72,
                    marginBottom: 18,
                    alignSelf: 'center',
                }} source={images.img_muasi_logo} />

                <View style={{
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
                            padding: 22,
                            borderBottomWidth: 1,
                            borderBottomColor: 'rgba(70, 70, 70, 0.3)'
                        }}
                        placeholder={'Email'}
                        placeholderTextColor='grey'
                    />
                    <TextInput
                        style={{
                            height: 59,
                            padding: 22,
                            borderBottomWidth: 1,
                            borderBottomColor: 'rgba(70, 70, 70, 0.3)'
                        }}
                        placeholder={'Họ tên'}
                        placeholderTextColor='grey'
                    />
                    <TextInput
                        style={{
                            height: 59,
                            padding: 22,
                            borderBottomWidth: 1,
                            borderBottomColor: 'rgba(70, 70, 70, 0.3)'
                        }}
                        placeholder={'Tỉnh/Thành phố'}
                        placeholderTextColor='grey'
                    />
                    <TextInput
                        style={{
                            height: 59,
                            padding: 22,
                            borderBottomWidth: 1,
                            borderBottomColor: 'rgba(70, 70, 70, 0.3)'
                        }}
                        placeholder={'Mật khẩu'}
                        secureTextEntry={true}
                        placeholderTextColor='grey'
                    />
                    <TextInput
                        style={{
                            height: 59,
                            padding: 22
                        }}
                        placeholder={'Xác nhận mật khẩu'}
                        secureTextEntry={true}
                        placeholderTextColor='grey'
                    />
                </View>

                <TouchableOpacity
                    onPress={() => {
                        alert('Pressed')
                        //NavigationUtil.navigate("Home")
                    }}
                    style={{
                        marginTop: 65,
                        alignSelf: 'center',
                        justifyContent: 'center',
                        borderRadius: 23,
                        height: 46,
                        width: Dimensions.get('window').width - 23 * 2,
                        backgroundColor: '#69AAFF',
                    }}>
                    <Text style={{
                        fontSize: 12,
                        alignSelf: 'center',
                        fontWeight: 'bold',
                        color: 'white',
                    }}>
                        Đăng ký
                    </Text>
                    <Image style={{
                        alignSelf: 'flex-end',
                        position: 'absolute',
                        width: 29,
                        height: 29,
                        right: 8
                    }}
                        source={images.ic_next} />
                </TouchableOpacity>
            </View>

        );
    }
}

export default RegisterScreen;
