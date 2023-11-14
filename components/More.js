import * as React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Padding, Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const More = ({ onClose }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.more}>
      <View style={styles.moreInner}>
        <View>
          <Pressable
            style={[styles.settingsWrapper, styles.wrapperFlexBox]}
            onPress={() => navigation.navigate("Setting")}
          >
            <Text style={styles.settings}>Settings</Text>
          </Pressable>
          <Pressable
            style={[styles.switchAccountWrapper, styles.wrapperFlexBox]}
            onPress={() => navigation.navigate("SellerAdd")}
          >
            <Text style={styles.settings}>Switch Account</Text>
          </Pressable>
          <Pressable
            style={[styles.switchAccountWrapper, styles.wrapperFlexBox]}
            onPress={() => navigation.navigate("SellerQR")}
          >
            <Text style={styles.settings}>Your Payment</Text>
          </Pressable>
          <View style={[styles.themeWrapper, styles.wrapperFlexBox]}>
            <Text style={styles.settings}>Theme</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapperFlexBox: {
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_base,
    justifyContent: "flex-end",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: Color.fontWhite,
    width: 180,
  },
  settings: {
    fontSize: FontSize.bold1_size,
    letterSpacing: 0,
    fontWeight: "700",
    fontFamily: FontFamily.bold,
    color: Color.colorBlack,
    textAlign: "center",
  },
  settingsWrapper: {
    borderTopLeftRadius: Border.br_5xs,
    borderTopRightRadius: Border.br_5xs,
    overflow: "hidden",
    borderBottomWidth: 1,
    borderColor: Color.transprent,
    borderStyle: "solid",
    paddingHorizontal: Padding.p_base,
    justifyContent: "flex-end",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: Color.fontWhite,
  },
  switchAccountWrapper: {
    overflow: "hidden",
    borderBottomWidth: 1,
    borderColor: Color.transprent,
    borderStyle: "solid",
    paddingHorizontal: Padding.p_base,
    justifyContent: "flex-end",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: Color.fontWhite,
  },
  themeWrapper: {
    borderBottomRightRadius: Border.br_5xs,
    borderBottomLeftRadius: Border.br_5xs,
    paddingHorizontal: Padding.p_base,
    justifyContent: "flex-end",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: Color.fontWhite,
  },
  moreInner: {
    position: "absolute",
    top: 0,
    left: 0,
  },
  more: {
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 6,
    elevation: 6,
    shadowOpacity: 1,
    height: 164,
    maxWidth: "100%",
    maxHeight: "100%",
    width: 180,
  },
});

export default More;
