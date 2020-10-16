import React, { Component } from 'react';
import { Text, View, TouchableOpacity, TextInput, StyleSheet, Dimensions } from 'react-native';
import { getINCREMENTAL, getDECREMENTAL, getSQUARE, getSQRT, getRESET } from '@action';
import Input from '@app/components/Input'
import { connect } from 'react-redux'
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
class MessageScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>{JSON.stringify(this.props.messageReducer.data)}</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', width: '100%' }} >
          <TouchableOpacity onPress={() => { this.props.getDECREMENTAL() }} >
            <Text>DECREMENT</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => { this.props.getINCREMENTAL() }}>
            <Text>INCREMENT</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => { this.props.getSQUARE() }}>
            <Text>SQUARE</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => { this.props.getSQRT() }}>
            <Text>SQRT</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => { this.props.getRESET() }}>
          <Text>RESET</Text>
        </TouchableOpacity>
        <TextInput
          style={styles.text_input}
          placeholder="Nhập a"
        // onChangeText={text => this.setState({ name: text })}
        />
        <TextInput
          style={styles.text_input}
          placeholder="Nhập a"
        // onChangeText={text => this.setState({ name: text })}
        />
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
  getRESET
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#69AAFF"
  },
  add_news: {
    borderColor: "red",
    width: windowWidth * 0.35,
    height: windowHeight * 0.05,
    marginHorizontal: "35%",
    borderRadius: 30,
    backgroundColor: "#69AAFF",
    justifyContent: "center",
    alignItems: "center"
  },
  list_post: {
    // marginVertical: "3%"
    backgroundColor: "white"
  },
  header: {
    flexDirection: "row",
    marginVertical: 10,
    marginHorizontal: 5,
    justifyContent: "space-between"
  },
  text_input: {
    borderWidth: 0.3,
    height: windowHeight * 0.05,
    width: "30%",
    borderRadius: 30,
    marginHorizontal: "1%",
    backgroundColor: "white",
    paddingHorizontal: 10
  },
  items: {
    borderWidth: 0.5,
    borderRadius: 7,
    borderColor: "black",
    marginLeft: 10,
    height: windowHeight * 0.04,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 5,
    marginVertical: 5
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(MessageScreen)