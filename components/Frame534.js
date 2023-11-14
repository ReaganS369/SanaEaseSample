import * as React from "react";
import { StyleProp, ViewStyle, StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const Frame8 = ({ style }) => {
  return (
    <View style={[styles.vectorParent, style]}>
      <Image
        style={styles.vectorIcon}
        contentFit="cover"
        source={require("../assets/vector4.png")}
      />
      <Text style={styles.dashboard}>Dashboard</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  vectorIcon: {
    width: 24,
    height: 24,
  },
  dashboard: {
    fontSize: FontSize.normal2_size,
    letterSpacing: 0,
    fontWeight: "600",
    fontFamily: FontFamily.openSansSemiBold,
    color: Color.colorBlack,
    textAlign: "center",
    marginTop: 8,
  },
  vectorParent: {
    width: 70,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Frame8;
