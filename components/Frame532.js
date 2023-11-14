import * as React from "react";
import { StyleProp, ViewStyle, StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const Frame2 = ({ style }) => {
  return (
    <View style={[styles.frameParent, style]}>
      <Image
        style={styles.frameChild}
        contentFit="cover"
        source={require("../assets/frame-8493.png")}
      />
      <Text style={styles.customer}>Customer</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  frameChild: {
    width: 24,
    height: 24,
  },
  customer: {
    fontSize: FontSize.normal2_size,
    letterSpacing: 0,
    fontWeight: "600",
    fontFamily: FontFamily.openSansSemiBold,
    color: Color.colorBlack,
    textAlign: "center",
    marginTop: 12,
  },
  frameParent: {
    width: 70,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Frame2;
