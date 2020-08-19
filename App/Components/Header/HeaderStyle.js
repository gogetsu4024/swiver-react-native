import {StyleSheet} from "react-native";
import { Colors } from 'App/Theme'

const styles = StyleSheet.create({
    header: {
        width: "100%",
        height: 60,
        flexDirection: "row",
        alignContent: "center",
        justifyContent: "center",
        backgroundColor: Colors.headerColor
    },
    headerTitle: {
        flexDirection: "row",
        alignItems: "center",
        alignContent: "center"
    },
    headerText: {
        fontWeight: "bold",
        fontSize: 20,
        color: "#333",
        letterSpacing: 1,
    },
    icons: {
        position: "absolute",
        left: 16,
        top: 15
    }
});

export default styles;
