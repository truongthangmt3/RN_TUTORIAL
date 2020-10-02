import React, {Component} from 'react';
import {View, Text, SafeAreaView} from 'react-native';

class MyList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <SafeAreaView>
        <Text> MyList </Text>
      </SafeAreaView>
    );
  }
}

export default MyList;
