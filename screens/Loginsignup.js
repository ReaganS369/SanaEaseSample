import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

const Loginsignup = () => {
  return (
    <View style={styles.loginsignup}>
      <Image
        style={[styles.backgroundIcon, styles.shapePosition]}
        contentFit="cover"
        source={require("../assets/background.png")}
      />
      <View style={[styles.lowerSection, styles.lowerSectionPosition]}>
        <View style={styles.androidKeyboard}>
          <View style={styles.page1}>
            <View style={[styles.view, styles.viewLayout]}>
              <Image
                style={[styles.rectangleIcon, styles.rectangleIconLayout]}
                contentFit="cover"
                source={require("../assets/rectangle.png")}
              />
              <Text style={[styles.text, styles.textTypo]}>0</Text>
              <Text style={[styles.text1, styles.textTypo]}>+</Text>
            </View>
            <View style={[styles.view1, styles.viewPosition1]}>
              <Image
                style={[styles.rectangleIcon, styles.rectangleIconLayout]}
                contentFit="cover"
                source={require("../assets/rectangle1.png")}
              />
              <Text style={[styles.text, styles.textTypo]}>9</Text>
              <Text style={[styles.wxyz, styles.tuvTypo]}>WXYZ</Text>
            </View>
            <View style={[styles.view2, styles.viewPosition1]}>
              <Image
                style={[styles.rectangleIcon, styles.rectangleIconLayout]}
                contentFit="cover"
                source={require("../assets/rectangle.png")}
              />
              <Text style={[styles.text, styles.textTypo]}>8</Text>
              <Text style={[styles.tuv, styles.tuvTypo]}>TUV</Text>
            </View>
            <View style={[styles.view3, styles.viewPosition1]}>
              <Image
                style={[styles.rectangleIcon, styles.rectangleIconLayout]}
                contentFit="cover"
                source={require("../assets/rectangle2.png")}
              />
              <Text style={[styles.text, styles.textTypo]}>7</Text>
              <Text style={[styles.prqs, styles.tuvTypo]}>PRQS</Text>
            </View>
            <View style={[styles.view4, styles.viewPosition]}>
              <Image
                style={[styles.rectangleIcon, styles.rectangleIconLayout]}
                contentFit="cover"
                source={require("../assets/rectangle1.png")}
              />
              <Text style={[styles.text, styles.textTypo]}>6</Text>
              <Text style={[styles.mno, styles.tuvTypo]}>MNO</Text>
            </View>
            <View style={[styles.view5, styles.viewPosition]}>
              <Image
                style={[styles.rectangleIcon, styles.rectangleIconLayout]}
                contentFit="cover"
                source={require("../assets/rectangle.png")}
              />
              <Text style={[styles.text, styles.textTypo]}>5</Text>
              <Text style={[styles.jkl, styles.tuvTypo]}>JKL</Text>
            </View>
            <View style={[styles.view6, styles.viewPosition]}>
              <Image
                style={[styles.rectangleIcon, styles.rectangleIconLayout]}
                contentFit="cover"
                source={require("../assets/rectangle2.png")}
              />
              <Text style={[styles.text, styles.textTypo]}>4</Text>
              <Text style={[styles.ghi, styles.tuvTypo]}>GHI</Text>
            </View>
            <View style={[styles.view7, styles.viewLayout]}>
              <Image
                style={[styles.rectangleIcon, styles.rectangleIconLayout]}
                contentFit="cover"
                source={require("../assets/rectangle1.png")}
              />
              <Text style={[styles.text, styles.textTypo]}>3</Text>
              <Text style={[styles.jkl, styles.tuvTypo]}>DEF</Text>
            </View>
            <View style={[styles.view8, styles.viewLayout]}>
              <Image
                style={[styles.rectangleIcon, styles.rectangleIconLayout]}
                contentFit="cover"
                source={require("../assets/rectangle.png")}
              />
              <Text style={[styles.text, styles.textTypo]}>2</Text>
              <Text style={[styles.tuv, styles.tuvTypo]}>ABC</Text>
            </View>
            <View style={[styles.view9, styles.viewLayout]}>
              <Image
                style={[styles.rectangleIcon, styles.rectangleIconLayout]}
                contentFit="cover"
                source={require("../assets/rectangle2.png")}
              />
              <Text style={[styles.text, styles.textTypo]}>1</Text>
            </View>
            <Image
              style={[styles.rectangleIcon10, styles.rectangleIconLayout]}
              contentFit="cover"
              source={require("../assets/rectangle3.png")}
            />
          </View>
        </View>
        <View style={[styles.nagBar, styles.barLayout]}>
          <View style={[styles.shape, styles.shapePosition]} />
        </View>
      </View>
      <View style={[styles.continueButton, styles.continueButtonFlexBox]}>
        <Text style={[styles.continue, styles.doneTypo]}>Continue</Text>
      </View>
      <View style={[styles.moreSignIn, styles.shapePosition]}>
        <View style={[styles.or, styles.orFlexBox]}>
          <Image
            style={styles.orItemLayout}
            contentFit="cover"
            source={require("../assets/line-31.png")}
          />
          <Text style={styles.or1}>OR</Text>
          <Image
            style={[styles.orItem, styles.orItemLayout]}
            contentFit="cover"
            source={require("../assets/line-31.png")}
          />
        </View>
        <View style={[styles.googleLogin, styles.googleLoginLayout]}>
          <Image
            style={[styles.iconGoogle, styles.iconGooglePosition]}
            contentFit="cover"
            source={require("../assets/icon--google1.png")}
          />
          <Text style={[styles.signInWith, styles.n2Typo]}>
            Sign in with Google
          </Text>
        </View>
      </View>
      <View style={[styles.upper, styles.shapePosition]}>
        <Text style={styles.n}>{`Get Started `}</Text>
        <View style={styles.numberSection}>
          <Text style={[styles.n1, styles.n1Typo]}>
            Enter your phone number to recieve a verification code
          </Text>
          <View
            style={[
              styles.phoneNumberSection,
              styles.phoneNumberSectionSpaceBlock,
            ]}
          >
            <View style={[styles.or, styles.orFlexBox]}>
              <Text style={[styles.text11, styles.textLayout]}>+000</Text>
              <Image
                style={styles.vectorIcon}
                contentFit="cover"
                source={require("../assets/vector7.png")}
              />
            </View>
            <Image
              style={styles.seperatorIcon}
              contentFit="cover"
              source={require("../assets/seperator.png")}
            />
            <View style={styles.number}>
              <View style={styles.cursor} />
              <Text style={[styles.n2, styles.n2Typo]}>Phone Number</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.statusSection, styles.shapePosition]}>
        <View
          style={[
            styles.barsStatusBarIphoneX,
            styles.phoneNumberSectionSpaceBlock,
          ]}
        >
          <View style={[styles.timeStyle, styles.orFlexBox]}>
            <Text style={[styles.text12, styles.textLayout]}>9:41</Text>
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
        <View style={[styles.topBar, styles.barLayout]}>
          <View style={styles.skip}>
            <View style={styles.v1}>
              <Text style={[styles.done, styles.n1Typo]}>Skip</Text>
              <Image
                style={styles.vectorIcon1}
                contentFit="cover"
                source={require("../assets/vector6.png")}
              />
            </View>
          </View>
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
  lowerSectionPosition: {
    backgroundColor: Color.colorSaddlebrown_100,
    left: "50%",
    marginLeft: -187.5,
    position: "absolute",
  },
  viewLayout: {
    height: 44,
    width: 100,
    position: "absolute",
  },
  rectangleIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  textTypo: {
    fontFamily: FontFamily.robotoRegular,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  viewPosition1: {
    top: 98,
    height: 44,
    width: 100,
    position: "absolute",
  },
  tuvTypo: {
    color: Color.colorDarkslategray,
    fontSize: FontSize.normal1_size,
    left: "48.85%",
    top: "29.55%",
    height: "36.36%",
    textAlign: "left",
    fontFamily: FontFamily.robotoRegular,
    position: "absolute",
  },
  viewPosition: {
    top: 49,
    height: 44,
    width: 100,
    position: "absolute",
  },
  barLayout: {
    width: 375,
    backgroundColor: Color.theme12,
  },
  continueButtonFlexBox: {
    justifyContent: "space-between",
    width: 375,
  },
  doneTypo: {
    fontFamily: FontFamily.bold,
    fontWeight: "700",
  },
  orFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  orItemLayout: {
    height: 1,
    width: 161,
  },
  googleLoginLayout: {
    marginTop: 16,
    width: 343,
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.fontWhite,
  },
  iconGooglePosition: {
    top: "50%",
    position: "absolute",
  },
  n2Typo: {
    fontSize: FontSize.bold_size,
    textAlign: "left",
  },
  n1Typo: {
    fontSize: FontSize.normal_size,
    letterSpacing: 0,
  },
  phoneNumberSectionSpaceBlock: {
    paddingHorizontal: Padding.p_base,
    flexDirection: "row",
    overflow: "hidden",
  },
  textLayout: {
    width: 54,
    letterSpacing: 0,
  },
  iconSpaceBlock: {
    marginLeft: 5,
    height: 11,
  },
  backgroundIcon: {
    width: 424,
    height: 333,
    top: 0,
    marginLeft: -187.5,
    left: "50%",
  },
  rectangleIcon: {
    height: "104.55%",
    width: "102.01%",
    top: "0%",
    right: "-1%",
    bottom: "-4.55%",
    left: "-1%",
  },
  text: {
    height: "79.55%",
    width: "20.26%",
    top: "6.82%",
    left: "23.77%",
    fontSize: FontSize.size_11xl,
    textAlign: "left",
    color: Color.colorBlack,
  },
  text1: {
    height: "52.27%",
    width: "14.24%",
    top: "20.45%",
    left: "63.09%",
    fontSize: FontSize.size_xl,
    textAlign: "left",
    color: Color.colorBlack,
  },
  view: {
    top: 147,
    left: 106,
  },
  wxyz: {
    width: "46.44%",
  },
  view1: {
    left: 211,
  },
  tuv: {
    width: "32.1%",
  },
  view2: {
    left: 106,
  },
  prqs: {
    width: "42.83%",
  },
  view3: {
    left: 0,
  },
  mno: {
    width: "38.11%",
  },
  view4: {
    left: 211,
  },
  jkl: {
    width: "29.79%",
  },
  view5: {
    left: 106,
  },
  ghi: {
    width: "28.59%",
  },
  view6: {
    left: 0,
  },
  view7: {
    left: 211,
    top: 0,
  },
  view8: {
    left: 106,
    top: 0,
  },
  view9: {
    left: 0,
    top: 0,
  },
  rectangleIcon10: {
    height: "23.04%",
    width: "32.06%",
    top: "76.96%",
    right: "0%",
    bottom: "0%",
    left: "67.94%",
  },
  page1: {
    width: 311,
    height: 191,
  },
  androidKeyboard: {
    borderTopLeftRadius: Border.br_base,
    borderTopRightRadius: Border.br_base,
    paddingHorizontal: Padding.p_13xl,
    paddingVertical: Padding.p_base,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: Color.theme12,
    overflow: "hidden",
  },
  shape: {
    marginLeft: -67.5,
    bottom: 8,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorDarkslategray,
    width: 135,
    height: 5,
  },
  nagBar: {
    height: 34,
  },
  lowerSection: {
    bottom: 0,
  },
  continue: {
    fontSize: FontSize.bold1_size,
    color: Color.fontWhite,
    textAlign: "center",
    letterSpacing: 0,
  },
  continueButton: {
    bottom: 257,
    paddingHorizontal: 0,
    paddingVertical: Padding.p_base_5,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Color.colorSaddlebrown_100,
    left: "50%",
    marginLeft: -187.5,
    position: "absolute",
  },
  or1: {
    fontSize: FontSize.normal2_size,
    fontFamily: FontFamily.openSansSemiBold,
    marginLeft: 4,
    color: Color.black,
    fontWeight: "600",
    letterSpacing: 0,
    textAlign: "left",
  },
  orItem: {
    marginLeft: 4,
  },
  or: {
    flexDirection: "row",
  },
  iconGoogle: {
    marginTop: -16,
    left: 12,
    width: 32,
    height: 32,
  },
  signInWith: {
    marginTop: -17,
    left: 89,
    top: "50%",
    position: "absolute",
    color: Color.black,
    fontFamily: FontFamily.bold,
    fontWeight: "700",
    letterSpacing: 0,
  },
  googleLogin: {
    borderRadius: Border.br_5xs,
    borderColor: Color.black,
    height: 48,
  },
  moreSignIn: {
    marginLeft: -172.5,
    top: 393,
    alignItems: "center",
  },
  n: {
    fontSize: FontSize.normal3_size,
    fontFamily: FontFamily.normal,
    textAlign: "center",
    letterSpacing: 0,
    color: Color.colorBlack,
  },
  n1: {
    width: 327,
    fontFamily: FontFamily.normal,
    textAlign: "left",
    color: Color.colorBlack,
  },
  text11: {
    fontFamily: FontFamily.normal,
    fontSize: FontSize.bold_size,
    textAlign: "left",
    color: Color.colorBlack,
  },
  vectorIcon: {
    width: 8,
    marginLeft: 4,
    height: 5,
  },
  seperatorIcon: {
    width: 1,
    height: 47,
    marginLeft: 8,
  },
  cursor: {
    borderRadius: 2,
    backgroundColor: Color.colorBlack,
    width: 2,
    height: 36,
  },
  n2: {
    width: 207,
    marginLeft: 2,
    fontFamily: FontFamily.normal,
    color: Color.black,
    letterSpacing: 0,
  },
  number: {
    alignItems: "flex-end",
    marginLeft: 8,
    flexDirection: "row",
  },
  phoneNumberSection: {
    borderRadius: Border.br_9xs,
    borderColor: Color.theme12,
    paddingVertical: 0,
    marginTop: 16,
    width: 343,
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.fontWhite,
    justifyContent: "center",
    alignItems: "center",
  },
  numberSection: {
    marginTop: 56,
  },
  upper: {
    marginLeft: -171.5,
    top: 106,
  },
  text12: {
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.sFProText,
    color: Color.colorGray_100,
    fontWeight: "600",
    textAlign: "center",
  },
  timeStyle: {
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
    paddingVertical: Padding.p_xs,
    justifyContent: "space-between",
    width: 375,
    backgroundColor: Color.theme12,
  },
  done: {
    textTransform: "capitalize",
    textAlign: "right",
    color: Color.black,
    fontFamily: FontFamily.bold,
    fontWeight: "700",
  },
  vectorIcon1: {
    width: 10,
    height: 10,
    marginLeft: 2,
  },
  v1: {
    top: 5,
    left: 8,
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
  },
  skip: {
    width: 61,
    height: 32,
  },
  topBar: {
    paddingTop: Padding.p_xs,
    paddingRight: Padding.p_base,
    paddingBottom: Padding.p_xs,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  statusSection: {
    alignItems: "center",
    top: 0,
    marginLeft: -187.5,
    left: "50%",
  },
  loginsignup: {
    borderRadius: Border.br_6xl,
    backgroundColor: Color.theme13,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default Loginsignup;
