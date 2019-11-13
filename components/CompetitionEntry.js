import React, {Component} from "react";
import { View, Text, Switch } from "react-native";
import {Video } from 'expo-av';

// Shows video entries for a specific competition
// TODO: There is not much of a sense of state for the voting. This needs to be done
// either before or while the app is being connected to the backend.
class CompetitionEntry extends Component {

	constructor(props) {
		super(props);
		// Shows wether the user voted for the current entry
		this.state = {vote: false};
	}

	// Handles Vote Value handling and updates the number of votes made by
	// the user. If this is > than max, the switch statement will be disabled
	voteHandler(vote) {
		this.setState({vote: vote});
		this.props.updateCurrNumVotes(vote);
	}

	render() {
  	const style = {
  		main: {
        marginBottom: 30,
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center'
  		}
  	};

  	var vote = false;
    return(
      <View style={style.main}>
        <Text>Submission by <Text style={{fontWeight: "bold"}}>{this.props.user}</Text></Text>
        <Video
				  source={{ uri: this.props.vid }}
				  rate={1.0}
				  volume={1.0}
				  resizeMode="cover"
				  useNativeControls
				  style={{ width: 350, height: 300 }}
				/>
      <Switch 
      	disabled={this.props.disableVoting && !this.state.vote} 
      	value={this.state.vote} 
      	onValueChange={(vote) => {this.voteHandler(vote)}}
      />
			<Text>
				{this.state.vote ? "You have voted for " + this.props.user + "!": "Vote above!"}
			</Text>
      </View>
    );
  }
}

export default CompetitionEntry;