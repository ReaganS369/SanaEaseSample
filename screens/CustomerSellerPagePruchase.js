import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Padding, Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const CustomerSellerPagePruchase = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.customerSellerPagePruchase}>
      <View style={[styles.menuIcons, styles.menuIconsSpaceBlock]}>
        <View style={styles.vectorParent}>
          <Image
            style={styles.iconLayout1}
            contentFit="cover"
            source={require("../assets/vector4.png")}
          />
          <Text style={[styles.dashboard, styles.time1Clr]}>Dashboard</Text>
        </View>
        <View style={styles.vectorParent}>
          <Image
            style={styles.iconLayout1}
            contentFit="cover"
            source={require("../assets/notification.png")}
          />
          <Text style={styles.notification}>Notification</Text>
        </View>
        <View style={styles.vectorWrapper}>
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/vector2.png")}
          />
        </View>
        <View style={styles.vectorParent}>
          <Image
            style={styles.iconLayout1}
            contentFit="cover"
            source={require("../assets/frame-84934.png")}
          />
          <Text style={[styles.retailers, styles.endTypo]}>Retailers</Text>
        </View>
        <View style={styles.vectorParent}>
          <View style={styles.iconLayout1}>
            <View style={[styles.frameItem, styles.frameItemPosition]} />
            <Image
              style={[styles.vectorIcon2, styles.iconPosition]}
              contentFit="cover"
              source={require("../assets/vector.png")}
            />
          </View>
          <Text style={styles.notification}>Profile</Text>
        </View>
      </View>
      <View style={styles.homeIndicator}>
        <View style={styles.shape} />
      </View>
      <View style={styles.statusBar}>
        <View style={styles.leftSide}>
          <View style={styles.logo}>
            <View style={[styles.logoChild, styles.frameItemPosition]} />
            <Image
              style={styles.asset91}
              contentFit="cover"
              source={require("../assets/asset-9-1.png")}
            />
          </View>
        </View>
        <View style={styles.leftSide}>
          <View style={styles.searchParent}>
            <Text style={[styles.search, styles.searchFlexBox]}>Search</Text>
            <View style={styles.searchIcon}>
              <Image
                style={styles.iconlyboldsearch}
                contentFit="cover"
                source={require("../assets/iconlyboldsearch1.png")}
              />
            </View>
          </View>
          <View style={[styles.qrScanIcon, styles.iconLayout]}>
            <View style={styles.iconChildShadowBox} />
            <Image
              style={[styles.cartIcon, styles.iconPosition]}
              contentFit="cover"
              source={require("../assets/cart-icon.png")}
            />
            <View style={[styles.wrapper, styles.wrapperSpaceBlock]}>
              <Text style={[styles.text, styles.endTypo]}>9+</Text>
            </View>
          </View>
          <View style={[styles.qrScanIcon, styles.iconLayout]}>
            <Image
              style={styles.vectorIcon3}
              contentFit="cover"
              source={require("../assets/vector10.png")}
            />
            <View style={styles.iconChildShadowBox} />
          </View>
        </View>
      </View>
      <View style={[styles.statusBar1, styles.statusLayout]}>
        <View style={[styles.statusBarChild, styles.statusLayout]} />
        <Image
          style={styles.connectionsIcon}
          contentFit="cover"
          source={require("../assets/connections.png")}
        />
        <View style={styles.time}>
          <Text style={[styles.time1, styles.time1Clr]}>9:27</Text>
        </View>
      </View>
      <View style={styles.frameContainer}>
        <View style={[styles.frameView, styles.frameViewLayout]}>
          <View style={styles.frameParent1}>
            <View style={[styles.shopNameWrapper, styles.wrapperPosition]}>
              <Text style={[styles.shopName, styles.kTypo]}>Shop Name</Text>
            </View>
            <Pressable
              style={[styles.shapeWrapper, styles.frameViewLayout]}
              onPress={() => navigation.navigate("CustomerSearvhCustomer")}
            >
              <Image
                style={styles.shapeIcon}
                contentFit="cover"
                source={require("../assets/shape2.png")}
              />
            </Pressable>
          </View>
          <View style={styles.frameParent2}>
            <View style={[styles.retailerNameParent, styles.parentLayout1]}>
              <Text style={[styles.retailerName, styles.locationTypo]}>
                Retailer Name
              </Text>
              <Text style={[styles.pototoSama, styles.searchFlexBox]}>
                Pototo Sama
              </Text>
            </View>
            <View style={[styles.locationParent, styles.parentLayout1]}>
              <Text style={[styles.location, styles.locationTypo]}>
                Location
              </Text>
              <Text style={[styles.manipurImphalEast, styles.searchTypo]}>
                Manipur, Imphal East, Imphal asdfaddaf sdfkajsddsfa
              </Text>
            </View>
            <View style={[styles.frameParent3, styles.parentLayout1]}>
              <View style={[styles.hisCustomerParent, styles.parentFlexBox]}>
                <Text style={[styles.hisCustomer, styles.time1Clr]}>
                  His Customer
                </Text>
                <Text style={[styles.k, styles.kTypo]}>1K+</Text>
              </View>
              <View style={[styles.productsSoldParent, styles.parentFlexBox]}>
                <Text style={[styles.hisCustomer, styles.time1Clr]}>
                  Products Sold
                </Text>
                <Text style={[styles.k, styles.kTypo]}>123K+</Text>
              </View>
              <View
                style={[styles.generosityTotalParent, styles.parentFlexBox]}
              >
                <Text style={[styles.hisCustomer, styles.time1Clr]}>
                  Generosity Total
                </Text>
                <Text style={[styles.k, styles.kTypo]}>32K+</Text>
              </View>
            </View>
          </View>
          <View style={[styles.frameParent4, styles.frameParentBorder]}>
            <View style={styles.vectorFlexBox}>
              <Image
                style={styles.vectorIcon4}
                contentFit="cover"
                source={require("../assets/vector12.png")}
              />
              <Text style={[styles.scanQr, styles.searchTypo]}>Scan QR</Text>
            </View>
            <View style={[styles.vectorContainer, styles.vectorFlexBox]}>
              <Image
                style={styles.vectorIcon5}
                contentFit="cover"
                source={require("../assets/vector13.png")}
              />
              <Text style={[styles.scanQr, styles.searchTypo]}>
                Contact Seller
              </Text>
            </View>
          </View>
        </View>
        <View style={[styles.frameParent5, styles.frameParentBorder]}>
          <View style={styles.frameParent1}>
            <View
              style={[styles.purchaseHistoryWrapper, styles.wrapperPosition]}
            >
              <Text style={[styles.shopName, styles.kTypo]}>
                Purchase History
              </Text>
            </View>
            <Pressable
              style={[styles.shapeWrapper, styles.frameViewLayout]}
              onPress={() => navigation.navigate("CustomerSellerProfile")}
            >
              <Image
                style={styles.shapeIcon}
                contentFit="cover"
                source={require("../assets/shape2.png")}
              />
            </Pressable>
          </View>
          <View style={styles.frameParent7}>
            <View style={[styles.groupParent, styles.groupParentBorder]}>
              <View style={styles.parentLayout}>
                <Text style={[styles.text1, styles.textTypo1]}>1,000</Text>
                <Text style={[styles.totalNumberOf, styles.totalPosition]}>
                  Total Number of Products
                </Text>
              </View>
              <View style={[styles.groupContainer, styles.parentLayout]}>
                <View style={styles.group}>
                  <Text style={[styles.text2, styles.textTypo1]}>
                    1,00,00,000
                  </Text>
                  <Text style={[styles.text3, styles.textTypo]}>₹</Text>
                </View>
                <Text style={[styles.totalAmount, styles.totalPosition]}>
                  Total Amount
                </Text>
              </View>
              <View style={styles.groupView}>
                <View style={styles.frameWrapper}>
                  <View style={[styles.container, styles.containerFlexBox]}>
                    <Text style={styles.textTypo}>₹</Text>
                    <Text style={[styles.text5, styles.textTypo1]}>10,000</Text>
                  </View>
                </View>
                <Text style={[styles.savings, styles.savingsPosition]}>
                  Savings
                </Text>
              </View>
              <View style={styles.frameParent8}>
                <View style={[styles.groupWrapper, styles.containerFlexBox]}>
                  <View style={styles.amLayout}>
                    <Text style={[styles.am, styles.amLayout]}>
                      01/01/23, 00:00 AM
                    </Text>
                  </View>
                </View>
                <Text
                  style={[styles.dateTime, styles.savingsPosition]}
                >{`Date & Time`}</Text>
              </View>
            </View>
            <View style={[styles.groupParent1, styles.groupParentBorder]}>
              <View style={styles.parentLayout}>
                <Text style={[styles.text1, styles.textTypo1]}>1,000</Text>
                <Text style={[styles.totalNumberOf, styles.totalPosition]}>
                  Total Number of Products
                </Text>
              </View>
              <View style={[styles.groupContainer, styles.parentLayout]}>
                <View style={styles.group}>
                  <Text style={[styles.text2, styles.textTypo1]}>
                    1,00,00,000
                  </Text>
                  <Text style={[styles.text3, styles.textTypo]}>₹</Text>
                </View>
                <Text style={[styles.totalAmount, styles.totalPosition]}>
                  Total Amount
                </Text>
              </View>
              <View style={styles.groupView}>
                <View style={styles.frameWrapper}>
                  <View style={[styles.container, styles.containerFlexBox]}>
                    <Text style={styles.textTypo}>₹</Text>
                    <Text style={[styles.text5, styles.textTypo1]}>10,000</Text>
                  </View>
                </View>
                <Text style={[styles.savings, styles.savingsPosition]}>
                  Savings
                </Text>
              </View>
              <View style={styles.frameParent8}>
                <View style={[styles.groupWrapper, styles.containerFlexBox]}>
                  <View style={styles.amLayout}>
                    <Text style={[styles.am, styles.amLayout]}>
                      01/01/23, 00:00 AM
                    </Text>
                  </View>
                </View>
                <Text
                  style={[styles.dateTime, styles.savingsPosition]}
                >{`Date & Time`}</Text>
              </View>
            </View>
            <View style={styles.or}>
              <Image
                style={styles.orItemLayout}
                contentFit="cover"
                source={require("../assets/line-311.png")}
              />
              <Text style={[styles.end, styles.endClr]}>END</Text>
              <Image
                style={[styles.orItem, styles.orItemLayout]}
                contentFit="cover"
                source={require("../assets/line-311.png")}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  menuIconsSpaceBlock: {
    paddingVertical: Padding.p_5xs,
    flexDirection: "row",
  },
  time1Clr: {
    color: Color.colorBlack,
    letterSpacing: 0,
  },
  endTypo: {
    fontFamily: FontFamily.openSansSemiBold,
    fontSize: FontSize.normal2_size,
    fontWeight: "600",
  },
  frameItemPosition: {
    display: "none",
    position: "absolute",
  },
  iconPosition: {
    marginLeft: -10,
    top: "50%",
    marginTop: -12,
    height: 24,
    left: "50%",
    position: "absolute",
  },
  searchFlexBox: {
    display: "flex",
    alignItems: "center",
  },
  iconLayout: {
    height: 32,
    width: 32,
  },
  wrapperSpaceBlock: {
    paddingVertical: 0,
    position: "absolute",
  },
  statusLayout: {
    height: 44,
    top: 0,
    width: 375,
    position: "absolute",
  },
  frameViewLayout: {
    width: 355,
    paddingHorizontal: Padding.p_base,
  },
  wrapperPosition: {
    marginTop: -12.5,
    top: "50%",
    justifyContent: "center",
    alignItems: "center",
    left: "50%",
    position: "absolute",
  },
  kTypo: {
    fontFamily: FontFamily.bold,
    fontWeight: "700",
    fontSize: FontSize.bold1_size,
    color: Color.colorBlack,
    letterSpacing: 0,
  },
  parentLayout1: {
    width: 319,
    flexDirection: "row",
  },
  locationTypo: {
    width: 150,
    height: 22,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.normal,
    fontSize: FontSize.normal_size,
    letterSpacing: 0,
  },
  searchTypo: {
    fontFamily: FontFamily.normal,
    fontSize: FontSize.normal_size,
  },
  parentFlexBox: {
    borderRadius: Border.br_5xs,
    paddingVertical: Padding.p_9xs,
    justifyContent: "center",
    alignItems: "center",
  },
  frameParentBorder: {
    backgroundColor: Color.theme13,
    marginTop: 16,
    borderColor: Color.theme12,
    borderWidth: 1,
    alignItems: "center",
    borderStyle: "solid",
    overflow: "hidden",
  },
  vectorFlexBox: {
    backgroundColor: Color.theme12,
    paddingHorizontal: Padding.p_5xs,
    borderRadius: Border.br_5xs,
    paddingVertical: Padding.p_9xs,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  groupParentBorder: {
    padding: Padding.p_base,
    borderColor: Color.theme13,
    width: 339,
    borderWidth: 1,
    borderRadius: Border.br_5xs,
    left: 0,
    borderStyle: "solid",
    position: "absolute",
    backgroundColor: Color.fontWhite,
  },
  textTypo1: {
    fontSize: FontSize.normal1_size,
    fontFamily: FontFamily.normal,
    color: Color.colorDarkslategray,
    letterSpacing: 0,
  },
  totalPosition: {
    marginLeft: -151.5,
    marginTop: -10.9,
    height: 22,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.normal,
    fontSize: FontSize.normal_size,
    top: "50%",
    letterSpacing: 0,
    left: "50%",
    position: "absolute",
  },
  parentLayout: {
    width: 303,
    height: 22,
  },
  textTypo: {
    width: 9,
    fontSize: FontSize.normal1_size,
    height: 19,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.normal,
    letterSpacing: 0,
  },
  containerFlexBox: {
    justifyContent: "flex-end",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  savingsPosition: {
    width: 109,
    marginTop: -10.9,
    height: 22,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.normal,
    fontSize: FontSize.normal_size,
    top: "50%",
    letterSpacing: 0,
    left: "50%",
    position: "absolute",
  },
  amLayout: {
    width: 120,
    height: 19,
  },
  endClr: {
    color: Color.black,
    textAlign: "left",
    letterSpacing: 0,
  },
  orItemLayout: {
    height: 0,
    width: 120,
  },
  iconLayout1: {
    height: 24,
    width: 24,
  },
  dashboard: {
    marginTop: 8,
    textAlign: "center",
    fontFamily: FontFamily.openSansSemiBold,
    fontSize: FontSize.normal2_size,
    fontWeight: "600",
  },
  vectorParent: {
    width: 70,
    justifyContent: "center",
    alignItems: "center",
  },
  notification: {
    color: Color.colorDarkslategray,
    marginTop: 8,
    textAlign: "center",
    fontFamily: FontFamily.openSansSemiBold,
    fontWeight: "600",
    letterSpacing: 0,
    fontSize: FontSize.normal2_size,
  },
  vectorWrapper: {
    paddingBottom: Padding.p_5xl,
    justifyContent: "center",
    flexDirection: "row",
  },
  retailers: {
    color: Color.colorSaddlebrown_100,
    marginTop: 8,
    textAlign: "center",
    letterSpacing: 0,
    fontFamily: FontFamily.openSansSemiBold,
    fontSize: FontSize.normal2_size,
  },
  frameItem: {
    marginLeft: -12,
    borderTopLeftRadius: Border.br_8xs,
    borderTopRightRadius: Border.br_8xs,
    backgroundColor: Color.transprent,
    display: "none",
    top: "50%",
    marginTop: -12,
    height: 24,
    width: 24,
    left: "50%",
  },
  vectorIcon2: {
    width: 19,
  },
  menuIcons: {
    bottom: 35,
    borderTopLeftRadius: Border.br_base,
    borderTopRightRadius: Border.br_base,
    borderTopWidth: 1,
    paddingHorizontal: Padding.p_base,
    width: 375,
    borderColor: Color.black,
    borderStyle: "solid",
    paddingVertical: Padding.p_5xs,
    justifyContent: "space-between",
    alignItems: "center",
    left: "50%",
    marginLeft: -187.5,
    position: "absolute",
    backgroundColor: Color.fontWhite,
  },
  shape: {
    marginLeft: -67.5,
    bottom: 9,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorDarkslategray,
    width: 135,
    height: 5,
    left: "50%",
    position: "absolute",
  },
  homeIndicator: {
    right: "0%",
    bottom: 0,
    left: "0%",
    height: 35,
    position: "absolute",
    width: "100%",
  },
  logoChild: {
    backgroundColor: Color.colorGainsboro,
    top: 0,
    left: 0,
    height: 32,
    width: 32,
  },
  asset91: {
    marginTop: -27,
    marginLeft: -22,
    width: 44,
    height: 58,
    top: "50%",
    left: "50%",
    position: "absolute",
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
    letterSpacing: 0,
    fontFamily: FontFamily.normal,
    fontSize: FontSize.normal_size,
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
  searchIcon: {
    alignItems: "flex-end",
    padding: Padding.p_3xs,
    justifyContent: "center",
  },
  searchParent: {
    paddingLeft: Padding.p_5xs,
    borderWidth: 1,
    borderRadius: Border.br_5xs,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderColor: Color.black,
    borderStyle: "solid",
    backgroundColor: Color.fontWhite,
  },
  iconChildShadowBox: {
    elevation: 4,
    shadowRadius: 4,
    shadowColor: "rgba(0, 0, 0, 0.4)",
    borderRadius: Border.br_8xs,
    marginLeft: -16,
    marginTop: -16,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    display: "none",
    backgroundColor: Color.transprent,
    top: "50%",
    height: 32,
    width: 32,
    left: "50%",
    position: "absolute",
  },
  cartIcon: {
    width: 21,
  },
  text: {
    color: Color.fontWhite,
    textAlign: "center",
    letterSpacing: 0,
    fontFamily: FontFamily.openSansSemiBold,
    fontSize: FontSize.normal2_size,
  },
  wrapper: {
    top: -4,
    left: 14,
    borderRadius: Border.br_mini,
    backgroundColor: Color.red,
    paddingHorizontal: Padding.p_8xs_5,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  qrScanIcon: {
    marginLeft: 8,
  },
  vectorIcon3: {
    marginLeft: -3,
    width: 6,
    top: "50%",
    marginTop: -12,
    height: 24,
    left: "50%",
    position: "absolute",
  },
  statusBar: {
    top: 44,
    paddingVertical: Padding.p_9xs,
    shadowOpacity: 1,
    elevation: 6,
    shadowRadius: 6,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    left: 0,
    paddingHorizontal: Padding.p_base,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    width: 375,
    position: "absolute",
    backgroundColor: Color.fontWhite,
  },
  statusBarChild: {
    left: 0,
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
    left: 0,
    top: "50%",
    textAlign: "center",
    fontWeight: "600",
    color: Color.colorBlack,
    position: "absolute",
  },
  time: {
    top: 8,
    left: 21,
    width: 56,
    height: 23,
    position: "absolute",
  },
  statusBar1: {
    left: "50%",
    marginLeft: -187.5,
    height: 44,
  },
  shopName: {
    textAlign: "center",
  },
  shopNameWrapper: {
    marginLeft: -50.5,
  },
  shapeIcon: {
    width: 12,
    height: 20,
  },
  shapeWrapper: {
    marginTop: -9.5,
    marginLeft: -177.5,
    paddingVertical: 0,
    position: "absolute",
    top: "50%",
    flexDirection: "row",
    left: "50%",
  },
  frameParent1: {
    width: 148,
    height: 25,
  },
  retailerName: {
    height: 22,
    display: "flex",
    alignItems: "center",
  },
  pototoSama: {
    width: 151,
    marginLeft: 4,
    height: 19,
    textAlign: "left",
    fontFamily: FontFamily.normal,
    fontSize: FontSize.normal_size,
    color: Color.colorBlack,
    letterSpacing: 0,
  },
  retailerNameParent: {
    alignItems: "center",
  },
  location: {
    height: 22,
  },
  manipurImphalEast: {
    width: 165,
    height: 68,
    marginLeft: 4,
    textAlign: "left",
    color: Color.colorBlack,
    letterSpacing: 0,
  },
  locationParent: {
    marginTop: 8,
  },
  hisCustomer: {
    textAlign: "center",
    fontFamily: FontFamily.openSansSemiBold,
    fontSize: FontSize.normal2_size,
    fontWeight: "600",
  },
  k: {
    marginTop: 4,
    textAlign: "left",
  },
  hisCustomerParent: {
    paddingHorizontal: Padding.p_7xs,
  },
  productsSoldParent: {
    paddingHorizontal: Padding.p_6xs,
  },
  generosityTotalParent: {
    paddingHorizontal: Padding.p_5xs,
  },
  frameParent3: {
    marginTop: 8,
    justifyContent: "space-between",
    width: 319,
    alignItems: "center",
  },
  frameParent2: {
    marginTop: 16,
    alignItems: "center",
  },
  vectorIcon4: {
    width: 16,
    height: 16,
  },
  scanQr: {
    marginLeft: 4,
    textAlign: "center",
    color: Color.colorBlack,
    letterSpacing: 0,
  },
  vectorIcon5: {
    height: 14,
    width: 16,
  },
  vectorContainer: {
    marginLeft: 8,
  },
  frameParent4: {
    borderTopLeftRadius: Border.br_5xs,
    borderTopRightRadius: Border.br_5xs,
    paddingHorizontal: Padding.p_lg,
    justifyContent: "center",
    paddingVertical: Padding.p_5xs,
    flexDirection: "row",
  },
  frameView: {
    paddingTop: Padding.p_5xs,
    borderColor: Color.theme12,
    width: 355,
    borderRadius: Border.br_base,
    borderWidth: 1,
    alignItems: "center",
    borderStyle: "solid",
    overflow: "hidden",
    backgroundColor: Color.fontWhite,
  },
  purchaseHistoryWrapper: {
    marginLeft: -74.5,
  },
  text1: {
    left: 268,
    width: 35,
    marginTop: -9.4,
    top: "50%",
    position: "absolute",
    height: 19,
    textAlign: "left",
  },
  totalNumberOf: {
    width: 184,
  },
  text2: {
    left: 9,
    width: 71,
    marginTop: -9.4,
    top: "50%",
    position: "absolute",
    height: 19,
    textAlign: "left",
  },
  text3: {
    marginTop: -9.4,
    top: "50%",
    position: "absolute",
    left: 0,
  },
  group: {
    marginTop: -8.9,
    left: 223,
    width: 80,
    height: 19,
    top: "50%",
    position: "absolute",
  },
  totalAmount: {
    width: 97,
  },
  groupContainer: {
    marginTop: 8,
  },
  text5: {
    width: 42,
    height: 19,
    textAlign: "left",
  },
  container: {
    top: 0,
    left: 0,
  },
  frameWrapper: {
    left: 251,
    width: 51,
    top: 2,
    height: 19,
    position: "absolute",
  },
  savings: {
    marginLeft: -151.15,
  },
  groupView: {
    width: 302,
    height: 22,
    marginTop: 8,
  },
  am: {
    textAlign: "right",
    fontSize: FontSize.normal1_size,
    fontFamily: FontFamily.normal,
    color: Color.colorDarkslategray,
    letterSpacing: 0,
    marginTop: -9.4,
    top: "50%",
    position: "absolute",
    left: 0,
  },
  groupWrapper: {
    left: 171,
    top: 2,
  },
  dateTime: {
    marginLeft: -145.65,
  },
  frameParent8: {
    width: 291,
    height: 22,
    marginTop: 8,
  },
  groupParent: {
    top: 0,
  },
  groupParent1: {
    top: 159,
  },
  end: {
    marginLeft: 4,
    textAlign: "left",
    fontFamily: FontFamily.openSansSemiBold,
    fontSize: FontSize.normal2_size,
    fontWeight: "600",
  },
  orItem: {
    marginLeft: 4,
  },
  or: {
    top: 319,
    left: 11,
    width: 318,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  frameParent7: {
    height: 335,
    width: 339,
    marginTop: 16,
  },
  frameParent5: {
    height: 486,
    paddingTop: Padding.p_base,
    paddingBottom: Padding.p_5xs,
    paddingHorizontal: Padding.p_5xs,
    borderRadius: Border.br_base,
  },
  frameContainer: {
    top: 119,
    left: 10,
    height: 565,
    borderRadius: Border.br_base,
    shadowOpacity: 1,
    elevation: 6,
    shadowRadius: 6,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    position: "absolute",
  },
  customerSellerPagePruchase: {
    borderRadius: Border.br_6xl,
    flex: 1,
    height: 811,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.fontWhite,
  },
});

export default CustomerSellerPagePruchase;
