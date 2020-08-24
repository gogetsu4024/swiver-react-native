import React, { Component } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Modal,
  FlatList,
} from 'react-native';
import { Images, Colors } from 'App/Theme'
import { TextInput } from 'react-native-paper';
import styles from './PhoneStyle';
// native base imports
import {
  Container,
  Item,
  Input,
  Icon
} from 'native-base'
import data from './Countries'

// Default render of country flag
const defaultFlag = data.filter(
  obj => obj.name === 'United Kingdom'
  )[0].flag

export default class Phone extends Component {
  showModal = () =>{
    this.setState({ modalVisible: true });
  }
  hideModal = () => {
    this.setState({ modalVisible: false })
    // Refocus on the Input field after selecting the country code
    this.refs.PhoneInput._root.focus()
  }
   selectCountry = async (country) => {
  // Get data from Countries.js
  const countryData = await data
  try {
    // Get the country code
    const countryCode = await countryData.filter(
      obj => obj.name === country
    )[0].dial_code
    // Get the country flag
    const countryFlag = await countryData.filter(
      obj => obj.name === country
    )[0].flag
    // Update the state then hide the Modal
    this.setState({ phoneNumber: countryCode, flag: countryFlag })
    await this.hideModal()
  }
  catch (err) {
    console.log(err)
  }
}

onChangeText = (key, value) =>{
  this.setState({
    [key]: value
  })
}

  state = {
    flag: defaultFlag,
    modalVisible: false,
    phoneNumber: '',
  }

  _onPress = () => {
    this.props._nextStep(2);
  }

  render() {
    const countryData = data

    return (

      <View style={styles.container}>

        <Image style = {styles.logo} source= {Images.logo} resizeMode= 'contain' />

        <View style ={styles.subContainer}>
          <Text style={styles.header}>Numéro de{"\n"}téléphone portable</Text>

          <Text style = {{fontSize: 12}}>Taper votre numéro de téléphone portable</Text>


               <Container style={styles.infoContainer}>
               {/* Phone input with native-base */}
               <Item rounded style={styles.itemStyle}>
             {/* country flag */}
<View><Text>{this.state.flag}</Text></View>
               <Icon
                 active
                 name='call'
                 style={[styles.iconStyle, { marginLeft: 0 }]}
                 onPress={() => this.showModal()}
                 />
                 <Input
       placeholderTextColor='#adb4bc'
       keyboardType={'phone-pad'}
       returnKeyType='done'
       autoCapitalize='none'
       autoCorrect={false}
       secureTextEntry={false}
                 style={styles.inputStyle}
                 value={this.state.phoneNumber}
  ref='PhoneInput'
  onChangeText={(val) => this.onChangeText('phoneNumber', val)}/>

               {/* Modal for country code and flag */}
<Modal
animationType="slide"
transparent={false}
visible={this.state.modalVisible}>
<View style={{ flex: 1 }}>
  <View style={{ flex: 7, marginTop: 80 }}>
    {/* Render the list of countries */}
    <FlatList
      data={countryData}
      keyExtractor={(item, index) => index.toString()}
      renderItem={
        ({ item }) =>
          <TouchableWithoutFeedback onPress={() =>       this.selectCountry(item.name)}>
            <View style={styles.countryStyle}>
              <Text style={styles.textStyle}>
                {item.flag} {item.name} ({item.dial_code})
              </Text>
            </View>
          </TouchableWithoutFeedback>
      }
    />
  </View>
  <TouchableOpacity
    onPress={() => this.hideModal()}
    style={styles.closeButtonStyle}>
    <Text style={styles.textStyle}>
      Cancel
    </Text>
  </TouchableOpacity>
</View>
</Modal>
               </Item>
             </Container>




          <TouchableOpacity style={styles.button} onPress={this._onPress}>
            <Text style={{color: 'white', fontSize: 16, alignSelf: 'center'}}>SUIVANT</Text>
          </TouchableOpacity>
        </View>

        <View style={{flex: 0.1}}>
          <Text style = {styles.text}>Nous utilisons votre numéro de téléphone uniquement pour vous identifier, il ne sera partagé avec personne.</Text>
          <Text style = {{alignSelf: 'center', marginVertical: 10, fontSize: 12}}>Vous avez déja un compte?</Text>
          <Text style = {{alignSelf: 'center', color: Colors.primary, fontSize: 16}}>SE CONNECTER</Text>
        </View>



      </View>
    );
  }
  }
