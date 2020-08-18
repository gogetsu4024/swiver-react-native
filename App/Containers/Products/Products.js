import React from 'react'
import {  Colors } from 'App/Theme'
import {
    Dimensions,
} from 'react-native';
import {
    TabView,
    TabBar,
    SceneMap,
    SceneRendererProps,
} from 'react-native-tab-view';
import Icon from 'react-native-vector-icons/AntDesign';
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

