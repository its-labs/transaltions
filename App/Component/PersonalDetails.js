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
import { cssPersonal } from '../Styles/Styles';
import { Dropdown } from 'react-native-material-dropdown';

export class PersonalDetails extends Component {
    constructor(props) {
        super(props);

        this.state = {
        };
    }

    static navigationOptions = {
        title: 'Edit Profile',
    };

    render() {
        let data = [{ value: 'Chennai' }, { value: 'Bangalore' }, { value: 'Mumbai' }, {
            value: 'Delhi'
        }, { value: 'Hyderabad' }, { value: 'Rajasthan' }];
        let married = [{ value: 'Married' }, { value: 'Divorced' }, { value: 'Defacto' }, { value: 'Single' }, { value: 'Widowed' }]

        return (
            <View style={cssPersonal.container}>
                <ScrollView style={{ backgroundColor: 'transparent', flex: 1 }}
                    showsVerticalScrollIndicator={false} >
                    <Text style={cssPersonal.text}>{I18n.t('first_name')} </Text>
                    <TextInput
                        style={cssPersonal.input}
                    />
                    <Text style={cssPersonal.text}>{I18n.t('last_name')} </Text>
                    <TextInput
                        style={cssPersonal.input}

                    />
                    <Text style={cssPersonal.text}>{I18n.t('email_english')} </Text>
                    <TextInput
                        style={cssPersonal.input}
                    />
                    <Text style={cssPersonal.text}>{I18n.t('working_place')} </Text>
                    <Dropdown
                        containerStyle={cssPersonal.dropDown}
                        label=''
                        data={data}
                        fontSize={18}
                        textColor={'black'}
                        labelHeight={12}
                    />
                    <Text style={cssPersonal.text}>{I18n.t('address')} </Text>
                    <TextInput
                        style={cssPersonal.input}
                    />
                    <Text style={cssPersonal.text}>{I18n.t('contact_number')} </Text>
                    <TextInput
                        style={cssPersonal.input}
                    />
                    <Text style={cssPersonal.text}>{I18n.t('superannuation')} </Text>
                    <TextInput
                        style={cssPersonal.input}
                    />
                    <Text style={cssPersonal.text}>{I18n.t('maritial_status')} </Text>
                    <Dropdown
                        containerStyle={cssPersonal.dropDown}
                        label=''
                        data={married}
                        fontSize={18}
                        textColor={'black'}
                        labelHeight={12}
                    />
                    <Text style={cssPersonal.text}>{I18n.t('dependent')} </Text>
                    <Dropdown
                        containerStyle={cssPersonal.dropDown}
                        label=''
                        data={data}
                        fontSize={18}
                        textColor={'black'}
                        labelHeight={12}
                    />
                    <Text style={cssPersonal.text}>{I18n.t('date_birth')}: </Text>
                    <TextInput
                        style={cssPersonal.input}
                    />
                    <TouchableOpacity style={cssPersonal.input1} >
                        <Text style={cssPersonal.submitbotton}>submit </Text>
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
I18n.start = I18nManager.isRTL ? 'right' : 'left';
I18n.end = I18nManager.isRTL ? 'left' : 'right';

