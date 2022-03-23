import React, { useState } from "react";
import { StyleSheet, TextInput, View, Keyboard, Button } from "react-native";

export default function SearchBar() {  
  const [clicked, setClicked] = useState(false);
  const [searchPhrase, setSearchPhrase] = useState(false);
  return (
    <View style={styles.container}>
      <View
        style={
          clicked
            ? styles.searchBar__clicked
            : styles.searchBar__unclicked
        }
      >
        <TextInput
          style={styles.input}
          placeholder="Search"
          value={searchPhrase}
          onChangeText={setSearchPhrase}
          onFocus={() => {
            setClicked(true);
          }}
        />
      </View>
      <View style={styles.button}>
        <Button
          title="+"
          onPress={() => {
            Keyboard.dismiss();
            setClicked(false);
          }}
        ></Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 15,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    width: "90%",

  },
  searchBar__unclicked: {
    flexDirection: "row",
    width: "80%",
    backgroundColor: "#ffffff",
    borderColor: '#000000',
    borderWidth: 2,
    alignItems: "center",
  },
  searchBar__clicked: {
    flexDirection: "row",
    width: "80%",
    backgroundColor: "#ffffff",
    borderColor: '#000000',
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  input: {
    fontSize: 20,
    marginLeft: 10,
    width: "95%",
  },
  button: {
    marginLeft: 20,
    width: 40
  }
});