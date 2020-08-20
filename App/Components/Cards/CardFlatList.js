import React from 'react'
import {Text, View} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import {Divider} from "react-native-paper";
import {ScrollView} from "react-navigation";
import { Colors } from 'App/Theme'
import styles from "../../Containers/Products/ProductsStyle";



const renderIcon = ()=>(
    <Icon style={{justifyContent:"center", marginLeft:10,marginRight:10}} name="home" size={20}  />
);

const renderSecondIcon= () =>(
    <Icon color= {Colors.headerColor}  name="arrow-right" size={20}  />
);

const renderSideRectangle = (backGroundColor) =>(
    <View style={[styles.verticalRedRectangle,{marginLeft : 30,marginRight: 10 ,alignItems: "center", backgroundColor: backGroundColor}]}>

    </View>
);


const CardFlatList = (props)=>{
    return(
        <View style={{ flexDirection:"row",flex:1, paddingTop: 15, paddingBottom : 15}}  >


            <View style={ !props.rectangle&&!props.icon ? {flex:0.88 , flexDirection: "row",marginLeft: 30}: {flex:0.92 , flexDirection: "row"} }>



                <View style={{flex:1, flexDirection : "row"  }}>
                    {props.icon ? renderIcon() :  null}
                    {props.rectangle ? renderSideRectangle(Colors.primary) : null}
                    <View style={{alignItems: "flex-start",}}>
                    <Text style={[styles.textFont, {fontWeight: "bold"}]}  >{props.firstText}</Text>
                    <Text style={styles.textFont}>{props.secondText}</Text>
                    </View>
                </View>



                <View style={props.secondItemStyle ? props.secondItemStyle : {flex: 1, flexDirection : "row" , justifyContent : "flex-end" }}>
                    {props.rectangle ? renderSideRectangle(Colors.fire) : null}
                    <View style={{alignItems: "flex-end",}}>
                    <Text style={[styles.textFont, {color: '#0288D1'}]}>{props.thirdText}</Text>
                    <Text style={[styles.textFont]}>{props.forthText}</Text>
                    </View>
                </View>


            </View>



            <View style={{flex:0.12 ,justifyContent: "center" ,alignItems : "center"}}>
                {props.secondIcon ? renderSecondIcon() : null}
            </View>

        </View>
    );
};
export default CardFlatList
