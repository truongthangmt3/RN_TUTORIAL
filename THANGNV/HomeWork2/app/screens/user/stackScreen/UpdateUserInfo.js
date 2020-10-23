import React, { Component } from 'react'
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image, TextInput } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import R from '@R';
import { SCREEN_ROUTER } from '@app/constants/Constant';
import NavigationUtil from '@app/navigation/NavigationUtil';

export class UserInfo extends Component {
    static propTypes = {
        prop: PropTypes
    }

    state = {
        name: '',
        sex: '',
        city: '',
        address: '',
        email: '',
        phone: ''
    };

    render() {
        return (
            <SafeAreaView style={{
                flex: 1,
            }}>
                <TouchableOpacity
                    onPress={() => { NavigationUtil.navigate(SCREEN_ROUTER.USER) }}
                    style={{
                        height: 56,
                        backgroundColor: '#69AAFF',
                        alignItems: 'center',
                        flexDirection: 'row',
                    }}>
                    <Image style={{
                        width: 8,
                        height: 15,
                        marginLeft: 16,
                        marginRight: 10
                    }} source={R.images.ic_back_white} />
                    <Text style={{ fontSize: 20, color: 'white', fontWeight: '500' }}>
                        Cập nhật thông tin
                    </Text>
                </TouchableOpacity>

                {infoView(
                    'Họ tên (*)',
                    'Họ tên'
                )}
                {infoView(
                    'Giới tính (*)',
                    'Giới tính'
                )}
                {infoView(
                    'Tỉnh/Thành phố (*)',
                    'Tỉnh/Thành phố'
                )}
                {infoView(
                    'Địa chỉ (*)',
                    'Địa chỉ'
                )}
                {infoView(
                    'Email',
                    'Email'
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
    placeholderText,
    value
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
                onChangeText={value}
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

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(UserInfo)
