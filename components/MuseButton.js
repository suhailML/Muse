import React, {Component} from "react";
import {View, Text, TouchableOpacity} from "react-native";

import {DEFAULT} from './../assets/style/StyleSheet';

class MuseButton extends Component {
	constructor(props){
		super(props);
	}

	render() {
		const style = {
			color: DEFAULT.COLOR.WHITE,
			backgroundColor: DEFAULT.COLOR.CORAL_2,
			borderRadius: 20,
			alignItems: 'center',
			justifyContent: 'center',
			height: 34,
			width: 97
		}
		return (
			<TouchableOpacity onPress = {this.props.onPress}>
			    <View style = {style}>
			        <Text style = {DEFAULT.TEXT.BUTTON}>{this.props.title}</Text>
			    </View>
			</TouchableOpacity>
		);
	}
}

export default MuseButton;
