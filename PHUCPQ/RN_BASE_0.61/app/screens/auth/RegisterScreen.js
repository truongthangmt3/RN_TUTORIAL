import { requestRegister } from '@app/constants/Api';
import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import Reactotron from 'reactotron-react-native'
class RegisterScreen extends Component {
    state = {
        isLoading: false,
        error: null,
        data: {},
        phoneNumber: "",
        password: ""
    }
    render() {
        return (
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <TextInput style={{
                    width: '80%',
                    height: 50,
                    //marginTop:10,
                    backgroundColor: "gray"
                }}
                    onChangeText={(newText) => {
                        this.setState({
                            phoneNumber: newText
                        })
                    }}
                >

                </TextInput>
                <TextInput style={{
                    width: '80%',
                    height: 50,
                    marginTop: 10,
                    backgroundColor: "gray",

                }}
                    secureTextEntry={true}
                    onChangeText={(newText) => {
                        this.setState({
                            password: newText
                        })
                    }}
                >

                </TextInput>
                <TouchableOpacity onPress={() => {
                    requestRegister({
                        "phone": this.state.phoneNumber,
                        "password": this.state.password,
                        "device_id": ""
                    }).then(result => {
                        Reactotron.log(result);
                        alert(JSON.stringify(result))
                        //NavigationUtil.navigate(SCREEN_ROUTER.MAIN)
                    }).catch(err => {
                        Reactotron.log(err);
                    })
                }}>
                    <Text>
                        Register
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default RegisterScreen;
