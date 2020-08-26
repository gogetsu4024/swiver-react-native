import React from "react";
import {createStackNavigator} from "react-navigation";
import DashBoard from 'App/Containers/Example/DashBoard'
import Header from "App/Components/Header/Header"


const DashBoardStack = createStackNavigator({
    HomeScreen: {
        screen: DashBoard,
        navigationOptions: ({ navigation }) => {
            return {
                header: () => (
                    <Header title = "Tableau de Bord" hasBackButton={false} navigation={navigation} />
                )
            };
        }
    }
});
export default DashBoardStack
