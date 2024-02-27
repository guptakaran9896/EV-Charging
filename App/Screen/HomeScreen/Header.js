import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { useUser } from "@clerk/clerk-expo";
import { FontAwesome } from "@expo/vector-icons";
import logo from "../../../assets/logo.jpg";
export default function Header() {
  const { user } = useUser();
  console.log(user?.imageUrl);
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: user?.imageUrl }}
        style={{ height: 45, width: 45, borderRadius: 99 }}
      />
      <Image source={logo}style={{ height: 45, width: 45}}/>
      <FontAwesome name="filter" size={30} color="black" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#ffffff87",
  },
});
