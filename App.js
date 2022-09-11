import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';
import React, { useState} from 'react';

export default function App() {


  const[shopingitem,setItem]=useState('');
  const[shopingitems,setItems]=useState('');

  const addItem = () => {

    setItems(current => [...current,shopingitem]);
  }

  const clearList = () =>{
    setItems('');
  }

  return (
    <View style={styles.container}>

   <View style={styles.textFields}>
    <TextInput  style={{width: 200, borderColor: 'gray', borderWidth: 1}}
      onChangeText={shopingitem => setItem(shopingitem)}
      value={shopingitem} />
   </View>

   <View  style={styles.buttons}>
    <Button title='Add' onPress={addItem}></Button>
    <Button title='Clear' onPress={clearList}></Button>
   </View>

   <View style={styles.ShoppingFields}>
    <Text style={styles.ShoppingListTitle}>Shopping List</Text>
    <FlatList 
    data={shopingitems}
    renderItem={({item})=> (
      <Text style={styles.titleText}> {item} </Text>
    )}
    />
   </View>

   </View>
  );
}

//Instead of a CSS File use StyleSheet
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    backgroundColor: '#fff'
  },

  textFields: {
    flex: 3,
    alignItems: 'center',
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingTop: 180
  },

  buttons: {
    flex: 10,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    paddingHorizontal: 150,
    paddingTop: 10
  },

  titleText: {
    fontSize: 20,
    fontWeight: "bold"
  },
  ShoppingFields: {
    flex: 15,
    alignItems: 'center',
    backgroundColor: '#fff',
    justifyContent: 'center'
  },

  ShoppingListTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "blue"
  }

});
