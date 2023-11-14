import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

const SellerCartConfirm = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.sellerCartConfirm}>
      <View style={styles.upperParent}>
        <View style={styles.upper}>
          <Image
            style={styles.seperatorIcon}
            contentFit="cover"
            source={require("../assets/seperator2.png")}
          />
          <View style={[styles.heading, styles.closePosition]}>
            <Text style={[styles.cart, styles.cartTypo]}>Cart</Text>
          </View>
          <View style={[styles.close, styles.closeFlexBox]}>
            <Pressable
              style={styles.vectorLayout}
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
        <View style={styles.cardPayment1Parent}>
          <Image
            style={styles.cardPayment1}
            contentFit="cover"
            source={require("../assets/card-payment-1.png")}
          />
          <View
            style={[
              styles.transactionSummaryParent,
              styles.frameParentSpaceBlock,
            ]}
          >
            <Text style={[styles.transactionSummary, styles.invoiceFlexBox]}>
              Transaction Summary
            </Text>
            <View style={[styles.frameParent, styles.frameParentSpaceBlock]}>
              <View
                style={[
                  styles.totalNumberOfProductsParent,
                  styles.parentFlexBox,
                ]}
              >
                <Text style={[styles.totalNumberOf, styles.totalTypo]}>
                  Total Number of Products
                </Text>
                <Text style={[styles.text, styles.textFlexBox]}>100</Text>
              </View>
              <View style={[styles.totalAmountParent, styles.parentSpaceBlock]}>
                <Text style={[styles.totalAmount, styles.totalTypo]}>
                  Total Amount
                </Text>
                <View style={styles.parent}>
                  <Text style={[styles.text1, styles.textPosition]}>
                    1,00,00,000
                  </Text>
                  <Text style={[styles.text2, styles.textPosition]}>₹</Text>
                </View>
              </View>
              <View style={[styles.dateTimeParent, styles.parentSpaceBlock]}>
                <Text
                  style={[styles.dateTime, styles.totalTypo]}
                >{`Date & Time`}</Text>
                <View style={styles.amLayout}>
                  <Text style={[styles.am, styles.amLayout]}>
                    01/01/23, 00:00 AM
                  </Text>
                </View>
              </View>
              <View style={[styles.totalAmountParent, styles.parentSpaceBlock]}>
                <Text
                  style={[styles.customerSavingsDeduction, styles.text2Clr]}
                >
                  Customer Savings Deduction
                </Text>
                <View style={[styles.wrapper, styles.closeFlexBox]}>
                  <Text style={[styles.text3, styles.textFlexBox]}>-₹100</Text>
                </View>
              </View>
            </View>
            <View style={styles.frameParentSpaceBlock}>
              <View style={styles.invoiceWrapper}>
                <Text
                  style={[styles.invoice, styles.invoiceFlexBox]}
                >{`Invoice `}</Text>
              </View>
              <View style={[styles.printParent, styles.parentSpaceBlock]}>
                <View style={styles.printFlexBox}>
                  <Image
                    style={[styles.shareIcon, styles.vectorLayout]}
                    contentFit="cover"
                    source={require("../assets/share1.png")}
                  />
                </View>
                <View style={[styles.print1, styles.printFlexBox]}>
                  <Image
                    style={styles.vectorLayout}
                    contentFit="cover"
                    source={require("../assets/layer-13.png")}
                  />
                </View>
                <View style={[styles.print1, styles.printFlexBox]}>
                  <Image
                    style={styles.vectorLayout}
                    contentFit="cover"
                    source={require("../assets/layer-131.png")}
                  />
                </View>
              </View>
            </View>
          </View>
          <Pressable
            style={styles.cancelButton}
            onPress={() =>
              navigation.navigate("BottomTabsRoot", {
                screen: "SellerDaskboard",
              })
            }
          >
            <Text style={[styles.cancel, styles.textPosition]}>
              Back to Home Page
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  closePosition: {
    paddingVertical: 0,
    left: 0,
    top: 0,
    width: 359,
    position: "absolute",
  },
  cartTypo: {
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.bold,
    fontWeight: "700",
    fontSize: FontSize.bold1_size,
  },
  closeFlexBox: {
    justifyContent: "flex-end",
    flexDirection: "row",
  },
  frameParentSpaceBlock: {
    marginTop: 16,
    alignItems: "center",
  },
  invoiceFlexBox: {
    textAlign: "left",
    color: Color.colorBlack,
    letterSpacing: 0,
  },
  parentFlexBox: {
    justifyContent: "space-between",
    alignItems: "center",
  },
  totalTypo: {
    height: 22,
    color: Color.black,
    fontFamily: FontFamily.normal,
    textAlign: "left",
    fontSize: FontSize.normal_size,
    letterSpacing: 0,
  },
  textFlexBox: {
    textAlign: "right",
    color: Color.colorDarkslategray,
  },
  parentSpaceBlock: {
    marginTop: 8,
    flexDirection: "row",
  },
  textPosition: {
    top: "50%",
    letterSpacing: 0,
    position: "absolute",
  },
  amLayout: {
    width: 123,
    height: 19,
  },
  text2Clr: {
    color: Color.black,
    textAlign: "left",
  },
  vectorLayout: {
    height: 24,
    width: 24,
  },
  printFlexBox: {
    padding: Padding.p_5xs,
    backgroundColor: Color.theme12,
    borderRadius: Border.br_5xs,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
  },
  seperatorIcon: {
    marginLeft: -179.5,
    top: 36,
    height: 1,
    left: "50%",
    width: 359,
    position: "absolute",
  },
  cart: {
    letterSpacing: 0,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.bold,
    fontWeight: "700",
    fontSize: FontSize.bold1_size,
  },
  heading: {
    paddingHorizontal: Padding.p_62xl,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  close: {
    paddingHorizontal: Padding.p_base,
    paddingVertical: 0,
    left: 0,
    top: 0,
    width: 359,
    position: "absolute",
  },
  upper: {
    height: 36,
    width: 359,
  },
  cardPayment1: {
    width: 205,
    height: 200,
  },
  transactionSummary: {
    textTransform: "capitalize",
    fontSize: FontSize.normal_size,
    textAlign: "left",
    fontFamily: FontFamily.bold,
    fontWeight: "700",
  },
  totalNumberOf: {
    width: 189,
  },
  text: {
    width: 36,
    height: 19,
    fontSize: FontSize.normal1_size,
    textAlign: "right",
    fontFamily: FontFamily.normal,
    letterSpacing: 0,
  },
  totalNumberOfProductsParent: {
    width: 311,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  totalAmount: {
    width: 100,
  },
  text1: {
    left: 9,
    width: 73,
    marginTop: -9.4,
    top: "50%",
    fontSize: FontSize.normal1_size,
    fontFamily: FontFamily.normal,
    height: 19,
    color: Color.colorDarkslategray,
    textAlign: "left",
  },
  text2: {
    width: 9,
    marginTop: -9.4,
    top: "50%",
    fontSize: FontSize.normal1_size,
    fontFamily: FontFamily.normal,
    height: 19,
    color: Color.black,
    textAlign: "left",
    left: 0,
  },
  parent: {
    width: 82,
    height: 19,
  },
  totalAmountParent: {
    justifyContent: "space-between",
    alignItems: "center",
    width: 311,
  },
  dateTime: {
    width: 90,
  },
  am: {
    top: "50%",
    letterSpacing: 0,
    position: "absolute",
    marginTop: -9.4,
    fontSize: FontSize.normal1_size,
    fontFamily: FontFamily.normal,
    textAlign: "right",
    color: Color.colorDarkslategray,
    left: 0,
  },
  dateTimeParent: {
    width: 312,
    justifyContent: "space-between",
    alignItems: "center",
  },
  customerSavingsDeduction: {
    width: 210,
    height: 21,
    fontFamily: FontFamily.normal,
    color: Color.black,
    fontSize: FontSize.normal_size,
    letterSpacing: 0,
  },
  text3: {
    fontSize: FontSize.normal1_size,
    textAlign: "right",
    fontFamily: FontFamily.normal,
    letterSpacing: 0,
  },
  wrapper: {
    alignItems: "center",
  },
  frameParent: {
    height: 110,
    justifyContent: "center",
  },
  invoice: {
    left: 8,
    fontSize: FontSize.normal2_size,
    fontWeight: "600",
    fontFamily: FontFamily.openSansSemiBold,
    textAlign: "left",
    top: 0,
    position: "absolute",
  },
  invoiceWrapper: {
    width: 302,
    height: 14,
  },
  shareIcon: {
    overflow: "hidden",
  },
  print1: {
    marginLeft: 56,
  },
  printParent: {
    alignItems: "flex-end",
    justifyContent: "center",
  },
  transactionSummaryParent: {
    borderRadius: 6,
    backgroundColor: Color.fontWhite,
    width: 327,
    padding: Padding.p_base,
  },
  cancel: {
    marginTop: -12.5,
    marginLeft: -104.5,
    width: 208,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.bold,
    fontWeight: "700",
    fontSize: FontSize.bold1_size,
    top: "50%",
    left: "50%",
  },
  cancelButton: {
    backgroundColor: Color.main,
    width: 343,
    height: 57,
    borderRadius: Border.br_5xs,
    marginTop: 16,
    overflow: "hidden",
  },
  cardPayment1Parent: {
    marginTop: 24,
    alignItems: "center",
  },
  upperParent: {
    top: 133,
    left: 12,
    borderRadius: Border.br_base,
    backgroundColor: Color.theme13,
    paddingHorizontal: 0,
    paddingVertical: Padding.p_base,
    alignItems: "center",
    position: "absolute",
    overflow: "hidden",
  },
  sellerCartConfirm: {
    borderRadius: Border.br_6xl,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default SellerCartConfirm;
