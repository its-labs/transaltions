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
import { Language } from '../Component/Language'

export class HomeScreen extends Component {
    static navigationOptions = {
        header: null,
    };
    render() {
        return (
            <View style={styles.conatianer}>
                <View style={styles.viewRow1}>
                    <TouchableOpacity
                        style={{ marginLeft: 8 }}
                        onPress={() => this.props.navigation.navigate('Language')}>
                        <Image source={require('../image/home1.png')}
                            style={{ width: 180, height: 200 }} />
                    </TouchableOpacity>
                    {/* untouch images ends */}

                    {/* here second images touch  */}
                    <TouchableOpacity
                        style={{ marginLeft: 8 }}
                        onPress={() => this.props.navigation.navigate('Grievance')}>
                        <Image source={require('../image/home2.png')}
                            style={{ width: 190, height: 200 }} />
                    </TouchableOpacity>
                    {/* here second images touch  */}
                </View>

                <View style={styles.viewRow2}>
                    {/* here thired images touch  */}
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('NearReport')}>
                        <Image source={require('../image/home3.png')}
                            style={{ width: 180, height: 200 }} />
                    </TouchableOpacity>
                    {/* here third images touch  */}

                    {/* here fourt images touch  */}
                    <TouchableOpacity
                        style={{ marginLeft: 8 }}
                        onPress={() => this.props.navigation.navigate('CriticalReport')}>
                        <Image source={require('../image/home4.png')}
                            style={{ width: 190, height: 200 }} />

                    </TouchableOpacity>

                    {/* here fourth images touch  */}
                </View>

                <View style={styles.viewRow3}>
                    {/* here fith images touch  */}
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('Idea')}>
                        <Image source={require('../image/home5.png')}
                            style={{ width: 180, height: 200 }} />
                    </TouchableOpacity>
                    {/* here fith images touch  */}

                    {/* here sixth images touch  */}
                    <TouchableOpacity
                        style={{ marginLeft: 8 }}
                        onPress={() => this.props.navigation.navigate('PersonalDetails')}>
                        <Image source={require('../image/home6.png')}
                            style={{ width: 190, height: 200 }} />
                    </TouchableOpacity>
                    {/* here sixth images touch  */}
                </View>


                {/* <Text> wellcome</Text> */}
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
const styles = StyleSheet.create({
    conatianer: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 26,
        backgroundColor: 'white',

    },
    viewRow1: {
        flexDirection: 'row'
    },
    viewRow2: {
        flexDirection: 'row',
        marginTop: 6
    },
    viewRow3: {
        flexDirection: 'row',
        marginTop: 6
    },

})