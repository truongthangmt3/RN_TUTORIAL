import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import {
  PulseIndicator,
  BallIndicator,
  BarIndicator,
  DotIndicator,
  MaterialIndicator,
  PacmanIndicator,
  SkypeIndicator,
  UIActivityIndicator,
  WaveIndicator,

} from "react-native-indicators";
export default class Loading extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <BarIndicator color="red" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textLoading: {
    fontSize: 13
  }
});
