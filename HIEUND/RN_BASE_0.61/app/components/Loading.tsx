import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { PulseIndicator,WaveIndicator } from "react-native-indicators";
export default class Loading extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <WaveIndicator color="#00f" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textLoading: {
    fontSize: 13
  }
});
