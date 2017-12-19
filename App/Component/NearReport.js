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
            <View style={styles.container}>
                <Text style={styles.text}>Description of near miss: </Text>
                <TextInput
                    style={styles.input} 
                    // placeholder={I18n.t('')}
                    />
                <Text style={styles.input}>course of action: </Text>
                <TextInput
                    style={styles.input}
                    // placeholder={I18n.t('')}
                     />
                    <Text style={styles.input}>Was a hazard report completed:</Text>
                    <TextInput
                    style={styles.input}
                    // placeholder={I18n.t('')}
                    />
                    <Text style={styles.text}>Was a injury report completed:</Text>
                    <TextInput
                    style={styles.input}
                    // placeholder={I18n.t('')}
                    />
            </View>

        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: 11,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 15
    },
    input: {
        height: 38,
        fontSize: 16,
        marginTop: 6,
        backgroundColor: 'white',
        color: 'black',
        borderWidth: 1,
        alignSelf: 'stretch',
    },
    textBox:
        {
            fontSize: 18,
            alignSelf: 'stretch',
            height: 45,
            paddingRight: 45,
            paddingVertical: 0,

        },
    text: {
        paddingTop: 16,

    },
})