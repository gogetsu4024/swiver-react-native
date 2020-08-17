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
import Icon from 'react-native-vector-icons/FontAwesome';

const FirstRoute = () => (
    <View style={[styles.scene, { backgroundColor: '#ff4081' }]} />
);

const SecondRoute = () => (
    <View style={[styles.scene, { backgroundColor: '#673ab7' }]} />
);
const initialLayout = { width: Dimensions.get('window').width };

export default function Products() {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'first', title: 'Tableau de Bord', icon: 'home' },
        { key: 'second', title: 'Second', icon: 'rocket' },
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

const styles = StyleSheet.create({
    scene: {
        flex: 1,
    },
    tabbar: {
        backgroundColor: '#0288D1',
    },
});
