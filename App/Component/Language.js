import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    Picker,
    I18nManager,
    AsyncStorage,

} from 'react-native';
import { StackNavigator } from 'react-navigation';
import I18n, { getLanguages } from 'react-native-i18n';
import { cssLanguage } from '../Styles/Styles'

export class Language extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            checklag: false
        }
    }
    chooseLanguages = (user) => {
        var checkEnglish = "English";
        var checkArabic = "Arabic";

        if (checkEnglish.indexOf(user) !== -1) {
            I18n.locale = 'en'
            I18nManager.forceRTL(false)
            this.setState({ checklag: true })
        }
        if (checkArabic.indexOf(user) !== -1) {
            I18n.locale = 'ar'
            I18nManager.forceRTL(true)
            this.setState({ checklag: false })
        }
        //     this.setName(user);
        this.setState({ name: user });
    }
    render() {
        return (
            <View style={cssLanguage.container}>
                <Picker
                    selectedValue={this.state.name}
                    onValueChange={this.chooseLanguages}>
                    <Picker.Item label="English" value="English" />
                    <Picker.Item label="Arabic" value="Arabic" />
                </Picker>
                <Text style={this.state.checklag ? cssLanguage.centerAlign : cssLanguage.rightAlign}>{I18n.t('welcome')}</Text>
            </View>
        )
    }
}

I18n.fallbacks = true

I18n.translations = {
    'en': require('../Transaltions/en'),
    'ar': require('../Transaltions/ar'),
};