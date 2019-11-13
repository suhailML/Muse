import React, {Component} from "react";
import { View, Text, Image, Button, Navigator } from "react-native";
import {createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Competition from "./Competition"

// Meant to display a single competition
// TODO: Implement Voting system with vote limits
class CompetitionPreview extends Component {
	constructor(props) {
		super(props);
	}


	render() {
    const navigate = this.props.navigation.navigate;

  	const style = {
  		main: {
  			padding: 10,
        marginBottom: 10,
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center', 
        borderWidth: 0.5,
        borderColor: 'EEEEEE'
  		},
      photo: {
        padding: 5, width: 350, height: 200
      }
  	};

    return(
      <View style={style.main}>
        <Text>{this.props.details.compTitle}</Text>
        <Text>By {this.props.details.host}</Text>
        <Text>Prize: {this.props.details.prize}</Text>
        <Image style={style.photo}source={this.props.details.photo}/>
        <Text>{this.props.details.compDescription}</Text>
        <Button
          title="See Competition Entries"
          onPress={() => navigate('Competition', {details: this.props.details})}
        />
      </View>
    );
  }
}

export default CompetitionPreview;
