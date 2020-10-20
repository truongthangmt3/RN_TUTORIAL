import images from '@app/assets/imagesAsset';
import NavigationUtil from '@app/navigation/NavigationUtil';
import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    TextInput,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
} from 'react-native';

export default class UserInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <SafeAreaView style={{
                flex: 1,
            }}>
                <View style={{
                    height: 56,
                    backgroundColor: '#69AAFF',
                    //justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'row',
                }}>
                    <Image style={{
                        width: 8,
                        height: 15,
                        marginLeft: 16,
                        marginRight: 10
                    }} source={images.ic_back_white} />
                    <Text style={{ fontSize: 20, color: 'white', fontWeight: '500' }}>
                        Cập nhật thông tin
                    </Text>
                </View>

                {infoView(
                    'Họ tên(*)',
                    'Họ tên'
                )}
                {infoView(
                    'Số điện thoại(*)',
                    'Số Điện Thoại'
                )}

                <TouchableOpacity
                    onPress={() => {

                    }}
                    style={{
                        height: 42,
                        alignItems: 'center',
                        marginHorizontal: 48,
                        backgroundColor: '#69AAFF',
                        justifyContent: 'center',
                        borderRadius: 10
                    }}>
                    <Text style={{
                        color: 'white', fontWeight: 'bold'
                    }}>
                        CẬP NHẬT
                    </Text>
                </TouchableOpacity>

            </SafeAreaView>
        );
    }
}

const infoView = (
    label,
    placeholderText
) => {
    return (
        <View style={styles.infoView}>
            <Text style={{
                fontSize: 14,
                marginBottom: 7
            }}>{label}</Text>
            <TextInput style={{
                height: 46,
                borderRadius: 10,
                padding: 10,
                backgroundColor: '#F5F6F8'
            }}
                placeholder={placeholderText} />
        </View>
    );
}

const styles = StyleSheet.create({
    infoView: {
        height: 71,
        marginVertical: 16,
        marginHorizontal: 8,
        //marginTop: 30,
        backgroundColor: 'white'
    }
})