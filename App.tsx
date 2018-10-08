import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import Login from './components/Login';
export default class App extends React.Component<{}, {}> {
  render() {
    return (
      <AppStack />
    );
  }
}

export const AppStack = createStackNavigator(
  {
    LoginScreen: Login,
  },
  {
    initialRouteName: "LoginScreen",
  }
);

