import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import SearchScreen from './components/SearchScreen';
import MicrophoneScreen from './components/MicrophoneScreen';
import MessageScreen from './components/MessageScreen';
import HomeScreen from './components/HomeScreen';
import ProfileScreen from './components/ProfileScreen';

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