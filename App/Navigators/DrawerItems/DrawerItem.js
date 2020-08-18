import React from 'react';
import { View,StyleSheet,Text } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import MatIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import { Colors } from 'App/Theme'



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
      focused ? [styles.activeStyle, styles.shadow] : null
    ];

    return (
        <View  style={containerStyles}>
          <View middle flex={0.1} style={{ marginRight: 10 }}>
            {this.renderIcon()}
          </View>
          <View style={{flexDirection :'row' , alignContent: 'center', flex : 0.9}} >
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

const styles = StyleSheet.create({
  defaultStyle: {
    paddingVertical: 15,
    paddingHorizontal: 14,
    flex :1,
    flexDirection : 'row'
  },
  activeStyle: {
    backgroundColor: '#A3A5A7',
    borderRadius: 4
  },
  textFocused: {color : Colors.silver},
  textUnfocused: {color : Colors.blueViolet},
  shadow: {
    shadowColor: Colors.silver,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 8,
    shadowOpacity: 0.1
  }
});

export default DrawerItem;
