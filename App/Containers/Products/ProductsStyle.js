import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  scene: {
    flex: 1,
    backgroundColor: '#F7F8FA',
  },
  tabbar: {
    backgroundColor: '#0288D1',
  },
  greyRectangle: {
    height: 6,
    width: 33,
    backgroundColor: '#B1B1B1',
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 6,
  },
  verticalRedRectangle: {
    height: 40,
    width: 6,
    borderRadius: 6,
  },
  textFont: {
    color: '#797DA0',
    flex: 1,
    textAlign: 'right',
    fontFamily: 'Montserrat',
  },
  topScrollView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 20,
  },
})
export default styles
