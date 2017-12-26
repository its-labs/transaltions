import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  StatusBar,
  ImageBackground,
  TextInput
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import {cssIdea} from '../Styles/Styles'

export class Idea extends Component{
    static navigationOptions = {
        title: 'Got an Idea',
      };
    render(){
        return(
            <View style={cssIdea.container}>
           <Text style={cssIdea.text}>What Idea:  </Text>
            <TextInput
            style={cssIdea.input}
            />
            <TouchableOpacity>
                <Text> Upload File </Text>
                </TouchableOpacity>
            </View>
        )
    }
}
