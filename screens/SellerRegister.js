import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Padding, Border, Color } from "../GlobalStyles";

const SellerRegister = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.sellerRegister}>
      <Image
        style={[styles.sellerRegisterChild, styles.statusSectionPosition]}
        contentFit="cover"
        source={require("../assets/background.png")}
      />
      <Text style={[styles.phoneNumber, styles.selectFlexBox]}>
        Start Your Seller Journey
      </Text>
      <View style={[styles.body, styles.bodyPosition]}>
        <View>
          <Text style={[styles.b, styles.selectTypo]}>
            Fill in Your Seller Details
          </Text>
          <View style={styles.details}>
            <View>
              <Text style={[styles.n, styles.selectFlexBox]}>Shop Name</Text>
              <View style={[styles.input, styles.districtLayout]}>
                <Text style={[styles.n1, styles.n1Typo]}>xxxxxxxx</Text>
              </View>
            </View>
            <View style={styles.shopOwner}>
              <Text style={[styles.n, styles.selectFlexBox]}>
                Owner (Optional)*
              </Text>
              <View style={[styles.input, styles.districtLayout]}>
                <Text style={[styles.n1, styles.n1Typo]}>xxxxxxxx</Text>
              </View>
            </View>
            <View style={styles.shopOwner}>
              <Text style={[styles.n, styles.selectFlexBox]}>Full Name</Text>
              <View style={[styles.input, styles.districtLayout]}>
                <Text style={[styles.n1, styles.n1Typo]}>
                  xxxxxxxx xxxxxxxx
                </Text>
              </View>
            </View>
            <View style={styles.shopOwner}>
              <Text style={[styles.n, styles.selectFlexBox]}>
                Public Number
              </Text>
              <View style={[styles.input, styles.districtLayout]}>
                <Text style={[styles.n1, styles.n1Typo]}>xxxxxxxx</Text>
              </View>
            </View>
            <View style={styles.shopOwner}>
              <Text style={[styles.n, styles.selectFlexBox]}>
                Phone Number (Optional)*
              </Text>
              <View style={[styles.input, styles.districtLayout]}>
                <Text style={[styles.n1, styles.n1Typo]}>xxxxxxxx</Text>
              </View>
            </View>
            <View style={styles.shopOwner}>
              <Text style={[styles.n, styles.selectFlexBox]}>
                Email (Optional) *
              </Text>
              <View style={[styles.input, styles.districtLayout]}>
                <Text style={[styles.xyzgmailcom, styles.n1Typo]}>
                  xyz@gmail.com
                </Text>
              </View>
            </View>
            <View style={[styles.district, styles.districtFlexBox]}>
              <Text style={[styles.selectYourDistrict, styles.selectTypo]}>
                Select your District
              </Text>
              <Image
                style={styles.sortIcon}
                contentFit="cover"
                source={require("../assets/sort-icon9.png")}
              />
            </View>
            <View style={[styles.subDistrict, styles.districtFlexBox]}>
              <Text style={[styles.selectYourSubDistrict, styles.selectTypo]}>
                Select your Sub-District
              </Text>
              <Image
                style={styles.sortIcon}
                contentFit="cover"
                source={require("../assets/sort-icon10.png")}
              />
            </View>
            <View style={[styles.subDistrict, styles.districtFlexBox]}>
              <Text style={[styles.selectYourSubDistrict, styles.selectTypo]}>
                Select your Locality
              </Text>
              <Image
                style={styles.sortIcon}
                contentFit="cover"
                source={require("../assets/sort-icon10.png")}
              />
            </View>
          </View>
        </View>
        <Pressable
          style={[styles.button, styles.buttonFlexBox]}
          onPress={() => navigation.navigate("TermsAndConditions")}
        >
          <Text style={[styles.b1, styles.b1FlexBox]}>Get Started</Text>
        </Pressable>
      </View>
      <View style={[styles.statusSection, styles.statusSectionPosition]}>
        <View style={[styles.barsStatusBarIphoneX, styles.districtFlexBox]}>
          <View style={styles.buttonFlexBox}>
            <Text style={[styles.text, styles.b1FlexBox]}>9:41</Text>
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
              source={require("../assets/wifi3.png")}
            />
            <Image
              style={[styles.batteryIcon, styles.iconSpaceBlock]}
              contentFit="cover"
              source={require("../assets/battery.png")}
            />
          </View>
        </View>
        <View style={styles.topBar} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  statusSectionPosition: {
    top: 0,
    position: "absolute",
  },
  selectFlexBox: {
    textAlign: "left",
    letterSpacing: 0,
  },
  bodyPosition: {
    left: 16,
    position: "absolute",
  },
  selectTypo: {
    fontFamily: FontFamily.bold,
    fontWeight: "700",
    fontSize: FontSize.bold1_size,
  },
  districtLayout: {
    paddingVertical: Padding.p_base_5,
    width: 335,
    borderRadius: Border.br_base,
  },
  n1Typo: {
    opacity: 0.6,
    fontSize: FontSize.bold1_size,
    textAlign: "left",
    fontFamily: FontFamily.normal,
    letterSpacing: 0,
  },
  districtFlexBox: {
    justifyContent: "space-between",
    paddingHorizontal: Padding.p_base,
    flexDirection: "row",
  },
  buttonFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
  b1FlexBox: {
    textAlign: "center",
    letterSpacing: 0,
  },
  iconSpaceBlock: {
    marginLeft: 5,
    height: 11,
  },
  sellerRegisterChild: {
    left: 0,
    width: 424,
    height: 333,
  },
  phoneNumber: {
    top: 106,
    fontSize: FontSize.normal3_size,
    width: 201,
    color: Color.colorBlack,
    textAlign: "left",
    letterSpacing: 0,
    fontFamily: FontFamily.normal,
    left: 16,
    position: "absolute",
  },
  b: {
    width: 327,
    textAlign: "left",
    letterSpacing: 0,
    color: Color.colorBlack,
  },
  n: {
    fontSize: FontSize.normal_size,
    color: Color.colorBlack,
    textAlign: "left",
    letterSpacing: 0,
    fontFamily: FontFamily.normal,
  },
  n1: {
    color: Color.black,
  },
  input: {
    marginTop: 4,
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_base_5,
    alignItems: "center",
    flexDirection: "row",
    width: 335,
    backgroundColor: Color.fontWhite,
    borderRadius: Border.br_base,
  },
  shopOwner: {
    marginTop: 12,
  },
  xyzgmailcom: {
    color: Color.colorDimgray,
  },
  selectYourDistrict: {
    color: Color.black,
    textAlign: "left",
    letterSpacing: 0,
    fontWeight: "700",
    fontSize: FontSize.bold1_size,
  },
  sortIcon: {
    width: 13,
    height: 24,
  },
  district: {
    marginTop: 12,
    paddingVertical: Padding.p_base_5,
    width: 335,
    borderRadius: Border.br_base,
    alignItems: "center",
    backgroundColor: Color.fontWhite,
    justifyContent: "space-between",
  },
  selectYourSubDistrict: {
    color: Color.black1,
    textAlign: "left",
    letterSpacing: 0,
    fontWeight: "700",
    fontSize: FontSize.bold1_size,
  },
  subDistrict: {
    backgroundColor: Color.white1,
    marginTop: 12,
    paddingVertical: Padding.p_base_5,
    width: 335,
    borderRadius: Border.br_base,
    alignItems: "center",
  },
  details: {
    marginTop: 16,
  },
  b1: {
    color: Color.fontWhite,
    fontFamily: FontFamily.bold,
    fontWeight: "700",
    fontSize: FontSize.bold1_size,
  },
  button: {
    backgroundColor: Color.main,
    paddingHorizontal: 0,
    marginTop: 24,
    paddingVertical: Padding.p_base_5,
    width: 335,
    borderRadius: Border.br_base,
  },
  body: {
    top: 250,
    height: 477,
    overflow: "hidden",
  },
  text: {
    fontSize: FontSize.size_mini,
    fontWeight: "600",
    fontFamily: FontFamily.sFProText,
    color: Color.colorGray_100,
    width: 54,
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
    width: 375,
    paddingVertical: Padding.p_xs,
    backgroundColor: Color.theme12,
    overflow: "hidden",
  },
  topBar: {
    backgroundColor: Color.theme12,
    alignItems: "center",
  },
  statusSection: {
    marginLeft: -187.5,
    left: "50%",
    alignItems: "center",
  },
  sellerRegister: {
    borderRadius: Border.br_6xl,
    backgroundColor: Color.theme13,
    flex: 1,
    width: "100%",
    height: 804,
    overflow: "hidden",
  },
});

export default SellerRegister;
