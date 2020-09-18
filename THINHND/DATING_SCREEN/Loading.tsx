import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import * as Indicators from "react-native-indicators";
export default class Loading extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Indicators.BallIndicator color="#00f" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textLoading: {
    fontSize: 13
  }
});
