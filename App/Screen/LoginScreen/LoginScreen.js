import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import * as WebBrowser from "expo-web-browser";
import { useWarmUpBrowser } from "../../../hooks/useWarmUpBrowser";
import { useOAuth } from "@clerk/clerk-expo";
WebBrowser.maybeCompleteAuthSession();
const LoginScreen = () => {
  useWarmUpBrowser();
  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });
  const onPress = async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();

      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  };
  return (
    <>
      <View
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "20px",
        }}
      >
        <Image
          style={styles.logoImg}
          source={require("../../../assets/ev.png")}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={{ fontSize: 15, textAlign: "center", color: "white" }}>
          Login with Google
        </Text>
      </TouchableOpacity>
    </>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  logoImg: {
    height: 200,
    width: 200,
    objectFit: "contain",
    border: "none",
  },
  button: {
    border: "1px solid black",
    padding: 10,
    backgroundColor: "green",
    borderRadius: 20,
    width: "auto",
    margin: 20,
  },
});
