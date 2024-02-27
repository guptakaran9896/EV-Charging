import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeSCreen from "../Screen/HomeScreen/HomeScreen";
import ProfileScreen from "../Screen/ProfileScreen/ProfileScreen";
import { EvilIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
const Tab = createBottomTabNavigator();
export default function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        options={{
          topBarLabel: "Search",
          topBarActiveTintColor: "black",
          tabBarIcon: ({ size, color }) => (
            <EvilIcons name="search" size={size} color={color} />
          ),
        }}
        name="home"
        component={HomeSCreen}
      />
      <Tab.Screen
        options={{
          topBarLabel: "profile",
          topBarActiveTintColor: "black",
          tabBarIcon: ({ size, color }) => (
            <AntDesign name="profile" size={size} color={color} />
          ),
        }}
        name="profile"
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
}
