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
    TextInput,
    ScrollView,
    I18nManager,
    AsyncStorage,
    Picker
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import I18n, { getLanguages } from 'react-native-i18n';
import {cssGrievance} from '../Styles/Styles'

export class Grievance extends Component {
    constructor() {
        super()
        this.state = {
            checklag: false
        }
    }
    static navigationOptions = {
        title: 'Help I Grievances',
    };
    render() {
        return (
            <View style={cssGrievance.container}>
                {/* <View style={{flex:1}}> */}
                <ScrollView style={{ backgroundColor: 'transparent', flex: 1 }}
                    showsVerticalScrollIndicator={false} >
                    <Text style={this.state.checklag ? cssGrievance.centerAlign : cssGrievance.rightAlign}>{I18n.t('job_title')} </Text>
                    <TextInput
                        style={cssGrievance.input} />
                    <Text style={this.state.checklag ? cssGrievance.centerAlign : cssGrievance.rightAlign}>{I18n.t('what_happened')} </Text>
                    <TextInput
                        style={cssGrievance.input}
                    />
                    <Text style={this.state.checklag ? cssGrievance.centerAlign : cssGrievance.rightAlign}>{I18n.t('who_was')} </Text>
                    <TextInput
                        style={cssGrievance.input}
                    />
                    <Text style={this.state.checklag ? cssGrievance.centerAlign : cssGrievance.rightAlign}>{I18n.t('past_how')} </Text>
                    <TextInput
                        style={cssGrievance.input}
                    />
                    <Text style={this.state.checklag ? cssGrievance.centerAlign : cssGrievance.rightAlign}>{I18n.t('has_changed')}  </Text>
                    <TextInput
                        style={cssGrievance.input}
                    />
                    <Text style={this.state.checklag ? cssGrievance.centerAlign : cssGrievance.rightAlign}>{I18n.t('was_ther_witness')}  </Text>
                    <TextInput
                        style={cssGrievance.input}
                    />
                    <Text style={this.state.checklag ? cssGrievance.centerAlign : cssGrievance.rightAlign}>{I18n.t('happpen_first')}  </Text>
                    <TextInput
                        style={cssGrievance.input}
                    />
                    <Text style={this.state.checklag ? cssGrievance.centerAlign : cssGrievance.rightAlign}>{I18n.t('first_time_has')}</Text>
                    <TextInput
                        style={cssGrievance.input}
                    />
                    <Text style={this.state.checklag ? cssGrievance.centerAlign : cssGrievance.rightAlign}>{I18n.t('first_time')}  </Text>
                    <TextInput
                        style={cssGrievance.input}
                    />
                    <Text style={this.state.checklag ? cssGrievance.centerAlign : cssGrievance.rightAlign}>{I18n.t('issue_related')} </Text>
                    <TextInput
                        style={cssGrievance.input}
                    />
                    <Text style={this.state.checklag ? cssGrievance.centerAlign : cssGrievance.rightAlign}>{I18n.t('have_a')} </Text>
                    <TextInput
                        style={cssGrievance.input}
                    />
                    <Text style={this.state.checklag ? cssGrievance.centerAlign : cssGrievance.rightAlign}>{I18n.t('how_did')} </Text>
                    <TextInput
                        style={cssGrievance.input}
                    />
                    <Text style={this.state.checklag ? cssGrievance.centerAlign : cssGrievance.rightAlign}>{I18n.t('have_reported')} </Text>
                    <TextInput
                        style={cssGrievance.input}
                    />
                    <Text style={this.state.checklag ? cssGrievance.centerAlign : cssGrievance.rightAlign}>{I18n.t('general_manager')} </Text>
                    <TextInput
                        style={cssGrievance.input}
                    />
                    <Text style={this.state.checklag ? cssGrievance.centerAlign : cssGrievance.rightAlign}>{I18n.t('resolve_issue')}  </Text>
                    <TextInput
                        style={cssGrievance.input}
                    />
                    <Text style={this.state.checklag ? cssGrievance.centerAlign : cssGrievance.rightAlign}>{I18n.t('outcome_seeking')}  </Text>
                    <TextInput
                        style={this.state.checklag ? cssGrievance.centerAlign : cssGrievance.rightAlign}
                    />
                    <TouchableOpacity style={cssGrievance.input1} >
                        <Text style={cssGrievance.submitbotton}>submit </Text>
                    </TouchableOpacity>
                </ScrollView>
                {/* </View> */}
            </View>
        )
    }
}

I18n.fallbacks = true

I18n.translations = {
    'en': require('../Transaltions/en'),
    'ar': require('../Transaltions/ar'),
};
