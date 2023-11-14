import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

const LoginsignupOTP1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.loginsignupOtp}>
      <Image
        style={styles.loginsignupOtpChild}
        contentFit="cover"
        source={require("../assets/background.png")}
      />
      <View style={[styles.lowerSection, styles.lowerSectionPosition]}>
        <View style={[styles.androidKeyboard, styles.androidKeyboardBg]}>
          <View style={styles.page1}>
            <View style={[styles.view, styles.viewLayout1]}>
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
                source={require("../assets/rectangle4.png")}
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
                source={require("../assets/rectangle4.png")}
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
            <View style={[styles.view7, styles.viewLayout1]}>
              <Image
                style={[styles.rectangleIcon, styles.rectangleIconLayout]}
                contentFit="cover"
                source={require("../assets/rectangle4.png")}
              />
              <Text style={[styles.text, styles.textTypo]}>3</Text>
              <Text style={[styles.jkl, styles.tuvTypo]}>DEF</Text>
            </View>
            <View style={[styles.view8, styles.viewLayout1]}>
              <Image
                style={[styles.rectangleIcon, styles.rectangleIconLayout]}
                contentFit="cover"
                source={require("../assets/rectangle.png")}
              />
              <Text style={[styles.text, styles.textTypo]}>2</Text>
              <Text style={[styles.tuv, styles.tuvTypo]}>ABC</Text>
            </View>
            <View style={[styles.view9, styles.viewLayout1]}>
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
          <View style={[styles.shape, styles.otpPosition]} />
        </View>
      </View>
      <View style={[styles.otp, styles.otpPosition]}>
        <View style={styles.parent}>
          <View style={styles.viewLayout}>
            <Text style={[styles.text11, styles.nTypo]}>0</Text>
          </View>
          <View style={[styles.view11, styles.viewLayout]}>
            <Text style={[styles.text11, styles.nTypo]}>0</Text>
          </View>
          <View style={[styles.view11, styles.viewLayout]}>
            <Text style={[styles.text11, styles.nTypo]}>0</Text>
          </View>
          <View style={[styles.view11, styles.viewLayout]}>
            <Text style={[styles.text11, styles.nTypo]}>0</Text>
          </View>
        </View>
        <Pressable
          style={styles.pressable}
          onPress={() => navigation.navigate("Loginsignup")}
        >
          <Text style={[styles.text15, styles.textFlexBox]}>
            <Text
              style={styles.didntReceiveThe}
            >{`Didn't receive the OTP? `}</Text>
            <Text style={styles.resendOtp}>
              <Text style={styles.continueTypo}>Resend OTP</Text>
              <Text style={styles.text16}>{` `}</Text>
            </Text>
          </Text>
        </Pressable>
      </View>
      <View style={[styles.upper, styles.otpPosition]}>
        <Text style={[styles.n, styles.nTypo]}>OTP Verification</Text>
        <Pressable
          style={styles.pressable1}
          onPress={() => navigation.navigate("Loginsignup")}
        >
          <Text style={[styles.text17, styles.doneTypo1]}>
            <Text style={styles.enterYourOtp}>Enter your OTP send to</Text>
            <Text>
              <Text style={styles.enterYourOtp}>{`+91 98765 43210 `}</Text>
              <Text style={[styles.changeNumber, styles.doneTypo]}>
                (Change Number)
              </Text>
            </Text>
          </Text>
        </Pressable>
      </View>
      <View style={[styles.statusSection, styles.otpPosition]}>
        <View
          style={[styles.barsStatusBarIphoneX, styles.continueButtonFlexBox]}
        >
          <View style={styles.timeStyle}>
            <Text style={[styles.text19, styles.textFlexBox]}>9:41</Text>
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
              <Text style={[styles.done, styles.doneTypo]}>Skip</Text>
              <Image
                style={styles.vectorIcon}
                contentFit="cover"
                source={require("../assets/vector6.png")}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.continueButton, styles.continueButtonFlexBox]}>
        <Text style={[styles.continue, styles.continueTypo]}>Continue</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  lowerSectionPosition: {
    backgroundColor: Color.colorSaddlebrown_100,
    left: "50%",
    marginLeft: -187.5,
    position: "absolute",
  },
  androidKeyboardBg: {
    backgroundColor: Color.theme12,
    overflow: "hidden",
  },
  viewLayout1: {
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
  otpPosition: {
    left: "50%",
    position: "absolute",
  },
  nTypo: {
    letterSpacing: 0,
    fontFamily: FontFamily.normal,
    textAlign: "left",
  },
  viewLayout: {
    paddingVertical: Padding.p_6xs,
    paddingHorizontal: Padding.p_mid,
    height: 48,
    width: 48,
    borderWidth: 1,
    borderColor: Color.colorSaddlebrown_100,
    borderStyle: "solid",
    backgroundColor: Color.fontWhite,
    borderRadius: Border.br_5xs,
    justifyContent: "space-between",
    overflow: "hidden",
  },
  textFlexBox: {
    textAlign: "center",
    letterSpacing: 0,
  },
  doneTypo1: {
    fontSize: FontSize.normal_size,
    letterSpacing: 0,
  },
  doneTypo: {
    textTransform: "capitalize",
    fontFamily: FontFamily.bold,
    fontWeight: "700",
  },
  continueButtonFlexBox: {
    justifyContent: "space-between",
    flexDirection: "row",
    width: 375,
  },
  iconSpaceBlock: {
    marginLeft: 5,
    height: 11,
  },
  continueTypo: {
    fontFamily: FontFamily.bold,
    fontWeight: "700",
  },
  loginsignupOtpChild: {
    width: 424,
    height: 333,
    left: 0,
    top: 0,
    position: "absolute",
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
  text11: {
    fontSize: FontSize.bold_size,
    color: Color.black,
    fontFamily: FontFamily.normal,
  },
  view11: {
    marginLeft: 16,
  },
  parent: {
    flexDirection: "row",
    alignItems: "center",
  },
  didntReceiveThe: {
    color: Color.black,
    fontFamily: FontFamily.normal,
  },
  text16: {
    fontFamily: FontFamily.normal,
  },
  resendOtp: {
    color: Color.colorSaddlebrown_100,
  },
  text15: {
    fontSize: FontSize.normal2_size,
    width: 304,
  },
  pressable: {
    marginTop: 8,
  },
  otp: {
    marginLeft: -152,
    top: 274,
    alignItems: "center",
  },
  n: {
    fontSize: FontSize.normal3_size,
    fontFamily: FontFamily.normal,
    color: Color.colorBlack,
  },
  enterYourOtp: {
    fontFamily: FontFamily.normal,
    color: Color.colorBlack,
  },
  changeNumber: {
    color: Color.colorSaddlebrown_100,
  },
  text17: {
    width: 327,
    textAlign: "left",
  },
  pressable1: {
    marginTop: 56,
  },
  upper: {
    marginLeft: -171.5,
    top: 106,
    width: 343,
  },
  text19: {
    fontSize: FontSize.size_mini,
    fontWeight: "600",
    fontFamily: FontFamily.sFProText,
    color: Color.colorGray_100,
    width: 54,
  },
  timeStyle: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
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
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_xs,
    backgroundColor: Color.theme12,
    overflow: "hidden",
  },
  done: {
    textAlign: "right",
    fontSize: FontSize.normal_size,
    letterSpacing: 0,
    color: Color.black,
  },
  vectorIcon: {
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
    marginLeft: -187.5,
    left: "50%",
    top: 0,
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
    alignItems: "center",
    backgroundColor: Color.colorSaddlebrown_100,
    left: "50%",
    marginLeft: -187.5,
    position: "absolute",
  },
  loginsignupOtp: {
    borderRadius: Border.br_6xl,
    backgroundColor: Color.theme13,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default LoginsignupOTP1;
