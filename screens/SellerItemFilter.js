import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontSize, FontFamily, Padding } from "../GlobalStyles";

const SellerItemFilter = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.sellerItemFilter}>
      <View style={styles.dialogBox}>
        <View>
          <View>
            <Image
              style={styles.nativeBottomSheetIndicato}
              contentFit="cover"
              source={require("../assets/native--bottom-sheet-indicator1.png")}
            />
            <View style={styles.upper}>
              <Image
                style={styles.seperatorIcon}
                contentFit="cover"
                source={require("../assets/seperator1.png")}
              />
              <View style={[styles.heading, styles.closePosition]}>
                <Text style={styles.sorts}>Sorts</Text>
              </View>
              <View style={[styles.close, styles.closePosition]}>
                <Pressable
                  style={styles.vector}
                  onPress={() => navigation.navigate("SellerRegister")}
                >
                  <Image
                    style={styles.icon}
                    contentFit="cover"
                    source={require("../assets/vector8.png")}
                  />
                </Pressable>
              </View>
            </View>
          </View>
          <View style={styles.frameParent}>
            <View style={[styles.selectCategoryParent, styles.wrapperLayout]}>
              <Text style={styles.selectCategory}>Select category</Text>
              <Image
                style={styles.sortIcon}
                contentFit="cover"
                source={require("../assets/sort-icon1.png")}
              />
            </View>
            <View style={styles.set}>
              <View style={[styles.rangeSlider, styles.rangeLayout]}>
                <View style={styles.rangeSliderChild} />
                <Image
                  style={[styles.bulletIcon, styles.bulletIconLayout]}
                  contentFit="cover"
                  source={require("../assets/bullet.png")}
                />
                <Image
                  style={[styles.bulletIcon1, styles.bulletIconLayout]}
                  contentFit="cover"
                  source={require("../assets/bullet.png")}
                />
                <View style={[styles.rangeFields, styles.rangeFieldsFlexBox]}>
                  <View style={[styles.wrapper, styles.wrapperLayout]}>
                    <Text style={styles.text}>₹0</Text>
                  </View>
                  <View style={styles.rangeFieldsChild} />
                  <View style={[styles.wrapper, styles.wrapperLayout]}>
                    <Text style={styles.text1}>₹500</Text>
                  </View>
                </View>
              </View>
              <View style={[styles.title, styles.closePosition]}>
                <Text style={styles.documentTypo1}>Price Range</Text>
                <Text style={[styles.document1, styles.documentTypo1]}>
                  Sort Options
                </Text>
              </View>
            </View>
            <View style={styles.sorts1}>
              <View style={styles.tabSpaceBlock}>
                <View
                  style={[styles.documentParent, styles.rangeFieldsFlexBox]}
                >
                  <Text style={styles.documentTypo}>By name</Text>
                  <Image
                    style={[styles.sortIcon1, styles.sortIconLayout]}
                    contentFit="cover"
                    source={require("../assets/sort-icon2.png")}
                  />
                  <Image
                    style={styles.checkmarkCircle2Icon}
                    contentFit="cover"
                    source={require("../assets/checkmarkcircle21.png")}
                  />
                </View>
                <Image
                  style={styles.seperatorIcon1}
                  contentFit="cover"
                  source={require("../assets/seperator4.png")}
                />
              </View>
              <View style={[styles.tab4, styles.tabSpaceBlock]}>
                <View
                  style={[styles.documentParent, styles.rangeFieldsFlexBox]}
                >
                  <View style={styles.documentGroup}>
                    <Text style={[styles.document3, styles.documentTypo]}>
                      By selling
                    </Text>
                    <Image
                      style={[styles.sortIcon2, styles.sortIconLayout]}
                      contentFit="cover"
                      source={require("../assets/sort-icon2.png")}
                    />
                  </View>
                  <Image
                    style={styles.checkmarkCircle2Icon}
                    contentFit="cover"
                    source={require("../assets/select-dot1.png")}
                  />
                </View>
                <Image
                  style={styles.seperatorIcon1}
                  contentFit="cover"
                  source={require("../assets/seperator4.png")}
                />
              </View>
              <View style={[styles.tab4, styles.tabSpaceBlock]}>
                <View
                  style={[styles.documentParent, styles.rangeFieldsFlexBox]}
                >
                  <View style={styles.documentGroup}>
                    <Text style={[styles.document3, styles.documentTypo]}>
                      By pricing
                    </Text>
                    <Image
                      style={[styles.sortIcon2, styles.sortIconLayout]}
                      contentFit="cover"
                      source={require("../assets/sort-icon2.png")}
                    />
                  </View>
                  <Image
                    style={styles.checkmarkCircle2Icon}
                    contentFit="cover"
                    source={require("../assets/select-dot1.png")}
                  />
                </View>
                <Image
                  style={styles.seperatorIcon1}
                  contentFit="cover"
                  source={require("../assets/seperator5.png")}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  closePosition: {
    top: 0,
    left: 0,
    position: "absolute",
  },
  wrapperLayout: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.fontWhite,
    flexDirection: "row",
  },
  rangeLayout: {
    width: 300,
    position: "absolute",
  },
  bulletIconLayout: {
    borderRadius: Border.br_xs,
    top: -7,
    width: 24,
    height: 24,
    position: "absolute",
  },
  rangeFieldsFlexBox: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  documentTypo1: {
    color: Color.inkDarkest,
    textTransform: "capitalize",
    fontSize: FontSize.normal1_size,
    textAlign: "left",
    fontFamily: FontFamily.bold,
    fontWeight: "700",
    letterSpacing: 0,
  },
  sortIconLayout: {
    width: 11,
    height: 20,
  },
  tabSpaceBlock: {
    paddingTop: Padding.p_base,
    width: 352,
    alignItems: "center",
    overflow: "hidden",
  },
  documentTypo: {
    width: 120,
    color: Color.inkDarkest,
    fontSize: FontSize.normal_size,
    fontFamily: FontFamily.normal,
    textAlign: "left",
    letterSpacing: 0,
  },
  nativeBottomSheetIndicato: {
    borderTopLeftRadius: Border.br_base,
    borderTopRightRadius: Border.br_base,
    height: 24,
    width: 359,
  },
  seperatorIcon: {
    marginLeft: -179.5,
    top: 36,
    height: 1,
    width: 359,
    left: "50%",
    position: "absolute",
  },
  sorts: {
    color: Color.colorBlack,
    textAlign: "center",
    fontFamily: FontFamily.bold,
    fontWeight: "700",
    letterSpacing: 0,
    fontSize: FontSize.bold1_size,
  },
  heading: {
    paddingHorizontal: Padding.p_62xl,
    paddingVertical: 0,
    alignItems: "center",
    left: 0,
    width: 359,
    justifyContent: "center",
    flexDirection: "row",
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
    justifyContent: "flex-end",
    paddingHorizontal: Padding.p_base,
    paddingVertical: 0,
    left: 0,
    width: 359,
    flexDirection: "row",
  },
  upper: {
    height: 36,
    width: 359,
  },
  selectCategory: {
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.bold,
    fontWeight: "700",
    letterSpacing: 0,
    fontSize: FontSize.bold1_size,
  },
  sortIcon: {
    width: 13,
    marginLeft: 155,
    height: 24,
  },
  selectCategoryParent: {
    width: 327,
    paddingVertical: 12,
    backgroundColor: Color.fontWhite,
    paddingHorizontal: Padding.p_base,
  },
  rangeSliderChild: {
    backgroundColor: Color.colorSaddlebrown_100,
    width: 158,
    height: 10,
    zIndex: 0,
    borderRadius: Border.br_8xs,
  },
  bulletIcon: {
    marginLeft: -12,
    zIndex: 1,
    left: "50%",
  },
  bulletIcon1: {
    left: -4,
    zIndex: 2,
  },
  text: {
    fontFamily: FontFamily.normal,
    fontSize: FontSize.normal1_size,
    textAlign: "left",
    color: Color.black,
    letterSpacing: 0,
  },
  wrapper: {
    borderStyle: "solid",
    borderColor: Color.theme12,
    borderWidth: 1,
    width: 121,
    height: 48,
    paddingHorizontal: Padding.p_xs,
    paddingVertical: Padding.p_3xs,
    backgroundColor: Color.fontWhite,
    alignItems: "center",
  },
  rangeFieldsChild: {
    borderRadius: Border.br_12xs,
    backgroundColor: Color.colorBlack,
    width: 8,
    height: 1,
  },
  text1: {
    fontSize: FontSize.normal_size,
    fontFamily: FontFamily.normal,
    textAlign: "left",
    color: Color.black,
    letterSpacing: 0,
  },
  rangeFields: {
    top: 27,
    zIndex: 3,
    width: 300,
    position: "absolute",
    left: 0,
  },
  rangeSlider: {
    marginLeft: -145,
    top: 42,
    borderRadius: Border.br_8xs,
    backgroundColor: Color.fontWhite,
    left: "50%",
  },
  document1: {
    marginTop: 122,
  },
  title: {
    left: 0,
  },
  set: {
    width: 326,
    height: 160,
    marginTop: 17,
  },
  sortIcon1: {
    height: 20,
  },
  checkmarkCircle2Icon: {
    width: 20,
    height: 20,
  },
  documentParent: {
    width: 354,
    paddingHorizontal: Padding.p_base,
    paddingVertical: 0,
  },
  seperatorIcon1: {
    width: 355,
    marginTop: 16,
    height: 1,
  },
  document3: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  sortIcon2: {
    top: 1,
    left: 206,
    height: 20,
    position: "absolute",
  },
  documentGroup: {
    width: 217,
    height: 22,
  },
  tab4: {
    marginTop: 8,
  },
  sorts1: {
    marginTop: 17,
    alignItems: "center",
    width: 359,
    justifyContent: "center",
  },
  frameParent: {
    marginTop: 24,
    alignItems: "center",
  },
  dialogBox: {
    marginTop: -165.5,
    marginLeft: -176.5,
    top: "50%",
    borderRadius: Border.br_base,
    backgroundColor: Color.theme13,
    paddingBottom: Padding.p_base,
    justifyContent: "center",
    flexDirection: "row",
    left: "50%",
    position: "absolute",
    overflow: "hidden",
  },
  sellerItemFilter: {
    borderRadius: Border.br_6xl,
    flex: 1,
    height: 804,
    overflow: "hidden",
    width: "100%",
  },
});

export default SellerItemFilter;
