import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontSize, FontFamily, Padding } from "../GlobalStyles";

const SellerNotificationPressed = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.sellerNotificationPressed}>
      <View style={styles.statusBarSecondary}>
        <View style={styles.statusBarSecondaryChild} />
        <View style={[styles.logo, styles.logoPosition]}>
          <View style={styles.logoChild} />
          <Image
            style={[styles.asset91, styles.logoPosition]}
            contentFit="cover"
            source={require("../assets/asset-9-1.png")}
          />
        </View>
        <View style={[styles.dotMoreIcon, styles.iconPosition]}>
          <Image
            style={[styles.vectorIcon, styles.vectorIconLayout]}
            contentFit="cover"
            source={require("../assets/vector10.png")}
          />
          <View style={styles.dotMoreIconChild} />
        </View>
        <View style={[styles.seachBar, styles.iconPosition]}>
          <View style={styles.seachBarChild} />
          <Text style={[styles.searchHere, styles.text5FlexBox]}>
            Search here
          </Text>
          <View style={[styles.searchIcon, styles.iconPosition]}>
            <View style={[styles.searchIconChild, styles.frameItemPosition]} />
            <Image
              style={styles.iconlyboldsearch}
              contentFit="cover"
              source={require("../assets/iconlyboldsearch.png")}
            />
          </View>
        </View>
        <Image
          style={[styles.qrScanIcon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/property-1default.png")}
        />
      </View>
      <View style={styles.homeIndicator}>
        <View style={styles.shape} />
      </View>
      <View style={[styles.statusBar, styles.statusLayout]}>
        <View style={[styles.statusBarChild, styles.statusLayout]} />
        <Image
          style={styles.connectionsIcon}
          contentFit="cover"
          source={require("../assets/connections.png")}
        />
        <View style={styles.time}>
          <Text style={[styles.time1, styles.time1FlexBox]}>9:27</Text>
        </View>
      </View>
      <Pressable
        style={[styles.frameParent, styles.boxPosition]}
        onPress={() =>
          navigation.navigate("BottomTabsRoot", {
            screen: "SellerNotification",
          })
        }
      >
        <View style={[styles.frameGroup, styles.nBoxItemBorder]}>
          <View style={styles.nameCustomerParent}>
            <Text style={[styles.nameCustomer, styles.time1FlexBox]}>
              Name customer
            </Text>
            <Text style={[styles.dAgo, styles.agoTypo]}>
              Aug 12, 2020 at 12:08 PM
            </Text>
          </View>
          <View style={styles.groupParent}>
            <View style={styles.parentLayout}>
              <Text style={[styles.text, styles.textTypo1]}>1,000</Text>
              <Text style={[styles.totalNumberOf, styles.totalPosition]}>
                Total Number of Products
              </Text>
            </View>
            <View style={[styles.groupContainer, styles.parentLayout]}>
              <View style={[styles.group, styles.logoPosition]}>
                <Text style={[styles.text1, styles.textTypo1]}>
                  1,00,00,000
                </Text>
                <Text style={[styles.text2, styles.textTypo]}>₹</Text>
              </View>
              <Text style={[styles.totalAmount, styles.totalPosition]}>
                Total Amount
              </Text>
            </View>
            <View style={styles.groupView}>
              <View style={styles.frameWrapper}>
                <View style={styles.container}>
                  <Text style={styles.textTypo}>₹</Text>
                  <Text style={[styles.text4, styles.textTypo1]}>10,000</Text>
                </View>
              </View>
              <Text style={styles.hisSaving}>His Saving</Text>
            </View>
          </View>
        </View>
        <View style={styles.nBox}>
          <View style={[styles.nBoxChild, styles.nBoxChildLayout]} />
          <View style={[styles.n1, styles.n1Layout]}>
            <Text style={[styles.dAgo1, styles.agoPosition]}>
              Today at 09:03 AM
            </Text>
            <Text
              style={[styles.mrChowlouPurchased, styles.n1Layout]}
            >{`Mr. Chowlou purchased 10 product a total.. 
etc.. `}</Text>
          </View>
        </View>
        <View style={styles.nBox}>
          <View style={[styles.nBoxItem, styles.nBoxItemBorder]} />
          <View style={[styles.n1, styles.n1Layout]}>
            <Text style={[styles.dAgo2, styles.agoPosition]}>
              Aug 12, 2020 at 12:08 PM
            </Text>
            <Text
              style={[styles.mrChowlouPurchased, styles.n1Layout]}
            >{`Mr. Chowlou purchased 10 product a total.. 
etc.. `}</Text>
          </View>
        </View>
        <View
          style={[
            styles.yourProductRequestForSirTParent,
            styles.yourParentSpaceBlock,
          ]}
        >
          <Text style={[styles.yourProductRequest, styles.yourTypo]}>
            Your product request for Sir Thembung has been accepted.
          </Text>
          <Text style={[styles.dAgo3, styles.agoTypo]}>
            Aug 12, 2020 at 12:08 PM
          </Text>
        </View>
        <View
          style={[
            styles.yourProductYongchakIsOutParent,
            styles.yourParentSpaceBlock,
          ]}
        >
          <Text style={[styles.yourProductYongchak, styles.yourTypo]}>
            Your Product “Yongchak” is out of stock
          </Text>
          <Text style={[styles.dAgo3, styles.agoTypo]}>
            Aug 12, 2020 at 12:08 PM
          </Text>
        </View>
        <View
          style={[
            styles.yourProductYongchakIsOutParent,
            styles.yourParentSpaceBlock,
          ]}
        >
          <Text style={[styles.yourProductYongchak, styles.yourTypo]}>
            Your Product “Yongchak” is out of stock
          </Text>
          <Text style={[styles.dAgo3, styles.agoTypo]}>
            Aug 12, 2020 at 12:08 PM
          </Text>
        </View>
      </Pressable>
      <Text style={[styles.notifications, styles.yourTypo]}>Notifications</Text>
      <View style={[styles.menuIcons, styles.yourParentSpaceBlock]}>
        <View style={styles.vectorParent}>
          <Image
            style={styles.frameItemLayout}
            contentFit="cover"
            source={require("../assets/vector4.png")}
          />
          <Text style={[styles.dashboard, styles.text5Typo]}>Dashboard</Text>
        </View>
        <View style={styles.vectorParent}>
          <View style={styles.frameItemLayout}>
            <Image
              style={[styles.vectorIcon2, styles.vectorIconLayout]}
              contentFit="cover"
              source={require("../assets/vector14.png")}
            />
            <View style={[styles.ellipseParent, styles.groupChildLayout]}>
              <Image
                style={[styles.groupChild, styles.groupChildLayout]}
                contentFit="cover"
                source={require("../assets/ellipse-2.png")}
              />
              <Text style={[styles.text5, styles.text5Typo]}>5</Text>
            </View>
          </View>
          <Text style={[styles.notification1, styles.text5Typo]}>
            Notification
          </Text>
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
            style={styles.frameItemLayout}
            contentFit="cover"
            source={require("../assets/frame-8493.png")}
          />
          <Text style={[styles.customer, styles.text5Typo]}>Customer</Text>
        </View>
        <View style={styles.vectorParent}>
          <View style={styles.frameItemLayout}>
            <View style={[styles.frameItem, styles.frameItemLayout]} />
            <Image
              style={[styles.vectorIcon4, styles.vectorIconLayout]}
              contentFit="cover"
              source={require("../assets/vector.png")}
            />
          </View>
          <Text style={[styles.dashboard, styles.text5Typo]}>Profile</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  logoPosition: {
    top: "50%",
    position: "absolute",
  },
  iconPosition: {
    marginTop: -16,
    height: 32,
    top: "50%",
    position: "absolute",
  },
  vectorIconLayout: {
    height: 24,
    position: "absolute",
  },
  text5FlexBox: {
    display: "flex",
    alignItems: "center",
  },
  frameItemPosition: {
    borderTopRightRadius: Border.br_8xs,
    backgroundColor: Color.transprent,
    display: "none",
    position: "absolute",
  },
  statusLayout: {
    height: 44,
    top: 0,
    width: 375,
    position: "absolute",
  },
  time1FlexBox: {
    textAlign: "center",
    color: Color.colorBlack,
    letterSpacing: 0,
  },
  boxPosition: {
    marginLeft: -171.5,
    left: "50%",
    position: "absolute",
  },
  nBoxItemBorder: {
    borderColor: Color.theme13,
    width: 343,
    borderWidth: 1,
    borderStyle: "solid",
  },
  agoTypo: {
    marginTop: 4,
    fontSize: FontSize.normal2_size,
    textAlign: "left",
    fontFamily: FontFamily.normal,
    letterSpacing: 0,
  },
  textTypo1: {
    fontSize: FontSize.normal1_size,
    height: 19,
    color: Color.colorDarkslategray,
    textAlign: "left",
    fontFamily: FontFamily.normal,
    letterSpacing: 0,
  },
  totalPosition: {
    marginLeft: -151.5,
    marginTop: -10.9,
    height: 22,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.normal,
    letterSpacing: 0,
    fontSize: FontSize.normal_size,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  parentLayout: {
    width: 303,
    height: 22,
  },
  textTypo: {
    width: 9,
    height: 19,
    fontSize: FontSize.normal1_size,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.normal,
    letterSpacing: 0,
  },
  nBoxChildLayout: {
    backgroundColor: Color.theme13,
    width: 343,
    borderRadius: Border.br_5xs,
  },
  n1Layout: {
    width: 309,
    position: "absolute",
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
  yourParentSpaceBlock: {
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_base,
  },
  yourTypo: {
    textAlign: "left",
    fontFamily: FontFamily.normal,
    letterSpacing: 0,
  },
  text5Typo: {
    fontFamily: FontFamily.openSansSemiBold,
    fontSize: FontSize.normal2_size,
    textAlign: "center",
    fontWeight: "600",
    letterSpacing: 0,
  },
  groupChildLayout: {
    width: 16,
    height: 16,
    position: "absolute",
  },
  frameItemLayout: {
    width: 24,
    height: 24,
  },
  statusBarSecondaryChild: {
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowRadius: 6,
    elevation: 6,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    top: 0,
    height: 56,
    width: 375,
    left: 0,
    position: "absolute",
    backgroundColor: Color.fontWhite,
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
    left: "50%",
  },
  logo: {
    marginTop: -24,
    left: 12,
    width: 48,
    height: 48,
  },
  vectorIcon: {
    marginLeft: -3,
    width: 6,
    marginTop: -12,
    left: "50%",
    top: "50%",
  },
  dotMoreIconChild: {
    marginLeft: -16,
    borderRadius: Border.br_8xs,
    shadowColor: "rgba(0, 0, 0, 0.4)",
    shadowRadius: 4,
    elevation: 4,
    backgroundColor: Color.transprent,
    marginTop: -16,
    left: "50%",
    display: "none",
    height: 32,
    width: 32,
    top: "50%",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    position: "absolute",
  },
  dotMoreIcon: {
    left: 335,
    width: 32,
    marginTop: -16,
  },
  seachBarChild: {
    height: "100%",
    top: "0%",
    backgroundColor: Color.white1,
    borderWidth: 1,
    borderColor: Color.black,
    borderStyle: "solid",
    borderRadius: Border.br_5xs,
    left: "0%",
    bottom: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  searchHere: {
    marginTop: -11,
    width: "85.07%",
    left: "4.79%",
    alignItems: "center",
    textAlign: "left",
    fontFamily: FontFamily.normal,
    letterSpacing: 0,
    color: Color.black,
    fontSize: FontSize.normal_size,
    top: "50%",
    position: "absolute",
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
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  searchIcon: {
    left: 187,
    width: 32,
    marginTop: -16,
  },
  seachBar: {
    marginLeft: -119.5,
    width: 219,
    left: "50%",
  },
  qrScanIcon: {
    left: 295,
    width: 32,
    marginTop: -16,
  },
  statusBarSecondary: {
    top: 44,
    height: 56,
    width: 375,
    left: 0,
    position: "absolute",
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
    left: "0%",
    bottom: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
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
    fontWeight: "600",
    textAlign: "center",
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
    marginLeft: -187.5,
    left: "50%",
  },
  nameCustomer: {
    fontSize: FontSize.bold1_size,
    fontWeight: "700",
    fontFamily: FontFamily.bold,
    width: 171,
    height: 22,
  },
  dAgo: {
    color: Color.colorBlack,
  },
  nameCustomerParent: {
    justifyContent: "center",
    width: 302,
    alignItems: "center",
  },
  text: {
    left: 268,
    width: 35,
    height: 19,
    color: Color.colorDarkslategray,
    marginTop: -9.4,
    top: "50%",
    position: "absolute",
  },
  totalNumberOf: {
    width: 184,
  },
  text1: {
    left: 9,
    width: 71,
    height: 19,
    color: Color.colorDarkslategray,
    marginTop: -9.4,
    top: "50%",
    position: "absolute",
  },
  text2: {
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
  },
  totalAmount: {
    width: 97,
  },
  groupContainer: {
    marginTop: 8,
  },
  text4: {
    width: 42,
    height: 19,
    color: Color.colorDarkslategray,
  },
  container: {
    justifyContent: "flex-end",
    flexDirection: "row",
    alignItems: "center",
    top: 0,
    left: 0,
    position: "absolute",
  },
  frameWrapper: {
    top: 2,
    left: 251,
    width: 51,
    height: 19,
    position: "absolute",
  },
  hisSaving: {
    marginLeft: -151.15,
    width: 109,
    marginTop: -10.9,
    height: 22,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.normal,
    letterSpacing: 0,
    fontSize: FontSize.normal_size,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  groupView: {
    marginTop: 8,
    height: 22,
    width: 302,
  },
  groupParent: {
    marginTop: 16,
    justifyContent: "center",
  },
  frameGroup: {
    borderRadius: Border.br_base,
    padding: Padding.p_base,
    width: 343,
    backgroundColor: Color.fontWhite,
  },
  nBoxChild: {
    height: 94,
    marginLeft: -171.5,
    left: "50%",
    position: "absolute",
    top: 0,
  },
  dAgo1: {
    width: 97,
  },
  mrChowlouPurchased: {
    color: Color.colorBlack,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.normal,
    letterSpacing: 0,
    fontSize: FontSize.normal_size,
    top: 0,
    left: 0,
  },
  n1: {
    top: 16,
    height: 62,
    left: 14,
  },
  nBox: {
    marginTop: 12,
    height: 94,
    width: 343,
  },
  nBoxItem: {
    height: 94,
    width: 343,
    marginLeft: -171.5,
    left: "50%",
    position: "absolute",
    borderRadius: Border.br_5xs,
    top: 0,
    backgroundColor: Color.fontWhite,
  },
  dAgo2: {
    width: 132,
  },
  yourProductRequest: {
    width: 302,
    color: Color.colorBlack,
    fontSize: FontSize.normal_size,
    fontFamily: FontFamily.normal,
    letterSpacing: 0,
  },
  dAgo3: {
    color: Color.black,
  },
  yourProductRequestForSirTParent: {
    marginTop: 12,
    width: 343,
    borderColor: Color.theme13,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_5xs,
  },
  yourProductYongchak: {
    color: Color.colorBlack,
    fontSize: FontSize.normal_size,
    fontFamily: FontFamily.normal,
    letterSpacing: 0,
  },
  yourProductYongchakIsOutParent: {
    backgroundColor: Color.theme13,
    width: 343,
    borderRadius: Border.br_5xs,
    marginTop: 12,
    justifyContent: "center",
  },
  frameParent: {
    top: 165,
    height: 536,
    alignItems: "center",
    borderRadius: Border.br_5xs,
  },
  notifications: {
    top: 116,
    left: 24,
    fontSize: FontSize.bold_size,
    color: Color.colorBlack,
    position: "absolute",
  },
  dashboard: {
    marginTop: 8,
    color: Color.colorDarkslategray,
  },
  vectorParent: {
    width: 70,
    justifyContent: "center",
    alignItems: "center",
  },
  vectorIcon2: {
    left: 2,
    width: 20,
    top: 0,
  },
  groupChild: {
    top: 0,
    left: 0,
  },
  text5: {
    marginTop: -6,
    marginLeft: -5.9,
    color: "#f5f5f5",
    width: 12,
    height: 11,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  ellipseParent: {
    top: -8,
    left: 14,
  },
  notification1: {
    color: Color.colorSaddlebrown_100,
    marginTop: 8,
  },
  iconLayout: {
    height: 32,
    width: 32,
  },
  vectorWrapper: {
    paddingBottom: Padding.p_5xl,
    flexDirection: "row",
    justifyContent: "center",
  },
  customer: {
    marginTop: 12,
    color: Color.colorDarkslategray,
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
    marginLeft: -10,
    width: 19,
    marginTop: -12,
    left: "50%",
    top: "50%",
  },
  menuIcons: {
    top: 716,
    borderTopLeftRadius: Border.br_base,
    borderTopRightRadius: Border.br_base,
    borderTopWidth: 1,
    justifyContent: "space-between",
    flexDirection: "row",
    marginLeft: -187.5,
    left: "50%",
    alignItems: "center",
    borderColor: Color.black,
    borderStyle: "solid",
    paddingHorizontal: Padding.p_base,
    width: 375,
    position: "absolute",
    backgroundColor: Color.fontWhite,
  },
  sellerNotificationPressed: {
    borderRadius: Border.br_6xl,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.fontWhite,
  },
});

export default SellerNotificationPressed;
