import React, { useState, useCallback } from "react";
import { StyleSheet, View, Text, Pressable, Modal } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import More from "../components/More";
import { Padding, FontFamily, Color, Border, FontSize } from "../GlobalStyles";

const CustomerSearvhCustomer = () => {
  const navigation = useNavigation();
  const [dotMoreIconVisible, setDotMoreIconVisible] = useState(false);

  const openDotMoreIcon = useCallback(() => {
    setDotMoreIconVisible(true);
  }, []);

  const closeDotMoreIcon = useCallback(() => {
    setDotMoreIconVisible(false);
  }, []);

  return (
    <>
      <View style={styles.customerSearvhcustomer}>
        <View style={styles.homeIndicator}>
          <View style={styles.shape} />
        </View>
        <View style={[styles.statusBar, styles.statusLayout]}>
          <View style={[styles.statusBarChild, styles.childPosition]} />
          <Image
            style={styles.connectionsIcon}
            contentFit="cover"
            source={require("../assets/connections.png")}
          />
          <View style={styles.time}>
            <Text style={styles.time1}>9:27</Text>
          </View>
        </View>
        <View style={styles.selectCustomerList}>
          <View style={[styles.frameParent, styles.menuIconsFlexBox]}>
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
                  District
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
                <View style={[styles.frameChild, styles.parentBorder]} />
                <Text style={styles.filter}>Filter</Text>
              </View>
            </View>
          </View>
          <View style={styles.frameGroup}>
            <Pressable
              onPress={() => navigation.navigate("CustomerSellerProfile")}
            >
              <View
                style={[
                  styles.controlsChipsRounded,
                  styles.menuIconsSpaceBlock,
                ]}
              >
                <View style={styles.shopNameParent}>
                  <Text style={styles.shopName}>Shop name</Text>
                  <View style={styles.ownedByTamubiSasathemTombParent}>
                    <Text style={[styles.ownedByTamubi, styles.localityTypo]}>
                      Owned by Tamubi Sasathem, Tombi Somuram and Chaobam Chaobi
                    </Text>
                    <View style={styles.manipurimphalkakwaParent}>
                      <Text
                        style={[styles.manipurimphalkakwa, styles.textTypo]}
                      >
                        Manipur,Imphal,Kakwa
                      </Text>
                      <Image
                        style={styles.frameItem}
                        contentFit="cover"
                        source={require("../assets/frame-84341.png")}
                      />
                    </View>
                  </View>
                </View>
                <View style={styles.topSellingCategoriesParent}>
                  <Text style={[styles.topSellingCategories, styles.textTypo]}>
                    Top Selling Categories
                  </Text>
                  <View style={styles.category}>
                    <View style={[styles.component3, styles.componentFlexBox]}>
                      <Text style={[styles.locality, styles.localityTypo]}>
                        Category Name
                      </Text>
                    </View>
                    <View style={[styles.component4, styles.componentFlexBox]}>
                      <Text style={[styles.locality, styles.localityTypo]}>
                        Category Name
                      </Text>
                    </View>
                    <View style={[styles.component4, styles.componentFlexBox]}>
                      <Text style={[styles.locality, styles.localityTypo]}>
                        More
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </Pressable>
            <View style={styles.controlsChipsRoundedContainer}>
              <View
                style={[
                  styles.controlsChipsRounded,
                  styles.menuIconsSpaceBlock,
                ]}
              >
                <View style={styles.shopNameParent}>
                  <Text style={styles.shopName}>Shop name</Text>
                  <View style={styles.ownedByTamubiSasathemTombParent}>
                    <Text style={[styles.ownedByTamubi, styles.localityTypo]}>
                      Owned by Tamubi Sasathem, Tombi Somuram and Chaobam Chaobi
                    </Text>
                    <View style={styles.manipurimphalkakwaParent}>
                      <Text
                        style={[styles.manipurimphalkakwa, styles.textTypo]}
                      >
                        Manipur,Imphal,Kakwa
                      </Text>
                      <Image
                        style={styles.frameItem}
                        contentFit="cover"
                        source={require("../assets/frame-84341.png")}
                      />
                    </View>
                  </View>
                </View>
                <View style={styles.topSellingCategoriesParent}>
                  <Text style={[styles.topSellingCategories, styles.textTypo]}>
                    Top Selling Categories
                  </Text>
                  <View style={styles.category}>
                    <View style={[styles.component3, styles.componentFlexBox]}>
                      <Text style={[styles.locality, styles.localityTypo]}>
                        Category Name
                      </Text>
                    </View>
                    <View style={[styles.component4, styles.componentFlexBox]}>
                      <Text style={[styles.locality, styles.localityTypo]}>
                        Category Name
                      </Text>
                    </View>
                    <View style={[styles.component4, styles.componentFlexBox]}>
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
                  <Text style={styles.shopName}>Shop name</Text>
                  <View style={styles.ownedByTamubiSasathemTombParent}>
                    <Text style={[styles.ownedByTamubi, styles.localityTypo]}>
                      Owned by Tamubi Sasathem, Tombi Somuram and Chaobam Chaobi
                    </Text>
                    <View style={styles.manipurimphalkakwaParent}>
                      <Text
                        style={[styles.manipurimphalkakwa, styles.textTypo]}
                      >
                        Manipur,Imphal,Kakwa
                      </Text>
                      <Image
                        style={styles.frameItem}
                        contentFit="cover"
                        source={require("../assets/frame-84341.png")}
                      />
                    </View>
                  </View>
                </View>
                <View style={styles.topSellingCategoriesParent}>
                  <Text style={[styles.topSellingCategories, styles.textTypo]}>
                    Top Selling Categories
                  </Text>
                  <View style={styles.category}>
                    <View style={[styles.component3, styles.componentFlexBox]}>
                      <Text style={[styles.locality, styles.localityTypo]}>
                        Category Name
                      </Text>
                    </View>
                    <View style={[styles.component4, styles.componentFlexBox]}>
                      <Text style={[styles.locality, styles.localityTypo]}>
                        Category Name
                      </Text>
                    </View>
                    <View style={[styles.component4, styles.componentFlexBox]}>
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
                  <Text style={styles.shopName}>Shop name</Text>
                  <View style={styles.ownedByTamubiSasathemTombParent}>
                    <Text style={[styles.ownedByTamubi, styles.localityTypo]}>
                      Owned by Tamubi Sasathem, Tombi Somuram and Chaobam Chaobi
                    </Text>
                    <View style={styles.manipurimphalkakwaParent}>
                      <Text
                        style={[styles.manipurimphalkakwa, styles.textTypo]}
                      >
                        Manipur,Imphal,Kakwa
                      </Text>
                      <Image
                        style={styles.frameItem}
                        contentFit="cover"
                        source={require("../assets/frame-84341.png")}
                      />
                    </View>
                  </View>
                </View>
                <View style={styles.topSellingCategoriesParent}>
                  <Text style={[styles.topSellingCategories, styles.textTypo]}>
                    Top Selling Categories
                  </Text>
                  <View style={styles.category}>
                    <View style={[styles.component3, styles.componentFlexBox]}>
                      <Text style={[styles.locality, styles.localityTypo]}>
                        Category Name
                      </Text>
                    </View>
                    <View style={[styles.component4, styles.componentFlexBox]}>
                      <Text style={[styles.locality, styles.localityTypo]}>
                        Category Name
                      </Text>
                    </View>
                    <View style={[styles.component4, styles.componentFlexBox]}>
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
        <View style={[styles.menuIcons, styles.menuIconsSpaceBlock]}>
          <Pressable
            style={styles.vectorParent}
            onPress={() => navigation.navigate("CustomerDaskboard1")}
          >
            <Image
              style={styles.iconLayout1}
              contentFit="cover"
              source={require("../assets/vector4.png")}
            />
            <Text style={[styles.dashboard, styles.textTypo]}>Dashboard</Text>
          </Pressable>
          <Pressable
            style={styles.vectorParent}
            onPress={() => navigation.navigate("CustomerNotification")}
          >
            <Image
              style={styles.iconLayout1}
              contentFit="cover"
              source={require("../assets/notification.png")}
            />
            <Text style={[styles.dashboard, styles.textTypo]}>
              Notification
            </Text>
          </Pressable>
          <Pressable
            style={styles.vectorWrapper}
            onPress={() => navigation.navigate("CustomerDaskboard")}
          >
            <Image
              style={styles.iconLayout}
              contentFit="cover"
              source={require("../assets/vector2.png")}
            />
          </Pressable>
          <View style={styles.vectorParent}>
            <Image
              style={styles.iconLayout1}
              contentFit="cover"
              source={require("../assets/frame-84933.png")}
            />
            <Text style={[styles.retailers, styles.textTypo]}>Retailers</Text>
          </View>
          <Pressable
            style={styles.vectorParent}
            onPress={() => navigation.navigate("CustomerProfile")}
          >
            <View style={styles.iconLayout1}>
              <View style={[styles.rectangleView, styles.logoChildPosition]} />
              <Image
                style={[styles.vectorIcon4, styles.iconPosition]}
                contentFit="cover"
                source={require("../assets/vector.png")}
              />
            </View>
            <Text style={[styles.dashboard, styles.textTypo]}>Profile</Text>
          </Pressable>
        </View>
        <View style={styles.statusBar1}>
          <View style={styles.leftSide}>
            <View style={styles.logo}>
              <View style={[styles.logoChild, styles.logoChildPosition]} />
              <Image
                style={styles.asset91}
                contentFit="cover"
                source={require("../assets/asset-9-1.png")}
              />
            </View>
          </View>
          <View style={styles.leftSide}>
            <View
              style={[styles.searchingSomethingParent, styles.parentBorder]}
            >
              <Text style={[styles.searchingSomething, styles.localityTypo]}>
                Searching Something|
              </Text>
              <View style={styles.searchIcon}>
                <Image
                  style={styles.iconlyboldsearch}
                  contentFit="cover"
                  source={require("../assets/iconlyboldsearch1.png")}
                />
              </View>
            </View>
            <Pressable
              style={[styles.qrScanIcon, styles.iconLayout]}
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
            <Pressable
              style={[styles.qrScanIcon, styles.iconLayout]}
              onPress={openDotMoreIcon}
            >
              <Image
                style={[styles.vectorIcon5, styles.groupParentPosition]}
                contentFit="cover"
                source={require("../assets/vector10.png")}
              />
              <View style={styles.iconChildShadowBox} />
            </Pressable>
          </View>
        </View>
      </View>

      <Modal animationType="fade" transparent visible={dotMoreIconVisible}>
        <View style={styles.dotMoreIconOverlay}>
          <Pressable style={styles.dotMoreIconBg} onPress={closeDotMoreIcon} />
          <More onClose={closeDotMoreIcon} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  statusLayout: {
    height: 44,
    width: 375,
    position: "absolute",
  },
  childPosition: {
    left: 0,
    top: 0,
  },
  menuIconsFlexBox: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  componentSpaceBlock: {
    paddingVertical: Padding.p_12xs,
    justifyContent: "center",
  },
  localityTypo: {
    fontFamily: FontFamily.normal,
    color: Color.colorBlack,
    letterSpacing: 0,
  },
  componentFlexBox: {
    paddingHorizontal: Padding.p_9xs,
    borderRadius: Border.br_9xs,
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
  parentBorder: {
    borderColor: Color.black,
    borderStyle: "solid",
  },
  menuIconsSpaceBlock: {
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_base,
    backgroundColor: Color.fontWhite,
  },
  textTypo: {
    fontFamily: FontFamily.openSansSemiBold,
    fontSize: FontSize.normal2_size,
    fontWeight: "600",
    letterSpacing: 0,
  },
  logoChildPosition: {
    display: "none",
    position: "absolute",
  },
  iconPosition: {
    marginLeft: -10,
    marginTop: -12,
    height: 24,
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  iconLayout: {
    height: 32,
    width: 32,
  },
  groupParentPosition: {
    marginTop: -12,
    top: "50%",
    left: "50%",
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
    right: "0%",
    bottom: "0%",
    left: "0%",
    position: "absolute",
    width: "100%",
  },
  statusBarChild: {
    height: 44,
    width: 375,
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
    top: 0,
    marginLeft: -187.5,
    height: 44,
    left: "50%",
  },
  locality: {
    fontSize: FontSize.normal_size,
    textAlign: "center",
  },
  vectorIcon: {
    height: 8,
    marginLeft: 4,
    width: 12,
  },
  component7: {
    borderWidth: 1,
    backgroundColor: Color.fontWhite,
    borderColor: Color.colorSaddlebrown_100,
    borderStyle: "solid",
    paddingVertical: Padding.p_12xs,
    borderRadius: Border.br_8xs,
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: Padding.p_5xs,
    overflow: "hidden",
  },
  component8: {
    marginLeft: 8,
    borderWidth: 1,
    backgroundColor: Color.fontWhite,
    borderColor: Color.colorSaddlebrown_100,
    borderStyle: "solid",
    paddingVertical: Padding.p_12xs,
    borderRadius: Border.br_8xs,
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: Padding.p_5xs,
    overflow: "hidden",
  },
  component7Parent: {
    width: 247,
    alignItems: "center",
    flexDirection: "row",
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
    textAlign: "left",
    fontSize: FontSize.normal2_size,
    marginLeft: 4,
    fontFamily: FontFamily.normal,
    color: Color.colorBlack,
    letterSpacing: 0,
  },
  groupParent: {
    marginLeft: -27.5,
    paddingVertical: Padding.p_11xs,
    borderColor: Color.black,
    borderStyle: "solid",
    marginTop: -12,
    top: "50%",
    left: "50%",
    position: "absolute",
    borderWidth: 1,
    backgroundColor: Color.fontWhite,
  },
  filterIcon: {
    width: 55,
    height: 24,
  },
  frameParent: {
    width: 327,
  },
  shopName: {
    textTransform: "capitalize",
    fontWeight: "700",
    fontFamily: FontFamily.bold,
    fontSize: FontSize.normal_size,
    textAlign: "center",
    color: Color.colorBlack,
    letterSpacing: 0,
  },
  ownedByTamubi: {
    fontSize: FontSize.normal1_size,
    width: 301,
    textAlign: "left",
  },
  manipurimphalkakwa: {
    color: Color.black,
    textAlign: "left",
  },
  frameItem: {
    height: 12,
    marginLeft: 4,
    width: 12,
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
    borderRadius: Border.br_9xs,
  },
  component4: {
    marginLeft: 4,
    paddingVertical: Padding.p_12xs,
    justifyContent: "center",
    backgroundColor: Color.theme13,
    borderRadius: Border.br_9xs,
  },
  category: {
    marginTop: 8,
    width: 301,
    borderRadius: Border.br_8xs,
    alignItems: "center",
    flexDirection: "row",
  },
  topSellingCategoriesParent: {
    width: 301,
    marginTop: 16,
    justifyContent: "center",
  },
  controlsChipsRounded: {
    borderRadius: Border.br_5xs,
    justifyContent: "center",
    width: 327,
    overflow: "hidden",
  },
  controlsChipsRoundedContainer: {
    marginTop: 8,
  },
  frameGroup: {
    height: 522,
    marginTop: 16,
    borderRadius: Border.br_5xs,
    alignItems: "center",
  },
  selectCustomerList: {
    marginLeft: -171.5,
    top: 114,
    borderRadius: Border.br_base,
    paddingTop: Padding.p_base,
    paddingBottom: Padding.p_5xs,
    opacity: 0.6,
    paddingHorizontal: Padding.p_5xs,
    shadowOpacity: 1,
    elevation: 6,
    shadowRadius: 6,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.theme13,
    left: "50%",
    position: "absolute",
    overflow: "hidden",
  },
  iconLayout1: {
    width: 24,
    height: 24,
  },
  dashboard: {
    color: Color.colorDarkslategray,
    marginTop: 8,
    textAlign: "center",
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
    color: Color.colorSaddlebrown_100,
    marginTop: 12,
    textAlign: "center",
  },
  rectangleView: {
    marginLeft: -12,
    borderTopLeftRadius: Border.br_8xs,
    borderTopRightRadius: Border.br_8xs,
    backgroundColor: Color.transprent,
    display: "none",
    width: 24,
    marginTop: -12,
    height: 24,
    top: "50%",
    left: "50%",
  },
  vectorIcon4: {
    width: 19,
  },
  menuIcons: {
    top: 716,
    borderTopLeftRadius: Border.br_base,
    borderTopRightRadius: Border.br_base,
    borderTopWidth: 1,
    borderColor: Color.black,
    borderStyle: "solid",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    width: 375,
    paddingVertical: Padding.p_5xs,
    marginLeft: -187.5,
    left: "50%",
    position: "absolute",
  },
  logoChild: {
    backgroundColor: Color.colorGainsboro,
    height: 32,
    width: 32,
    left: 0,
    top: 0,
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
    display: "flex",
    width: 159,
    textAlign: "left",
    fontSize: FontSize.normal_size,
    alignItems: "center",
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
    borderRadius: Border.br_5xs,
    justifyContent: "center",
    borderWidth: 1,
    backgroundColor: Color.fontWhite,
    alignItems: "center",
    flexDirection: "row",
  },
  iconChildShadowBox: {
    elevation: 4,
    shadowRadius: 4,
    shadowColor: "rgba(0, 0, 0, 0.4)",
    marginLeft: -16,
    marginTop: -16,
    display: "none",
    backgroundColor: Color.transprent,
    height: 32,
    width: 32,
    borderRadius: Border.br_8xs,
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
  },
  text: {
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
  dotMoreIconOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  dotMoreIconBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  vectorIcon5: {
    marginLeft: -3,
    width: 6,
    height: 24,
  },
  statusBar1: {
    top: 44,
    paddingVertical: Padding.p_9xs,
    paddingHorizontal: Padding.p_base,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    shadowOpacity: 1,
    elevation: 6,
    shadowRadius: 6,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    left: 0,
    width: 375,
    position: "absolute",
    backgroundColor: Color.fontWhite,
  },
  customerSearvhcustomer: {
    borderRadius: Border.br_6xl,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.fontWhite,
  },
});

export default CustomerSearvhCustomer;
