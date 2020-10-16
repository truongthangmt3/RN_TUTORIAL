import React, { Component } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import R from "@R";
export default class Notifications extends Component {
  render() {
    const { text, img, time, unseen,onPress} = this.props;
    return (
      <TouchableOpacity
        onPress={onPress}
        style={{
          flexDirection: "row",
          marginTop: "3%",
          marginLeft: "3%"
        }}
      >
        <Image source={img} style={{ width: 70, height: 70 }} />
        <View style={styles.noti_container}>
          <Text
            style={{
              fontSize: 17,
              marginBottom: "3%"
            }}
          >
            {text}
          </Text>
          <View
            style={{
              width: "100%",
              flexDirection: "row-reverse",
              marginLeft: "10%",
              marginBottom: "2%"
            }}
          >
            <Text
              style={{
                fontSize: 16,
                color: "#515C6F",
                marginBottom: "3%"
              }}
            >
              {time}
            </Text>
          </View>
        </View>
        {unseen && (
          <Image
            source={R.images.icon_mark}
            style={{
              position: "absolute",
              right: "6%",
              top: "35%",
              width: 10,
              height: 10
            }}
          />
        )}
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  noti_container: {
    flexWrap: "wrap",
    flex: 1,
    flexDirection: "row",
    borderBottomWidth: 0.25,
    borderBottomColor: "#727C8E",
    marginRight: "8%",
    marginLeft: "3%"
  }
});
