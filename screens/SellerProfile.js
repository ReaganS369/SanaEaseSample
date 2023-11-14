import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Color, Padding, FontFamily, Border } from "../GlobalStyles";

const SellerProfile = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.sellerProfile}>
      <View style={styles.all}>
        <View style={styles.statusLayout}>
          <View style={[styles.statusBarChild, styles.top1Position]} />
          <Image
            style={styles.connectionsIcon}
            contentFit="cover"
            source={require("../assets/connections.png")}
          />
          <View style={[styles.time, styles.timePosition]}>
            <Text style={styles.time1}>9:27</Text>
          </View>
        </View>
        <View style={styles.body}>
          <View style={[styles.bck, styles.bckPosition]} />
          <View style={[styles.body1, styles.bckPosition]}>
            <Text style={[styles.profile, styles.profileTypo]}>Profile</Text>
            <View style={styles.body2}>
              <View style={[styles.bodyTop, styles.bodyTopSpaceBlock]}>
                <View style={styles.top}>
                  <View style={[styles.top1, styles.top1Position]}>
                    <View style={[styles.shopName, styles.btnFlexBox]}>
                      <Text style={[styles.shopName1, styles.text1Typo1]}>
                        Shop Name
                      </Text>
                    </View>
                    <View style={styles.id}>
                      <View style={styles.id1111222233334444Parent}>
                        <Text style={[styles.id11112222, styles.bckPosition]}>
                          id: 1111 2222 3333 4444
                        </Text>
                        <Image
                          style={[styles.fileCopyIcon, styles.bckPosition]}
                          contentFit="cover"
                          source={require("../assets/file-copy.png")}
                        />
                      </View>
                    </View>
                  </View>
                  <Image
                    style={[styles.editIcon, styles.iconLayout1]}
                    contentFit="cover"
                    source={require("../assets/frame-8446.png")}
                  />
                </View>
                <View style={styles.bodyUpper}>
                  <View style={styles.owner}>
                    <Text style={[styles.owner1, styles.owner1Typo]}>
                      Owner
                    </Text>
                    <Text style={[styles.pototoSama, styles.todayClr]}>
                      Pototo Sama
                    </Text>
                  </View>
                  <View style={styles.location}>
                    <Text style={styles.owner1Typo}>Location</Text>
                    <Text style={[styles.manipurImphalEast, styles.todayClr]}>
                      Manipur, Imphal East, Imphal asdfaddaf sdfkajsddsfa
                    </Text>
                  </View>
                  <View style={styles.number}>
                    <Text style={[styles.owner1, styles.owner1Typo]}>
                      Public Number
                    </Text>
                    <Text style={[styles.pototoSama, styles.todayClr]}>
                      +91 98765 43120
                    </Text>
                  </View>
                  <View style={styles.email}>
                    <Text style={[styles.owner1, styles.owner1Typo]}>
                      Email
                    </Text>
                    <Text style={[styles.tombunggmailcom, styles.todayClr]}>
                      tombung@gmail.com
                    </Text>
                  </View>
                </View>
                <View style={[styles.qr, styles.bodyBorder]}>
                  <Pressable
                    style={[styles.qr1, styles.qr1SpaceBlock]}
                    onPress={() =>
                      navigation.navigate("BottomTabsRoot", {
                        screen: "SellerQR1",
                      })
                    }
                  >
                    <Image
                      style={styles.vectorIcon}
                      contentFit="cover"
                      source={require("../assets/vector12.png")}
                    />
                    <Text style={[styles.yourQr, styles.todayClr]}>
                      Your QR
                    </Text>
                  </Pressable>
                  <View style={[styles.payment, styles.qr1SpaceBlock]}>
                    <Image
                      style={styles.vectorIcon1}
                      contentFit="cover"
                      source={require("../assets/vector13.png")}
                    />
                    <Text style={[styles.yourQr, styles.todayClr]}>
                      Your Payment
                    </Text>
                  </View>
                </View>
              </View>
              <View style={[styles.bodyMid, styles.bodyMidShadowBox]}>
                <View style={styles.balance}>
                  <View style={styles.balance}>
                    <Text style={[styles.yourBalance, styles.text1Typo]}>
                      Your Balance
                    </Text>
                  </View>
                  <View style={styles.blcBdy}>
                    <View style={styles.blcFlexBox}>
                      <Text style={[styles.currentBalance, styles.rs2343Typo]}>
                        Current Balance
                      </Text>
                      <Text style={[styles.rs31329, styles.rs2343Typo]}>
                        Rs. 31,329
                      </Text>
                    </View>
                    <View style={[styles.svng, styles.blcFlexBox]}>
                      <Text style={[styles.deductedAmount, styles.rs2343Typo]}>
                        Deducted Amount
                      </Text>
                      <Text style={[styles.rs2343, styles.amTypo]}>
                        Rs. 2,343
                      </Text>
                    </View>
                    <View style={[styles.svng, styles.blcFlexBox]}>
                      <Text style={[styles.deductedAmount, styles.rs2343Typo]}>
                        Recent Deposit
                      </Text>
                      <Text style={[styles.am, styles.amTypo]}>
                        01/01/23, 00:00 AM
                      </Text>
                    </View>
                  </View>
                </View>
                <Pressable
                  style={[styles.btn, styles.btnFlexBox]}
                  onPress={() => navigation.navigate("SellerTopUp")}
                >
                  <Text style={[styles.deposit, styles.text1Typo]}>
                    Deposit
                  </Text>
                </Pressable>
              </View>
            </View>
            <View style={styles.bodyUpper}>
              <View style={styles.choiceFlexBox}>
                <View style={[styles.customer, styles.customerBorder]}>
                  <Text style={[styles.customer1, styles.text1Typo]}>
                    Customer
                  </Text>
                  <Text style={[styles.text1, styles.text1Typo]}>1340</Text>
                </View>
                <View style={[styles.products, styles.productsBorder]}>
                  <Text style={[styles.customer1, styles.text1Typo]}>
                    Products
                  </Text>
                  <Text style={[styles.text1, styles.text1Typo]}>123</Text>
                </View>
                <View style={[styles.category, styles.productsBorder]}>
                  <Text style={[styles.customer1, styles.text1Typo]}>
                    Category
                  </Text>
                  <Text style={[styles.text1, styles.text1Typo]}>32</Text>
                </View>
              </View>
              <View style={styles.list}>
                <View style={[styles.seachBar, styles.seachBarBorder]}>
                  <Text
                    style={[
                      styles.searchYourCustomer,
                      styles.currentBalanceClr,
                    ]}
                  >{`Search your Customer `}</Text>
                  <View style={styles.searchIcon}>
                    <View
                      style={[
                        styles.searchIconChild,
                        styles.frameInnerPosition1,
                      ]}
                    />
                    <Image
                      style={styles.iconlyboldsearch}
                      contentFit="cover"
                      source={require("../assets/iconlyboldsearch.png")}
                    />
                  </View>
                </View>
                <View style={styles.list1}>
                  <View style={[styles.filter, styles.btnFlexBox]}>
                    <View style={[styles.component7, styles.customerBorder]}>
                      <Text style={[styles.today, styles.todayClr]}>Today</Text>
                      <Image
                        style={styles.shapeIcon}
                        contentFit="cover"
                        source={require("../assets/shape1.png")}
                      />
                    </View>
                    <View style={styles.filterIcon}>
                      <View
                        style={[styles.groupParent, styles.frameInnerPosition]}
                      >
                        <Image
                          style={styles.groupIcon}
                          contentFit="cover"
                          source={require("../assets/group.png")}
                        />
                        <View
                          style={[styles.frameChild, styles.seachBarBorder]}
                        />
                        <Text style={styles.filter1}>Filter</Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.list2}>
                    <View
                      style={[
                        styles.controlsChipsRounded,
                        styles.controlsLayout,
                      ]}
                    >
                      <Text
                        style={[
                          styles.customerNameNickname,
                          styles.bckPosition,
                        ]}
                      >
                        Customer Name (NickName)
                      </Text>
                    </View>
                    <View
                      style={[
                        styles.controlsChipsRounded1,
                        styles.controlsLayout,
                      ]}
                    >
                      <Text
                        style={[
                          styles.customerNameNickname,
                          styles.bckPosition,
                        ]}
                      >
                        Customer Name (NickName)
                      </Text>
                    </View>
                    <View
                      style={[
                        styles.controlsChipsRounded1,
                        styles.controlsLayout,
                      ]}
                    >
                      <Text
                        style={[
                          styles.customerNameNickname,
                          styles.bckPosition,
                        ]}
                      >
                        Customer Name (NickName)
                      </Text>
                    </View>
                    <View
                      style={[
                        styles.controlsChipsRounded1,
                        styles.controlsLayout,
                      ]}
                    >
                      <Text
                        style={[
                          styles.customerNameNickname,
                          styles.bckPosition,
                        ]}
                      >
                        Customer Name (NickName)
                      </Text>
                    </View>
                    <View
                      style={[
                        styles.controlsChipsRounded1,
                        styles.controlsLayout,
                      ]}
                    >
                      <Text
                        style={[
                          styles.customerNameNickname,
                          styles.bckPosition,
                        ]}
                      >
                        Customer Name (NickName)
                      </Text>
                    </View>
                    <View
                      style={[
                        styles.controlsChipsRounded1,
                        styles.controlsLayout,
                      ]}
                    >
                      <Text
                        style={[
                          styles.customerNameNickname,
                          styles.bckPosition,
                        ]}
                      >
                        Customer Name (NickName)
                      </Text>
                    </View>
                    <View
                      style={[
                        styles.controlsChipsRounded1,
                        styles.controlsLayout,
                      ]}
                    >
                      <Text
                        style={[
                          styles.customerNameNickname,
                          styles.bckPosition,
                        ]}
                      >
                        Customer Name (NickName)
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View style={[styles.setings, styles.bodyMidShadowBox]}>
              <Pressable
                style={[styles.sting, styles.mreFlexBox]}
                onPress={() => navigation.navigate("Setting")}
              >
                <View style={[styles.settingWrapper, styles.mreFlexBox]}>
                  <Image
                    style={[styles.settingIcon, styles.iconLayout]}
                    contentFit="cover"
                    source={require("../assets/setting.png")}
                  />
                </View>
                <Text style={[styles.settings, styles.text1Typo]}>
                  Settings
                </Text>
              </Pressable>
              <View style={[styles.mre, styles.mreFlexBox]}>
                <View style={[styles.settingWrapper, styles.mreFlexBox]}>
                  <Image
                    style={[styles.settingIcon, styles.iconLayout]}
                    contentFit="cover"
                    source={require("../assets/customer-service2.png")}
                  />
                </View>
                <Text style={[styles.settings, styles.text1Typo]}>
                  Customer Supports
                </Text>
              </View>
              <View style={[styles.mre, styles.mreFlexBox]}>
                <View style={[styles.settingWrapper, styles.mreFlexBox]}>
                  <Image
                    style={[styles.settingIcon, styles.iconLayout]}
                    contentFit="cover"
                    source={require("../assets/help.png")}
                  />
                </View>
                <Text style={[styles.settings, styles.text1Typo]}>
                  Frequently asked Questions
                </Text>
              </View>
            </View>
            <Pressable
              style={styles.bodyUpper}
              onPress={() => navigation.navigate("Loginsignup")}
            >
              <View style={[styles.signUpLogInWrapper, styles.seachBarLayout]}>
                <Text style={[styles.signUp, styles.text1Typo]}>
                  Sign Up / Log In
                </Text>
              </View>
            </Pressable>
          </View>
        </View>
        <View style={styles.nag}>
          <View style={[styles.menuIcons, styles.seachBarBorder]}>
            <View style={styles.vectorParent}>
              <Image
                style={styles.iconLayout}
                contentFit="cover"
                source={require("../assets/vector4.png")}
              />
              <Text style={[styles.dashboard, styles.profile1Typo]}>
                Dashboard
              </Text>
            </View>
            <View style={styles.vectorParent}>
              <Image
                style={styles.iconLayout}
                contentFit="cover"
                source={require("../assets/notification.png")}
              />
              <Text style={[styles.dashboard, styles.profile1Typo]}>
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
              <Image
                style={styles.iconLayout}
                contentFit="cover"
                source={require("../assets/frame-8493.png")}
              />
              <Text style={[styles.customer2, styles.profile1Typo]}>
                Customer
              </Text>
            </View>
          </View>
          <View style={styles.homeIndicator}>
            <View style={[styles.shape, styles.shapePosition]} />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  top1Position: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  timePosition: {
    top: 8,
    position: "absolute",
  },
  bckPosition: {
    left: "50%",
    position: "absolute",
  },
  profileTypo: {
    fontSize: FontSize.bold_size,
    color: Color.colorBlack,
    letterSpacing: 0,
  },
  bodyTopSpaceBlock: {
    paddingHorizontal: Padding.p_base,
    backgroundColor: Color.fontWhite,
  },
  btnFlexBox: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  text1Typo1: {
    fontFamily: FontFamily.bold,
    fontWeight: "700",
  },
  iconLayout1: {
    height: 32,
    width: 32,
  },
  owner1Typo: {
    height: 22,
    width: 150,
    color: Color.black,
    fontSize: FontSize.normal_size,
    textAlign: "left",
    fontFamily: FontFamily.normal,
    letterSpacing: 0,
  },
  todayClr: {
    letterSpacing: 0,
    color: Color.colorBlack,
  },
  bodyBorder: {
    borderColor: Color.theme12,
    borderStyle: "solid",
    borderWidth: 1,
    overflow: "hidden",
  },
  qr1SpaceBlock: {
    paddingVertical: Padding.p_9xs,
    borderRadius: Border.br_5xs,
  },
  bodyMidShadowBox: {
    elevation: 6,
    shadowRadius: 6,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 1,
    },
  },
  text1Typo: {
    fontSize: FontSize.bold1_size,
    letterSpacing: 0,
  },
  rs2343Typo: {
    textTransform: "capitalize",
    fontFamily: FontFamily.bold,
    fontWeight: "700",
  },
  blcFlexBox: {
    paddingVertical: 0,
    width: 343,
    paddingHorizontal: Padding.p_5xs,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  amTypo: {
    textAlign: "right",
    fontSize: FontSize.normal_size,
    letterSpacing: 0,
  },
  customerBorder: {
    borderColor: Color.colorSaddlebrown_100,
    justifyContent: "center",
    borderWidth: 1,
    borderStyle: "solid",
    alignItems: "center",
  },
  productsBorder: {
    borderColor: Color.fontWhite,
    paddingVertical: Padding.p_9xs,
    borderRadius: Border.br_5xs,
    justifyContent: "center",
    borderWidth: 1,
    borderStyle: "solid",
    alignItems: "center",
  },
  seachBarBorder: {
    borderColor: Color.black,
    borderStyle: "solid",
  },
  currentBalanceClr: {
    color: Color.black,
    textAlign: "left",
    letterSpacing: 0,
  },
  frameInnerPosition1: {
    display: "none",
    borderTopRightRadius: Border.br_8xs,
    backgroundColor: Color.transprent,
  },
  frameInnerPosition: {
    marginTop: -12,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  controlsLayout: {
    height: 40,
    backgroundColor: Color.fontWhite,
  },
  mreFlexBox: {
    padding: Padding.p_9xs,
    flexDirection: "row",
    borderRadius: Border.br_base,
    alignItems: "center",
  },
  iconLayout: {
    width: 24,
    height: 24,
  },
  seachBarLayout: {
    borderRadius: Border.br_5xs,
    overflow: "hidden",
  },
  profile1Typo: {
    fontFamily: FontFamily.openSansSemiBold,
    fontSize: FontSize.normal2_size,
    textAlign: "center",
    fontWeight: "600",
    letterSpacing: 0,
  },
  shapePosition: {
    marginLeft: -67.5,
    left: "50%",
    position: "absolute",
  },
  statusBarChild: {
    height: 44,
    width: 375,
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
    left: 21,
    width: 56,
    height: 23,
  },
  statusLayout: {
    height: 44,
    width: 375,
  },
  bck: {
    marginLeft: -187.5,
    top: 430,
    borderRadius: Border.br_5xl,
    width: 376,
    height: 904,
    backgroundColor: Color.theme12,
  },
  profile: {
    width: 355,
    alignItems: "flex-end",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.normal,
  },
  shopName1: {
    marginTop: -13,
    zIndex: 0,
    marginLeft: -67.5,
    left: "50%",
    position: "absolute",
    fontSize: FontSize.bold_size,
    color: Color.colorBlack,
    letterSpacing: 0,
    textAlign: "center",
    top: "50%",
  },
  shopName: {
    padding: Padding.p_3xs,
    height: 40,
    backgroundColor: Color.fontWhite,
    width: 311,
  },
  id11112222: {
    marginLeft: -85,
    fontSize: FontSize.normal1_size,
    fontFamily: FontFamily.normal,
    textAlign: "center",
    color: Color.colorBlack,
    letterSpacing: 0,
    top: 0,
  },
  fileCopyIcon: {
    marginTop: -8.5,
    marginLeft: 69,
    width: 16,
    top: "50%",
    height: 16,
    overflow: "hidden",
  },
  id1111222233334444Parent: {
    width: 170,
    height: 19,
  },
  id: {
    marginTop: 4,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  top1: {
    alignItems: "center",
  },
  editIcon: {
    left: 279,
    top: 8,
    position: "absolute",
    overflow: "hidden",
  },
  top: {
    height: 63,
    width: 311,
  },
  owner1: {
    display: "flex",
    alignItems: "center",
  },
  pototoSama: {
    width: 151,
    marginLeft: 4,
    fontSize: FontSize.normal_size,
    height: 19,
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.normal,
    alignItems: "center",
    color: Color.colorBlack,
  },
  owner: {
    flexDirection: "row",
    width: 311,
    alignItems: "center",
  },
  manipurImphalEast: {
    width: 165,
    height: 68,
    marginLeft: 4,
    fontSize: FontSize.normal_size,
    textAlign: "left",
    fontFamily: FontFamily.normal,
    color: Color.colorBlack,
  },
  location: {
    marginTop: 8,
    flexDirection: "row",
    width: 311,
  },
  number: {
    marginTop: 8,
    flexDirection: "row",
    width: 311,
    alignItems: "center",
  },
  tombunggmailcom: {
    width: 181,
    marginLeft: 4,
    fontSize: FontSize.normal_size,
    height: 19,
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.normal,
    alignItems: "center",
    color: Color.colorBlack,
  },
  email: {
    marginTop: 8,
    flexDirection: "row",
    width: 311,
    alignItems: "center",
    overflow: "hidden",
  },
  bodyUpper: {
    alignItems: "center",
    marginTop: 16,
  },
  vectorIcon: {
    width: 16,
    height: 16,
  },
  yourQr: {
    marginLeft: 4,
    fontSize: FontSize.normal_size,
    fontFamily: FontFamily.normal,
    textAlign: "center",
    color: Color.colorBlack,
  },
  qr1: {
    paddingHorizontal: Padding.p_5xs,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Color.theme12,
  },
  vectorIcon1: {
    height: 14,
    width: 16,
  },
  payment: {
    marginLeft: 8,
    paddingHorizontal: Padding.p_5xs,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Color.theme12,
  },
  qr: {
    borderTopLeftRadius: Border.br_5xs,
    borderTopRightRadius: Border.br_5xs,
    paddingHorizontal: Padding.p_lg,
    paddingVertical: Padding.p_5xs,
    backgroundColor: Color.theme13,
    justifyContent: "center",
    flexDirection: "row",
    borderWidth: 1,
    alignItems: "center",
    marginTop: 16,
  },
  bodyTop: {
    shadowColor: "rgba(0, 0, 0, 0.4)",
    shadowRadius: 4,
    elevation: 4,
    paddingTop: Padding.p_5xs,
    borderWidth: 1,
    borderColor: Color.theme12,
    borderStyle: "solid",
    overflow: "hidden",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    paddingHorizontal: Padding.p_base,
    borderRadius: Border.br_base,
    alignItems: "center",
  },
  yourBalance: {
    fontFamily: FontFamily.bold,
    fontWeight: "700",
    textAlign: "left",
    color: Color.colorBlack,
  },
  balance: {
    alignItems: "center",
  },
  currentBalance: {
    width: 121,
    color: Color.black,
    textAlign: "left",
    letterSpacing: 0,
    fontSize: FontSize.normal1_size,
  },
  rs31329: {
    fontSize: FontSize.normal_size,
    textAlign: "left",
    color: Color.colorBlack,
    letterSpacing: 0,
  },
  deductedAmount: {
    color: Color.black,
    textAlign: "left",
    letterSpacing: 0,
    fontSize: FontSize.normal1_size,
  },
  rs2343: {
    textTransform: "capitalize",
    fontFamily: FontFamily.bold,
    fontWeight: "700",
    color: Color.colorBlack,
  },
  svng: {
    marginTop: 4,
  },
  am: {
    color: Color.colorDarkslategray,
    fontFamily: FontFamily.normal,
  },
  blcBdy: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 16,
  },
  deposit: {
    width: 126,
    height: 29,
    justifyContent: "center",
    fontFamily: FontFamily.bold,
    fontWeight: "700",
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    color: Color.colorBlack,
  },
  btn: {
    width: 328,
    paddingVertical: Padding.p_5xs_5,
    paddingHorizontal: 0,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.theme12,
    marginTop: 16,
  },
  bodyMid: {
    padding: Padding.p_5xs,
    backgroundColor: Color.theme13,
    marginTop: 8,
    borderWidth: 1,
    borderColor: Color.theme12,
    borderStyle: "solid",
    overflow: "hidden",
    borderRadius: Border.br_base,
    alignItems: "center",
  },
  body2: {
    width: 355,
    alignItems: "center",
    marginTop: 16,
  },
  customer1: {
    fontFamily: FontFamily.bold,
    fontWeight: "700",
    textAlign: "center",
    color: Color.colorBlack,
  },
  text1: {
    marginTop: 4,
    fontFamily: FontFamily.bold,
    fontWeight: "700",
    textAlign: "left",
    color: Color.colorBlack,
  },
  customer: {
    paddingHorizontal: Padding.p_7xs,
    paddingVertical: Padding.p_9xs,
    borderRadius: Border.br_5xs,
    backgroundColor: Color.theme13,
  },
  products: {
    paddingHorizontal: Padding.p_6xs,
  },
  category: {
    paddingHorizontal: Padding.p_5xs,
  },
  choiceFlexBox: {
    width: 319,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  searchYourCustomer: {
    width: 182,
    fontSize: FontSize.normal_size,
    display: "flex",
    fontFamily: FontFamily.normal,
    alignItems: "center",
  },
  searchIconChild: {
    borderBottomRightRadius: Border.br_8xs,
    height: 32,
    width: 32,
    zIndex: 0,
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
    zIndex: 1,
    position: "absolute",
    overflow: "hidden",
  },
  searchIcon: {
    justifyContent: "center",
    padding: Padding.p_3xs,
    alignItems: "flex-end",
  },
  seachBar: {
    paddingLeft: Padding.p_base,
    paddingTop: Padding.p_7xs,
    paddingRight: Padding.p_7xs,
    paddingBottom: Padding.p_7xs,
    width: 319,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: Border.br_5xs,
    overflow: "hidden",
    borderWidth: 1,
    backgroundColor: Color.fontWhite,
  },
  today: {
    fontSize: FontSize.normal_size,
    fontFamily: FontFamily.normal,
    textAlign: "center",
    color: Color.colorBlack,
  },
  shapeIcon: {
    height: 7,
    width: 12,
    marginLeft: 4,
  },
  component7: {
    borderRadius: Border.br_8xs,
    paddingVertical: Padding.p_12xs,
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
  filter1: {
    fontSize: FontSize.normal2_size,
    marginLeft: 4,
    textAlign: "left",
    fontFamily: FontFamily.normal,
    color: Color.colorBlack,
    letterSpacing: 0,
  },
  groupParent: {
    marginLeft: -27.5,
    borderRadius: Border.br_9xs,
    paddingHorizontal: Padding.p_9xs,
    paddingVertical: Padding.p_11xs,
    borderColor: Color.black,
    borderStyle: "solid",
    flexDirection: "row",
    borderWidth: 1,
    alignItems: "center",
    overflow: "hidden",
    backgroundColor: Color.fontWhite,
  },
  filterIcon: {
    width: 55,
    height: 24,
  },
  filter: {
    width: 327,
  },
  customerNameNickname: {
    marginTop: -11,
    marginLeft: -102.5,
    fontSize: FontSize.normal_size,
    fontFamily: FontFamily.normal,
    textAlign: "center",
    color: Color.colorBlack,
    letterSpacing: 0,
    top: "50%",
  },
  controlsChipsRounded: {
    width: 327,
    borderWidth: 1,
    borderColor: Color.theme12,
    borderStyle: "solid",
    overflow: "hidden",
    borderRadius: Border.br_base,
  },
  controlsChipsRounded1: {
    width: 327,
    marginTop: 8,
    borderWidth: 1,
    borderColor: Color.theme12,
    borderStyle: "solid",
    overflow: "hidden",
    borderRadius: Border.br_base,
  },
  list2: {
    height: 280,
    borderRadius: Border.br_base,
    alignItems: "center",
    marginTop: 16,
    overflow: "hidden",
  },
  list1: {
    height: 320,
    marginTop: 24,
    alignItems: "center",
  },
  list: {
    padding: Padding.p_base,
    backgroundColor: Color.theme13,
    marginTop: 4,
    borderRadius: Border.br_base,
    alignItems: "center",
    overflow: "hidden",
  },
  settingIcon: {
    overflow: "hidden",
  },
  settingWrapper: {
    backgroundColor: Color.transprent,
    padding: Padding.p_9xs,
    justifyContent: "center",
    overflow: "hidden",
  },
  settings: {
    marginLeft: 16,
    textAlign: "left",
    fontFamily: FontFamily.normal,
    color: Color.colorBlack,
  },
  sting: {
    width: 335,
    backgroundColor: Color.theme13,
  },
  mre: {
    width: 335,
    backgroundColor: Color.theme13,
    marginTop: 8,
  },
  setings: {
    paddingHorizontal: 0,
    paddingVertical: Padding.p_5xs,
    marginTop: 16,
  },
  signUp: {
    color: Color.fontWhite,
    fontFamily: FontFamily.bold,
    fontWeight: "700",
    textAlign: "left",
  },
  signUpLogInWrapper: {
    backgroundColor: Color.colorSaddlebrown_100,
    paddingVertical: Padding.p_base,
    width: 335,
    paddingHorizontal: 0,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "flex-end",
  },
  body1: {
    marginLeft: -179.5,
    height: 640,
    alignItems: "center",
    top: 0,
  },
  body: {
    width: 379,
    height: 629,
    marginTop: 16,
  },
  dashboard: {
    marginTop: 8,
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
  customer2: {
    marginTop: 12,
    color: Color.colorBlack,
  },
  menuIcons: {
    borderTopLeftRadius: Border.br_base,
    borderTopRightRadius: Border.br_base,
    borderTopWidth: 1,
    paddingVertical: Padding.p_5xs,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: Padding.p_base,
    backgroundColor: Color.fontWhite,
    width: 375,
  },
  shape: {
    bottom: 8,
    backgroundColor: Color.colorDarkslategray,
    width: 135,
    height: 5,
    borderRadius: Border.br_3xs,
  },
  homeIndicator: {
    height: 34,
    width: 375,
    backgroundColor: Color.fontWhite,
  },
  nag: {
    marginTop: 16,
  },
  all: {
    left: -2,
    top: 0,
    position: "absolute",
  },
  sellerProfile: {
    borderRadius: Border.br_6xl,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
    backgroundColor: Color.fontWhite,
  },
});

export default SellerProfile;
