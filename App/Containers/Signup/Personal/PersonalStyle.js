import { StyleSheet } from 'react-native'
import { Colors } from 'App/Theme'

export default StyleSheet.create({
container: {
  flex: 1,
  padding: 30,
  justifyContent: 'space-between',
  backgroundColor: 'white'
},
subContainer: {
  flex: 0.73,
  flexDirection: 'column',
  justifyContent: 'space-between',
  marginBottom: 20
},
text: {
  fontSize: 12,
  alignSelf: 'center',
  textAlign: 'center',
},
header : {
  fontSize: 30,
  fontWeight: 'bold',
  color: Colors.primary,
},
logo: {
  flex: 0.05,
  width: 130,
  alignSelf: 'center',
},
button: {
  justifyContent: "center",
  backgroundColor: Colors.primary,
  padding: 10,
  borderRadius: 4,
  height: 50,
  marginTop: 10
},
});
