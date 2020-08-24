import React,{ useState,useEffect } from "react";
import { DrawerItems } from "react-navigation";
import { Images, Colors } from 'App/Theme'
import styles from './MenuStyles'
import {
  Animated,
  Text
} from 'react-native'
import {
  ScrollView,
  View,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  FlatList,
  SafeAreaView
} from "react-native";
import { useSelector } from 'react-redux'

const { width } = Dimensions.get("screen");



const Drawer = props => {
  const renderItem = ({ item }) => (
      <View style={{flexGrow : 0.15}}>
        <TouchableOpacity onPress={() => {console.log("pressed 1")}}>
          <Image style={styles.imageSideMenu}  source={Images.company1} />
          <Text style={{color: Colors.white}}> A Design </Text>
        </TouchableOpacity>
      </View>
  );



  const user = useSelector(state => state.example.user);
  let [menu, setMenu] = useState(props.items);

  return(
      <View style={{flex: 1 ,flexDirection: 'row'}} forceInset={{ top: 'always', horizontal: 'never' }}>
        <View style={styles.containerWrapper}>

          <FlatList
              contentContainerStyle={{flexGrow: 0.5, justifyContent: 'center'}}
              data={user.companies}
              renderItem={renderItem}
              keyExtractor={item => item.id}
          />


          <View style={{flex : 0.15}}>
            <TouchableOpacity onPress={() => {}}>
              <Image style={styles.imageSideMenu}  source={Images.addCompany} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={{flex :0.05 , backgroundColor : Colors.drawerSeperator}}/>

        <View style={{flex: 2, backgroundColor: Colors.drawerSecondBarColor}}>

          <View flex={0.05} style={styles.header}>
            <Text style={styles.logoText}> UIX Design </Text>
            <Text style={styles.logoSubText}>mail@mail.com</Text>
          </View>

          <View style={{flex :0.02 , backgroundColor : Colors.drawerSeperator}}/>

          <View style={{flex : 3 } }>
            <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
              <DrawerItems {...props} items={menu}  />

            </ScrollView>
          </View>

        </View>
      </View>
  )
};

const Menu = {
  contentComponent: props => <Drawer {...props} />,
  drawerBackgroundColor: "#FFFFFF",
  drawerWidth: width * 0.8,
  contentOptions: {
    activeTintColor: "#A3A5A7",
    inactiveTintColor: "#FFFFFF",
    activeBackgroundColor: "transparent",
    itemStyle: {
      width: width * 0.75,
      backgroundColor: "transparent"
    },
    labelStyle: {
      fontSize: 18,
      marginLeft: 12,
      fontWeight: "normal",
      color: "white"
    },
    itemsContainerStyle: {
      paddingVertical: 16,
      paddingHorizonal: 12,
      justifyContent: "center",
      alignContent: "center",
      overflow: "hidden"
    }
  }
};


export default Menu;
