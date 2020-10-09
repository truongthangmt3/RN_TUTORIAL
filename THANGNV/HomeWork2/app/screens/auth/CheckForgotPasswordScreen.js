import images from '@app/assets/imagesAsset';
import NavigationUtil from '@app/navigation/NavigationUtil';
import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    Dimensions,
    TouchableOpacity
} from 'react-native';

export default class CheckForgotPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={{
                flex: 1,
                backgroundColor: '#F5F6F8'
            }}>
                <Image style={{
                    marginTop: 75,
                    width: 297,
                    height: 120,
                    alignSelf: 'center',
                    marginBottom: 37,
                    marginHorizontal: 39
                }} source={images.img_muasi_logo} />

                <View
                    style={{
                        borderWidth: 0.5,
                        backgroundColor: 'white',
                        marginHorizontal: 25,
                        borderColor: '#707070',
                        borderRadius: 10,
                        marginBottom: 100,
                        height: 107,
                        padding: 18
                    }}
                >
                    <Text style={{
                        fontSize: 18
                    }}>
                        Mật khẩu đã được gửi tới email của bạn.
                    </Text>
                    <Text style={{
                        marginTop: 18,
                        fontSize: 18
                    }}
                    >Vui lòng kiểm tra email !</Text>
                </View>

                <TouchableOpacity
                    onPress={() => {
                        NavigationUtil.navigate("Login")
                    }}
                    style={{
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
                        Quay lại đăng nhập
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