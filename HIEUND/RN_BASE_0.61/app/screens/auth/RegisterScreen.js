import React, { Component } from 'react';
import { View, Text, SafeAreaView, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Input from '@app/components/Input';
import theme from '@theme';
import R from '@R';
import { requestRegister } from "@app/constants/Api";
class RegisterScreen extends Component {
    state = {
        isLoading: false,
        error: null,
        phone: "",
        password: ""
    };
    render() {
        return (
            <SafeAreaView
                style={{
                    flex: 1,
                    alignItems: 'center',
                    backgroundColor: '#F5F6F8'
                }}
            >
                <Image source={R.images.img_res_muasi} style={{
                    height: theme.dimension.height * 0.09,
                    aspectRatio: 2.5,
                    resizeMode: 'contain',
                    marginTop: theme.dimension.height * 0.05,
                    marginBottom: theme.dimension.height * 0.03
                }} />
                <View style={styles.register_container} >
                    <Input placeholder="Số điện thoại" placeholderTextColor="#515C6F" value={this.state.phone} onChangeText={(newPhoneNumber) => {
                        this.setState({
                            phone: newPhoneNumber
                        })
                    }} />
                    <Input placeholder="Email" placeholderTextColor="#515C6F" value={this.state.password} onChangeText={(newPassword) => {
                        this.setState({
                            password: newPassword
                        })
                    }} />
                    <Input placeholder="Họ tên" placeholderTextColor="#515C6F" />
                    <Input placeholder="Tỉnh/Thành phố" placeholderTextColor="#515C6F" />
                    <Input placeholder="Mật khẩu" placeholderTextColor="#515C6F" />
                    <Input placeholder="Xác nhận mật khẩu" placeholderTextColor="#515C6F" />
                </View>
                <TouchableOpacity
                    style={{
                        width: theme.dimension.width * 0.88,
                        height: theme.dimension.height * 0.06,
                        backgroundColor: '#69AAFF',
                        borderRadius: 30,
                        marginTop: theme.dimension.height * 0.06,
                    }}
                    onPress={() => {
                        requestRegister({
                            "phone": this.state.phone,
                            "password": this.state.password,
                            "device_id": ""
                        }).then(result => {
                            alert(JSON.stringify(result));
                            NavigationUtil.navigate("user");
                            reactotron.log(result);
                        }).catch(err => {
                            reactotron.log(err);
                        });
                    }}
                >
                    <View style={{
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        flexDirection: 'row',
                        paddingTop: 8,
                        // paddingLeft:'43%'
                    }}>
                        <Text style={{ color: 'white', paddingLeft: '43%' }} >Đăng Kí</Text>
                        <Image source={R.images.img_login_button} style={{
                            resizeMode: 'contain',
                            marginRight: '3%',
                            width: theme.dimension.width * 0.08,
                            height: theme.dimension.height * 0.04,
                        }} />
                    </View>
                </TouchableOpacity>
            </SafeAreaView>
        );
    }
}
const styles = StyleSheet.create({
    register_container: {
        width: theme.dimension.width * 0.87,
        height: theme.dimension.height * 0.45,
        backgroundColor: "white",
        borderBottomColor: '#727C8E',
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
        borderBottomRightRadius: 15,
        borderBottomLeftRadius: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.5,
        shadowRadius: 5,
    }
})
export default RegisterScreen;
// value={this.state.phone} onChangeText={(newPhoneNumber) => {
//     this.setState({
//       phone: newPhoneNumber
//     })
//   }} 

// value={this.state.password} onChangeText={(newPassword) => {
//     this.setState({
//       phone: newPassword
//     })
//   }} 