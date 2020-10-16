import React, { Component } from "react";
import { Text, View, Image } from "react-native";
import R from "@R";
export default class RightHeaderCustom extends Component {
  render() {
    return (
      <View>
        <Image
          source={R.images.icon_message_header}
          style={{
            width: 25,
            height: 25,
            marginRight: "3%",
            resizeMode: "contain"
          }}
        />
        <Image
          source={R.images.red_dot}
          style={{
            width: 40,
            height: 40,
            position: "absolute",
            top: 3,
            right: 2
          }}
        />
      </View>
    );
  }
}
