
import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getUserInfo } from '@action'

export class UserScreen extends Component {

    // componentDidMount() {
    //     alert(JSON.stringify(this.props.userState))
    // }

    render() {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <Text> {JSON.stringify(this.props.userState)} </Text>

                <TouchableOpacity
                    onPress={() => {
                        this.props.getUserInfo("send data to reducer")
                    }}
                >
                    <Text>Call Action</Text>
                </TouchableOpacity>
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

export default connect(mapStateToProps, mapDispatchToProps)(UserScreen)


// Bước 1 : Kết nối Screen vs Reducer trong func mapStateToProps 
// Bước 2 : Tạo action type, và action trong file inxdex
// Bước 3 : dùng func mapDispatchToProps để khai báo action trong Screen
// Bước 4 : Gọi action và truyền tham số nếu cần
// Bước 5 : Lắng nghe action trong Reducer và cập nhật lại state