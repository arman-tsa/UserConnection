/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import MainStack from './src/Navigation/MainStack/MainStack';


AppRegistry.registerComponent(appName, () => MainStack);
