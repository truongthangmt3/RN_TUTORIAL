import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { getHome, calculation, getProduct } from '@action';

const CALCULATION = {
    PLUS: 0,
    SUBTRACT: 1,
    MULTIPLY: 2,
    DIVIDE: 3
};

export class HomeScreen extends Component {
    state = {
        firstNumber: 0,
        secondNumber: 0,
        calculation: CALCULATION.PLUS
    };
    componentDidMount() {
        this.props.getProduct();
    }
    render() {
        return (
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignContent: 'center'
            }}>
                <TextInput
                    style={{
                        width: '90%',
                        height: 60,
                        backgroundColor: 'gray'
                    }}
                    onChangeText={(newText) => {
                        this.setState({
                            firstNumber: newText
                        });
                    }}>

                </TextInput>
                <TextInput style={{
                    marginTop: 5,
                    width: '90%',
                    height: 60,
                    backgroundColor: 'gray'
                }}
                    onChangeText={(newText) => {
                        this.setState({
                            secondNumber: newText
                        });
                    }}>

                </TextInput>
                <TextInput>
                    {this.props.userState.data}
                </TextInput>
                <TouchableOpacity onPress={() => {
                    this.props.calculation(
                        this.state
                    );
                }}>
                    <Text>
                        Cộng
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    this.props.calculation(
                        this.state
                    );
                }}>
                    <Text>
                        trừ
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    this.props.calculation(
                        this.state
                    );
                }}>
                    <Text>
                        Nhân
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    this.props.calculation(
                        this.state
                    );
                }}>
                    <Text>
                        Chia
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const mapStateToProps = (state) => ({
    userState: state.homeReducer
});

const mapDispatchToProps = {
    getHome,
    calculation,
    getProduct
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
