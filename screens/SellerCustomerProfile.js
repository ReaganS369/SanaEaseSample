import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

const SellerCustomerProfile = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.sellerCustomerProfile}>
      <View style={[styles.sideSlider, styles.sideLayout]}>
        <View style={[styles.sideSliderChild, styles.allBorder]} />
        <View style={styles.slider}>
          <Text style={[styles.a, styles.aTypo]}>A</Text>
          <Text style={[styles.b, styles.bTypo]}>B</Text>
          <Text style={[styles.b, styles.bTypo]}>C</Text>
          <Text style={[styles.b, styles.bTypo]}>D</Text>
          <Text style={[styles.b, styles.bTypo]}>E</Text>
          <Text style={[styles.b, styles.bTypo]}>F</Text>
          <Text style={[styles.b, styles.bTypo]}>G</Text>
          <Text style={[styles.b, styles.bTypo]}>H</Text>
          <Text style={[styles.b, styles.bTypo]}>I</Text>
          <Text style={[styles.b, styles.bTypo]}>J</Text>
          <Text style={[styles.b, styles.bTypo]}>K</Text>
          <Text style={[styles.b, styles.bTypo]}>L</Text>
          <Text style={[styles.b, styles.bTypo]}>M</Text>
          <Text style={[styles.b, styles.bTypo]}>N</Text>
          <Text style={[styles.b, styles.bTypo]}>O</Text>
          <Text style={[styles.b, styles.bTypo]}>P</Text>
          <Text style={[styles.b, styles.bTypo]}>Q</Text>
          <Text style={[styles.b, styles.bTypo]}>R</Text>
          <Text style={[styles.b, styles.bTypo]}>S</Text>
          <Text style={[styles.b, styles.bTypo]}>T</Text>
          <Text style={[styles.b, styles.bTypo]}>U</Text>
          <Text style={[styles.b, styles.bTypo]}>V</Text>
          <Text style={[styles.b, styles.bTypo]}>W</Text>
          <Text style={[styles.b, styles.bTypo]}>X</Text>
          <Text style={[styles.b, styles.bTypo]}>Y</Text>
          <Text style={[styles.b, styles.bTypo]}>Z</Text>
          <Text style={[styles.b, styles.bTypo]}>#</Text>
        </View>
      </View>
      <View style={styles.all}>
        <View>
          <View style={styles.statusLayout}>
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
                <View style={[styles.border, styles.allBorder]} />
                <Image
                  style={[styles.capIcon, styles.iconLayout2]}
                  contentFit="cover"
                  source={require("../assets/cap.png")}
                />
                <View style={styles.capacity} />
              </View>
            </View>
            <View style={styles.time}>
              <Text style={[styles.time1, styles.childPosition]}>9:27</Text>
            </View>
          </View>
          <View style={[styles.statusBar1, styles.menuIconsFlexBox]}>
            <View style={styles.leftSide}>
              <View style={styles.logo}>
                <View style={[styles.logoChild, styles.iconLayout1]} />
                <Image
                  style={[styles.asset91, styles.asset91Position]}
                  contentFit="cover"
                  source={require("../assets/asset-9-1.png")}
                />
              </View>
              <View style={[styles.balanceSection, styles.menuIconsBorder]}>
                <View style={styles.upperSection}>
                  <Text style={[styles.balance, styles.text2Typo]}>
                    Balance
                  </Text>
                  <View
                    style={[styles.depositButton, styles.depositButtonLayout]}
                  >
                    <Text style={[styles.deposit, styles.bTypo]}>Deposit</Text>
                    <Image
                      style={styles.frameChildLayout}
                      contentFit="cover"
                      source={require("../assets/deposit-icon.png")}
                    />
                  </View>
                </View>
                <Text style={styles.text1}>₹1,00,00,000</Text>
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
                  <Text style={[styles.text2, styles.text2Clr]}>9+</Text>
                </View>
              </View>
              <View style={[styles.qrScanIcon, styles.iconLayout1]}>
                <Image
                  style={[styles.vectorIcon, styles.iconPosition1]}
                  contentFit="cover"
                  source={require("../assets/vector10.png")}
                />
                <View style={styles.iconChildShadowBox} />
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.frameParent, styles.allSpaceBlock]}>
          <Pressable
            style={styles.moreParent}
            onPress={() => navigation.navigate("SellerCustomerLongPress")}
          >
            <View style={styles.more}>
              <View style={styles.more}>
                <View style={styles.customerNameNicknameParent}>
                  <Text style={[styles.customerNameNickname, styles.text3Typo]}>
                    Customer Name (NickName)
                  </Text>
                  <Image
                    style={[styles.shapeIcon, styles.iconPosition1]}
                    contentFit="cover"
                    source={require("../assets/shape.png")}
                  />
                </View>
                <View style={styles.manipurimphalkakwaParent}>
                  <Text style={[styles.balance, styles.text2Typo]}>
                    Manipur,Imphal,Kakwa
                  </Text>
                  <Image
                    style={styles.frameChildLayout}
                    contentFit="cover"
                    source={require("../assets/frame-8434.png")}
                  />
                </View>
              </View>
              <View style={styles.frameContainer}>
                <View style={styles.retailersParent}>
                  <Text style={[styles.balance, styles.text2Typo]}>
                    Retailers
                  </Text>
                  <Text style={[styles.text3, styles.text3Typo]}>10</Text>
                </View>
                <View style={styles.retailersParent}>
                  <Text style={[styles.balance, styles.text2Typo]}>
                    Total Purchase Value
                  </Text>
                  <Text style={[styles.text3, styles.text3Typo]}>100K</Text>
                </View>
                <View style={styles.retailersParent}>
                  <Text style={[styles.balance, styles.text2Typo]}>
                    Savings
                  </Text>
                  <Text style={[styles.text3, styles.text3Typo]}>10K</Text>
                </View>
              </View>
            </View>
            <View style={styles.lowerButton}>
              <View style={[styles.edit, styles.addFlexBox]}>
                <Text style={[styles.requestForContact, styles.text3Typo]}>
                  Request For Contact
                </Text>
              </View>
              <Pressable
                style={[styles.add, styles.addFlexBox]}
                onPress={() =>
                  navigation.navigate("BottomTabsRoot", {
                    screen: "SellerDaskboard",
                  })
                }
              >
                <Text style={[styles.sendProducts, styles.text3Typo]}>
                  Send Products
                </Text>
              </Pressable>
            </View>
          </Pressable>
          <View style={styles.bodyLower}>
            <Text style={[styles.text4, styles.bTypo]}>Purchase History</Text>
            <View style={styles.productsHstry}>
              <View style={[styles.all1, styles.allSpaceBlock]}>
                <View style={styles.toralFlexBox}>
                  <Text style={[styles.totalNumberOf, styles.totalTypo]}>
                    Total Number of Products
                  </Text>
                  <Text style={[styles.text5, styles.textTypo]}>1,000</Text>
                </View>
                <View style={[styles.amount, styles.toralFlexBox]}>
                  <Text style={[styles.totalAmount, styles.totalTypo]}>
                    Total Amount
                  </Text>
                  <View style={styles.numebr}>
                    <Text style={[styles.text6, styles.textTypo]}>₹</Text>
                    <Text style={[styles.text7, styles.textTypo]}>
                      1,00,00,000
                    </Text>
                  </View>
                </View>
                <View style={[styles.amount, styles.toralFlexBox]}>
                  <Text
                    style={[styles.dateTime, styles.totalTypo]}
                  >{`Date & Time`}</Text>
                  <View style={styles.amLayout}>
                    <Text style={[styles.am, styles.amLayout]}>
                      01/01/23, 00:00 AM
                    </Text>
                  </View>
                </View>
              </View>
              <View style={[styles.all2, styles.allSpaceBlock]}>
                <View style={styles.toralFlexBox}>
                  <Text style={[styles.totalNumberOf, styles.totalTypo]}>
                    Total Number of Products
                  </Text>
                  <Text style={[styles.text5, styles.textTypo]}>1,000</Text>
                </View>
                <View style={[styles.amount, styles.toralFlexBox]}>
                  <Text style={[styles.totalAmount, styles.totalTypo]}>
                    Total Amount
                  </Text>
                  <View style={styles.numebr}>
                    <Text style={[styles.text6, styles.textTypo]}>₹</Text>
                    <Text style={[styles.text7, styles.textTypo]}>
                      1,00,00,000
                    </Text>
                  </View>
                </View>
                <View style={[styles.amount, styles.toralFlexBox]}>
                  <Text
                    style={[styles.dateTime, styles.totalTypo]}
                  >{`Date & Time`}</Text>
                  <View style={styles.amLayout}>
                    <Text style={[styles.am, styles.amLayout]}>
                      01/01/23, 00:00 AM
                    </Text>
                  </View>
                </View>
              </View>
              <View style={[styles.all2, styles.allSpaceBlock]}>
                <View style={styles.toralFlexBox}>
                  <Text style={[styles.totalNumberOf, styles.totalTypo]}>
                    Total Number of Products
                  </Text>
                  <Text style={[styles.text5, styles.textTypo]}>1,000</Text>
                </View>
                <View style={[styles.amount, styles.toralFlexBox]}>
                  <Text style={[styles.totalAmount, styles.totalTypo]}>
                    Total Amount
                  </Text>
                  <View style={styles.numebr}>
                    <Text style={[styles.text6, styles.textTypo]}>₹</Text>
                    <Text style={[styles.text7, styles.textTypo]}>
                      1,00,00,000
                    </Text>
                  </View>
                </View>
                <View style={[styles.amount, styles.toralFlexBox]}>
                  <Text
                    style={[styles.dateTime, styles.totalTypo]}
                  >{`Date & Time`}</Text>
                  <View style={styles.amLayout}>
                    <Text style={[styles.am, styles.amLayout]}>
                      01/01/23, 00:00 AM
                    </Text>
                  </View>
                </View>
              </View>
              <View style={[styles.all2, styles.allSpaceBlock]}>
                <View style={styles.toralFlexBox}>
                  <Text style={[styles.totalNumberOf, styles.totalTypo]}>
                    Total Number of Products
                  </Text>
                  <Text style={[styles.text5, styles.textTypo]}>1,000</Text>
                </View>
                <View style={[styles.amount, styles.toralFlexBox]}>
                  <Text style={[styles.totalAmount, styles.totalTypo]}>
                    Total Amount
                  </Text>
                  <View style={styles.numebr}>
                    <Text style={[styles.text6, styles.textTypo]}>₹</Text>
                    <Text style={[styles.text7, styles.textTypo]}>
                      1,00,00,000
                    </Text>
                  </View>
                </View>
                <View style={[styles.amount, styles.toralFlexBox]}>
                  <Text
                    style={[styles.dateTime, styles.totalTypo]}
                  >{`Date & Time`}</Text>
                  <View style={styles.amLayout}>
                    <Text style={[styles.am, styles.amLayout]}>
                      01/01/23, 00:00 AM
                    </Text>
                  </View>
                </View>
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
              <Text style={[styles.dashboard, styles.text2Typo]}>
                Dashboard
              </Text>
            </View>
            <View style={styles.vectorParent}>
              <Image
                style={styles.iconLayout}
                contentFit="cover"
                source={require("../assets/notification2.png")}
              />
              <Text style={[styles.dashboard, styles.text2Typo]}>
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
                source={require("../assets/frame-84931.png")}
              />
              <Text style={[styles.customer, styles.aTypo]}>Customer</Text>
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
              <Text style={[styles.dashboard, styles.text2Typo]}>Profile</Text>
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
  sideLayout: {
    height: 384,
    width: 16,
    top: "50%",
    position: "absolute",
  },
  allBorder: {
    borderWidth: 1,
    borderStyle: "solid",
  },
  aTypo: {
    color: Color.colorSaddlebrown_100,
    textAlign: "center",
    fontFamily: FontFamily.openSansSemiBold,
    fontWeight: "600",
    letterSpacing: 0,
    fontSize: FontSize.normal2_size,
  },
  bTypo: {
    fontFamily: FontFamily.normal,
    letterSpacing: 0,
  },
  childPosition: {
    left: 0,
    position: "absolute",
  },
  iconLayout2: {
    maxWidth: "100%",
    overflow: "hidden",
  },
  menuIconsFlexBox: {
    paddingHorizontal: Padding.p_base,
    justifyContent: "space-between",
    flexDirection: "row",
    width: 375,
    alignItems: "center",
  },
  iconLayout1: {
    height: 32,
    width: 32,
  },
  asset91Position: {
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  menuIconsBorder: {
    borderColor: Color.black,
    borderStyle: "solid",
    backgroundColor: Color.fontWhite,
  },
  text2Typo: {
    fontFamily: FontFamily.openSansSemiBold,
    fontWeight: "600",
    letterSpacing: 0,
    fontSize: FontSize.normal2_size,
  },
  depositButtonLayout: {
    borderTopRightRadius: Border.br_9xs,
    borderWidth: 1,
  },
  iconPosition: {
    marginLeft: -10,
    height: 24,
    marginTop: -12,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  text2Clr: {
    color: Color.fontWhite,
    textAlign: "center",
  },
  iconPosition1: {
    marginTop: -12,
    top: "50%",
    position: "absolute",
  },
  allSpaceBlock: {
    padding: Padding.p_base,
    borderRadius: Border.br_base,
    alignItems: "center",
    overflow: "hidden",
  },
  text3Typo: {
    fontSize: FontSize.bold1_size,
    fontFamily: FontFamily.bold,
    fontWeight: "700",
    letterSpacing: 0,
  },
  addFlexBox: {
    paddingHorizontal: Padding.p_84xl,
    width: 311,
    flexDirection: "row",
    alignItems: "center",
  },
  totalTypo: {
    height: 22,
    fontSize: FontSize.normal_size,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.normal,
    letterSpacing: 0,
  },
  textTypo: {
    height: 19,
    fontSize: FontSize.normal1_size,
    textAlign: "left",
    fontFamily: FontFamily.normal,
    letterSpacing: 0,
  },
  toralFlexBox: {
    width: 295,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  amLayout: {
    width: 117,
    height: 19,
  },
  iconLayout: {
    width: 24,
    height: 24,
  },
  sideSliderChild: {
    marginTop: -192,
    right: 0,
    borderColor: Color.theme12,
    backgroundColor: Color.theme13,
    borderRadius: Border.br_5xs,
    height: 384,
    width: 16,
    top: "50%",
    position: "absolute",
  },
  a: {
    textAlign: "center",
    width: 12,
  },
  b: {
    color: Color.black,
    textAlign: "center",
    fontSize: FontSize.normal2_size,
    fontFamily: FontFamily.normal,
    width: 12,
  },
  slider: {
    marginTop: -189,
    right: 2,
    height: 378,
    justifyContent: "center",
    alignItems: "flex-end",
    width: 12,
    borderRadius: Border.br_5xs,
    top: "50%",
    position: "absolute",
  },
  sideSlider: {
    marginTop: -393.5,
    right: 12,
    display: "none",
  },
  statusBarChild: {
    height: 44,
    width: 375,
    top: 0,
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
    position: "absolute",
  },
  capIcon: {
    height: "33.33%",
    width: "5.2%",
    top: "33.33%",
    right: "2.8%",
    bottom: "33.33%",
    left: "92%",
    maxHeight: "100%",
    opacity: 0.4,
    position: "absolute",
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
    color: Color.colorBlack,
    textAlign: "center",
    fontWeight: "600",
    letterSpacing: 0,
    left: 0,
    top: "50%",
  },
  time: {
    top: 8,
    left: 21,
    width: 56,
    height: 23,
    position: "absolute",
  },
  statusLayout: {
    height: 44,
    width: 375,
  },
  logoChild: {
    backgroundColor: Color.colorGainsboro,
    left: 0,
    position: "absolute",
    top: 0,
    display: "none",
  },
  asset91: {
    marginTop: -27,
    marginLeft: -22,
    width: 44,
    height: 58,
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
    textAlign: "left",
    fontSize: FontSize.normal2_size,
    fontFamily: FontFamily.normal,
  },
  frameChildLayout: {
    marginLeft: 4,
    height: 12,
    width: 12,
  },
  depositButton: {
    borderBottomRightRadius: Border.br_9xs,
    borderBottomLeftRadius: Border.br_9xs,
    padding: Padding.p_9xs,
    marginLeft: 3,
    backgroundColor: Color.theme12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderColor: Color.theme12,
    borderStyle: "solid",
  },
  upperSection: {
    flexDirection: "row",
    alignItems: "center",
  },
  text1: {
    textTransform: "capitalize",
    display: "flex",
    width: 108,
    height: 20,
    fontFamily: FontFamily.bold,
    fontWeight: "700",
    fontSize: FontSize.normal1_size,
    textAlign: "left",
    color: Color.colorBlack,
    letterSpacing: 0,
    alignItems: "flex-end",
  },
  balanceSection: {
    borderTopLeftRadius: Border.br_5xs,
    borderBottomRightRadius: Border.br_5xs,
    borderBottomLeftRadius: Border.br_5xs,
    paddingLeft: Padding.p_5xs,
    paddingBottom: Padding.p_9xs,
    marginLeft: 16,
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
    borderRadius: Border.br_8xs,
    marginLeft: -16,
    marginTop: -16,
    backgroundColor: Color.transprent,
    height: 32,
    width: 32,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    left: "50%",
    display: "none",
    top: "50%",
    position: "absolute",
  },
  cartIcon: {
    height: 24,
    width: 21,
  },
  text2: {
    fontFamily: FontFamily.openSansSemiBold,
    fontWeight: "600",
    letterSpacing: 0,
    fontSize: FontSize.normal2_size,
  },
  wrapper: {
    top: -4,
    left: 14,
    borderRadius: Border.br_mini,
    backgroundColor: Color.red,
    paddingHorizontal: Padding.p_8xs_5,
    paddingVertical: 0,
    alignItems: "center",
    justifyContent: "center",
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
    left: "50%",
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
    backgroundColor: Color.fontWhite,
  },
  customerNameNickname: {
    marginTop: -14,
    marginLeft: -124.5,
    color: Color.colorBlack,
    left: "50%",
    textAlign: "center",
    top: "50%",
    position: "absolute",
  },
  shapeIcon: {
    width: "3.73%",
    right: "93.76%",
    left: "2.51%",
    height: 20,
    maxWidth: "100%",
    overflow: "hidden",
  },
  customerNameNicknameParent: {
    borderColor: Color.transprent,
    borderBottomWidth: 1,
    width: 327,
    height: 24,
    borderStyle: "solid",
    backgroundColor: Color.fontWhite,
  },
  manipurimphalkakwaParent: {
    marginTop: 4,
    flexDirection: "row",
  },
  more: {
    alignItems: "center",
  },
  text3: {
    marginTop: 4,
    textAlign: "left",
    color: Color.colorBlack,
  },
  retailersParent: {
    width: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  frameContainer: {
    width: 319,
    marginTop: 16,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  requestForContact: {
    color: Color.colorBlack,
    textAlign: "center",
  },
  edit: {
    paddingVertical: Padding.p_5xs,
    backgroundColor: Color.theme12,
    justifyContent: "space-between",
    borderRadius: Border.br_5xs,
  },
  sendProducts: {
    color: Color.fontWhite,
    textAlign: "center",
  },
  add: {
    backgroundColor: Color.colorSaddlebrown_100,
    paddingVertical: Padding.p_base_5,
    borderRadius: Border.br_3xs,
    marginTop: 8,
    justifyContent: "center",
    overflow: "hidden",
  },
  lowerButton: {
    marginTop: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  moreParent: {
    paddingHorizontal: 0,
    paddingVertical: Padding.p_5xs,
    borderRadius: Border.br_base,
    alignItems: "center",
    borderWidth: 1,
    borderColor: Color.theme12,
    borderStyle: "solid",
    overflow: "hidden",
    backgroundColor: Color.fontWhite,
  },
  text4: {
    fontSize: FontSize.bold_size,
    textAlign: "left",
    color: Color.colorBlack,
  },
  totalNumberOf: {
    width: 226,
  },
  text5: {
    width: 34,
    color: Color.colorDarkslategray,
  },
  totalAmount: {
    width: 142,
  },
  text6: {
    width: 9,
    color: Color.black,
  },
  text7: {
    width: 73,
    color: Color.colorDarkslategray,
  },
  numebr: {
    width: 106,
    justifyContent: "flex-end",
    flexDirection: "row",
    alignItems: "center",
  },
  amount: {
    marginTop: 8,
  },
  dateTime: {
    width: 147,
  },
  am: {
    marginTop: -9.4,
    textAlign: "right",
    fontSize: FontSize.normal1_size,
    width: 117,
    color: Color.colorDarkslategray,
    left: 0,
    fontFamily: FontFamily.normal,
    letterSpacing: 0,
    top: "50%",
    position: "absolute",
  },
  all1: {
    justifyContent: "center",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: Color.theme12,
    backgroundColor: Color.fontWhite,
  },
  all2: {
    marginTop: 4,
    justifyContent: "center",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: Color.theme12,
    backgroundColor: Color.fontWhite,
  },
  productsHstry: {
    height: 252,
    marginTop: 8,
    alignItems: "center",
    borderRadius: Border.br_5xs,
  },
  bodyLower: {
    height: 333,
    marginTop: 16,
    justifyContent: "center",
  },
  frameParent: {
    marginTop: 16,
    shadowOpacity: 1,
    elevation: 6,
    shadowRadius: 6,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.theme13,
  },
  dashboard: {
    marginTop: 8,
    color: Color.colorBlack,
    textAlign: "center",
  },
  vectorParent: {
    width: 70,
    alignItems: "center",
    justifyContent: "center",
  },
  vectorWrapper: {
    paddingBottom: Padding.p_5xl,
    flexDirection: "row",
    justifyContent: "center",
  },
  customer: {
    marginTop: 12,
    textAlign: "center",
  },
  frameInner: {
    marginLeft: -12,
    borderTopLeftRadius: Border.br_8xs,
    borderTopRightRadius: Border.br_8xs,
    marginTop: -12,
    top: "50%",
    position: "absolute",
    backgroundColor: Color.transprent,
    width: 24,
    left: "50%",
    display: "none",
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
  },
  shape: {
    marginLeft: -67.5,
    bottom: 8,
    backgroundColor: Color.colorDarkslategray,
    width: 135,
    height: 5,
    borderRadius: Border.br_3xs,
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
    marginLeft: -187.5,
    alignItems: "center",
    left: "50%",
    top: 0,
    position: "absolute",
  },
  sellerCustomerProfile: {
    borderRadius: Border.br_6xl,
    flex: 1,
    width: "100%",
    height: 847,
    overflow: "hidden",
    backgroundColor: Color.fontWhite,
  },
});

export default SellerCustomerProfile;
