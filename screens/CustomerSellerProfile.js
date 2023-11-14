import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Padding, Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const CustomerSellerProfile = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.customerSellerProfile}>
      <View style={[styles.all, styles.allPosition]}>
        <View>
          <View style={styles.statusLayout}>
            <View style={[styles.statusBarChild, styles.statusLayout]} />
            <Image
              style={styles.connectionsIcon}
              contentFit="cover"
              source={require("../assets/connections.png")}
            />
            <View style={styles.time}>
              <Text style={styles.time1}>9:27</Text>
            </View>
          </View>
          <View style={[styles.statusBar1, styles.parentSpaceBlock1]}>
            <View style={styles.leftSide}>
              <View style={styles.logo}>
                <View style={styles.logoChild} />
                <Image
                  style={[styles.asset91, styles.shapeWrapperPosition]}
                  contentFit="cover"
                  source={require("../assets/asset-9-1.png")}
                />
              </View>
            </View>
            <View style={styles.leftSide}>
              <View style={[styles.searchParent, styles.parentBorder1]}>
                <Text style={[styles.search, styles.searchFlexBox]}>
                  Search
                </Text>
                <View style={styles.searchIconFlexBox}>
                  <Image
                    style={styles.iconlyboldsearch}
                    contentFit="cover"
                    source={require("../assets/iconlyboldsearch1.png")}
                  />
                </View>
              </View>
              <View style={[styles.qrScanIcon, styles.iconLayout2]}>
                <View style={styles.iconChildShadowBox} />
                <Image
                  style={[styles.cartIcon, styles.iconPosition]}
                  contentFit="cover"
                  source={require("../assets/cart-icon.png")}
                />
                <View style={styles.wrapper}>
                  <Text style={[styles.text, styles.textTypo1]}>9+</Text>
                </View>
              </View>
              <View style={[styles.qrScanIcon, styles.iconLayout2]}>
                <Image
                  style={[styles.vectorIcon, styles.vectorIconPosition]}
                  contentFit="cover"
                  source={require("../assets/vector10.png")}
                />
                <View style={styles.iconChildShadowBox} />
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.body, styles.bodyShadowBox]}>
          <View style={[styles.frameParent, styles.frameParentBorder]}>
            <View style={styles.frameGroup}>
              <View
                style={[styles.shopNameWrapper, styles.shapeWrapperPosition]}
              >
                <Text style={[styles.shopName, styles.kTypo]}>Shop Name</Text>
              </View>
              <Pressable
                style={[styles.shapeWrapper, styles.wrapperFrameLayout]}
                onPress={() => navigation.navigate("CustomerSearvhCustomer")}
              >
                <Image
                  style={styles.shapeIcon}
                  contentFit="cover"
                  source={require("../assets/shape2.png")}
                />
              </Pressable>
            </View>
            <View style={styles.frameContainer}>
              <View
                style={[styles.retailerNameParent, styles.frameParentLayout]}
              >
                <Text style={[styles.retailerName, styles.locationTypo]}>
                  Retailer Name
                </Text>
                <Text style={[styles.pototoSama, styles.searchFlexBox]}>
                  Pototo Sama
                </Text>
              </View>
              <View style={[styles.locationParent, styles.frameParentLayout]}>
                <Text style={styles.locationTypo}>Location</Text>
                <Text style={[styles.manipurImphalEast, styles.searchTypo]}>
                  Manipur, Imphal East, Imphal asdfaddaf sdfkajsddsfa
                </Text>
              </View>
              <View style={[styles.frameView, styles.frameParentLayout]}>
                <View
                  style={[styles.hisCustomerParent, styles.parentSpaceBlock1]}
                >
                  <Text style={[styles.hisCustomer, styles.textTypo1]}>
                    His Customer
                  </Text>
                  <Text style={[styles.k, styles.kSpaceBlock]}>1K+</Text>
                </View>
                <View
                  style={[styles.productsSoldParent, styles.parentSpaceBlock1]}
                >
                  <Text style={[styles.hisCustomer, styles.textTypo1]}>
                    Products Sold
                  </Text>
                  <Text style={[styles.k, styles.kSpaceBlock]}>123K+</Text>
                </View>
                <View
                  style={[
                    styles.generosityTotalParent,
                    styles.parentSpaceBlock1,
                  ]}
                >
                  <Text style={[styles.hisCustomer, styles.textTypo1]}>
                    Generosity Total
                  </Text>
                  <Text style={[styles.k, styles.kSpaceBlock]}>32K+</Text>
                </View>
              </View>
            </View>
            <Pressable
              style={[styles.framePressable, styles.menuIconsFlexBox]}
              onPress={() => navigation.navigate("CustomersSellerFilter")}
            >
              <View style={[styles.vectorParent, styles.parentSpaceBlock1]}>
                <Image
                  style={styles.iconLayout1}
                  contentFit="cover"
                  source={require("../assets/vector12.png")}
                />
                <Text style={[styles.scanQr, styles.searchTypo]}>Scan QR</Text>
              </View>
              <View style={[styles.callParent, styles.parentSpaceBlock1]}>
                <Image
                  style={[styles.callIcon, styles.iconLayout1]}
                  contentFit="cover"
                  source={require("../assets/call.png")}
                />
                <Text style={[styles.scanQr, styles.searchTypo]}>
                  Contact Seller
                </Text>
              </View>
            </Pressable>
          </View>
          <View style={[styles.frameParent1, styles.frameParentBg]}>
            <View style={[styles.frameParent2, styles.frameParentLayout]}>
              <View style={[styles.productsParent, styles.parentBorder]}>
                <Text style={[styles.hisCustomer, styles.textTypo1]}>
                  Products
                </Text>
                <Text style={[styles.k, styles.kSpaceBlock]}>123</Text>
              </View>
              <View style={[styles.categoryParent, styles.parentBorder]}>
                <Text style={[styles.hisCustomer, styles.textTypo1]}>
                  Category
                </Text>
                <Text style={[styles.k, styles.kSpaceBlock]}>32</Text>
              </View>
            </View>
            <View
              style={[
                styles.searchForProductHereParent,
                styles.parentSpaceBlock,
              ]}
            >
              <Text style={[styles.searchForProduct, styles.searchFlexBox]}>
                Search for Product here
              </Text>
              <View style={styles.searchIconFlexBox}>
                <Image
                  style={styles.iconlyboldsearch1}
                  contentFit="cover"
                  source={require("../assets/iconlyboldsearch1.png")}
                />
              </View>
            </View>
            <View style={styles.frameContainer}>
              <View style={[styles.component4Parent, styles.parentFlexBox]}>
                <View style={styles.component4}>
                  <Text style={[styles.selectCategory, styles.searchTypo]}>
                    Select Category
                  </Text>
                  <Image
                    style={styles.vectorIcon2}
                    contentFit="cover"
                    source={require("../assets/vector9.png")}
                  />
                </View>
                <View style={styles.filterIcon}>
                  <View
                    style={[styles.groupParent, styles.containerSpaceBlock]}
                  >
                    <Image
                      style={styles.groupIcon}
                      contentFit="cover"
                      source={require("../assets/group.png")}
                    />
                    <View style={styles.frameChild} />
                    <Text style={[styles.filter, styles.text3Typo]}>
                      Filter
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.frameParent4}>
                <View style={[styles.frameParent5, styles.parentSpaceBlock]}>
                  <View
                    style={[styles.frameParent6, styles.wrapperFrameLayout]}
                  >
                    <View style={styles.productsGroup}>
                      <Text style={[styles.products1, styles.text3Typo]}>
                        Products
                      </Text>
                      <Image
                        style={styles.sortIcon}
                        contentFit="cover"
                        source={require("../assets/sort-icon4.png")}
                      />
                    </View>
                    <View style={styles.quntityParent}>
                      <Text style={[styles.products1, styles.text3Typo]}>
                        Quntity
                      </Text>
                      <Text style={[styles.finalPrice, styles.text3Typo]}>
                        Final Price
                      </Text>
                    </View>
                  </View>
                  <View style={styles.frameItem} />
                </View>
                <View
                  style={[
                    styles.suggestedItemsWrapper,
                    styles.wrapperFrameLayout,
                  ]}
                >
                  <Text style={[styles.suggestedItems, styles.textTypo1]}>
                    Suggested Items
                  </Text>
                </View>
                <View style={[styles.frameParent7, styles.frameParentBg]}>
                  <View style={styles.selectDotParent}>
                    <Image
                      style={styles.iconlyboldsearch1}
                      contentFit="cover"
                      source={require("../assets/property-1default1.png")}
                    />
                    <View style={styles.productNameParent}>
                      <Text
                        style={[styles.productName, styles.searchTypo]}
                      >{`Product Name `}</Text>
                      <Text style={[styles.text3, styles.kSpaceBlock]}>
                        ₹ 1000 - ₹ 1000
                      </Text>
                    </View>
                  </View>
                  <View style={styles.selectDotParent}>
                    <View style={styles.vectorGroup}>
                      <Image
                        style={styles.vectorIconLayout}
                        contentFit="cover"
                        source={require("../assets/vector35.png")}
                      />
                      <View
                        style={[styles.container, styles.containerSpaceBlock]}
                      >
                        <Text style={[styles.text4, styles.textTypo]}>9</Text>
                      </View>
                      <Image
                        style={[styles.vectorIcon4, styles.vectorIconLayout]}
                        contentFit="cover"
                        source={require("../assets/vector36.png")}
                      />
                    </View>
                    <View style={styles.frameWrapper}>
                      <View style={styles.leftSide}>
                        <Text style={[styles.text5, styles.textTypo]}>₹</Text>
                        <Text style={[styles.text6, styles.text6Clr]}>
                          1,00,00,000
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
                <View style={[styles.frameParent7, styles.frameParentBg]}>
                  <View style={styles.selectDotParent}>
                    <Image
                      style={styles.iconlyboldsearch1}
                      contentFit="cover"
                      source={require("../assets/property-1default1.png")}
                    />
                    <View style={styles.productNameParent}>
                      <Text
                        style={[styles.productName, styles.searchTypo]}
                      >{`Product Name `}</Text>
                      <Text style={[styles.text3, styles.kSpaceBlock]}>
                        ₹ 1000 - ₹ 1000
                      </Text>
                    </View>
                  </View>
                  <View style={styles.selectDotParent}>
                    <View style={styles.vectorGroup}>
                      <Image
                        style={styles.vectorIconLayout}
                        contentFit="cover"
                        source={require("../assets/vector35.png")}
                      />
                      <View
                        style={[styles.container, styles.containerSpaceBlock]}
                      >
                        <Text style={[styles.text4, styles.textTypo]}>9</Text>
                      </View>
                      <Image
                        style={[styles.vectorIcon4, styles.vectorIconLayout]}
                        contentFit="cover"
                        source={require("../assets/vector36.png")}
                      />
                    </View>
                    <View style={styles.frameWrapper}>
                      <View style={styles.leftSide}>
                        <Text style={[styles.text5, styles.textTypo]}>₹</Text>
                        <Text style={[styles.text6, styles.text6Clr]}>
                          1,00,00,000
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
                <View
                  style={[
                    styles.suggestedItemsWrapper,
                    styles.wrapperFrameLayout,
                  ]}
                >
                  <Text style={[styles.suggestedItems, styles.textTypo1]}>
                    A
                  </Text>
                </View>
                <View style={[styles.frameParent7, styles.frameParentBg]}>
                  <View style={styles.selectDotParent}>
                    <Image
                      style={styles.iconlyboldsearch1}
                      contentFit="cover"
                      source={require("../assets/property-1default1.png")}
                    />
                    <View style={styles.productNameParent}>
                      <Text
                        style={[styles.productName, styles.searchTypo]}
                      >{`Product Name `}</Text>
                      <Text style={[styles.text3, styles.kSpaceBlock]}>
                        ₹ 1000 - ₹ 1000
                      </Text>
                    </View>
                  </View>
                  <View style={styles.selectDotParent}>
                    <View style={styles.vectorGroup}>
                      <Image
                        style={styles.vectorIconLayout}
                        contentFit="cover"
                        source={require("../assets/vector35.png")}
                      />
                      <View
                        style={[styles.container, styles.containerSpaceBlock]}
                      >
                        <Text style={[styles.text4, styles.textTypo]}>9</Text>
                      </View>
                      <Image
                        style={[styles.vectorIcon4, styles.vectorIconLayout]}
                        contentFit="cover"
                        source={require("../assets/vector36.png")}
                      />
                    </View>
                    <View style={styles.frameWrapper}>
                      <View style={styles.leftSide}>
                        <Text style={[styles.text5, styles.textTypo]}>₹</Text>
                        <Text style={[styles.text6, styles.text6Clr]}>
                          1,00,00,000
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
                <View style={[styles.frameParent7, styles.frameParentBg]}>
                  <View style={styles.selectDotParent}>
                    <Image
                      style={styles.iconlyboldsearch1}
                      contentFit="cover"
                      source={require("../assets/property-1default1.png")}
                    />
                    <View style={styles.productNameParent}>
                      <Text
                        style={[styles.productName, styles.searchTypo]}
                      >{`Product Name `}</Text>
                      <Text style={[styles.text3, styles.kSpaceBlock]}>
                        ₹ 1000 - ₹ 1000
                      </Text>
                    </View>
                  </View>
                  <View style={styles.selectDotParent}>
                    <View style={styles.vectorGroup}>
                      <Image
                        style={styles.vectorIconLayout}
                        contentFit="cover"
                        source={require("../assets/vector35.png")}
                      />
                      <View
                        style={[styles.container, styles.containerSpaceBlock]}
                      >
                        <Text style={[styles.text4, styles.textTypo]}>9</Text>
                      </View>
                      <Image
                        style={[styles.vectorIcon4, styles.vectorIconLayout]}
                        contentFit="cover"
                        source={require("../assets/vector36.png")}
                      />
                    </View>
                    <View style={styles.frameWrapper}>
                      <View style={styles.leftSide}>
                        <Text style={[styles.text5, styles.textTypo]}>₹</Text>
                        <Text style={[styles.text6, styles.text6Clr]}>
                          1,00,00,000
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
                <View style={[styles.frameParent7, styles.frameParentBg]}>
                  <View style={styles.selectDotParent}>
                    <Image
                      style={styles.iconlyboldsearch1}
                      contentFit="cover"
                      source={require("../assets/property-1default1.png")}
                    />
                    <View style={styles.productNameParent}>
                      <Text
                        style={[styles.productName, styles.searchTypo]}
                      >{`Product Name `}</Text>
                      <Text style={[styles.text3, styles.kSpaceBlock]}>
                        ₹ 1000 - ₹ 1000
                      </Text>
                    </View>
                  </View>
                  <View style={styles.selectDotParent}>
                    <View style={styles.vectorGroup}>
                      <Image
                        style={styles.vectorIconLayout}
                        contentFit="cover"
                        source={require("../assets/vector35.png")}
                      />
                      <View
                        style={[styles.container, styles.containerSpaceBlock]}
                      >
                        <Text style={[styles.text4, styles.textTypo]}>9</Text>
                      </View>
                      <Image
                        style={[styles.vectorIcon4, styles.vectorIconLayout]}
                        contentFit="cover"
                        source={require("../assets/vector36.png")}
                      />
                    </View>
                    <View style={styles.frameWrapper}>
                      <View style={styles.leftSide}>
                        <Text style={[styles.text5, styles.textTypo]}>₹</Text>
                        <Text style={[styles.text6, styles.text6Clr]}>
                          1,00,00,000
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <Pressable
            style={[styles.cancelButton, styles.wrapperFrameLayout]}
            onPress={() => navigation.navigate("CustomerSellerPagePruchase")}
          >
            <Text style={[styles.cancel, styles.kTypo]}>Purchased history</Text>
          </Pressable>
        </View>
        <View style={styles.lower}>
          <View style={[styles.menuIcons, styles.menuIconsFlexBox]}>
            <Pressable
              style={styles.vectorParent4}
              onPress={() => navigation.navigate("CustomerDaskboard1")}
            >
              <Image
                style={styles.iconLayout}
                contentFit="cover"
                source={require("../assets/vector4.png")}
              />
              <Text style={[styles.dashboard, styles.text6Clr]}>Dashboard</Text>
            </Pressable>
            <Pressable
              style={styles.vectorParent4}
              onPress={() => navigation.navigate("CustomerNotification")}
            >
              <Image
                style={styles.iconLayout}
                contentFit="cover"
                source={require("../assets/notification.png")}
              />
              <Text style={[styles.dashboard, styles.text6Clr]}>
                Notification
              </Text>
            </Pressable>
            <Pressable
              style={styles.vectorWrapper}
              onPress={() => navigation.navigate("CustomerDaskboard")}
            >
              <Image
                style={styles.iconLayout2}
                contentFit="cover"
                source={require("../assets/vector2.png")}
              />
            </Pressable>
            <Pressable
              style={styles.vectorParent4}
              onPress={() => navigation.navigate("CustomerSearvhCustomer")}
            >
              <Image
                style={styles.iconLayout}
                contentFit="cover"
                source={require("../assets/frame-84933.png")}
              />
              <Text style={[styles.retailers, styles.textTypo1]}>
                Retailers
              </Text>
            </Pressable>
            <Pressable
              style={styles.vectorParent4}
              onPress={() => navigation.navigate("CustomerProfile")}
            >
              <View style={styles.iconLayout}>
                <View style={[styles.rectangleView, styles.iconLayout]} />
                <Image
                  style={[styles.vectorIcon15, styles.iconPosition]}
                  contentFit="cover"
                  source={require("../assets/vector.png")}
                />
              </View>
              <Text style={[styles.dashboard, styles.text6Clr]}>Profile</Text>
            </Pressable>
          </View>
          <View style={styles.homeIndicator}>
            <View style={[styles.shape, styles.shapeWrapperPosition]} />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  allPosition: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  statusLayout: {
    height: 44,
    width: 375,
  },
  parentSpaceBlock1: {
    paddingVertical: Padding.p_9xs,
    alignItems: "center",
  },
  shapeWrapperPosition: {
    left: "50%",
    position: "absolute",
  },
  parentBorder1: {
    borderWidth: 1,
    borderColor: Color.black,
  },
  searchFlexBox: {
    display: "flex",
    alignItems: "center",
  },
  iconLayout2: {
    height: 32,
    width: 32,
  },
  iconPosition: {
    marginLeft: -10,
    height: 24,
    marginTop: -12,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  textTypo1: {
    fontFamily: FontFamily.openSansSemiBold,
    fontSize: FontSize.normal2_size,
    fontWeight: "600",
  },
  vectorIconPosition: {
    marginTop: -12,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  bodyShadowBox: {
    shadowOpacity: 1,
    elevation: 6,
    shadowRadius: 6,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  frameParentBorder: {
    borderColor: Color.theme12,
    borderWidth: 1,
  },
  kTypo: {
    fontFamily: FontFamily.bold,
    fontWeight: "700",
  },
  wrapperFrameLayout: {
    width: 355,
    flexDirection: "row",
  },
  frameParentLayout: {
    width: 319,
    flexDirection: "row",
  },
  locationTypo: {
    height: 22,
    width: 150,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.normal,
    fontSize: FontSize.normal_size,
    letterSpacing: 0,
  },
  searchTypo: {
    fontSize: FontSize.normal_size,
    fontFamily: FontFamily.normal,
    letterSpacing: 0,
  },
  kSpaceBlock: {
    marginTop: 4,
    letterSpacing: 0,
  },
  menuIconsFlexBox: {
    paddingVertical: Padding.p_5xs,
    borderStyle: "solid",
    flexDirection: "row",
    alignItems: "center",
  },
  iconLayout1: {
    width: 16,
    height: 16,
  },
  frameParentBg: {
    backgroundColor: Color.theme13,
    overflow: "hidden",
  },
  parentBorder: {
    paddingHorizontal: Padding.p_37xl,
    borderColor: Color.theme12,
    justifyContent: "center",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_5xs,
    paddingVertical: Padding.p_9xs,
    alignItems: "center",
  },
  parentSpaceBlock: {
    paddingBottom: Padding.p_9xs,
    borderStyle: "solid",
    alignItems: "center",
  },
  parentFlexBox: {
    width: 339,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  containerSpaceBlock: {
    paddingVertical: Padding.p_11xs,
    borderRadius: Border.br_9xs,
    alignItems: "center",
    backgroundColor: Color.fontWhite,
  },
  text3Typo: {
    fontSize: FontSize.normal2_size,
    fontFamily: FontFamily.normal,
  },
  textTypo: {
    fontSize: FontSize.normal1_size,
    textAlign: "left",
  },
  vectorIconLayout: {
    width: 17,
    height: 12,
  },
  text6Clr: {
    color: Color.colorDarkslategray,
    letterSpacing: 0,
  },
  iconLayout: {
    width: 24,
    height: 24,
  },
  statusBarChild: {
    left: 0,
    top: 0,
    position: "absolute",
    backgroundColor: Color.fontWhite,
  },
  connectionsIcon: {
    top: 15,
    right: 14,
    width: 68,
    height: 16,
    position: "absolute",
  },
  time1: {
    marginTop: -5.5,
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.sFProText,
    width: 54,
    textAlign: "center",
    color: Color.colorBlack,
    fontWeight: "600",
    letterSpacing: 0,
    top: "50%",
    left: 0,
    position: "absolute",
  },
  time: {
    top: 8,
    left: 21,
    width: 56,
    height: 23,
    position: "absolute",
  },
  logoChild: {
    backgroundColor: Color.colorGainsboro,
    display: "none",
    height: 32,
    width: 32,
    left: 0,
    top: 0,
    position: "absolute",
  },
  asset91: {
    marginTop: -27,
    marginLeft: -22,
    width: 44,
    height: 58,
    top: "50%",
    left: "50%",
  },
  logo: {
    width: 48,
    height: 48,
  },
  leftSide: {
    flexDirection: "row",
  },
  search: {
    width: 159,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.normal,
    fontSize: FontSize.normal_size,
    letterSpacing: 0,
  },
  iconlyboldsearch: {
    height: "62.5%",
    width: "62.5%",
    top: "18.75%",
    right: "18.75%",
    bottom: "18.75%",
    left: "18.75%",
    maxWidth: "100%",
    maxHeight: "100%",
    zIndex: 0,
    position: "absolute",
    overflow: "hidden",
  },
  searchIconFlexBox: {
    padding: Padding.p_3xs,
    alignItems: "flex-end",
    justifyContent: "center",
  },
  searchParent: {
    paddingLeft: Padding.p_5xs,
    justifyContent: "center",
    borderStyle: "solid",
    borderRadius: Border.br_5xs,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Color.fontWhite,
  },
  iconChildShadowBox: {
    elevation: 4,
    shadowRadius: 4,
    shadowColor: "rgba(0, 0, 0, 0.4)",
    marginLeft: -16,
    marginTop: -16,
    backgroundColor: Color.transprent,
    borderRadius: Border.br_8xs,
    left: "50%",
    display: "none",
    height: 32,
    width: 32,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    top: "50%",
    position: "absolute",
  },
  cartIcon: {
    width: 21,
    height: 24,
  },
  text: {
    color: Color.fontWhite,
    textAlign: "center",
    letterSpacing: 0,
  },
  wrapper: {
    top: -4,
    left: 14,
    borderRadius: Border.br_mini,
    backgroundColor: Color.red,
    paddingHorizontal: Padding.p_8xs_5,
    paddingVertical: 0,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    overflow: "hidden",
  },
  qrScanIcon: {
    marginLeft: 8,
  },
  vectorIcon: {
    marginLeft: -3,
    width: 6,
    height: 24,
  },
  statusBar1: {
    paddingHorizontal: Padding.p_base,
    justifyContent: "space-between",
    flexDirection: "row",
    shadowOpacity: 1,
    elevation: 6,
    shadowRadius: 6,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    width: 375,
    backgroundColor: Color.fontWhite,
  },
  shopName: {
    fontSize: FontSize.bold1_size,
    fontWeight: "700",
    color: Color.colorBlack,
    textAlign: "center",
    letterSpacing: 0,
  },
  shopNameWrapper: {
    marginTop: -12.5,
    marginLeft: -50.5,
    justifyContent: "center",
    top: "50%",
    left: "50%",
    alignItems: "center",
  },
  shapeIcon: {
    height: 20,
    width: 12,
  },
  shapeWrapper: {
    marginTop: -9.5,
    marginLeft: -177.5,
    paddingVertical: 0,
    left: "50%",
    position: "absolute",
    paddingHorizontal: Padding.p_base,
    top: "50%",
  },
  frameGroup: {
    width: 148,
    height: 25,
  },
  retailerName: {
    display: "flex",
    alignItems: "center",
  },
  pototoSama: {
    width: 151,
    height: 19,
    marginLeft: 4,
    textAlign: "left",
    fontFamily: FontFamily.normal,
    fontSize: FontSize.normal_size,
    letterSpacing: 0,
    color: Color.colorBlack,
  },
  retailerNameParent: {
    alignItems: "center",
  },
  manipurImphalEast: {
    width: 165,
    height: 68,
    marginLeft: 4,
    textAlign: "left",
    fontFamily: FontFamily.normal,
    color: Color.colorBlack,
  },
  locationParent: {
    marginTop: 8,
  },
  hisCustomer: {
    textAlign: "center",
    color: Color.colorBlack,
    letterSpacing: 0,
  },
  k: {
    fontFamily: FontFamily.bold,
    fontWeight: "700",
    fontSize: FontSize.bold1_size,
    color: Color.colorBlack,
    textAlign: "left",
  },
  hisCustomerParent: {
    paddingHorizontal: Padding.p_7xs,
    justifyContent: "center",
    borderRadius: Border.br_5xs,
  },
  productsSoldParent: {
    paddingHorizontal: Padding.p_6xs,
    justifyContent: "center",
    borderRadius: Border.br_5xs,
  },
  generosityTotalParent: {
    paddingHorizontal: Padding.p_5xs,
    justifyContent: "center",
    borderRadius: Border.br_5xs,
  },
  frameView: {
    marginTop: 8,
    justifyContent: "space-between",
    alignItems: "center",
  },
  frameContainer: {
    marginTop: 16,
    alignItems: "center",
  },
  scanQr: {
    marginLeft: 4,
    fontFamily: FontFamily.normal,
    textAlign: "center",
    color: Color.colorBlack,
  },
  vectorParent: {
    backgroundColor: Color.theme12,
    paddingHorizontal: Padding.p_5xs,
    justifyContent: "center",
    borderRadius: Border.br_5xs,
    flexDirection: "row",
  },
  callIcon: {
    overflow: "hidden",
  },
  callParent: {
    backgroundColor: Color.theme12,
    paddingHorizontal: Padding.p_5xs,
    marginLeft: 8,
    justifyContent: "center",
    borderRadius: Border.br_5xs,
    flexDirection: "row",
  },
  framePressable: {
    borderTopLeftRadius: Border.br_5xs,
    borderTopRightRadius: Border.br_5xs,
    paddingHorizontal: Padding.p_lg,
    backgroundColor: Color.theme13,
    overflow: "hidden",
    borderColor: Color.theme12,
    borderWidth: 1,
    marginTop: 16,
    justifyContent: "center",
  },
  frameParent: {
    paddingTop: Padding.p_5xs,
    borderRadius: Border.br_base,
    borderColor: Color.theme12,
    borderStyle: "solid",
    alignItems: "center",
    paddingHorizontal: Padding.p_base,
    overflow: "hidden",
    backgroundColor: Color.fontWhite,
  },
  productsParent: {
    backgroundColor: Color.theme12,
  },
  categoryParent: {
    marginLeft: 8,
  },
  frameParent2: {
    justifyContent: "center",
    alignItems: "center",
  },
  searchForProduct: {
    width: 210,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.normal,
    fontSize: FontSize.normal_size,
    letterSpacing: 0,
  },
  iconlyboldsearch1: {
    width: 20,
    height: 20,
  },
  searchForProductHereParent: {
    paddingLeft: Padding.p_xs,
    paddingTop: Padding.p_9xs,
    paddingRight: Padding.p_9xs,
    width: 339,
    justifyContent: "space-between",
    flexDirection: "row",
    marginTop: 16,
    borderWidth: 1,
    borderColor: Color.black,
    borderRadius: Border.br_5xs,
    backgroundColor: Color.fontWhite,
  },
  selectCategory: {
    textAlign: "left",
    fontFamily: FontFamily.normal,
    color: Color.colorBlack,
  },
  vectorIcon2: {
    height: 8,
    width: 12,
    marginLeft: 8,
  },
  component4: {
    paddingVertical: Padding.p_12xs,
    paddingHorizontal: Padding.p_5xs,
    borderRadius: Border.br_8xs,
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
    backgroundColor: Color.fontWhite,
  },
  groupIcon: {
    height: 9,
    width: 12,
  },
  frameChild: {
    borderRightWidth: 0.5,
    width: 1,
    height: 21,
    marginLeft: 4,
    borderColor: Color.black,
    borderStyle: "solid",
  },
  filter: {
    marginLeft: 4,
    textAlign: "left",
    color: Color.colorBlack,
    letterSpacing: 0,
  },
  groupParent: {
    marginLeft: -27.5,
    paddingHorizontal: Padding.p_9xs,
    marginTop: -12,
    left: "50%",
    top: "50%",
    position: "absolute",
    borderWidth: 1,
    borderColor: Color.black,
    borderStyle: "solid",
    flexDirection: "row",
    overflow: "hidden",
  },
  filterIcon: {
    width: 55,
    height: 24,
  },
  component4Parent: {
    alignItems: "center",
  },
  products1: {
    textAlign: "left",
    color: Color.black,
    letterSpacing: 0,
  },
  sortIcon: {
    width: 7,
    height: 12,
    marginLeft: 8,
  },
  productsGroup: {
    width: 92,
    flexDirection: "row",
    alignItems: "center",
  },
  finalPrice: {
    marginLeft: 56,
    textAlign: "left",
    color: Color.black,
    letterSpacing: 0,
  },
  quntityParent: {
    width: 177,
    justifyContent: "flex-end",
    flexDirection: "row",
    alignItems: "center",
  },
  frameParent6: {
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: 0,
    zIndex: 0,
    justifyContent: "space-between",
    alignItems: "center",
  },
  frameItem: {
    top: 4,
    left: 26,
    zIndex: 1,
    alignItems: "center",
    position: "absolute",
  },
  frameParent5: {
    borderColor: Color.black1,
    borderBottomWidth: 1,
    paddingTop: Padding.p_5xs,
  },
  suggestedItems: {
    textAlign: "left",
    color: Color.black,
    letterSpacing: 0,
  },
  suggestedItemsWrapper: {
    marginTop: 8,
    paddingVertical: 0,
    paddingHorizontal: Padding.p_base,
    alignItems: "center",
    overflow: "hidden",
    backgroundColor: Color.fontWhite,
  },
  productName: {
    width: 115,
    textAlign: "left",
    fontFamily: FontFamily.normal,
    color: Color.colorBlack,
  },
  text3: {
    textAlign: "right",
    fontSize: FontSize.normal2_size,
    fontFamily: FontFamily.normal,
    color: Color.black,
  },
  productNameParent: {
    marginLeft: 4,
  },
  selectDotParent: {
    flexDirection: "row",
    alignItems: "center",
  },
  text4: {
    textTransform: "capitalize",
    fontFamily: FontFamily.bold,
    fontWeight: "700",
    color: Color.black,
    letterSpacing: 0,
  },
  container: {
    marginTop: 2,
    paddingHorizontal: Padding.p_5xs,
    justifyContent: "center",
  },
  vectorIcon4: {
    marginTop: 2,
  },
  vectorGroup: {
    alignItems: "center",
  },
  text5: {
    color: Color.black,
    fontFamily: FontFamily.normal,
    letterSpacing: 0,
  },
  text6: {
    fontSize: FontSize.normal1_size,
    textAlign: "left",
    fontFamily: FontFamily.normal,
  },
  frameWrapper: {
    paddingVertical: Padding.p_xs,
    marginLeft: 16,
    paddingHorizontal: Padding.p_5xs,
    alignItems: "flex-end",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: Color.black,
    borderStyle: "solid",
    borderRadius: Border.br_5xs,
    overflow: "hidden",
    backgroundColor: Color.fontWhite,
  },
  frameParent7: {
    height: 56,
    paddingVertical: Padding.p_10xs_5,
    marginTop: 8,
    width: 355,
    flexDirection: "row",
    borderRadius: Border.br_5xs,
    paddingHorizontal: Padding.p_base,
    justifyContent: "space-between",
    alignItems: "center",
  },
  frameParent4: {
    marginTop: 8,
    alignItems: "center",
  },
  frameParent1: {
    paddingTop: Padding.p_base,
    paddingBottom: Padding.p_5xs,
    borderColor: Color.theme12,
    borderWidth: 1,
    borderRadius: Border.br_base,
    borderStyle: "solid",
    alignItems: "center",
    marginTop: 16,
  },
  cancel: {
    width: 208,
    fontSize: FontSize.bold1_size,
    fontWeight: "700",
    color: Color.colorBlack,
    textAlign: "center",
    letterSpacing: 0,
  },
  cancelButton: {
    backgroundColor: Color.main,
    paddingHorizontal: 63,
    paddingVertical: Padding.p_base,
    marginTop: 16,
    borderRadius: Border.br_5xs,
    overflow: "hidden",
  },
  body: {
    height: 561,
    marginTop: 16,
  },
  dashboard: {
    marginTop: 8,
    fontFamily: FontFamily.openSansSemiBold,
    fontSize: FontSize.normal2_size,
    fontWeight: "600",
    textAlign: "center",
  },
  vectorParent4: {
    width: 70,
    justifyContent: "center",
    alignItems: "center",
  },
  vectorWrapper: {
    paddingBottom: Padding.p_5xl,
    justifyContent: "center",
    flexDirection: "row",
  },
  retailers: {
    color: Color.colorSaddlebrown_100,
    marginTop: 12,
    textAlign: "center",
    letterSpacing: 0,
  },
  rectangleView: {
    marginLeft: -12,
    borderTopLeftRadius: Border.br_8xs,
    borderTopRightRadius: Border.br_8xs,
    marginTop: -12,
    left: "50%",
    top: "50%",
    position: "absolute",
    backgroundColor: Color.transprent,
    width: 24,
    display: "none",
  },
  vectorIcon15: {
    width: 19,
    height: 24,
  },
  menuIcons: {
    borderTopLeftRadius: Border.br_base,
    borderTopRightRadius: Border.br_base,
    borderTopWidth: 1,
    borderColor: Color.black,
    paddingHorizontal: Padding.p_base,
    justifyContent: "space-between",
    width: 375,
    backgroundColor: Color.fontWhite,
  },
  shape: {
    marginLeft: -67.5,
    bottom: 9,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorDarkslategray,
    width: 135,
    height: 5,
  },
  homeIndicator: {
    height: 35,
    width: 375,
  },
  lower: {
    marginTop: 16,
  },
  all: {
    alignItems: "center",
  },
  customerSellerProfile: {
    borderRadius: Border.br_6xl,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
    backgroundColor: Color.fontWhite,
  },
});

export default CustomerSellerProfile;
