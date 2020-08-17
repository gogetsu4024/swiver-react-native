/* @flow */

import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { TextInput } from 'react-native-paper';
import { Images} from 'App/Theme'
import styles from './SignInStyle'
type Props = {};

export default class SignIn extends Component<Props> {
    render() {
        const B = (props) => <Text style={{fontWeight: 'bold'}}>{props.children}</Text>

        return (
            <KeyboardAwareScrollView>
            <View style={styles.container} >


                <Image style = {styles.logo} source={Images.logo}  resizeMode= 'contain' />

                <Text style={styles.header}>Bienvenue</Text>


                <TextInput
                    style={{marginTop: 30}}
                    mode='outlined'
                    label='Login'
                />
                <TextInput
                    style={{marginTop: 10}}
                    secureTextEntry={true}
                    mode='outlined'
                    label='Password'
                />
                <View style={{flex: 1.2}}>
                <Text style={styles.textFloat}>Mot de passe oublié ? </Text>

                <TouchableOpacity onPress={() => {this.props.navigation.navigate('StepsIndicator')}} style={styles.button}>
                    <Text style={{color: 'white', fontSize: 16, alignSelf: 'center'}}>S'IDENTIFIER</Text>
                </TouchableOpacity>

                <Text style = {{alignSelf: 'center', marginVertical: 10}}>Vous n'avez pas de compte?</Text>
                <Text style = {{alignSelf: 'center', color: '#4c87cd'}}>S'INSCRIRE</Text>

                <Text style = {styles.text}>En continuant, vous acceptez les <B>conditions d'utilisation</B> et la <B>politique de confidentialité</B> de Swiver</Text>
                </View>
            </View>
            </KeyboardAwareScrollView>
        );
    }
}

