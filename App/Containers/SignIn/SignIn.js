/* @flow */

import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    ActivityIndicator,
    Alert
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { TextInput } from 'react-native-paper';
import { Images, Colors } from 'App/Theme'
import styles from './SignInStyle'
import {connect} from "react-redux";
type Props = {};

import SingInActions from 'App/Stores/SignIn/Actions'
import  verifyToken from 'App/Utils/Jwt'
import {PropTypes} from "prop-types";


class SignIn extends Component<Props> {

    state = {
        username: '',
        password: '',
    };

    componentDidMount(){
        if (verifyToken(this.props.tokens.token))
            this.props.navigation.navigate('StepsIndicator')
    }
    UNSAFE_componentWillReceiveProps(nextProps): void {
        const { loginErrorMessage } = this.props;
        if (nextProps.loginErrorMessage !== loginErrorMessage && nextProps.loginErrorMessage !== null) {
            Alert.alert(
                'Error',
                nextProps.loginErrorMessage,
                [
                    { text: 'OK', onPress: () => console.log("yo") },
                    { text: 'clear', onPress: () => this.props.clearErrorMessage()/*console.log("yo")*/ }
                ],
            );
        }
    }
    _login() {
        this.props.login(this.state);
    }


    render() {
        const { password, username } = this.state;
        const B = (props) => <Text style={{fontWeight: 'bold', fontSize: 12}}>{props.children}</Text>

        if (this.props.loginLoading) {
            return (
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <ActivityIndicator />
                </View>
            );
        }

        return (
            <View style={styles.container} >


                <Image style = {styles.logo} source={Images.logo}  resizeMode= 'contain' />

                <View >

                    <Text style={styles.header}>Bienvenue</Text>


                    <TextInput
                        style={{marginTop: 30, height: 56}}
                        mode='outlined'
                        label='Login'
                        onChangeText={usr => this.setState({ username: usr })}
                        value={username}
                    />
                    <TextInput
                        style={{marginTop: 10, height: 56}}
                        secureTextEntry={true}
                        mode='outlined'
                        label='Password'
                        onChangeText={pass => this.setState({ password: pass })}
                    />
                    <Text style={styles.textFloat}>Mot de passe oublié ? </Text>
                    {this.props.loginErrorMessage ? <Text style={styles.textError}> Bad credentials ! try again </Text>: null}

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
SignIn.propTypes = {
    tokens: PropTypes.object,
    loginLoading: PropTypes.bool,
    loginErrorMessage: PropTypes.string,
    login: PropTypes.func,
}
const mapStateToProps = (state) => ({
    tokens: state.signIn.tokens,
    loginLoading: state.signIn.loginLoading,
    loginErrorMessage: state.signIn.loginErrorMessage,
});

const mapDispatchToProps = (dispatch) => ({
    login: (credentials) => dispatch(SingInActions.loginUser(credentials)),
    clearErrorMessage: () => dispatch(SingInActions.clearErrorMessage()),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignIn)
