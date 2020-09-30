import React, { Component } from 'react';
import {
  SafeAreaView
} from 'react-native';
import NotificationScreen from './src/apps/screen/notifications/NotificationScreen';
export default class App extends Component {
  render() {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: '#F5F6F8'
        }}>
        <NotificationScreen />
      </SafeAreaView>
    );
  }
}