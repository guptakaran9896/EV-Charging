import { View, Text } from "react-native";
import React from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

export default function SearchBar() {
  return (
    <View>
      <GooglePlacesAutocomplete
        placeholder="Search EV Charging station"
        onPress={(data, details = null) => {
          console.log(data, details);
        }}
        query={{
          key: "AIzaSyCRRgZ4xmrcDxFw0sUOZ3IKGB-LJymloLc",
          language: "en",
        }}
      />
    </View>
  );
}
