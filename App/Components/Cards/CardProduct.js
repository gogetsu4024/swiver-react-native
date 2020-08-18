import React from 'react'
import {Avatar} from "react-native-paper";
import {StyleSheet, Text, View} from "react-native";
import Icon from 'react-native-vector-icons/AntDesign';





const CardProduct = ({name}) => {
    return(
        <View style={styles.cardStyle}>
            <Avatar.Icon style={{alignSelf:"flex-start",marginLeft:20}}  size={24} icon="folder" />
            <Text>{name}</Text>
            <Icon style={{alignSelf:"flex-end",marginRight:20}}  size={24} name="arrowright" />
        </View>
    );
};
const styles = StyleSheet.create({
    cardStyle: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,

        borderRadius:5,
        borderWidth: 1,
        borderColor: '#fff',



        height:110,
        width: 110,
        margin:20,
        backgroundColor:"white",
        alignItems: "center",
        justifyContent: 'center',
    }
});

export default CardProduct;
