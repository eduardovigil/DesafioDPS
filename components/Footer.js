import * as React from 'react';
import {  View, StyleSheet, Image } from 'react-native';
import { Text } from 'react-native-elements';

export default function Informacion2() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        Desafio 1 DPS 
        David Eduardo Rodriguez Vigil RV202840 
      </Text>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    backgroundColor:'0f1f36',
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontWeight: 'cursi',
    textAlign: 'center',
    color:'#000',
  },
  logo: {
    height: 250,
    width: 250,
  }
});
