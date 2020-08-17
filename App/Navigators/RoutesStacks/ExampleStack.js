import React from "react";
import {createStackNavigator} from "react-navigation";
import ExampleScreen from 'App/Containers/Example/ExampleScreen'
import Header from "App/Components/Header"


const ExampleStack = createStackNavigator({
    HomeScreen: {
        screen: ExampleScreen,
        navigationOptions: ({ navigation }) => {
            return {
                header: () => (
                    <Header title="ExampleScreen" hasBackButton={false} navigation={navigation} />
                )
            };
        }
    }
});
export default ExampleStack
