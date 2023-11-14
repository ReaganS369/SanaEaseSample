import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

const SellerTopUp = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.sellerTopUp}>
      <View style={[styles.all, styles.allPosition]}>
        <View style={styles.topPortion}>
          <Image
            style={[styles.nativeBottomSheetIndicato, styles.allPosition]}
            contentFit="cover"
            source={require("../assets/native--bottom-sheet-indicator.png")}
          />
          <View style={styles.topPortion}>
            <View style={styles.upper}>
              <Image
                style={[styles.seperatorIcon, styles.allPosition1]}
                contentFit="cover"
                source={require("../assets/seperator2.png")}
              />
              <View style={[styles.heading, styles.closePosition]}>
                <Text style={[styles.addFund, styles.addFundTypo]}>
                  Add Fund
                </Text>
              </View>
              <View style={[styles.close, styles.closePosition]}>
                <Pressable
                  style={styles.vector}
                  onPress={() => navigation.navigate("SellerRegister")}
                >
                  <Image
                    style={styles.icon}
                    contentFit="cover"
                    source={require("../assets/vector11.png")}
                  />
                </Pressable>
              </View>
            </View>
            <View style={styles.amountSection}>
              <Text style={styles.n}>Enter Amount</Text>
              <View style={styles.border}>
                <View style={styles.moneyInput}>
                  <View style={styles.money}>
                    <Text style={styles.text}>₹</Text>
                    <Text style={[styles.text1, styles.bClr]}>0</Text>
                  </View>
                </View>
                <Text style={[styles.b, styles.bClr]}>
                  Your Balance ₹1,00,000.50
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.lowerBody}>
          <View style={styles.addMore}>
            <View style={styles.addMoreInner}>
              <View style={styles.parentLayout}>
                <View style={[styles.parent, styles.parentLayout]}>
                  <Text style={styles.text2}>500</Text>
                  <Text style={styles.text3}>+</Text>
                </View>
              </View>
            </View>
            <View style={[styles.addMoreChild, styles.addBorder]}>
              <View style={styles.groupLayout}>
                <View style={[styles.group, styles.groupLayout]}>
                  <Text style={styles.text2}>1,000</Text>
                  <Text style={styles.text3}>+</Text>
                </View>
              </View>
            </View>
            <View style={[styles.addMoreChild, styles.addBorder]}>
              <View style={styles.groupLayout}>
                <View style={[styles.group, styles.groupLayout]}>
                  <Text style={styles.text2}>5,000</Text>
                  <Text style={styles.text3}>+</Text>
                </View>
              </View>
            </View>
            <View style={[styles.addMoreInner1, styles.addBorder]}>
              <View style={styles.parent1Layout}>
                <View style={[styles.parent1, styles.parent1Layout]}>
                  <Text style={styles.text2}>10,000</Text>
                  <Text style={styles.text3}>+</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.border}>
            <View style={styles.continueButton}>
              <Text style={[styles.continue, styles.addFundTypo]}>
                Continue
              </Text>
            </View>
            <View style={styles.lowerSection1}>
              <View style={[styles.androidKeyboard, styles.allPosition]}>
                <View style={styles.page1}>
                  <View style={[styles.view, styles.viewPosition5]}>
                    <Image
                      style={[styles.rectangleIcon, styles.rectangleIconLayout]}
                      contentFit="cover"
                      source={require("../assets/rectangle.png")}
                    />
                    <Text style={[styles.text10, styles.textTypo]}>0</Text>
                    <Text style={[styles.text11, styles.textTypo]}>+</Text>
                  </View>
                  <View style={[styles.view1, styles.viewPosition3]}>
                    <Image
                      style={[styles.rectangleIcon, styles.rectangleIconLayout]}
                      contentFit="cover"
                      source={require("../assets/rectangle1.png")}
                    />
                    <Text style={[styles.text10, styles.textTypo]}>9</Text>
                    <Text style={[styles.wxyz, styles.tuvPosition]}>WXYZ</Text>
                  </View>
                  <View style={[styles.view2, styles.viewPosition4]}>
                    <Image
                      style={[styles.rectangleIcon, styles.rectangleIconLayout]}
                      contentFit="cover"
                      source={require("../assets/rectangle.png")}
                    />
                    <Text style={[styles.text10, styles.textTypo]}>8</Text>
                    <Text style={[styles.tuv, styles.tuvPosition]}>TUV</Text>
                  </View>
                  <View style={[styles.view3, styles.viewPosition2]}>
                    <Image
                      style={[styles.rectangleIcon, styles.rectangleIconLayout]}
                      contentFit="cover"
                      source={require("../assets/rectangle2.png")}
                    />
                    <Text style={[styles.text10, styles.textTypo]}>7</Text>
                    <Text style={[styles.prqs, styles.tuvPosition]}>PRQS</Text>
                  </View>
                  <View style={[styles.view4, styles.viewPosition1]}>
                    <Image
                      style={[styles.rectangleIcon, styles.rectangleIconLayout]}
                      contentFit="cover"
                      source={require("../assets/rectangle1.png")}
                    />
                    <Text style={[styles.text10, styles.textTypo]}>6</Text>
                    <Text style={[styles.mno, styles.tuvPosition]}>MNO</Text>
                  </View>
                  <View style={[styles.view5, styles.viewPosition1]}>
                    <Image
                      style={[styles.rectangleIcon, styles.rectangleIconLayout]}
                      contentFit="cover"
                      source={require("../assets/rectangle.png")}
                    />
                    <Text style={[styles.text10, styles.textTypo]}>5</Text>
                    <Text style={[styles.jkl, styles.tuvPosition]}>JKL</Text>
                  </View>
                  <View style={[styles.view6, styles.viewPosition1]}>
                    <Image
                      style={[styles.rectangleIcon, styles.rectangleIconLayout]}
                      contentFit="cover"
                      source={require("../assets/rectangle2.png")}
                    />
                    <Text style={[styles.text10, styles.textTypo]}>4</Text>
                    <Text style={[styles.ghi, styles.tuvPosition]}>GHI</Text>
                  </View>
                  <View style={[styles.view7, styles.viewPosition]}>
                    <Image
                      style={[styles.rectangleIcon, styles.rectangleIconLayout]}
                      contentFit="cover"
                      source={require("../assets/rectangle1.png")}
                    />
                    <Text style={[styles.text10, styles.textTypo]}>3</Text>
                    <Text style={[styles.jkl, styles.tuvPosition]}>DEF</Text>
                  </View>
                  <View style={[styles.view8, styles.viewPosition]}>
                    <Image
                      style={[styles.rectangleIcon, styles.rectangleIconLayout]}
                      contentFit="cover"
                      source={require("../assets/rectangle.png")}
                    />
                    <Text style={[styles.text10, styles.textTypo]}>2</Text>
                    <Text style={[styles.tuv, styles.tuvPosition]}>ABC</Text>
                  </View>
                  <View style={[styles.view9, styles.viewPosition]}>
                    <Image
                      style={[styles.rectangleIcon, styles.rectangleIconLayout]}
                      contentFit="cover"
                      source={require("../assets/rectangle2.png")}
                    />
                    <Text style={[styles.text10, styles.textTypo]}>1</Text>
                  </View>
                  <Image
                    style={[styles.rectangleIcon10, styles.viewPosition3]}
                    contentFit="cover"
                    source={require("../assets/rectangle3.png")}
                  />
                </View>
              </View>
              <View style={styles.nagBar}>
                <View style={[styles.shape, styles.allPosition1]} />
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  allPosition: {
    borderTopRightRadius: Border.br_base,
    borderTopLeftRadius: Border.br_base,
  },
  allPosition1: {
    left: "50%",
    position: "absolute",
  },
  closePosition: {
    paddingVertical: 0,
    flexDirection: "row",
    left: 0,
    top: 0,
    width: 359,
    position: "absolute",
  },
  addFundTypo: {
    textAlign: "center",
    letterSpacing: 0,
    fontSize: FontSize.bold1_size,
    fontFamily: FontFamily.bold,
    fontWeight: "700",
  },
  bClr: {
    color: Color.black,
    textAlign: "center",
    letterSpacing: 0,
  },
  parentLayout: {
    height: 18,
    width: 33,
  },
  addBorder: {
    marginLeft: 8,
    paddingHorizontal: Padding.p_5xs,
    height: 44,
    borderColor: Color.black,
    paddingVertical: Padding.p_11xs,
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.fontWhite,
    borderRadius: Border.br_5xs,
    justifyContent: "center",
    alignItems: "center",
  },
  groupLayout: {
    width: 44,
    height: 18,
  },
  parent1Layout: {
    width: 51,
    height: 18,
  },
  viewPosition5: {
    left: "33.95%",
    right: "33.99%",
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
  viewPosition3: {
    left: "67.94%",
    right: "0%",
  },
  tuvPosition: {
    left: "48.85%",
    top: "29.55%",
    height: "36.36%",
    fontFamily: FontFamily.robotoRegular,
    color: Color.colorDarkslategray,
    fontSize: FontSize.normal1_size,
    textAlign: "left",
    position: "absolute",
  },
  viewPosition4: {
    bottom: "25.65%",
    top: "51.31%",
    width: "32.06%",
    height: "23.04%",
    position: "absolute",
  },
  viewPosition2: {
    left: "0%",
    right: "67.94%",
  },
  viewPosition1: {
    bottom: "51.31%",
    top: "25.65%",
    width: "32.06%",
    height: "23.04%",
    position: "absolute",
  },
  viewPosition: {
    bottom: "76.96%",
    top: "0%",
    width: "32.06%",
    height: "23.04%",
    position: "absolute",
  },
  nativeBottomSheetIndicato: {
    height: 24,
    width: 359,
  },
  seperatorIcon: {
    marginLeft: -180,
    top: 36,
    width: 360,
    height: 1,
  },
  addFund: {
    color: Color.colorBlack,
    textAlign: "center",
    letterSpacing: 0,
    fontSize: FontSize.bold1_size,
  },
  heading: {
    paddingHorizontal: Padding.p_62xl,
    justifyContent: "center",
    paddingVertical: 0,
    alignItems: "center",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  vector: {
    width: 24,
    height: 24,
  },
  close: {
    paddingHorizontal: Padding.p_base,
    justifyContent: "flex-end",
  },
  upper: {
    height: 36,
    width: 359,
  },
  n: {
    fontSize: FontSize.normal_size,
    fontFamily: FontFamily.normal,
    textAlign: "center",
    color: Color.colorBlack,
    letterSpacing: 0,
  },
  text: {
    fontSize: FontSize.bold_size,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.bold,
    fontWeight: "700",
    letterSpacing: 0,
  },
  text1: {
    fontSize: FontSize.normal3_size,
    textTransform: "capitalize",
    marginLeft: 2,
    fontFamily: FontFamily.bold,
    fontWeight: "700",
    color: Color.black,
  },
  money: {
    flexDirection: "row",
    alignItems: "center",
  },
  moneyInput: {
    borderColor: Color.theme12,
    paddingHorizontal: 92,
    paddingVertical: Padding.p_11xs,
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.fontWhite,
    borderRadius: Border.br_5xs,
    flexDirection: "row",
  },
  b: {
    fontSize: FontSize.normal2_size,
    fontWeight: "600",
    fontFamily: FontFamily.openSansSemiBold,
    marginTop: 4,
  },
  border: {
    marginTop: 16,
    alignItems: "center",
  },
  amountSection: {
    marginTop: 56,
    alignItems: "center",
  },
  topPortion: {
    alignItems: "center",
  },
  text2: {
    left: 9,
    color: Color.colorDarkslategray,
    fontSize: FontSize.normal1_size,
    top: "50%",
    marginTop: -10,
    textAlign: "left",
    fontFamily: FontFamily.normal,
    letterSpacing: 0,
    position: "absolute",
  },
  text3: {
    fontSize: FontSize.normal1_size,
    marginTop: -10,
    top: "50%",
    color: Color.black,
    textAlign: "left",
    fontFamily: FontFamily.normal,
    letterSpacing: 0,
    left: 0,
    position: "absolute",
  },
  parent: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  addMoreInner: {
    width: 59,
    paddingHorizontal: Padding.p_5xs,
    height: 44,
    borderColor: Color.black,
    paddingVertical: Padding.p_11xs,
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.fontWhite,
    borderRadius: Border.br_5xs,
    justifyContent: "center",
    alignItems: "center",
  },
  group: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  addMoreChild: {
    width: 72,
  },
  parent1: {
    marginTop: -9,
    marginLeft: -25.5,
    top: "50%",
    width: 51,
    left: "50%",
    position: "absolute",
  },
  addMoreInner1: {
    width: 80,
  },
  addMore: {
    flexDirection: "row",
  },
  continue: {
    color: Color.fontWhite,
    textAlign: "center",
    letterSpacing: 0,
    fontSize: FontSize.bold1_size,
  },
  continueButton: {
    justifyContent: "space-between",
    paddingHorizontal: 0,
    paddingVertical: Padding.p_base_5,
    width: 375,
    backgroundColor: Color.colorSaddlebrown_100,
    flexDirection: "row",
    alignItems: "center",
  },
  rectangleIcon: {
    height: "104.55%",
    width: "102.01%",
    right: "-1%",
    bottom: "-4.55%",
    left: "-1%",
    top: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
  },
  text10: {
    height: "79.55%",
    width: "20.26%",
    top: "6.82%",
    left: "23.77%",
    fontSize: FontSize.size_11xl,
  },
  text11: {
    height: "52.27%",
    width: "14.24%",
    top: "20.45%",
    left: "63.09%",
    fontSize: FontSize.size_xl,
  },
  view: {
    bottom: "0%",
    top: "76.96%",
    width: "32.06%",
    height: "23.04%",
    position: "absolute",
    left: "33.95%",
    right: "33.99%",
  },
  wxyz: {
    width: "46.44%",
  },
  view1: {
    bottom: "25.65%",
    top: "51.31%",
    width: "32.06%",
    height: "23.04%",
    position: "absolute",
  },
  tuv: {
    width: "32.1%",
  },
  view2: {
    left: "33.95%",
    right: "33.99%",
  },
  prqs: {
    width: "42.83%",
  },
  view3: {
    bottom: "25.65%",
    top: "51.31%",
    width: "32.06%",
    height: "23.04%",
    position: "absolute",
  },
  mno: {
    width: "38.11%",
  },
  view4: {
    left: "67.94%",
    right: "0%",
  },
  jkl: {
    width: "29.79%",
  },
  view5: {
    left: "33.95%",
    right: "33.99%",
  },
  ghi: {
    width: "28.59%",
  },
  view6: {
    left: "0%",
    right: "67.94%",
  },
  view7: {
    left: "67.94%",
    right: "0%",
  },
  view8: {
    left: "33.95%",
    right: "33.99%",
  },
  view9: {
    left: "0%",
    right: "67.94%",
  },
  rectangleIcon10: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
    bottom: "0%",
    top: "76.96%",
    width: "32.06%",
    height: "23.04%",
  },
  page1: {
    width: 311,
    height: 191,
  },
  androidKeyboard: {
    paddingHorizontal: Padding.p_13xl,
    paddingVertical: Padding.p_base,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: Color.theme13,
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
    width: 375,
    backgroundColor: Color.theme13,
  },
  lowerSection1: {
    backgroundColor: Color.colorSaddlebrown_100,
  },
  lowerBody: {
    marginTop: 112,
    alignItems: "center",
  },
  all: {
    marginLeft: -187.5,
    bottom: 0,
    alignItems: "center",
    backgroundColor: Color.theme13,
    left: "50%",
    position: "absolute",
  },
  sellerTopUp: {
    borderRadius: Border.br_6xl,
    flex: 1,
    height: 804,
    overflow: "hidden",
    width: "100%",
  },
});

export default SellerTopUp;
