import React from "react";
import { createAppContainer, createStackNavigator } from 'react-navigation'

import ExampleScreen from 'App/Containers/Example/ExampleScreen'
import SplashScreen from 'App/Containers/SplashScreen/SplashScreen'
import { createDrawerNavigator,} from "react-navigation";
import Menu from "./Menu";
import DrawerItem from "./DrawerItems/DrawerItem";
/**
 * The root screen contains the application's navigation.
 *
 * @see https://reactnavigation.org/docs/en/hello-react-navigation.html#creating-a-stack-navigator
 */
const  routeMap = {

    ExampleScreen: {
        screen: ExampleScreen,
        navigationOptions: navOpt => ({
            drawerLabel: ({ focused }) => (
                <DrawerItem focused={focused} title="ExampleScreen" />
            )
        })
    },
    Splash: {
        screen: SplashScreen,
        navigationOptions: navOpt => ({
            drawerLabel: ({ focused }) => (
                <DrawerItem focused={focused} title="Splash" />
            )
        })
    }

}

const  routeMap2 = {

    ExampleScreen: {
        screen: ExampleScreen,
        navigationOptions: navOpt => ({
            drawerLabel: ({ focused }) => (
                <DrawerItem focused={focused} title="ExampleScreen" />
            )
        })
    },
}
const DrawerNavigator  = createDrawerNavigator(
    routeMap,Menu

);
const DrawerNavigator2  = createDrawerNavigator(
    routeMap2,Menu

);


const StackNavigator = createStackNavigator(
  {
    // Create the application routes here (the key is the route name, the value is the target screen)
    // See https://reactnavigation.org/docs/en/stack-navigator.html#routeconfigs
    SplashScreen: SplashScreen,
    // The main application screen is our "ExampleScreen". Feel free to replace it with your
    // own screen and remove the example.
    MainScreen: DrawerNavigator,
    MainScreen2: DrawerNavigator2,

  },
  {
    // By default the application will show the splash screen
    initialRouteName: 'SplashScreen',
    // See https://reactnavigation.org/docs/en/stack-navigator.html#stacknavigatorconfig
    headerMode: 'none',
  }
)

export default createAppContainer(StackNavigator)
