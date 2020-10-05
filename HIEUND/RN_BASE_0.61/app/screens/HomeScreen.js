import React, { Component } from "react";
import { View, Text } from "react-native";
import { requestHomeData } from "@api";
import Loading from "@component/Loading";
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
        isLoading: true,
        isError: false,
        data: jsonResponse.data
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
  }
}
