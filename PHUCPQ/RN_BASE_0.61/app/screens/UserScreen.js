
import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getUserInfo } from '@action'
import R from '@R';
import NavigationUtil from '@app/navigation/NavigationUtil'
import { SCREEN_ROUTER } from '@app/constants/Constant'

export class UserScreen extends Component {

    render() {
        return (
            <View
                style={styles.container}
            >
                <View style={styles.header}>
                    <View style={styles.sign}>
                        <Text style={styles.txt_sign}>
                            NV
                        </Text>
                    </View>
                    <Text style={styles.txt_name}>
                        {this.props.userState.data.fullname}
                    </Text>
                    <Text style={styles.txt_phone}>
                        {this.props.userState.data.phone}
                    </Text>
                    <TouchableOpacity
                        onPress={() => {
                            NavigationUtil.navigate(SCREEN_ROUTER.UPDATE_USER_INFO)
                        }}
                    >
                        <Text style={styles.txt_edit}>
                            chỉnh sửa
                    </Text>
                    </TouchableOpacity>
                </View>
                {_information(R.images.ic_recipecreate, "Tin mua của bạn", R.images.img_arrow)}
                {_information(R.images.ic_single, "Thông tin cá nhân", R.images.img_arrow)}
                {_information(R.images.ic_awesome, "Danh mục của tôi", R.images.img_arrow)}
                {_information(R.images.ic_feather, "Đổi mật khẩu", R.images.img_arrow)}
                {_information(R.images.ic_recipe, "Hướng dẫn sử dụng", R.images.img_arrow)}
                {_information(R.images.ic_log, "Đăng xuất", R.images.img_arrow)}


            </View>
        )
    }
}
_information = (img, label, ic) => {
    return (
        <View style={styles.heder_info}>
            <Image
                style={styles.img_info}
                source={img}>
            </Image>
            <Text style={styles.txt_info}>
                {label}
            </Text>
            <View style={styles.icv_info}>
                <Image
                    style={styles.ic_info}
                    source={ic}>

                </Image>
            </View>
        </View>
    )
}
const mapStateToProps = (state) => ({
    userState: state.userReducer
})

const mapDispatchToProps = {
    getUserInfo
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#F3F3F3'
    },
    header: {
        marginBottom: 5,
        backgroundColor: 'white',
        width: "100%",
        height: "17%",
        justifyContent: 'center',
    },
    sign: {
        height: 90,
        width: 90,
        borderRadius: 50,
        position: 'absolute',
        backgroundColor: '#E2E6B7',
        marginTop: 10,
        marginLeft: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    txt_sign: {
        fontSize: 36,
        fontWeight: 'bold',
        color: '#B8CB85'
    },
    txt_name: {
        marginTop: 10,
        marginLeft: 120,
        fontSize: 21,
        fontWeight: 'bold'
    },
    txt_phone: {
        marginTop: 5,
        marginLeft: 120,
        fontSize: 15
    },
    txt_edit: {
        width: '20%',
        height: 25,
        marginTop: 5,
        marginLeft: 120,
        fontSize: 12,
        borderRadius: 20,
        borderWidth: 0.5,
        padding: 4,
        paddingLeft: 14
    },
    heder_info: {
        flexDirection: "row",
        height: "7%",
        width: "100%",
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    img_info: {
        height: 22,
        width: 22,
        resizeMode: 'contain',
        marginTop: 15,
        marginRight: 15
    },
    icv_info: {
        borderBottomWidth: 0.5,
    },
    ic_info: {
        height: 22,
        width: 22,
        resizeMode: 'contain',
        marginTop: 15
    },
    txt_info: {
        width: "70%",
        borderBottomWidth: 0.5,
        paddingTop: 15,
        fontSize: 15
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(UserScreen)


// Bước 1 : Kết nối Screen vs Reducer trong func mapStateToProps 
// Bước 2 : Tạo action type, và action trong file inxdex
// Bước 3 : dùng func mapDispatchToProps để khai báo action trong Screen
// Bước 4 : Gọi action và truyền tham số nếu cần
// Bước 5 : Lắng nghe action trong Reducer và cập nhật lại state