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
export class Idea extends Component{
    static navigationOptions = {
        title: 'Got an Idea',
      };
    render(){
        return(
            <View style={styles.container}>
           <Text style={styles.text}>What Idea:  </Text>
            <TextInput
            style={styles.input}
            />
            <TouchableOpacity>
                <Text> Upload File </Text>
                </TouchableOpacity>
            </View>
        )
    }
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
        paddingTop:11,
        paddingLeft:10,
        paddingRight:10,
        paddingBottom:11
        },
        input:{
            height: 66,
            fontSize: 16,
            marginTop: 6,
            backgroundColor: 'white',
            color: 'black',
            borderWidth: 1,
            alignSelf: 'stretch',
        },
        text:{
            paddingTop:16
        }
    })