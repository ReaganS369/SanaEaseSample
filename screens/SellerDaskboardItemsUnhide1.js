import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Padding, Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const SellerDaskboardItemsUnhide1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.sellerDaskboardItemsUnhide}>
      <View style={[styles.all, styles.allPosition]}>
        <View>
          <View style={styles.statusBar}>
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
                <View style={[styles.border, styles.borderBorder]} />
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
          <View style={[styles.statusBar1, styles.headingFlexBox]}>
            <View style={styles.leftSide}>
              <View style={styles.logo}>
                <View style={styles.logoChild} />
                <Image
                  style={[styles.asset91, styles.parentPosition]}
                  contentFit="cover"
                  source={require("../assets/asset-9-1.png")}
                />
              </View>
              <View style={[styles.balanceSection, styles.frameWrapperBorder]}>
                <View style={styles.upperSection}>
                  <Text style={[styles.balance, styles.text1Typo]}>
                    Balance
                  </Text>
                  <View style={[styles.depositButton, styles.borderBorder]}>
                    <Text style={[styles.deposit, styles.text2Typo]}>
                      Deposit
                    </Text>
                    <Image
                      style={styles.depositIcon}
                      contentFit="cover"
                      source={require("../assets/deposit-icon.png")}
                    />
                  </View>
                </View>
                <Text style={[styles.text, styles.textFlexBox]}>
                  ₹1,00,00,000
                </Text>
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
                  style={[styles.vectorIcon, styles.parentPosition]}
                  contentFit="cover"
                  source={require("../assets/vector10.png")}
                />
                <View style={styles.iconChildShadowBox} />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.lower}>
          <View style={styles.body}>
            <View style={styles.body1}>
              <View style={[styles.seachBar, styles.seachBarLayout]}>
                <View
                  style={[
                    styles.searchForProductsOrCategorParent,
                    styles.seachBarLayout,
                  ]}
                >
                  <Text
                    style={[styles.searchForProducts, styles.productNameTypo]}
                  >
                    Search Customer by ID/Phone number
                  </Text>
                  <View style={styles.iconLayout1}>
                    <View
                      style={[
                        styles.searchIconChild,
                        styles.frameInnerPosition,
                      ]}
                    />
                    <Image
                      style={[styles.iconlyboldsearch, styles.capIconLayout]}
                      contentFit="cover"
                      source={require("../assets/iconlyboldsearch.png")}
                    />
                  </View>
                </View>
              </View>
              <View style={styles.lower}>
                <View style={[styles.selectedCustomer, styles.headingLayout]}>
                  <View style={styles.customer}>
                    <Image
                      style={styles.moreIcon}
                      contentFit="cover"
                      source={require("../assets/more1.png")}
                    />
                    <View style={styles.customer1}>
                      <View
                        style={[styles.component1, styles.componentSpaceBlock]}
                      >
                        <Text style={[styles.customer11, styles.customerTypo]}>
                          Customer 1
                        </Text>
                      </View>
                      <View
                        style={[styles.component2, styles.componentSpaceBlock]}
                      >
                        <Text style={[styles.addCustomer, styles.customerTypo]}>
                          Add Customer
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
                <View style={[styles.products, styles.productsBorder]}>
                  <View style={styles.body}>
                    <View style={[styles.filter, styles.filterSpaceBlock]}>
                      <View
                        style={[styles.component7, styles.containerSpaceBlock1]}
                      >
                        <Text
                          style={[
                            styles.selectedCategory,
                            styles.productNameTypo,
                          ]}
                        >
                          Selected Category
                        </Text>
                        <Image
                          style={styles.shapeIcon}
                          contentFit="cover"
                          source={require("../assets/shape3.png")}
                        />
                      </View>
                      <View style={styles.filterIcon}>
                        <View
                          style={[
                            styles.groupParent,
                            styles.containerSpaceBlock,
                          ]}
                        >
                          <Image
                            style={styles.groupIcon}
                            contentFit="cover"
                            source={require("../assets/group1.png")}
                          />
                          <View
                            style={[styles.frameChild, styles.menuIconsBorder]}
                          />
                          <Text style={[styles.filter1, styles.text2Typo]}>
                            Filter
                          </Text>
                        </View>
                      </View>
                    </View>
                    <View style={[styles.heading, styles.headingLayout]}>
                      <View style={styles.pleft}>
                        <Text style={[styles.products1, styles.text2Typo]}>
                          Products
                        </Text>
                        <Image
                          style={styles.sortIcon}
                          contentFit="cover"
                          source={require("../assets/sort-icon4.png")}
                        />
                      </View>
                      <View style={styles.right}>
                        <Text style={[styles.products1, styles.text2Typo]}>
                          Quantity
                        </Text>
                        <Text style={[styles.finalPrice, styles.text2Typo]}>
                          Final Price
                        </Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.list}>
                    <View
                      style={[
                        styles.suggestedItemsWrapper,
                        styles.wrapperFlexBox,
                      ]}
                    >
                      <Text style={[styles.balance, styles.text1Typo]}>
                        Suggested Items
                      </Text>
                    </View>
                    <View style={[styles.frameParent, styles.wrapperFlexBox]}>
                      <View style={styles.upperSection}>
                        <Image
                          style={styles.selectDotIcon}
                          contentFit="cover"
                          source={require("../assets/property-1default1.png")}
                        />
                        <View style={styles.productNameParent}>
                          <Text
                            style={[styles.productName, styles.productNameTypo]}
                          >{`Product Name `}</Text>
                          <Text style={[styles.text2, styles.text2Typo]}>
                            ₹ 1000 - ₹ 1000
                          </Text>
                        </View>
                      </View>
                      <View style={styles.upperSection}>
                        <View style={styles.body}>
                          <Image
                            style={styles.vectorIconLayout}
                            contentFit="cover"
                            source={require("../assets/vector48.png")}
                          />
                          <View
                            style={[
                              styles.container,
                              styles.containerSpaceBlock,
                            ]}
                          >
                            <Text style={[styles.text3, styles.textTypo]}>
                              9
                            </Text>
                          </View>
                          <Image
                            style={[
                              styles.vectorIcon2,
                              styles.vectorIconLayout,
                            ]}
                            contentFit="cover"
                            source={require("../assets/vector36.png")}
                          />
                        </View>
                        <View
                          style={[
                            styles.frameWrapper,
                            styles.containerSpaceBlock1,
                          ]}
                        >
                          <View style={styles.leftSide}>
                            <Text style={[styles.text4, styles.textTypo2]}>
                              ₹
                            </Text>
                            <Text style={[styles.text5, styles.textTypo2]}>
                              1,00,00,000
                            </Text>
                          </View>
                        </View>
                      </View>
                    </View>
                    <Pressable
                      style={[styles.frameParent, styles.wrapperFlexBox]}
                      onPress={() =>
                        navigation.navigate("SellerDaskboardItemsUnhide")
                      }
                    >
                      <View style={styles.upperSection}>
                        <Image
                          style={styles.selectDotIcon}
                          contentFit="cover"
                          source={require("../assets/property-1default1.png")}
                        />
                        <View style={styles.productNameParent}>
                          <Text
                            style={[styles.productName, styles.productNameTypo]}
                          >{`Product Name `}</Text>
                          <Text style={[styles.text2, styles.text2Typo]}>
                            ₹ 1000 - ₹ 1000
                          </Text>
                        </View>
                      </View>
                      <View style={styles.upperSection}>
                        <View style={styles.body}>
                          <Image
                            style={styles.vectorIconLayout}
                            contentFit="cover"
                            source={require("../assets/vector48.png")}
                          />
                          <View
                            style={[
                              styles.container,
                              styles.containerSpaceBlock,
                            ]}
                          >
                            <Text style={[styles.text3, styles.textTypo]}>
                              9
                            </Text>
                          </View>
                          <Image
                            style={[
                              styles.vectorIcon2,
                              styles.vectorIconLayout,
                            ]}
                            contentFit="cover"
                            source={require("../assets/vector36.png")}
                          />
                        </View>
                        <View
                          style={[
                            styles.frameWrapper,
                            styles.containerSpaceBlock1,
                          ]}
                        >
                          <View style={styles.leftSide}>
                            <Text style={[styles.text4, styles.textTypo2]}>
                              ₹
                            </Text>
                            <Text style={[styles.text5, styles.textTypo2]}>
                              1,00,00,000
                            </Text>
                          </View>
                        </View>
                      </View>
                    </Pressable>
                    <View style={[styles.aWrapper, styles.wrapperFlexBox]}>
                      <Text style={[styles.balance, styles.text1Typo]}>A</Text>
                    </View>
                    <View style={[styles.frameParent, styles.wrapperFlexBox]}>
                      <View style={styles.upperSection}>
                        <Image
                          style={styles.selectDotIcon}
                          contentFit="cover"
                          source={require("../assets/property-1default1.png")}
                        />
                        <View style={styles.productNameParent}>
                          <Text
                            style={[styles.productName, styles.productNameTypo]}
                          >{`Product Name `}</Text>
                          <Text style={[styles.text2, styles.text2Typo]}>
                            ₹ 1000 - ₹ 1000
                          </Text>
                        </View>
                      </View>
                      <View style={styles.upperSection}>
                        <View style={styles.body}>
                          <Image
                            style={styles.vectorIconLayout}
                            contentFit="cover"
                            source={require("../assets/vector48.png")}
                          />
                          <View
                            style={[
                              styles.container,
                              styles.containerSpaceBlock,
                            ]}
                          >
                            <Text style={[styles.text3, styles.textTypo]}>
                              9
                            </Text>
                          </View>
                          <Image
                            style={[
                              styles.vectorIcon2,
                              styles.vectorIconLayout,
                            ]}
                            contentFit="cover"
                            source={require("../assets/vector36.png")}
                          />
                        </View>
                        <View
                          style={[
                            styles.frameWrapper,
                            styles.containerSpaceBlock1,
                          ]}
                        >
                          <View style={styles.leftSide}>
                            <Text style={[styles.text4, styles.textTypo2]}>
                              ₹
                            </Text>
                            <Text style={[styles.text5, styles.textTypo2]}>
                              1,00,00,000
                            </Text>
                          </View>
                        </View>
                      </View>
                    </View>
                    <View style={[styles.frameParent, styles.wrapperFlexBox]}>
                      <View style={styles.upperSection}>
                        <Image
                          style={styles.selectDotIcon}
                          contentFit="cover"
                          source={require("../assets/property-1default1.png")}
                        />
                        <View style={styles.productNameParent}>
                          <Text
                            style={[styles.productName, styles.productNameTypo]}
                          >{`Product Name `}</Text>
                          <Text style={[styles.text2, styles.text2Typo]}>
                            ₹ 1000 - ₹ 1000
                          </Text>
                        </View>
                      </View>
                      <View style={styles.upperSection}>
                        <View style={styles.body}>
                          <Image
                            style={styles.vectorIconLayout}
                            contentFit="cover"
                            source={require("../assets/vector48.png")}
                          />
                          <View
                            style={[
                              styles.container,
                              styles.containerSpaceBlock,
                            ]}
                          >
                            <Text style={[styles.text3, styles.textTypo]}>
                              9
                            </Text>
                          </View>
                          <Image
                            style={[
                              styles.vectorIcon2,
                              styles.vectorIconLayout,
                            ]}
                            contentFit="cover"
                            source={require("../assets/vector36.png")}
                          />
                        </View>
                        <View
                          style={[
                            styles.frameWrapper,
                            styles.containerSpaceBlock1,
                          ]}
                        >
                          <View style={styles.leftSide}>
                            <Text style={[styles.text4, styles.textTypo2]}>
                              ₹
                            </Text>
                            <Text style={[styles.text5, styles.textTypo2]}>
                              1,00,00,000
                            </Text>
                          </View>
                        </View>
                      </View>
                    </View>
                    <View style={[styles.frameParent, styles.wrapperFlexBox]}>
                      <View style={styles.upperSection}>
                        <Image
                          style={styles.selectDotIcon}
                          contentFit="cover"
                          source={require("../assets/property-1default1.png")}
                        />
                        <View style={styles.productNameParent}>
                          <Text
                            style={[styles.productName, styles.productNameTypo]}
                          >{`Product Name `}</Text>
                          <Text style={[styles.text2, styles.text2Typo]}>
                            ₹ 1000 - ₹ 1000
                          </Text>
                        </View>
                      </View>
                      <View style={styles.upperSection}>
                        <View style={styles.body}>
                          <Image
                            style={styles.vectorIconLayout}
                            contentFit="cover"
                            source={require("../assets/vector35.png")}
                          />
                          <View
                            style={[
                              styles.container,
                              styles.containerSpaceBlock,
                            ]}
                          >
                            <Text style={[styles.text3, styles.textTypo]}>
                              9
                            </Text>
                          </View>
                          <Image
                            style={[
                              styles.vectorIcon2,
                              styles.vectorIconLayout,
                            ]}
                            contentFit="cover"
                            source={require("../assets/vector36.png")}
                          />
                        </View>
                        <View
                          style={[
                            styles.frameWrapper,
                            styles.containerSpaceBlock1,
                          ]}
                        >
                          <View style={styles.leftSide}>
                            <Text style={[styles.text4, styles.textTypo2]}>
                              ₹
                            </Text>
                            <Text style={[styles.text5, styles.textTypo2]}>
                              1,00,00,000
                            </Text>
                          </View>
                        </View>
                      </View>
                    </View>
                    <View style={[styles.frameParent, styles.wrapperFlexBox]}>
                      <View style={styles.upperSection}>
                        <Image
                          style={styles.selectDotIcon}
                          contentFit="cover"
                          source={require("../assets/property-1default1.png")}
                        />
                        <View style={styles.productNameParent}>
                          <Text
                            style={[styles.productName, styles.productNameTypo]}
                          >{`Product Name `}</Text>
                          <Text style={[styles.text2, styles.text2Typo]}>
                            ₹ 1000 - ₹ 1000
                          </Text>
                        </View>
                      </View>
                      <View style={styles.upperSection}>
                        <View style={styles.body}>
                          <Image
                            style={styles.vectorIconLayout}
                            contentFit="cover"
                            source={require("../assets/vector35.png")}
                          />
                          <View
                            style={[
                              styles.container,
                              styles.containerSpaceBlock,
                            ]}
                          >
                            <Text style={[styles.text3, styles.textTypo]}>
                              9
                            </Text>
                          </View>
                          <Image
                            style={[
                              styles.vectorIcon2,
                              styles.vectorIconLayout,
                            ]}
                            contentFit="cover"
                            source={require("../assets/vector36.png")}
                          />
                        </View>
                        <View
                          style={[
                            styles.frameWrapper,
                            styles.containerSpaceBlock1,
                          ]}
                        >
                          <View style={styles.leftSide}>
                            <Text style={[styles.text4, styles.textTypo2]}>
                              ₹
                            </Text>
                            <Text style={[styles.text5, styles.textTypo2]}>
                              1,00,00,000
                            </Text>
                          </View>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <Pressable
              style={[styles.productListMaximize, styles.headingLayout]}
              onPress={() => navigation.navigate("SellerDaskboardItemUnhide")}
            >
              <Text style={[styles.selectProducts, styles.textTypo]}>
                Select Products
              </Text>
              <Image
                style={styles.vectorIcon13}
                contentFit="cover"
                source={require("../assets/vector49.png")}
              />
            </Pressable>
          </View>
          <View style={styles.nag}>
            <View style={[styles.menuIcons, styles.menuIconsBorder]}>
              <View style={styles.vectorParent4}>
                <Image
                  style={styles.iconLayout}
                  contentFit="cover"
                  source={require("../assets/vector5.png")}
                />
                <Text style={[styles.dashboard, styles.text1Typo]}>
                  Dashboard
                </Text>
              </View>
              <View style={styles.vectorParent4}>
                <Image
                  style={styles.iconLayout}
                  contentFit="cover"
                  source={require("../assets/notification.png")}
                />
                <Text style={[styles.notification, styles.text1Typo]}>
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
              <View style={styles.vectorParent4}>
                <Image
                  style={styles.iconLayout}
                  contentFit="cover"
                  source={require("../assets/frame-8493.png")}
                />
                <Text style={[styles.customer2, styles.text1Typo]}>
                  Customer
                </Text>
              </View>
              <View style={styles.vectorParent4}>
                <View style={styles.iconLayout}>
                  <View style={[styles.frameInner, styles.iconLayout]} />
                  <Image
                    style={[styles.vectorIcon16, styles.iconPosition]}
                    contentFit="cover"
                    source={require("../assets/vector.png")}
                  />
                </View>
                <Text style={[styles.notification, styles.text1Typo]}>
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
    </View>
  );
};

