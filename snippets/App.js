import React, { Component } from 'react';
import { Platform, StatusBar } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import SplashScreen from 'react-native-splash-screen';
import Instabug from 'instabug-reactnative';
import Login from 'login';
import DashboardTabs from 'tab-navigation/dashboard-tabs';
import ProgressIndicator from 'progress-indicator/progress-indicator.component';

const RootNavigation = createSwitchNavigator({
  Login: {
    screen: Login,
  },
  DashboardTabs: {
    screen: DashboardTabs,
  },
});

const AppNavigator = createAppContainer(RootNavigation);

export default class App extends Component {

  componentDidMount() {
    Instabug.startWithToken('#', [Instabug.invocationEvent.shake]);
    SplashScreen.hide();
  }

  render() {
    return (
        <>
          {Platform.OS === 'ios' && <StatusBar barStyle='dark-content'/>}
          <AppNavigator/>
          <ProgressIndicator />
        </>
    );
  }
}