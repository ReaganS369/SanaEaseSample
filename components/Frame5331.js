import * as React from "react";
import { StyleProp, ViewStyle, StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const Frame7 = ({ style }) => {
  return (
    <View style={[styles.notificationParent, style]}>
      <Image
        style={styles.notificationIcon}
        contentFit="cover"
        source={require("../assets/notification1.png")}
      />
      <Text style={styles.notification}>Notification</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  notificationIcon: {
    width: 24,
    height: 24,
  },
  notification: {
    fontSize: FontSize.normal2_size,
    letterSpacing: 0,
    fontWeight: "600",
    fontFamily: FontFamily.openSansSemiBold,
    color: Color.colorSaddlebrown_100,
    textAlign: "center",
    marginTop: 8,
  },
  notificationParent: {
    width: 70,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Frame7;
