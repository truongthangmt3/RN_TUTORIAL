import React, { Component } from 'react';
import { Text, StyleSheet, View, Platform } from 'react-native';
import theme, { colors } from '../utils/Theme';
import { BarIndicator } from 'react-native-indicators';
import R from '../assets/R';

export default class LoadingProgress extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.containerLoading}>
          <BarIndicator color={colors.primary} />
          <Text
            style={{
              color: colors.text.primary
            }}
          >
            {R.strings().loading_progress}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    elevation: Platform.OS == 'android' ? 4 : 0
  },
  containerLoading: {
    height: 140,
    backgroundColor: 'white',
    padding: 30,
    borderRadius: 10
  }
});
