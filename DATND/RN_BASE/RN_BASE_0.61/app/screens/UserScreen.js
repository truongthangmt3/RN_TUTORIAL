import React, { Component } from "react";
import {
    Text,
    View,
    TouchableOpacity,
    SafeAreaView,
    Dimensions,
    Image
} from "react-native";
import { Avatar, Accessory } from "react-native-elements";
import UserOptions from "@component/CustomUser";
import AsyncStorage from '@react-native-community/async-storage';
import NavigationUtil from '../navigation/NavigationUtil';
import R from "@R";
import reactotron from 'reactotron-react-native';
import { connect } from 'react-redux'
import { getUpdateUser } from '@action'
import { requestUserInfo } from '@api'
import { SCREEN_ROUTER } from '@app/constants/Constant';

const windowWidth = Dimensions.get("window").width; //414
const windowHeight = Dimensions.get("window").height; //896
export class UserScreen extends Component {
    // state = {
    //   isLoading: true,
    //   isError:false,
    // };
    // componentDidMount = async () => {
    //   try {
    //     this.setState(
    //       {
    //         isLoading: false,
    //         isError: false,
    //       },
    //     );
    //   } catch (error) {
    //     this.setState({
    //       isLoading: false,
    //       isError: true,
    //     });
    //   }
    // };
    // componentDidMount() {
    //     alert(JSON.stringify(this.props.userState))
    // }
    state = {
        isLoading: true,
        isError: false,
        data: {},
    }
    componentDidMount = async () => {
        try {
            const response = await requestUserInfo()
            const jsonResponse = response.data
            this.setState({
                isLoading: false,
                isError: false,
                data: jsonResponse
            }, () => {
                reactotron.log("API", jsonResponse)
            })
        } catch (error) {
            reactotron.log(error)
            this.setState({
                isLoading: false,
                isError: true,
                data: {}
            })
        }


    }
    render() {
        // const { isLoading, isError} = this.state;
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: "#69AAFF" }}>
                <View style={{ flex: 1, backgroundColor: "#F5F6F8" }}>
                    <View
                        style={{
                            flexDirection: "row",
                            backgroundColor: "#FFFFFF",
                            shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 1
                            },
                            shadowOpacity: 0.16,
                            shadowRadius: 1.0,
                            elevation: 1
                        }}
                    >
                        <View
                            style={{
                                marginLeft: windowWidth * 0.05,
                                marginTop: windowHeight * 0.02,
                                marginBottom: windowHeight * 0.025
                            }}
                        >
                            <Avatar
                                size={120}
                                titleStyle={{
                                    fontSize: 36,
                                    color: "#B8CB85",
                                    fontWeight: "bold"
                                }}
                                rounded
                                title="VN"
                                overlayContainerStyle={{
                                    backgroundColor: "#E2E6B7"
                                }}
                                activeOpacity={0.7}
                            />
                        </View>
                        <View
                            style={{
                                flexDirection: "column",
                                marginLeft: "5%",
                                marginTop: "8%"
                            }}
                        >
                            <Text
                                style={{
                                    fontSize: 21,
                                    fontWeight: "bold",
                                    marginBottom: "5%"
                                }}>
                                {this.state.data.fullname}
                            </Text>
                            <Text style={{ fontSize: 15, marginBottom: "10%" }}>
                                039741253</Text>
                            <TouchableOpacity
                                onPress={() => {
                                    NavigationUtil.navigate(SCREEN_ROUTER.UPDATE_USER_INFO)

                                }}
                                style={{
                                    width: windowWidth * 0.3,
                                    height: windowHeight * 0.033,
                                    borderWidth: 1,
                                    borderColor: "#727C8E",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    borderRadius: 24
                                }}
                            >
                                <Text>Chỉnh sửa</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View
                        style={{
                            backgroundColor: "white",
                            marginTop: windowHeight * 0.007
                        }}
                    >
                        <UserOptions label="Tin mua của bạn" img={R.images.icon_buynews} />
                        <UserOptions label="Thông tin cá nhân" img={R.images.icon_user} />
                        <UserOptions
                            label="Danh mục của tôi"
                            img={R.images.icon_awesome_list_ul}
                        />
                        <UserOptions
                            label="Đổi mật khẩu"
                            img={R.images.icon_feather_lock}
                        />
                        <UserOptions label="Hướng dẫn sử dụng" img={R.images.icon_recipe} />
                        <UserOptions label="Đăng xuất" img={R.images.icon_log_out} onPress={
                            async () => {
                                await AsyncStorage.setItem("token", "")
                                NavigationUtil.navigate(SCREEN_ROUTER.LOGIN)
                            }} />
                    </View>
                </View>
            </SafeAreaView>
        );
    }
}
const mapStateToProps = (state) => ({
    userState: state.userReducer
})

const mapDispatchToProps = {
    getUpdateUser
}

export default connect(mapStateToProps, mapDispatchToProps)(UserScreen)