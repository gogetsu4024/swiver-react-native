import {StyleSheet} from "react-native";
import { Colors } from 'App/Theme'

const styles = StyleSheet.create({
    defaultStyle: {
        paddingVertical: 15,
        paddingHorizontal: 14,
        flex :1,
        flexDirection : 'row'
    },
    activeStyle: {
        backgroundColor: '#A3A5A7',
        borderRadius: 4
    },
    textFocused: {color : Colors.blueViolet,marginRight:100},
    textUnfocused: {color : Colors.silver,marginRight:100},
    shadow: {
        shadowColor: Colors.silver,
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowRadius: 8,
        shadowOpacity: 0.1
    }
});
export default styles
