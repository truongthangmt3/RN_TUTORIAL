import { SCREEN_ROUTER } from '@app/constants/Constant'
import NavigationUtil from '@app/navigation/NavigationUtil'
import React, { Component } from 'react'
import { UpdateUser } from '@api'
import { Text, TouchableOpacity, View, StyleSheet, TextInput } from 'react-native'
import { connect } from 'react-redux'
import { getUserInfo } from '@action'

export class UpdateUserinfoScreen extends Component {
    state = {
        isLoading: false,
        error: null,
        data: {},
        fullname: null,
        email: null,
        province_id: null,
        sex: null,
        address: null
    }
    render() {
        const action = this.props.navigation.getParam("action")
        return (
            <View>
                <Text style={styles.txt}>
                    Họ tên(*)
                </Text>
                <TextInput
                    onChangeText={(newText) => {
                        this.setState({
                            fullname: newText
                        })
                    }}
                    style={styles.txt_input}>
                    {this.props.userState.data.fullname}
                </TextInput>
                <Text style={styles.txt}>
                    Giới tính(*)
                </Text>
                <TextInput
                    onChangeText={(newText) => {
                        this.setState({
                            sex: newText
                        })
                    }}
                    style={styles.txt_input}>
                    {this.props.userState.data.sex}
                </TextInput>
                <Text style={styles.txt}>
                    Tỉnh/Thành phố(*)
                </Text>
                <TextInput
                    onChangeText={(newText) => {
                        this.setState({
                            province_id: newText
                        })
                    }}
                    style={styles.txt_input}>
                    {this.props.userState.data.province_id}
                </TextInput>
                <Text style={styles.txt}>
                    Địa chỉ(*)
                </Text>
                <TextInput
                    onChangeText={(newText) => {
                        this.setState({
                            address: newText
                        })
                    }}
                    style={styles.txt_input}>
                    {this.props.userState.data.address}
                </TextInput>
                <Text style={styles.txt}>
                    Email
                </Text>
                <TextInput
                    onChangeText={(newText) => {
                        this.setState({
                            email: newText
                        })
                    }}
                    style={styles.txt_input}>
                    {this.props.userState.data.email}
                </TextInput>
                <TouchableOpacity
                    onPress={async () => {
                        try {
                            const result = await UpdateUser({
                                "fullname": this.state.fullname,
                                "email": this.state.email,
                                "province_id": this.state.province_id,
                                "sex": this.state.sex,
                                "address": this.state.address,
                            })
                            NavigationUtil.goBack();
                        } catch (error) {
                            alert(JSON.stringify(result))
                        }

                    }}>
                    <Text> CẬP NHẬT </Text>
                </TouchableOpacity>

            </View>
        )
    }
}
const styles = StyleSheet.create({
    txt: {
        fontSize: 14,
    },
    txt_input: {
        backgroundColor: '#F5F6F8'
    }
})
const mapStateToProps = (state) => ({
    userState: state.userReducer
})

const mapDispatchToProps = {
    getUserInfo
}

export default connect(mapStateToProps, mapDispatchToProps)(UpdateUserinfoScreen)