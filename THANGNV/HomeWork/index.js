/**
 * @format
 */

import { AppRegistry } from 'react-native';
//import App from './App';
import { name as appName } from './app.json';
import giaodien from './apps/screen/giaodien.js'

AppRegistry.registerComponent(appName, () => giaodien);
