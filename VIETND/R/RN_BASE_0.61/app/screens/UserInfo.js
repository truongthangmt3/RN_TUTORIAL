import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getUserInfo } from '@action';
import { SCREEN_ROUTER } from '@app/constants/Constant';
import NavigationUtil from '../navigation/NavigationUtil';
import R from '@R';
// import UpdateScreen from '../screens/UpdateScreen'
export class UserInfo extends Component {
    static propTypes = {
        prop: PropTypes
    }
    componentDidMount() {
        this.props.getUserInfo();

    }
    render() {
        return (

            //  {/* <Text> {this.props.userInfoState.data.email} </Text> */}
            <SafeAreaView style={styles.container}>
                <View style={styles.nav}>

                    <View
                        style={styles.nav_left}>
                        <Image
                            source={R.images.ic_back}
                            style={styles.img_back}
                        />

                    </View>

                    <TouchableOpacity
                        onPress={() => {
                            // NavigationUtil
                            NavigationUtil.navigate(SCREEN_ROUTER.UPDATE)
                        }}
                        style={styles.nav_right}>
                        <Text style={styles.text_nofication}>Thông tin cá nhân</Text>
                        <Image
                            source={R.images.ic_edit}
                            style={styles.image_edit}
                        />
                    </TouchableOpacity>

                </View>

                <View style={styles.body}>
                    <View style={styles.text_left}>
                        <Text>Họ tên:</Text>
                    </View>
                    <View style={styles.text_right}>
                        <Text>{this.props.userInfoState.data.fullname}</Text>

                    </View>
                </View>

                <View style={styles.body}>
                    <View style={styles.text_left}>
                        <Text>Giới tính:</Text>
                    </View>
                    <View style={styles.text_right}>
                        <Text>{this.props.userInfoState.data.sex}</Text>
                    </View>
                </View>

                <View style={styles.body}>
                    <View style={styles.text_left}>
                        <Text>Tỉnh/Thành phố:</Text>
                    </View>
                    <View style={styles.text_right}>
                        <Text>{this.props.userInfoState.data.province_id}</Text>
                    </View>
                </View>

                <View style={styles.body}>
                    <View style={styles.text_left}>
                        <Text>Địa chỉ:</Text>
                    </View>
                    <View style={styles.text_right}>
                        <Text>{this.props.userInfoState.data.address}</Text>
                    </View>
                </View>

                <View style={styles.body}>
                    <View style={styles.text_left}>
                        <Text>Email:</Text>
                    </View>
                    <View style={styles.text_right}>
                        <Text>{this.props.userInfoState.data.email}</Text>
                    </View>
                </View>

                <View style={styles.body}>
                    <View style={styles.text_left}>
                        <Text>Số điện thoại:</Text>
                    </View>
                    <View style={styles.text_right}>
                        <Text>{this.props.userInfoState.data.phoneNumber}</Text>
                    </View>
                </View>
            </SafeAreaView>
        )
    }
}

const mapStateToProps = (state) => ({
    userInfoState: state.updateReducer,
})

const mapDispatchToProps = {
    getUserInfo,

}

export default connect(mapStateToProps, mapDispatchToProps)(UserInfo)
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    nav: {
        height: 55,
        width: '100%',
        backgroundColor: '#69AAFF',
        flexDirection: 'row',
        alignItems: 'center',

    },
    nav_left: {
        height: 50,
        width: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    img_back: {
        height: 20,
        width: 10,
    },
    nav_right: {
        height: 50,
        width: '85%',
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
    },
    body: {
        flexDirection: 'row',
        backgroundColor: 'white',
        height: 50,
        width: "95%",
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomColor: '#D8D8D8',
        borderBottomWidth: 1,
        marginHorizontal: 10

    },
    text_left: {
        marginLeft: 10
    },
    text_right: {
        marginRight: 10
    },
    text_nofication: {
        flex: 1,
    },
    image_edit: {
        height: 21,
        width: 21
    }


})