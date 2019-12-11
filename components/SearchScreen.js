import React from "react";
import { View, SafeAreaView, Text, ScrollView, Dimensions, Switch} from "react-native";
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
		this.state = {search: '', competitionsToShow: [], showClosed: true};
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

	showClosedHandler = (value) =>{
		this.setState({showClosed: value});
	}

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
			safeView: { 
				flex: 1, 
				alignItems: 'center',
			},
			scrollView: {
				justifyContent: 'flex-start',
			},
			grayBackground: {
				height: Dimensions.get('window').height,
				width: Dimensions.get('window').width,
				backgroundColor: DEFAULT.COLOR.GRAY_1,
				alignItems: 'center',
				paddingTop: 9,
				borderRadius: 15
			},
			topView: {
				width: Dimensions.get('window').width,
				height: 86,
				backgroundColor: 'transparent',
				flexDirection: 'row',
				justifyContent: 'space-between',
				alignItems: 'center',
				paddingLeft: 15,
				paddingRight: 15
			},
			title: {
				fontSize: 26,
				fontFamily: 'proxima-nova-semibold',
				color: 'rgba(0, 0, 0, 0.85)'
			},
			emptyMessage: {
				fontSize: 26,
				fontFamily: 'proxima-nova-semibold',
				position: "absolute",
				top: 300,
				color: 'white'
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
				<View style={style.topView}>
					<Text style={style.title}>Tournaments</Text>
					<Switch
						value={this.state.showClosed} 
      					onValueChange={(val) => {this.showClosedHandler(val)}}
					/>
				</View>
				<View style={style.grayBackground}>
					{
						(this.state.competitionsToShow.length == 0) ? 
						<Text style={style.emptyMessage}>Search to see competitions!</Text>
						:null
					}
					<ScrollView contentContainerStyle={style.scrollView}>
						{
							this.state.competitionsToShow.map(
								(comp, index) => {
									if (this.state.showClosed || comp.open) {
										return <CompetitionPreview key={index} details={comp}
										navigation={this.props.navigation}/>
									}
								}
							)
						} 
					</ScrollView>
				</View>
			</SafeAreaView>
		);
	}
}
