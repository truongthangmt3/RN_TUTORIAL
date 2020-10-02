/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import AppCopy from './AppCopy';
import { name as appName } from './app.json';

import HomeScreen from './src/sceens/HomeScreen'
import DatingScreen from './src/sceens/DatingScreen'
import HookHomeScreen from './src/sceens/HookHomeScreen'
import Login from './src/sceens/LoginScreen'
AppRegistry.registerComponent(appName, () => App);
