import {StyleSheet} from 'react-native';
import * as Font from 'expo-font';

export const DEFAULT = {
	/* COLOR */
	/* Higher number = Lighter color */
	COLOR: {
		BLUE_1: '#304AB2', 
		BLUE_2: '#456BFF',
		BLUE_3: '#8FA6FF',
		CORAL_1: '#CC6349',
		CORAL_2: '#FF7C5C',
		CORAL_3: '#FFA38D',
		CORAL_TRANSP: 'rgba(255, 124, 92, 0.28)',
		YELLOW_1: '#D8912F',
		YELLOW_2: '#FEAB38',
		YELLOW_3: '#FEC87D',
		GRAY_1: '#282A2E',
		GRAY_2: '#333539',
		GRAY_3: '#9E9EA0',
		GRAY_4: '#C5C5C6',
		BLACK_1: '#141519',
		BLACK_TRANSP: 'rgba(22, 21, 20, 0.7)',
		WHITE: '#FFFFFF'
	},
	TEXT: {
		H1: {
			fontSize: 20,
			fontFamily: 'proxima-nova-regular'
		},
		H2: {
			fontSize: 16,
			fontFamily: 'proxima-nova-regular'
		},
		H3: {
			fontSize: 14,
			fontFamily: 'proxima-nova-bold'
		},
		BUTTON: {
			fontSize: 13,
			fontFamily: 'proxima-nova-semibold',
			color: 'white'
		},
		BODY_1: {
			fontSize: 12,
			fontFamily: 'proxima-nova-semibold'
		},
		BODY_2: {
			fontSize: 12,
			fontFamily: 'proxima-nova-regular'
		},
		CAPTION: {
			fontSize: 10,
			fontFamily: 'proxima-nova-regular'
		},
		COMP_TITLE: {
			fontSize: 18,
			fontFamily: 'proxima-nova-semibold',
			color: 'rgb(53, 53, 53)',
			position: 'absolute',
			bottom: 29,
			left: 14
		},
		COMP_HOST: {
			fontSize: 14,
			fontFamily: 'proxima-nova-regular',
			color: 'rgb(53, 53, 53)',
			position: 'absolute',
			bottom: 9,
			left: 14
		},
		TAG: {
			fontSize: 17,
			fontFamily: 'proxima-nova-bold',
			color: 'white',
		}
	}

};