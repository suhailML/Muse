import React, {Component} from "react";
import { View, Text, Image, Button, Navigator } from "react-native";
import {createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { LinearGradient } from 'expo-linear-gradient';

import Competition from "./Competition";
import MuseButton from "./MuseButton";
import HeartSwitch from "./HeartSwitch";

import {DEFAULT} from "./../assets/style/StyleSheet";
// Meant to display a single competition
class CompetitionPreview extends Component {
	constructor(props) {
		super(props);
	}

	render() {
    const navigate = this.props.navigation.navigate;
    const height = 266;
    const width = 379;
  	const style = {
  		main: {
        marginBottom: 17.5,
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center', 
        width: width,
        height: height,
        borderRadius: 6,
        overflow: 'hidden',

  		},
      photo: {
        width: width, height: height, borderRadius: 6
      },
      linearGradient: {
        height: height - 60, 
        width: width,
        top: 0,
        alignItems: 'center', 
        position: 'absolute',
      },
      compInfo: {
        backgroundColor: DEFAULT.COLOR.WHITE,
        height: 60,
        width: width,
        position: 'absolute',
        flex: 1,
        bottom: 0
      },
      buttonWrapper: {
        position: 'absolute',
        flex: 1,
        bottom: 13,
        right: 13
      },
      tagsWrapper: {
        flex: 1,
        position: 'absolute',
        left: 13,
        bottom: 73
      },
      heartSwitchWrapper: {
        position: 'absolute',
        flex: 1,
        top: 10,
        right: 13
      }
  	};

    return(
      <View style={style.main}>
        <Image style={style.photo}source={this.props.details.photo}/>
        <LinearGradient
          colors={[DEFAULT.COLOR.CORAL_TRANSP, DEFAULT.COLOR.BLACK_TRANSP]}
          style={style.linearGradient}>
        </LinearGradient>
        <View style={style.compInfo}>
          <Text style={DEFAULT.TEXT.COMP_TITLE}>{this.props.details.compTitle}</Text>
          <Text style={DEFAULT.TEXT.COMP_HOST}>{this.props.details.host}</Text>
        </View>
        <View style={style.buttonWrapper}>
          <MuseButton
            title="ENTER"
            onPress={() => navigate('Competition', {details: this.props.details})}
          />
        </View>
        <View style={style.tagsWrapper}>
          <Text style={DEFAULT.TEXT.TAG}>{"#" + this.props.details.tags[0]}</Text>
        </View>
        <View style={style.heartSwitchWrapper}>
          <HeartSwitch/>
        </View>
      </View>
    );
  }
}

export default CompetitionPreview;
