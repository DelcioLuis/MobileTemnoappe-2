import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View , Image, Dimensions} from 'react-native';
import {  useRoute, } from "@react-navigation/native";

const { height, width} = Dimensions.get("window")

export default function Detalhe() {

    
    const route = useRoute()

    const {item} = route.params;
   
  return (
    <View style={styles.container}>
        <Image
            style={styles.foto}
            source={{uri:item?.foto}}
        />
        <Text style={[styles.title]}>{item?.descricao}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  foto:{
    width: width*0.5,
    height: height*0.3,
  },
  title: {
    fontSize: 30,
    marginHorizontal:10

  },
});
