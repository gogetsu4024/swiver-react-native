import React, { Component } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import { Images, Colors } from 'App/Theme'
import { TextInput } from 'react-native-paper';
import styles from './EnterpriseStyle';

import TextDropdown from "App/Components/Dropdown/TextDropdown";
import data from './Activities';
import currencies from './Currencies';

export default class Enterprise extends Component {

  _onPress = () => {
    this.props._nextStep(2);
  }

  componentDidMount(){
  }

  render() {
    const B = (props) => <Text style={{fontWeight: 'bold', fontSize: 12}}>{props.children}</Text>

    return (

      <View style={styles.container}>

        <Image style = {styles.logo} source= {Images.logo} resizeMode= 'contain' />

        <View style ={styles.subContainer}>
          <Text style={styles.header}>Nouvel Utilisateur</Text>


          <ScrollView style={{marginVertical: 10}}>


            <TextInput
            style={{height: 45, marginBottom: 12}}
            mode='outlined'
            label="Nom de l'entreprise"
            />


            <TextDropdown
              style={{ marginBottom: 5}}
              label={"Activité de l'entreprise"}
              data={data}/>

            <TextInput
            style={{height: 45, marginBottom: 12}}
            mode='outlined'
            label="Pays"
            />

            <TextDropdown
              style={{marginBottom: 5}}
              label={"Devise"}
              data={currencies}/>


              <TextInput
              style={{height: 45, marginBottom: 5}}
              mode='outlined'
              label="Région"
              />

              <TextInput
              style={{height: 45, marginBottom: 12}}
              mode='outlined'
              label="Code postal"
              />



              </ScrollView>



          <TouchableOpacity style={styles.button} onPress={this._onPress}>
            <Text style={{color: 'white', fontSize: 16, alignSelf: 'center'}}>SUIVANT</Text>
          </TouchableOpacity>
        </View>

        <View style={{flex: 0.13}}>
          <Text style = {styles.text}>En continuant, vous acceptez les <B>conditions d'utilisation</B> et la <B>politique de confidentialité</B> de Swiver</Text>
          <Text style = {{alignSelf: 'center', marginVertical: 10, fontSize: 12}}>Vous avez déja un compte?</Text>
          <Text style = {{alignSelf: 'center', color: Colors.primary, fontSize: 16}}>SE CONNECTER</Text>
        </View>



      </View>
    );
  }
  }

/*
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
*/
