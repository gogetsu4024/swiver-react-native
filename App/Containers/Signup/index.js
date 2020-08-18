import React, { Component } from 'react'
import { AppRegistry, StyleSheet, View, Text, Animated } from 'react-native'
import ViewPager from '@react-native-community/viewpager';

import StepIndicator from 'react-native-step-indicator';
import Icon from 'react-native-vector-icons/Entypo';
import { Colors } from 'App/Theme'
import Personal from './Personal/Personal';
import Enterprise from './Enterprise/Enterprise';
import Phone from './Phone/Phone';
import styles from './indexStyle'
import indicatorStyles from './IndicatorStyle'

const stepCount = 3;
const getStepIndicatorIconConfig = ({ position, stepStatus }) => {
  const iconConfig = {
    name: 'feed',
    color: stepStatus === 'finished' ? '#ffffff' : Colors.primary,
    size:  stepStatus === 'finished' ? 20: 24
  }
  switch (position) {
    case 0: {
      iconConfig.name = 'user'
      break
    }
    case 1: {
      iconConfig.name = 'clipboard'
      break
    }
    case 2: {
      iconConfig.name = 'phone'
      break
    }
    default: {
      break
    }
  }
  return iconConfig
}


export default class Signup extends Component {
  constructor () {
    super()
    this.state = {
    currentPage: 0,
    }
  }

  componentDidMount()
  {
    this.viewPager.setScrollEnabled(true);
  }


  _nextStep = position => {
    this.setState({ currentPage: position })
    this.viewPager.setPage(position)
  }


  render () {
  return (
    <View style={styles.container}>
      <ViewPager
        style={{ flexGrow: 1 }}
        ref={viewPager => {
          this.viewPager = viewPager
        }}>
      <View key="1">
        <Personal
          _nextStep = {this._nextStep}/>
      </View>
      <View key="2">
        <Enterprise
          _nextStep = {this._nextStep}/>
      </View>
      <View key="3">
        <Phone
          _nextStep = {this._nextStep}/>
      </View>
      </ViewPager>
      <View style={styles.stepIndicator}>
        <StepIndicator
          stepCount={3}
          renderStepIndicator={this.renderStepIndicator}
          customStyles={indicatorStyles}
          currentPosition={this.state.currentPage}
          labels={[
            'Personnelle',
            'Entreprise',
            'Téléphone'
          ]}
        />
      </View>
    </View>
  )
}

  renderStepIndicator = params => (
    <Icon {...getStepIndicatorIconConfig(params)} />
  )
}

