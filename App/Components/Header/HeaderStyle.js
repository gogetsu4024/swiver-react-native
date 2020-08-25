import {StyleSheet} from "react-native";
import { Colors } from 'App/Theme'

const styles = StyleSheet.create({
    header: {
        width: "100%",
        height: 60,
        flexDirection: "row",
        backgroundColor: Colors.headerColor,
        paddingTop: 5,
    },
    headerTitle: {
        flex: 0.9,
        flexDirection : "row",
        justifyContent: "center",
        alignItems: "center"
    },
    headerText: {
        fontWeight: "bold",
        textAlign : "left",
        fontFamily: "Montserrat",
        fontSize: 24,
        color: "#FFF",
        letterSpacing: 1,
    },
    icons: {
        flex: 0.1,
        alignItems: "flex-start",
        justifyContent: "center",
        marginLeft:10
    }
});

export default styles;
