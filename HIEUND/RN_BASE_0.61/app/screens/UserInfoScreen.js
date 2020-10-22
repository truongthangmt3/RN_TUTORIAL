import React, { Component } from 'react'
import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import NavigationUtil from '@app/navigation/NavigationUtil'
import { SCREEN_ROUTER } from '@app/constants/Constant';
import { Header } from "react-native-elements";
import CustomHeader from '@app/components/CustomHeader';
import UserInfoOptions from '@app/components/UserInfoOptions'
import { getUserInfo } from '@action'
export class UserInfoScreen extends Component {
    state = {
        name: "Chưa có",
        sex: "Chưa có",
        city: "Chưa có",
        address: "Chưa có",
        email: "Chưa có",
        phone: "Chưa có"
    }
    // componentDidMount() {
    //     alert(JSON.stringify(this.props.userState))
    // }
    render() {
        return (
            <View style={{ flex: 1 }} >
                <Header
                    containerStyle={{
                        backgroundColor: "#69AAFF",
                        justifyContent: "space-around"
                    }}
                    placement="left"
                    leftComponent={<CustomHeader text="Thông tin cá nhân" edit />}
                />
                <UserInfoOptions text="Họ tên" info={JSON.stringify(this.props.userState.data)} />
                <UserInfoOptions text="Giới tính" info={this.state.sex} />
                <UserInfoOptions text="Tỉnh/Thành phố" info={this.state.city} />
                <UserInfoOptions text="Địa chỉ" info={this.state.address} />
                <UserInfoOptions text="Email" info={this.state.email} />
                <UserInfoOptions text="Số điện thoại" info={this.state.phone} />
            </View>
        )
    }
}

const mapStateToProps = (state) => ({
    userState: state.userReducer
})

const mapDispatchToProps = {
    getUserInfo
}

export default connect(mapStateToProps, mapDispatchToProps)(UserInfoScreen)
