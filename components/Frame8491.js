import * as React from "react";
import { StyleProp, ViewStyle, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Padding } from "../GlobalStyles";

const Frame4 = ({ style }) => {
  return (
    <View style={[styles.vectorParent, style]}>
      <Image
        style={styles.vectorIcon}
        contentFit="cover"
        source={require("../assets/vector2.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  vectorIcon: {
    width: 32,
    height: 32,
  },
  vectorParent: {
    flexDirection: "row",
    justifyContent: "center",
    paddingBottom: Padding.p_5xl,
  },
});

export default Frame4;
