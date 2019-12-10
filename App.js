import React from 'react';
import {StyleSheet, Text, View, Dimensions, Image} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import * as Font from 'expo-font';

import SearchScreen from './components/SearchScreen';
import MicrophoneScreen from './components/MicrophoneScreen';
import MessageScreen from './components/MessageScreen';
import HomeScreen from './components/HomeScreen';
import ProfileScreen from './components/ProfileScreen';
import Competition from './components/Competition';
import NavigationIcon from './components/NavigationIcon';
import NavigationTitle from './components/NavigationTitle';


import {DEFAULT} from './assets/style/StyleSheet';

/* HARD-CODED TEST DATA HANDLER BEGIN */
global.competitions = require("./test_data.json").competitions;
global.competitions[0].photo = require("./assets/test_photos/503jam.jpg");
global.competitions[1].photo = require("./assets/test_photos/plini.jpg");
global.competitions[2].photo = require("./assets/test_photos/ableton.png");
global.competitions[3].photo = require("./assets/test_photos/tosin.jpg");
global.competitions[4].photo = require("./assets/test_photos/roy.jpg");
/* HARD-CODED TEST DATA HANDLER END */


export const HomeNavigator = createStackNavigator(
  {
    CompetitionFeed: {screen: HomeScreen},
    Competition: {screen: Competition}
  }
);

export const SearchNavigator = createStackNavigator(
  {
    SearchFeed: {screen: SearchScreen},
    Competition: {screen: Competition}
  }
);

const bottomTabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeNavigator,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => {
          return <NavigationIcon tintColor={tintColor} img={require('./assets/icons/home.png')}/>
        },
        showIcon: true,
        tabBarLabel: ({tintColor, focused}) => {
          return <NavigationTitle title={"Home"} tintColor={tintColor} focused={focused}/>
        },
        header: null
      }
    },
    Search: {
      screen: SearchNavigator,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => {
          return <NavigationIcon tintColor={tintColor} img={require('./assets/icons/search.png')}/>
        },
        showIcon: true,
        tabBarLabel: ({tintColor, focused}) => {
          return <NavigationTitle title={"Search"} tintColor={tintColor} focused={focused}/>
        },
        header: null
      }
    },
    Record: {
      screen: MicrophoneScreen,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => {
          return <NavigationIcon tintColor={tintColor} img={require('./assets/icons/record.png')}/>
        },
        showIcon: true,
        tabBarLabel: ({tintColor, focused}) => {
          return <NavigationTitle title={"Record"} tintColor={tintColor} focused={focused}/>
        },
        header: null
      }
    },
    Messages: {
      screen: MessageScreen,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => {
          return <NavigationIcon tintColor={tintColor} img={require('./assets/icons/message.png')}/>
        },
        showIcon: true,
        tabBarLabel: ({tintColor, focused}) => {
          return <NavigationTitle title={"Messages"} tintColor={tintColor} focused={focused}/>
        },
        header: null
      }
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => {
          return <NavigationIcon tintColor={tintColor} img={require('./assets/icons/profile.png')}/>
        },
        showIcon: true,
        tabBarLabel: ({tintColor, focused}) => {
          return <NavigationTitle title={"Profile"} tintColor={tintColor} focused={focused}/>
        },
        header: null
      }
    }
  },
  {
    initialRouteName: 'Home',
    tabBarOptions: {
      style: {
        backgroundColor: '#000000',
        height: 53
      },
      activeTintColor: DEFAULT.COLOR.CORAL_2,
      inactiveTintColor: DEFAULT.COLOR.WHITE,
    }
  }
);


const AppContainer = createAppContainer(bottomTabNavigator);

export default class App extends React.Component {
  state = {
      assetsLoaded: false,
  };

  async componentDidMount() {
    await Font.loadAsync(
      {
        'proxima-nova-regular': 
          require('./assets/fonts/ProximaNova/ProximaNova-Regular.otf'),
        'proxima-nova-bold': 
          require('./assets/fonts/ProximaNova/ProximaNovaBold.otf'),
        'proxima-nova-semibold': 
          require('./assets/fonts/ProximaNova/ProximaNovaSemibold.otf'),
      }
    );

    this.setState({ assetsLoaded: true });
  }

  render() {
    if (this.state.assetsLoaded) {
      return (
          <AppContainer />
      );
    } else {
      return null;
    }
  }
}