import { requestRegister } from '@app/constants/Api';
import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, SafeAreaView } from 'react-native';
import Reactotron from 'reactotron-react-native'
import image from '@app/assets/imagesAsset'
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
            <SafeAreaView style={{
                flex: 1,
                backgroundColor: '#F3F3F3'
            }}>
                <Image
                    style={styles.ic_back}
                    source={image.ic_back}>
                </Image>
                <Image
                    style={styles.img_logo}
                    source={image.img_Asset}>
                </Image>

                <View style={{
                    flex: 0.55,
                    backgroundColor: '#F3F3F3',
                    width: "90%",
                    marginLeft: 20,
                    borderRadius: 10,
                    elevation: 10,
                    marginTop: 40,
                }}>
                    <Image style={styles.ic_back}
                        source={image.ic_show}>

                    </Image>
                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    img_logo: {
        height: 100,
        width: "100%",
        resizeMode: 'contain',
        backgroundColor: 'green'
    },
    ic_back: {
        height: 18,
        width: 20,
        resizeMode: 'contain',
        marginLeft: 5,
        marginTop: 10
    }
})
export default RegisterScreen;
