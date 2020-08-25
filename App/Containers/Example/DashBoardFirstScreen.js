import React, { useState, useEffect } from "react";
import {Text, View} from "react-native";
import styles from "../Products/ProductsStyle";
import {FloatingAction} from "react-native-floating-action";
import {Images, Colors} from 'App/Theme'
import {ScrollView} from "react-navigation";
import CardProduct from "App/Components/Cards/CardProduct"
import {Button, Card, Divider} from "react-native-paper";
import {CardMinimal,CardColoredStripes} from "App/Components/Cards/CardFlatListTypes"
import {ChartConfig,data} from "App/Components/Chart/ChartConfig"
import Icon from "react-native-vector-icons/AntDesign";
import {
    LineChart,
} from "react-native-chart-kit/dist/index";
import { Dimensions } from "react-native";




const window = Dimensions.get("window");
const screen = Dimensions.get("screen");

const actions = [
    {
        text: "Accessibility",
        icon: Images.ic_accessibility_white,
        name: "bt_accessibility",
        position: 2
    },
    {
        text: "Language",
        icon: Images.ic_language_white,
        name: "bt_language",
        position: 1
    },
    {
        text: "Location",
        icon: Images.ic_room_white,
        name: "bt_room",
        position: 3
    },
];



const FirstRoute = () => {
    const [dimensions, setDimensions] = useState({ window, screen });
    const onChange = ({ window, screen }) => {
        setDimensions({ window, screen });
    };

    useEffect(() => {
        Dimensions.addEventListener("change", onChange);
        return () => {
            Dimensions.removeEventListener("change", onChange);
        };
    });

    return(
    <View style={styles.scene}>

        <ScrollView >

            <View style={{flex:0.3,marginTop:10,marginBottom:10}}>
                <Text style={{marginLeft:20,color: "#797DA0"}}>Recent</Text>
                <ScrollView horizontal={true}  >
                    <View style={styles.topScrollView}>
                        <CardProduct name={"Swiver SA"}/>
                        <CardProduct name={"Invest SA"}/>
                        <CardProduct name={"Concise"}/>
                        <CardProduct name={"yo"}/>
                    </View>

                </ScrollView>
            </View>




            <Card style={{borderRadius: 20,boxShadow:2,flex:0.7,margin:5}}>
                <CardMinimal/>
                <CardColoredStripes/>
            </Card>

            <Card style={{borderRadius: 20,boxShadow:2,flex:0.7,margin:5}}>
                <Text style={{marginLeft:30,marginTop:20,fontWeight: "bold" , textAlign:"left"}}  >FACTURES</Text>
                <CardColoredStripes/>
                <CardColoredStripes/>
            </Card>




            <Card style={{borderRadius: 20,boxShadow:2,flex:0.7,margin:5}}>
                <View style={{ flex: 1,flexDirection : "row" , marginTop:20 }} >
                    <Text style={ {flex : 0.6,marginLeft:30,fontWeight: "bold" , textAlign:"left"}}  >Vente</Text>
                    <Button style={{flex : 0.2, borderRadius: 30, margin : 2}} icon="menu-down" mode="contained" onPress={() => console.log('Pressed')}>
                        année
                    </Button>
                    <View style={{flex : 0.2, alignItems : "center",marginLeft: 5 ,marginRight : 20, flexDirection : "row"}} >
                        <Text>2020</Text>
                        <Icon  name="caretdown" size={10}  />
                    </View>
                </View>

                <View >
                    <LineChart
                        data={data}
                        width={Dimensions.get('window').width -20}
                        height={220}
                        chartConfig={ChartConfig}
                        bezier
                    />
                </View>
            </Card>

        </ScrollView>


        <FloatingAction
            actions={actions}
            onPressItem={name => {
                console.log(`selected button: ${name}`);
            }}
        />
    </View>
)
};

export default FirstRoute;
