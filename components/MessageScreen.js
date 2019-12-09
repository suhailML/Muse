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

export default class Profile extends Component {

  render() {
    return (
   <SafeAreaView style={styles.container}>
    <ScrollView>
      <View style={{flex: 1}}>





		<Text style={styles.Username}>Username</Text>
       	<Image style={styles.back} source={{uri: 'https://www.pngix.com/pngfile/big/267-2677471_back-ios-comments-ios-back-button-image-png.png'}}/>
		<Image style={styles.write} source={{uri: 'https://s3.us-east-2.amazonaws.com/upload-icon/uploads/icons/png/20092061831530273514-128.png'}}/>
      	<Image style={styles.avatar} source={{uri: 'https://ewans.files.wordpress.com/2008/07/grey1.jpg'}}/>
        <Image style={styles.avatar1} source={{uri: 'https://ewans.files.wordpress.com/2008/07/grey1.jpg'}}/>
         <Image style={styles.avatar2} source={{uri: 'https://ewans.files.wordpress.com/2008/07/grey1.jpg'}}/>
         <View style={styles.body}>
         	<View style={styles.bodyContent}>
            <Text style={styles.name}>Name</Text>
            <Text style={styles.Message}>Last Message Sent</Text>
            <Text style={styles.name}>Name</Text>
            <Text style={styles.Message}>Last Message Sent</Text>
            <Text style={styles.name}>Name</Text>
            <Text style={styles.Message}>Last Message Sent</Text>
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
  safe: {
    flex: 1,
  },
  back:{
  	width: 25,
    height: 25,
    marginLeft: 10,
    position: 'absolute',
  },
  write:{
  	width: 25,
    height: 25,
    marginLeft: 330,
    position: 'absolute',
  },
  Username:{
    fontSize:20,
    color: "#000000",
    textAlign: 'center',
    marginBottom: 5,
    fontWeight: "600",
    position: 'absolute',
    marginLeft:135,
    marginRight:25,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom:5,
    position: 'absolute',
    marginTop:25,
    marginLeft:25
  },
   avatar1: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom:5,
    position: 'absolute',
    marginTop:150,
    marginLeft:25
  },
   avatar2: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom:5,
    position: 'absolute',
    marginTop:275,
    marginLeft:25
  },
  name:{
    fontSize:20,
    color: "#000000",
    marginTop:50,
    marginLeft: 35,
    textAlign: 'center',
    marginBottom: 5,
    fontWeight: "600",
  },
   Message:{
    fontSize:12,
    color: "#000000",
    marginTop:5,
    marginLeft: 90,
    textAlign: 'center',
    marginBottom: 25,
    fontWeight: "300",
  },
});