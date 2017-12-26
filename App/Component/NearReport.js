import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    StatusBar,
    I18nManager,
    ImageBackground,
    TextInput
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import I18n, { getLanguages } from 'react-native-i18n';
import { cssReport } from '../Styles/Styles'

export class NearReport extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: '',
        }
    }
    static navigationOptions = {
        title: 'Near Miss Report'
    };
    render() {
        return (
            <View style={cssReport.container}>
                <Text style={cssReport.text}>Description of near miss: </Text>
                <TextInput
                    style={cssReport.input}
                />
                <Text style={cssReport.text}>course of action: </Text>
                <TextInput
                    style={cssReport.input}
                />
                <Text style={cssReport.text}>Was a hazard report completed:</Text>
                <TextInput
                    style={cssReport.input}
                />
                <Text style={cssReport.text}>Was a injury report completed:</Text>
                <TextInput
                    style={cssReport.input}
                />
                <TouchableOpacity style={cssReport.upload}>
                    <Text style={cssReport.uploadText}> Upload File </Text>
                </TouchableOpacity>
                <TouchableOpacity style={cssReport.input1} >
                    <Text style={cssReport.submitbotton}>submit </Text>
                </TouchableOpacity>
            </View>

        )
    }
}
