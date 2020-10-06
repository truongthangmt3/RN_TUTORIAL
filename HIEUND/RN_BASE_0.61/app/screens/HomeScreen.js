import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  ScrollView,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  FlatList
} from "react-native";
import { requestHomeData } from "@api";
import Loading from "@component/Loading";
import ProvinceDropdown from "@component/ProvinceDropdown";
import Headers from "@component/Headers";
import Information from "@component/Information";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
export default class HomeScreen extends Component {
  state = {
    isLoading: true,
    isError: false,
    name: "",
    data: {}
  };
  componentDidMount = async () => {
    try {
      const response = await requestHomeData();
      const jsonResponse = response.data;
      this.setState({
        isLoading: false,
        isError: false,
        data: jsonResponse
      });
    } catch (error) {
      this.setState({
        isLoading: false,
        isError: true,
        data: {}
      });
    }
  };
  render() {
    const { isLoading, isError, data, name } = this.state;
    if (isLoading) {
      return <Loading />;
    }
    if (isError) {
      return (
        <View style={styles.container}>
          <Text>FAILED</Text>
        </View>
      );
    }
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView style={{ backgroundColor: "#F4F7F8" }}>
          <ImageBackground
            source={require("../assets/header.jpg")}
            style={{
              width: windowWidth,
              height: windowHeight * 0.28
            }}
          >
            <Text
              style={{
                fontSize: 25,
                color: "white",
                marginTop: "5%",
                marginLeft: "3%"
              }}
            >
              Tôi muốn mua sỉ
            </Text>
            <View style={styles.header}>
              <TextInput
                style={styles.text_input}
                placeholder="Danh mục sản phẩm"
                value={name}
                onChangeText={text => this.setState({ name: text })}
              />
              <ProvinceDropdown />
            </View>
            <Text
              style={{
                fontSize: 14,
                marginLeft: "4%",
                color: "white",
                marginBottom: "5%"
              }}
            >
              Để tìm kiếm khách hàng được tốt nhất bạn nên đăng ký đúng danh mục
              sản phẩm !
            </Text>
            <TouchableOpacity style={styles.add_news}>
              <Text style={{ color: "white" }}>Đăng tin</Text>
            </TouchableOpacity>
          </ImageBackground>
          <Headers text="Từ khoá tìm kiếm" />
          <FlatList
            style={styles.list_post}
            data={this.state.data.listpost}
            renderItem={({ item, index }) => {
              return (
                <View style={styles.items}>
                  <Text style={{ fontSize: 16 }}>{"#" + item.namekey}</Text>
                </View>
              );
            }}
            contentContainerStyle={{
              flexDirection: "row",
              flexWrap: "wrap"
            }}
          />
          <Headers text="Danh mục sản phẩm cần mua" all />
          <FlatList
            data={this.state.data.listpost}
            renderItem={({ item, index }) => {
              return (
                <Information
                  goods={item.namekey}
                  name={item.username}
                  phoneNumber={item.phone}
                  location={item.address}
                  time={item.created_date}
                />
              );
            }}
          />
        </ScrollView>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#69AAFF"
  },
  add_news: {
    borderColor: "red",
    width: windowWidth * 0.35,
    height: windowHeight * 0.05,
    marginHorizontal: "35%",
    borderRadius: 30,
    backgroundColor: "#69AAFF",
    justifyContent: "center",
    alignItems: "center"
  },
  list_post: {
    marginVertical: "3%",
    backgroundColor: "white"
  },
  header: {
    flexDirection: "row",
    marginVertical: 10,
    marginHorizontal: 5,
    justifyContent: "space-between"
  },
  text_input: {
    borderWidth: 0.3,
    height: windowHeight * 0.05,
    width: "70%",
    borderRadius: 30,
    marginHorizontal: "1%",
    backgroundColor: "white",
    paddingHorizontal: 10
  },
  items: {
    borderWidth: 0.5,
    borderRadius: 7,
    borderColor: "black",
    marginLeft: 10,
    height: windowHeight * 0.04,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 5,
    marginVertical: 5
  }
});
