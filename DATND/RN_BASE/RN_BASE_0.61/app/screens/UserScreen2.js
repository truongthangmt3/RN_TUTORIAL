import React, { Component } from 'react'
import { View, Text, Button, TouchableOpacity, TextInput } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getincrease, getdecrease, caculation, getuser } from '@action'

class CustomInput extends Component {
    render() {
        const { onChangeText, value, placeholder, secureTextEntry } = this.props;

        return (
            <TextInput
                style={{
                    flex: 1,
                    height: 40,
                    paddingLeft: 20,

                }}
                placeholder={placeholder}
                onChangeText={onChangeText}
                value={value}
                secureTextEntry={secureTextEntry}

            />
        )
    }
}
const CACULATION = {
    PLUS: 0,
    SUBTRACT: 1,
    MULTIPLY: 2,
    DIVIDE: 3
}
export class UserScreen extends Component {
    state = {
        user: '',
        firstNumber: 0,
        secondNumber: 0,
        caculation: null
    }

    render() {
        return (
            <View
                style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center'
                }} >
                <TextInput
                    style={{
                        width: '90%',
                        height: 60,
                        backgroundColor: 'gray'
                    }}
                    onChangeText={newText => {
                        this.setState({
                            firstNumber: newText
                        });
                    }}
                />
                <TextInput
                    style={{
                        marginTop: 5,
                        width: '90%',
                        height: 60,
                        backgroundColor: 'gray'
                    }}
                    onChangeText={newText => {
                        this.setState({
                            secondNumber: newText
                        });
                    }}
                />

                {/* <TextInput
                    style={{
                        marginTop: 5,
                        width: '90%',
                        height: 60,
                        backgroundColor: 'gray'
                    }}
                    onChangeText={newText => {
                        this.setState({
                            user: newText
                        });
                    }}
                /> */}

                <TouchableOpacity
                    onPress={() => {
                        this.setState({
                            caculation: CACULATION.PLUS
                        }, () => {
                            this.props.caculation(this.state);
                        })
                    }}
                >
                    <Text>+</Text>

                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {
                        this.setState({
                            caculation: CACULATION.SUBTRACT
                        }, () => {
                            this.props.caculation(this.state);
                        })
                    }}
                >
                    <Text>-</Text>

                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {
                        this.setState({
                            caculation: CACULATION.MULTIPLY
                        }, () => {
                            this.props.caculation(this.state);
                        })
                    }}
                >
                    <Text>*</Text>

                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {
                        this.setState({
                            caculation: CACULATION.DIVIDE
                        }, () => {
                            this.props.caculation(this.state);
                        })
                    }}
                >
                    <Text>/</Text>

                </TouchableOpacity>

                <TextInput> {this.props.homeState.data} </TextInput>

                {/* <Text> user: {this.props.homeState.data} </Text>
                <Text> phone: {this.props.homeState.data} </Text>
                <Text> email: {this.props.homeState.data} </Text> */}


                {/* <TouchableOpacity
                    onPress={() => {
                        //this.props.caculation(this.state);
                        this.props.caculation(this.state);
                    }} >
                    <Text>Show</Text>

                </TouchableOpacity> */}
            </View>

            // <View
            //     style={{
            //         flex: 1,
            //         alignItems: 'center',
            //         justifyContent: 'center',
            //         flexDirection: 'row'
            //     }}>
            //     <Button
            //         title='-'
            //         onPress={() => {
            //             this.props.getdecrease();
            //         }}
            //     />
            //     <Text> {this.props.homeState.data} </Text>
            //     <Button
            //         title='+'
            //         onPress={() => {
            //             this.props.getincrease();
            //         }}
            //     />
            // </View>
        )
    }
}



const mapStateToProps = (state) => ({
    homeState: state.homeReducer
})

const mapDispatchToProps = {
    getincrease,
    getdecrease,
    caculation,
    getuser
}

export default connect(mapStateToProps, mapDispatchToProps)(UserScreen)
