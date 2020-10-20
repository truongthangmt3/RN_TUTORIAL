import React, { Component } from 'react'
import { useState } from "react"
import R from '@R';
import NavigationUtil from '@app/navigation/NavigationUtil';
import { SCREEN_ROUTER } from '@app/constants/Constant';
import { connect } from 'react-redux'
import { requestUpdateUser } from '@api'
import { getUpdateUser } from '@action'

import {
    Text, StyleSheet,
    SafeAreaView,
    View,
    Modal,
    TouchableOpacity,
    TouchableHighlight,
    Image,
    TextInput,

} from 'react-native'

class CustomTabBar extends Component {
    render() {
        return (
            <View style={styles.tabbar}>
                <TouchableOpacity
                    onPress={() => { NavigationUtil.navigate(SCREEN_ROUTER.USER) }}
                >
                    <Image
                        style={styles.ic_tabbar}
                        source={R.images.ic_backk}
                    />
                </TouchableOpacity>

                <Text
                    style={styles.txt_tabbar}
                >Cập nhật thông tin </Text>
            </View>
        )
    }
}

class UpdateUserScreen extends Component {
    state = {
        isLoading: false,
        error: null,
        data: {},
        modalVisible: false,
        userName: '',
        address: '',
        email: '',

    }


    render() {
        ///  const { current, thanhpho, texxt } = this.state

        return (
            <SafeAreaView style={styles.Container}>
                <CustomTabBar />
                <View style={styles.information}>
                    <View style={styles.info_name}>
                        <Text style={styles.txt_label}>Họ Tên (*)</Text>
                        <TextInput

                            style={styles.text_input}
                            onChangeText={newText => {
                                this.setState({
                                    userName: newText
                                });
                            }}>
                            {/* {this.props.useState.data} */}
                        </TextInput>
                    </View>
                    <View style={styles.info_name}>
                        <Text style={styles.txt_label}>Giới tính (*)</Text>

                    </View>
                    <View style={styles.info_name}>
                        <Text style={styles.txt_label}>Tỉnh/Thành Phố (*)</Text>
                        <View style={styles.choose_city}>
                            <Text style={styles.txt_label}>ha noi</Text>
                            <TouchableOpacity
                                onPress={() => {
                                    this.setState({
                                        modalVisible: true

                                    })
                                }}>
                                <Image
                                    source={R.images.icon_button}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.info_name}>
                        <Text style={styles.txt_label}>Địa chỉ (*)</Text>
                        <TextInput

                            style={styles.text_input}
                            onChangeText={newText => {
                                this.setState({
                                    address: newText
                                });
                            }}
                        />
                    </View>
                    <View style={styles.info_name}>
                        <Text style={styles.txt_label}>Email (*)</Text>
                        <TextInput
                            value={this.state.email}
                            style={styles.text_input}
                            onChangeText={newText => {
                                this.setState({
                                    email: newText
                                });
                            }}
                        />
                    </View>
                    <View style={styles.info_update}>
                        <TouchableOpacity style={styles.up_click}
                            // onPress={async () => {
                            //     this.props.getUpdateUser();

                            //     NavigationUtil.navigate(SCREEN_ROUTER.USER)
                            // }}
                            onPress={async () => {
                                try {
                                    result = await requestUpdateUser({
                                        "fullname": this.state.userName,
                                        "email": "tunf@gmail.com",
                                        "address": this.state.address
                                    })

                                    reactotron.log(result)
                                    NavigationUtil.navigate(SCREEN_ROUTER.USER)

                                } catch (error) {

                                }
                            }}
                        >
                            <Text
                                style={{
                                    color: '#ffff',
                                    fontSize: 13,
                                    fontFamily: R.fonts.roboto_bold
                                }}>CẬP NHẬT</Text>

                        </TouchableOpacity>

                    </View>

                </View>

                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={this.state.modalVisible}
                    style={
                        styles.modal
                    }

                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>

                            {/* <CustomModal
                                action={this._action}
                                city={this.state.thanhpho[current].name}
                            />
                            <CustomModal
                                action={this._action}
                                city={this.state.thanhpho[current].name}
                            />
                            <CustomModal
                                action={this._action}
                                city={this.state.thanhpho[current].name}
                            /> */}
                            <TouchableHighlight
                                style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                                onPress={() => {
                                    this.setState({
                                        modalVisible: false
                                    });
                                }}
                            >
                                <Text style={styles.textStyle}>Hide Modal</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </Modal>
            </SafeAreaView>
        )

    }
    _action = () => {
        const { current, thanhpho, texxt } = this.state
        let tmpCurrent = current;
        if (tmpCurrent < thanhpho.length - 1) {
            tmpCurrent++;
            alert(tmpCurrent)

        } else {
            tmpCurrent--;
        }
        this.setState({
            current: tmpCurrent,
        })

    }

}

class CustomModal extends Component {
    render() {
        const { action, city } = this.props

        return (
            <TouchableOpacity
                onPress={action}
            >
                <Text style={styles.modalText}>{city}</Text>

            </TouchableOpacity>
        )
    }
}


const styles = StyleSheet.create({

    Container: {
        flex: 1,

    },

    tabbar: {
        width: '100%',
        height: 55,
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#69AAFF',
        paddingLeft: 15,

    },
    ic_tabbar: {
        width: 8,
        height: 15,


    },
    txt_tabbar: {
        flex: 1,
        marginLeft: 10,
        fontSize: 20,
        color: '#ffff'
    },

    information: {
        flex: 1,

        paddingHorizontal: 8,
        paddingVertical: 10,
    },

    info_name: {
        flex: 1,
        paddingTop: 10

    },
    choose_city: {
        flex: 1,
        flexDirection: 'row',
        borderRadius: 5,
        backgroundColor: '#F5F6F8',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        alignItems: 'center',

    },
    info_update: {
        flex: 3,
        alignItems: 'center',
        justifyContent: 'center'
    },
    up_click: {
        width: 279,
        height: 42,
        backgroundColor: '#69AAFF',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        borderBottomWidth: 1,
        borderBottomColor: '#C5C5C5'
    },
    txt_label: {
        flex: 0.5,

    },
    text_input: {
        flex: 0.5,
        backgroundColor: '#F5F6F8',
        paddingLeft: 15,
        paddingVertical: 14,
        fontSize: 14,
        color: '#000000',
        borderRadius: 5,
        fontFamily: R.fonts.roboto_medium
    },

    modalView: {
        width: '100%',
        height: 300,
        marginTop: 600,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    openButton: {
        backgroundColor: "#F194FF",
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }
});

const mapStateToProps = (state) => ({
    userState: state.userReducer
})

const mapDispatchToProps = {

    getUpdateUser


}

export default connect(mapStateToProps, mapDispatchToProps)(UpdateUserScreen)