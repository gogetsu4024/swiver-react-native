import React from 'react'
import { Images, Colors } from 'App/Theme'
import {
    View,
    Text,
    Image,
    StyleSheet,
    Animated,
    ActivityIndicator,
} from 'react-native';
import {createMaterialTopTabNavigator} from 'react-navigation'
import StepsIndicator from 'App/Containers/StepsIndicator/StepsIndicator'


const Tabs = createMaterialTopTabNavigator(
    {
        Home: StepsIndicator,
        Profile: StepsIndicator,
    },
    {
        tabBarOptions: {
            activeTintColor: 'white',
            showIcon: true,
            showLabel:false,
            style: {
                backgroundColor:'red'
            }
        },
    }
);

export default class Products extends React.Component {
    state = {

    };

    componentDidMount() {

    }

    render() {
        return (
           <Tabs/>
        );
    }
}
