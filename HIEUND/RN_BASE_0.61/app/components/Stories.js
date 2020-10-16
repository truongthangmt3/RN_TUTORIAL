import React, {Component} from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

export default class Stories extends Component {
  render() {
    const {isAddStory, img, name} = this.props;
    return (
      <View style={styles.storiesContainer}>
        {isAddStory ? (
          <View>
            <Image source={img} style={styles.addStory} />
          </View>
        ) : (
          <View style={styles.stories}>
            <Image source={img} style={styles.imageStories} />
          </View>
        )}
        <Text style={styles.nameStories}>{name}</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  storiesContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 15,
  },
  addStory: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginHorizontal: 6,
  },
  imageStories: {
    width: 56,
    height: 56,
    borderRadius: 28,
  },
  stories: {
    width: 68,
    height: 68,
    borderWidth: 3,
    borderColor: '#976AFF',
    borderRadius: 34,
    marginHorizontal: 7,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
