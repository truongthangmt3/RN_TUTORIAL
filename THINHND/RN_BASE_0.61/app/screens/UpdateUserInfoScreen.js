
import images from '@app/assets/imagesAsset';
import NavigationUtil from '@app/navigation/NavigationUtil';
import React, { Component } from 'react';
import { connect } from 'react-redux'
import {
    View,
    Text,
    Image,
    TextInput,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
} from 'react-native';
import { updateUserInfo } from '@action'

export class UpdateUserInfoScreen extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         name: "",
    //         phone: "",
    //     };
    // }
    state = {
        name: "",
        phone: "",
    };
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
                    <Image style={{
                        width: 8,
                        height: 15,
                        marginLeft: 16,
                        marginRight: 10
                    }} source={images.ic_back_white} />
                    <Text style={{ fontSize: 20, color: 'white', fontWeight: '500' }}>
                        Cập nhật thông tin
                    </Text>
                </View>

                <View style={styles.infoView}>
                    <Text style={{
                        fontSize: 14,
                        marginBottom: 7
                    }}>'Họ tên(*)'</Text>

                    <TextInput style={{
                        height: 46,
                        borderRadius: 10,
                        padding: 10,
                        backgroundColor: '#F5F6F8'

                    }}
                        onChangeText={newText => {
                            this.setState({
                                name: newText
                            });
                        }}
                        placeholder='Họ tên' />
                </View>

                <View style={styles.infoView}>
                    <Text style={{
                        fontSize: 14,
                        marginBottom: 7
                    }}>'Số điện thoại(*)'</Text>
                    <TextInput style={{
                        height: 46,
                        borderRadius: 10,
                        padding: 10,
                        backgroundColor: '#F5F6F8'

                    }}
                        onChangeText={newText => {
                            this.setState({
                                phone: newText
                            });
                        }}
                        placeholder='Số Điện Thoại' />
                </View>


                <TouchableOpacity
                    onPress={() => {
                        // alert(JSON.stringify(this.state))
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
                <Text>{JSON.stringify(this.props.updateUserState)}</Text>

            </SafeAreaView>
        );
    }
}

const infoView = (
    label,
    placeholderText
) => {
    return (
        <View style={styles.infoView}>
            <Text style={{
                fontSize: 14,
                marginBottom: 7
            }}>{label}</Text>
            <TextInput style={{
                height: 46,
                borderRadius: 10,
                padding: 10,
                backgroundColor: '#F5F6F8'
            }}
                placeholder={placeholderText} />
        </View>
    );
}

const styles = StyleSheet.create({
    infoView: {
        height: 71,
        marginVertical: 16,
        marginHorizontal: 8,
        //marginTop: 30,
        backgroundColor: 'white'
    }
});

const mapStateToProps = (state) => ({
    updateUserState: state.updateUserReducer
})

const mapDispatchToProps = {
    updateUserInfo,
}
export default connect(mapStateToProps, mapDispatchToProps)(UpdateUserInfoScreen)

