import { createStackNavigator } from 'react-navigation-stack';
import Login from './login.component.js';

export default createStackNavigator({
  Home: {
    screen: Login,
    navigationOptions: {
      header: null,
    },
  },
});
