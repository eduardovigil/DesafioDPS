import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView,ScrollView } from 'react-native';


import {ListItem, Avatar} from 'react-native-elements' 

import series from './Catelogo'
export default function Lista3(){

return(
series.map((serie,i) =>{
  if(serie.tv == "Anime"){
 return(
   <ListItem key={i}>
   <Avatar source={{uri:serie.image}} size="large"></Avatar>
   <ListItem.Content>
    <ListItem.Title>{serie.name}</ListItem.Title>
    <ListItem.Subtitle>{serie.category}</ListItem.Subtitle>
   </ListItem.Content>
   <ListItem.Chevron/>
   </ListItem>
 )
  }
 
}

)
)
}