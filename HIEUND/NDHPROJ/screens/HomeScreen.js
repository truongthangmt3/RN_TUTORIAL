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

export default class HomeScreen extends Component {
  state = {
    isLoading: true,
    isError: false,
    data: {},
  };
  componentDidMount() {
    // setTimeout(() => {
    this.setState({
      isLoading: false,
      isError: false,
      data: mockData.homeData.data.listpost,
    });
    // }, 500);
  }
  render() {
    const {isLoading, isError, data} = this.state;
    if (isLoading) {
      return (
        <View style={styles.container}>
          <ActivityIndicator color="red" />
        </View>
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
