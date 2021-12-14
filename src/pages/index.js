import { StatusBar } from 'expo-status-bar';
import React, { useState , useEffect} from "react";
import { FlatList, SafeAreaView,  StyleSheet, Text, TouchableOpacity , Image} from "react-native";
import {  useIsFocused, } from "@react-navigation/native";
import api from '../services/api';



const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <Image
        style={styles.foto}
        source={{uri:item?.foto}}
    />
    <Text style={[styles.title, textColor]}>{item?.nome}</Text>
  </TouchableOpacity>
);

const App = ({navigation}) => {
  const isFocused = useIsFocused();

  const [selectedId, setSelectedId] = useState(null);

  const [produtos, setProdutos] = useState([])

  const renderItem = ({ item }) => {
    const backgroundColor = item._id === selectedId ? "#6e3b6e" : "#fff";
    const color = item._id === selectedId ? 'white' : 'black';
    const elevation  = item._id === selectedId ? 5 : 0;

    function Navigate(item){

      setSelectedId(item._id)
      navigation.navigate("Detalhes", {item})

    }

    return (
      <Item
        item={item}
        onPress={() => Navigate(item)}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
        elevation={{elevation}}
      />
    );
  };


  async function GetProdutos(){

    try{
      const response = await api.get("/api/produtos")

      setProdutos(response?.data?.value)
    }catch(error){alert(error)}

  }

  useEffect(() => {
    if(isFocused)GetProdutos()
  }, [isFocused])

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={produtos}
        renderItem={renderItem}
        keyExtractor={(item) => item._id}
        extraData={selectedId}
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection:'row',
    justifyContent:'space-between'
  },
  title: {
    fontSize: 32,
  },
  foto:{
    width: 66,
    height: 65,
  },
});

export default App;