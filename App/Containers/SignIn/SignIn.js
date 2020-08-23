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
import { Images, Colors } from 'App/Theme'
import styles from './SignInStyle'
import {connect} from "react-redux";
type Props = {};

import SingInActions from 'App/Stores/SignIn/Actions'



class SignIn extends Component<Props> {



    _login() {
        this.props.login()
    }

    render() {
        const B = (props) => <Text style={{fontWeight: 'bold', fontSize: 12}}>{props.children}</Text>

        return (
            <View style={styles.container} >


                <Image style = {styles.logo} source={Images.logo}  resizeMode= 'contain' />

                <View style={{}}>

                  <Text style={styles.header}>Bienvenue</Text>


                  <TextInput
                      style={{marginTop: 30, height: 56}}
                      mode='outlined'
                      label='Login'
                  />
                  <TextInput
                      style={{marginTop: 10, height: 56}}
                      secureTextEntry={true}
                      mode='outlined'
                      label='Password'
                  />
                  <Text style={styles.textFloat}>{this.props.tokens.token }Mot de passe oublié ? </Text>

                  <TouchableOpacity onPress={() => {this._login()}} style={styles.button}>
                      <Text style={{color: 'white', fontSize: 16, alignSelf: 'center'}}>S'IDENTIFIER</Text>
                  </TouchableOpacity>

                  <Text style = {{alignSelf: 'center', marginVertical: 10, fontSize: 12}}>Vous n'avez pas de compte?</Text>
                  <TouchableOpacity onPress={() => {this.props.navigation.navigate('Signup')}}>
                      <Text style = {{alignSelf: 'center', color: Colors.primary, fontSize: 16}}>S'INSCRIRE</Text>
                  </TouchableOpacity>

                </View>



                <Text style = {styles.text}>En continuant, vous acceptez les <B>conditions d'utilisation</B> et la <B>politique de confidentialité</B> de Swiver</Text>
            </View>
        );
    }
}
const mapStateToProps = (state) => ({
    tokens: state.signIn.tokens,
    loginLoading: state.signIn.loginLoading,
    loginErrorMessage: state.signIn.loginErrorMessage,
});

const mapDispatchToProps = (dispatch) => ({
    login: () => dispatch(SingInActions.loginUser({username : '51868365',password : 'Cab_25725410'})),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignIn)
