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
export  class PersonalDetails extends Component {
    static navigationOptions = {
        title: 'Edit Profile',
    };
    render() {
        return (
            <View style={styles.container}>
               <ScrollView style={{ backgroundColor: 'transparent', flex: 1 }}
                    showsVerticalScrollIndicator={false} >

                <Text style={styles.text}>{I18n.t('first_name')} </Text>
                <TextInput
                    style={styles.input}
                    // placeholder={I18n.t()}
                />
                  <Text style={styles.text}>{I18n.t('last_name')} </Text>
                <TextInput
                    style={styles.input}
                    // placeholder={I18n.t('')}
                />
                  <Text style={styles.text}>{I18n.t('email_english')} </Text>
                <TextInput
                    style={styles.input}
                    // placeholder={I18n.t('')}
                />
                  <Text style={styles.text}>{I18n.t('working_place')} </Text>
                <TextInput
                    style={styles.input}
                    // placeholder={I18n.t('')}
                />
                  <Text style={styles.text}>{I18n.t('address')} </Text>
                <TextInput
                    style={styles.input}
                    // placeholder={I18n.t('')}
                />
                  <Text style={styles.text}>{I18n.t('contact_number')} </Text>
                <TextInput
                    style={styles.input}
                    // placeholder={I18n.t('')}
                />
                  <Text style={styles.text}>{I18n.t('superannuation')} </Text>
                <TextInput
                    style={styles.input}
                    // placeholder={I18n.t('')}
                />
                  <Text style={styles.text}>{I18n.t('maritial_status')} </Text>
                <TextInput
                    style={styles.input}
                    // placeholder={I18n.t('')}
                />
                  <Text style={styles.text}>{I18n.t('dependent')} </Text>
                <TextInput
                    style={styles.input}
                    // placeholder={I18n.t('')}
                />
                  <Text style={styles.text}>{I18n.t('date_birth')}: </Text>
                <TextInput
                    style={styles.input}
                    // placeholder={I18n.t('')}
                />
                 <TouchableOpacity style={styles.input1} >
                        <Text style={styles.submitbotton}>submit </Text>
                    </TouchableOpacity>
                    </ScrollView>
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
I18n.start  = I18nManager.isRTL ? 'right' : 'left';
I18n.end    = I18nManager.isRTL ? 'left' : 'right';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: 8,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 11
    },
    input: {
        height: 38,
        fontSize: 16,
        marginTop: 6,
        backgroundColor: 'white',
        color: 'black',
        borderWidth: 1,
        //alignSelf: 'stretch',
        //textAlign: I18nManager.isRTL ? 'right' : 'left'
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
        //alignSelf: 'stretc'
     },
     submitbotton: {
        color: 'white',
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingTop: 5
    }
})