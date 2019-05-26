import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
//screens
import WelcomeScreen from './src/components/WelcomeScreen';
import LoginScreen from './src/components/LoginScreen';
import SignUpScreen from './src/components/SignUpScreen';
import DrawerNavigator from './src/components/DrawerNavigator';

export default class App extends React.Component {
  render() {
    return (
      <AppContainer />
    );
  }
}

const AppStackNavigator = createStackNavigator({
  WelcomeScreen: {screen: WelcomeScreen},
  LoginScreen: {screen: LoginScreen},
  SignUpScreen: {screen: SignUpScreen},
  DrawerNavigator: {screen: DrawerNavigator}
},{
  navigationOptions:{
    gesturesEnabled:false,
  }
})

const AppContainer = createAppContainer(AppStackNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
