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
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from 'App/Containers/Products/ProductsStyle'
import FirstRoute from 'App/Containers/Example/DashBoardFirstScreen'
import SecondRoute from 'App/Containers/Products/View3'





const initialLayout = { width: Dimensions.get('window').width };




export default function DashBoard() {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'first', title: 'Clients', icon: 'users' },
        { key: 'second', title: 'Archive', icon: 'archive' },
    ]);

    const renderIcon = ({ route, color }: { route: Route; color: string }) => (
        <Icon name={route.icon} size={15} color= {Colors.silver} />

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

