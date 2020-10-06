import React, { Component } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
  Dimensions
} from "react-native";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
import R from "@R";
export default class UserOptions extends Component {
  render() {
    const { img, label, logout } = this.props;
    return (
      <TouchableOpacity style={styles.optionsContainer}>
        <Image
          source={img}
          style={{
            // width: windowWidth * 0.04,
            // height: windowHeight * 0.017,
            resizeMode: "contain",
            width: 20,
            height: 20
          }}
        />
        <View style={styles.options}>
          <Text
            style={{
              fontSize: 15,
              //   paddingRight: '55%',
              justifyContent: "space-between",
              color: "#727C8E"
            }}
          >
            {label}
          </Text>
          <Image
            source={R.images.icon_arrow}
            style={{
              width: windowWidth * 0.043,
              height: windowHeight * 0.02
            }}
          />
        </View>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  optionsContainer: {
    flexDirection: "row",
    marginLeft: windowWidth * 0.05,
    marginTop: "3%",
    paddingBottom: "4%"
  },
  options: {
    flex: 1,
    flexDirection: "row",
    borderBottomWidth: 1,
    marginHorizontal: "5%",
    paddingBottom: "5%",
    borderBottomColor: "#727C8E",
    justifyContent: "space-between"
  }
});
