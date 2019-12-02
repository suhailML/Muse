import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';

import SearchScreen from './components/SearchScreen';
import MicrophoneScreen from './components/MicrophoneScreen';
import MessageScreen from './components/MessageScreen';
import HomeScreen from './components/HomeScreen';
import ProfileScreen from './components/ProfileScreen';
import Competition from './components/Competition';

export const HomeNavigator = createStackNavigator(
  {
    CompetitionFeed: {screen: HomeScreen},
    Competition: {screen: Competition}
  }
);

/* HARD-CODED TEST DATA HANDLER BEGIN */
global.competitions = require("./test_data.json").competitions;
global.competitions[0].photo = require("./assets/test_photos/503jam.jpg");
global.competitions[1].photo = require("./assets/test_photos/plini.jpg");
global.competitions[2].photo = require("./assets/test_photos/ableton.png");
global.competitions[3].photo = require("./assets/test_photos/tosin.jpg");
global.competitions[4].photo = require("./assets/test_photos/roy.jpg");
/* HARD-CODED TEST DATA HANDLER END */


const bottomTabNavigator = createBottomTabNavigator(
  {
    Home: HomeNavigator,
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