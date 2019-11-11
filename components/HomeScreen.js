import React, {Component} from "react";
import {ScrollView, SafeAreaView, Text } from "react-native";
import CompetitionEntry from "./CompetitionEntry"

// Currently Implements some tests for voting system, in which a max number of votes 
// Are enforced per compentition

// Hardcoded set of video submissions
var entries = [
	{
		user: "mattG",
		vid: 'http://cs-people.bu.edu/elissone/testData/matt.mp4',
		numVotes: 0
	},
	{
		user: "larnelL",
		vid: 'http://cs-people.bu.edu/elissone/testData/larnell.mp4',
		numVotes: 0
	},
	{
		user: "SomeDudeThatSucks",
		vid: 'http://cs-people.bu.edu/elissone/testData/elisson.mp4',
		numVotes: 0,
	}
];

// Hardcoded set of Competitions
var competitions = [
	{
		compTitle: "Jacob Collier's Competition",
		compDescription: "Submit Polyrhythms, SuperUltraHyperMegaMeta Lydian scales, + more unecessary flexes",
		prize: "A cool t-shirt!",
		host: "Jacob Collier",
		dateAdded: "11/11/19",
		entries: entries
	},
	{
		compTitle: "Plini's Competition",
		compDescription: "Remix Salt n Charcoal",
		prize: "Concert Tickets to my upcoming show",
		host: "Plini H",
		dateAdded: "11/11/19",
		entries: entries
	}
];

// Meant to show available competitions
// CURRENT STATE: Shows a series of sample competition entries (no voting system)
// TODO: Replace the former with the latter
export default class HomeScreen extends Component {
  render() {
    return(
    	<SafeAreaView style={{flex: 1}}>
	      <ScrollView>
	        {
	        	entries.map(
	        		(entry, index) => {
	        			return <CompetitionEntry key={index} user={entry.user} vid={entry.vid}/>
	      			}
	      		)
	        }
	      </ScrollView>
      </SafeAreaView>
    );
  }
}
