import React, { Component } from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import Swiper from 'react-native-swiper'
import Icon from "react-native-vector-icons/FontAwesome";
import { Colors } from 'App/Theme'


const styles = StyleSheet.create({
    wrapper: {},
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0288D1'
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0288D1'
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0288D1'
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
        flex: 0.13,
    },
    subText:{
        color: '#fff',
        textAlign: 'center',
        fontSize: 20,
        flex: 0.1
    },
    skipButton:{
        color: 'blue',
        fontSize: 20,
    }

});
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
