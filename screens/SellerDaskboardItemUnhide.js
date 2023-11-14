import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, Padding, Border, FontSize, FontFamily } from "../GlobalStyles";

const SellerDaskboardItemUnhide = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.sellerDaskboardItemUnhide, styles.statusBarBg]}>
      <View>
        <View>
          <View style={[styles.statusBar, styles.statusBarBg]}>
            <View style={styles.time}>
              <Text style={styles.time1}>9:27</Text>
            </View>
            <View style={styles.connections}>
              <Image
                style={styles.cellularConnectionIcon}
                contentFit="cover"
                source={require("../assets/cellular-connection1.png")}
              />
              <Image
                style={styles.wifiIcon}
                contentFit="cover"
                source={require("../assets/wifi2.png")}
              />
              <View style={styles.battery}>
                <View style={styles.border} />
                <Image
                  style={[styles.capIcon, styles.capIconLayout]}
                  contentFit="cover"
                  source={require("../assets/cap1.png")}
                />
                <View style={styles.capacity} />
              </View>
            </View>
          </View>
          <View style={styles.statusBar1}>
            <View style={styles.leftSide}>
              <View style={styles.logo}>
                <View style={styles.logoChild} />
                <Image
                  style={styles.asset91}
                  contentFit="cover"
                  source={require("../assets/asset-9-11.png")}
                />
              </View>
              <View
                style={[styles.balanceSection, styles.balanceSectionSpaceBlock]}
              >
                <View style={styles.upperSection}>
                  <Text style={[styles.balance, styles.balanceFlexBox]}>
                    Balance
                  </Text>
                  <View
                    style={[styles.depositButton, styles.depositButtonLayout]}
                  >
                    <Text style={[styles.deposit, styles.depositClr]}>
                      Deposit
                    </Text>
                    <Image
                      style={styles.depositIcon}
                      contentFit="cover"
                      source={require("../assets/deposit-icon1.png")}
                    />
                  </View>
                </View>
                <Text style={[styles.text, styles.textTypo]}>₹1,00,00,000</Text>
              </View>
            </View>
            <View style={styles.leftSide}>
              <Image
                style={styles.iconLayout1}
                contentFit="cover"
                source={require("../assets/add1.png")}
              />
              <View style={[styles.qrScanIcon, styles.iconLayout1]}>
                <View style={styles.iconChildShadowBox} />
                <Image
                  style={[styles.cartIcon, styles.iconPosition]}
                  contentFit="cover"
                  source={require("../assets/cart-icon1.png")}
                />
                <View style={styles.wrapper}>
                  <Text style={[styles.text1, styles.text1Typo]}>9+</Text>
                </View>
              </View>
              <View style={[styles.qrScanIcon, styles.iconLayout1]}>
                <Image
                  style={[styles.vectorIcon, styles.iconPosition]}
                  contentFit="cover"
                  source={require("../assets/vector50.png")}
                />
                <View style={styles.iconChildShadowBox} />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.lower}>
          <View style={styles.body}>
            <View style={[styles.body1, styles.body1Bg]}>
              <View style={[styles.seachBar, styles.seachBarLayout]}>
                <View
                  style={[
                    styles.searchForProductsOrCategorParent,
                    styles.seachBarLayout,
                  ]}
                >
                  <Text
                    style={[styles.searchForProducts, styles.addCustomerTypo]}
                  >
                    Search Customer by ID/Phone number
                  </Text>
                  <View style={styles.iconLayout1}>
                    <View
                      style={[styles.searchIconChild, styles.frameItemPosition]}
                    />
                    <Image
                      style={[styles.iconlyboldsearch, styles.capIconLayout]}
                      contentFit="cover"
                      source={require("../assets/iconlyboldsearch2.png")}
                    />
                  </View>
                </View>
              </View>
              <View style={styles.lower}>
                <View style={styles.selectedCustomer}>
                  <Image
                    style={styles.moreIcon}
                    contentFit="cover"
                    source={require("../assets/more2.png")}
                  />
                  <View style={[styles.customer, styles.customerFlexBox]}>
                    <View style={[styles.customer1, styles.customerFlexBox]}>
                      <View style={[styles.component1, styles.customerFlexBox]}>
                        <Text
                          style={[styles.addCustomer, styles.addCustomerTypo]}
                        >
                          Add Customer
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
                <View style={[styles.products, styles.body1Bg]}>
                  <View style={styles.heading}>
                    <View style={styles.pleft}>
                      <Text style={[styles.products1, styles.depositTypo]}>
                        Products
                      </Text>
                      <Image
                        style={styles.sortIcon}
                        contentFit="cover"
                        source={require("../assets/sort-icon8.png")}
                      />
                    </View>
                    <View style={styles.right}>
                      <Text style={[styles.products1, styles.depositTypo]}>
                        Quantity
                      </Text>
                      <Text style={[styles.finalPrice, styles.depositTypo]}>
                        Final Price
                      </Text>
                    </View>
                  </View>
                  <View style={[styles.noItem, styles.itemPosition]}>
                    <Image
                      style={styles.frame5461}
                      contentFit="cover"
                      source={require("../assets/frame-546-1.png")}
                    />
                    <View style={styles.gropu}>
                      <Text
                        style={[styles.yourProductList, styles.depositTypo]}
                      >
                        Your product list is empty.
                      </Text>
                      <Pressable
                        style={styles.create}
                        onPress={() =>
                          navigation.navigate("SellerDaskboardItemsUnhide1")
                        }
                      >
                        <Text
                          style={[
                            styles.createYourFirst,
                            styles.addCustomerTypo,
                          ]}
                        >
                          {" "}
                          Create your first product
                        </Text>
                        <View style={styles.buttonCreateNewItem}>
                          <Text style={[styles.here, styles.textTypo]}>
                            Here
                          </Text>
                        </View>
                      </Pressable>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <Pressable
              style={[styles.productListMaximize, styles.customerFlexBox]}
              onPress={() => navigation.navigate("SellerDaskboardItemUnhide")}
            >
              <Text style={[styles.selectProducts, styles.textTypo]}>
                Select Products
              </Text>
              <Image
                style={styles.vectorIcon1}
                contentFit="cover"
                source={require("../assets/vector51.png")}
              />
            </Pressable>
          </View>
          <View style={styles.nag}>
            <View style={[styles.menuIcons, styles.menuIconsBorder]}>
              <View style={styles.vectorParent}>
                <Image
                  style={styles.iconLayout}
                  contentFit="cover"
                  source={require("../assets/vector52.png")}
                />
                <Text style={[styles.dashboard, styles.text1Typo]}>
                  Dashboard
                </Text>
              </View>
              <View style={styles.vectorParent}>
                <Image
                  style={styles.iconLayout}
                  contentFit="cover"
                  source={require("../assets/notification3.png")}
                />
                <Text style={[styles.notification, styles.depositClr]}>
                  Notification
                </Text>
              </View>
              <View style={styles.vectorWrapper}>
                <Image
                  style={styles.iconLayout1}
                  contentFit="cover"
                  source={require("../assets/vector53.png")}
                />
              </View>
              <View style={styles.vectorParent}>
                <Image
                  style={styles.iconLayout}
                  contentFit="cover"
                  source={require("../assets/frame-84935.png")}
                />
                <Text style={[styles.customer2, styles.depositClr]}>
                  Customer
                </Text>
              </View>
              <View style={styles.vectorParent}>
                <View style={styles.iconLayout}>
                  <View style={[styles.frameItem, styles.iconLayout]} />
                  <Image
                    style={[styles.vectorIcon4, styles.iconPosition]}
                    contentFit="cover"
                    source={require("../assets/vector54.png")}
                  />
                </View>
                <Text style={[styles.notification, styles.depositClr]}>
                  Profile
                </Text>
              </View>
            </View>
            <View style={styles.homeIndicator}>
              <View style={styles.shape} />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  statusBarBg: {
    backgroundColor: Color.fontWhite,
    alignItems: "center",
  },
  capIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  balanceSectionSpaceBlock: {
    paddingBottom: Padding.p_9xs,
    backgroundColor: Color.fontWhite,
  },
  balanceFlexBox: {
    textAlign: "left",
    color: Color.black,
  },
  depositButtonLayout: {
    borderTopRightRadius: Border.br_9xs,
    borderWidth: 1,
  },
  depositClr: {
    color: Color.colorDarkslategray,
    fontSize: FontSize.normal2_size,
    letterSpacing: 0,
  },
  textTypo: {
    fontFamily: FontFamily.bold,
    fontWeight: "700",
    textAlign: "left",
    letterSpacing: 0,
  },
  iconLayout1: {
    height: 32,
    width: 32,
  },
  iconPosition: {
    height: 24,
    marginTop: -12,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  text1Typo: {
    fontFamily: FontFamily.openSansSemiBold,
    fontWeight: "600",
  },
  body1Bg: {
    backgroundColor: Color.theme13,
    borderRadius: Border.br_base,
    overflow: "hidden",
  },
  seachBarLayout: {
    width: 335,
    borderRadius: Border.br_5xs,
  },
  addCustomerTypo: {
    fontSize: FontSize.normal_size,
    fontFamily: FontFamily.normal,
    letterSpacing: 0,
  },
  frameItemPosition: {
    borderTopRightRadius: Border.br_8xs,
    backgroundColor: Color.transprent,
    display: "none",
    position: "absolute",
  },
  customerFlexBox: {
    borderRadius: Border.br_5xs,
    flexDirection: "row",
    alignItems: "center",
  },
  depositTypo: {
    fontFamily: FontFamily.normal,
    textAlign: "left",
  },
  itemPosition: {
    top: "50%",
    left: "50%",
  },
  menuIconsBorder: {
    borderColor: Color.black,
    borderStyle: "solid",
  },
  iconLayout: {
    width: 24,
    height: 24,
  },
  time1: {
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.sFProText,
    width: 54,
    textAlign: "center",
    color: Color.colorBlack,
    fontWeight: "600",
    letterSpacing: 0,
  },
  time: {
    height: 23,
    paddingVertical: 0,
    paddingHorizontal: 0,
    justifyContent: "flex-end",
    width: 56,
  },
  cellularConnectionIcon: {
    width: 18,
    height: 12,
  },
  wifiIcon: {
    height: 15,
    marginLeft: 2,
    width: 21,
  },
  border: {
    height: "94.17%",
    width: "88%",
    top: "2.5%",
    right: "12%",
    bottom: "3.33%",
    left: "0%",
    borderRadius: 3,
    borderColor: Color.colorBlack,
    opacity: 0.35,
    borderWidth: 1,
    borderStyle: "solid",
    position: "absolute",
  },
  capIcon: {
    height: "33.33%",
    width: "5.2%",
    top: "33.33%",
    right: "2.8%",
    bottom: "33.33%",
    left: "92%",
    opacity: 0.4,
  },
  capacity: {
    height: "60.83%",
    width: "72%",
    top: "19.17%",
    right: "20%",
    bottom: "20%",
    left: "8%",
    borderRadius: 1,
    backgroundColor: Color.colorBlack,
    position: "absolute",
  },
  battery: {
    width: 25,
    marginLeft: 2,
    height: 12,
  },
  connections: {
    marginLeft: 216,
    flexDirection: "row",
    alignItems: "center",
  },
  statusBar: {
    paddingHorizontal: 14,
    paddingTop: Padding.p_5xs,
    paddingBottom: Padding.p_smi,
    flexDirection: "row",
    height: 44,
    width: 375,
    alignItems: "center",
  },
  logoChild: {
    backgroundColor: Color.colorGainsboro,
    display: "none",
    height: 32,
    width: 32,
  },
  asset91: {
    width: 44,
    height: 58,
    marginTop: -31,
  },
  logo: {
    width: 48,
    height: 48,
    paddingTop: Padding.p_12xs,
  },
  balance: {
    fontFamily: FontFamily.openSansSemiBold,
    fontWeight: "600",
    fontSize: FontSize.normal2_size,
    letterSpacing: 0,
  },
  deposit: {
    fontFamily: FontFamily.normal,
    textAlign: "left",
  },
  depositIcon: {
    width: 12,
    marginLeft: 4,
    height: 12,
  },
  depositButton: {
    borderBottomRightRadius: Border.br_9xs,
    borderBottomLeftRadius: Border.br_9xs,
    borderColor: Color.theme12,
    padding: Padding.p_9xs,
    marginLeft: 3,
    backgroundColor: Color.theme12,
    borderStyle: "solid",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  upperSection: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    alignItems: "flex-end",
    width: 108,
    height: 20,
    display: "flex",
    textTransform: "capitalize",
    fontSize: FontSize.normal1_size,
    fontFamily: FontFamily.bold,
    fontWeight: "700",
    color: Color.colorBlack,
  },
  balanceSection: {
    borderTopLeftRadius: Border.br_5xs,
    borderBottomRightRadius: Border.br_5xs,
    borderBottomLeftRadius: Border.br_5xs,
    paddingLeft: Padding.p_5xs,
    marginLeft: 16,
    borderColor: Color.black,
    borderStyle: "solid",
    borderTopRightRadius: Border.br_9xs,
    borderWidth: 1,
    overflow: "hidden",
  },
  leftSide: {
    flexDirection: "row",
  },
  iconChildShadowBox: {
    elevation: 4,
    shadowRadius: 4,
    shadowColor: "rgba(0, 0, 0, 0.4)",
    backgroundColor: Color.transprent,
    borderRadius: Border.br_8xs,
    marginLeft: -16,
    marginTop: -16,
    left: "50%",
    top: "50%",
    display: "none",
    height: 32,
    width: 32,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    position: "absolute",
  },
  cartIcon: {
    marginLeft: -10,
    height: 24,
    width: 21,
  },
  text1: {
    color: Color.fontWhite,
    fontSize: FontSize.normal2_size,
    textAlign: "center",
    letterSpacing: 0,
    fontFamily: FontFamily.openSansSemiBold,
  },
  wrapper: {
    top: -4,
    left: 14,
    borderRadius: Border.br_mini,
    backgroundColor: Color.red,
    paddingHorizontal: Padding.p_8xs_5,
    position: "absolute",
    paddingVertical: 0,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  qrScanIcon: {
    marginLeft: 8,
  },
  vectorIcon: {
    marginLeft: -3,
    width: 6,
  },
  statusBar1: {
    paddingVertical: Padding.p_9xs,
    paddingHorizontal: Padding.p_base,
    justifyContent: "space-between",
    shadowOpacity: 1,
    elevation: 6,
    shadowRadius: 6,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    flexDirection: "row",
    width: 375,
    alignItems: "center",
    backgroundColor: Color.fontWhite,
  },
  searchForProducts: {
    width: 285,
    display: "flex",
    textAlign: "left",
    color: Color.black,
    alignItems: "center",
  },
  searchIconChild: {
    left: 0,
    borderBottomRightRadius: Border.br_8xs,
    top: 0,
    height: 32,
    width: 32,
  },
  iconlyboldsearch: {
    height: "75%",
    width: "75%",
    top: "12.5%",
    right: "12.5%",
    bottom: "12.5%",
    left: "12.5%",
  },
  searchForProductsOrCategorParent: {
    marginTop: -20,
    marginLeft: -167.5,
    paddingLeft: Padding.p_xs,
    paddingTop: Padding.p_9xs,
    paddingRight: Padding.p_9xs,
    left: "50%",
    top: "50%",
    paddingBottom: Padding.p_9xs,
    backgroundColor: Color.fontWhite,
    justifyContent: "space-between",
    position: "absolute",
    flexDirection: "row",
    alignItems: "center",
  },
  seachBar: {
    height: 44,
    overflow: "hidden",
  },
  moreIcon: {
    height: 6,
    width: 56,
  },
  addCustomer: {
    width: 118,
    height: 30,
    color: Color.fontWhite,
    display: "flex",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  component1: {
    paddingHorizontal: Padding.p_lg,
    paddingVertical: Padding.p_12xs,
    width: 200,
    backgroundColor: Color.colorSaddlebrown_100,
    justifyContent: "center",
    overflow: "hidden",
  },
  customer1: {
    width: 327,
    justifyContent: "center",
  },
  customer: {
    padding: Padding.p_5xs,
    marginTop: 12,
    backgroundColor: Color.theme12,
    overflow: "hidden",
  },
  selectedCustomer: {
    paddingVertical: Padding.p_lgi,
    width: 359,
    backgroundColor: Color.theme12,
    paddingHorizontal: 0,
    alignItems: "center",
  },
  products1: {
    color: Color.black,
    fontFamily: FontFamily.normal,
    letterSpacing: 0,
    fontSize: FontSize.normal2_size,
  },
  sortIcon: {
    width: 7,
    marginLeft: 8,
    height: 12,
  },
  pleft: {
    width: 92,
    flexDirection: "row",
    alignItems: "center",
  },
  finalPrice: {
    marginLeft: 56,
    color: Color.black,
    fontFamily: FontFamily.normal,
    letterSpacing: 0,
    fontSize: FontSize.normal2_size,
  },
  right: {
    width: 177,
    justifyContent: "flex-end",
    flexDirection: "row",
    alignItems: "center",
  },
  heading: {
    marginLeft: -179.5,
    paddingHorizontal: Padding.p_5xl,
    width: 359,
    top: 0,
    borderRadius: Border.br_base,
    left: "50%",
    paddingVertical: Padding.p_9xs,
    justifyContent: "space-between",
    position: "absolute",
    flexDirection: "row",
    alignItems: "center",
  },
  frame5461: {
    height: 128,
    width: 200,
  },
  yourProductList: {
    fontSize: FontSize.bold_size,
    color: Color.black,
    fontFamily: FontFamily.normal,
    letterSpacing: 0,
  },
  createYourFirst: {
    textAlign: "left",
    color: Color.black,
  },
  here: {
    left: 8,
    width: 33,
    height: 18,
    top: 0,
    color: Color.fontWhite,
    display: "flex",
    textTransform: "capitalize",
    fontSize: FontSize.normal1_size,
    fontFamily: FontFamily.bold,
    fontWeight: "700",
    position: "absolute",
    alignItems: "center",
  },
  buttonCreateNewItem: {
    borderRadius: Border.br_9xs,
    width: 49,
    height: 18,
    backgroundColor: Color.colorSaddlebrown_100,
    marginLeft: 4,
  },
  create: {
    marginTop: 4,
    flexDirection: "row",
    alignItems: "center",
  },
  gropu: {
    marginTop: 8,
    alignItems: "center",
  },
  noItem: {
    marginTop: -93,
    marginLeft: -144.5,
    left: "50%",
    position: "absolute",
    alignItems: "center",
  },
  products: {
    borderColor: Color.colorSaddlebrown_100,
    borderWidth: 2,
    height: 346,
    width: 359,
    marginTop: -12,
    borderStyle: "solid",
  },
  lower: {
    marginTop: 16,
    alignItems: "center",
  },
  body1: {
    paddingTop: Padding.p_base,
    alignItems: "center",
  },
  selectProducts: {
    fontSize: FontSize.bold1_size,
    color: Color.colorBlack,
  },
  vectorIcon1: {
    width: 16,
    height: 11,
  },
  productListMaximize: {
    paddingLeft: Padding.p_7xl,
    paddingTop: Padding.p_xs,
    paddingRight: Padding.p_base,
    paddingBottom: Padding.p_xs,
    width: 359,
    marginTop: 16,
    backgroundColor: Color.theme12,
    justifyContent: "space-between",
    shadowOpacity: 1,
    elevation: 6,
    shadowRadius: 6,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: Border.br_5xs,
  },
  body: {
    alignItems: "center",
  },
  dashboard: {
    color: Color.colorSaddlebrown_100,
    marginTop: 8,
    fontSize: FontSize.normal2_size,
    textAlign: "center",
    letterSpacing: 0,
    fontFamily: FontFamily.openSansSemiBold,
  },
  vectorParent: {
    width: 70,
    justifyContent: "center",
    alignItems: "center",
  },
  notification: {
    marginTop: 8,
    fontFamily: FontFamily.openSansSemiBold,
    fontWeight: "600",
    textAlign: "center",
  },
  vectorWrapper: {
    paddingBottom: Padding.p_5xl,
    flexDirection: "row",
    justifyContent: "center",
  },
  customer2: {
    marginTop: 12,
    fontFamily: FontFamily.openSansSemiBold,
    fontWeight: "600",
    textAlign: "center",
  },
  frameItem: {
    marginLeft: -12,
    borderTopLeftRadius: Border.br_8xs,
    borderTopRightRadius: Border.br_8xs,
    backgroundColor: Color.transprent,
    display: "none",
    position: "absolute",
    marginTop: -12,
    left: "50%",
    top: "50%",
  },
  vectorIcon4: {
    width: 19,
    marginLeft: -10,
    height: 24,
  },
  menuIcons: {
    borderTopLeftRadius: Border.br_base,
    borderTopRightRadius: Border.br_base,
    borderTopWidth: 1,
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_base,
    borderColor: Color.black,
    justifyContent: "space-between",
    flexDirection: "row",
    width: 375,
    alignItems: "center",
    backgroundColor: Color.fontWhite,
  },
  shape: {
    marginLeft: -67.5,
    bottom: 8,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorDarkslategray,
    width: 135,
    height: 5,
    left: "50%",
    position: "absolute",
  },
  homeIndicator: {
    height: 34,
    width: 375,
  },
  nag: {
    marginTop: 8,
  },
  sellerDaskboardItemUnhide: {
    borderRadius: Border.br_6xl,
    flex: 1,
    width: "100%",
    height: 803,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
});

export default SellerDaskboardItemUnhide;
