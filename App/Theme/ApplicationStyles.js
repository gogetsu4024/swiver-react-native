/**
 * This file defines the base application styles.
 *
 * Use it to define generic component styles (e.g. the default text styles, default button styles...).
 */
import Colors from './Colors'
import { DefaultTheme } from 'react-native-paper';

export default {
  paperStyle: {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: Colors.primary,
      background: Colors.white,
      placeholder : Colors.lightGrey
    },
  },

  button: {
    backgroundColor: Colors.primary,
  },
}
