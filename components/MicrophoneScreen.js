import React, {Component} from "react";
import { View, Text } from "react-native";

export default class MicrophoneScreen extends Component {
  render() {
    return(
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text> This is my Recording screen </Text>
      </View>
    );
  }
}
