/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import user from './app/screens/UserScreen';
import Home from './app/screens/HomeScreen';
import Notification from './app/screens/NotifiScreen';
import Care from './app/screens/CareScreen';
import update from '@screen/UpdateUserScreen';



AppRegistry.registerComponent(appName, () => App);
