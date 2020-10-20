import React, { Component } from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getCalculationInfoAction } from '@action';

const CALCULATION = {
    PLUS: 0,
    SUBTRACT: 1,
    MULTIPLY: 2,
    DIVIDE: 3
};
export class CareScreen extends Component {
    state = {
        firstNumber: 0,
        secondNumber: 0,
        calculation: null
    };

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <TextInput
                    style={{ height: 50, width: 350, backgroundColor: '#F8E0E6' }}
                    onChangeText={newText => {
                        this.setState({
                            firstNumber: newText
                        });
                    }}>
                </TextInput>

                <TextInput
                    style={{ marginTop: 10, height: 50, width: 350, backgroundColor: '#F8E0E6' }}
                    onChangeText={newText => {
                        this.setState({
                            secondNumber: newText
                        });
                    }}>

                </TextInput>
                <TextInput
                    style={{ marginTop: 10 }}
                > {this.props.careState.data} </TextInput>

                <View style={{ flexDirection: 'row' }}>
                    {/* + */}
                    <TouchableOpacity
                        style={styles.container}
                        onPress={() => {
                            this.setState({ calculation: CALCULATION.PLUS });
                        }}>
                        <Text>+</Text>
                    </TouchableOpacity>

                    {/* - */}
                    <TouchableOpacity
                        style={styles.container}
                        onPress={() => {
                            this.setState({ calculation: CALCULATION.SUBTRACT });
                        }}>
                        <Text>-</Text>
                    </TouchableOpacity>
                    {/* * */}
                    <TouchableOpacity
                        style={styles.container}
                        onPress={() => {
                            this.setState({ calculation: CALCULATION.MULTIPLY });
                        }}>
                        <Text>*</Text>
                    </TouchableOpacity>

                    {/* / */}
                    <TouchableOpacity
                        style={styles.container}
                        onPress={() => {
                            this.setState({ calculation: CALCULATION.DIVIDE });
                        }}>
                        <Text>/</Text>
                    </TouchableOpacity>
                    {/* Tinh */}

                </View>
                <TouchableOpacity
                    style={styles.container}
                    onPress={() => {
                        this.props.getCalculationInfoAction(this.state);
                    }}>
                    <Text>Tinh</Text>
                </TouchableOpacity>

            </View>
        )
    }
}

const mapStateToProps = (state) => ({
    careState: state.careReducer,
})

const mapDispatchToProps = {
    getCalculationInfoAction,
}

export default connect(mapStateToProps, mapDispatchToProps)(CareScreen)
const styles = StyleSheet.create({
    container: {
        width: 30,
        height: 30,
        backgroundColor: '#F8E0E6',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 5,
        marginTop: 10
    }
})