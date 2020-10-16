import React, { Component } from "react";
import { Text, View, Image } from "react-native";
import { ActionSheetCustom as ActionSheet } from "react-native-actionsheet";
import R from "@R";
import { TouchableOpacity } from "react-native";
const options = ["Cancel", "Toàn quốc", "Hà Nội", "Đà Nẵng", "TP Hồ Chí Minh"];
const title = (
  <Text style={{ color: "black", fontSize: 18 }}>Chọn Tỉnh/Thành phố</Text>
);
const CANCEL_INDEX = 0;
const DESTRUCTIVE_INDEX = 0;
export default class ProvinceDropdown extends Component {
  state = {
    selected: 1
  };
  showActionSheet = () => this.actionSheet.show();
  getActionSheetRef = ref => (this.actionSheet = ref);
  handlePress = index => this.setState({ selected: index });
  render() {
    const { selected } = this.state;
    const selectedText = options[selected];
    return (
      <TouchableOpacity
        style={{
          backgroundColor: "white",
          justifyContent: "space-around",
          alignItems: "center",
          width: "28%",
          marginRight: "1%",
          borderRadius: 30,
          flexDirection: "row",
          paddingHorizontal: "3%"
        }}
        onPress={this.showActionSheet}
      >
        <Text style={{ fontSize: 15 }} numberOfLines={1}>
          {selectedText}
        </Text>
        <ActionSheet
          ref={this.getActionSheetRef}
          title={title}
          options={options}
          cancelButtonIndex={CANCEL_INDEX}
          destructiveButtonIndex={DESTRUCTIVE_INDEX}
          onPress={this.handlePress}
        />
        <Image
          source={R.images.down_arrow}
          style={{ marginLeft: "5%", width: 13, height: 13 }}
        />
      </TouchableOpacity>
    );
  }
}
