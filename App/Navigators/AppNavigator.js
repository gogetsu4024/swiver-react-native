import React from "react";
import {createAppContainer, createStackNavigator} from 'react-navigation'

import SplashScreen from 'App/Containers/SplashScreen/SplashScreen'
import SignIn from 'App/Containers/SignIn/SignIn'
import Signup from 'App/Containers/Signup/index'
import StepsIndicator from 'App/Containers/StepsIndicator/StepsIndicator'
import { createDrawerNavigator,} from "react-navigation";
import Menu from "./Menu";
import DrawerItem from "./DrawerItems/DrawerItem";
import ProductStack from './RoutesStacks/ProductsStack'
import DashBoardStack from './RoutesStacks/DashBoardStack'
/**
 * The root screen contains the application's navigation.
 *
 * @see https://reactnavigation.org/docs/en/hello-react-navigation.html#creating-a-stack-navigator
 */




const  routeMap = {


    DashBoard: {
        screen: DashBoardStack,
        navigationOptions: navOpt => ({
            drawerLabel: ({ focused }) => (
                <DrawerItem focused={focused} title="Tableau de bord" />
            )
        }),
    },
    Product: {
        screen: ProductStack,
        navigationOptions: navOpt => ({
            drawerLabel: ({ focused }) => (
                <DrawerItem focused={focused} title="Vente" />
            )
        }),
    },
    LogOut: {
        screen: SignIn,
        navigationOptions: navOpt => ({
            drawerLabel: ({ focused }) => (
                <DrawerItem focused={focused} title="Se deconnecter de : Uix Design" />
            )
        }),
    }


};

const DrawerNavigator  = createDrawerNavigator(
    routeMap,Menu

);



const StackNavigator = createStackNavigator(
    {
        // Create the application routes here (the key is the route name, the value is the target screen)
        // See https://reactnavigation.org/docs/en/stack-navigator.html#routeconfigs
        SplashScreen: SplashScreen,
        SignIn: SignIn,
        Signup: Signup,
        StepsIndicator : StepsIndicator,
        // The main application screen is our "ExampleScreen". Feel free to replace it with your
        // own screen and remove the example.
        MainScreen: DrawerNavigator,

    },
    {
        // By default the application will show the splash screen
        initialRouteName: 'SplashScreen',
        // See https://reactnavigation.org/docs/en/stack-navigator.html#stacknavigatorconfig
        headerMode: 'none',
    }
)

export default createAppContainer(StackNavigator)
