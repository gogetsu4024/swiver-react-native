import { StyleSheet } from 'react-native'
import { Colors } from 'App/Theme'

export default StyleSheet.create({
container: {
  flexDirection: 'row',
},
flagContainer: {
  width: 75,
  height: 50,
  borderRadius: 4,
  marginRight: 10,
  justifyContent: 'center',
  alignItems: 'center',
},
inputContainer: {
  flex: 1,
  flexDirection: 'row',
  height: 50,
  borderRadius: 4
},
text: {
  fontSize: 16,
  alignSelf: 'center',
  marginHorizontal: 20
},
input: {
  alignSelf: 'center',
  fontSize: 16
},
});
