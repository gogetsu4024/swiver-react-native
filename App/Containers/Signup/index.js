import React, { Component } from 'react'
import { AppRegistry, StyleSheet, View, Text, Animated } from 'react-native'
import ViewPager from '@react-native-community/viewpager';

import StepIndicator from 'react-native-step-indicator';
import Icon from 'react-native-vector-icons/Entypo';
import { Colors } from 'App/Theme'
import Personal from './Personal';
import Enterprise from './Enterprise';
import Phone from './Phone';

const indicatorStyles = {
  stepIndicatorSize: 45,
  currentStepIndicatorSize: 55,
  separatorStrokeWidth: 1,
  currentStepStrokeWidth: 3,
  stepStrokeCurrentColor: Colors.primary,
  stepStrokeWidth: 2,
  separatorStrokeFinishedWidth: 2.5,
  stepStrokeFinishedColor: Colors.primary,
  stepStrokeUnFinishedColor: Colors.lightGrey,
  separatorFinishedColor: Colors.primary,
  separatorUnFinishedColor: Colors.lightGrey,
  stepIndicatorFinishedColor: Colors.primary,
  stepIndicatorUnFinishedColor: '#ffffff',
  stepIndicatorCurrentColor: '#ffffff',
  stepIndicatorLabelCurrentColor: Colors.primary,
  stepIndicatorLabelFinishedColor: '#ffffff',
  stepIndicatorLabelUnFinishedColor: Colors.lightGrey,
  labelColor: '#999999',
  labelSize: 15,
  currentStepLabelColor: Colors.primary
}

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
  stepIndicator: {
    marginVertical: 10
  },
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  stepLabel: {
    fontSize: 12,
    textAlign: 'center',
    fontWeight: '500',
    color: '#999999'
  }
})
