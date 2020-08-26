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
          <Icon name="navicon" size={24} color="white"  />
        </TouchableOpacity>
        <View style={styles.headerTitle}>
            <View style={{flex: 0.8}}>
          <Text style={styles.headerText}>{title}</Text>
            </View>
                <TouchableOpacity onPress={openMenu} style={{ flex: 0.1,
                    alignItems: "flex-start",
                    justifyContent: "center",
                    }}>
                <Icon name="search" size={22} color="white"  />
            </TouchableOpacity>
            <TouchableOpacity onPress={openMenu} style={{ flex: 0.1,
                marginLeft:5,
                alignItems: "flex-start",
                justifyContent: "center",
            }}>
                <Icon name="cog" size={22} color="white"  />
            </TouchableOpacity>
        </View>
      </View>
  );
};



export default Header;
