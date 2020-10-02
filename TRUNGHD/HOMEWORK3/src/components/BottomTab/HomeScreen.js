import React, {Component} from 'react';
import {View, Text, SafeAreaView} from 'react-native';

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <SafeAreaView>
        <Text> HomeScreen </Text>
      </SafeAreaView>
    );
  }
}

export default HomeScreen;
