import * as React from "react";
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  ImageBackground,
} from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, Padding, Border, FontFamily, FontSize } from "../GlobalStyles";

const CustomerDaskboard = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground
      style={styles.customerDaskboard}
      resizeMode="cover"
      source={require("../assets/customerdaskboard.png")}
    >
      <View style={[styles.rectangleCopy11, styles.homeIndicatorPosition]} />
      <View style={[styles.homeIndicator, styles.homeIndicatorPosition]}>
        <View style={[styles.shape, styles.framePosition]} />
      </View>
      <View style={[styles.statusBar, styles.statusLayout]}>
        <View style={[styles.statusBarChild, styles.scanQrCodePosition]} />
        <Image
          style={styles.connectionsIcon}
          contentFit="cover"
          source={require("../assets/connections.png")}
        />
        <View style={styles.time}>
          <Text style={styles.time1}>9:27</Text>
        </View>
        <View style={[styles.dotMoreIcon, styles.dotIconLayout]}>
          <Image
            style={[styles.vectorIcon, styles.vectorIconPosition]}
            contentFit="cover"
            source={require("../assets/vector37.png")}
          />
          <View style={[styles.dotMoreIconChild, styles.frameInnerPosition]} />
        </View>
      </View>
      <View style={[styles.frameParent, styles.frameParentFlexBox]}>
        <View style={styles.materialBorder}>
          <Image
            style={[
              styles.materialSymbolsflipCameraIIcon,
              styles.dotIconLayout,
            ]}
            contentFit="cover"
            source={require("../assets/materialsymbolsflipcameraios.png")}
          />
        </View>
        <View
          style={[
            styles.materialSymbolsflipCameraIContainer,
            styles.materialBorder,
          ]}
        >
          <Image
            style={[
              styles.materialSymbolsflipCameraIIcon,
              styles.dotIconLayout,
            ]}
            contentFit="cover"
            source={require("../assets/materialsymbolsflipcameraios1.png")}
          />
        </View>
      </View>
      <View style={[styles.frameGroup, styles.framePosition]}>
        <View style={styles.scanQrCodeWrapper}>
          <Text style={[styles.scanQrCode, styles.scanQrCodeTypo]}>
            Scan QR code
          </Text>
        </View>
        <View style={[styles.scan, styles.scanFlexBox]}>
          <View style={[styles.scanChild, styles.scanChildBorder]} />
        </View>
        <View style={[styles.frameContainer, styles.scanFlexBox]}>
          <Image
            style={styles.frameChild}
            contentFit="cover"
            source={require("../assets/frame-8536.png")}
          />
          <Text style={[styles.uploadFromGallery, styles.scanQrCodeTypo]}>
            Upload from gallery
          </Text>
        </View>
      </View>
      <View style={styles.menuIcons}>
        <Pressable
          style={styles.vectorParent}
          onPress={() => navigation.navigate("CustomerDaskboard1")}
        >
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/vector4.png")}
          />
          <Text style={[styles.dashboard, styles.dashboardTypo]}>
            Dashboard
          </Text>
        </Pressable>
        <Pressable
          style={styles.vectorParent}
          onPress={() => navigation.navigate("CustomerNotification")}
        >
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/notification2.png")}
          />
          <Text style={[styles.dashboard, styles.dashboardTypo]}>
            Notification
          </Text>
        </Pressable>
        <View style={[styles.vectorWrapper, styles.frameParentFlexBox]}>
          <Image
            style={styles.dotIconLayout}
            contentFit="cover"
            source={require("../assets/vector2.png")}
          />
        </View>
        <Pressable
          style={styles.vectorParent}
          onPress={() => navigation.navigate("CustomerSearvhCustomer")}
        >
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/frame-84933.png")}
          />
          <Text style={[styles.retailers, styles.dashboardTypo]}>
            Retailers
          </Text>
        </Pressable>
        <Pressable
          style={styles.vectorParent}
          onPress={() => navigation.navigate("CustomerProfile")}
        >
          <View style={styles.iconLayout}>
            <View style={[styles.frameInner, styles.iconLayout]} />
            <Image
              style={[styles.vectorIcon3, styles.vectorIconPosition]}
              contentFit="cover"
              source={require("../assets/vector.png")}
            />
          </View>
          <Text style={[styles.dashboard, styles.dashboardTypo]}>Profile</Text>
        </Pressable>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  homeIndicatorPosition: {
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  framePosition: {
    left: "50%",
    position: "absolute",
  },
  statusLayout: {
    height: 44,
    width: 375,
  },
  scanQrCodePosition: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  dotIconLayout: {
    height: 32,
    width: 32,
  },
  vectorIconPosition: {
    height: 24,
    marginTop: -12,
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  frameInnerPosition: {
    display: "none",
    backgroundColor: Color.transprent,
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  frameParentFlexBox: {
    flexDirection: "row",
    justifyContent: "center",
  },
  materialBorder: {
    padding: Padding.p_xs,
    borderRadius: Border.br_81xl,
    borderWidth: 1,
    borderColor: Color.fontWhite,
    borderStyle: "solid",
    flexDirection: "row",
  },
  scanQrCodeTypo: {
    textAlign: "left",
    fontFamily: FontFamily.normal,
    letterSpacing: 0,
  },
  scanFlexBox: {
    marginTop: 56,
    alignItems: "center",
    flexDirection: "row",
  },
  scanChildBorder: {
    borderWidth: 1,
    borderStyle: "solid",
  },
  dashboardTypo: {
    fontFamily: FontFamily.openSansSemiBold,
    fontSize: FontSize.normal2_size,
    textAlign: "center",
    fontWeight: "600",
    letterSpacing: 0,
  },
  iconLayout: {
    width: 24,
    height: 24,
  },
  rectangleCopy11: {
    height: "98.66%",
    top: "0%",
    bottom: "1.34%",
    borderRadius: Border.br_sm,
    backgroundColor: Color.black1,
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
    bottom: "0%",
    backgroundColor: Color.fontWhite,
  },
  statusBarChild: {
    height: 44,
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
    fontWeight: "600",
    letterSpacing: 0,
    color: Color.colorBlack,
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
  vectorIcon: {
    marginLeft: -3,
    width: 6,
  },
  dotMoreIconChild: {
    marginTop: -16,
    marginLeft: -16,
    borderRadius: Border.br_8xs,
    shadowColor: "rgba(0, 0, 0, 0.4)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    height: 32,
    width: 32,
  },
  dotMoreIcon: {
    marginTop: 55,
    left: 327,
    top: "50%",
    width: 32,
    position: "absolute",
  },
  statusBar: {
    top: 0,
    marginLeft: -187.5,
    height: 44,
    width: 375,
    left: "50%",
    position: "absolute",
  },
  materialSymbolsflipCameraIIcon: {
    overflow: "hidden",
  },
  materialSymbolsflipCameraIContainer: {
    marginLeft: 16,
  },
  frameParent: {
    marginLeft: -56.5,
    top: 644,
    width: 112,
    justifyContent: "center",
    alignItems: "center",
    left: "50%",
    position: "absolute",
  },
  scanQrCode: {
    fontSize: FontSize.bold_size,
    color: Color.fontWhite,
    left: 0,
    top: 0,
    position: "absolute",
  },
  scanQrCodeWrapper: {
    width: 335,
    height: 33,
  },
  scanChild: {
    borderRadius: Border.br_base,
    width: 280,
    height: 280,
    borderColor: Color.fontWhite,
    borderWidth: 1,
    backgroundColor: Color.transprent,
  },
  scan: {
    borderRadius: Border.br_5xl,
    borderStyle: "dashed",
    borderColor: Color.theme13,
    borderWidth: 8,
    padding: Padding.p_5xl,
  },
  frameChild: {
    width: 16,
    height: 15,
  },
  uploadFromGallery: {
    fontSize: FontSize.normal_size,
    marginLeft: 4,
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.normal,
  },
  frameContainer: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.theme13,
    borderColor: Color.theme12,
    paddingHorizontal: Padding.p_xs,
    paddingVertical: Padding.p_8xs,
    borderWidth: 1,
    borderStyle: "solid",
  },
  frameGroup: {
    marginLeft: -167.5,
    top: 77,
    alignItems: "center",
  },
  dashboard: {
    color: Color.colorDarkslategray,
    marginTop: 8,
  },
  vectorParent: {
    width: 70,
    justifyContent: "center",
    alignItems: "center",
  },
  vectorWrapper: {
    paddingBottom: Padding.p_5xl,
    justifyContent: "center",
  },
  retailers: {
    color: Color.colorSaddlebrown_100,
    marginTop: 12,
  },
  frameInner: {
    marginLeft: -12,
    borderTopLeftRadius: Border.br_8xs,
    borderTopRightRadius: Border.br_8xs,
    display: "none",
    backgroundColor: Color.transprent,
    top: "50%",
    left: "50%",
    position: "absolute",
    marginTop: -12,
    width: 24,
  },
  vectorIcon3: {
    marginLeft: -10,
    width: 19,
  },
  menuIcons: {
    top: 716,
    borderTopLeftRadius: Border.br_base,
    borderTopRightRadius: Border.br_base,
    borderColor: Color.black,
    borderTopWidth: 1,
    justifyContent: "space-between",
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_5xs,
    borderStyle: "solid",
    alignItems: "center",
    flexDirection: "row",
    width: 375,
    marginLeft: -187.5,
    left: "50%",
    backgroundColor: Color.fontWhite,
    position: "absolute",
  },
  customerDaskboard: {
    borderRadius: Border.br_6xl,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default CustomerDaskboard;
