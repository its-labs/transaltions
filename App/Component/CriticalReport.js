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
export class CriticalReport extends Component{
    static navigationOptions = {
        title: 'Critical Incident Report',
      };
    render(){
        return(
            <View style={styles.container}>
            <Text> Wellcome to Critical Incident Report </Text>
            </View>
        )
    }
}
const styles=StyleSheet.create({
    container:{
    flex:1,
    backgroundColor:'steelblue',
    paddingTop:44
    },
})