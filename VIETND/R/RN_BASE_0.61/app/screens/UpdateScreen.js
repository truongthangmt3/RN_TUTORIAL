import React, { Component, useState } from 'react'
import { Text, SafeAreaView, StyleSheet, ScrollView, View, Image, TextInput, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import R from '@R';
import reactotron from 'reactotron-react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { updateRegister } from '@api';
import { getUserInfo } from '@action';
import { SCREEN_ROUTER } from '@constant'
import NavigationUtil from '../navigation/NavigationUtil';

export class UpdateScreen extends Component {
    state = {
        isLoading: false,
        error: null,
        data: {},
        fullname: "",
        email: "",
        province_id: "",
        sex: "",
        address: ""
    }


    render() {
        return (

            <SafeAreaView SafeAreaView >
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

                <ScrollView>
                    <View style={styles.container}>
                        <View>
                            <Image
                                source={R.images.ic_logo}
                                style={styles.logo}
                            />
                        </View>

                        <View style={styles.herder}>
                            {/* 
                            <View style={styles.herder_tk}>
                                <Text style={styles.inputTitle}>Số điện thoại</Text>
                                <TextInput
                                    style={styles.text_herder}
                                />
                            </View> */}
                            <View style={styles.herder_email}>
                                <Text style={styles.inputTitle}>Name</Text>
                                <TextInput
                                    style={styles.text_herder}
                                    onChangeText={newText => {

                                        this.setState({
                                            fullname: newText

                                        })

                                    }}

                                />
                            </View>

                            <View style={styles.herder_email}>
                                <Text style={styles.inputTitle}>Email</Text>
                                <TextInput
                                    style={styles.text_herder}
                                    onChangeText={newText => {
                                        this.setState({
                                            email: newText
                                        })

                                    }}
                                />
                            </View>

                            <View style={styles.herder_email}>
                                <Text style={styles.inputTitle}>Province</Text>
                                <TextInput
                                    style={styles.text_herder}
                                    onChangeText={newText => {
                                        this.setState({
                                            province_id: newText
                                        })

                                    }}
                                />
                            </View>

                            {/* <View style={styles.herder_email}>
                            
                                <View style={{ flexDirection: 'row', marginTop: 15 }}>
                                    <Text style={styles.inputTitle}>Tính/Thành phố</Text>
                                    
                                    <Image
                                        source={R.images.ic_dow}
                                        style={{ marginTop: 15, marginRight: 10, width: 16, height: 13 }}
                                    />
                                    
                                </View>

                                <TextInput
                                    style={styles.text_herder}
                                />
                            </View> */}

                            <View style={styles.herder_pass}>
                                <Text style={styles.inputTitle}>Sex</Text>
                                <TextInput style={styles.text_herder}
                                    onChangeText={newText => {
                                        this.setState({
                                            sex: newText
                                        })

                                    }}
                                />
                            </View>
                            <View style={styles.herder_XD_pass}>
                                <Text style={styles.inputTitle}>Address</Text>
                                <TextInput style={styles.text_herder}
                                    onChangeText={newText => {
                                        this.setState({
                                            address: newText
                                        })

                                    }}
                                />
                            </View>



                        </View>
                        <TouchableOpacity
                            onPress={async () => {
                                // this.props.getUserInfo();
                                try {
                                    result = await updateRegister({
                                        "fullname": this.state.fullname,
                                        "email": this.state.email,
                                        "province_id": this.state.province_id,
                                        "sex": this.state.sex,
                                        "address": this.state.address,
                                    })
                                    NavigationUtil.navigate(SCREEN_ROUTER.UPDATEUSERINFO)
                                } catch (error) {
                                    alert(error.message)
                                }
                                this.props.getUserInfo();
                            }}
                            style={styles.button_title}>
                            <Text style={styles.button_text} >Cập nhật</Text>
                            <View style={styles.button_next}>
                                <Image
                                    source={R.images.ic_path}
                                    style={styles.img_next}
                                />

                            </View>
                        </TouchableOpacity>

                    </View>


                </ScrollView>
            </SafeAreaView>
        );
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {
    getUserInfo
}

export default connect(mapStateToProps, mapDispatchToProps)(UpdateScreen)
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
        alignItems: 'center',
        // marginHorizontal: '50'
    },
    logo: {
        width: 313,
        height: 126,
        marginHorizontal: 50,
        marginTop: 10
    },
    herder: {
        width: 350,
        height: 340,
        marginTop: 20,
        marginHorizontal: 20,
        borderRadius: 18,
        backgroundColor: '#fff',
        shadowColor: '#D8D8D8',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 1,
        shadowRadius: 15,
    },
    herder_tk: {
        height: 65,
        borderColor: '#fff',
        borderWidth: 1,
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
        borderBottomColor: '#D8D8D8',
        borderBottomWidth: 1,
    },
    herder_email: {
        height: 65,
        borderColor: '#fff',
        borderWidth: 1,
        borderBottomColor: '#D8D8D8',
        borderBottomWidth: 1,
    },
    inputTitle: {
        color: '#A4A4A4',
        marginTop: 10,
        marginLeft: 10,
        flex: 1,
    },
    text_herder: {
        marginTop: 15,
        marginLeft: 20
    },

    herder_pass: {
        height: 65,
        borderColor: '#fff',
        borderWidth: 1,
        borderBottomColor: '#D8D8D8',
        borderBottomWidth: 1,


    },
    herder_XD_pass: {
        height: 65,
        borderColor: '#fff',
        borderWidth: 1,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
    },



    button_title: {
        marginTop: 80,
        backgroundColor: '#69AAFF',
        height: 55,
        borderRadius: 30,
        alignItems: 'center',
        textAlign: 'center',
        flexDirection: 'row',
        marginHorizontal: 30
    },
    button_text: {
        flex: 1,
        textAlign: 'center',
    },
    button_next: {
        height: 40,
        width: 40,
        backgroundColor: '#fff',
        borderRadius: 20,
        marginRight: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    img_next: {
        width: 10,
        height: 16,
    },

    image_edit: {
        height: 21,
        width: 21
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
    text_left: {
        marginLeft: 10
    },
    text_right: {
        marginRight: 10
    },
    text_nofication: {
        flex: 1,
    },
});
