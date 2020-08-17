import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { Colors } from 'App/Theme'

const Header = ({ navigation, title }) => {
  const openMenu = () => {
    navigation.openDrawer();
  };
  return (
      <View style={styles.header}>
        {/* icon for the menu */}
        <TouchableOpacity onPress={openMenu} style={styles.icons}>
          <Icon name="home" size={30} color= {Colors.drawerItemLogoColor} />
        </TouchableOpacity>
        <View style={styles.headerTitle}>
          <Text style={styles.headerText}>{title}</Text>
        </View>
      </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 60,
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
    backgroundColor: Colors.columbiaBlue
  },
  headerTitle: {
    flexDirection: "row",
    alignItems: "center",
    alignContent: "center"
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#333",
    letterSpacing: 1,
  },
  icons: {
    position: "absolute",
    left: 16,
    top: 15
  }
});

export default Header;
