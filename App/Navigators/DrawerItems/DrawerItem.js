import React from 'react';
import { View,StyleSheet,Text } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import MatIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import { Colors } from 'App/Theme'
import styles from './DrawerItemStyle'



class DrawerItem extends React.Component {
  renderIcon = () => {
    const { title, focused } = this.props;

    switch (title) {
      case "ExampleScreen":
        return (
            <Icon name="home" size={30} color= {Colors.drawerItemLogoColor} />
        );
      case "Splash":
        return (
            <MatIcon name="bike" size={30} color={Colors.drawerItemLogoColor} />
        );
      case "Logout":
        return (
            <MatIcon name="logout" size={30} color={Colors.drawerItemLogoColor} />
        );

      default:
        return (
            <Icon name="rocket" size={30} color={Colors.drawerItemLogoColor} />
        );
    }
  };

  render() {
    const { focused, title } = this.props;

    const containerStyles = [
      styles.defaultStyle,
      {flex:1},
      focused ? [styles.activeStyle, styles.shadow] : null
    ];

    return (
        <View  style={containerStyles}>
          <View middle flex={0.2} style={{ marginRight: 10 }}>
            {this.renderIcon()}
          </View>
          <View style={{flexDirection :'row' , alignContent: 'center', flex : 0.8}} >
            <Text
                style={focused ? styles.textFocused: styles.textUnfocused}
            >
              {title}
            </Text>
          </View>
        </View>
    );
  }
}


export default DrawerItem;
