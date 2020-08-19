import React from 'react'
import {Text, View} from "react-native";
import styles from "./ProductsStyle";
import {ScrollView} from "react-navigation";
import {Avatar, Card,Divider} from "react-native-paper";
import CardProduct from "App/Components/Cards/CardProduct"
import CardFlatList from "App/Components/Cards/CardFlatList"
import {FloatingAction} from "react-native-floating-action";
import {Images} from 'App/Theme'

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

const LeftContent = props => <Avatar.Icon {...props} size={36} icon="folder" />

const FirstRoute = () => (
    <ScrollView style={styles.scene}>

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
                <View style={styles.greyRectangle}>

                </View>
            <ScrollView style={{padding:2,flex:1}}  >

                <CardFlatList/>
                <Divider/>
                <CardFlatList/>
                <Divider/>
                <CardFlatList/>
                <Divider/>
                <CardFlatList/>
                <Divider/>
                <CardFlatList/>
                <Divider/>
                <CardFlatList/>
                <Divider/>
                <CardFlatList/>
                <Divider/>

            </ScrollView>
            <FloatingAction
                actions={actions}
                onPressItem={name => {
                    console.log(`selected button: ${name}`);
                }}
            />
        </Card>



    </ScrollView>

);
export default FirstRoute;
