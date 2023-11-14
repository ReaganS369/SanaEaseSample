import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Padding, Color, Border } from "../GlobalStyles";

const CustomerProfileHistry = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.customerProfileHistry}>
      <View
        style={[styles.customerProfileHistryChild, styles.menuIconsLayout]}
      />
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
          <Text style={styles.time1}>9:27</Text>
        </View>
      </View>
      <View style={[styles.rectangleParent, styles.frameChildPosition]}>
        <View style={[styles.frameChild, styles.frameChildPosition]} />
        <View style={[styles.profileParent, styles.id11112222Position]}>
          <Text style={styles.profile}>Profile</Text>
          <View style={[styles.frameParent, styles.frameParentSpaceBlock]}>
            <View style={styles.frameGroup}>
              <View style={styles.userNameWrapper}>
                <Text style={[styles.userName, styles.text1Typo1]}>
                  User Name
                </Text>
              </View>
              <View style={styles.groupWrapper}>
                <View style={styles.id1111222233334444Parent}>
                  <Text style={[styles.id11112222, styles.textTypo1]}>
                    id: 1111 2222 3333 4444
                  </Text>
                  <Image
                    style={styles.fileCopyIcon}
                    contentFit="cover"
                    source={require("../assets/file-copy.png")}
                  />
                </View>
              </View>
            </View>
            <View style={[styles.frameContainer, styles.frameSpaceBlock]}>
              <View style={[styles.nameParent, styles.parentLayout]}>
                <Text style={[styles.name, styles.totalTypo]}>Name</Text>
                <Text style={[styles.pototoSama, styles.todayTypo]}>
                  Pototo Sama
                </Text>
              </View>
              <View style={[styles.locationParent, styles.parentLayout]}>
                <Text style={[styles.location, styles.totalTypo]}>
                  Location
                </Text>
                <Text style={[styles.manipurImphalEast, styles.todayTypo]}>
                  Manipur, Imphal East, Imphal asdfaddaf sdfkajsddsfa
                </Text>
              </View>
              <View style={[styles.phoneNumberParent, styles.parentLayout]}>
                <Text style={[styles.name, styles.totalTypo]}>
                  Phone Number
                </Text>
                <Text style={[styles.pototoSama, styles.todayTypo]}>
                  +91 98765 43120
                </Text>
              </View>
              <View style={[styles.emailParent, styles.parentLayout]}>
                <Text style={[styles.name, styles.totalTypo]}>Email</Text>
                <Text style={[styles.tombunggmailcom, styles.todayTypo]}>
                  tombung@gmail.com
                </Text>
              </View>
            </View>
          </View>
          <View style={[styles.frameView, styles.frameViewSpaceBlock]}>
            <View style={[styles.frameParent1, styles.parentLayout]}>
              <Pressable
                style={[styles.visitedRetailersParent, styles.parentBorder]}
                onPress={() => navigation.navigate("CustomerProfile")}
              >
                <Text style={[styles.visitedRetailers, styles.retailersTypo]}>
                  Visited Retailers
                </Text>
                <Text style={[styles.text1, styles.text1Typo]}>10</Text>
              </Pressable>
              <View style={styles.purchaseHistoryParent}>
                <Text style={[styles.visitedRetailers, styles.retailersTypo]}>
                  Purchase History
                </Text>
                <Text style={[styles.text1, styles.text1Typo]}>123</Text>
              </View>
              <View
                style={[styles.savingsParent, styles.savingsParentSpaceBlock]}
              >
                <Text style={[styles.visitedRetailers, styles.retailersTypo]}>
                  Savings
                </Text>
                <Text style={[styles.text1, styles.text1Typo]}>32K+</Text>
              </View>
            </View>
            <View
              style={[
                styles.selectCustomerList,
                styles.savingsParentSpaceBlock,
              ]}
            >
              <View style={styles.frameParent2}>
                <View style={styles.component7Parent}>
                  <View style={styles.componentBorder}>
                    <Text style={[styles.today, styles.todayTypo]}>Today</Text>
                    <Image
                      style={styles.vectorIcon}
                      contentFit="cover"
                      source={require("../assets/vector9.png")}
                    />
                  </View>
                  <View style={[styles.component8, styles.componentBorder]}>
                    <Text style={[styles.today, styles.todayTypo]}>
                      Category
                    </Text>
                    <Image
                      style={styles.vectorIcon}
                      contentFit="cover"
                      source={require("../assets/vector9.png")}
                    />
                  </View>
                </View>
                <View style={styles.filterIcon}>
                  <View style={[styles.groupParent, styles.frameItemBorder]}>
                    <Image
                      style={styles.groupIcon}
                      contentFit="cover"
                      source={require("../assets/group.png")}
                    />
                    <View style={[styles.frameItem, styles.frameItemBorder]} />
                    <Text style={styles.filter}>Filter</Text>
                  </View>
                </View>
              </View>
              <View style={[styles.frameParent3, styles.frameParentSpaceBlock]}>
                <View style={styles.frameParentBorder}>
                  <View style={styles.totalNumberOfProductsParent}>
                    <Text style={[styles.totalNumberOf, styles.totalTypo]}>
                      Total Number of Products
                    </Text>
                    <Text style={[styles.text3, styles.textClr]}>1,000</Text>
                  </View>
                  <View style={styles.parentFlexBox}>
                    <Text style={[styles.totalAmount, styles.totalTypo]}>
                      Total Amount
                    </Text>
                    <View style={styles.parent}>
                      <Text style={[styles.text4, styles.textPosition]}>
                        1,00,00,000
                      </Text>
                      <Text style={[styles.text5, styles.textTypo]}>₹</Text>
                    </View>
                  </View>
                  <View style={[styles.savingParent, styles.parentFlexBox]}>
                    <Text style={[styles.totalAmount, styles.totalTypo]}>
                      Saving
                    </Text>
                    <View style={styles.totalNumberOfProductsParent}>
                      <Text style={styles.textTypo}>₹</Text>
                      <Text style={[styles.text7, styles.textClr]}>100</Text>
                    </View>
                  </View>
                  <View style={styles.parentFlexBox}>
                    <Text
                      style={[styles.dateTime, styles.totalTypo]}
                    >{`Date & Time`}</Text>
                    <View style={[styles.amWrapper, styles.amLayout]}>
                      <Text style={[styles.am, styles.amLayout]}>
                        01/01/23, 00:00 AM
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={[styles.frameParent5, styles.frameParentBorder]}>
                  <View style={styles.totalNumberOfProductsParent}>
                    <Text style={[styles.totalNumberOf, styles.totalTypo]}>
                      Total Number of Products
                    </Text>
                    <Text style={[styles.text3, styles.textClr]}>1,000</Text>
                  </View>
                  <View style={styles.parentFlexBox}>
                    <Text style={[styles.totalAmount, styles.totalTypo]}>
                      Total Amount
                    </Text>
                    <View style={styles.parent}>
                      <Text style={[styles.text4, styles.textPosition]}>
                        1,00,00,000
                      </Text>
                      <Text style={[styles.text5, styles.textTypo]}>₹</Text>
                    </View>
                  </View>
                  <View style={[styles.savingParent, styles.parentFlexBox]}>
                    <Text style={[styles.totalAmount, styles.totalTypo]}>
                      Saving
                    </Text>
                    <View style={styles.totalNumberOfProductsParent}>
                      <Text style={styles.textTypo}>₹</Text>
                      <Text style={[styles.text7, styles.textClr]}>100</Text>
                    </View>
                  </View>
                  <View style={styles.parentFlexBox}>
                    <Text
                      style={[styles.dateTime, styles.totalTypo]}
                    >{`Date & Time`}</Text>
                    <View style={[styles.amWrapper, styles.amLayout]}>
                      <Text style={[styles.am, styles.amLayout]}>
                        01/01/23, 00:00 AM
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={[styles.frameParent5, styles.frameParentBorder]}>
                  <View style={styles.totalNumberOfProductsParent}>
                    <Text style={[styles.totalNumberOf, styles.totalTypo]}>
                      Total Number of Products
                    </Text>
                    <Text style={[styles.text3, styles.textClr]}>1,000</Text>
                  </View>
                  <View style={styles.parentFlexBox}>
                    <Text style={[styles.totalAmount, styles.totalTypo]}>
                      Total Amount
                    </Text>
                    <View style={styles.parent}>
                      <Text style={[styles.text4, styles.textPosition]}>
                        1,00,00,000
                      </Text>
                      <Text style={[styles.text5, styles.textTypo]}>₹</Text>
                    </View>
                  </View>
                  <View style={[styles.savingParent, styles.parentFlexBox]}>
                    <Text style={[styles.totalAmount, styles.totalTypo]}>
                      Saving
                    </Text>
                    <View style={styles.totalNumberOfProductsParent}>
                      <Text style={styles.textTypo}>₹</Text>
                      <Text style={[styles.text7, styles.textClr]}>100</Text>
                    </View>
                  </View>
                  <View style={styles.parentFlexBox}>
                    <Text
                      style={[styles.dateTime, styles.totalTypo]}
                    >{`Date & Time`}</Text>
                    <View style={[styles.amWrapper, styles.amLayout]}>
                      <Text style={[styles.am, styles.amLayout]}>
                        01/01/23, 00:00 AM
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.frameSpaceBlock}>
            <View style={[styles.frameParent8, styles.frameParentFlexBox]}>
              <View style={[styles.settingWrapper, styles.frameParentFlexBox]}>
                <Image
                  style={styles.settingIcon}
                  contentFit="cover"
                  source={require("../assets/setting.png")}
                />
              </View>
              <Text style={[styles.settings, styles.text1Typo]}>Settings</Text>
            </View>
            <View style={[styles.frameParent9, styles.frameParentFlexBox]}>
              <View style={[styles.settingWrapper, styles.frameParentFlexBox]}>
                <Image
                  style={styles.settingIcon}
                  contentFit="cover"
                  source={require("../assets/customer-service.png")}
                />
              </View>
              <Text style={[styles.settings, styles.text1Typo]}>
                Customer Supports
              </Text>
            </View>
            <View style={[styles.frameParent9, styles.frameParentFlexBox]}>
              <View style={[styles.settingWrapper, styles.frameParentFlexBox]}>
                <Image
                  style={styles.settingIcon}
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
            style={styles.frameParentSpaceBlock}
            onPress={() => navigation.navigate("Loginsignup")}
          >
            <View style={styles.signUpLogInWrapper}>
              <Text style={[styles.signUp, styles.text1Typo]}>
                Sign Up / Log In
              </Text>
            </View>
          </Pressable>
        </View>
        <Image
          style={[styles.frameInner, styles.frameInnerLayout]}
          contentFit="cover"
          source={require("../assets/frame-8446.png")}
        />
      </View>
      <View style={[styles.menuIcons, styles.frameItemBorder]}>
        <Pressable
          style={styles.vectorParent}
          onPress={() => navigation.navigate("CustomerDaskboard1")}
        >
          <Image
            style={styles.vectorIcon2}
            contentFit="cover"
            source={require("../assets/vector4.png")}
          />
          <Text style={[styles.dashboard, styles.textClr]}>Dashboard</Text>
        </Pressable>
        <Pressable
          style={styles.vectorParent}
          onPress={() => navigation.navigate("CustomerNotification")}
        >
          <Image
            style={styles.notificationIcon}
            contentFit="cover"
            source={require("../assets/notification.png")}
          />
          <Text style={[styles.dashboard, styles.textClr]}>Notification</Text>
        </Pressable>
        <Pressable
          style={styles.vectorWrapper}
          onPress={() => navigation.navigate("CustomerDaskboard")}
        >
          <Image
            style={styles.frameInnerLayout}
            contentFit="cover"
            source={require("../assets/vector2.png")}
          />
        </Pressable>
        <Pressable
          style={styles.vectorParent}
          onPress={() => navigation.navigate("CustomerSearvhCustomer")}
        >
          <Image
            style={styles.vectorIcon2}
            contentFit="cover"
            source={require("../assets/frame-84932.png")}
          />
          <Text style={[styles.retailers, styles.textClr]}>Retailers</Text>
        </Pressable>
        <View style={styles.vectorParent}>
          <View style={styles.vectorIcon2}>
            <View style={[styles.rectangleView, styles.groupParentPosition]} />
            <Image
              style={[styles.vectorIcon4, styles.groupParentPosition]}
              contentFit="cover"
              source={require("../assets/vector1.png")}
            />
          </View>
          <Text style={[styles.profile1, styles.retailersTypo]}>Profile</Text>
        </View>
      </View>
      <View style={styles.homePosition}>
        <View style={[styles.homeIndicator1, styles.homePosition]}>
          <View style={styles.shape} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  menuIconsLayout: {
    width: 375,
    position: "absolute",
  },
  statusLayout: {
    height: 44,
    top: 0,
    width: 375,
    position: "absolute",
  },
  frameChildPosition: {
    width: 376,
    left: 0,
    position: "absolute",
  },
  id11112222Position: {
    top: 0,
    position: "absolute",
  },
  frameParentSpaceBlock: {
    marginTop: 16,
    alignItems: "center",
  },
  text1Typo1: {
    fontFamily: FontFamily.bold,
    fontWeight: "700",
  },
  textTypo1: {
    fontSize: FontSize.normal1_size,
    fontFamily: FontFamily.normal,
  },
  frameSpaceBlock: {
    paddingHorizontal: 0,
    marginTop: 16,
    paddingVertical: Padding.p_5xs,
  },
  parentLayout: {
    width: 319,
    flexDirection: "row",
  },
  totalTypo: {
    height: 22,
    color: Color.black,
    fontSize: FontSize.normal_size,
    textAlign: "left",
    fontFamily: FontFamily.normal,
    letterSpacing: 0,
  },
  todayTypo: {
    fontSize: FontSize.normal_size,
    fontFamily: FontFamily.normal,
    color: Color.colorBlack,
    letterSpacing: 0,
  },
  frameViewSpaceBlock: {
    paddingTop: Padding.p_base,
    backgroundColor: Color.theme13,
    borderRadius: Border.br_base,
    overflow: "hidden",
  },
  parentBorder: {
    paddingVertical: Padding.p_9xs,
    borderRadius: Border.br_5xs,
    justifyContent: "center",
    borderWidth: 1,
    borderColor: Color.theme12,
    borderStyle: "solid",
  },
  retailersTypo: {
    fontFamily: FontFamily.openSansSemiBold,
    fontSize: FontSize.normal2_size,
    textAlign: "center",
    fontWeight: "600",
  },
  text1Typo: {
    fontSize: FontSize.bold1_size,
    textAlign: "left",
    letterSpacing: 0,
  },
  savingsParentSpaceBlock: {
    paddingHorizontal: Padding.p_5xs,
    alignItems: "center",
  },
  componentBorder: {
    paddingVertical: Padding.p_12xs,
    borderRadius: Border.br_8xs,
    paddingHorizontal: Padding.p_5xs,
    borderColor: Color.colorSaddlebrown_100,
    justifyContent: "center",
    flexDirection: "row",
    borderWidth: 1,
    borderStyle: "solid",
    alignItems: "center",
    overflow: "hidden",
    backgroundColor: Color.fontWhite,
  },
  frameItemBorder: {
    borderColor: Color.black,
    borderStyle: "solid",
  },
  textClr: {
    color: Color.colorDarkslategray,
    letterSpacing: 0,
  },
  textPosition: {
    marginTop: -9.4,
    top: "50%",
    position: "absolute",
  },
  textTypo: {
    width: 9,
    color: Color.black,
    fontSize: FontSize.normal1_size,
    height: 19,
    textAlign: "left",
    fontFamily: FontFamily.normal,
    letterSpacing: 0,
  },
  parentFlexBox: {
    marginTop: 9,
    flexDirection: "row",
    alignItems: "center",
  },
  amLayout: {
    width: 120,
    height: 19,
  },
  frameParentBorder: {
    padding: Padding.p_base,
    borderWidth: 1,
    borderColor: Color.theme12,
    borderStyle: "solid",
    alignItems: "center",
    borderRadius: Border.br_base,
    backgroundColor: Color.fontWhite,
  },
  frameParentFlexBox: {
    padding: Padding.p_9xs,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: Border.br_base,
  },
  frameInnerLayout: {
    height: 32,
    width: 32,
  },
  groupParentPosition: {
    marginTop: -12,
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  homePosition: {
    height: 34,
    bottom: 0,
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  customerProfileHistryChild: {
    top: 660,
    height: 152,
    backgroundColor: Color.theme12,
    left: 0,
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
    left: "0%",
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
    marginLeft: -187.5,
    left: "50%",
  },
  frameChild: {
    top: 403,
    borderRadius: Border.br_5xl,
    height: 897,
    backgroundColor: Color.theme12,
  },
  profile: {
    width: 355,
    alignItems: "flex-end",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.normal,
    fontSize: FontSize.bold_size,
    color: Color.colorBlack,
    letterSpacing: 0,
  },
  userName: {
    marginTop: -13,
    marginLeft: -65.5,
    zIndex: 0,
    fontSize: FontSize.bold_size,
    fontWeight: "700",
    textAlign: "center",
    color: Color.colorBlack,
    letterSpacing: 0,
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  userNameWrapper: {
    height: 40,
    padding: Padding.p_3xs,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Color.fontWhite,
  },
  id11112222: {
    marginLeft: -85,
    textAlign: "center",
    color: Color.colorBlack,
    letterSpacing: 0,
    top: 0,
    position: "absolute",
    left: "50%",
  },
  fileCopyIcon: {
    marginTop: -8.5,
    marginLeft: 69,
    width: 16,
    top: "50%",
    height: 16,
    left: "50%",
    position: "absolute",
    overflow: "hidden",
  },
  id1111222233334444Parent: {
    width: 170,
    height: 19,
  },
  groupWrapper: {
    marginTop: 4,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  frameGroup: {
    alignItems: "center",
  },
  name: {
    width: 150,
    height: 22,
    color: Color.black,
    display: "flex",
    alignItems: "center",
  },
  pototoSama: {
    width: 151,
    marginLeft: 4,
    height: 19,
    display: "flex",
    alignItems: "center",
    textAlign: "left",
  },
  nameParent: {
    alignItems: "center",
  },
  location: {
    width: 150,
    height: 22,
    color: Color.black,
  },
  manipurImphalEast: {
    width: 165,
    height: 68,
    marginLeft: 4,
    textAlign: "left",
  },
  locationParent: {
    marginTop: 8,
  },
  phoneNumberParent: {
    marginTop: 8,
    alignItems: "center",
  },
  tombunggmailcom: {
    width: 181,
    marginLeft: 4,
    height: 19,
    display: "flex",
    alignItems: "center",
    textAlign: "left",
  },
  emailParent: {
    marginTop: 8,
    alignItems: "center",
    overflow: "hidden",
  },
  frameContainer: {
    alignItems: "center",
  },
  frameParent: {
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_base,
    backgroundColor: Color.fontWhite,
    borderWidth: 1,
    overflow: "hidden",
    borderColor: Color.theme12,
    borderStyle: "solid",
    marginTop: 16,
    shadowOpacity: 1,
    elevation: 6,
    shadowRadius: 6,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: Border.br_base,
  },
  visitedRetailers: {
    color: Color.colorBlack,
    letterSpacing: 0,
  },
  text1: {
    marginTop: 4,
    fontFamily: FontFamily.bold,
    fontWeight: "700",
    color: Color.colorBlack,
  },
  visitedRetailersParent: {
    paddingHorizontal: Padding.p_7xs,
    alignItems: "center",
  },
  purchaseHistoryParent: {
    paddingHorizontal: Padding.p_6xs,
    borderColor: Color.colorSaddlebrown_100,
    paddingVertical: Padding.p_9xs,
    borderRadius: Border.br_5xs,
    justifyContent: "center",
    borderWidth: 1,
    borderStyle: "solid",
    alignItems: "center",
    backgroundColor: Color.fontWhite,
  },
  savingsParent: {
    paddingVertical: Padding.p_9xs,
    borderRadius: Border.br_5xs,
    justifyContent: "center",
    borderWidth: 1,
    borderColor: Color.theme12,
    borderStyle: "solid",
  },
  frameParent1: {
    justifyContent: "space-between",
    alignItems: "center",
  },
  today: {
    textAlign: "center",
  },
  vectorIcon: {
    height: 8,
    width: 12,
    marginLeft: 4,
  },
  component8: {
    marginLeft: 8,
  },
  component7Parent: {
    width: 247,
    flexDirection: "row",
    alignItems: "center",
  },
  groupIcon: {
    height: 9,
    width: 12,
  },
  frameItem: {
    borderRightWidth: 0.5,
    width: 1,
    height: 21,
    marginLeft: 4,
  },
  filter: {
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
    marginTop: -12,
    top: "50%",
    left: "50%",
    position: "absolute",
    flexDirection: "row",
    borderWidth: 1,
    overflow: "hidden",
    alignItems: "center",
    backgroundColor: Color.fontWhite,
  },
  filterIcon: {
    width: 55,
    height: 24,
  },
  frameParent2: {
    width: 327,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  totalNumberOf: {
    width: 184,
    color: Color.black,
    height: 22,
  },
  text3: {
    width: 35,
    marginLeft: 84,
    fontSize: FontSize.normal1_size,
    fontFamily: FontFamily.normal,
    height: 19,
    textAlign: "left",
  },
  totalNumberOfProductsParent: {
    flexDirection: "row",
    alignItems: "center",
  },
  totalAmount: {
    width: 97,
    color: Color.black,
    height: 22,
  },
  text4: {
    width: 71,
    color: Color.colorDarkslategray,
    letterSpacing: 0,
    fontSize: FontSize.normal1_size,
    fontFamily: FontFamily.normal,
    height: 19,
    textAlign: "left",
    left: 9,
  },
  text5: {
    marginTop: -9.4,
    top: "50%",
    position: "absolute",
    left: 0,
  },
  parent: {
    width: 80,
    marginLeft: 126,
    height: 19,
  },
  text7: {
    width: 24,
    fontSize: FontSize.normal1_size,
    fontFamily: FontFamily.normal,
    height: 19,
    textAlign: "left",
  },
  savingParent: {
    width: 300,
    justifyContent: "space-between",
  },
  dateTime: {
    width: 88,
    color: Color.black,
    height: 22,
  },
  am: {
    textAlign: "right",
    marginTop: -9.4,
    top: "50%",
    position: "absolute",
    color: Color.colorDarkslategray,
    letterSpacing: 0,
    fontSize: FontSize.normal1_size,
    fontFamily: FontFamily.normal,
    left: 0,
  },
  amWrapper: {
    marginLeft: 95,
  },
  frameParent5: {
    marginTop: 8,
  },
  frameParent3: {
    height: 510,
  },
  selectCustomerList: {
    height: 632,
    paddingBottom: Padding.p_5xs,
    paddingTop: Padding.p_base,
    backgroundColor: Color.theme13,
    borderRadius: Border.br_base,
    overflow: "hidden",
    marginTop: 4,
    shadowOpacity: 1,
    elevation: 6,
    shadowRadius: 6,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    paddingHorizontal: Padding.p_5xs,
    width: 355,
  },
  frameView: {
    marginTop: 16,
    alignItems: "center",
  },
  settingIcon: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  settingWrapper: {
    backgroundColor: Color.transprent,
    justifyContent: "center",
    overflow: "hidden",
  },
  settings: {
    marginLeft: 16,
    fontFamily: FontFamily.normal,
    fontSize: FontSize.bold1_size,
    color: Color.colorBlack,
  },
  frameParent8: {
    width: 335,
    backgroundColor: Color.theme13,
    padding: Padding.p_9xs,
  },
  frameParent9: {
    width: 335,
    backgroundColor: Color.theme13,
    padding: Padding.p_9xs,
    marginTop: 8,
  },
  signUp: {
    color: Color.fontWhite,
    fontFamily: FontFamily.bold,
    fontWeight: "700",
  },
  signUpLogInWrapper: {
    backgroundColor: Color.colorSaddlebrown_100,
    paddingVertical: Padding.p_base,
    width: 335,
    borderRadius: Border.br_5xs,
    paddingHorizontal: 0,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "flex-end",
    overflow: "hidden",
  },
  profileParent: {
    height: 664,
    alignItems: "center",
    left: 9,
    borderRadius: Border.br_base,
  },
  frameInner: {
    top: 65,
    left: 315,
    position: "absolute",
    overflow: "hidden",
  },
  rectangleParent: {
    top: 60,
    height: 633,
    borderRadius: Border.br_base,
  },
  vectorIcon2: {
    width: 24,
    height: 24,
  },
  dashboard: {
    fontFamily: FontFamily.openSansSemiBold,
    fontSize: FontSize.normal2_size,
    textAlign: "center",
    fontWeight: "600",
    marginTop: 8,
  },
  vectorParent: {
    width: 70,
    justifyContent: "center",
    alignItems: "center",
  },
  notificationIcon: {
    width: 24,
    height: 24,
  },
  vectorWrapper: {
    paddingBottom: Padding.p_5xl,
    justifyContent: "center",
    flexDirection: "row",
  },
  retailers: {
    marginTop: 12,
    fontFamily: FontFamily.openSansSemiBold,
    fontSize: FontSize.normal2_size,
    textAlign: "center",
    fontWeight: "600",
  },
  rectangleView: {
    marginLeft: -12,
    borderTopLeftRadius: Border.br_8xs,
    borderTopRightRadius: Border.br_8xs,
    display: "none",
    backgroundColor: Color.transprent,
    width: 24,
    height: 24,
  },
  vectorIcon4: {
    marginLeft: -10,
    width: 19,
    height: 24,
  },
  profile1: {
    color: Color.colorSaddlebrown_100,
    marginTop: 8,
    letterSpacing: 0,
  },
  menuIcons: {
    top: 707,
    borderTopLeftRadius: Border.br_base,
    borderTopRightRadius: Border.br_base,
    borderTopWidth: 1,
    justifyContent: "space-between",
    flexDirection: "row",
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_base,
    backgroundColor: Color.fontWhite,
    alignItems: "center",
    marginLeft: -187.5,
    left: "50%",
    width: 375,
    position: "absolute",
  },
  homeIndicator1: {
    backgroundColor: Color.fontWhite,
  },
  customerProfileHistry: {
    borderRadius: Border.br_6xl,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.fontWhite,
  },
});

export default CustomerProfileHistry;
