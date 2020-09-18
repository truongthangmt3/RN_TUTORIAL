import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

export default class CustomButtons extends Component {
  render() {
    const {img, title, isWarning, action} = this.props;
    return (
      <TouchableOpacity
        onPress={() => {
          action();
        }}>
        <View style={styles.action_block}>
          <Image source={img} style={styles.imagePro} />
          <Text style={styles.textBlock}>{title}</Text>
          {isWarning ? (
            <View style={styles.isWarning}>
              <Text style={{color: 'white', fontWeight: 'bold'}}>!</Text>
            </View>
          ) : null}
        </View>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  action_block: {
    height: 40,
    width: 110,
    marginLeft: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e4e5ea',
    borderRadius: 40,
    padding: 3,
  },
  imagePro: {width: 20, height: 20, marginHorizontal: 4},
  textBlock: {fontWeight: 'bold', padding: 5, fontSize: 16},
  isWarning: {
    width: 20,
    height: 20,
    backgroundColor: 'red',
    borderRadius: 10,
    position: 'absolute',
    right: -5,
    top: -5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
