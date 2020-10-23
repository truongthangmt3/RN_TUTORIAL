import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { BarIndicator } from "react-native-indicators";
export default class Loading extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <BarIndicator color="#00f" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textLoading: {
    fontSize: 13
  }
});
