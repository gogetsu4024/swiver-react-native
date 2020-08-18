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
import styles from './EnterpriseStyle';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

export default class Enterprise extends Component {

  _onPress = () => {
    this.props._nextStep(2);
  }

  render() {
    const B = (props) => <Text style={{fontWeight: 'bold', fontSize: 12}}>{props.children}</Text>

    return (

      <View style={styles.container}>

        <Image style = {styles.logo} source= {Images.logo} resizeMode= 'contain' />

        <View style ={styles.subContainer}>
          <Text style={styles.header}>Nouvel Utilisateur</Text>

          <TextInput
          style={{height: 45}}
          mode='outlined'
          label='Nom de l&apos;entreprise'
          />

          <TextInput
          style={{height: 45}}
          mode='outlined'
          label='Activité de l&apos;entreprise'
          />

          <TextInput
          style={{height: 45}}
          mode='outlined'
          label='Pays'
          />

          <TextInput
          style={{height: 45}}
          mode='outlined'
          label='Devise'
          />

          <TextInput
          style={{height: 45}}
          mode='outlined'
          label='Région'
          />

          <TextInput
          style={{height: 45}}
          mode='outlined'
          label='Code postal'
          />



          <TouchableOpacity style={styles.button} onPress={this._onPress}>
            <Text style={{color: 'white', fontSize: 16, alignSelf: 'center'}}>SUIVANT</Text>
          </TouchableOpacity>
        </View>

        <View style={{flex: 0.1}}>
          <Text style = {styles.text}>En continuant, vous acceptez les <B>conditions d'utilisation</B> et la <B>politique de confidentialité</B> de Swiver</Text>
          <Text style = {{alignSelf: 'center', marginVertical: 10, fontSize: 12}}>Vous avez déja un compte?</Text>
          <Text style = {{alignSelf: 'center', color: Colors.primary, fontSize: 16}}>SE CONNECTER</Text>
        </View>



      </View>
    );
  }
  }