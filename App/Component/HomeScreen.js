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
import { Grievance } from '../Component/Grievance';
import { NearReport } from '../Component/NearReport';
import { CriticalReport } from '../Component/CriticalReport';
import { Idea } from '../Component/Idea';
import { PersonalDetails } from '../Component/PersonalDetails';
import { Language } from '../Component/Language';
import {cssHome} from '../Styles/Styles'

export class HomeScreen extends Component {
    static navigationOptions = {
        header: null,
    };
    render() {
        return (
            <View style={cssHome.conatianer}>
                <View style={cssHome.viewRow1}>
                    <TouchableOpacity
                        style={{ marginLeft: 8 }}
                        onPress={() => this.props.navigation.navigate('Language')}>
                        <Image source={require('../image/home1.png')}
                            style={{ width: 180, height: 200 }} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{ marginLeft: 8 }}
                        onPress={() => this.props.navigation.navigate('Grievance')}>
                        <Image source={require('../image/home2.png')}
                            style={{ width: 190, height: 200 }} />
                    </TouchableOpacity>
                </View>
                <View style={cssHome.viewRow2}>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('NearReport')}>
                        <Image source={require('../image/home3.png')}
                            style={{ width: 180, height: 200 }} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{ marginLeft: 8 }}
                        onPress={() => this.props.navigation.navigate('CriticalReport')}>
                        <Image source={require('../image/home4.png')}
                            style={{ width: 180, height: 200 }} />
                    </TouchableOpacity>
                </View>
                <View style={cssHome.viewRow3}>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('Idea')}>
                        <Image source={require('../image/home5.png')}
                            style={{ width: 180, height: 200 }} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{ marginLeft: 8 }}
                        onPress={() => this.props.navigation.navigate('PersonalDetails')}>
                        <Image source={require('../image/home6.png')}
                            style={{ width: 180, height: 200 }} />
                    </TouchableOpacity>
                </View>
            </View>

        )
    }
}
export const Home = StackNavigator({
    HomeScreen: {
        screen: HomeScreen
    },
    Grievance: {
        screen: Grievance
    },
    NearReport: {
        screen: NearReport
    },
    CriticalReport: {
        screen: CriticalReport
    },
    Idea: {
        screen: Idea
    },
    PersonalDetails: {
        screen: PersonalDetails
    },
    Language: {
        screen: Language
    }
})
