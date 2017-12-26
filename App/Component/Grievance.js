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
//import {I18nManager} from 'react-native';
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
            <View style={styles.container}>
                {/* <View style={{flex:1}}> */}
                <ScrollView style={{ backgroundColor: 'transparent', flex: 1 }}
                    showsVerticalScrollIndicator={false} >
                    <Text style={this.state.checklag ? styles.centerAlign : styles.rightAlign}>{I18n.t('job_title')} </Text>
                    <TextInput
                        style={styles.input} />
                    <Text style={styles.text}>{I18n.t('what_happened')} </Text>
                    <TextInput
                        style={styles.input}
                    />
                    <Text style={styles.text}>{I18n.t('who_was')} </Text>
                    <TextInput
                        style={styles.input}
                    />
                    <Text style={styles.text}>{I18n.t('past_how')} </Text>
                    <TextInput
                        style={styles.input}
                    />
                    <Text style={styles.text}>{I18n.t('has_changed')}  </Text>
                    <TextInput
                        style={styles.input}
                    />
                    <Text style={styles.text}>{I18n.t('was_ther_witness')}  </Text>
                    <TextInput
                        style={styles.input}
                    />
                    <Text style={styles.text}>{I18n.t('happpen_first')}  </Text>
                    <TextInput
                        style={styles.input}
                    />
                    <Text style={styles.text}>{I18n.t('first_time_has')}</Text>
                    <TextInput
                        style={styles.input}
                    />
                    <Text style={styles.text}>{I18n.t('first_time')}  </Text>
                    <TextInput
                        style={styles.input}
                    />
                    <Text style={styles.text}>{I18n.t('issue_related')} </Text>
                    <TextInput
                        style={styles.input}
                    />
                    <Text style={styles.text}>{I18n.t('have_a')} </Text>
                    <TextInput
                        style={styles.input}
                    />
                    <Text style={styles.text}>{I18n.t('how_did')} </Text>
                    <TextInput
                        style={styles.input}
                    />
                    <Text style={styles.text}>{I18n.t('have_reported')} </Text>
                    <TextInput
                        style={styles.input}
                    />
                    <Text style={styles.text}>{I18n.t('general_manager')} </Text>
                    <TextInput
                        style={styles.input}
                    />
                    <Text style={styles.text}>{I18n.t('resolve_issue')}  </Text>
                    <TextInput
                        style={styles.input}
                    />
                    <Text style={styles.text}>{I18n.t('outcome_seeking')}  </Text>
                    <TextInput
                        style={styles.input}
                    />
                    <TouchableOpacity style={styles.input1} >
                        <Text style={styles.submitbotton}>submit </Text>
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

I18nManager.allowRTL(I18n.locale in I18n.translations);
I18n.start = I18nManager.isRTL ? 'right' : 'left';
I18n.end = I18nManager.isRTL ? 'left' : 'right';


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
        textAlign: I18nManager.isRTL ? 'right' : 'left'
    },
    text: {
        paddingTop: 16,

    },
    input1: {
        height: 38,
        fontSize: 16,
        marginTop: 12,
        backgroundColor: 'steelblue',
        color: 'steelblue',
        borderWidth: 1,
        borderColor: 'steelblue',
        alignSelf: 'stretch',
    },
    submitbotton: {
        color: 'white',
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingTop: 5
    },
    centerAlign: {
        textAlign: "left"
    },
    rightAlign: {
        textAlign: "right"
    }
})