import React, {Component} from "react";
import { View, Text} from "react-native";
import {DEFAULT} from './../assets/style/StyleSheet';

export default class NavigationTitle extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const style = {
			color: this.props.tintColor,
			paddingTop: 5,
			fontFamily: this.props.focused ? 'proxima-nova-semibold': 'proxima-nova-regular',
			fontSize: this.props.focused ? 12 : 11,
			alignItems: 'center',
			justifyContent: 'flex-end',
			bottom: 0,
			position: 'absolute',
		};
		return(
			<View style={{width: 55, height: 17, alignItems: 'center', marginTop: 5}}>
				<Text style={style}>{this.props.title}</Text>
			</View>
		);
	}
}