import React from "react";
import {createStackNavigator} from "react-navigation";
import Products from 'App/Containers/Products/Products'
import Header from "App/Components/Header/Header"


const ProductStack = createStackNavigator({
    HomeScreen: {
        screen: Products,
        navigationOptions: ({ navigation }) => {
            return {
                header: () => (
                    <Header title="Products" hasBackButton={false} navigation={navigation} />
                )
            };
        }
    }
});
export default ProductStack
