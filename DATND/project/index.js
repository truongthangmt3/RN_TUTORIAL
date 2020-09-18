/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

import HomeScreen from './src/sceens/HomeScreen'

AppRegistry.registerComponent(appName, () => HomeScreen);