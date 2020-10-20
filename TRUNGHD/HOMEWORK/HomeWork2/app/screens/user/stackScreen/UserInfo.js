// import images from '@app/assets/imagesAsset';
// import NavigationUtil from '@app/navigation/NavigationUtil';
// import React, { Component } from 'react';
// import {
//     View,
//     Text,
//     Image,
//     TextInput,
//     StyleSheet,
//     SafeAreaView,
//     TouchableOpacity,
// } from 'react-native';

// export default class UserInfo extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//         };
//     }




// }

// const infoView = (
//     label,
//     placeholderText
// ) => {
//     return (
//         <View style={styles.infoView}>
//             <Text style={{
//                 fontSize: 14,
//                 marginBottom: 7
//             }}>{label}</Text>
//             <TextInput style={{
//                 height: 46,
//                 borderRadius: 10,
//                 padding: 10,
//                 backgroundColor: '#F5F6F8'
//             }}
//                 placeholder={placeholderText}
//                 onChangeText={(newText) => {

//                 }}
//             />
//         </View>
//     );
// }



import React, { Component } from 'react'
import {
    View,
    Text,
    Image,
    TextInput,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
} from 'react-native';
import images from '@app/assets/imagesAsset';
import NavigationUtil from '@app/navigation/NavigationUtil';
import { SCREEN_ROUTER } from '@constant';

import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { updateUserInfo } from '@action';

export class UserInfo extends Component {

    state = {
        name: "",
        phonenumber: ""
    }

    render() {
        return (
            <SafeAreaView style={{
                flex: 1,
            }}>
                <View style={{
                    height: 56,
                    backgroundColor: '#69AAFF',
                    //justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'row',
                }}>
                    <TouchableOpacity
                        onPress={() => {

                        }}
                    >
                        <Image style={{
                            width: 8,
                            height: 15,
                            marginLeft: 16,
                            marginRight: 10
                        }} source={images.ic_back_white} />
                        <Text style={{ fontSize: 20, color: 'white', fontWeight: '500' }}>
                            Cập nhật thông tin
                    </Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.infoView}>
                    <Text style={{
                        fontSize: 14,
                        marginBottom: 7
                    }}>Name</Text>
                    <TextInput style={{
                        height: 46,
                        borderRadius: 10,
                        padding: 10,
                        backgroundColor: '#F5F6F8'
                    }}
                        placeholder="Name"
                        onChangeText={(newText) => {
                            this.setState({
                                name: newText
                            });
                        }}
                    />
                </View>

                <View style={styles.infoView}>
                    <Text style={{
                        fontSize: 14,
                        marginBottom: 7
                    }}>PhoneNumber</Text>
                    <TextInput style={{
                        height: 46,
                        borderRadius: 10,
                        padding: 10,
                        backgroundColor: '#F5F6F8'
                    }}
                        placeholder="PhoneNumber"
                        onChangeText={(newText) => {
                            this.setState({
                                phonenumber: newText
                            });
                        }}
                    />
                </View>
                <TouchableOpacity
                    onPress={() => {
                        this.props.updateUserInfo(this.state);
                    }}
                    style={{
                        height: 42,
                        alignItems: 'center',
                        marginHorizontal: 48,
                        backgroundColor: '#69AAFF',
                        justifyContent: 'center',
                        borderRadius: 10
                    }}>
                    <Text style={{
                        color: 'white', fontWeight: 'bold'
                    }}>
                        CẬP NHẬT
                    </Text>
                </TouchableOpacity>

            </SafeAreaView>
        );
    }
}



const styles = StyleSheet.create({
    infoView: {
        height: 71,
        marginVertical: 16,
        marginHorizontal: 8,
        backgroundColor: 'white'
    }
})

const mapStateToProps = (state) => ({
    updateState: state.updateReducer
})

const mapDispatchToProps = {
    updateUserInfo
}

export default connect(mapStateToProps, mapDispatchToProps)(UserInfo)
