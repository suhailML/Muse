import React, {Component} from "react";
import {ScrollView, SafeAreaView, Text } from "react-native";

import CompetitionPreview from "./CompetitionPreview"

import {DEFAULT} from "./../assets/style/StyleSheet"

// Currently Implements some tests for voting system, in which a max number of votes 
// Are enforced per compentition

// Shows available competitions
export default class HomeScreen extends Component {
  static navigationOptions = {header: null};

  render() {
  	const style = {
  	  main: {
  		  padding: 10, 
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center',
        backgroundColor: DEFAULT.COLOR.GRAY_1
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
	      <ScrollView>
	        {
	        	global.competitions.map(
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
