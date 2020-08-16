import { StyleSheet } from 'react-native'
import { Colors } from 'App/Theme'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.splashBackground,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoText: {
    color: Colors.white,
    fontFamily: 'google_sans_bold',
    fontSize: 30,
    fontWeight: '300',
  },
})
