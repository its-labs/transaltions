import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  StatusBar,
  ImageBackground
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import {cssCritical} from '../Styles/Styles'

export class CriticalReport extends Component{
    static navigationOptions = {
        title: 'Critical Incident Report',
      };
    render(){
        return(
            <View style={cssCritical.container}>
            <Text> Wellcome to Critical Incident Report </Text>
            </View>
        )
    }
}