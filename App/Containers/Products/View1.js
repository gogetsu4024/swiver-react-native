import React,{ useState,useEffect } from "react";
import {Text, View, RefreshControl, FlatList, ActivityIndicator} from "react-native";
import styles from "./ProductsStyle";
import {ScrollView} from "react-navigation";
import {Avatar, Button, Card, Divider} from "react-native-paper";
import CardProduct from "App/Components/Cards/CardProduct"
import CardFlatList from "App/Components/Cards/CardFlatList"
import {FloatingAction} from "react-native-floating-action";
import {Images} from 'App/Theme'
import {CardWithIcon} from "App/Components/Cards/CardFlatListTypes"
import { useSelector,useDispatch } from 'react-redux'
import ClientsActions from 'App/Stores/Clients/Actions'



const actions = [
    {
        text: "Accessibility",
        icon: Images.ic_accessibility_white,
        name: "bt_accessibility",
        position: 2
    },
    {
        text: "Language",
        icon: Images.ic_language_white,
        name: "bt_language",
        position: 1
    },
    {
        text: "Location",
        icon: Images.ic_room_white,
        name: "bt_room",
        position: 3
    },
];
const getHeader = () => {
    return (
        <View style={{ backgroundColor: '#F7F8FA',flex:0.3,marginTop:10,marginBottom:10}}>
            <Text style={{marginLeft:20,color: "#797DA0"}}>Recent</Text>
            <ScrollView horizontal={true}  >
                <View style={styles.topScrollView}>
                    <Button onPress={()=>console.log("yo")}/>
                    <CardProduct name={"Swiver SA"}/>
                    <CardProduct name={"Invest SA"}/>
                    <CardProduct name={"Concise"}/>
                    <CardProduct name={"yo"}/>

                </View>

            </ScrollView>
        </View>
    );
};
const wait = (timeout) => {
    return new Promise(resolve => {
        setTimeout(resolve, timeout);
    });
};

const LeftContent = props => <Avatar.Icon {...props} size={36} icon="folder" />

const FirstRoute = () => {

    const [refreshing, setRefreshing] = useState(false);


    const tokens = useSelector(state => state.signIn.tokens);

    const currentCompany = useSelector(state => state.user.user.current_company);

    const clients = useSelector(state => state.clients.clients);

    const clientsLoading = useSelector(state => state.clients.clientsLoading);


    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(ClientsActions.fetchClients({tokens: tokens, currentCompany: currentCompany}))
    },[tokens]);




    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        dispatch(ClientsActions.fetchClients({tokens: tokens, currentCompany: currentCompany}));
        wait(2000).then(() => {
            setRefreshing(false);
        });
    }, []);


    if (clientsLoading) {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <ActivityIndicator />
            </View>
        );
    }
    return(
        <View style={styles.scene}>

            <Card style={{borderRadius: 20,boxShadow:2,flex:1}}>

                <View style={{padding:2,flex:1}}  >
                    <FlatList

                        refreshControl={
                            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                        }
                        ListHeaderComponent={getHeader}
                        data={clients.rows}
                        renderItem={({item, index})=>{
                            return(
                                !index?
                                    <View>
                                        <View style={styles.greyRectangle}>
                                        </View>
                                        <CardWithIcon data={item}/>
                                        <Divider/>
                                        <CardWithIcon data={item}/>
                                        <Divider/>
                                        <CardWithIcon data={item}/>
                                        <Divider/>
                                        <CardWithIcon data={item}/>
                                        <Divider/>
                                        <CardWithIcon data={item}/>
                                        <Divider/>
                                        <CardWithIcon data={item}/>
                                        <Divider/>
                                        <CardWithIcon data={item}/>
                                        <Divider/>

                                    </View>
                                    :
                                    <CardWithIcon data={item}/>
                            )
                        }
                        }
                        keyExtractor={item => item.id.toString()}
                    />
                </View>

                <FloatingAction
                    actions={actions}
                    onPressItem={name => {
                        console.log(`selected button: ${name}`);
                    }}
                />
            </Card>

        </View>
    )
};
export default FirstRoute;
