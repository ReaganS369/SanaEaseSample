import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Padding, Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const CustomerDaskboard1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.customerDaskboard}>
      <View style={styles.homeIndicator}>
        <View style={[styles.shape, styles.shapePosition]} />
      </View>
      <View style={[styles.statusBar, styles.statusBarFlexBox]}>
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
          <Pressable
            style={[styles.searchParent, styles.parentBorder]}
            onPress={() => navigation.navigate("CustomerSearvhCustomer")}
          >
            <Text style={[styles.search, styles.hereFlexBox]}>Search</Text>
            <View style={styles.searchIcon}>
              <Image
                style={styles.iconlyboldsearch}
                contentFit="cover"
                source={require("../assets/iconlyboldsearch1.png")}
              />
            </View>
          </Pressable>
          <Pressable
            style={[styles.qrScanIcon, styles.iconLayout1]}
            onPress={() => navigation.navigate("CustomerCart")}
          >
            <View style={styles.iconChildShadowBox} />
            <Image
              style={[styles.cartIcon, styles.iconPosition]}
              contentFit="cover"
              source={require("../assets/cart-icon.png")}
            />
            <View style={styles.wrapper}>
              <Text style={[styles.text, styles.textTypo]}>9+</Text>
            </View>
          </Pressable>
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
      <View style={[styles.selectCustomerList, styles.component4SpaceBlock]}>
        <View style={styles.component4Parent}>
          <View style={[styles.component4, styles.component4SpaceBlock]}>
            <Text style={[styles.selectCategory, styles.time1Clr]}>
              Select Category
            </Text>
            <Image
              style={styles.vectorIcon1}
              contentFit="cover"
              source={require("../assets/vector9.png")}
            />
          </View>
          <View style={styles.filterIcon}>
            <View style={[styles.groupParent, styles.groupParentLayout]}>
              <Image
                style={styles.groupIcon}
                contentFit="cover"
                source={require("../assets/group.png")}
              />
              <View style={[styles.frameChild, styles.menuIconsBorder]} />
              <Text style={[styles.filter, styles.time1Clr]}>Filter</Text>
            </View>
          </View>
        </View>
        <Pressable
          style={styles.noRecords1Parent}
          onPress={() => navigation.navigate("CustomerSearvhCustomer")}
        >
          <Image
            style={styles.noRecords1}
            contentFit="cover"
            source={require("../assets/no-records-1.png")}
          />
          <View style={styles.yourSellerListIsEmptyParent}>
            <Text style={[styles.yourSellerList, styles.yourTypo]}>
              Your seller list is empty.
            </Text>
            <View style={styles.addsearchYourSellerParent}>
              <Text style={[styles.addsearchYourSeller, styles.yourTypo]}>
                Add/Search your seller
              </Text>
              <View
                style={[styles.buttonCreateNewItem, styles.buttonItemLayout]}
              >
                <View
                  style={[
                    styles.buttonCreateNewItemChild,
                    styles.buttonItemLayout,
                  ]}
                />
                <Text style={[styles.here, styles.textClr]}>Here</Text>
              </View>
            </View>
          </View>
        </Pressable>
      </View>
      <View style={[styles.menuIcons, styles.menuIconsPosition]}>
        <View style={styles.vectorParent}>
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/vector5.png")}
          />
          <Text style={[styles.dashboard, styles.textTypo]}>Dashboard</Text>
        </View>
        <Pressable
          style={styles.vectorParent}
          onPress={() => navigation.navigate("CustomerNotification")}
        >
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/notification.png")}
          />
          <Text style={[styles.notification, styles.retailersTypo]}>
            Notification
          </Text>
        </Pressable>
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
            source={require("../assets/frame-84932.png")}
          />
          <Text style={[styles.retailers, styles.retailersTypo]}>
            Retailers
          </Text>
        </Pressable>
        <Pressable
          style={styles.vectorParent}
          onPress={() => navigation.navigate("CustomerProfile")}
        >
          <View style={styles.iconLayout}>
            <View style={[styles.frameInner, styles.iconLayout]} />
            <Image
              style={[styles.vectorIcon4, styles.iconPosition]}
              contentFit="cover"
              source={require("../assets/vector.png")}
            />
          </View>
          <Text style={[styles.notification, styles.retailersTypo]}>
            Profile
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  shapePosition: {
    left: "50%",
    position: "absolute",
  },
  statusBarFlexBox: {
    paddingHorizontal: Padding.p_base,
    width: 375,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
    backgroundColor: Color.fontWhite,
  },
  parentBorder: {
    borderWidth: 1,
    borderColor: Color.black,
    borderStyle: "solid",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: Color.fontWhite,
  },
  hereFlexBox: {
    display: "flex",
    textAlign: "left",
    alignItems: "center",
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
  textTypo: {
    textAlign: "center",
    fontWeight: "600",
  },
  vectorIconPosition: {
    marginTop: -12,
    top: "50%",
    left: "50%",
  },
  statusLayout: {
    height: 44,
    top: 0,
    width: 375,
    position: "absolute",
  },
  time1Clr: {
    color: Color.colorBlack,
    letterSpacing: 0,
  },
  component4SpaceBlock: {
    paddingHorizontal: Padding.p_5xs,
    alignItems: "center",
  },
  groupParentLayout: {
    borderRadius: Border.br_9xs,
    position: "absolute",
  },
  menuIconsBorder: {
    borderColor: Color.black,
    borderStyle: "solid",
  },
  yourTypo: {
    textAlign: "left",
    fontFamily: FontFamily.normal,
  },
  buttonItemLayout: {
    width: 49,
    height: 18,
  },
  textClr: {
    color: Color.fontWhite,
    letterSpacing: 0,
  },
  menuIconsPosition: {
    marginLeft: -187.5,
    left: "50%",
  },
  retailersTypo: {
    color: Color.colorDarkslategray,
    textAlign: "center",
    fontFamily: FontFamily.openSansSemiBold,
    fontWeight: "600",
    fontSize: FontSize.normal2_size,
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
  },
  homeIndicator: {
    height: "4.19%",
    top: "95.81%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    position: "absolute",
    width: "100%",
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
    color: Color.black,
    letterSpacing: 0,
    fontFamily: FontFamily.normal,
    display: "flex",
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
    borderRadius: Border.br_5xs,
    paddingLeft: Padding.p_5xs,
    justifyContent: "center",
  },
  iconChildShadowBox: {
    elevation: 4,
    shadowRadius: 4,
    shadowColor: "rgba(0, 0, 0, 0.4)",
    marginLeft: -16,
    marginTop: -16,
    backgroundColor: Color.transprent,
    borderRadius: Border.br_8xs,
    top: "50%",
    display: "none",
    height: 32,
    width: 32,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    left: "50%",
    position: "absolute",
  },
  cartIcon: {
    width: 21,
    height: 24,
  },
  text: {
    color: Color.fontWhite,
    letterSpacing: 0,
    fontFamily: FontFamily.openSansSemiBold,
    textAlign: "center",
    fontWeight: "600",
    fontSize: FontSize.normal2_size,
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
    textAlign: "center",
    fontWeight: "600",
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
  statusBar1: {
    marginLeft: -187.5,
    left: "50%",
  },
  selectCategory: {
    textAlign: "left",
    fontFamily: FontFamily.normal,
    fontSize: FontSize.normal_size,
  },
  vectorIcon1: {
    height: 8,
    width: 12,
    marginLeft: 8,
  },
  component4: {
    paddingVertical: Padding.p_12xs,
    borderRadius: Border.br_8xs,
    paddingHorizontal: Padding.p_5xs,
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
  filter: {
    marginLeft: 4,
    fontSize: FontSize.normal2_size,
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.normal,
  },
  groupParent: {
    marginLeft: -27.5,
    paddingHorizontal: Padding.p_9xs,
    paddingVertical: Padding.p_11xs,
    marginTop: -12,
    top: "50%",
    left: "50%",
    borderWidth: 1,
    borderColor: Color.black,
    borderStyle: "solid",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: Color.fontWhite,
    overflow: "hidden",
  },
  filterIcon: {
    width: 55,
    height: 24,
  },
  component4Parent: {
    width: 327,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  noRecords1: {
    width: 200,
    height: 158,
  },
  yourSellerList: {
    fontSize: FontSize.bold_size,
    color: Color.black,
    letterSpacing: 0,
  },
  addsearchYourSeller: {
    color: Color.black,
    letterSpacing: 0,
    fontSize: FontSize.normal_size,
    textAlign: "left",
  },
  buttonCreateNewItemChild: {
    backgroundColor: Color.colorSaddlebrown_100,
    height: 18,
    borderRadius: Border.br_9xs,
    position: "absolute",
    top: 0,
    left: 0,
  },
  here: {
    left: 8,
    fontSize: FontSize.normal1_size,
    textTransform: "capitalize",
    fontWeight: "700",
    fontFamily: FontFamily.bold,
    width: 33,
    height: 18,
    display: "flex",
    textAlign: "left",
    alignItems: "center",
    top: 0,
    position: "absolute",
  },
  buttonCreateNewItem: {
    height: 18,
    marginLeft: 4,
  },
  addsearchYourSellerParent: {
    marginTop: 4,
    alignItems: "center",
    flexDirection: "row",
  },
  yourSellerListIsEmptyParent: {
    marginTop: 8,
    alignItems: "center",
  },
  noRecords1Parent: {
    marginTop: 140,
    alignItems: "center",
  },
  selectCustomerList: {
    marginLeft: -171.5,
    top: 114,
    borderRadius: Border.br_base,
    backgroundColor: Color.theme13,
    height: 586,
    paddingVertical: Padding.p_base,
    shadowOpacity: 1,
    elevation: 6,
    shadowRadius: 6,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    left: "50%",
    position: "absolute",
  },
  dashboard: {
    color: Color.colorSaddlebrown_100,
    marginTop: 8,
    fontFamily: FontFamily.openSansSemiBold,
    textAlign: "center",
    fontWeight: "600",
    fontSize: FontSize.normal2_size,
    letterSpacing: 0,
  },
  vectorParent: {
    width: 70,
    justifyContent: "center",
    alignItems: "center",
  },
  notification: {
    marginTop: 8,
  },
  vectorWrapper: {
    paddingBottom: Padding.p_5xl,
    justifyContent: "center",
    flexDirection: "row",
  },
  retailers: {
    marginTop: 12,
  },
  frameInner: {
    marginLeft: -12,
    borderTopLeftRadius: Border.br_8xs,
    borderTopRightRadius: Border.br_8xs,
    marginTop: -12,
    top: "50%",
    left: "50%",
    backgroundColor: Color.transprent,
    width: 24,
    display: "none",
    position: "absolute",
  },
  vectorIcon4: {
    width: 19,
    height: 24,
  },
  menuIcons: {
    top: 716,
    borderTopLeftRadius: Border.br_base,
    borderTopRightRadius: Border.br_base,
    borderTopWidth: 1,
    paddingVertical: Padding.p_5xs,
    borderColor: Color.black,
    borderStyle: "solid",
    paddingHorizontal: Padding.p_base,
    width: 375,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
    backgroundColor: Color.fontWhite,
  },
  customerDaskboard: {
    borderRadius: Border.br_6xl,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.fontWhite,
  },
});

export default CustomerDaskboard1;
