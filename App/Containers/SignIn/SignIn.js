/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';

import { TextInput } from 'react-native-paper';
import { Images} from 'App/Theme'
type Props = {};

export default class SignIn extends Component<Props> {
  render() {
    const B = (props) => <Text style={{fontWeight: 'bold'}}>{props.children}</Text>

    return (
      <View style={styles.container}>


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

        <Text style={styles.textFloat}>Mot de passe oublié ? </Text>

        <TouchableOpacity onPress={() => {this.props.navigation.navigate('MainScreen')}} style={styles.button}>
          <Text style={{color: 'white', fontSize: 16, alignSelf: 'center'}}>S'IDENTIFIER</Text>
        </TouchableOpacity>

        <Text style = {{alignSelf: 'center', marginVertical: 10}}>Vous n'avez pas de compte?</Text>
        <Text style = {{alignSelf: 'center', color: '#4c87cd'}}>S'INSCRIRE</Text>

        <Text style = {styles.text}>En continuant, vous acceptez les <B>conditions d'utilisation</B> et la <B>politique de confidentialité</B> de Swiver</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    padding: 20,
    backgroundColor: 'white'
  },
  text: {
    fontSize: 13.5,
    alignSelf: 'center',
    textAlign: 'center',
    position: 'absolute',
    bottom:30
  },
  header : {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#4c87cd',
  },
  textFloat : {
    marginVertical: 20,
    alignSelf: 'flex-end',
    color: '#4c87cd',
  },
  logo: {
   position: 'absolute',
   top:10,
   width: 100,
   height: 70,
   alignSelf: 'center',
 },
 button: {
   marginVertical: 20,
   justifyContent: "center",
   backgroundColor: '#4c87cd',
   padding: 10,
   borderRadius: 2,
   height: 50
 },
});
