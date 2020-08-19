import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { Colors } from 'App/Theme'
import styles from './HeaderStyle'

const Header = ({ navigation, title }) => {
  const openMenu = () => {
    navigation.openDrawer();
  };
  return (
      <View style={styles.header}>
        {/* icon for the menu */}
        <TouchableOpacity onPress={openMenu} style={styles.icons}>
          <Icon name="home" size={30} color="white"  />
        </TouchableOpacity>
        <View style={styles.headerTitle}>
          <Text style={styles.headerText}>{title}</Text>
        </View>
      </View>
  );
};



export default Header;
