import React, {Component} from "react";
import { ScrollView, View, Text, Image } from "react-native";
import CompetitionEntry from "./CompetitionEntry"
import { createStackNavigator } from 'react-navigation-stack';

// Displays a single competition
class Competition extends Component {
  static navigationOptions = {
    title: 'Competition',
  };

	constructor(props) {
		super(props);
    this.state = {maxVotes: 2, currNumVotes: 0, disableVoting: false};
    // Binding the competition to the updateCurrNumVotes function.
    // This allows it to access the competition parameters etc when
    // being called from a competition entry.
    this.updateCurrNumVotes = this.updateCurrNumVotes.bind(this);
	}

  // Increadses/decreases the number of votes that habve been made by the user
  // Updates whether voting for more entries should be disabled due to reaching
  // the mac number of votes that are allowed per user.
  updateCurrNumVotes(value) {
    var changeCurrNumVotes = value ? 1 : -1;
    var disableVoting = this.disableVoteHandler(changeCurrNumVotes);
    this.setState(
      {
        currNumVotes: this.state.currNumVotes + changeCurrNumVotes,
        disableVoting: disableVoting
      }
    );
  }

  // Helper function for entry vote disabling
  disableVoteHandler(changeCurrNumVotes) {
    if ((this.state.currNumVotes + changeCurrNumVotes) == this.state.maxVotes) {
      return true;
    } else {
      return false;
    }
  }

	render() {
    const details = this.props.navigation.state.params.details;

  	const style = {
  		main: {
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center'
  		},
      compTitle: {
        paddingTop: 10,
        fontSize: 25,
        fontWeight: "300"
      },
      entriesText: {
        fontSize: 30,
        fontWeight: "200",
        paddingBottom: 20
      }
  	};

    return(
      <View style={style.main}>
        <Text style={style.compTitle}>{details.compTitle}</Text>
        <Text style={style.entriesText}>Entries:</Text>
          <ScrollView>
            {
             details.entries.map(
               (entry, index) => {
                 return <CompetitionEntry 
                 key={index} 
                 user={entry.user} 
                 vid={entry.vid}
                 // Passing-in Competition state variables and functions to each entry
                 updateCurrNumVotes={this.updateCurrNumVotes}
                 currNumVotes={this.state.currNumVotes}
                 maxVotes={this.state.maxVotes}
                 disableVoting={this.state.disableVoting}
                 />
               }
             )
            }
          </ScrollView>
      </View>
    );
  }
}

export default Competition;
