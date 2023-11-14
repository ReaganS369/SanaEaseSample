import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Border, Padding } from "../GlobalStyles";

const SellerAdd = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.sellerAdd}>
      <View style={styles.dialog}>
        <View style={styles.options}>
          <Image
            style={styles.nativeBottomSheetIndicato}
            contentFit="cover"
            source={require("../assets/native--bottom-sheet-indicator.png")}
          />
          <View style={styles.upper}>
            <Image
              style={styles.seperatorIcon}
              contentFit="cover"
              source={require("../assets/seperator2.png")}
            />
            <View style={[styles.heading, styles.closePosition]}>
              <Text style={[styles.switchAccount, styles.switchTypo]}>
                Switch Account
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
          <Pressable
            style={[styles.customer, styles.headingFlexBox]}
            onPress={() => navigation.navigate("CustomerDaskboard1")}
          >
            <Text style={[styles.switchToCustomer, styles.switchTypo]}>
              Switch to Customer
            </Text>
            <Image
              style={styles.seperatorIcon1}
              contentFit="cover"
              source={require("../assets/seperator6.png")}
            />
          </Pressable>
        </View>
        <Pressable
          style={styles.cancelButton}
          onPress={() => navigation.navigate("SellerDaskboardItemsUnhide1")}
        >
          <View style={[styles.rectangleCopy11, styles.rectanglePosition]} />
          <View style={[styles.rectangleCopy12, styles.rectanglePosition]} />
          <Text style={[styles.cancel, styles.cancelClr]}>Cancel</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  closePosition: {
    paddingVertical: 0,
    flexDirection: "row",
    left: 0,
    top: 0,
    width: 359,
    position: "absolute",
  },
  switchTypo: {
    textAlign: "center",
    fontFamily: FontFamily.bold,
    fontWeight: "700",
    letterSpacing: 0,
  },
  headingFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  rectanglePosition: {
    left: "0%",
    right: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  cancelClr: {
    color: Color.colorBlack,
    fontSize: FontSize.bold1_size,
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
    left: "50%",
    height: 1,
    width: 359,
    position: "absolute",
  },
  switchAccount: {
    color: Color.colorBlack,
    fontSize: FontSize.bold1_size,
    textAlign: "center",
    fontFamily: FontFamily.bold,
    fontWeight: "700",
  },
  heading: {
    paddingHorizontal: Padding.p_62xl,
    justifyContent: "center",
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
    justifyContent: "flex-end",
    paddingHorizontal: Padding.p_base,
  },
  upper: {
    height: 36,
    width: 359,
  },
  switchToCustomer: {
    fontSize: FontSize.bold_size,
    color: Color.black,
  },
  seperatorIcon1: {
    width: 356,
    marginTop: 15,
    height: 1,
  },
  customer: {
    paddingTop: Padding.p_mini,
    width: 359,
  },
  options: {
    borderRadius: Border.br_base,
    backgroundColor: Color.theme13,
    overflow: "hidden",
  },
  rectangleCopy11: {
    height: "98.25%",
    bottom: "1.75%",
    borderRadius: Border.br_3xs,
    backgroundColor: Color.theme13,
  },
  rectangleCopy12: {
    bottom: "0%",
    borderRadius: Border.br_sm,
    backgroundColor: Color.main,
    display: "none",
    height: "100%",
  },
  cancel: {
    marginTop: -12.5,
    width: "15.21%",
    top: "50%",
    left: "41.42%",
    fontFamily: FontFamily.normal,
    textAlign: "left",
    letterSpacing: 0,
    color: Color.colorBlack,
    fontSize: FontSize.bold1_size,
    position: "absolute",
  },
  cancelButton: {
    height: 57,
    marginTop: 8,
    width: 359,
    overflow: "hidden",
  },
  dialog: {
    top: 520,
    left: 8,
    position: "absolute",
  },
  sellerAdd: {
    borderRadius: Border.br_6xl,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default SellerAdd;
