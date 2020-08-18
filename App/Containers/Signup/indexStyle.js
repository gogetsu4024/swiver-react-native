import { Colors } from 'App/Theme'
import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff'
    },
    stepIndicator: {
        marginVertical: 10
    },
    page: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    stepLabel: {
        fontSize: 12,
        textAlign: 'center',
        fontWeight: '500',
        color: '#999999'
    },
});


export default styles;
