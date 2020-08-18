import { StyleSheet } from 'react-native'
import { Colors } from 'App/Theme'

export default StyleSheet.create({
    container: {
        justifyContent: 'center',
        flex: 1,
        padding: 30,
        backgroundColor: 'white'
    },
    text: {
      position: 'absolute',
      bottom: 20,
      fontSize: 12,
      alignSelf: 'center',
      textAlign: 'center',
    },
    header : {
        fontSize: 34,
        fontWeight: 'bold',
        color: Colors.primary,
    },
    textFloat : {
      fontSize: 16,
      marginVertical: 20,
      alignSelf: 'flex-end',
      color: Colors.primary,
    },
    logo: {
      position: 'absolute',
      top: 20,
      width: 124,
      height: 25.4,
      alignSelf: 'center',
    },
    button: {
        marginVertical: 30,
        justifyContent: "center",
        backgroundColor: Colors.primary,
        padding: 10,
        borderRadius: 2,
        height: 57
    },
});
