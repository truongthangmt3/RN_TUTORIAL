import images from '@app/assets/imagesAsset';
import NavigationUtil from '@app/navigation/NavigationUtil';
import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    TextInput,
    Dimensions,
    TouchableOpacity
} from 'react-native';

export default class ForgotPassword extends Component {
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
                    marginBottom: 120,
                    marginHorizontal: 39
                }} source={images.img_muasi_logo} />

                <TextInput
                    style={{
                        borderWidth: 0.5,
                        backgroundColor: 'white',
                        marginHorizontal: 25,
                        borderColor: '#707070',
                        borderRadius: 10,
                        height: 59,
                        padding: 19
                    }}
                    placeholder={'Email'}
                />

                <TouchableOpacity
                    onPress={() => {
                        NavigationUtil.navigate("CheckPW")
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
                        Xác nhận
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
