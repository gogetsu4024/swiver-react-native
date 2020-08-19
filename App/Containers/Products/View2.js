import React from 'react'
import {Text, View} from "react-native";
import styles from "./ProductsStyle";
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


const SecondRoute = () => (
    <View style={styles.scene}>
        <FloatingAction
            actions={actions}
            onPressItem={name => {
                console.log(`selected button: ${name}`);
            }}
        />
    </View>
);

export default SecondRoute;
