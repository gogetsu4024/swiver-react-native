/* @flow weak */

import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Picker,
} from 'react-native';
import { Colors } from 'App/Theme'

const TextDropdown = ({label, ...props}) => {

  const [isFocused, setFocused] = useState(false);
  const [selectedValue, setSelectedValue] = useState('');

  const handleFocus = () => setFocused(true);
  const handleBlur = () => setFocused(false);

  const labelStyle = {
    paddingHorizontal: 5,
    zIndex: 999,
    backgroundColor: 'white',
    position: 'absolute',
    left: 10,
    top: !isFocused ? 12 : -10,
    fontSize: !isFocused ? 16 : 13,
    color: !isFocused ? Colors.lightGrey: Colors.primary,
  };

  return(
    <View style={{ borderRadius: 4, borderColor:Colors.lightGrey, borderWidth:1}}>

      <Picker
        mode={'dropdown'}
        selectedValue={selectedValue}
        style={{ height: 45 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
      </Picker>
    </View>
  );
}






export default TextDropdown;

const styles = StyleSheet.create({

});
