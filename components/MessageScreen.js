import React, {Component} from "react";
import { View, Text } from "react-native";

export default class MessageScreen extends Component {
  render() {
    return(
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text> This is my Message screen </Text>
      </View>
    );
  }
}
