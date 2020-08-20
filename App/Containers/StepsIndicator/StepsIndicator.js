import React, { Component } from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import Swiper from 'react-native-swiper'
import Icon from "react-native-vector-icons/FontAwesome";
import { Colors } from 'App/Theme'
import styles from './StepsIndicatorStyle'

export default class StepsIndicator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPosition: 0
        }
    }





    render() {
        return (
            <Swiper  style={styles.wrapper} onIndexChanged={(index)=>{index===2?setTimeout(() => this.props.navigation.navigate('MainScreen'), 5000):console.log("no")}} loop={false} dot={<View style={{backgroundColor:'rgba(0,0,0,.2)', width: 8, height: 8,borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}} />} showsButtons={false}>
                <View style={styles.slide1}>
                    <Text style={styles.text}>Hello Swiper</Text>
                    <Text style={styles.subText}>Why you should wait before buying Samsung's galaxy S8</Text>
                    <TouchableOpacity onPress={() => {this.props.navigation.navigate('MainScreen')}}>
                        <Text style={styles.skipButton} >Skip</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.slide2}>
                    <Text style={styles.text}>Hello Swiper</Text>
                    <Text style={styles.subText}>Why you should wait before buying Samsung's galaxy S8</Text>
                    <TouchableOpacity onPress={() => {this.props.navigation.navigate('MainScreen')}}>
                        <Text style={styles.skipButton} >Skip</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.slide3}>
                    <Text style={styles.text}>Hello Swiper</Text>
                    <Text style={styles.subText}>Why you should wait before buying Samsung's galaxy S8</Text>
                    <TouchableOpacity onPress={() => {this.props.navigation.navigate('MainScreen')}}>
                        <Text style={styles.skipButton} >Skip</Text>
                    </TouchableOpacity>
                </View>
            </Swiper>
        )
    }
}
StepsIndicator.navigationOptions={
    tabBarIcon:({tintColor, focused})=>(
        <Icon name="home" size={30} color= {Colors.drawerItemLogoColor} />
    )
}  ;
