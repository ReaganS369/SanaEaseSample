import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const SellerNotification = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.sellerNotification}>
      <View style={[styles.all, styles.allPosition]}>
        <View>
          <View style={styles.statusLayout}>
            <View style={[styles.statusBarChild, styles.statusLayout]} />
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
          <View style={styles.statusBar1}>
            <View style={styles.leftSide}>
              <View style={styles.logo}>
                <View style={styles.logoChild} />
                <Image
                  style={styles.asset91}
                  contentFit="cover"
                  source={require("../assets/asset-9-1.png")}
                />
              </View>
            </View>
            <View style={styles.rightSide}>
              <View style={[styles.seachBar, styles.seachBarFlexBox]}>
                <Text style={[styles.searchHere, styles.searchHereTypo]}>
                  Search here
                </Text>
                <View style={styles.iconLayout1}>
                  <View
                    style={[styles.searchIconChild, styles.iconChildLayout]}
                  />
                  <Image
                    style={[styles.iconlyboldsearch, styles.capIconLayout]}
                    contentFit="cover"
                    source={require("../assets/iconlyboldsearch.png")}
                  />
                </View>
              </View>
              <Image
                style={[styles.qrScanIcon, styles.iconLayout1]}
                contentFit="cover"
                source={require("../assets/property-1default.png")}
              />
              <View style={[styles.qrScanIcon, styles.iconLayout1]}>
                <Image
                  style={[styles.vectorIcon, styles.vectorIconPosition]}
                  contentFit="cover"
                  source={require("../assets/vector10.png")}
                />
                <View
                  style={[styles.dotMoreIconChild, styles.iconChildLayout]}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.body}>
          <Text style={[styles.notifications, styles.yourTypo]}>
            Notifications
          </Text>
          <View style={styles.nBoxParent}>
            <Pressable
              style={styles.nBox}
              onPress={() => navigation.navigate("SellerDaskboardWithReqz")}
            >
              <View style={[styles.nBoxChild, styles.nBoxChildBorder]} />
              <View style={[styles.n1, styles.n1Position]}>
                <Text style={[styles.dAgo, styles.agoPosition]}>
                  Today at 09:03 AM
                </Text>
                <Text style={[styles.customerNameSends, styles.n1Layout]}>
                  Customer Name sends a product request
                </Text>
              </View>
            </Pressable>
            <View
              style={[
                styles.yourProductYongchakIsOutParent,
                styles.nBox1SpaceBlock,
              ]}
            >
              <Text style={[styles.yourProductYongchak, styles.yourTypo]}>
                Your Product “Yongchak” is out of stock
              </Text>
              <Text style={styles.dAgo1}>Aug 12, 2020 at 12:08 PM</Text>
            </View>
            <Pressable
              style={[
                styles.tombungWantsToRefundHisPrParent,
                styles.yourParentSpaceBlock,
              ]}
              onPress={() => navigation.navigate("SellerCustomerProductRefund")}
            >
              <Text style={[styles.yourProductYongchak, styles.yourTypo]}>
                Tombung wants to refund his product...
              </Text>
              <Text style={styles.dAgo1}>Aug 12, 2020 at 12:08 PM</Text>
            </Pressable>
            <Pressable
              style={[styles.nBox1, styles.nBox1SpaceBlock]}
              onPress={() => navigation.navigate("SellerNotificationPressed")}
            >
              <View style={[styles.nBoxItem, styles.nBoxItemBorder]} />
              <View style={[styles.n11, styles.n11Layout]}>
                <Text style={[styles.dAgo3, styles.agoPosition]}>
                  Aug 12, 2020 at 12:08 PM
                </Text>
                <Text
                  style={[styles.mrChowlouPurchased, styles.n11Layout]}
                >{`Mr. Chowlou purchased 10 product a total.. 
etc.. `}</Text>
              </View>
            </Pressable>
            <View
              style={[
                styles.yourProductRequestForSirTParent,
                styles.nBoxItemBorder,
              ]}
            >
              <Text style={[styles.yourProductRequest, styles.yourTypo]}>
                Your product request for Sir Thembung has been accepted.
              </Text>
              <Text style={styles.dAgo1}>Aug 12, 2020 at 12:08 PM</Text>
            </View>
            <View
              style={[
                styles.yourProductYongchakIsOutGroup,
                styles.yourParentSpaceBlock,
              ]}
            >
              <Text style={[styles.yourProductYongchak, styles.yourTypo]}>
                Your Product “Yongchak” is out of stock
              </Text>
              <Text style={styles.dAgo1}>Aug 12, 2020 at 12:08 PM</Text>
            </View>
            <Pressable
              style={[styles.nBox1, styles.nBox1SpaceBlock]}
              onPress={() => navigation.navigate("SellerNotificationPressed")}
            >
              <View style={[styles.nBoxItem, styles.nBoxItemBorder]} />
              <View style={[styles.n11, styles.n11Layout]}>
                <Text style={[styles.dAgo3, styles.agoPosition]}>
                  Aug 12, 2020 at 12:08 PM
                </Text>
                <Text
                  style={[styles.mrChowlouPurchased, styles.n11Layout]}
                >{`Mr. Chowlou purchased 10 product a total.. 
etc.. `}</Text>
              </View>
            </Pressable>
          </View>
        </View>
        <View style={styles.nag}>
          <View style={[styles.menuIcons, styles.menuIconsSpaceBlock]}>
            <View style={styles.vectorParent}>
              <Image
                style={styles.iconLayout}
                contentFit="cover"
                source={require("../assets/vector4.png")}
              />
              <Text style={[styles.dashboard, styles.dashboardTypo]}>
                Dashboard
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
              <Image
                style={styles.iconLayout}
                contentFit="cover"
                source={require("../assets/frame-8493.png")}
              />
              <Text style={styles.customer}>Customer</Text>
            </View>
            <View style={styles.vectorParent}>
              <View style={styles.iconLayout}>
                <View style={[styles.frameItem, styles.iconLayout]} />
                <Image
                  style={[styles.vectorIcon3, styles.vectorIconPosition]}
                  contentFit="cover"
                  source={require("../assets/vector.png")}
                />
              </View>
              <Text style={[styles.dashboard, styles.dashboardTypo]}>
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
  capIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  seachBarFlexBox: {
    borderColor: Color.black,
    justifyContent: "space-between",
    borderStyle: "solid",
    flexDirection: "row",
    alignItems: "center",
  },
  searchHereTypo: {
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.normal,
    fontSize: FontSize.normal_size,
    letterSpacing: 0,
    alignItems: "center",
  },
  iconChildLayout: {
    backgroundColor: Color.transprent,
    display: "none",
    height: 32,
    width: 32,
    position: "absolute",
  },
  iconLayout1: {
    height: 32,
    width: 32,
  },
  vectorIconPosition: {
    height: 24,
    marginTop: -12,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  yourTypo: {
    textAlign: "left",
    fontFamily: FontFamily.normal,
    color: Color.colorBlack,
    letterSpacing: 0,
  },
  nBoxChildBorder: {
    borderColor: Color.red,
    backgroundColor: Color.theme13,
    width: 343,
    borderRadius: Border.br_5xs,
    borderWidth: 1,
    borderStyle: "solid",
  },
  n1Position: {
    height: 62,
    left: 14,
    top: 16,
  },
  agoPosition: {
    alignItems: "flex-end",
    top: 45,
    fontSize: FontSize.normal2_size,
    display: "flex",
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.normal,
    letterSpacing: 0,
    left: 0,
    position: "absolute",
  },
  n1Layout: {
    width: 286,
    position: "absolute",
  },
  nBox1SpaceBlock: {
    marginTop: 12,
    width: 343,
  },
  yourParentSpaceBlock: {
    padding: Padding.p_base,
    marginTop: 12,
  },
  nBoxItemBorder: {
    borderColor: Color.theme13,
    width: 343,
    borderRadius: Border.br_5xs,
    borderWidth: 1,
    borderStyle: "solid",
  },
  n11Layout: {
    width: 309,
    position: "absolute",
  },
  menuIconsSpaceBlock: {
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_base,
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
    left: 0,
    top: 0,
    position: "absolute",
    backgroundColor: Color.fontWhite,
  },
  cellularConnectionIcon: {
    width: 18,
    height: 12,
  },
  wifiIcon: {
    width: 21,
    height: 15,
    marginLeft: 2,
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
    fontWeight: "600",
    letterSpacing: 0,
    color: Color.colorBlack,
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
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  logo: {
    width: 48,
    height: 48,
  },
  leftSide: {
    flexDirection: "row",
  },
  searchHere: {
    width: 169,
    color: Color.black,
    display: "flex",
  },
  searchIconChild: {
    borderBottomRightRadius: Border.br_8xs,
    borderTopRightRadius: Border.br_8xs,
    backgroundColor: Color.transprent,
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
  seachBar: {
    backgroundColor: Color.white1,
    width: 209,
    paddingLeft: Padding.p_5xs,
    borderRadius: Border.br_5xs,
    borderWidth: 1,
    overflow: "hidden",
  },
  qrScanIcon: {
    marginLeft: 8,
  },
  vectorIcon: {
    marginLeft: -3,
    width: 6,
  },
  dotMoreIconChild: {
    marginTop: -16,
    marginLeft: -16,
    borderRadius: Border.br_8xs,
    shadowColor: "rgba(0, 0, 0, 0.4)",
    shadowRadius: 4,
    elevation: 4,
    left: "50%",
    backgroundColor: Color.transprent,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    top: "50%",
  },
  rightSide: {
    width: 279,
    justifyContent: "flex-end",
    flexDirection: "row",
    alignItems: "center",
  },
  statusBar1: {
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowRadius: 6,
    elevation: 6,
    paddingVertical: Padding.p_9xs,
    paddingHorizontal: Padding.p_base,
    justifyContent: "space-between",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    flexDirection: "row",
    width: 375,
    alignItems: "center",
    backgroundColor: Color.fontWhite,
  },
  notifications: {
    fontSize: FontSize.bold_size,
  },
  nBoxChild: {
    marginLeft: -171.5,
    height: 94,
    left: "50%",
    top: 0,
    position: "absolute",
  },
  dAgo: {
    width: 97,
  },
  customerNameSends: {
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.normal,
    fontSize: FontSize.normal_size,
    letterSpacing: 0,
    alignItems: "center",
    color: Color.colorBlack,
    left: 0,
    top: 0,
  },
  n1: {
    width: 286,
    position: "absolute",
  },
  nBox: {
    height: 94,
    width: 343,
  },
  yourProductYongchak: {
    fontSize: FontSize.normal_size,
    fontFamily: FontFamily.normal,
  },
  dAgo1: {
    marginTop: 4,
    fontSize: FontSize.normal2_size,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.normal,
    letterSpacing: 0,
  },
  yourProductYongchakIsOutParent: {
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_base,
    justifyContent: "center",
    backgroundColor: Color.theme13,
    borderRadius: Border.br_5xs,
  },
  tombungWantsToRefundHisPrParent: {
    justifyContent: "center",
    borderColor: Color.red,
    backgroundColor: Color.theme13,
    width: 343,
    borderRadius: Border.br_5xs,
    borderWidth: 1,
    borderStyle: "solid",
  },
  nBoxItem: {
    marginLeft: -171.5,
    height: 94,
    left: "50%",
    top: 0,
    position: "absolute",
    backgroundColor: Color.fontWhite,
  },
  dAgo3: {
    width: 132,
  },
  mrChowlouPurchased: {
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.normal,
    fontSize: FontSize.normal_size,
    letterSpacing: 0,
    alignItems: "center",
    color: Color.colorBlack,
    left: 0,
    top: 0,
  },
  n11: {
    height: 62,
    left: 14,
    top: 16,
  },
  nBox1: {
    height: 94,
  },
  yourProductRequest: {
    width: 302,
    fontSize: FontSize.normal_size,
    fontFamily: FontFamily.normal,
  },
  yourProductRequestForSirTParent: {
    padding: Padding.p_base,
    marginTop: 12,
  },
  yourProductYongchakIsOutGroup: {
    justifyContent: "center",
    backgroundColor: Color.theme13,
    borderRadius: Border.br_5xs,
    width: 343,
  },
  nBoxParent: {
    height: 536,
    marginTop: 16,
    borderRadius: Border.br_5xs,
    alignItems: "center",
  },
  body: {
    height: 566,
    marginTop: 16,
    overflow: "hidden",
  },
  dashboard: {
    color: Color.colorDarkslategray,
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
  customer: {
    color: Color.colorDarkslategray,
    fontFamily: FontFamily.openSansSemiBold,
    marginTop: 12,
    fontSize: FontSize.normal2_size,
    textAlign: "center",
    fontWeight: "600",
    letterSpacing: 0,
  },
  frameItem: {
    marginLeft: -12,
    borderTopLeftRadius: Border.br_8xs,
    marginTop: -12,
    width: 24,
    backgroundColor: Color.transprent,
    borderTopRightRadius: Border.br_8xs,
    left: "50%",
    display: "none",
    top: "50%",
    position: "absolute",
  },
  vectorIcon3: {
    marginLeft: -10,
    width: 19,
  },
  menuIcons: {
    borderTopLeftRadius: Border.br_base,
    borderTopRightRadius: Border.br_base,
    borderTopWidth: 1,
    borderColor: Color.black,
    justifyContent: "space-between",
    borderStyle: "solid",
    flexDirection: "row",
    alignItems: "center",
    width: 375,
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
    marginTop: 16,
  },
  all: {
    alignItems: "center",
  },
  sellerNotification: {
    borderRadius: Border.br_6xl,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
    backgroundColor: Color.fontWhite,
  },
});

export default SellerNotification;
