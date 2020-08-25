import { StyleSheet } from 'react-native'
import { Colors } from 'App/Theme'

export default StyleSheet.create({
container: {
  flex: 1,
  padding: 30,
  justifyContent: 'space-between',
  backgroundColor: 'white',
},
subContainer: {
  flex: 0.76,
  flexDirection: 'column',
  justifyContent: 'space-between',
},
text: {
  fontSize: 12,
  alignSelf: 'center',
  textAlign: 'center',
},
header : {
  flex: 0.6,
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
  marginTop: 10,
  justifyContent: "center",
  backgroundColor: Colors.primary,
  padding: 10,
  borderRadius: 4,
  height: 57,
},

infoContainer: {
   justifyContent: 'center',
   alignItems: 'center',
 },
 iconStyle: {
   color: '#5a52a5',
   fontSize: 28,
   marginLeft: 15
 },
 itemStyle: {
   marginBottom: 10,
 },
 inputStyle: {
   flex: 1,
   fontSize: 17,
   fontWeight: 'bold',
   color: '#5a52a5',
 },
});
