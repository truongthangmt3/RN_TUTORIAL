/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  StatusBar,
  TextInput
} from 'react-native';
import Login from './screens/Login';
import Login1 from './screens/Login1';
import Register from './screens/Register.js';
import HomeScreen from './screens/HomeScreen';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';



class App extends Component {

  render() {
    return (
      < Login />
    );
  }
};
const AppNavigator = createStackNavigator({
  login: Login,
  login1: Login1,
  register: Register,
  homeScreen: HomeScreen
}
  //  {
  //   headerMode: 'none',
)

export default createAppContainer(AppNavigator);



// const App = () => {
//   return (
//     < Login />
//   );
// };

// const styles = StyleSheet.create({
// container: {
//   backgroundColor: '#fff',
//   flex: 1,
//   alignItems: 'center',
// },
// logo: {
//   width: 313,
//   height: 126,
//   marginHorizontal: 50,
//   marginTop: 50
// },
// herder: {
//   width: 350,
//   height: 130,
//   marginTop: 50,
//   marginHorizontal: 20,
//   borderRadius: 18,
//   backgroundColor: '#fff',
//   shadowColor: '#D8D8D8',
//   shadowOffset: { width: 0, height: 5 },
//   shadowOpacity: 1,
//   shadowRadius: 15,
// },
// herder_tk: {
//   height: 65,
//   borderColor: '#fff',
//   borderWidth: 1,
//   borderTopRightRadius: 15,
//   borderTopLeftRadius: 15,
//   borderBottomColor: '#D8D8D8',
//   borderBottomWidth: 1,
// },
// inputTitle: {
//   color: '#A4A4A4',
//   marginTop: 10,
//   marginLeft: 10
// },
// text_herder: {
//   marginTop: 15,
//   marginLeft: 20
// },

// herder_pass: {
//   height: 65,
//   borderColor: '#fff',
//   borderWidth: 1,
//   borderBottomLeftRadius: 15,
//   borderBottomRightRadius: 15
// },
// forget: {
//   borderBottomColor: 'black',
//   borderBottomWidth: 0.5,
//   width: 110,
//   marginLeft: 240
// },
// forget_pass: {
//   marginTop: 10,
//   color: '#A4A4A4',
//   textAlign: 'center',

// },
// button_background: {
//   height: 70,
//   marginTop: 100
// },
// button_title: {
//   marginTop: 5,
//   backgroundColor: '#D8D8D8',
//   height: 60,
//   borderRadius: 30,
//   alignItems: 'center',
//   textAlign: 'center',
//   flexDirection: 'row'
// },
// button_text: {
//   flex: 1,
//   textAlign: 'center',
// },
// button_next: {
//   height: 40,
//   width: 40,
//   backgroundColor: '#fff',
//   borderRadius: 20,
//   marginRight: 10,
//   alignItems: 'center',
//   justifyContent: 'center'
// },
// img_next: {
//   width: 10,
//   height: 16,
// },
// footer: {
//   marginTop: 10,
//   alignItems: 'center'
// },
// text_register: {
//   color: 'red'
// }
// });

// export default App;
