import React, { Component } from 'react';
import { Text, View, TouchableOpacity, TextInput, StyleSheet, Dimensions } from 'react-native';
import {
  getINCREMENTAL, getDECREMENTAL, getSQUARE, getSQRT, getRESET, plus,
  subtract,
  multiply,
  divide
} from '@action';
import Input from '@app/components/Input'
import { connect } from 'react-redux'
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const CALCULATION = {
  PLUS: 0,
  SUBTRACT: 1,
  MULTIPLY: 2,
  DIVIDE: 3
};
class MessageScreen extends Component {
  state = {
    firstNumber: 0,
    secondNumber: 0,
    plus: CALCULATION.PLUS,
    subtract: CALCULATION.SUBTRACT,
    multiply: CALCULATION.MULTIPLY,
    divide: CALCULATION.DIVIDE
  };
  render() {
    return (
      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <Text>{JSON.stringify(this.props.messageReducer.data)}</Text>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          width: '100%'
        }} >
          <TouchableOpacity
            style={styles.button}
            onPress={() => { this.props.getDECREMENTAL() }} >
            <Text>DECREMENT</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => { this.props.getINCREMENTAL() }}>
            <Text>INCREMENT</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => { this.props.getSQUARE() }}>
            <Text>SQUARE</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => { this.props.getSQRT() }}>
            <Text>SQRT</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => { this.props.getRESET() }}>
          <Text>RESET</Text>
        </TouchableOpacity>
        <View style={{ marginTop: 50 }}>
          <TextInput
            style={styles.text_input}
            placeholder="Nhập a"
            onChangeText={newText => {
              this.setState({
                firstNumber: newText
              });
            }}
          />
          <TextInput
            style={styles.text_input}
            placeholder="Nhập b"
            onChangeText={newText => {
              this.setState({
                firstNumber: newText
              });
            }}
          />
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => { this.props.plus() }} >
              <Text>PLUS</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => { }} >
              <Text>SUBTRACT</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => { }} >
              <Text>MULTIPLE</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => { }} >
              <Text>DIVIDE</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Text>{this.props.messageReducer.data}</Text>
      </View>
    );
  }
}
const mapStateToProps = (state) => ({
  messageReducer: state.messageReducer
})

const mapDispatchToProps = {
  getINCREMENTAL,
  getDECREMENTAL,
  getSQUARE,
  getSQRT,
  getRESET,
  plus,
  subtract,
  multiply,
  divide,
}
const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    height: 30,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30
  },
  text_input: {
    borderWidth: 0.3,
    height: 50,
    width: windowWidth - 50,
    borderRadius: 30,
    marginHorizontal: "1%",
    backgroundColor: "white",
    paddingHorizontal: 10,
    marginBottom: 20
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MessageScreen)