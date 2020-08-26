import { StyleSheet } from 'react-native'
import { Colors } from 'App/Theme'

export default StyleSheet.create({
  header: {
    paddingTop: 10,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  input:{
    fontSize: 18,
    color: Colors.primary
  },
  itemContainer: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: Colors.lightGrey,
    paddingVertical: 5,
  },
  text:{
    fontSize: 17,
    fontWeight: 'bold',
    marginRight: 5,
  }
});
