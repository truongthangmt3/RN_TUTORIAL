import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { increase, reduction, multiply, share } from '@action';

export class HomeScreen extends Component {
    render() {
        return (
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignContent: 'center'
            }}>
                <TextInput style={{ backgroundColor: 'pink' }}>

                </TextInput>
                <TextInput style={{ backgroundColor: 'red' }}>

                </TextInput>
                <Text>
                    Kết quả :
                    {this.props.userState.data}  </Text>
                <TouchableOpacity onPress={() => {
                    this.props.increase();
                }}>
                    <Text>
                        Cộng
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    this.props.reduction();
                }}>
                    <Text>
                        Trừ
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    this.props.multiply();
                }}>
                    <Text>
                        Nhân
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    this.props.share();
                }}>
                    <Text>
                        Chia
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const mapStateToProps = (state) => ({
    userState: state.homeReducer
});

const mapDispatchToProps = {
    increase,
    reduction,
    multiply,
    share
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
