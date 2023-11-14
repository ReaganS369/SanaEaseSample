import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize, Padding } from "../GlobalStyles";

const SellerCartConfirm1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.sellerCartConfirm}>
      <View style={styles.completeOrder}>
        <View style={[styles.actions, styles.actionsBg]}>
          <View style={styles.upepr}>
            <Text style={styles.completeOrder1}>Complete Order?</Text>
            <Text style={[styles.areYouSure, styles.cancelTypo1]}>
              Are you sure you want to fulfill this order?
            </Text>
          </View>
          <Pressable
            style={[styles.buttn, styles.buttnFlexBox]}
            onPress={() => navigation.navigate("SellerCartConfirm")}
          >
            <Text style={[styles.confirm, styles.cancelTypo]}>Confirm</Text>
          </Pressable>
        </View>
        <Pressable
          style={[styles.cancelButton, styles.buttnFlexBox]}
          onPress={() => navigation.navigate("SellerCart")}
        >
          <Text style={[styles.cancel, styles.cancelTypo]}>Cancel</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  actionsBg: {
    backgroundColor: Color.theme13,
    borderRadius: Border.br_base,
    overflow: "hidden",
  },
  cancelTypo1: {
    fontFamily: FontFamily.normal,
    color: Color.colorBlack,
  },
  buttnFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  cancelTypo: {
    fontSize: FontSize.bold1_size,
    letterSpacing: 0,
  },
  completeOrder1: {
    fontSize: FontSize.bold_size,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.bold,
    fontWeight: "700",
    letterSpacing: 0,
  },
  areYouSure: {
    fontSize: FontSize.normal_size,
    width: 293,
    marginTop: 8,
    textAlign: "center",
    letterSpacing: 0,
    fontFamily: FontFamily.normal,
  },
  upepr: {
    alignItems: "center",
  },
  confirm: {
    color: Color.fontWhite,
    textAlign: "center",
    fontFamily: FontFamily.bold,
    fontWeight: "700",
    fontSize: FontSize.bold1_size,
  },
  buttn: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorSaddlebrown_100,
    width: 343,
    justifyContent: "center",
    paddingHorizontal: 66,
    paddingVertical: Padding.p_smi,
    marginTop: 10,
  },
  actions: {
    paddingHorizontal: Padding.p_5xs,
    paddingTop: Padding.p_base,
    paddingBottom: Padding.p_5xs,
    alignItems: "center",
  },
  cancel: {
    marginTop: -12.5,
    width: "15.21%",
    top: "50%",
    left: "41.42%",
    textAlign: "left",
    zIndex: 0,
    fontFamily: FontFamily.normal,
    color: Color.colorBlack,
    position: "absolute",
  },
  cancelButton: {
    width: 359,
    justifyContent: "space-between",
    padding: Padding.p_3xs,
    marginTop: 8,
    backgroundColor: Color.theme13,
    borderRadius: Border.br_base,
    overflow: "hidden",
  },
  completeOrder: {
    marginLeft: -177.5,
    top: 478,
    left: "50%",
    position: "absolute",
  },
  sellerCartConfirm: {
    borderRadius: Border.br_6xl,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default SellerCartConfirm1;
