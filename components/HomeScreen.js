import React, {Component} from "react";
import {ScrollView, SafeAreaView, Text } from "react-native";
import CompetitionPreview from "./CompetitionPreview"

// Currently Implements some tests for voting system, in which a max number of votes 
// Are enforced per compentition

// Hardcoded set of video submissions
var entries = [
	{
		user: 'mattG',
		vid: 'http://cs-people.bu.edu/elissone/testData/matt.mp4'
	},
	{
		user: 'larnelL',
		vid: 'http://cs-people.bu.edu/elissone/testData/larnell.mp4'
	},
	{
		user: 'SomeDudeThatIsLessGood',
		vid: 'http://cs-people.bu.edu/elissone/testData/elisson.mp4'
	}
];

// Hardcoded set of Competitions
var competitions = [
	{
		compTitle: "Jacob Collier's Competition",
		compDescription: "Submit all your musical flexes!",
		prize: "A cool t-shirt!",
		photo: require("./../assets/test_photos/503jam.jpg"),
		host: "Jacob Collier",
		entries: Object.assign(entries)
	},
	{
		compTitle: "Plini's Competition",
		compDescription: "Remix My Song Salt and Charcoal",
		prize: "Concert Tickets to my upcoming show",
		photo: require("./../assets/test_photos/ableton.png"),
		host: "Plini H",
		entries: Object.assign(entries)
	}
];

// Shows available competitions
export default class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Home',
  };

  render() {
  	const style = {
  	  main: {
  		padding: 10, 
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center'
  	  },
      title: {
        fontSize: 25,
        fontWeight: "300",
        paddingBottom: 20,
        paddingTop: 10
      }
    };
    return(
    	<SafeAreaView style={style.main}>
    	<Text style={style.title}>List of Available Competitions</Text>
	      <ScrollView>
	        {
	        	competitions.map(
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
