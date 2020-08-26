/* @flow weak */

import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Picker,
} from 'react-native';
import {  Colors } from 'App/Theme'

const TextDropdown = ({label, data, style}) => {

  const [isFocused, setFocused] = useState(false);
  const [selectedValue, setSelectedValue] = useState('');

  const handleFocus = () => setFocused(true);
  const handleBlur = () => setFocused(false);

  const renderPickerItem = () => {

  }
  const onValueChange = (itemValue) => {
    setSelectedValue(itemValue);
    setFocused(true);
  }
  const labelStyle = {
    paddingHorizontal: 5,
    zIndex: 1,
    backgroundColor: 'white',
    position: 'absolute',
    left: 10,
    top: !isFocused ? 11 : -10,
    fontSize: !isFocused ? 16 : 12,
    color: Colors.lightGrey,
  };

  return(
    <View style={[styles.container, style]}>
    <Text style={labelStyle}>
               {label}
             </Text>
      <Picker
        selectedValue={selectedValue}
        style={{ height: 45, marginLeft: 5, color: selectedValue===''? 'white' : Colors.grey }}
        onValueChange={(itemValue, itemIndex) => onValueChange(itemValue)}
      >
        {data.map(value => {
            switch(label) {
              case "Activité de l'entreprise":
                return <Picker.Item label={value.name} value={value.name} />;
              case "Devise":
                return <Picker.Item label={value.currency} value={value.currency} />;
              default:
                return;
            }


        })}
      </Picker>
    </View>
  );
}






export default TextDropdown;

const styles = StyleSheet.create({
  container: {
    flex:1,
    borderRadius: 4,
    borderColor:Colors.lightGrey,
    borderWidth:1
  }
});
