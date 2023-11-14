import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Padding, Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const CustomerNotification = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.customerNotification}>
      <View style={[styles.homeIndicator, styles.homePosition]}>
        <View style={styles.shape} />
      </View>
      <View style={styles.statusBar}>
        <View style={styles.statusBarChild} />
        <Image
          style={styles.connectionsIcon}
          contentFit="cover"
          source={require("../assets/connections.png")}
        />
        <View style={styles.time}>
          <Text style={styles.time1}>9:27</Text>
        </View>
      </View>
      <View style={styles.frameParent}>
        <View
          style={[
            styles.youHavePurchase10ProductFParent,
            styles.youParentSpaceBlock,
          ]}
        >
          <Text
            style={[styles.youHavePurchase, styles.youHavePurchaseTypo]}
          >{`You have purchase 10 product from Disco Shop `}</Text>
          <Text style={styles.dAgo}>Aug 12, 2020 at 12:08 PM</Text>
        </View>
        <View
          style={[styles.yourRequestForRefundIsStiParent, styles.parentLayout]}
        >
          <Text style={[styles.yourRequestFor, styles.notificationsTypo]}>
            Your request for refund is still pending
          </Text>
          <Text style={styles.dAgo}>Aug 12, 2020 at 12:08 PM</Text>
        </View>
        <View
          style={[
            styles.youHaveMakeChangesOverYouParent,
            styles.youParentSpaceBlock,
          ]}
        >
          <Text style={[styles.youHavePurchase, styles.youHavePurchaseTypo]}>
            You have make changes over your last purchased...
          </Text>
          <Text style={styles.dAgo}>Aug 12, 2020 at 12:08 PM</Text>
        </View>
        <View
          style={[
            styles.youHaveMakeChangesOverYouParent,
            styles.youParentSpaceBlock,
          ]}
        >
          <Text
            style={[styles.youHavePurchase, styles.youHavePurchaseTypo]}
          >{`You have purchase 10 product from Disco Shop `}</Text>
          <Text style={styles.dAgo}>Aug 12, 2020 at 12:08 PM</Text>
        </View>
      </View>
      <Text style={[styles.notifications, styles.notificationsTypo]}>
        Notifications
      </Text>
      <View style={[styles.homeIndicatorWrapper, styles.homePosition]}>
        <View style={[styles.homeIndicatorWrapper, styles.homePosition]}>
          <View style={styles.shape} />
        </View>
      </View>
      <View style={[styles.statusBar1, styles.menuIconsFlexBox]}>
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
        <View style={styles.leftSide}>
          <View
            style={[styles.searchingSomethingParent, styles.menuIconsBorder]}
          >
            <Text
              style={[styles.searchingSomething, styles.youHavePurchaseTypo]}
            >
              Searching Something
            </Text>
            <View style={styles.searchIcon}>
              <Image
                style={styles.iconlyboldsearch}
                contentFit="cover"
                source={require("../assets/iconlyboldsearch1.png")}
              />
            </View>
          </View>
          <View style={[styles.qrScanIcon, styles.iconLayout1]}>
            <View style={styles.iconChildShadowBox} />
            <Image
              style={[styles.cartIcon, styles.iconPosition]}
              contentFit="cover"
              source={require("../assets/cart-icon.png")}
            />
            <View style={styles.wrapper}>
              <Text style={[styles.text, styles.textTypo]}>9+</Text>
            </View>
          </View>
          <View style={[styles.qrScanIcon, styles.iconLayout1]}>
            <Image
              style={[styles.vectorIcon, styles.iconPosition]}
              contentFit="cover"
              source={require("../assets/vector10.png")}
            />
            <View style={styles.iconChildShadowBox} />
          </View>
        </View>
      </View>
      <View style={[styles.menuIcons, styles.menuIconsBorder]}>
        <Pressable
          style={styles.vectorParent}
          onPress={() => navigation.navigate("CustomerDaskboard1")}
        >
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/vector4.png")}
          />
          <Text style={[styles.dashboard, styles.textTypo]}>Dashboard</Text>
        </Pressable>
        <View style={styles.vectorParent}>
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/notification2.png")}
          />
          <Text style={[styles.dashboard, styles.textTypo]}>Notification</Text>
        </View>
        <Pressable
          style={styles.vectorWrapper}
          onPress={() => navigation.navigate("CustomerDaskboard")}
        >
          <Image
            style={styles.iconLayout1}
            contentFit="cover"
            source={require("../assets/vector2.png")}
          />
        </Pressable>
        <Pressable
          style={styles.vectorParent}
          onPress={() => navigation.navigate("CustomerSearvhCustomer")}
        >
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/frame-84933.png")}
          />
          <Text style={[styles.retailers, styles.textTypo]}>Retailers</Text>
        </Pressable>
        <Pressable
          style={styles.vectorParent}
          onPress={() => navigation.navigate("CustomerProfile")}
        >
          <View style={styles.iconLayout}>
            <View style={[styles.frameItem, styles.iconLayout]} />
            <Image
              style={[styles.vectorIcon3, styles.iconPosition]}
              contentFit="cover"
              source={require("../assets/vector.png")}
            />
          </View>
          <Text style={[styles.dashboard, styles.textTypo]}>Profile</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  homePosition: {
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  youParentSpaceBlock: {
    paddingHorizontal: Padding.p_base,
    width: 344,
    backgroundColor: Color.theme13,
    paddingVertical: Padding.p_5xs,
    justifyContent: "center",
    borderRadius: Border.br_5xs,
  },
  youHavePurchaseTypo: {
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.normal,
    fontSize: FontSize.normal_size,
    alignItems: "center",
    color: Color.colorBlack,
    letterSpacing: 0,
  },
  parentLayout: {
    borderWidth: 1,
    justifyContent: "center",
    borderRadius: Border.br_5xs,
  },
  notificationsTypo: {
    textAlign: "left",
    fontFamily: FontFamily.normal,
    color: Color.colorBlack,
    letterSpacing: 0,
  },
  menuIconsFlexBox: {
    justifyContent: "space-between",
    paddingHorizontal: Padding.p_base,
    width: 375,
    position: "absolute",
  },
  menuIconsBorder: {
    borderColor: Color.black,
    flexDirection: "row",
    borderStyle: "solid",
    alignItems: "center",
    backgroundColor: Color.fontWhite,
  },
  iconLayout1: {
    height: 32,
    width: 32,
  },
  iconPosition: {
    height: 24,
    marginTop: -12,
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  textTypo: {
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
    height: "4.19%",
    top: "95.81%",
    bottom: "0%",
  },
  statusBarChild: {
    left: 0,
    height: 44,
    width: 375,
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
  statusBar: {
    height: 44,
    width: 375,
    top: 0,
    marginLeft: -187.5,
    left: "50%",
    position: "absolute",
  },
  youHavePurchase: {
    width: 310,
  },
  dAgo: {
    color: Color.black,
    marginTop: 4,
    fontSize: FontSize.normal2_size,
    textAlign: "left",
    fontFamily: FontFamily.normal,
    letterSpacing: 0,
  },
  youHavePurchase10ProductFParent: {
    paddingVertical: Padding.p_5xs,
  },
  yourRequestFor: {
    fontSize: FontSize.normal_size,
    fontFamily: FontFamily.normal,
  },
  yourRequestForRefundIsStiParent: {
    borderColor: Color.red,
    padding: Padding.p_base,
    marginTop: 12,
    borderStyle: "solid",
    borderWidth: 1,
    width: 344,
    backgroundColor: Color.theme13,
  },
  youHaveMakeChangesOverYouParent: {
    marginTop: 12,
    paddingVertical: Padding.p_5xs,
  },
  frameParent: {
    marginLeft: -172.5,
    top: 165,
    height: 536,
    alignItems: "center",
    borderRadius: Border.br_5xs,
    left: "50%",
    position: "absolute",
    overflow: "hidden",
  },
  notifications: {
    top: 116,
    left: 24,
    fontSize: FontSize.bold_size,
    position: "absolute",
  },
  homeIndicatorWrapper: {
    bottom: 0,
    height: 34,
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
    position: "absolute",
  },
  logo: {
    width: 48,
    height: 48,
  },
  leftSide: {
    flexDirection: "row",
  },
  searchingSomething: {
    width: 159,
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
  searchingSomethingParent: {
    paddingLeft: Padding.p_5xs,
    borderWidth: 1,
    justifyContent: "center",
    borderRadius: Border.br_5xs,
  },
  iconChildShadowBox: {
    elevation: 4,
    shadowRadius: 4,
    shadowColor: "rgba(0, 0, 0, 0.4)",
    backgroundColor: Color.transprent,
    borderRadius: Border.br_8xs,
    marginLeft: -16,
    marginTop: -16,
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
    width: 21,
    marginLeft: -10,
    height: 24,
  },
  text: {
    color: Color.fontWhite,
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
  },
  statusBar1: {
    top: 44,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowRadius: 6,
    elevation: 6,
    paddingVertical: Padding.p_9xs,
    flexDirection: "row",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    justifyContent: "space-between",
    alignItems: "center",
    left: 0,
    backgroundColor: Color.fontWhite,
  },
  dashboard: {
    color: Color.colorDarkslategray,
    marginTop: 8,
  },
  vectorParent: {
    width: 70,
    justifyContent: "center",
    alignItems: "center",
  },
  vectorWrapper: {
    paddingBottom: Padding.p_5xl,
    flexDirection: "row",
    justifyContent: "center",
  },
  retailers: {
    color: Color.colorSaddlebrown_100,
    marginTop: 12,
  },
  frameItem: {
    marginLeft: -12,
    borderTopLeftRadius: Border.br_8xs,
    borderTopRightRadius: Border.br_8xs,
    marginTop: -12,
    width: 24,
    backgroundColor: Color.transprent,
    display: "none",
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  vectorIcon3: {
    width: 19,
    marginLeft: -10,
    height: 24,
  },
  menuIcons: {
    top: 716,
    borderTopLeftRadius: Border.br_base,
    borderTopRightRadius: Border.br_base,
    borderTopWidth: 1,
    justifyContent: "space-between",
    paddingHorizontal: Padding.p_base,
    width: 375,
    position: "absolute",
    paddingVertical: Padding.p_5xs,
    marginLeft: -187.5,
    borderColor: Color.black,
    left: "50%",
  },
  customerNotification: {
    borderRadius: Border.br_6xl,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.fontWhite,
  },
});

export default CustomerNotification;
