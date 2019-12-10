import React from "react";
import { View, SafeAreaView, Text, ScrollView, Dimensions} from "react-native";
import { SearchBar } from 'react-native-elements';
import CompetitionPreview from "./CompetitionPreview";

import {DEFAULT} from './../assets/style/StyleSheet';

/*
 * TEMPORARY SIMPLE IMPLEMENTATION OF A SEARCH PAGE
 * Suggested Searches: Prog, Metal, Jazz, Fusion, Producer
 * Search Bar: https://react-native-elements.github.io/react-native-elements/docs/searchbar.html
 */

export default class SearchScreen extends React.Component {
	static navigationOptions = {header: null};

	state = {
		search: '',
	};

	constructor(props) {
		super(props);
		// Shows wether the user voted for the current entry
		this.state = {search: '', competitionsToShow: []};
	}

	stringContains = (needle, heystack) => {
		return heystack.toLowerCase().indexOf(needle.toLowerCase()) >= 0;
	}

	showCompetitions = (search) => {
		this.setState({competitionsToShow: []})
		var comp;
		var result = new Set([]);
		if (search != "") {
			for (var i = 0; i < global.competitions.length; i++) {
				comp = global.competitions[i]

				if (this.stringContains(search, comp.compTitle) || 
					this.stringContains(search, comp.compDescription) || 
					this.stringContains(search, comp.host)) {
					// Add competition and move on to next iteration
					result.add(comp);
					continue;
				}

				for (var j = 0; j < comp.tags.length; j++) {
					if (this.stringContains(search, comp.tags[j])) {
						result.add(comp);
						break;
					}
				}
			}
		}
		return Array.from(result);
	}

	updateSearch = (search) => {
		var competitionsToShow = this.showCompetitions(search);
		this.setState({ search:search,  competitionsToShow: competitionsToShow});
	};

	render() {
		const { search } = this.state;

		const style = {
			inputContainerStyle: {
				backgroundColor: 'rgb(239, 239, 239)',
				height: 35,
				width: 379,
				top: 0,
				position: 'absolute',
				borderRadius: 8
			},
			inputStyle: {
				fontFamily: 'proxima-nova-regular',
				color: DEFAULT.COLOR.GRAY_1
			},
			containerStyle: {
				padding: 0,
				height: 35,
				width: 379,
				top: 4,
				borderRadius: 8,
				backgroundColor: 'transparent',
				borderBottomWidth: 0.0,
				borderTopWidth: 0.0

			},
			scrollView: {
				// backgroundColor: DEFAULT.COLOR.GRAY_1
			},
			safeView: { 
				flex: 1, 
				alignItems: 'center',
				// backgroundColor: DEFAULT.COLOR.GRAY_1
			},
			scrollView: {
				justifyContent: 'flex-start',
			},
			grayBackground: {
				height: Dimensions.get('window').height,
				width: Dimensions.get('window').width,
				backgroundColor: DEFAULT.COLOR.GRAY_1,
				alignItems: 'center',
				top: 18,
				borderRadius: 15
			}
		};
		return(
			<SafeAreaView style={style.safeView}>
				<SearchBar
				placeholder="Search"
				onChangeText={this.updateSearch}
				value={search}
				lightTheme={true}
				round
				placeholderTextColor={'rgb(117, 117, 117)'}
				inputContainerStyle={style.inputContainerStyle}
				inputStyle={style.inputStyle}
				containerStyle={style.containerStyle}
				/>
				<View style={style.grayBackground}>
					<ScrollView contentContainerStyle={style.scrollView}>
						{
							this.state.competitionsToShow.map(
								(comp, index) => {
									return <CompetitionPreview key={index} details={comp}
									navigation={this.props.navigation}/>
								}
							)
						}
					</ScrollView>
				</View>
			</SafeAreaView>
		);
	}
}
