import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

class CustomBlockHeader extends Component {
  render() {
    const {text} = this.props;
    return (
      <View style={styles.v_blockheader}>
        <Text style={styles.t_blockheader}>{text}</Text>
      </View>
    );
  }
}

export default CustomBlockHeader;
const styles = StyleSheet.create({
  v_blockheader: {
    backgroundColor: '#69AAFF',
    justifyContent: 'center',
    height: 55,
    padding: 10,
  },
  t_blockheader: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: 10,
  },
});
