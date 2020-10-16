// import React, { Component } from 'react'
// import {
//     View,
//     Text,
//     TouchableOpacity,
//     TextInput
// } from 'react-native'
// import PropTypes from 'prop-types'
// import { connect } from 'react-redux'
// import { getUserInfoAction } from '@action';

// export class UserScreen extends Component {

//     render() {
//         return (



//             <View></View>


//             // <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//             //     <TextInput

//             //         style={{ width: '100%', height: 30, backgroundColor: 'red' }}
//             //         onChangeText={(textnew) => {
//             //             this.setState({
//             //                 phone: textnew
//             //             })
//             //         }}

//             //     />

//             //     <TouchableOpacity
//             //         onPress={(name) => {
//             //             const result = this.state.phone

//             //             this.setState({
//             //                 name: result
//             //             })
//             //         }}
//             //     >
//             //         <Text>show</Text>
//             //     </TouchableOpacity>

//             //     <Text>{this.state.name}</Text>
//             // </View>

//         )
//     }
// }

// const mapStateToProps = (state) => ({
//     userState: state.userReducer

// })

// const mapDispatchToProps = {
//     getUserInfoAction

// }

// export default connect(mapStateToProps, mapDispatchToProps)(UserScreen)




// // Bước 1 : Kết nối Screen vs Reducer trong func mapStateToProps 
// // Bước 2 : Tạo action type, và action trong file inxdex
// // Bước 3 : dùng func mapDispatchToProps để khai báo action trong Screen
// // Bước 4 : Gọi action và truyền tham số nếu cần
// // Bước 5 : Lắng nghe action trong Reducer và cập nhật lại state 




















import React, { Component } from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    Alert,
    SafeAreaView,
    Image,
    StyleSheet
} from 'react-native';
import i18 from '@i18';
import theme from '@theme'
import R from '@R'
import NavigationUtil from '@app/navigation/NavigationUtil';
import { SCREEN_ROUTER } from '@app/constants/Constant';
import DropdownAlertUtil from '@app/components/DropdownAlertUtil';
import OneSignal from "react-native-onesignal";
import reactotron from 'reactotron-react-native';
import AwsomeFont from '../components/Icon'
import WHeader from '@app/components/WHeader'
import AsyncStorage from '@react-native-community/async-storage';
import { connect } from 'react-redux'
import { getuser } from '@action'



class UserScreen extends Component {


    render() {
        return (
            <SafeAreaView style={styles.Container}>
                <View style={styles.infomation}>
                    <View style={styles.user_img}>
                        <Image source={R.images.ic_user} style={styles.icUser} />
                    </View>

                    <View style={styles.user_PN}>
                        <Text style={styles.user_name}>{this.props.homeState.data}</Text>
                        <Text style={styles.user_phone}>0945666456</Text>
                        <TouchableOpacity style={styles.user_edit}
                            onPress={() => {
                                NavigationUtil.navigate(SCREEN_ROUTER.UPDATE_USER_INFO)
                            }}
                        >
                            <Text
                                style={{
                                    color: '#4D4D4D',
                                    fontSize: 12
                                }}>Chỉnh Sửa</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.body_item}>
                    <CustomItems
                        icon={R.images.ic_recipe}
                        title="Tin Mua Của Ban"
                        ic_next={R.images.ic_arrow}
                        ishorizontal={true} />

                    <CustomItems
                        icon={R.images.ic_recipe}
                        title="Thông tin cá nhân"
                        ic_next={R.images.ic_arrow}
                        ishorizontal={true} />

                    <CustomItems
                        icon={R.images.ic_list}
                        title="Danh mục của tôi"
                        ic_next={R.images.ic_arrow}
                        ishorizontal={true} />
                    <CustomItems
                        icon={R.images.Ic_feather_lock}
                        title="Đổi mật khẩu"
                        ic_next={R.images.ic_arrow}
                        ishorizontal={true} />
                    <CustomItems
                        icon={R.images.ic_log_out}
                        title="Đăng xuất"
                        action={this._fslogout} />
                </View>
            </SafeAreaView>

        )
    }
    _fslogout = async () => {
        await AsyncStorage.setItem("token", "")
        NavigationUtil.navigate(SCREEN_ROUTER.LOGIN)
    }
};



class CustomItems extends Component {
    render() {
        const { icon, title, ic_next, ishorizontal, action } = this.props
        return (

            <View style={styles.Contai_items}>

                <TouchableOpacity style={styles.item_body}
                    onPress={action}>
                    <View style={styles.item_icon}>
                        <Image
                            style={styles.icon}
                            source={icon} />
                    </View>

                    <View style={styles.item_title}>
                        <Text style={styles.title}>{title}</Text>
                    </View>
                    <View style={styles.item_ic_next}>
                        <Image
                            style={styles.next}
                            source={ic_next} />
                    </View>

                </TouchableOpacity>

                {ishorizontal ? <View style={styles.ishozital}></View> : null}

            </View>
        );
    }
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: '#F5F6F8'

    },

    infomation: {
        flex: 2,
        flexDirection: 'row',
        backgroundColor: 'white',
        paddingHorizontal: 20,
        alignItems: 'center',

    },

    user_img: {
        width: 100,
        height: 100,
        paddingTop: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    user_PN: {
        flex: 1,

        paddingHorizontal: 20,
    },
    user_name: {
        fontSize: 21,
        color: '#515C6F'
    },
    user_phone: {
        fontSize: 15,
        color: '#515C6F',
        marginTop: 6
    },
    user_edit: {
        width: 121,
        height: 30,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#727C8E',
        borderRadius: 20,
        marginTop: 11
    },
    body_item: {
        marginTop: 8,
        flex: 8,
        // backgroundColor: 'red'
    },

    Contai_items: {
        width: '100%',
        height: 55,
        flexDirection: 'column',

        // backgroundColor: 'pink'
    },

    item_body: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 21,
        paddingRight: 15,
    },
    item_icon: {


    },
    icon: {
        width: 13.83,
        height: 19
    },
    item_title: {
        flex: 1,
        paddingLeft: 22,

    },
    title: {
        fontSize: 15,
        fontFamily: (R.fonts.roboto_blackitalic)
    },
    ic_next: {

    },
    next: {
        width: 18,
        height: 18,

    },

    ishozital: {
        marginLeft: 50,
        width: '83%',
        height: 1,
        backgroundColor: '#727C8E',
        opacity: 0.2,

    }

})

const mapStateToProps = (state) => ({
    homeState: state.homeReducer
})

const mapDispatchToProps = {

    getuser


}

export default connect(mapStateToProps, mapDispatchToProps)(UserScreen)