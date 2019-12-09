import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity, 
  Button,
  SafeAreaView,
  Alert,
  TouchableHighlight,
  NavigatorIOS,
} from 'react-native';
//  add button functionality if need be 
export default class Profile extends Component {

  render() {
    return (
   <SafeAreaView style={styles.container}>
    <ScrollView>
      <View style={{flex: 1}}>
          <Image style = {styles.gear} source = {{uri: 'https://www.jing.fm/clipimg/full/51-515158_setting-clipart-black-png-settings-button.png'}}/>
          <Image style={styles.avatar} source={{uri: 'https://ewans.files.wordpress.com/2008/07/grey1.jpg'}}/>
          <View style={styles.body}>
            <View style={styles.bodyContent}>
            <Text style={styles.name}>Name</Text>
            <Text style={styles.Bio}>Bio</Text>
            <Text style={styles.Description}>nvfdjknvdfjknvdflkjnvfldkjnvlfnvjflknkdnvkdfvnfcvbcsdfsdfsghg </Text>
            <Image style={styles.boxes} source={{uri:'https://ewans.files.wordpress.com/2008/07/grey1.jpg'}}/>
            <Image style={styles.boxes} source={{uri:'https://ewans.files.wordpress.com/2008/07/grey1.jpg'}}/>
            <Image style={styles.boxes} source={{uri:'https://ewans.files.wordpress.com/2008/07/grey1.jpg'}}/>
            <Image style={styles.boxes} source={{uri:'https://ewans.files.wordpress.com/2008/07/grey1.jpg'}}/>
            </View>
        </View>
      </View>
      </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor:'#d3d3d5'
  }, 
  gear: {
    width: 25,
    height: 25,
    marginLeft: 325,
    marginTop: 10,
  },
  safe: {
    flex: 1,
  },
  avatar: {
    width: 125,
    height: 125,
    borderRadius: 64,
    marginBottom:5,
    position: 'absolute',
    marginTop:25,
    marginLeft:25
  },
  name:{
    fontSize:20,
    color: "#000000",
    marginTop:15,
    marginLeft: 35,
    textAlign: 'center',
    fontWeight: "600"
  },
  Bio:{
    fontSize:16,
    color: "#000000",
    marginTop:10,
    marginLeft: 5,
    textAlign: 'center',
  },
  Description:{
    fontSize:12,
    color: "#000000",
    marginTop:10,
    marginLeft:177,
    marginRight: 20,
    textAlign: 'right',
    flexDirection: 'row',
    flex: 1,
  },
  boxes:{
    flex: 1,
    width: 320,
    height: 150,
    marginTop: 50,
    marginBottom: 15,
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    marginLeft: 20,
    // try to center this more? could end up in bugs if i turn these into buttons because align items isnt working lol siq 
  }
});