import React from "react";
import { View, SafeAreaView, Text, ScrollView} from "react-native";
import { SearchBar } from 'react-native-elements';
import CompetitionPreview from "./CompetitionPreview";

/*
 * TEMPORARY SIMPLE IMPLEMENTATION OF A SEARCH PAGE
 * Suggested Searches: Prog, Metal, Jazz, Fusion, Producer
 * Search Bar: https://react-native-elements.github.io/react-native-elements/docs/searchbar.html
 */

export default class SearchScreen extends React.Component {
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

		return(
			<SafeAreaView style={{flex: 1}}>
				{/*<Text> This is my Search screen </Text>*/}
				<SearchBar
				placeholder="Search for competitions..."
				onChangeText={this.updateSearch}
				value={search}
				lightTheme={true}
				/>
				<View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
					<Text>
						{this.state.competitionsToShow.length == 0 ? "Search to see competitions here!": ""}
					</Text>	
				</View>
				<ScrollView>
					{
						this.state.competitionsToShow.map(
							(comp, index) => {
								return <CompetitionPreview key={index} details={comp}
								navigation={this.props.navigation}/>
							}
						)
					}
				</ScrollView>
			</SafeAreaView>
		);
	}
}
