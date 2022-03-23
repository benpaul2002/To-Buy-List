import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import SearchBar from './SearchBar';

export default App = () => {
  return (
    <View style={styles.container}>
      <SearchBar />
      <FlatList
        data={[
          {key: 'Milk'},
          {key: 'Coffee'},
          {key: 'Oranges'},
          {key: 'Bread'},
        ]}
        renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    color: 'black',
    height: 44,
    borderStyle: 'solid',
    borderBottomWidth: 2,
    borderBottomColor: '#a3a3a3',
    marginLeft: 10,
    marginRight: 20
  },
});
