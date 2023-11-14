import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

const LoginsignupOTP = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.loginsignupOtp}>
      <Image
        style={styles.loginsignupOtpChild}
        contentFit="cover"
        source={require("../assets/background.png")}
      />
      <View style={styles.homeIndicator}>
        <View style={[styles.shape, styles.shapePosition]} />
      </View>
      <View style={styles.upperBody}>
        <Text style={styles.n}>Welcome to SanaEase</Text>
        <Text style={[styles.n1, styles.bLayout]}>
          The app that connects sellers and customers in a simple and rewarding
          way!
        </Text>
      </View>
      <View style={styles.lowerSectionBody}>
        <Text style={[styles.b, styles.bTypo]}>
          Choose your role and start the app
        </Text>
        <View style={styles.options}>
          <Pressable
            style={styles.sellerOptionBorder}
            onPress={() => navigation.navigate("SellerRegister")}
          >
            <View style={styles.sellerIlustration}>
              <Image
                style={[styles.seller1Icon, styles.iconPosition]}
                contentFit="cover"
                source={require("../assets/seller-1.png")}
              />
            </View>
            <View style={styles.sellerSection}>
              <Text style={[styles.b1, styles.b1Layout]}>
                Get Started as a Seller
              </Text>
              <Text style={[styles.n2, styles.b1Layout]}>
                Showcase your products and build a loyal customer base.
              </Text>
            </View>
          </Pressable>
          <View style={[styles.customerSection, styles.sellerOptionBorder]}>
            <View style={styles.sellerIlustration}>
              <Image
                style={[styles.customer1Icon, styles.iconPosition]}
                contentFit="cover"
                source={require("../assets/customer-1.png")}
              />
            </View>
            <View style={styles.sellerSection}>
              <Text style={[styles.b1, styles.b1Layout]}>
                Get Started as a Customer
              </Text>
              <Text style={[styles.n2, styles.b1Layout]}>
                Search, compare, and get the best deals at shops in your area.
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.statusSection, styles.shapePosition]}>
        <View style={[styles.barsStatusBarIphoneX, styles.barLayout]}>
          <View style={styles.timeStyle}>
            <Text style={styles.text}>9:41</Text>
          </View>
          <View style={styles.mobileSignalParent}>
            <Image
              style={styles.mobileSignalIcon}
              contentFit="cover"
              source={require("../assets/mobile-signal.png")}
            />
            <Image
              style={[styles.wifiIcon, styles.iconSpaceBlock]}
              contentFit="cover"
              source={require("../assets/wifi.png")}
            />
            <Image
              style={[styles.batteryIcon, styles.iconSpaceBlock]}
              contentFit="cover"
              source={require("../assets/battery.png")}
            />
          </View>
        </View>
        <View style={[styles.topBar, styles.barLayout]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  shapePosition: {
    left: "50%",
    position: "absolute",
  },
  bLayout: {
    width: 327,
    textAlign: "left",
    color: Color.colorBlack,
    letterSpacing: 0,
  },
  bTypo: {
    fontFamily: FontFamily.bold,
    fontWeight: "700",
    fontSize: FontSize.bold1_size,
  },
  iconPosition: {
    top: "50%",
    width: 150,
    left: 0,
    position: "absolute",
  },
  b1Layout: {
    width: 160,
    textAlign: "left",
    color: Color.colorBlack,
    letterSpacing: 0,
  },
  sellerOptionBorder: {
    paddingBottom: Padding.p_base,
    paddingTop: Padding.p_base,
    paddingLeft: Padding.p_9xs,
    borderWidth: 1,
    borderColor: Color.colorSaddlebrown_100,
    borderStyle: "solid",
    backgroundColor: Color.white,
    borderRadius: Border.br_5xl,
    alignItems: "center",
    flexDirection: "row",
    width: 343,
  },
  barLayout: {
    width: 375,
    backgroundColor: Color.theme12,
  },
  iconSpaceBlock: {
    marginLeft: 5,
    height: 11,
  },
  loginsignupOtpChild: {
    width: 424,
    height: 333,
    left: 0,
    top: 0,
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
    right: "0%",
    bottom: 0,
    left: "0%",
    height: 39,
    position: "absolute",
    width: "100%",
  },
  n: {
    fontSize: FontSize.normal3_size,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.normal,
    letterSpacing: 0,
  },
  n1: {
    marginTop: 4,
    fontSize: FontSize.normal_size,
    fontFamily: FontFamily.normal,
  },
  upperBody: {
    top: 106,
    width: 343,
    marginLeft: -171.5,
    left: "50%",
    position: "absolute",
  },
  b: {
    width: 327,
    textAlign: "left",
    color: Color.colorBlack,
    letterSpacing: 0,
  },
  seller1Icon: {
    marginTop: -53,
    height: 107,
  },
  sellerIlustration: {
    height: 150,
    width: 150,
  },
  b1: {
    display: "flex",
    alignItems: "center",
    fontFamily: FontFamily.bold,
    fontWeight: "700",
    fontSize: FontSize.bold1_size,
  },
  n2: {
    marginTop: 8,
    fontSize: FontSize.normal_size,
    fontFamily: FontFamily.normal,
  },
  sellerSection: {
    marginLeft: 8,
  },
  customer1Icon: {
    marginTop: -56,
    height: 111,
  },
  customerSection: {
    marginTop: 8,
  },
  options: {
    marginTop: 16,
  },
  lowerSectionBody: {
    top: 230,
    marginLeft: -171.5,
    left: "50%",
    position: "absolute",
  },
  text: {
    fontSize: FontSize.size_mini,
    fontWeight: "600",
    fontFamily: FontFamily.sFProText,
    color: Color.colorGray_100,
    textAlign: "center",
    width: 54,
    letterSpacing: 0,
  },
  timeStyle: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
  mobileSignalIcon: {
    width: 17,
    height: 11,
  },
  wifiIcon: {
    width: 15,
  },
  batteryIcon: {
    width: 25,
  },
  mobileSignalParent: {
    flexDirection: "row",
  },
  barsStatusBarIphoneX: {
    justifyContent: "space-between",
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_xs,
    flexDirection: "row",
    overflow: "hidden",
  },
  topBar: {
    height: 56,
  },
  statusSection: {
    marginLeft: -187.5,
    alignItems: "center",
    top: 0,
    left: "50%",
  },
  loginsignupOtp: {
    borderRadius: Border.br_6xl,
    backgroundColor: Color.theme13,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default LoginsignupOTP;
