import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Padding, Border, Color } from "../GlobalStyles";

const Loginsignup1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.loginsignup}>
      <Image
        style={[styles.loginsignupChild, styles.navigationBarPosition]}
        contentFit="cover"
        source={require("../assets/background.png")}
      />
      <View style={[styles.navigationBar, styles.navigationBarFlexBox]}>
        <View style={styles.rectangle} />
      </View>
      <View style={[styles.body, styles.bodyPosition]}>
        <Text style={styles.phoneNumber}>Enhance Your Shopping Experience</Text>
        <View style={styles.fills}>
          <View>
            <Text style={[styles.pleaseConfirmYour, styles.yourTypo]}>
              Fill in Your Customer Details
            </Text>
            <View style={styles.filllss}>
              <View>
                <Text style={[styles.userName, styles.yourFlexBox]}>
                  User Name
                </Text>
                <View style={[styles.searchbutton, styles.selectParentLayout]}>
                  <Text style={[styles.xxxxxxxx, styles.xxxxxxxxTypo]}>
                    xxxxxxxx
                  </Text>
                </View>
              </View>
              <View style={styles.fullNameParent}>
                <Text style={[styles.userName, styles.yourFlexBox]}>
                  Full Name
                </Text>
                <View style={[styles.searchbutton, styles.selectParentLayout]}>
                  <Text style={[styles.xxxxxxxx, styles.xxxxxxxxTypo]}>
                    xxxxxxxx xxxxxxxx
                  </Text>
                </View>
              </View>
              <View style={styles.fullNameParent}>
                <Text
                  style={[styles.userName, styles.yourFlexBox]}
                >{`Email (Optional) `}</Text>
                <View style={[styles.searchbutton, styles.selectParentLayout]}>
                  <Text style={[styles.xyzgmailcom, styles.xxxxxxxxTypo]}>
                    xyz@gmail.com
                  </Text>
                </View>
              </View>
              <View style={styles.fullNameParent}>
                <Text style={[styles.userName, styles.yourFlexBox]}>
                  Phone Number (Optional)
                </Text>
                <View style={[styles.searchbutton, styles.selectParentLayout]}>
                  <Text style={[styles.xxxxxxxx, styles.xxxxxxxxTypo]}>
                    xxxxxxxx
                  </Text>
                </View>
              </View>
              <View
                style={[
                  styles.selectYourDistrictParent,
                  styles.selectParentFlexBox,
                ]}
              >
                <Text style={[styles.selectYourDistrict, styles.yourTypo]}>
                  Select your District
                </Text>
                <Image
                  style={styles.sortIcon}
                  contentFit="cover"
                  source={require("../assets/sort-icon9.png")}
                />
              </View>
              <View
                style={[
                  styles.selectYourSubDistrictParent,
                  styles.selectParentFlexBox,
                ]}
              >
                <Text style={[styles.selectYourSubDistrict, styles.yourTypo]}>
                  Select your Sub-District
                </Text>
                <Image
                  style={styles.sortIcon}
                  contentFit="cover"
                  source={require("../assets/sort-icon10.png")}
                />
              </View>
              <View
                style={[
                  styles.selectYourSubDistrictParent,
                  styles.selectParentFlexBox,
                ]}
              >
                <Text style={[styles.selectYourSubDistrict, styles.yourTypo]}>
                  Select your Sub-District
                </Text>
                <Image
                  style={styles.sortIcon}
                  contentFit="cover"
                  source={require("../assets/sort-icon10.png")}
                />
              </View>
              <View
                style={[
                  styles.selectYourSubDistrictParent,
                  styles.selectParentFlexBox,
                ]}
              >
                <Text style={[styles.selectYourSubDistrict, styles.yourTypo]}>
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
            style={[styles.button, styles.buttonSpaceBlock]}
            onPress={() => navigation.navigate("CustomerDaskboard1")}
          >
            <Text style={[styles.getStarted, styles.textFlexBox]}>
              Get Started
            </Text>
          </Pressable>
        </View>
      </View>
      <View style={[styles.homeIndicator, styles.buttonSpaceBlock]}>
        <View style={styles.shape} />
      </View>
      <View style={[styles.statusSection, styles.bodyPosition]}>
        <View style={[styles.barsStatusBarIphoneX, styles.selectParentFlexBox]}>
          <View style={[styles.timeStyle, styles.buttonFlexBox]}>
            <Text style={[styles.text, styles.textFlexBox]}>9:41</Text>
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
        <View style={styles.topBar} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navigationBarPosition: {
    left: 0,
    top: 0,
  },
  navigationBarFlexBox: {
    justifyContent: "flex-end",
    position: "absolute",
  },
  bodyPosition: {
    left: "50%",
    position: "absolute",
  },
  yourTypo: {
    fontFamily: FontFamily.bold,
    fontWeight: "700",
    fontSize: FontSize.bold1_size,
  },
  yourFlexBox: {
    textAlign: "left",
    letterSpacing: 0,
  },
  selectParentLayout: {
    paddingVertical: Padding.p_base_5,
    borderRadius: Border.br_base,
    width: 335,
  },
  xxxxxxxxTypo: {
    opacity: 0.6,
    fontSize: FontSize.bold1_size,
    textAlign: "left",
    fontFamily: FontFamily.normal,
    letterSpacing: 0,
  },
  selectParentFlexBox: {
    justifyContent: "space-between",
    paddingHorizontal: Padding.p_base,
    flexDirection: "row",
  },
  buttonSpaceBlock: {
    paddingHorizontal: 0,
    alignItems: "center",
  },
  textFlexBox: {
    textAlign: "center",
    letterSpacing: 0,
  },
  buttonFlexBox: {
    justifyContent: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
  iconSpaceBlock: {
    marginLeft: 5,
    height: 11,
  },
  loginsignupChild: {
    width: 424,
    height: 333,
    position: "absolute",
    left: 0,
  },
  rectangle: {
    shadowColor: "#a6a6aa",
    shadowOffset: {
      width: 0,
      height: 0.3,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
    height: 45,
    backgroundColor: Color.theme12,
    width: 375,
  },
  navigationBar: {
    height: 88,
    alignItems: "center",
    width: 375,
    left: 0,
    top: 0,
    overflow: "hidden",
  },
  phoneNumber: {
    fontSize: FontSize.normal3_size,
    width: 335,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.normal,
    letterSpacing: 0,
  },
  pleaseConfirmYour: {
    width: 327,
    textAlign: "left",
    letterSpacing: 0,
    color: Color.colorBlack,
  },
  userName: {
    fontSize: FontSize.normal_size,
    color: Color.colorBlack,
    textAlign: "left",
    letterSpacing: 0,
    fontFamily: FontFamily.normal,
  },
  xxxxxxxx: {
    color: Color.black,
  },
  searchbutton: {
    marginTop: 4,
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_base_5,
    flexDirection: "row",
    backgroundColor: Color.fontWhite,
    borderRadius: Border.br_base,
    alignItems: "center",
  },
  fullNameParent: {
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
  selectYourDistrictParent: {
    marginTop: 12,
    paddingVertical: Padding.p_base_5,
    borderRadius: Border.br_base,
    width: 335,
    backgroundColor: Color.fontWhite,
    justifyContent: "space-between",
    alignItems: "center",
  },
  selectYourSubDistrict: {
    color: Color.black1,
    textAlign: "left",
    letterSpacing: 0,
    fontWeight: "700",
    fontSize: FontSize.bold1_size,
  },
  selectYourSubDistrictParent: {
    backgroundColor: Color.white1,
    marginTop: 12,
    paddingVertical: Padding.p_base_5,
    borderRadius: Border.br_base,
    width: 335,
    alignItems: "center",
  },
  filllss: {
    marginTop: 16,
  },
  getStarted: {
    color: Color.fontWhite,
    fontFamily: FontFamily.bold,
    fontWeight: "700",
    fontSize: FontSize.bold1_size,
  },
  button: {
    backgroundColor: Color.main,
    marginTop: 24,
    justifyContent: "center",
    flexDirection: "row",
    overflow: "hidden",
    paddingVertical: Padding.p_base_5,
    borderRadius: Border.br_base,
    width: 335,
  },
  fills: {
    marginTop: 56,
  },
  body: {
    marginLeft: -167.5,
    top: 106,
    height: 629,
  },
  shape: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorDarkslategray,
    width: 135,
    height: 5,
  },
  homeIndicator: {
    right: "0%",
    bottom: 0,
    left: "0%",
    height: 34,
    paddingVertical: Padding.p_5xs,
    justifyContent: "flex-end",
    position: "absolute",
    width: "100%",
  },
  text: {
    fontSize: FontSize.size_mini,
    fontWeight: "600",
    fontFamily: FontFamily.sFProText,
    color: Color.colorGray_100,
    width: 54,
  },
  timeStyle: {
    alignItems: "center",
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
    paddingVertical: Padding.p_xs,
    backgroundColor: Color.theme12,
    width: 375,
    overflow: "hidden",
  },
  topBar: {
    backgroundColor: Color.theme12,
    alignItems: "center",
  },
  statusSection: {
    marginLeft: -187.5,
    alignItems: "center",
    top: 0,
    left: "50%",
  },
  loginsignup: {
    borderRadius: Border.br_6xl,
    backgroundColor: Color.theme13,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default Loginsignup1;
