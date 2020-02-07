import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'mobx-react';
import stores from 'stores';
import App from './src/App';
import { name as appName } from './src/app.json';

const Root = () => (
  <Provider {...stores}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => Root);
