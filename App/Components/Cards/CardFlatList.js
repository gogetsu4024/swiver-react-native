import React from 'react'
import {Text, View} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import {Divider} from "react-native-paper";
import {ScrollView} from "react-navigation";
import { Colors } from 'App/Theme'

const CardFlatList = ()=>{
    return(
<View style={{marginBottom:20,marginTop:20, flexDirection:"row",flex:1}}  >
    <View style={{flex:0.92}}>
        <View style={{flex:1 , flexDirection:"row" }}>

            <View style={{flex:1, flexDirection : "row", justifyContent:"center"}}>
                <Icon style={{marginRight:10}} name="home" size={20}  />
                <Text style={{fontWeight: "bold",fontFamily: "Montserrat"}}  >Concise Consulting</Text>
            </View>
            <Text style={{flex:1,textAlign: 'center', color: '#0288D1',fontFamily: "Montserrat"}}>12 000 000</Text>
        </View>
        <View style={{flex:1 , flexDirection:"row" }}>
            <Text style={{ color: "#797DA0", flex:1,textAlign: 'center', fontFamily: "Montserrat"}}>Achraf Noomen</Text>
            <Text style={{ color: "#797DA0", flex:1,textAlign: 'center', fontFamily: "Montserrat"}}>chiffre d'affaire</Text>
        </View>
    </View>
    <View style={{flex:0.08,justifyContent:"center"}}>
        <Icon color= {Colors.headerColor}  name="arrow-right" size={20}  />
    </View>
</View>
    );
};
export default CardFlatList
