import React, {Component} from "react";
import { View, Text } from "react-native";
import {Video } from 'expo-av';

// Meant to show video entries for a specific competition
// TODO: Implement Voting system with vote limits
class CompetitionEntry extends Component {
	constructor(props) {
		super(props);
	}

	render() {
  	const style = {
  		main: {
  			padding: 1, flex: 1, justifyContent: 'center', alignItems: 'center'
  		},
  		sub: {
  			fontWeight: "200",
  			paddingTop: 1
  		}
  	};
    return(
      <View style={style.main}>
        <Text>Submission by <Text style={{fontWeight: "bold"}}>{this.props.user}</Text></Text>
        <Video
				  source={{ uri: this.props.vid }}
				  rate={1.0}
				  volume={1.0}
				  resizeMode="cover"
				  useNativeControls
				  style={{ width: 300, height: 300 }}
				/>
      </View>
    );
  }
}

export default CompetitionEntry;