import React, {Component} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import mockData from '../../mockData.json';

class HomeScreen extends Component {
  state = {
    isLoading: true,
    isError: false,
    data: {},
  };

  componentDidMount() {
    //setTimeout(() => {
    this.setState({
      isLoading: false,
      isError: false,
      data: mockData.homeData.data.listpost,
    });
    //setTimeout }, 2000);
  }

  render() {
    const {data, isLoading, isError} = this.state;
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
          <Text>is Error</Text>
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
  },

  list_post: {
    flex: 1,
    backgroundColor: 'blue',
  },
});

export default HomeScreen;
