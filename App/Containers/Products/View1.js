import React from 'react'
import {Text, View} from "react-native";
import styles from "./ProductsStyle";
import {ScrollView} from "react-navigation";
import {Avatar, Card} from "react-native-paper";
import CardProduct from "App/Components/Cards/CardProduct"


const LeftContent = props => <Avatar.Icon {...props} size={36} icon="folder" />


const FirstRoute = () => (
    <View style={styles.scene}>
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
            <ScrollView style={{padding:2,flex:1}}  >
                <View style={styles.greyRectangle}>

                </View>


                <Card style={{flex: 2}}>
                    <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} />

                </Card>
                <Card style={{flex: 2}}>
                    <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} />

                </Card>
                <Card style={{flex: 2}}>
                    <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} />

                </Card>
                <Card style={{flex: 2}}>
                    <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} />

                </Card>
                <Card style={{flex: 2}}>
                    <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} />

                </Card>
                <Card style={{flex: 2}}>
                    <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} />

                </Card>

            </ScrollView>
        </Card>
    </View>

);
export default FirstRoute;
