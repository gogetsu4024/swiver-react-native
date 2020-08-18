import React from 'react'
import { Images, Colors } from 'App/Theme'
import {
    View,
    Text,
    Dimensions,
    StyleSheet,
    Animated,
    ActivityIndicator,
} from 'react-native';
import StepsIndicator from 'App/Containers/StepsIndicator/StepsIndicator'
import {
    TabView,
    TabBar,
    SceneMap,
    NavigationState,
    SceneRendererProps,
} from 'react-native-tab-view';
import Icon from 'react-native-vector-icons/AntDesign';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import {ScrollView} from "react-navigation";
import styles from './ProductsStyle'
import FirstRoute from './View1'
import SecondRoute from './View2'





const initialLayout = { width: Dimensions.get('window').width };




export default function Products() {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'first', title: 'Tableau de Bord', icon: 'home' },
        { key: 'second', title: 'Second', icon: 'home' },
    ]);

    const renderIcon = ({ route, color }: { route: Route; color: string }) => (
        <Icon name={route.icon} size={20} color= {Colors.silver} />

    );
    const renderTabBar = (
        props: SceneRendererProps & { navigationState: State }
    ) => {
        return (
            <TabBar
                {...props}
                indicatorStyle={styles.indicator}
                renderIcon={renderIcon}
                style={styles.tabbar}
            />
        );
    };
    const renderScene = SceneMap({
        first: FirstRoute,
        second: SecondRoute,
    });

    return (
        <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            renderTabBar={renderTabBar}
            onIndexChange={setIndex}
            initialLayout={initialLayout}
        />
    );
}

