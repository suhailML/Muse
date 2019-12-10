import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import  { Camera }  from "expo-camera";
import * as Permissions from 'expo-permissions';
import * as MediaLibrary from "expo-media-library";


export default class MicrophoneScreen extends Component {
  static navigationOptions = {header: null};

  state = {
    video: null,
    picture: null,
    recording: false
  };

  _saveVideo = async () => {
    const { video } = this.state;
    const asset = await MediaLibrary.createAssetAsync(video.uri);
    if (asset) {
      this.setState({ video: null });
    }
  };

  _StopRecord = async () => {
    this.setState({ recording: false }, () => {
      this.cam.stopRecording();
    });
  };

  _StartRecord = async () => {
    if (this.cam) {
      this.setState({ recording: true }, async () => {
        const video = await this.cam.recordAsync();
        this.setState({ video });
      });
    }
  };

  toogleRecord = () => {
    const { recording } = this.state;

    if (recording) {
      this._StopRecord();
    } else {
      this._StartRecord();
    }
  };

  render() {
    const { recording, video } = this.state;
    return (
      <Camera
        ref={cam => (this.cam = cam)}
        style={{
          justifyContent: "flex-end",
          alignItems: "center",
          flex: 1,
          width: "100%"
        }}
      >
        {video && (
          <TouchableOpacity
            onPress={this._saveVideo}
            style={{
              padding: 20,
              width: "100%",
              backgroundColor: "#fff"
            }}
          >
            <Text style={{ textAlign: "center" }}>Submit</Text>
          </TouchableOpacity>
        )}
        <TouchableOpacity
          onPress={this.toogleRecord}
          style={{
            padding: 20,
            width: "100%",
            backgroundColor: recording ? "#ef4f84" : "#4fef97"
          }}
        >
          <Text style={{ textAlign: "center" }}>
            {recording ? "Stop" : "Record"}
          </Text>
        </TouchableOpacity>
      </Camera>
    );
  }
}