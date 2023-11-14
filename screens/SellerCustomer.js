import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Padding, Color, FontSize, Border, FontFamily } from "../GlobalStyles";

const SellerCustomer = () => {
  return (
    <View style={styles.sellerCustomer}>
      <View style={[styles.all, styles.allPosition]}>
        <View>
          <View style={styles.statusBar}>
            <View style={[styles.statusBarChild, styles.childPosition]} />
            <View style={styles.connections}>
              <Image
                style={styles.cellularConnectionIcon}
                contentFit="cover"
                source={require("../assets/cellular-connection.png")}
              />
              <Image
                style={styles.wifiIcon}
                contentFit="cover"
                source={require("../assets/wifi1.png")}
              />
              <View style={styles.battery}>
                <View style={[styles.border, styles.borderLayout]} />
                <Image
                  style={[styles.capIcon, styles.capIconLayout]}
                  contentFit="cover"
                  source={require("../assets/cap.png")}
                />
                <View style={styles.capacity} />
              </View>
            </View>
            <View style={styles.time}>
              <Text style={styles.time1}>9:27</Text>
            </View>
          </View>
          <View style={[styles.statusBar1, styles.filterFlexBox]}>
            <View style={styles.leftSide}>
              <View style={styles.logo}>
                <View style={styles.logoChild} />
                <Image
                  style={[styles.asset91, styles.noPosition]}
                  contentFit="cover"
                  source={require("../assets/asset-9-1.png")}
                />
              </View>
              <View
                style={[styles.balanceSection, styles.balanceSectionSpaceBlock]}
              >
                <View style={styles.upperSection}>
                  <Text style={[styles.balance, styles.balanceTypo]}>
                    Balance
                  </Text>
                  <View
                    style={[styles.depositButton, styles.depositButtonLayout]}
                  >
                    <Text style={[styles.deposit, styles.balanceTypo]}>
                      Deposit
                    </Text>
                    <Image
                      style={styles.depositIcon}
                      contentFit="cover"
                      source={require("../assets/deposit-icon.png")}
                    />
                  </View>
                </View>
                <Text style={[styles.text, styles.textFlexBox]}>
                  ₹1,00,00,000
                </Text>
              </View>
            </View>
            <View style={styles.leftSide}>
              <Image
                style={styles.iconLayout1}
                contentFit="cover"
                source={require("../assets/add.png")}
              />
              <View style={[styles.qrScanIcon, styles.iconLayout1]}>
                <View style={styles.iconChildShadowBox} />
                <Image
                  style={[styles.cartIcon, styles.iconPosition]}
                  contentFit="cover"
                  source={require("../assets/cart-icon.png")}
                />
                <View style={[styles.wrapper, styles.filterSpaceBlock]}>
                  <Text style={[styles.text1, styles.text1Typo]}>9+</Text>
                </View>
              </View>
              <View style={[styles.qrScanIcon, styles.iconLayout1]}>
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
          <View style={[styles.no, styles.noPosition]}>
            <Image
              style={styles.noCustomer1}
              contentFit="cover"
              source={require("../assets/no-customer-1.png")}
            />
            <Text style={[styles.noCustomerToday, styles.dashboardSpaceBlock]}>
              No Customer Today.
            </Text>
          </View>
          <View style={[styles.seachBar, styles.seachBarLayout]}>
            <View
              style={[
                styles.searchForProductsOrCategorParent,
                styles.seachBarLayout,
              ]}
            >
              <Text style={[styles.searchForProducts, styles.category1Typo]}>
                Search Customer by ID/Phone number
              </Text>
              <View style={styles.iconLayout1}>
                <View
                  style={[styles.searchIconChild, styles.frameInnerPosition]}
                />
                <Image
                  style={[styles.iconlyboldsearch, styles.capIconLayout]}
                  contentFit="cover"
                  source={require("../assets/iconlyboldsearch.png")}
                />
              </View>
            </View>
          </View>
          <View style={[styles.filter, styles.filterSpaceBlock]}>
            <View style={styles.category}>
              <Text style={[styles.category1, styles.category1Typo]}>
                Category
              </Text>
              <Image
                style={styles.shapeIcon}
                contentFit="cover"
                source={require("../assets/shape1.png")}
              />
            </View>
            <View style={styles.filterIcon}>
              <View style={[styles.groupParent, styles.vectorIconPosition]}>
                <Image
                  style={styles.groupIcon}
                  contentFit="cover"
                  source={require("../assets/group.png")}
                />
                <View style={[styles.frameChild, styles.menuIconsBorder]} />
                <Text style={[styles.filter1, styles.balanceTypo]}>Filter</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.nag}>
          <View style={[styles.menuIcons, styles.menuIconsBorder]}>
            <View style={styles.vectorParent}>
              <Image
                style={styles.iconLayout}
                contentFit="cover"
                source={require("../assets/vector4.png")}
              />
              <Text style={[styles.dashboard, styles.dashboardSpaceBlock]}>
                Dashboard
              </Text>
            </View>
            <View style={styles.vectorParent}>
              <Image
                style={styles.iconLayout}
                contentFit="cover"
                source={require("../assets/notification2.png")}
              />
              <Text style={[styles.dashboard, styles.dashboardSpaceBlock]}>
                Notification
              </Text>
            </View>
            <View style={styles.vectorWrapper}>
              <Image
                style={styles.iconLayout1}
                contentFit="cover"
                source={require("../assets/vector2.png")}
              />
            </View>
            <View style={styles.vectorParent}>
              <View style={styles.iconLayout}>
                <View style={[styles.frameInner, styles.iconLayout]} />
                <Image
                  style={[styles.vectorIcon3, styles.iconPosition]}
                  contentFit="cover"
                  source={require("../assets/vector.png")}
                />
              </View>
              <Text style={[styles.dashboard, styles.dashboardSpaceBlock]}>
                Profile
              </Text>
            </View>
          </View>
          <View style={styles.homeIndicator}>
            <View style={[styles.shape, styles.allPosition]} />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  allPosition: {
    left: "50%",
    position: "absolute",
  },
  childPosition: {
    top: 0,
    left: 0,
  },
  borderLayout: {
    borderWidth: 1,
    position: "absolute",
  },
  capIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  filterFlexBox: {
    paddingHorizontal: Padding.p_base,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  noPosition: {
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  balanceSectionSpaceBlock: {
    paddingBottom: Padding.p_9xs,
    backgroundColor: Color.fontWhite,
  },
  balanceTypo: {
    textAlign: "left",
    fontSize: FontSize.normal2_size,
    letterSpacing: 0,
  },
  depositButtonLayout: {
    borderTopRightRadius: Border.br_9xs,
    borderWidth: 1,
  },
  textFlexBox: {
    display: "flex",
    textAlign: "left",
  },
  iconLayout1: {
    height: 32,
    width: 32,
  },
  iconPosition: {
    marginLeft: -10,
    height: 24,
    marginTop: -12,
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  filterSpaceBlock: {
    paddingVertical: 0,
    alignItems: "center",
    position: "absolute",
  },
  text1Typo: {
    fontFamily: FontFamily.openSansSemiBold,
    fontWeight: "600",
  },
  vectorIconPosition: {
    marginTop: -12,
    top: "50%",
    left: "50%",
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
  dashboardSpaceBlock: {
    marginTop: 8,
    textAlign: "center",
    letterSpacing: 0,
  },
  seachBarLayout: {
    width: 335,
    borderRadius: Border.br_5xs,
    position: "absolute",
  },
  category1Typo: {
    fontSize: FontSize.normal_size,
    fontFamily: FontFamily.normal,
    letterSpacing: 0,
  },
  frameInnerPosition: {
    borderTopRightRadius: Border.br_8xs,
    backgroundColor: Color.transprent,
    display: "none",
    position: "absolute",
  },
  menuIconsBorder: {
    borderColor: Color.black,
    borderStyle: "solid",
  },
  iconLayout: {
    width: 24,
    height: 24,
  },
  statusBarChild: {
    left: 0,
    height: 44,
    width: 375,
    position: "absolute",
    backgroundColor: Color.fontWhite,
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
    borderStyle: "solid",
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
    top: 15,
    right: 14,
    flexDirection: "row",
    alignItems: "center",
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
  statusBar: {
    height: 44,
    width: 375,
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
  },
  logo: {
    width: 48,
    height: 48,
  },
  balance: {
    color: Color.black,
    fontFamily: FontFamily.openSansSemiBold,
    fontWeight: "600",
  },
  deposit: {
    color: Color.colorDarkslategray,
    fontFamily: FontFamily.normal,
  },
  depositIcon: {
    marginLeft: 4,
    width: 12,
    height: 12,
  },
  depositButton: {
    borderBottomRightRadius: Border.br_9xs,
    borderBottomLeftRadius: Border.br_9xs,
    backgroundColor: Color.theme12,
    borderColor: Color.theme12,
    padding: Padding.p_9xs,
    marginLeft: 3,
    justifyContent: "center",
    borderStyle: "solid",
    flexDirection: "row",
    alignItems: "center",
  },
  upperSection: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    fontSize: FontSize.normal1_size,
    textTransform: "capitalize",
    fontWeight: "700",
    fontFamily: FontFamily.bold,
    alignItems: "flex-end",
    width: 108,
    height: 20,
    color: Color.colorBlack,
    letterSpacing: 0,
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
    marginLeft: -16,
    marginTop: -16,
    borderRadius: Border.br_8xs,
    display: "none",
    height: 32,
    width: 32,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  cartIcon: {
    height: 24,
    width: 21,
  },
  text1: {
    color: Color.fontWhite,
    fontSize: FontSize.normal2_size,
    fontFamily: FontFamily.openSansSemiBold,
    textAlign: "center",
    letterSpacing: 0,
  },
  wrapper: {
    top: -4,
    left: 14,
    borderRadius: Border.br_mini,
    backgroundColor: Color.red,
    paddingHorizontal: Padding.p_8xs_5,
    justifyContent: "center",
    overflow: "hidden",
  },
  qrScanIcon: {
    marginLeft: 8,
  },
  vectorIcon: {
    marginLeft: -3,
    width: 6,
    height: 24,
    position: "absolute",
  },
  statusBar1: {
    paddingVertical: Padding.p_9xs,
    shadowOpacity: 1,
    elevation: 6,
    shadowRadius: 6,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    width: 375,
    alignItems: "center",
    backgroundColor: Color.fontWhite,
  },
  noCustomer1: {
    width: 200,
    height: 200,
  },
  noCustomerToday: {
    fontSize: FontSize.bold_size,
    fontFamily: FontFamily.normal,
    color: Color.black,
  },
  no: {
    marginTop: -88,
    marginLeft: -109.5,
    alignItems: "center",
  },
  searchForProducts: {
    width: 285,
    display: "flex",
    textAlign: "left",
    color: Color.black,
    alignItems: "center",
  },
  searchIconChild: {
    borderBottomRightRadius: Border.br_8xs,
    height: 32,
    width: 32,
    left: 0,
    top: 0,
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
    paddingBottom: Padding.p_9xs,
    backgroundColor: Color.fontWhite,
    justifyContent: "space-between",
    width: 335,
    borderRadius: Border.br_5xs,
    top: "50%",
    flexDirection: "row",
    alignItems: "center",
    left: "50%",
  },
  seachBar: {
    top: 16,
    left: 12,
    height: 44,
    overflow: "hidden",
  },
  category1: {
    textAlign: "center",
    color: Color.colorBlack,
  },
  shapeIcon: {
    height: 7,
    marginLeft: 4,
    width: 12,
  },
  category: {
    borderColor: Color.colorSaddlebrown_100,
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: Padding.p_12xs,
    borderRadius: Border.br_8xs,
    justifyContent: "center",
    borderWidth: 1,
    borderStyle: "solid",
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
  },
  filter1: {
    marginLeft: 4,
    fontFamily: FontFamily.normal,
    color: Color.colorBlack,
  },
  groupParent: {
    marginLeft: -27.5,
    borderRadius: Border.br_9xs,
    paddingHorizontal: Padding.p_9xs,
    paddingVertical: Padding.p_11xs,
    borderColor: Color.black,
    borderStyle: "solid",
    borderWidth: 1,
    position: "absolute",
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
    backgroundColor: Color.fontWhite,
  },
  filterIcon: {
    width: 55,
    height: 24,
  },
  filter: {
    top: 74,
    width: 359,
    paddingHorizontal: Padding.p_base,
    justifyContent: "space-between",
    flexDirection: "row",
    left: 0,
  },
  body: {
    borderRadius: Border.br_base,
    backgroundColor: Color.theme13,
    height: 560,
    marginTop: 16,
    width: 359,
    overflow: "hidden",
  },
  dashboard: {
    fontFamily: FontFamily.openSansSemiBold,
    fontWeight: "600",
    fontSize: FontSize.normal2_size,
    color: Color.colorBlack,
  },
  vectorParent: {
    width: 70,
    justifyContent: "center",
    alignItems: "center",
  },
  vectorWrapper: {
    paddingBottom: Padding.p_5xl,
    justifyContent: "center",
    flexDirection: "row",
  },
  frameInner: {
    marginLeft: -12,
    borderTopLeftRadius: Border.br_8xs,
    borderTopRightRadius: Border.br_8xs,
    backgroundColor: Color.transprent,
    display: "none",
    position: "absolute",
    marginTop: -12,
    top: "50%",
    left: "50%",
  },
  vectorIcon3: {
    width: 19,
    height: 24,
  },
  menuIcons: {
    borderTopLeftRadius: Border.br_base,
    borderTopRightRadius: Border.br_base,
    borderTopWidth: 1,
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_base,
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
  },
  homeIndicator: {
    height: 34,
    width: 375,
  },
  nag: {
    marginTop: 16,
  },
  all: {
    marginLeft: -187.5,
    bottom: 14,
    alignItems: "center",
  },
  sellerCustomer: {
    borderRadius: Border.br_6xl,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
    backgroundColor: Color.fontWhite,
  },
});

export default SellerCustomer;
