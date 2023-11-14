import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color, Padding, Border } from "../GlobalStyles";

const Setting = () => {
  return (
    <View style={styles.setting}>
      <View style={styles.homeIndicator}>
        <View style={[styles.shape, styles.shapePosition]} />
      </View>
      <View style={[styles.statusBar, styles.statusLayout]}>
        <View style={[styles.statusBarChild, styles.nagPosition]} />
        <Image
          style={styles.connectionsIcon}
          contentFit="cover"
          source={require("../assets/connections.png")}
        />
        <View style={styles.time}>
          <Text style={styles.time1}>9:27</Text>
        </View>
      </View>
      <View style={styles.settingsParent}>
        <Text style={styles.settings}>Settings</Text>
        <View style={styles.frameParent}>
          <View style={styles.frameFlexBox}>
            <View style={styles.customerServiceWrapper}>
              <Image
                style={[styles.customerServiceIcon, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/customer-service1.png")}
              />
            </View>
            <Text style={[styles.accountSettings, styles.accountTypo]}>
              Account Settings
            </Text>
          </View>
          <View style={styles.accountSettingsParent}>
            <Text style={styles.accountTypo}>Account Settings</Text>
            <Text style={[styles.accountSettings2, styles.accountTypo]}>
              Account Settings
            </Text>
          </View>
          <View style={[styles.frameContainer, styles.frameFlexBox]}>
            <View style={styles.customerServiceWrapper}>
              <Image
                style={[styles.customerServiceIcon, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/help.png")}
              />
            </View>
            <Text style={[styles.accountSettings, styles.accountTypo]}>
              Frequently asked Questions
            </Text>
          </View>
        </View>
      </View>
      <View style={[styles.nag, styles.nagPosition]}>
        <View style={[styles.menuIcons, styles.menuIconsLayout]} />
        <View style={[styles.homeIndicator1, styles.menuIconsLayout]}>
          <View style={[styles.shape, styles.shapePosition]} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  shapePosition: {
    left: "50%",
    position: "absolute",
  },
  statusLayout: {
    height: 44,
    top: 0,
    width: 375,
  },
  nagPosition: {
    left: 0,
    position: "absolute",
  },
  iconLayout: {
    height: 24,
    width: 24,
  },
  accountTypo: {
    fontSize: FontSize.bold1_size,
    textAlign: "left",
    fontFamily: FontFamily.normal,
    color: Color.colorBlack,
    letterSpacing: 0,
  },
  frameFlexBox: {
    padding: Padding.p_9xs,
    flexDirection: "row",
    width: 335,
    backgroundColor: Color.theme13,
    borderRadius: Border.br_base,
    alignItems: "center",
  },
  menuIconsLayout: {
    width: 375,
    backgroundColor: Color.fontWhite,
  },
  customerTypo: {
    fontFamily: FontFamily.openSansSemiBold,
    fontSize: FontSize.normal2_size,
    textAlign: "center",
    color: Color.colorBlack,
    fontWeight: "600",
    letterSpacing: 0,
  },
  frameItemPosition: {
    marginTop: -12,
    height: 24,
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  shape: {
    marginLeft: -67.5,
    bottom: 8,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorDarkslategray,
    width: 135,
    height: 5,
  },
  homeIndicator: {
    height: "4.19%",
    top: "95.81%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    position: "absolute",
    width: "100%",
  },
  statusBarChild: {
    height: 44,
    top: 0,
    width: 375,
    backgroundColor: Color.fontWhite,
  },
  connectionsIcon: {
    top: 15,
    right: 14,
    width: 68,
    height: 16,
    position: "absolute",
  },
  time1: {
    marginTop: -5.5,
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.sFProText,
    width: 54,
    textAlign: "center",
    color: Color.colorBlack,
    fontWeight: "600",
    letterSpacing: 0,
    top: "50%",
    left: 0,
    position: "absolute",
  },
  time: {
    top: 8,
    left: 21,
    width: 56,
    height: 23,
    position: "absolute",
  },
  statusBar: {
    marginLeft: -187.5,
    left: "50%",
    position: "absolute",
  },
  settings: {
    fontSize: FontSize.bold_size,
    display: "flex",
    alignItems: "flex-end",
    width: 355,
    textAlign: "left",
    fontFamily: FontFamily.normal,
    color: Color.colorBlack,
    letterSpacing: 0,
  },
  customerServiceIcon: {
    overflow: "hidden",
  },
  customerServiceWrapper: {
    justifyContent: "center",
    backgroundColor: Color.transprent,
    padding: Padding.p_9xs,
    flexDirection: "row",
    borderRadius: Border.br_base,
    alignItems: "center",
    overflow: "hidden",
  },
  accountSettings: {
    marginLeft: 16,
  },
  accountSettings2: {
    marginTop: 8,
  },
  accountSettingsParent: {
    paddingHorizontal: Padding.p_5xl,
    marginTop: 8,
    paddingVertical: Padding.p_5xs,
    justifyContent: "center",
    width: 335,
    backgroundColor: Color.theme13,
    borderRadius: Border.br_base,
  },
  frameContainer: {
    marginTop: 8,
  },
  frameParent: {
    marginTop: 16,
  },
  settingsParent: {
    top: 60,
    left: 10,
    alignItems: "center",
    position: "absolute",
  },
  menuIcons: {
    borderTopLeftRadius: Border.br_base,
    borderTopRightRadius: Border.br_base,
    borderStyle: "solid",
    borderColor: Color.black,
    borderTopWidth: 1,
    justifyContent: "space-between",
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_5xs,
    flexDirection: "row",
    alignItems: "center",
  },
  homeIndicator1: {
    height: 34,
  },
  nag: {
    top: 705,
  },
  setting: {
    borderRadius: Border.br_6xl,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.fontWhite,
  },
});

export default Setting;
