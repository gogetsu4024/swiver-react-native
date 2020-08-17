import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        justifyContent: 'center',
        flex: 1,
        padding: 20,
        backgroundColor: 'white'
    },
    text: {
        paddingTop : 30,
        fontSize: 13.5,
        alignSelf: 'center',
        textAlign: 'center',
    },
    header : {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#4c87cd',
    },
    textFloat : {
        marginVertical: 20,
        alignSelf: 'flex-end',
        color: '#4c87cd',
    },
    logo: {
        width: 100,
        height: 70,
        alignSelf: 'center',
    },
    button: {
        marginVertical: 20,
        justifyContent: "center",
        backgroundColor: '#4c87cd',
        padding: 10,
        borderRadius: 2,
        height: 50
    },
});
