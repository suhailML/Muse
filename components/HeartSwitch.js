import React, {Component} from "react";
import {View, Text, TouchableOpacity} from "react-native";
import {Ionicons} from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable'; 
import Icon from 'react-native-vector-icons/AntDesign';

import {DEFAULT} from './../assets/style/StyleSheet';

const AnimatedIcon = Animatable.createAnimatableComponent(Icon);


// Entirely Based off-of https://snack.expo.io/@karniej/cGhvdG
class HeartSwitch extends Component {
	constructor(props){
		super(props);

		this.state = {
			liked: false
		};

		this.lastPress = 0
	}

	handleSmallAnimatedIconRef = (ref) => {
		this.smallAnimatedIcon = ref;
	}

	animateIcon = () => {
		const { liked } = this.state
		this.largeAnimatedIcon.stopAnimation()

		if (liked) {
			this.smallAnimatedIcon.pulse(200);
		} else {
			this.largeAnimatedIcon.bounceOut()
				.then(() => {
					if (!liked) {
						this.setState(prevState => ({ liked: !prevState.liked }));
					}
				});
		}
	}

	handleOnPress = () => {
		const time = new Date().getTime();
		const delta = time - this.lastPress;
		const doublePressDelay = 400;

		if (delta < doublePressDelay) {
			this.animateIcon();
		}
		this.lastPress = time;
	}

	handleOnPressLike = () => {
		this.smallAnimatedIcon.bounceIn();
		this.setState(prevState => ({ liked: !prevState.liked }));
	}

	render() {
		const { liked } = this.state;
		return (
			<TouchableOpacity
				activeOpacity={1}
				onPress={this.handleOnPressLike}
			>
				<AnimatedIcon
					ref={this.handleSmallAnimatedIconRef}
					name={liked ? 'heart' : 'hearto'}
					color={liked ? "white" : "white"}
					size={28}
					style={{
						justifyContent: 'center',
						alignItems: 'center'
					}}
				/>
			</TouchableOpacity>
		);
	}
}

export default HeartSwitch;