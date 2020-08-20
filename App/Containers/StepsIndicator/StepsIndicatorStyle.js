import {StyleSheet} from "react-native";
import { Colors } from 'App/Theme'

const styles = StyleSheet.create({
    wrapper: {},
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0288D1'
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0288D1'
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0288D1'
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
        flex: 0.13,
    },
    subText:{
        color: '#fff',
        textAlign: 'center',
        fontSize: 20,
        flex: 0.1
    },
    skipButton:{
        color: 'blue',
        fontSize: 20,
    }

});
export default styles
