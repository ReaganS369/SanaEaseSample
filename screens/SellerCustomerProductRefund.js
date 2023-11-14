import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";

const SellerCustomerProductRefund = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.sellerCustomerProductRefund}>
      <View style={styles.upperParent}>
        <View style={styles.upper}>
          <Image
            style={styles.seperatorIcon}
            contentFit="cover"
            source={require("../assets/seperator1.png")}
          />
          <View style={styles.heading}>
            <Text style={[styles.cart, styles.cartTypo]}>Cart</Text>
          </View>
          <View style={styles.close}>
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
        <View style={styles.bofy}>
          <View style={styles.productSelected}>
            <View style={styles.selectedCustomer}>
              <View style={styles.custoemr}>
                <Text style={[styles.customerName, styles.cartTypo]}>
                  Customer Name
                </Text>
              </View>
            </View>
            <View style={styles.products}>
              <View style={styles.heading1}>
                <View style={styles.pleft}>
                  <Text style={[styles.products1, styles.products1Typo]}>
                    Products
                  </Text>
                  <Image
                    style={styles.sortIcon}
                    contentFit="cover"
                    source={require("../assets/sort-icon7.png")}
                  />
                </View>
                <View style={styles.right}>
                  <Text style={[styles.products1, styles.products1Typo]}>
                    Quantity
                  </Text>
                  <Text style={[styles.finalPrice, styles.products1Typo]}>
                    Final Price
                  </Text>
                </View>
              </View>
              <View style={[styles.selectedProducts, styles.buttonsLayout]}>
                <View style={styles.productBorder}>
                  <View style={styles.selectDotParent}>
                    <Image
                      style={styles.selectDotIcon}
                      contentFit="cover"
                      source={require("../assets/select-dot8.png")}
                    />
                    <View style={styles.productNameWrapper}>
                      <Text
                        style={[styles.productName, styles.productNameTypo]}
                      >{`Product Name `}</Text>
                    </View>
                  </View>
                  <View style={styles.selectDotParent}>
                    <View style={styles.productSelected}>
                      <Image
                        style={styles.vectorIconLayout}
                        contentFit="cover"
                        source={require("../assets/vector38.png")}
                      />
                      <View style={styles.wrapper}>
                        <Text style={styles.text}>9</Text>
                      </View>
                      <Image
                        style={[styles.vectorIcon1, styles.vectorIconLayout]}
                        contentFit="cover"
                        source={require("../assets/vector39.png")}
                      />
                    </View>
                    <View
                      style={[styles.frameWrapper, styles.frameWrapperBorder]}
                    >
                      <View style={styles.parent}>
                        <Text style={[styles.text1, styles.textTypo]}>₹</Text>
                        <Text style={[styles.text2, styles.textTypo]}>
                          1,00,00,000
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
                <View style={[styles.product1, styles.productBorder]}>
                  <View style={styles.selectDotParent}>
                    <Image
                      style={styles.selectDotIcon}
                      contentFit="cover"
                      source={require("../assets/select-dot9.png")}
                    />
                    <View style={styles.productNameWrapper}>
                      <Text
                        style={[styles.productName, styles.productNameTypo]}
                      >{`Product Name `}</Text>
                    </View>
                  </View>
                  <View style={styles.selectDotParent}>
                    <View style={styles.productSelected}>
                      <Image
                        style={styles.vectorIconLayout}
                        contentFit="cover"
                        source={require("../assets/vector40.png")}
                      />
                      <View style={styles.wrapper}>
                        <Text style={styles.text}>9</Text>
                      </View>
                      <Image
                        style={[styles.vectorIcon1, styles.vectorIconLayout]}
                        contentFit="cover"
                        source={require("../assets/vector41.png")}
                      />
                    </View>
                    <View
                      style={[styles.frameWrapper, styles.frameWrapperBorder]}
                    >
                      <View style={styles.parent}>
                        <Text style={[styles.text1, styles.textTypo]}>₹</Text>
                        <Text style={[styles.text2, styles.textTypo]}>
                          1,00,00,000
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
                <View style={[styles.product1, styles.productBorder]}>
                  <View style={styles.selectDotParent}>
                    <Image
                      style={styles.selectDotIcon}
                      contentFit="cover"
                      source={require("../assets/select-dot10.png")}
                    />
                    <View style={styles.productNameWrapper}>
                      <Text
                        style={[styles.productName, styles.productNameTypo]}
                      >{`Product Name `}</Text>
                    </View>
                  </View>
                  <View style={styles.selectDotParent}>
                    <View style={styles.productSelected}>
                      <Image
                        style={styles.vectorIconLayout}
                        contentFit="cover"
                        source={require("../assets/vector42.png")}
                      />
                      <View style={styles.wrapper}>
                        <Text style={styles.text}>9</Text>
                      </View>
                      <Image
                        style={[styles.vectorIcon1, styles.vectorIconLayout]}
                        contentFit="cover"
                        source={require("../assets/vector43.png")}
                      />
                    </View>
                    <View
                      style={[styles.frameWrapper, styles.frameWrapperBorder]}
                    >
                      <View style={styles.parent}>
                        <Text style={[styles.text1, styles.textTypo]}>₹</Text>
                        <Text style={[styles.text2, styles.textTypo]}>
                          1,00,00,000
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
                <View style={[styles.product1, styles.productBorder]}>
                  <View style={styles.selectDotParent}>
                    <Image
                      style={styles.selectDotIcon}
                      contentFit="cover"
                      source={require("../assets/select-dot11.png")}
                    />
                    <View style={styles.productNameWrapper}>
                      <Text
                        style={[styles.productName, styles.productNameTypo]}
                      >{`Product Name `}</Text>
                    </View>
                  </View>
                  <View style={styles.selectDotParent}>
                    <View style={styles.productSelected}>
                      <Image
                        style={styles.vectorIconLayout}
                        contentFit="cover"
                        source={require("../assets/vector44.png")}
                      />
                      <View style={styles.wrapper}>
                        <Text style={styles.text}>9</Text>
                      </View>
                      <Image
                        style={[styles.vectorIcon1, styles.vectorIconLayout]}
                        contentFit="cover"
                        source={require("../assets/vector45.png")}
                      />
                    </View>
                    <View
                      style={[styles.frameWrapper, styles.frameWrapperBorder]}
                    >
                      <View style={styles.parent}>
                        <Text style={[styles.text1, styles.textTypo]}>₹</Text>
                        <Text style={[styles.text2, styles.textTypo]}>
                          1,00,00,000
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
                <View style={[styles.product1, styles.productBorder]}>
                  <View style={styles.selectDotParent}>
                    <Image
                      style={styles.selectDotIcon}
                      contentFit="cover"
                      source={require("../assets/select-dot12.png")}
                    />
                    <View style={styles.productNameWrapper}>
                      <Text
                        style={[styles.productName, styles.productNameTypo]}
                      >{`Product Name `}</Text>
                    </View>
                  </View>
                  <View style={styles.selectDotParent}>
                    <View style={styles.productSelected}>
                      <Image
                        style={styles.vectorIconLayout}
                        contentFit="cover"
                        source={require("../assets/vector46.png")}
                      />
                      <View style={styles.wrapper}>
                        <Text style={styles.text}>9</Text>
                      </View>
                      <Image
                        style={[styles.vectorIcon1, styles.vectorIconLayout]}
                        contentFit="cover"
                        source={require("../assets/vector47.png")}
                      />
                    </View>
                    <View
                      style={[styles.frameWrapper, styles.frameWrapperBorder]}
                    >
                      <View style={styles.parent}>
                        <Text style={[styles.text1, styles.textTypo]}>₹</Text>
                        <Text style={[styles.text2, styles.textTypo]}>
                          1,00,00,000
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.buttonsFlexBox}>
            <View style={styles.parent}>
              <Text style={[styles.totalNumberOf, styles.productNameTypo]}>
                Total Number of Products
              </Text>
              <View style={[styles.groupWrapper, styles.groupBorder]}>
                <View style={styles.groupView}>
                  <Text style={[styles.text15, styles.textPosition]}>
                    1,000
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.totalAmountParent}>
              <Text style={[styles.totalNumberOf, styles.productNameTypo]}>
                Total Amount
              </Text>
              <View style={[styles.groupContainer, styles.frameWrapperBorder]}>
                <View style={styles.parent4}>
                  <Text style={[styles.text16, styles.textPosition]}>
                    1,00,00,000
                  </Text>
                  <Text style={[styles.text17, styles.textPosition]}>₹</Text>
                </View>
              </View>
            </View>
            <View style={styles.dateTimeParent}>
              <Text
                style={[styles.totalNumberOf, styles.productNameTypo]}
              >{`Date & Time`}</Text>
              <View style={[styles.groupFrame, styles.groupBorder]}>
                <View style={styles.amWrapper}>
                  <Text style={[styles.am, styles.textPosition]}>
                    01/01/23, 00:00 AM
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <Pressable
            style={[styles.buttons, styles.buttonsFlexBox]}
            onPress={() => navigation.navigate("SellerCartConfirm1")}
          >
            <Text style={[styles.makeChanges, styles.cartTypo]}>
              Make Changes
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cartTypo: {
    textAlign: "center",
    fontFamily: FontFamily.bold,
    fontWeight: "700",
    letterSpacing: 0,
    fontSize: FontSize.bold1_size,
  },
  products1Typo: {
    fontFamily: FontFamily.normal,
    textAlign: "left",
    color: Color.black,
    fontSize: FontSize.normal2_size,
    letterSpacing: 0,
  },
  buttonsLayout: {
    width: 335,
    borderRadius: Border.br_base,
    overflow: "hidden",
  },
  productNameTypo: {
    fontSize: FontSize.normal_size,
    textAlign: "left",
    fontFamily: FontFamily.normal,
    letterSpacing: 0,
  },
  vectorIconLayout: {
    height: 8,
    width: 12,
  },
  frameWrapperBorder: {
    borderColor: Color.black,
    borderWidth: 1,
    borderStyle: "solid",
  },
  textTypo: {
    fontSize: FontSize.normal1_size,
    textAlign: "left",
    fontFamily: FontFamily.normal,
    letterSpacing: 0,
  },
  productBorder: {
    borderWidth: 1,
    borderColor: Color.theme12,
    backgroundColor: Color.fontWhite,
    width: 335,
    paddingVertical: Padding.p_9xs,
    justifyContent: "space-between",
    borderStyle: "solid",
    paddingHorizontal: Padding.p_base,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: Border.br_base,
    overflow: "hidden",
  },
  groupBorder: {
    paddingVertical: Padding.p_11xs,
    alignItems: "flex-end",
    paddingHorizontal: Padding.p_9xs,
    borderColor: Color.black,
    borderRadius: Border.br_9xs,
    borderWidth: 1,
    borderStyle: "solid",
    justifyContent: "center",
  },
  textPosition: {
    marginTop: -9.5,
    fontSize: FontSize.normal1_size,
    fontFamily: FontFamily.normal,
    letterSpacing: 0,
    top: "50%",
    position: "absolute",
  },
  buttonsFlexBox: {
    marginTop: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  seperatorIcon: {
    marginLeft: -179.5,
    top: 36,
    left: "50%",
    height: 1,
    width: 359,
    position: "absolute",
  },
  cart: {
    color: Color.colorBlack,
  },
  heading: {
    paddingHorizontal: Padding.p_62xl,
    paddingVertical: 0,
    top: 0,
    justifyContent: "center",
    flexDirection: "row",
    left: 0,
    width: 359,
    alignItems: "center",
    position: "absolute",
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
    paddingVertical: 0,
    flexDirection: "row",
    left: 0,
    top: 0,
    width: 359,
    position: "absolute",
  },
  upper: {
    height: 36,
    width: 359,
  },
  customerName: {
    display: "flex",
    width: 165,
    height: 30,
    color: Color.colorDarkslategray,
    justifyContent: "center",
    fontFamily: FontFamily.bold,
    fontWeight: "700",
    letterSpacing: 0,
    fontSize: FontSize.bold1_size,
    alignItems: "center",
  },
  custoemr: {
    width: 343,
    padding: Padding.p_5xs,
    borderRadius: Border.br_5xs,
    alignItems: "center",
    backgroundColor: Color.theme13,
    overflow: "hidden",
  },
  selectedCustomer: {
    backgroundColor: Color.theme12,
    paddingVertical: Padding.p_lgi,
    width: 359,
    paddingHorizontal: 0,
    alignItems: "center",
  },
  products1: {
    textAlign: "left",
    color: Color.black,
  },
  sortIcon: {
    width: 7,
    height: 12,
    marginLeft: 8,
  },
  pleft: {
    width: 92,
    flexDirection: "row",
    alignItems: "center",
  },
  finalPrice: {
    marginLeft: 56,
    textAlign: "left",
    color: Color.black,
  },
  right: {
    width: 177,
    justifyContent: "flex-end",
    flexDirection: "row",
    alignItems: "center",
  },
  heading1: {
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: Padding.p_9xs,
    justifyContent: "space-between",
    flexDirection: "row",
    width: 359,
    alignItems: "center",
    borderRadius: Border.br_base,
  },
  selectDotIcon: {
    width: 20,
    height: 20,
  },
  productName: {
    width: 115,
    color: Color.colorBlack,
  },
  productNameWrapper: {
    marginLeft: 8,
  },
  selectDotParent: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    fontWeight: "600",
    fontFamily: FontFamily.openSansSemiBold,
    textAlign: "left",
    color: Color.black,
    fontSize: FontSize.normal2_size,
    letterSpacing: 0,
  },
  wrapper: {
    marginTop: 2,
    paddingHorizontal: Padding.p_9xs,
    borderColor: Color.black,
    borderRadius: Border.br_9xs,
    borderWidth: 1,
    borderStyle: "solid",
    paddingVertical: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  vectorIcon1: {
    marginTop: 2,
  },
  productSelected: {
    alignItems: "center",
  },
  text1: {
    color: Color.black,
  },
  text2: {
    color: Color.colorDarkslategray,
  },
  parent: {
    flexDirection: "row",
  },
  frameWrapper: {
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: Padding.p_6xs_5,
    marginLeft: 16,
    borderColor: Color.black,
    backgroundColor: Color.fontWhite,
    borderRadius: Border.br_5xs,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  product1: {
    marginTop: 8,
  },
  selectedProducts: {
    height: 250,
    marginTop: 8,
    alignItems: "center",
  },
  products: {
    borderColor: Color.colorSaddlebrown_100,
    borderWidth: 2,
    paddingVertical: Padding.p_5xs,
    marginTop: -11,
    borderStyle: "solid",
    width: 359,
    paddingHorizontal: 0,
    alignItems: "center",
    backgroundColor: Color.theme13,
    borderRadius: Border.br_base,
    overflow: "hidden",
  },
  totalNumberOf: {
    color: Color.black,
  },
  text15: {
    textAlign: "left",
    color: Color.colorDarkslategray,
    left: 0,
    marginTop: -9.5,
  },
  groupView: {
    width: 35,
    height: 19,
  },
  groupWrapper: {
    marginLeft: 76,
    backgroundColor: Color.theme13,
  },
  text16: {
    left: 9,
    textAlign: "left",
    color: Color.colorDarkslategray,
  },
  text17: {
    textAlign: "left",
    color: Color.black,
    left: 0,
    marginTop: -9.5,
  },
  parent4: {
    marginTop: -9,
    left: 4,
    width: 80,
    height: 19,
    top: "50%",
    position: "absolute",
  },
  groupContainer: {
    width: 88,
    marginLeft: 118,
    borderRadius: Border.br_9xs,
    borderColor: Color.black,
    height: 24,
    backgroundColor: Color.theme13,
  },
  totalAmountParent: {
    marginTop: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  am: {
    textAlign: "right",
    color: Color.colorDarkslategray,
    left: 0,
    marginTop: -9.5,
  },
  amWrapper: {
    width: 120,
    height: 19,
  },
  groupFrame: {
    marginLeft: 87,
  },
  dateTimeParent: {
    marginTop: 8,
    flexDirection: "row",
  },
  makeChanges: {
    color: Color.fontWhite,
  },
  buttons: {
    backgroundColor: Color.colorSaddlebrown_100,
    paddingVertical: Padding.p_base_5,
    width: 335,
    borderRadius: Border.br_base,
    overflow: "hidden",
    flexDirection: "row",
    paddingHorizontal: 0,
  },
  bofy: {
    marginTop: 24,
    alignItems: "center",
  },
  upperParent: {
    marginTop: -276.5,
    left: 12,
    paddingVertical: Padding.p_base,
    paddingHorizontal: 0,
    alignItems: "center",
    backgroundColor: Color.theme13,
    borderRadius: Border.br_base,
    top: "50%",
    position: "absolute",
    overflow: "hidden",
  },
  sellerCustomerProductRefund: {
    borderRadius: Border.br_6xl,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default SellerCustomerProductRefund;
