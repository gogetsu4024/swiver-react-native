import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Images, Colors } from 'App/Theme'
import { TextInput } from 'react-native-paper';

export default class Personal extends Component {

  _onPress = () => {
    this.props._nextStep(1);
  }

  render() {
    const B = (props) => <Text style={{fontWeight: 'bold', fontSize: 13}}>{props.children}</Text>

    return (
      <View style={styles.container}>
        <Image style = {styles.logo} source= {Images.logo} resizeMode= 'contain' />

        <Text style={styles.header}>Nouvel Utilisateur</Text>

        <TextInput
        style={{marginTop: 30, height: 45}}
        mode='outlined'
        label='Nom'
        />

        <TextInput
        style={{marginTop: 10, height: 45}}
        mode='outlined'
        label='Prénom'
        />

        <TextInput
        style={{marginTop: 10, height: 45}}
        mode='outlined'
        label='Login'
        />

        <TextInput
        style={{marginTop: 10, height: 45}}
        secureTextEntry={true}
        mode='outlined'
        label='Password'
        />

        <TouchableOpacity style={styles.button} onPress={this._onPress}>
          <Text style={{color: 'white', fontSize: 16, alignSelf: 'center'}}>SUIVANT</Text>
        </TouchableOpacity>

        <Text style = {styles.text}>En continuant, vous acceptez les <B>conditions d'utilisation</B> et la <B>politique de confidentialité</B> de Swiver</Text>

        <Text style = {{alignSelf: 'center', marginVertical: 10, fontSize: 12}}>Vous avez déja un compte?</Text>
        <Text style = {{alignSelf: 'center', color: Colors.primary, fontSize: 16}}>SE CONNECTER</Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 30,
    backgroundColor: 'white'
  },
  text: {
    fontSize: 13,
    alignSelf: 'center',
    textAlign: 'center',
  },
  header : {
    marginTop: 4,
    fontSize: 30,
    fontWeight: 'bold',
    color: Colors.primary,
  },
  textFloat : {
    marginVertical: 20,
    alignSelf: 'flex-end',
    color: Colors.primary,
  },
  logo: {
   width: 130,
   height: 70,
   alignSelf: 'center',
 },
 button: {
   marginVertical: 20,
   justifyContent: "center",
   backgroundColor: Colors.primary,
   padding: 10,
   borderRadius: 2,
   height: 50
 },
});
