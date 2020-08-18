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


const LeftContent = props => <Avatar.Icon {...props} size={36} icon="folder" />
const FirstRoute = () => (
    <View style={styles.scene}>
        <View style={{flex:0.3,marginTop:10,marginBottom:10}}>
            <Text style={{marginLeft:20,color: "#797DA0"}}>Recent</Text>
        <ScrollView horizontal={true} style={{}} >
            <View style={{flexDirection:"row", justifyContent:"center",alignItems:"center",paddingLeft:20,paddingRight:20}}>
                <View style={styles.cardShadow}>
                    <Avatar.Icon style={{alignSelf:"flex-start",marginLeft:20}}  size={24} icon="folder" />
                    <Text>Swiver SA</Text>
                    <Icon style={{alignSelf:"flex-end",marginRight:20}}  size={24} name="arrowright" />
                </View>
                <View style={styles.cardShadow}>
                    <Avatar.Icon style={{alignSelf:"flex-start",marginLeft:20}}  size={24} icon="folder" />
                    <Text>Swiver SA</Text>
                    <Icon style={{alignSelf:"flex-end",marginRight:20}}  size={24} name="arrowright" />
                </View>
                <View style={styles.cardShadow}>
                    <Avatar.Icon style={{alignSelf:"flex-start",marginLeft:20}}  size={24} icon="folder" />
                    <Text>Swiver SA</Text>
                    <Icon style={{alignSelf:"flex-end",marginRight:20}}  size={24} name="arrowright" />
                </View>
                <View style={styles.cardShadow}>
                    <Avatar.Icon style={{alignSelf:"flex-start",marginLeft:20}}  size={24} icon="folder" />
                    <Text>Swiver SA</Text>
                    <Icon style={{alignSelf:"flex-end",marginRight:20}}  size={24} name="arrowright" />
                </View>
            </View>

        </ScrollView>
        </View>

        <Card style={{flex:0.7,margin:5}}>
            <ScrollView style={{padding:2,flex:1}}  >
                <View style={{height:6,width:33,backgroundColor:"#B1B1B1", alignSelf: "center", marginTop:10,borderRadius: 6}}>

                </View>

                <Card style={{flex: 2}}>
                    <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} />

                </Card>
                <Card style={{flex: 2}}>
                    <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} />

                </Card>
                <Card style={{flex: 2}}>
                    <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} />

                </Card>
                <Card style={{flex: 2}}>
                    <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} />

                </Card>
                <Card style={{flex: 2}}>
                    <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} />

                </Card>
                <Card style={{flex: 2}}>
                    <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} />

                </Card>

            </ScrollView>
        </Card>
    </View>

);

const SecondRoute = () => (
    <View style={[styles.scene, { backgroundColor: '#673ab7' }]} />
);
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

const styles = StyleSheet.create({
    scene: {
        flex: 1,
        backgroundColor: '#F7F8FA',
    },
    tabbar: {
        backgroundColor: '#0288D1',
    },
    cardShadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,

        borderRadius:5,
        borderWidth: 1,
        borderColor: '#fff',
        height:110,
        width: 110,
        margin:20,
        backgroundColor:"white",
        alignItems: "center",
        justifyContent: 'center',
    }
});