const styles = StyleSheet.create({
  allPosition: {
    left: 0,
    top: 0,
  },
  borderBorder: {
    borderStyle: "solid",
    borderWidth: 1,
  },
  capIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  headingFlexBox: {
    paddingVertical: Padding.p_9xs,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  parentPosition: {
    top: "50%",
    left: "50%",
  },
  frameWrapperBorder: {
    marginLeft: 16,
    borderColor: Color.black,
    borderWidth: 1,
    borderStyle: "solid",
    overflow: "hidden",
    backgroundColor: Color.fontWhite,
  },
  text1Typo: {
    fontFamily: FontFamily.openSansSemiBold,
    fontSize: FontSize.normal2_size,
    fontWeight: "600",
    letterSpacing: 0,
  },
  text2Typo: {
    fontFamily: FontFamily.normal,
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
  seachBarLayout: {
    width: 335,
    borderRadius: Border.br_5xs,
  },
  productNameTypo: {
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
  headingLayout: {
    width: 359,
    alignItems: "center",
  },
  componentSpaceBlock: {
    paddingVertical: Padding.p_12xs,
    flexDirection: "row",
  },
  customerTypo: {
    height: 30,
    width: 118,
    fontSize: FontSize.normal_size,
    display: "flex",
    fontFamily: FontFamily.normal,
    justifyContent: "center",
    textAlign: "center",
    letterSpacing: 0,
    alignItems: "center",
  },
  productsBorder: {
    borderColor: Color.colorSaddlebrown_100,
    borderStyle: "solid",
    alignItems: "center",
    overflow: "hidden",
  },
  filterSpaceBlock: {
    paddingHorizontal: Padding.p_base,
    alignItems: "center",
  },
  containerSpaceBlock1: {
    paddingHorizontal: Padding.p_5xs,
    justifyContent: "center",
  },
  containerSpaceBlock: {
    paddingVertical: Padding.p_11xs,
    borderRadius: Border.br_9xs,
    alignItems: "center",
    backgroundColor: Color.fontWhite,
  },
  menuIconsBorder: {
    borderColor: Color.black,
    borderStyle: "solid",
  },
  wrapperFlexBox: {
    width: 355,
    paddingHorizontal: Padding.p_base,
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
  textTypo: {
    fontFamily: FontFamily.bold,
    fontWeight: "700",
    letterSpacing: 0,
  },
  vectorIconLayout: {
    width: 17,
    height: 12,
  },
  textTypo2: {
    fontSize: FontSize.normal1_size,
    fontFamily: FontFamily.normal,
    textAlign: "left",
    letterSpacing: 0,
  },
  iconLayout: {
    width: 24,
    height: 24,
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
    height: 23,
    width: 56,
    position: "absolute",
  },
  statusBar: {
    height: 44,
    width: 375,
    backgroundColor: Color.fontWhite,
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
    position: "absolute",
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
  },
  depositIcon: {
    marginLeft: 4,
    width: 12,
    height: 12,
  },
  depositButton: {
    borderBottomRightRadius: Border.br_9xs,
    borderBottomLeftRadius: Border.br_9xs,
    borderColor: Color.theme12,
    padding: Padding.p_9xs,
    marginLeft: 3,
    justifyContent: "center",
    backgroundColor: Color.theme12,
    borderTopRightRadius: Border.br_9xs,
    borderWidth: 1,
    alignItems: "center",
    flexDirection: "row",
  },
  upperSection: {
    alignItems: "center",
    flexDirection: "row",
  },
  text: {
    width: 108,
    height: 20,
    alignItems: "flex-end",
    fontFamily: FontFamily.bold,
    fontWeight: "700",
    letterSpacing: 0,
    textTransform: "capitalize",
    fontSize: FontSize.normal1_size,
    color: Color.colorBlack,
  },
  balanceSection: {
    borderTopLeftRadius: Border.br_5xs,
    borderBottomRightRadius: Border.br_5xs,
    borderBottomLeftRadius: Border.br_5xs,
    paddingLeft: Padding.p_5xs,
    paddingBottom: Padding.p_9xs,
    borderTopRightRadius: Border.br_9xs,
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
    marginTop: -12,
    left: "50%",
    position: "absolute",
  },
  statusBar1: {
    paddingHorizontal: Padding.p_base,
    alignItems: "center",
    shadowOpacity: 1,
    elevation: 6,
    shadowRadius: 6,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    width: 375,
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
  searchForProductsOrCategorParent: {
    marginTop: -20,
    marginLeft: -167.5,
    paddingLeft: Padding.p_xs,
    paddingTop: Padding.p_9xs,
    paddingRight: Padding.p_9xs,
    paddingBottom: Padding.p_9xs,
    left: "50%",
    justifyContent: "space-between",
    top: "50%",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
    backgroundColor: Color.fontWhite,
  },
  seachBar: {
    height: 44,
    overflow: "hidden",
  },
  moreIcon: {
    height: 6,
    width: 56,
  },
  customer11: {
    color: Color.fontWhite,
  },
  component1: {
    backgroundColor: Color.colorSaddlebrown_100,
    width: 141,
    paddingHorizontal: Padding.p_lg,
    paddingVertical: Padding.p_12xs,
    borderRadius: Border.br_5xs,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  addCustomer: {
    color: Color.colorBlack,
  },
  component2: {
    width: 138,
    paddingHorizontal: Padding.p_lg,
    paddingVertical: Padding.p_12xs,
    borderRadius: Border.br_5xs,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    marginLeft: 4,
    backgroundColor: Color.fontWhite,
  },
  customer1: {
    width: 327,
    marginTop: 10,
    borderRadius: Border.br_5xs,
    alignItems: "center",
    flexDirection: "row",
  },
  customer: {
    padding: Padding.p_5xs,
    borderRadius: Border.br_5xs,
    backgroundColor: Color.theme12,
    alignItems: "center",
    overflow: "hidden",
  },
  selectedCustomer: {
    paddingVertical: Padding.p_lgi,
    paddingHorizontal: 0,
    backgroundColor: Color.theme12,
  },
  selectedCategory: {
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
    borderStyle: "solid",
    alignItems: "center",
    overflow: "hidden",
    paddingVertical: Padding.p_12xs,
    flexDirection: "row",
    borderRadius: Border.br_8xs,
    paddingHorizontal: Padding.p_5xs,
    borderWidth: 1,
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
    textAlign: "left",
    color: Color.colorBlack,
  },
  groupParent: {
    marginLeft: -27.5,
    paddingHorizontal: Padding.p_9xs,
    marginTop: -12,
    borderColor: Color.black,
    borderStyle: "solid",
    left: "50%",
    top: "50%",
    borderWidth: 1,
    flexDirection: "row",
    position: "absolute",
    overflow: "hidden",
  },
  filterIcon: {
    width: 55,
    height: 24,
  },
  filter: {
    width: 358,
    paddingVertical: 0,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  products1: {
    textAlign: "left",
    color: Color.black,
  },
  sortIcon: {
    width: 7,
    marginLeft: 8,
    height: 12,
  },
  pleft: {
    width: 92,
    alignItems: "center",
    flexDirection: "row",
  },
  finalPrice: {
    marginLeft: 56,
    textAlign: "left",
    color: Color.black,
  },
  right: {
    width: 177,
    justifyContent: "flex-end",
    alignItems: "center",
    flexDirection: "row",
  },
  heading: {
    paddingHorizontal: Padding.p_5xl,
    borderRadius: Border.br_base,
    marginTop: 16,
    paddingVertical: Padding.p_9xs,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  body: {
    alignItems: "center",
  },
  suggestedItemsWrapper: {
    paddingVertical: 0,
    backgroundColor: Color.fontWhite,
  },
  selectDotIcon: {
    width: 20,
    height: 20,
  },
  productName: {
    width: 115,
    textAlign: "left",
    color: Color.colorBlack,
  },
  text2: {
    textAlign: "right",
    marginTop: 4,
    color: Color.black,
  },
  productNameParent: {
    marginLeft: 4,
  },
  text3: {
    textTransform: "capitalize",
    fontFamily: FontFamily.bold,
    fontWeight: "700",
    fontSize: FontSize.normal1_size,
    textAlign: "left",
    color: Color.black,
  },
  container: {
    marginTop: 2,
    paddingHorizontal: Padding.p_5xs,
    justifyContent: "center",
  },
  vectorIcon2: {
    marginTop: 2,
  },
  text4: {
    color: Color.black,
  },
  text5: {
    color: Color.colorDarkslategray,
  },
  frameWrapper: {
    paddingVertical: Padding.p_xs,
    borderRadius: Border.br_5xs,
    alignItems: "flex-end",
    marginLeft: 16,
    borderColor: Color.black,
    borderWidth: 1,
    borderStyle: "solid",
    overflow: "hidden",
    backgroundColor: Color.fontWhite,
  },
  frameParent: {
    height: 56,
    paddingVertical: Padding.p_10xs_5,
    marginTop: 8,
    borderRadius: Border.br_5xs,
    backgroundColor: Color.theme13,
    justifyContent: "space-between",
  },
  aWrapper: {
    marginTop: 8,
    paddingVertical: 0,
    backgroundColor: Color.fontWhite,
  },
  list: {
    height: 246,
    marginTop: 8,
    alignItems: "center",
    overflow: "hidden",
  },
  products: {
    borderWidth: 2,
    paddingVertical: Padding.p_base,
    paddingHorizontal: 0,
    backgroundColor: Color.theme13,
    borderRadius: Border.br_base,
    marginTop: -12,
  },
  lower: {
    marginTop: 16,
    alignItems: "center",
  },
  body1: {
    paddingTop: Padding.p_base,
    backgroundColor: Color.theme13,
    borderRadius: Border.br_base,
    alignItems: "center",
    overflow: "hidden",
  },
  selectProducts: {
    fontSize: FontSize.bold1_size,
    textAlign: "left",
    color: Color.colorBlack,
  },
  vectorIcon13: {
    width: 16,
    height: 11,
  },
  productListMaximize: {
    paddingLeft: Padding.p_7xl,
    paddingTop: Padding.p_xs,
    paddingRight: Padding.p_base,
    paddingBottom: Padding.p_xs,
    borderRadius: Border.br_5xs,
    marginTop: 16,
    backgroundColor: Color.theme12,
    justifyContent: "space-between",
    shadowOpacity: 1,
    elevation: 6,
    shadowRadius: 6,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    flexDirection: "row",
  },
  dashboard: {
    color: Color.colorSaddlebrown_100,
    marginTop: 8,
    textAlign: "center",
  },
  vectorParent4: {
    width: 70,
    justifyContent: "center",
    alignItems: "center",
  },
  notification: {
    marginTop: 8,
    color: Color.colorDarkslategray,
    textAlign: "center",
  },
  vectorWrapper: {
    paddingBottom: Padding.p_5xl,
    justifyContent: "center",
    flexDirection: "row",
  },
  customer2: {
    marginTop: 12,
    color: Color.colorDarkslategray,
    textAlign: "center",
  },
  frameInner: {
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
  vectorIcon16: {
    width: 19,
    height: 24,
  },
  menuIcons: {
    borderTopLeftRadius: Border.br_base,
    borderTopRightRadius: Border.br_base,
    borderTopWidth: 1,
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_base,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
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
    marginTop: 8,
  },
  all: {
    position: "absolute",
  },
  sellerDaskboardItemsUnhide: {
    borderRadius: Border.br_6xl,
    flex: 1,
    width: "100%",
    height: 807,
    overflow: "hidden",
    backgroundColor: Color.fontWhite,
  },
});

export default SellerDaskboardItemsUnhide1;
