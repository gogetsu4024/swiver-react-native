import React, { Component } from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import Swiper from 'react-native-swiper'
import Icon from "react-native-vector-icons/FontAwesome";
import { Colors } from 'App/Theme'
import styles from './StepsIndicatorStyle'
import Steps from 'App/Components/Steps/StepsGenerique'

export default class StepsIndicator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPosition: 0
        }
    }





    render() {
        return (
            <Swiper  style={styles.wrapper} onIndexChanged={(index)=>{index===5?setTimeout(() => this.props.navigation.navigate('MainScreen'), 5000):console.log("no")}} loop={false} dot={<View style={{backgroundColor:'rgba(0,0,0,.2)', width: 8, height: 8,borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}} />} showsButtons={false}>
                <Steps  titre="gerez vos entreprises comme un pro" content="What the Repeal of Online Privacy Protections Means for you" navigation={this.props.navigation}/>
                <Steps  titre="Solution 100% en ligne" content="What the Repeal of Online Privacy Protections Means for you" navigation={this.props.navigation}/>
                <Steps  titre="Consuler vos factures" content="What the Repeal of Online Privacy Protections Means for you" navigation={this.props.navigation}/>
                <Steps  titre="Gérez vos clients et vos fournisseurs" content="What the Repeal of Online Privacy Protections Means for you" navigation={this.props.navigation}/>
                <Steps  titre="Gérez vos stock" content="What the Repeal of Online Privacy Protections Means for you" navigation={this.props.navigation}/>
                <Steps  titre="Gérez vos Utilisateurs" content="What the Repeal of Online Privacy Protections Means for you" navigation={this.props.navigation}/>


            </Swiper>
        )
    }
}
StepsIndicator.navigationOptions={
    tabBarIcon:({tintColor, focused})=>(
        <Icon name="home" size={30} color= {Colors.drawerItemLogoColor} />
    )
}  ;
