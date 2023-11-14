import * as React from "react";
import { StyleProp, ViewStyle, StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const Frame = ({ style }) => {
  return (
    <View style={[styles.frameParent, style]}>
      <View style={styles.rectangleParent}>
        <View style={[styles.frameChild, styles.frameChildPosition]} />
        <Image
          style={[styles.vectorIcon, styles.frameChildPosition]}
          contentFit="cover"
          source={require("../assets/vector.png")}
        />
      </View>
      <Text style={styles.profile}>Profile</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  frameChildPosition: {
    left: "50%",
    top: "50%",
    marginTop: -12,
    position: "absolute",
    height: 24,
  },
  frameChild: {
    marginLeft: -12,
    borderTopLeftRadius: Border.br_8xs,
    borderTopRightRadius: Border.br_8xs,
    backgroundColor: Color.transprent,
    display: "none",
    width: 24,
    left: "50%",
    top: "50%",
    marginTop: -12,
    position: "absolute",
  },
  vectorIcon: {
    marginLeft: -10,
    width: 19,
  },
  rectangleParent: {
    height: 24,
    width: 24,
  },
  profile: {
    fontSize: FontSize.normal2_size,
    letterSpacing: 0,
    fontWeight: "600",
    fontFamily: FontFamily.openSansSemiBold,
    color: Color.colorBlack,
    textAlign: "center",
    marginTop: 8,
  },
  frameParent: {
    width: 70,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Frame;
