import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import {createBottomTabNavigator } from 'react-navigation-tabs';



class HomeScreen extends React.Component {
  render() {
    return(
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text> This is my Home screen </Text>
      </View>
    );
  }
}

class SearchScreen extends React.Component {
  render() {
    return(
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text> This is my Search screen </Text>
      </View>
    );
  }
}
class MicrophoneScreen extends React.Component {
  render() {
    return(
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text> This is my Recording screen </Text>
      </View>
    );
  }
}
class MessageScreen extends React.Component {
  render() {
    return(
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text> This is my Message screen </Text>
      </View>
    );
  }
}
class ProfileScreen extends React.Component {
  render() {
    return(
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text> This is my Profile screen </Text>
      </View>
    );
  }
}

const bottomTabNavigator = createBottomTabNavigator(
  {
    Home: HomeScreen,
    Search: SearchScreen,
    Record: MicrophoneScreen,
    Messages: MessageScreen,
    Profile: ProfileScreen,
  },
  {
    initialRouteName: 'Home'
  }
);

const AppContainer = createAppContainer(bottomTabNavigator);

export default class App extends React.Component {
  render() {
    return (
        <AppContainer />
    );
  }
}