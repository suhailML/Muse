import React, {Component} from "react";
import {View, Image} from 'react-native';


export default class NavigationIcon extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const imgStyle = {
			tintColor: this.props.tintColor,
			marginTop: 15,
			height: 24,
			width: 24,
			resizeMode: 'contain'
		};
		return(
		<View>
			<Image style={imgStyle} source={this.props.img}/>
		</View>
		);
	}
}
