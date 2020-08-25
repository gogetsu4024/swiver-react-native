import React from 'react'
import CardFlatList from "App/Components/Cards/CardFlatList"
import {ScrollView} from "react-navigation";


const CardMinimal =() =>(
<CardFlatList secondItemStyle={{flex: 1 , justifyContent : "flex-end"}}  firstText="Resultat" secondText="Achraf Noomen" thirdText="1 000 000 DT" forthText="benefices"/>
);

const CardColoredStripes =() =>(
    <CardFlatList  rectangle firstText="Concise Consulting" secondText="Achraf Noomen" thirdText="12 000 000 DT" forthText="benefices"/>
);
const CardWithIcon =(props) =>(
    <CardFlatList icon secondIcon  firstText={props.data.name} secondText="Achraf Noomen" thirdText="12 000 000 DT" forthText="chiffre d'affaire"/>
);

export {CardMinimal,CardColoredStripes,CardWithIcon}
