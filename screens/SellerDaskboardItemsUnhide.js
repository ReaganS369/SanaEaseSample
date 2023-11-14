import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Padding, FontSize, Color, FontFamily, Border } from "../GlobalStyles";

const SellerDaskboardItemsUnhide = () => {
  return (
    <View style={styles.sellerDaskboardItemsUnhide}>
      <View style={styles.frameParent}>
        <View style={[styles.pricePerItemParent, styles.parentFlexBox]}>
          <Text style={[styles.pricePerItem, styles.productNameTypo]}>
            Price per item
          </Text>
          <View style={styles.parent}>
            <Text style={[styles.text, styles.textTypo]}>₹</Text>
            <Text style={[styles.text1, styles.textTypo]}>100,000</Text>
          </View>
        </View>
        <View style={[styles.numberOfItemsParent, styles.parentSpaceBlock]}>
          <Text style={[styles.pricePerItem, styles.productNameTypo]}>
            Number of items
          </Text>
          <View style={styles.parent}>
            <Text style={[styles.text1, styles.textTypo]}>100</Text>
          </View>
        </View>
        <View style={[styles.rectangleParent, styles.parentSpaceBlock]}>
          <View style={styles.frameChild} />
          <View style={styles.left}>
            <Image
              style={styles.selectDotIcon}
              contentFit="cover"
              source={require("../assets/property-1default1.png")}
            />
            <View style={styles.productNameParent}>
              <Text
                style={[styles.productName, styles.productNameTypo]}
              >{`Product Name `}</Text>
              <Text style={[styles.text3, styles.text3Typo]}>
                ₹ 1000 - ₹ 1000
              </Text>
            </View>
          </View>
          <View style={styles.right}>
            <View style={styles.vectorParent}>
              <Image
                style={styles.vectorIconLayout}
                contentFit="cover"
                source={require("../assets/vector48.png")}
              />
              <View style={[styles.container, styles.containerFlexBox]}>
                <Text style={[styles.text4, styles.textTypo]}>9</Text>
              </View>
              <Image
                style={[styles.vectorIcon1, styles.vectorIconLayout]}
                contentFit="cover"
                source={require("../assets/vector36.png")}
              />
            </View>
            <View style={[styles.rightInner, styles.containerFlexBox]}>
              <View style={styles.group}>
                <Text style={[styles.text, styles.textTypo]}>₹</Text>
                <Text style={[styles.text1, styles.textTypo]}>1,00,00,000</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.slideForQuantityWrapper, styles.parentSpaceBlock]}>
          <Text style={[styles.slideForQuantity, styles.text3Typo]}>
            SLIDE FOR QUANTITY
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parentFlexBox: {
    paddingVertical: Padding.p_9xs,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  productNameTypo: {
    textAlign: "left",
    letterSpacing: 0,
    fontSize: FontSize.normal_size,
    color: Color.colorBlack,
    fontFamily: FontFamily.normal,
  },
  textTypo: {
    fontSize: FontSize.normal1_size,
    textAlign: "left",
    letterSpacing: 0,
  },
  parentSpaceBlock: {
    marginTop: 8,
    borderRadius: Border.br_5xs,
  },
  text3Typo: {
    fontSize: FontSize.normal2_size,
    letterSpacing: 0,
  },
  containerFlexBox: {
    justifyContent: "center",
    paddingHorizontal: Padding.p_5xs,
    backgroundColor: Color.fontWhite,
  },
  vectorIconLayout: {
    height: 12,
    width: 17,
  },
  pricePerItem: {
    width: 200,
  },
  text: {
    color: Color.black,
    fontFamily: FontFamily.normal,
  },
  text1: {
    color: Color.colorDarkslategray,
    fontFamily: FontFamily.normal,
  },
  parent: {
    borderColor: Color.theme12,
    width: 80,
    justifyContent: "flex-end",
    paddingVertical: Padding.p_5xs_5,
    paddingHorizontal: Padding.p_5xs,
    backgroundColor: Color.fontWhite,
    borderWidth: 1,
    borderStyle: "solid",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: Border.br_5xs,
  },
  pricePerItemParent: {
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_9xs,
    justifyContent: "space-between",
    width: 359,
    backgroundColor: Color.theme13,
    borderRadius: Border.br_5xs,
  },
  numberOfItemsParent: {
    paddingVertical: Padding.p_9xs,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: Padding.p_base,
    width: 359,
    backgroundColor: Color.theme13,
  },
  frameChild: {
    top: 0,
    left: 0,
    backgroundColor: Color.main,
    width: 114,
    height: 56,
    position: "absolute",
  },
  selectDotIcon: {
    width: 20,
    height: 20,
  },
  productName: {
    width: 115,
  },
  text3: {
    textAlign: "right",
    marginTop: 4,
    color: Color.black,
    fontFamily: FontFamily.normal,
  },
  productNameParent: {
    marginLeft: 4,
  },
  left: {
    top: 7,
    left: 16,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  text4: {
    textTransform: "capitalize",
    fontWeight: "700",
    fontFamily: FontFamily.bold,
    color: Color.black,
  },
  container: {
    borderRadius: Border.br_9xs,
    paddingVertical: Padding.p_11xs,
    marginTop: 2,
    alignItems: "center",
  },
  vectorIcon1: {
    marginTop: 2,
  },
  vectorParent: {
    alignItems: "center",
  },
  group: {
    flexDirection: "row",
  },
  rightInner: {
    borderColor: Color.black,
    alignItems: "flex-end",
    paddingVertical: Padding.p_xs,
    marginLeft: 16,
    borderWidth: 1,
    borderStyle: "solid",
    justifyContent: "center",
    borderRadius: Border.br_5xs,
    overflow: "hidden",
  },
  right: {
    top: 3,
    left: 202,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  rectangleParent: {
    height: 56,
    width: 359,
    backgroundColor: Color.theme13,
    marginTop: 8,
    overflow: "hidden",
  },
  slideForQuantity: {
    fontWeight: "600",
    fontFamily: FontFamily.openSansSemiBold,
    textAlign: "center",
    color: Color.colorBlack,
    fontSize: FontSize.normal2_size,
  },
  slideForQuantityWrapper: {
    backgroundColor: Color.theme12,
    width: 358,
    paddingHorizontal: 45,
    paddingVertical: Padding.p_9xs,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 8,
    overflow: "hidden",
  },
  frameParent: {
    marginLeft: -179.5,
    top: 334,
    left: "50%",
    position: "absolute",
  },
  sellerDaskboardItemsUnhide: {
    borderRadius: Border.br_6xl,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default SellerDaskboardItemsUnhide;
