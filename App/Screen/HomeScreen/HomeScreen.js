import { View, Text, StyleSheet } from "react-native";
import React from "react";
import AppMapView from "./AppMapView";
import Header from "./Header";
import SearchBar from "./SearchBar";

export default function HomeSCreen() {
  return (
    <View>
      <View style={styles.headerContainer}>
        <Header />
        <SearchBar/>
      </View>
      <AppMapView />
    </View>
  );
}
const styles = StyleSheet.create({
  headerContainer: {
    position: "absolute",
    zIndex: 10,
    padding: 10,
    width: "100%",
  },
});
