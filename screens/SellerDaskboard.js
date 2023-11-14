import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Padding, Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const SellerDaskboard = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.sellerDaskboard}>
      <View style={[styles.statusBar, styles.nagPosition]}>
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
            <View style={styles.border} />
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
              style={[styles.asset91, styles.shapePosition]}
              contentFit="cover"
              source={require("../assets/asset-9-1.png")}
            />
          </View>
          <View
            style={[styles.balanceSection, styles.balanceSectionSpaceBlock]}
          >
            <View style={styles.upperSection}>
              <Text style={[styles.balance, styles.text1Typo]}>Balance</Text>
              <View style={styles.depositButton}>
                <Text style={[styles.deposit, styles.depositTypo]}>
                  Deposit
                </Text>
                <Image
                  style={styles.depositIcon}
                  contentFit="cover"
                  source={require("../assets/deposit-icon.png")}
                />
              </View>
            </View>
            <Text style={[styles.text, styles.textFlexBox]}>₹1,00,00,000</Text>
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
            <View style={styles.wrapper}>
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
      <View style={styles.body}>
        <View style={[styles.seachBar, styles.seachBarLayout]}>
          <View
            style={[
              styles.searchForProductsOrCategorParent,
              styles.seachBarLayout,
            ]}
          >
            <Text style={[styles.searchForProducts, styles.locationTypo]}>
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
        <View style={[styles.filter, styles.listSpaceBlock]}>
          <View style={styles.component7}>
            <Text style={[styles.location, styles.locationTypo]}>Location</Text>
            <Image
              style={styles.shapeIcon}
              contentFit="cover"
              source={require("../assets/shape3.png")}
            />
          </View>
          <View style={styles.filterIcon}>
            <View style={styles.groupParent}>
              <Image
                style={styles.groupIcon}
                contentFit="cover"
                source={require("../assets/group1.png")}
              />
              <View style={[styles.frameChild, styles.menuIconsBorder]} />
              <Text style={[styles.filter1, styles.depositTypo]}>Filter</Text>
            </View>
          </View>
        </View>
        <View style={[styles.list, styles.listSpaceBlock]}>
          <View style={[styles.heading, styles.headingLayout]}>
            <Text style={[styles.balance, styles.text1Typo]}>
              Recent Customers
            </Text>
          </View>
          <View style={[styles.controlsChipsRounded, styles.heading1FlexBox]}>
            <Text style={[styles.location, styles.locationTypo]}>
              Customer Name (NickName)
            </Text>
          </View>
          <View style={[styles.controlsChipsRounded, styles.heading1FlexBox]}>
            <Text style={[styles.location, styles.locationTypo]}>
              Customer Name (NickName)
            </Text>
          </View>
          <View style={[styles.controlsChipsRounded, styles.heading1FlexBox]}>
            <Text style={[styles.location, styles.locationTypo]}>
              Customer Name (NickName)
            </Text>
          </View>
          <View style={[styles.controlsChipsRounded, styles.heading1FlexBox]}>
            <Text style={[styles.location, styles.locationTypo]}>
              Customer Name (NickName)
            </Text>
          </View>
          <View style={[styles.controlsChipsRounded, styles.heading1FlexBox]}>
            <Text style={[styles.location, styles.locationTypo]}>
              Customer Name (NickName)
            </Text>
          </View>
          <View style={[styles.heading1, styles.heading1FlexBox]}>
            <Text style={[styles.balance, styles.text1Typo]}>
              Your Customers
            </Text>
          </View>
          <View style={[styles.controlsChipsRounded, styles.heading1FlexBox]}>
            <Text style={[styles.location, styles.locationTypo]}>
              Customer Name (NickName)
            </Text>
          </View>
          <View style={[styles.controlsChipsRounded, styles.heading1FlexBox]}>
            <Text style={[styles.location, styles.locationTypo]}>
              Customer Name (NickName)
            </Text>
          </View>
          <View style={[styles.controlsChipsRounded, styles.heading1FlexBox]}>
            <Text style={[styles.location, styles.locationTypo]}>
              Customer Name (NickName)
            </Text>
          </View>
          <View style={[styles.controlsChipsRounded, styles.heading1FlexBox]}>
            <Text style={[styles.location, styles.locationTypo]}>
              Customer Name (NickName)
            </Text>
          </View>
        </View>
      </View>
      <Pressable
        style={styles.productListMaximize}
        onPress={() => navigation.navigate("SellerDaskboardItemUnhide")}
      >
        <Text style={[styles.selectProducts, styles.textTypo]}>
          Select Products
        </Text>
        <Image
          style={styles.vectorIcon1}
          contentFit="cover"
          source={require("../assets/vector23.png")}
        />
      </Pressable>
      <View style={[styles.nag, styles.nagPosition]}>
        <View style={styles.homeIndicator}>
          <View style={[styles.shape, styles.shapePosition]} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  nagPosition: {
    left: 0,
    position: "absolute",
  },
  childPosition: {
    top: 0,
    left: 0,
  },
  capIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  filterFlexBox: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  shapePosition: {
    left: "50%",
    position: "absolute",
  },
  balanceSectionSpaceBlock: {
    paddingBottom: Padding.p_9xs,
    backgroundColor: Color.fontWhite,
  },
  text1Typo: {
    fontFamily: FontFamily.openSansSemiBold,
    fontSize: FontSize.normal2_size,
    fontWeight: "600",
    letterSpacing: 0,
  },
  depositTypo: {
    fontFamily: FontFamily.normal,
    textAlign: "left",
    fontSize: FontSize.normal2_size,
    letterSpacing: 0,
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
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  vectorIconPosition: {
    marginTop: -12,
    left: "50%",
    top: "50%",
  },
  seachBarLayout: {
    width: 335,
    borderRadius: Border.br_5xs,
  },
  locationTypo: {
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
  listSpaceBlock: {
    marginTop: 16,
    alignItems: "center",
  },
  menuIconsBorder: {
    borderColor: Color.black,
    borderStyle: "solid",
  },
  headingLayout: {
    borderBottomWidth: 1,
    borderColor: Color.transprent,
    width: 359,
    paddingVertical: Padding.p_11xs,
  },
  heading1FlexBox: {
    marginTop: 10,
    borderStyle: "solid",
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
  textTypo: {
    fontFamily: FontFamily.bold,
    fontWeight: "700",
    color: Color.colorBlack,
    letterSpacing: 0,
  },
  dashboardTypo: {
    marginTop: 8,
    fontFamily: FontFamily.openSansSemiBold,
    fontSize: FontSize.normal2_size,
    textAlign: "center",
    fontWeight: "600",
    letterSpacing: 0,
  },
  iconLayout: {
    width: 24,
    height: 24,
  },
  statusBarChild: {
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
    top: 15,
    right: 14,
    alignItems: "center",
    flexDirection: "row",
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
    top: 1,
    height: 44,
    width: 375,
  },
  logoChild: {
    backgroundColor: Color.colorGainsboro,
    display: "none",
    height: 32,
    width: 32,
    top: 0,
    left: 0,
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
  balance: {
    textAlign: "left",
    color: Color.black,
  },
  deposit: {
    color: Color.colorDarkslategray,
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
    padding: Padding.p_9xs,
    marginLeft: 3,
    justifyContent: "center",
    borderColor: Color.theme12,
    borderTopRightRadius: Border.br_9xs,
    borderWidth: 1,
    borderStyle: "solid",
    alignItems: "center",
    flexDirection: "row",
  },
  upperSection: {
    alignItems: "center",
    flexDirection: "row",
  },
  text: {
    fontSize: FontSize.normal1_size,
    textTransform: "capitalize",
    alignItems: "flex-end",
    width: 108,
    height: 20,
    fontFamily: FontFamily.bold,
    fontWeight: "700",
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
    paddingBottom: Padding.p_9xs,
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
    height: 24,
    width: 21,
  },
  text1: {
    color: Color.fontWhite,
    textAlign: "center",
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
    position: "absolute",
  },
  statusBar1: {
    top: 45,
    paddingVertical: Padding.p_9xs,
    paddingHorizontal: Padding.p_base,
    shadowOpacity: 1,
    elevation: 6,
    shadowRadius: 6,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    justifyContent: "space-between",
    alignItems: "center",
    width: 375,
    left: 0,
    position: "absolute",
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
    borderBottomRightRadius: Border.br_8xs,
    height: 32,
    width: 32,
    top: 0,
    left: 0,
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
    left: "50%",
    position: "absolute",
    justifyContent: "space-between",
    flexDirection: "row",
    top: "50%",
    alignItems: "center",
  },
  seachBar: {
    height: 44,
    overflow: "hidden",
  },
  location: {
    textAlign: "center",
    color: Color.colorBlack,
  },
  shapeIcon: {
    height: 7,
    marginLeft: 4,
    width: 12,
  },
  component7: {
    borderColor: Color.colorSaddlebrown_100,
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: Padding.p_12xs,
    borderRadius: Border.br_8xs,
    justifyContent: "center",
    borderWidth: 1,
    borderStyle: "solid",
    alignItems: "center",
    flexDirection: "row",
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
    color: Color.colorBlack,
  },
  groupParent: {
    marginLeft: -27.5,
    borderRadius: Border.br_9xs,
    paddingHorizontal: Padding.p_9xs,
    paddingVertical: Padding.p_11xs,
    marginTop: -12,
    borderColor: Color.black,
    left: "50%",
    top: "50%",
    borderWidth: 1,
    borderStyle: "solid",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
    overflow: "hidden",
    backgroundColor: Color.fontWhite,
  },
  filterIcon: {
    width: 55,
    height: 24,
  },
  filter: {
    width: 358,
    paddingVertical: 0,
    paddingHorizontal: Padding.p_base,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  heading: {
    paddingHorizontal: Padding.p_mini,
    width: 359,
    borderStyle: "solid",
    borderBottomWidth: 1,
    borderColor: Color.transprent,
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
  controlsChipsRounded: {
    width: 327,
    paddingHorizontal: Padding.p_48xl,
    paddingVertical: Padding.p_4xs,
    borderRadius: Border.br_base,
    marginTop: 10,
    borderColor: Color.theme12,
    borderWidth: 1,
    backgroundColor: Color.fontWhite,
  },
  heading1: {
    width: 359,
    borderBottomWidth: 1,
    borderColor: Color.transprent,
    paddingVertical: Padding.p_11xs,
    paddingHorizontal: Padding.p_base,
  },
  list: {
    height: 376,
  },
  body: {
    top: 117,
    paddingHorizontal: 0,
    paddingVertical: Padding.p_base,
    backgroundColor: Color.theme13,
    left: 8,
    borderRadius: Border.br_base,
    shadowOpacity: 1,
    elevation: 6,
    shadowRadius: 6,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    alignItems: "center",
    position: "absolute",
    overflow: "hidden",
  },
  selectProducts: {
    fontSize: FontSize.bold1_size,
    textAlign: "left",
  },
  vectorIcon1: {
    width: 16,
    height: 11,
  },
  productListMaximize: {
    top: 641,
    paddingLeft: Padding.p_7xl,
    paddingTop: Padding.p_xs,
    paddingRight: Padding.p_base,
    paddingBottom: Padding.p_xs,
    width: 359,
    borderRadius: Border.br_5xs,
    backgroundColor: Color.theme13,
    left: 8,
    justifyContent: "space-between",
    shadowOpacity: 1,
    elevation: 6,
    shadowRadius: 6,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
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
    top: 698,
  },
  sellerDaskboard: {
    borderRadius: Border.br_6xl,
    flex: 1,
    width: "100%",
    height: 804,
    overflow: "hidden",
    backgroundColor: Color.fontWhite,
  },
});

export default SellerDaskboard;
