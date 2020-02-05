import {
  AppRegistry,
} from 'react-native';

import App from './src/App';

//Note ChatApp is derived from the application name in the package.json configuration file. Line 2.
AppRegistry.registerComponent('ChatApp', () => App);
