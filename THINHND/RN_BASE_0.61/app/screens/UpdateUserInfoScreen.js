import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import NavigationUtil from '@app/navigation/NavigationUtil';
import { SCREEN_ROUTER } from '@app/constants/Constant';
import { Header } from 'react-native-elements';
import CustomHeader from '@app/components/CustomHeader';
import UpdateUserInfoOptions from '@app/components/UpdateUserInfoOptions';
import { getUserInfoAction } from '@action';
import * as API from '@api';
export class UpdateUserInfoScreen extends Component {
    state = this.props.navigation.getParam('data');

    componentDidMount() {
        // alert(JSON.stringify(this.state));
    }
    render() {
        const { phone, fullname, email, address } = this.state
        return (
            <View style={{ flex: 1 }}>
                <Header
                    containerStyle={{
                        backgroundColor: '#69AAFF',
                        justifyContent: 'space-around'
                    }}
                    placement="left"
                    leftComponent={<CustomHeader text="Cập nhật thông tin" />}
                />
                <UpdateUserInfoOptions
                    text="Họ tên"
                    value={fullname}
                    onChangeText={newText => {
                        this.setState({
                            fullname: newText
                        });
                    }}
                />
                <UpdateUserInfoOptions
                    text="Giới tính"
                    onChangeText={newText => {
                        this.setState({
                            sex: newText
                        });
                    }}
                />
                <UpdateUserInfoOptions
                    text="Tỉnh/Thành phố"
                    onChangeText={newText => {
                        this.setState({
                            city: newText
                        });
                    }}
                />
                <UpdateUserInfoOptions
                    value={address}
                    text="Địa chỉ"
                    onChangeText={newText => {
                        this.setState({
                            address: newText
                        });
                    }}
                />
                <UpdateUserInfoOptions
                    value={email}
                    text="Email"
                    onChangeText={newText => {
                        this.setState({
                            email: newText
                        });
                    }}
                />
                <UpdateUserInfoOptions
                    value={phone}
                    text="Số điện thoại"
                    onChangeText={newText => {
                        this.setState({
                            phone: newText
                        });
                    }}
                />
                <TouchableOpacity
                    style={styles.updateButton}
                    onPress={async () => {
                        try {
                            await API.updateUser(this.state);
                            NavigationUtil.goBack();
                            this.props.getUserInfoAction();
                        } catch (error) {
                            // alert(error.message);
                        }
                    }}
                >
                    <Text style={{ color: 'white' }}>Cập nhật</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    updateButton: {
        backgroundColor: '#69AAFF',
        width: '75%',
        height: 48,
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 50,
        marginTop: 80
    }
});
const mapStateToProps = state => ({});

const mapDispatchToProps = {
    getUserInfoAction
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UpdateUserInfoScreen);
