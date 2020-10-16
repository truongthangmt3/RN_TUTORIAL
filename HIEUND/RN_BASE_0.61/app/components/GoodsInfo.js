import React, { Component } from "react";
import { Text, View, Dimensions } from "react-native";
import CustomerInfo from "./CustomerInfo";
import Contact from "./Contact";
import R from "@R";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
export default class GoodsInfo extends Component {
  render() {
    return (
      <View
        style={{
          flexDirection: "column",
          backgroundColor: "white",
          marginTop: "2%",
          width: windowWidth,
          height: windowHeight * 0.19,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 1
          },
          shadowOpacity: 0.18,
          shadowRadius: 1.0,
          elevation: 1
        }}
      >
        <Text
          style={{
            fontSize: 16,
            fontWeight: "bold",
            marginHorizontal: "8%",
            marginVertical: "3%"
          }}
        >
          iPhone X xuất xứ Hồng Kông còn bảo hành 6 tháng
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginLeft: "8%"
          }}
        >
          <View
            style={{
              flexDirection: "column"
            }}
          >
            <CustomerInfo img={R.images.icon_phone} text="0378515518" />
            <CustomerInfo img={R.imagesicon_customer} text="Nguyễn Thị Hoa" />
          </View>
          <CustomerInfo img={R.images.icon_location} text="Toàn quốc" />
        </View>
        <View
          style={{
            flexDirection: "row",
            flex: 1,
            justifyContent: "center"
          }}
        >
          <Contact img={R.images.icon_chat} text="Chat" />
          <Contact img={R.images.icon_zalo} text="Zalo" />
          <Contact img={R.images.icon_call} text="Gọi điện" />
        </View>
      </View>
    );
  }
}
