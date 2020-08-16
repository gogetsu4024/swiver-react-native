import {StyleSheet} from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        backgroundColor: Colors.drawerSecondBarColor,
        paddingBottom: 30,
        paddingTop: 20,
        justifyContent: 'center',
        alignItems:  'center',
    },
    logoText: {
        color: Colors.logoColor,
        fontFamily: 'google_sans_bold',
        fontSize: 26,
        fontWeight: '300',
    },
    logoSubText: {
        color: Colors.subLogoColor,
        fontFamily: 'google_sans_bold',
        fontSize: 15,
        fontWeight: '300',
    },
    containerWrapper:
        {
            flex : 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: Colors.drawerFirstBarColor
        },
    imageSideMenu: {
        width : 50,
        height : 50,
    }
});
