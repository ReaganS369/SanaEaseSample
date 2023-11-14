import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Color, Padding, FontFamily, Border } from "../GlobalStyles";

const CustomerProfile = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.customerProfile}>
      <View style={[styles.customerProfileChild, styles.menuIconsLayout]} />
      <View style={styles.homeIndicator}>
        <View style={[styles.shape, styles.shapePosition]} />
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
      <View style={styles.homePosition}>
        <View style={[styles.homeIndicator1, styles.homePosition]}>
          <View style={[styles.shape, styles.shapePosition]} />
        </View>
      </View>
      <View style={[styles.rectangleParent, styles.menuIconsLayout]}>
        <View style={[styles.frameChild, styles.shapePosition]} />
        <View style={[styles.profileParent, styles.id11112222Position]}>
          <Text style={[styles.profile, styles.profileTypo]}>Profile</Text>
          <View style={[styles.frameParent, styles.menuIconsSpaceBlock]}>
            <View style={styles.frameGroup}>
              <View style={styles.userNameWrapper}>
                <Text style={[styles.userName, styles.nameTypo1]}>
                  User Name
                </Text>
              </View>
              <View style={styles.groupWrapper}>
                <View style={styles.id1111222233334444Parent}>
                  <Text style={[styles.id11112222, styles.id11112222Typo]}>
                    id: 1111 2222 3333 4444
                  </Text>
                  <Image
                    style={[styles.fileCopyIcon, styles.userNamePosition]}
                    contentFit="cover"
                    source={require("../assets/file-copy.png")}
                  />
                </View>
              </View>
            </View>
            <View style={styles.frameContainer}>
              <View style={styles.nameParent}>
                <Text style={[styles.name, styles.nameTypo]}>Name</Text>
                <Text style={[styles.pototoSama, styles.localityTypo]}>
                  Pototo Sama
                </Text>
              </View>
              <View style={styles.locationParent}>
                <Text style={styles.nameTypo}>Location</Text>
                <Text style={[styles.manipurImphalEast, styles.localityTypo]}>
                  Manipur, Imphal East, Imphal asdfaddaf sdfkajsddsfa
                </Text>
              </View>
              <View style={styles.phoneNumberParent}>
                <Text style={[styles.name, styles.nameTypo]}>Phone Number</Text>
                <Text style={[styles.pototoSama, styles.localityTypo]}>
                  +91 98765 43120
                </Text>
              </View>
              <View style={styles.emailParent}>
                <Text style={[styles.name, styles.nameTypo]}>Email</Text>
                <Text style={[styles.tombunggmailcom, styles.localityTypo]}>
                  tombung@gmail.com
                </Text>
              </View>
            </View>
          </View>
          <View style={[styles.frameView, styles.frameViewSpaceBlock]}>
            <View style={[styles.frameParent1, styles.frameParentFlexBox1]}>
              <View
                style={[styles.visitedRetailersParent, styles.parentBorder1]}
              >
                <Text style={[styles.visitedRetailers, styles.profile1Typo]}>
                  Visited Retailers
                </Text>
                <Text style={[styles.text1, styles.text1Typo]}>10</Text>
              </View>
              <Pressable
                style={[styles.purchaseHistoryParent, styles.parentBorder1]}
                onPress={() => navigation.navigate("CustomerProfileHistry")}
              >
                <Text style={[styles.visitedRetailers, styles.profile1Typo]}>
                  Purchase History
                </Text>
                <Text style={[styles.text1, styles.text1Typo]}>123</Text>
              </Pressable>
              <View style={[styles.savingsParent, styles.parentBorder1]}>
                <Text style={[styles.visitedRetailers, styles.profile1Typo]}>
                  Savings
                </Text>
                <Text style={[styles.text1, styles.text1Typo]}>32K+</Text>
              </View>
            </View>
            <View
              style={[styles.selectCustomerList, styles.frameViewSpaceBlock]}
            >
              <View
                style={[styles.searchYourSellerParent, styles.parentBorder]}
              >
                <Text
                  style={[styles.searchYourSeller, styles.searchYourSellerClr]}
                >
                  Search your Seller
                </Text>
                <View style={styles.searchIcon}>
                  <Image
                    style={styles.iconlyboldsearch}
                    contentFit="cover"
                    source={require("../assets/iconlyboldsearch1.png")}
                  />
                </View>
              </View>
              <View style={[styles.frameParent2, styles.frameParentFlexBox1]}>
                <View style={styles.component7Parent}>
                  <View style={[styles.component7, styles.componentSpaceBlock]}>
                    <Text style={[styles.locality, styles.localityTypo]}>
                      Locality
                    </Text>
                    <Image
                      style={styles.vectorIcon}
                      contentFit="cover"
                      source={require("../assets/vector9.png")}
                    />
                  </View>
                  <View style={[styles.component8, styles.componentSpaceBlock]}>
                    <Text style={[styles.locality, styles.localityTypo]}>
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
                  <View style={[styles.groupParent, styles.componentFlexBox]}>
                    <Image
                      style={styles.groupIcon}
                      contentFit="cover"
                      source={require("../assets/group.png")}
                    />
                    <View style={[styles.frameItem, styles.parentBorder]} />
                    <Text style={styles.filter}>Filter</Text>
                  </View>
                </View>
              </View>
              <View style={styles.frameParent3}>
                <View>
                  <View
                    style={[
                      styles.controlsChipsRounded,
                      styles.menuIconsSpaceBlock,
                    ]}
                  >
                    <View style={styles.shopNameParent}>
                      <Text style={[styles.shopName, styles.localityTypo]}>
                        Shop name
                      </Text>
                      <View style={styles.ownedByTamubiSasathemTombParent}>
                        <Text
                          style={[styles.ownedByTamubi, styles.id11112222Typo]}
                        >
                          Owned by Tamubi Sasathem, Tombi Somuram and Chaobam
                          Chaobi
                        </Text>
                        <View style={styles.manipurimphalkakwaParent}>
                          <Text
                            style={[
                              styles.manipurimphalkakwa,
                              styles.profile1Typo,
                            ]}
                          >
                            Manipur,Imphal,Kakwa
                          </Text>
                          <Image
                            style={styles.frameInner}
                            contentFit="cover"
                            source={require("../assets/frame-8434.png")}
                          />
                        </View>
                      </View>
                    </View>
                    <View style={styles.topSellingCategoriesParent}>
                      <Text
                        style={[
                          styles.topSellingCategories,
                          styles.profile1Typo,
                        ]}
                      >
                        Top Selling Categories
                      </Text>
                      <View
                        style={[styles.category1, styles.componentFlexBox1]}
                      >
                        <View
                          style={[styles.component3, styles.componentFlexBox]}
                        >
                          <Text style={[styles.locality, styles.localityTypo]}>
                            Category Name
                          </Text>
                        </View>
                        <View
                          style={[styles.component4, styles.componentFlexBox]}
                        >
                          <Text style={[styles.locality, styles.localityTypo]}>
                            Category Name
                          </Text>
                        </View>
                        <View
                          style={[styles.component4, styles.componentFlexBox]}
                        >
                          <Text style={[styles.locality, styles.localityTypo]}>
                            More
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
                <View style={styles.controlsChipsRoundedContainer}>
                  <View
                    style={[
                      styles.controlsChipsRounded,
                      styles.menuIconsSpaceBlock,
                    ]}
                  >
                    <View style={styles.shopNameParent}>
                      <Text style={[styles.shopName, styles.localityTypo]}>
                        Shop name
                      </Text>
                      <View style={styles.ownedByTamubiSasathemTombParent}>
                        <Text
                          style={[styles.ownedByTamubi, styles.id11112222Typo]}
                        >
                          Owned by Tamubi Sasathem, Tombi Somuram and Chaobam
                          Chaobi
                        </Text>
                        <View style={styles.manipurimphalkakwaParent}>
                          <Text
                            style={[
                              styles.manipurimphalkakwa,
                              styles.profile1Typo,
                            ]}
                          >
                            Manipur,Imphal,Kakwa
                          </Text>
                          <Image
                            style={styles.frameInner}
                            contentFit="cover"
                            source={require("../assets/frame-8434.png")}
                          />
                        </View>
                      </View>
                    </View>
                    <View style={styles.topSellingCategoriesParent}>
                      <Text
                        style={[
                          styles.topSellingCategories,
                          styles.profile1Typo,
                        ]}
                      >
                        Top Selling Categories
                      </Text>
                      <View
                        style={[styles.category1, styles.componentFlexBox1]}
                      >
                        <View
                          style={[styles.component3, styles.componentFlexBox]}
                        >
                          <Text style={[styles.locality, styles.localityTypo]}>
                            Category Name
                          </Text>
                        </View>
                        <View
                          style={[styles.component4, styles.componentFlexBox]}
                        >
                          <Text style={[styles.locality, styles.localityTypo]}>
                            Category Name
                          </Text>
                        </View>
                        <View
                          style={[styles.component4, styles.componentFlexBox]}
                        >
                          <Text style={[styles.locality, styles.localityTypo]}>
                            More
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
                <View style={styles.controlsChipsRoundedFrame}>
                  <View
                    style={[
                      styles.controlsChipsRounded,
                      styles.menuIconsSpaceBlock,
                    ]}
                  >
                    <View style={styles.shopNameParent}>
                      <Text style={[styles.shopName, styles.localityTypo]}>
                        Shop name
                      </Text>
                      <View style={styles.ownedByTamubiSasathemTombParent}>
                        <Text
                          style={[styles.ownedByTamubi, styles.id11112222Typo]}
                        >
                          Owned by Tamubi Sasathem, Tombi Somuram and Chaobam
                          Chaobi
                        </Text>
                        <View style={styles.manipurimphalkakwaParent}>
                          <Text
                            style={[
                              styles.manipurimphalkakwa,
                              styles.profile1Typo,
                            ]}
                          >
                            Manipur,Imphal,Kakwa
                          </Text>
                          <Image
                            style={styles.frameInner}
                            contentFit="cover"
                            source={require("../assets/frame-8434.png")}
                          />
                        </View>
                      </View>
                    </View>
                    <View style={styles.topSellingCategoriesParent}>
                      <Text
                        style={[
                          styles.topSellingCategories,
                          styles.profile1Typo,
                        ]}
                      >
                        Top Selling Categories
                      </Text>
                      <View
                        style={[styles.category1, styles.componentFlexBox1]}
                      >
                        <View
                          style={[styles.component3, styles.componentFlexBox]}
                        >
                          <Text style={[styles.locality, styles.localityTypo]}>
                            Category Name
                          </Text>
                        </View>
                        <View
                          style={[styles.component4, styles.componentFlexBox]}
                        >
                          <Text style={[styles.locality, styles.localityTypo]}>
                            Category Name
                          </Text>
                        </View>
                        <View
                          style={[styles.component4, styles.componentFlexBox]}
                        >
                          <Text style={[styles.locality, styles.localityTypo]}>
                            More
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
                <View style={styles.controlsChipsRoundedContainer}>
                  <View
                    style={[
                      styles.controlsChipsRounded,
                      styles.menuIconsSpaceBlock,
                    ]}
                  >
                    <View style={styles.shopNameParent}>
                      <Text style={[styles.shopName, styles.localityTypo]}>
                        Shop name
                      </Text>
                      <View style={styles.ownedByTamubiSasathemTombParent}>
                        <Text
                          style={[styles.ownedByTamubi, styles.id11112222Typo]}
                        >
                          Owned by Tamubi Sasathem, Tombi Somuram and Chaobam
                          Chaobi
                        </Text>
                        <View style={styles.manipurimphalkakwaParent}>
                          <Text
                            style={[
                              styles.manipurimphalkakwa,
                              styles.profile1Typo,
                            ]}
                          >
                            Manipur,Imphal,Kakwa
                          </Text>
                          <Image
                            style={styles.frameInner}
                            contentFit="cover"
                            source={require("../assets/frame-8434.png")}
                          />
                        </View>
                      </View>
                    </View>
                    <View style={styles.topSellingCategoriesParent}>
                      <Text
                        style={[
                          styles.topSellingCategories,
                          styles.profile1Typo,
                        ]}
                      >
                        Top Selling Categories
                      </Text>
                      <View
                        style={[styles.category1, styles.componentFlexBox1]}
                      >
                        <View
                          style={[styles.component3, styles.componentFlexBox]}
                        >
                          <Text style={[styles.locality, styles.localityTypo]}>
                            Category Name
                          </Text>
                        </View>
                        <View
                          style={[styles.component4, styles.componentFlexBox]}
                        >
                          <Text style={[styles.locality, styles.localityTypo]}>
                            Category Name
                          </Text>
                        </View>
                        <View
                          style={[styles.component4, styles.componentFlexBox]}
                        >
                          <Text style={[styles.locality, styles.localityTypo]}>
                            More
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.frameParent4}>
            <View style={[styles.frameParent5, styles.frameParentFlexBox]}>
              <View style={[styles.settingWrapper, styles.frameParentFlexBox]}>
                <Image
                  style={[styles.settingIcon, styles.iconLayout]}
                  contentFit="cover"
                  source={require("../assets/setting.png")}
                />
              </View>
              <Text style={[styles.settings, styles.text1Typo]}>Settings</Text>
            </View>
            <View style={[styles.frameParent6, styles.frameParentFlexBox]}>
              <View style={[styles.settingWrapper, styles.frameParentFlexBox]}>
                <Image
                  style={[styles.settingIcon, styles.iconLayout]}
                  contentFit="cover"
                  source={require("../assets/customer-service.png")}
                />
              </View>
              <Text style={[styles.settings, styles.text1Typo]}>
                Customer Supports
              </Text>
            </View>
            <View style={[styles.frameParent6, styles.frameParentFlexBox]}>
              <View style={[styles.settingWrapper, styles.frameParentFlexBox]}>
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
            style={styles.frameWrapper}
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
          style={[styles.frameChild3, styles.frameChild3Layout]}
          contentFit="cover"
          source={require("../assets/frame-8446.png")}
        />
      </View>
      <View style={[styles.menuIcons, styles.parentBorder]}>
        <Pressable
          style={styles.vectorParent}
          onPress={() => navigation.navigate("CustomerDaskboard1")}
        >
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/vector4.png")}
          />
          <Text style={[styles.dashboard, styles.dashboardTypo]}>
            Dashboard
          </Text>
        </Pressable>
        <Pressable
          style={styles.vectorParent}
          onPress={() => navigation.navigate("CustomerNotification")}
        >
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/notification2.png")}
          />
          <Text style={[styles.dashboard, styles.dashboardTypo]}>
            Notification
          </Text>
        </Pressable>
        <Pressable
          style={styles.vectorWrapper}
          onPress={() => navigation.navigate("CustomerDaskboard")}
        >
          <Image
            style={styles.frameChild3Layout}
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
          <Text style={[styles.retailers, styles.dashboardTypo]}>
            Retailers
          </Text>
        </Pressable>
        <View style={styles.vectorParent}>
          <View style={styles.iconLayout}>
            <View style={[styles.rectangleView, styles.iconLayout]} />
            <Image
              style={[styles.vectorIcon4, styles.groupParentPosition]}
              contentFit="cover"
              source={require("../assets/vector1.png")}
            />
          </View>
          <Text style={[styles.profile1, styles.profile1Typo]}>Profile</Text>
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
  shapePosition: {
    left: "50%",
    position: "absolute",
  },
  statusLayout: {
    height: 44,
    top: 0,
    width: 375,
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
  id11112222Position: {
    top: 0,
    left: "50%",
    position: "absolute",
  },
  profileTypo: {
    fontSize: FontSize.bold_size,
    color: Color.colorBlack,
    letterSpacing: 0,
  },
  menuIconsSpaceBlock: {
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_5xs,
    backgroundColor: Color.fontWhite,
  },
  nameTypo1: {
    fontFamily: FontFamily.bold,
    fontWeight: "700",
  },
  id11112222Typo: {
    fontSize: FontSize.normal1_size,
    fontFamily: FontFamily.normal,
    color: Color.colorBlack,
    letterSpacing: 0,
  },
  userNamePosition: {
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  nameTypo: {
    height: 22,
    width: 150,
    color: Color.black,
    fontSize: FontSize.normal_size,
    textAlign: "left",
    fontFamily: FontFamily.normal,
    letterSpacing: 0,
  },
  localityTypo: {
    fontSize: FontSize.normal_size,
    letterSpacing: 0,
  },
  frameViewSpaceBlock: {
    paddingTop: Padding.p_base,
    backgroundColor: Color.theme13,
    alignItems: "center",
    borderRadius: Border.br_base,
    overflow: "hidden",
  },
  frameParentFlexBox1: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  parentBorder1: {
    paddingVertical: Padding.p_9xs,
    borderRadius: Border.br_5xs,
    justifyContent: "center",
    borderWidth: 1,
    borderStyle: "solid",
    alignItems: "center",
  },
  profile1Typo: {
    fontFamily: FontFamily.openSansSemiBold,
    fontSize: FontSize.normal2_size,
    fontWeight: "600",
    letterSpacing: 0,
  },
  text1Typo: {
    fontSize: FontSize.bold1_size,
    textAlign: "left",
    letterSpacing: 0,
  },
  parentBorder: {
    borderColor: Color.black,
    borderStyle: "solid",
  },
  searchYourSellerClr: {
    color: Color.black,
    textAlign: "left",
  },
  componentSpaceBlock: {
    paddingVertical: Padding.p_12xs,
    justifyContent: "center",
  },
  componentFlexBox: {
    paddingHorizontal: Padding.p_9xs,
    borderRadius: Border.br_9xs,
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
  },
  componentFlexBox1: {
    borderRadius: Border.br_8xs,
    flexDirection: "row",
    alignItems: "center",
  },
  frameParentFlexBox: {
    padding: Padding.p_9xs,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: Border.br_base,
  },
  iconLayout: {
    width: 24,
    height: 24,
  },
  frameChild3Layout: {
    height: 32,
    width: 32,
  },
  dashboardTypo: {
    color: Color.colorDarkslategray,
    fontFamily: FontFamily.openSansSemiBold,
    fontSize: FontSize.normal2_size,
    textAlign: "center",
    fontWeight: "600",
    letterSpacing: 0,
  },
  groupParentPosition: {
    marginTop: -12,
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  customerProfileChild: {
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
  homeIndicator1: {
    backgroundColor: Color.fontWhite,
  },
  frameChild: {
    marginLeft: -188.5,
    top: 403,
    borderRadius: Border.br_5xl,
    width: 376,
    height: 893,
    backgroundColor: Color.theme12,
  },
  profile: {
    width: 355,
    alignItems: "flex-end",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.normal,
  },
  userName: {
    marginTop: -13,
    marginLeft: -65.5,
    zIndex: 0,
    fontSize: FontSize.bold_size,
    color: Color.colorBlack,
    letterSpacing: 0,
    textAlign: "center",
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
    top: 0,
    left: "50%",
    position: "absolute",
  },
  fileCopyIcon: {
    marginTop: -8.5,
    marginLeft: 69,
    width: 16,
    height: 16,
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
    display: "flex",
    alignItems: "center",
  },
  pototoSama: {
    width: 151,
    marginLeft: 4,
    height: 19,
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.normal,
    alignItems: "center",
    color: Color.colorBlack,
  },
  nameParent: {
    width: 319,
    flexDirection: "row",
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
    width: 319,
    flexDirection: "row",
  },
  phoneNumberParent: {
    marginTop: 8,
    width: 319,
    flexDirection: "row",
    alignItems: "center",
  },
  tombunggmailcom: {
    width: 181,
    marginLeft: 4,
    height: 19,
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.normal,
    alignItems: "center",
    color: Color.colorBlack,
  },
  emailParent: {
    marginTop: 8,
    width: 319,
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
  },
  frameContainer: {
    paddingHorizontal: 0,
    marginTop: 16,
    paddingVertical: Padding.p_5xs,
    alignItems: "center",
  },
  frameParent: {
    marginTop: 16,
    paddingVertical: Padding.p_5xs,
    borderWidth: 1,
    borderColor: Color.theme12,
    borderStyle: "solid",
    overflow: "hidden",
    shadowOpacity: 1,
    elevation: 6,
    shadowRadius: 6,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    alignItems: "center",
    borderRadius: Border.br_base,
  },
  visitedRetailers: {
    textAlign: "center",
    color: Color.colorBlack,
  },
  text1: {
    marginTop: 4,
    fontFamily: FontFamily.bold,
    fontWeight: "700",
    color: Color.colorBlack,
  },
  visitedRetailersParent: {
    paddingHorizontal: Padding.p_7xs,
    borderColor: Color.colorSaddlebrown_100,
    backgroundColor: Color.fontWhite,
  },
  purchaseHistoryParent: {
    paddingHorizontal: Padding.p_6xs,
    borderColor: Color.theme12,
  },
  savingsParent: {
    paddingHorizontal: Padding.p_5xs,
    borderColor: Color.theme12,
  },
  frameParent1: {
    width: 319,
  },
  searchYourSeller: {
    width: 210,
    fontSize: FontSize.normal_size,
    letterSpacing: 0,
    display: "flex",
    fontFamily: FontFamily.normal,
    alignItems: "center",
  },
  iconlyboldsearch: {
    width: 20,
    height: 20,
  },
  searchIcon: {
    justifyContent: "center",
    padding: Padding.p_3xs,
    alignItems: "flex-end",
  },
  searchYourSellerParent: {
    width: 339,
    paddingLeft: Padding.p_xs,
    paddingTop: Padding.p_9xs,
    paddingRight: Padding.p_9xs,
    paddingBottom: Padding.p_9xs,
    borderRadius: Border.br_5xs,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    backgroundColor: Color.fontWhite,
  },
  locality: {
    fontFamily: FontFamily.normal,
    textAlign: "center",
    color: Color.colorBlack,
  },
  vectorIcon: {
    height: 8,
    width: 12,
    marginLeft: 4,
  },
  component7: {
    borderRadius: Border.br_8xs,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: Padding.p_5xs,
    borderColor: Color.colorSaddlebrown_100,
    backgroundColor: Color.fontWhite,
    borderWidth: 1,
    borderStyle: "solid",
    overflow: "hidden",
  },
  component8: {
    marginLeft: 8,
    borderRadius: Border.br_8xs,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: Padding.p_5xs,
    borderColor: Color.colorSaddlebrown_100,
    backgroundColor: Color.fontWhite,
    borderWidth: 1,
    borderStyle: "solid",
    overflow: "hidden",
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
    paddingVertical: Padding.p_11xs,
    marginTop: -12,
    top: "50%",
    left: "50%",
    position: "absolute",
    borderColor: Color.black,
    borderStyle: "solid",
    borderWidth: 1,
    backgroundColor: Color.fontWhite,
  },
  filterIcon: {
    width: 55,
    height: 24,
  },
  frameParent2: {
    width: 327,
    marginTop: 16,
  },
  shopName: {
    textTransform: "capitalize",
    fontFamily: FontFamily.bold,
    fontWeight: "700",
    textAlign: "center",
    color: Color.colorBlack,
  },
  ownedByTamubi: {
    width: 301,
    textAlign: "left",
  },
  manipurimphalkakwa: {
    color: Color.black,
    textAlign: "left",
  },
  frameInner: {
    height: 12,
    width: 12,
    marginLeft: 4,
  },
  manipurimphalkakwaParent: {
    marginTop: 4,
    flexDirection: "row",
  },
  ownedByTamubiSasathemTombParent: {
    marginTop: 4,
    justifyContent: "center",
  },
  shopNameParent: {
    justifyContent: "center",
  },
  topSellingCategories: {
    textAlign: "left",
    color: Color.colorBlack,
  },
  component3: {
    paddingVertical: Padding.p_12xs,
    justifyContent: "center",
    backgroundColor: Color.theme13,
  },
  component4: {
    paddingVertical: Padding.p_12xs,
    justifyContent: "center",
    backgroundColor: Color.theme13,
    marginLeft: 4,
  },
  category1: {
    width: 301,
    marginTop: 8,
  },
  topSellingCategoriesParent: {
    width: 301,
    justifyContent: "center",
    marginTop: 16,
  },
  controlsChipsRounded: {
    width: 327,
    borderRadius: Border.br_5xs,
    justifyContent: "center",
    paddingVertical: Padding.p_5xs,
    overflow: "hidden",
  },
  controlsChipsRoundedContainer: {
    marginTop: 8,
  },
  controlsChipsRoundedFrame: {
    height: 156,
    marginTop: 8,
    borderRadius: Border.br_base,
    overflow: "hidden",
  },
  frameParent3: {
    height: 508,
    borderRadius: Border.br_5xs,
    marginTop: 16,
    alignItems: "center",
  },
  selectCustomerList: {
    paddingBottom: Padding.p_5xs,
    paddingHorizontal: Padding.p_5xs,
    marginTop: 4,
    shadowOpacity: 1,
    elevation: 6,
    shadowRadius: 6,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    width: 355,
  },
  frameView: {
    marginTop: 16,
  },
  settingIcon: {
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
    color: Color.colorBlack,
  },
  frameParent5: {
    width: 335,
    backgroundColor: Color.theme13,
  },
  frameParent6: {
    width: 335,
    backgroundColor: Color.theme13,
    marginTop: 8,
  },
  frameParent4: {
    paddingHorizontal: 0,
    marginTop: 16,
    paddingVertical: Padding.p_5xs,
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
  frameWrapper: {
    marginTop: 16,
    alignItems: "center",
  },
  profileParent: {
    marginLeft: -177.5,
    height: 667,
    alignItems: "center",
    borderRadius: Border.br_base,
  },
  frameChild3: {
    top: 65,
    left: 315,
    position: "absolute",
    overflow: "hidden",
  },
  rectangleParent: {
    top: 60,
    height: 629,
    borderRadius: Border.br_base,
    left: 0,
  },
  dashboard: {
    marginTop: 8,
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
  retailers: {
    marginTop: 12,
  },
  rectangleView: {
    marginLeft: -12,
    borderTopLeftRadius: Border.br_8xs,
    borderTopRightRadius: Border.br_8xs,
    display: "none",
    backgroundColor: Color.transprent,
    marginTop: -12,
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  vectorIcon4: {
    marginLeft: -10,
    width: 19,
    height: 24,
  },
  profile1: {
    color: Color.colorSaddlebrown_100,
    marginTop: 8,
    textAlign: "center",
  },
  menuIcons: {
    top: 707,
    borderTopLeftRadius: Border.br_base,
    borderTopRightRadius: Border.br_base,
    borderTopWidth: 1,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_base,
    backgroundColor: Color.fontWhite,
    marginLeft: -187.5,
    left: "50%",
    width: 375,
    position: "absolute",
  },
  customerProfile: {
    borderRadius: Border.br_6xl,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.fontWhite,
  },
});

export default CustomerProfile;
