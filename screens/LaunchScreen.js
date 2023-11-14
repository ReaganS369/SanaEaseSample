import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Padding, Border } from "../GlobalStyles";

const LaunchScreen = () => {
  return (
    <LinearGradient
      style={styles.launchScreen}
      locations={[0, 1]}
      colors={["#ecb365", "#f7ecde"]}
    >
      <View style={styles.logoSplash}>
        <View style={styles.splash}>
          <View style={styles.logo}>
            <Image
              style={styles.asset92}
              contentFit="cover"
              source={require("../assets/asset-9-21.png")}
            />
            <Image
              style={styles.sanaeaseLetterLogo1}
              contentFit="cover"
              source={require("../assets/sanaease-letter-logo-11.png")}
            />
          </View>
          <View style={styles.loading36}>
            <Image
              style={[styles.loading36Child, styles.loading36Layout]}
              contentFit="cover"
              source={require("../assets/line-281.png")}
            />
            <Image
              style={[styles.loading36Item, styles.loading36Layout]}
              contentFit="cover"
              source={require("../assets/line-291.png")}
            />
          </View>
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  loading36Layout: {
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  asset92: {
    width: 40,
    height: 58,
  },
  sanaeaseLetterLogo1: {
    width: 97,
    height: 32,
  },
  logo: {
    alignItems: "center",
  },
  loading36Child: {
    width: "102.5%",
    right: "-1.25%",
    left: "-1.25%",
    height: 4,
    zIndex: 0,
  },
  loading36Item: {
    width: "17.5%",
    right: "85%",
    left: "-2.5%",
    height: 8,
    zIndex: 1,
  },
  loading36: {
    flexDirection: "row",
    padding: Padding.p_3xs,
    marginTop: 56,
  },
  splash: {
    marginTop: -73,
    marginLeft: -80,
    top: "50%",
    left: "50%",
    position: "absolute",
    alignItems: "center",
  },
  logoSplash: {
    width: 160,
    height: 200,
  },
  launchScreen: {
    borderRadius: Border.br_6xl,
    flex: 1,
    width: "100%",
    height: 812,
    justifyContent: "center",
    backgroundColor: "transparent",
    alignItems: "center",
    overflow: "hidden",
  },
});

export default LaunchScreen;
