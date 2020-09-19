import React, {Component} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import mockData from '.././mockData.json';
import axios from 'axios';
import Loading from '../src/components/Loading';

export default class HomeScreen extends Component {
  state = {
    isLoading: true,
    isError: false,
    data: {},
  };
  componentDidMount = async () => {
    // goi api va cho du lieu tra ve
    //cach co dien
    // fetch('http://3.0.209.176/api/GetHome')
    //   .then((response) => response.json())
    //   .then((res) => {
    //     alert(JSON.stringify(res));
    //   });
    //cach hien dai tu ES6 dung async va await (thay doi ham thanh async)
    try {
      const response = await axios.get('http://3.0.209.176/api/GetHome');
      const jsonResponse = response.data;
      // alert(JSON.stringify(jsonResponse));
      this.setState({
        isLoading: true,
        isError: false,
        data: jsonResponse.data.listpost,
      });
    } catch (error) {
      this.setState({
        isLoading: false,
        isError: true,
        data: {},
      });
    }
  };
  // componentDidMount() {
  //   // setTimeout(() => {
  //   this.setState({
  //     isLoading: false,
  //     isError: false,
  //     data: mockData.homeData.data.listpost,
  //   });
  //   // }, 500);
  // }
  render() {
    const {isLoading, isError, data} = this.state;
    if (isLoading) {
      return (
        // <View style={styles.container}>
        //   <ActivityIndicator color="red" />
        // </View>
        <Loading />
      );
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
        <FlatList
          // horizontal={true}
          style={styles.list_post}
          data={this.state.data}
          renderItem={({item, index}) => {
            return <Text>{item.namekey}</Text>;
          }}
        />
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
  },
  list_post: {
    flex: 1,
    backgroundColor: 'purple',
  },
});
