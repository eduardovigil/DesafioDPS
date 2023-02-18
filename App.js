import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView,ScrollView } from 'react-native';

import Lista1 from './components/List';
import Lista2 from './components/Pelis';
import Lista3 from './components/anime';
import { Card } from 'react-native-elements';
import Informacion from './components/Informacion';
import Informacion2 from './components/Footer';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Reload Show</Text>
      
      <ScrollView style={styles.scrollstyle}>
      <Card><Informacion/></Card>
      <Text style={styles.text}>Series</Text>
      <Lista1/>
      <Text style={styles.text}>Peliculas</Text>
      <Lista2/>
      <Text style={styles.text}>Anime</Text>
      <Lista3/>
      <Card><Informacion2/></Card>
      </ScrollView>
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2C2F34',
    paddingVertical: 30,
  },
  text:{
    fontSize:40,
    fontWeight:'san serif',
    textAlign:'center',
    color:'#fff'
  },
  scrollstyle:{
    backgroundColor: '#808080',
  }
});