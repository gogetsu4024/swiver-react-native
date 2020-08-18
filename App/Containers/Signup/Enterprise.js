/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

export default class Enterprise extends Component {
  _onPress = () => {
    this.props._nextStep(2);
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>I'm the Enterprise component</Text>
        <TouchableOpacity style={styles.button} onPress={this._onPress}>
          <Text style={{color: 'white', fontSize: 16, alignSelf: 'center'}}>SUIVANT</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    marginVertical: 20,
    justifyContent: "center",
    backgroundColor: '#4c87cd',
    padding: 10,
    borderRadius: 2,
    height: 50
  },
});
