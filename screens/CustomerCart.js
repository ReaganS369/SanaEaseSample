import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Padding, Border } from "../GlobalStyles";

const CustomerCart = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.customerCart}>
      <View style={styles.all}>
        <View style={styles.upper}>
          <Image
            style={styles.seperatorIcon}
            contentFit="cover"
            source={require("../assets/seperator2.png")}
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
                source={require("../assets/vector11.png")}
              />
            </Pressable>
          </View>
        </View>
        <View style={styles.bofy}>
          <View style={styles.productSelected}>
            <View style={[styles.selectedCustomer, styles.custoemrBg]}>
              <View style={[styles.custoemr, styles.custoemrBg]}>
                <Image
                  style={styles.moreIcon}
                  contentFit="cover"
                  source={require("../assets/more.png")}
                />
                <View style={styles.customer}>
                  <View style={[styles.component1, styles.componentSpaceBlock]}>
                    <Text style={[styles.sellerName, styles.sellerTypo]}>
                      Seller Name
                    </Text>
                    <Image
                      style={styles.component1Child}
                      contentFit="cover"
                      source={require("../assets/line-43.png")}
                    />
                  </View>
                  <View style={[styles.component2, styles.component2FlexBox]}>
                    <Text style={[styles.sellerName1, styles.sellerTypo]}>
                      Seller Name
                    </Text>
                    <Image
                      style={styles.component1Child}
                      contentFit="cover"
                      source={require("../assets/line-43.png")}
                    />
                  </View>
                  <View style={[styles.component2, styles.component2FlexBox]}>
                    <Text style={[styles.sellerName1, styles.sellerTypo]}>
                      Customer Name
                    </Text>
                    <Image
                      style={styles.component1Child}
                      contentFit="cover"
                      source={require("../assets/line-43.png")}
                    />
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.products}>
              <View style={styles.heading1}>
                <View style={styles.pleft}>
                  <Text style={[styles.products1, styles.textTypo1]}>
                    Products
                  </Text>
                  <Image
                    style={styles.sortIcon}
                    contentFit="cover"
                    source={require("../assets/sort-icon4.png")}
                  />
                </View>
                <View style={styles.right}>
                  <Text style={[styles.products1, styles.textTypo1]}>
                    Quantity
                  </Text>
                  <Text style={[styles.finalPrice, styles.textTypo1]}>
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
                      source={require("../assets/select-dot2.png")}
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
                        source={require("../assets/vector24.png")}
                      />
                      <View style={styles.wrapper}>
                        <Text style={[styles.text, styles.textTypo1]}>9</Text>
                      </View>
                      <Image
                        style={[styles.vectorIcon1, styles.vectorIconLayout]}
                        contentFit="cover"
                        source={require("../assets/vector25.png")}
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
                      source={require("../assets/select-dot3.png")}
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
                        source={require("../assets/vector26.png")}
                      />
                      <View style={styles.wrapper}>
                        <Text style={[styles.text, styles.textTypo1]}>9</Text>
                      </View>
                      <Image
                        style={[styles.vectorIcon1, styles.vectorIconLayout]}
                        contentFit="cover"
                        source={require("../assets/vector27.png")}
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
                      source={require("../assets/select-dot4.png")}
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
                        source={require("../assets/vector28.png")}
                      />
                      <View style={styles.wrapper}>
                        <Text style={[styles.text, styles.textTypo1]}>9</Text>
                      </View>
                      <Image
                        style={[styles.vectorIcon1, styles.vectorIconLayout]}
                        contentFit="cover"
                        source={require("../assets/vector29.png")}
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
                      source={require("../assets/select-dot5.png")}
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
                        source={require("../assets/vector30.png")}
                      />
                      <View style={styles.wrapper}>
                        <Text style={[styles.text, styles.textTypo1]}>9</Text>
                      </View>
                      <Image
                        style={[styles.vectorIcon1, styles.vectorIconLayout]}
                        contentFit="cover"
                        source={require("../assets/vector31.png")}
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
                      source={require("../assets/select-dot6.png")}
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
                        source={require("../assets/vector32.png")}
                      />
                      <View style={styles.wrapper}>
                        <Text style={[styles.text, styles.textTypo1]}>9</Text>
                      </View>
                      <Image
                        style={[styles.vectorIcon1, styles.vectorIconLayout]}
                        contentFit="cover"
                        source={require("../assets/vector33.png")}
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
            <Text style={[styles.placeOrder, styles.cartTypo]}>
              Place Order
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
  custoemrBg: {
    backgroundColor: Color.theme12,
    alignItems: "center",
  },
  componentSpaceBlock: {
    paddingVertical: Padding.p_12xs,
    paddingHorizontal: Padding.p_lg,
    width: 161,
    flexDirection: "row",
  },
  sellerTypo: {
    height: 30,
    width: 118,
    display: "flex",
    fontFamily: FontFamily.normal,
    fontSize: FontSize.normal_size,
    textAlign: "center",
    letterSpacing: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  component2FlexBox: {
    backgroundColor: Color.fontWhite,
    borderRadius: Border.br_5xs,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  textTypo1: {
    fontSize: FontSize.normal2_size,
    textAlign: "left",
    color: Color.black,
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
    width: 335,
    paddingVertical: Padding.p_9xs,
    justifyContent: "space-between",
    borderStyle: "solid",
    backgroundColor: Color.fontWhite,
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
    marginLeft: -180,
    top: 36,
    width: 360,
    height: 1,
    left: "50%",
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
  moreIcon: {
    width: 57,
    height: 6,
  },
  sellerName: {
    color: Color.fontWhite,
  },
  component1Child: {
    width: 152,
    height: 0,
    display: "none",
    marginLeft: 15,
  },
  component1: {
    backgroundColor: Color.colorSaddlebrown_100,
    borderRadius: Border.br_5xs,
    justifyContent: "center",
    paddingVertical: Padding.p_12xs,
    paddingHorizontal: Padding.p_lg,
    width: 161,
    alignItems: "center",
    overflow: "hidden",
  },
  sellerName1: {
    color: Color.colorBlack,
  },
  component2: {
    marginLeft: 4,
    paddingVertical: Padding.p_12xs,
    paddingHorizontal: Padding.p_lg,
    width: 161,
    flexDirection: "row",
  },
  customer: {
    width: 327,
    marginTop: 10,
    borderRadius: Border.br_5xs,
    flexDirection: "row",
  },
  custoemr: {
    padding: Padding.p_5xs,
    borderRadius: Border.br_5xs,
    overflow: "hidden",
  },
  selectedCustomer: {
    paddingVertical: Padding.p_lgi,
    width: 359,
    paddingHorizontal: 0,
  },
  products1: {
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.normal,
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
    fontFamily: FontFamily.normal,
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
    textAlign: "left",
    fontFamily: FontFamily.normal,
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
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.normal,
  },
  text15: {
    color: Color.colorDarkslategray,
    textAlign: "left",
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
    color: Color.colorDarkslategray,
    textAlign: "left",
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
  placeOrder: {
    color: Color.fontWhite,
  },
  buttons: {
    paddingVertical: Padding.p_base_5,
    width: 335,
    borderRadius: Border.br_base,
    overflow: "hidden",
    backgroundColor: Color.colorSaddlebrown_100,
    flexDirection: "row",
    paddingHorizontal: 0,
  },
  bofy: {
    marginTop: 24,
    alignItems: "center",
  },
  all: {
    marginTop: -325,
    marginLeft: -179.5,
    paddingVertical: Padding.p_base,
    paddingHorizontal: 0,
    alignItems: "center",
    backgroundColor: Color.theme13,
    borderRadius: Border.br_base,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  customerCart: {
    borderRadius: Border.br_6xl,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default CustomerCart;
