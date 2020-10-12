import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import R from "@R";

export default class FlatListItem extends Component {
  _func_getshortname = text => {
    if (text == null) {
      return <Text>?</Text>;
    } else {
      var shortname = text.charAt(0);
      for (let i = text.length; i > 0; i--) {
        if (text.charAt(i) == " ") {
          shortname += text.charAt(i + 1).toUpperCase();
          return shortname;
        }
      }
    }
  };

  _func_getname = text => {
    if (text == null) {
      return <Text>Chưa cập nhật</Text>;
    } else {
      return text;
    }
  };

  render() {
    const { Namekey, Username, Province, Phone, Modified_date } = this.props;

    return (
      <TouchableOpacity
        onPress={() => {}}
        style={{
          backgroundColor: "white",
          height: 100,
          marginBottom: 7
        }}
      >
        <Text
          style={{
            marginVertical: 15,
            marginHorizontal: 10,
            fontSize: 15,
            fontWeight: "200"
          }}
        >
          {Namekey}
        </Text>

        <View
          style={{
            flexDirection: "row"
          }}
        >
          <View
            style={{
              width: 40,
              height: 40,
              borderRadius: 20,
              marginLeft: 21,
              marginRight: 11,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#B7E6E6"
            }}
          >
            <Text
              style={{
                color: "black",
                fontSize: 12,
                fontWeight: "bold"
              }}
            >
              {this._func_getshortname(Username)}
            </Text>
          </View>

          <View
            style={{
              flex: 1,
              flexDirection: "column",
              alignSelf: "flex-end",
              marginRight: 11
            }}
          >
            <Text
              style={{
                fontSize: 14,
                fontWeight: "300",
                marginBottom: 4
              }}
            >
              {this._func_getname(Username)}
            </Text>
            <Text
              style={{
                fontSize: 12,
                fontWeight: "300"
              }}
            >
              {Phone}
            </Text>
          </View>

          <View
            style={{
              flex: 1,
              marginRight: 20,
              alignSelf: "flex-end"
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignSelf: "flex-end"
              }}
            >
              <Image
                style={{
                  resizeMode: "contain",
                  width: 12,
                  height: 12,
                  marginRight: 5,
                  marginBottom: 4
                }}
                source={R.images.ic_home}
              />
              <Text
                style={{
                  fontSize: 12,
                  marginBottom: 4,
                  fontWeight: "200"
                }}
              >
                {Province}
              </Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                alignSelf: "flex-end",
                alignItems: "center"
              }}
            >
              <Image
                style={{
                  resizeMode: "contain",
                  marginRight: 5,
                  width: 12,
                  height: 12
                }}
                source={R.images.ic_home}
              />
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: "200"
                }}
              >
                {Modified_date}
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}
