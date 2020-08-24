import React from "react";

import styles from "../../Containers/StepsIndicator/StepsIndicatorStyle";
import {Text, TouchableOpacity, View} from "react-native";


const Steps= (props) =>(
    <View style={styles.slide1}>
        <Text style={styles.text}>{props.titre}</Text>

        <Text style={styles.subText}>{props.content}</Text>

        <TouchableOpacity onPress={() => {props.navigation.navigate('MainScreen')}}>

            <Text style={styles.skipButton} >Skip</Text>

        </TouchableOpacity>
    </View>
);

export default Steps
