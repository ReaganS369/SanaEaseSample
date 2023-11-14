import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, Padding, FontFamily, FontSize, Border } from "../GlobalStyles";

const SellerQR1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.sellerQr}>
      <View style={styles.all}>
        <View>
          <View style={styles.statusLayout}>
            <View style={[styles.statusBarChild, styles.shareQrPosition]} />
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
              <Text style={[styles.time1, styles.time1Clr]}>9:27</Text>
            </View>
          </View>
          <View style={[styles.statusBar1, styles.menuIconsFlexBox]}>
            <View style={styles.leftSide}>
              <View style={styles.logo}>
                <View style={styles.logoChild} />
                <Image
                  style={[styles.asset91, styles.iconPosition1]}
                  contentFit="cover"
                  source={require("../assets/asset-9-1.png")}
                />
              </View>
              <View style={[styles.balanceSection, styles.menuIconsBorder]}>
                <View style={styles.upperSection}>
                  <Text style={[styles.balance, styles.text1Typo]}>
                    Balance
                  </Text>
                  <View style={[styles.depositButton, styles.scanChildBorder]}>
                    <Text style={[styles.deposit, styles.depositClr]}>
                      Deposit
                    </Text>
                    <Image
                      style={styles.depositIcon}
                      contentFit="cover"
                      source={require("../assets/deposit-icon.png")}
                    />
                  </View>
                </View>
                <Text style={[styles.text, styles.textTypo]}>₹1,00,00,000</Text>
              </View>
            </View>
            <View style={styles.leftSide}>
              <Image
                style={styles.iconLayout2}
                contentFit="cover"
                source={require("../assets/add.png")}
              />
              <View style={[styles.qrScanIcon, styles.iconLayout2]}>
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
              <View style={[styles.qrScanIcon, styles.iconLayout2]}>
                <Image
                  style={[styles.vectorIcon, styles.iconPosition]}
                  contentFit="cover"
                  source={require("../assets/vector10.png")}
                />
                <View style={styles.iconChildShadowBox} />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.parent}>
          <Text style={[styles.text2, styles.time1Clr]}>Scan QR code</Text>
          <View style={styles.body}>
            <View style={styles.frameParent}>
              <View style={styles.frameParent}>
                <Text style={[styles.misterPaithangChewlo, styles.shareQrTypo]}>
                  Mister Paithang Chewlo
                </Text>
                <View style={styles.id1111222233334444Parent}>
                  <Text style={[styles.id11112222, styles.textTypo2]}>
                    id: 1111 2222 3333 4444
                  </Text>
                  <Image
                    style={[styles.fileCopyIcon, styles.iconLayout1]}
                    contentFit="cover"
                    source={require("../assets/file-copy.png")}
                  />
                </View>
              </View>
              <View style={styles.scanParent}>
                <View style={styles.scanLayout}>
                  <View style={[styles.scanChild, styles.scanLayout]} />
                  <View style={styles.image6Wrapper}>
                    <Image
                      style={[styles.image6Icon, styles.iconPosition1]}
                      contentFit="cover"
                      source={require("../assets/image-61.png")}
                    />
                  </View>
                </View>
                <View style={styles.downloadOrShare}>
                  <View style={styles.groupChildLayout}>
                    <View style={[styles.groupChild, styles.groupBorder]} />
                    <View style={styles.shareQrParent}>
                      <Text style={[styles.shareQr, styles.shareQrTypo]}>
                        Share QR
                      </Text>
                      <Image
                        style={[styles.shareIcon, styles.iconLayout1]}
                        contentFit="cover"
                        source={require("../assets/share.png")}
                      />
                    </View>
                  </View>
                  <View style={[styles.rectangleGroup, styles.groupLayout]}>
                    <View style={[styles.groupItem, styles.groupLayout]} />
                    <View style={styles.iconlyboldarrowLeftSquarParent}>
                      <Image
                        style={[
                          styles.iconlyboldarrowLeftSquar,
                          styles.capIconLayout,
                        ]}
                        contentFit="cover"
                        source={require("../assets/iconlyboldarrowleftsquare.png")}
                      />
                      <Text style={[styles.shareQr, styles.shareQrTypo]}>
                        Download QR
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <Pressable
              style={[styles.personalPaymentWrapper, styles.groupBorder]}
              onPress={() => navigation.navigate("SellerQR")}
            >
              <Text style={[styles.personalPayment, styles.textTypo]}>
                Personal Payment
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  shareQrPosition: {
    top: 0,
    position: "absolute",
  },
  capIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  time1Clr: {
    color: Color.colorBlack,
    letterSpacing: 0,
  },
  menuIconsFlexBox: {
    paddingHorizontal: Padding.p_base,
    justifyContent: "space-between",
    flexDirection: "row",
    width: 375,
    alignItems: "center",
  },
  iconPosition1: {
    top: "50%",
    left: "50%",
  },
  menuIconsBorder: {
    borderColor: Color.black,
    borderStyle: "solid",
    backgroundColor: Color.fontWhite,
  },
  text1Typo: {
    fontFamily: FontFamily.openSansSemiBold,
    fontWeight: "600",
  },
  scanChildBorder: {
    borderColor: Color.theme12,
    borderWidth: 1,
    borderStyle: "solid",
  },
  depositClr: {
    color: Color.colorDarkslategray,
    fontSize: FontSize.normal2_size,
    letterSpacing: 0,
  },
  textTypo: {
    fontFamily: FontFamily.bold,
    fontWeight: "700",
  },
  iconLayout2: {
    height: 32,
    width: 32,
  },
  iconPosition: {
    height: 24,
    marginTop: -12,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  shareQrTypo: {
    fontSize: FontSize.normal_size,
    textAlign: "left",
    color: Color.colorBlack,
    letterSpacing: 0,
  },
  textTypo2: {
    fontSize: FontSize.normal1_size,
    color: Color.colorBlack,
    letterSpacing: 0,
  },
  iconLayout1: {
    height: 16,
    width: 16,
    position: "absolute",
    overflow: "hidden",
  },
  scanLayout: {
    height: 280,
    width: 280,
  },
  groupBorder: {
    backgroundColor: Color.theme13,
    borderColor: Color.theme12,
    borderWidth: 1,
    borderStyle: "solid",
  },
  groupLayout: {
    width: 149,
    height: 32,
  },
  iconLayout: {
    width: 24,
    height: 24,
  },
  statusBarChild: {
    height: 44,
    width: 375,
    left: 0,
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
    borderRadius: 3,
    borderColor: Color.colorBlack,
    opacity: 0.35,
    borderWidth: 1,
    borderStyle: "solid",
    left: "0%",
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
    color: Color.colorBlack,
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
  statusLayout: {
    height: 44,
    width: 375,
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
    position: "absolute",
  },
  logo: {
    width: 48,
    height: 48,
  },
  balance: {
    color: Color.black,
    textAlign: "left",
    fontSize: FontSize.normal2_size,
    fontFamily: FontFamily.openSansSemiBold,
    letterSpacing: 0,
  },
  deposit: {
    fontFamily: FontFamily.normal,
    textAlign: "left",
  },
  depositIcon: {
    width: 12,
    marginLeft: 4,
    height: 12,
  },
  depositButton: {
    borderBottomRightRadius: Border.br_9xs,
    borderBottomLeftRadius: Border.br_9xs,
    backgroundColor: Color.theme12,
    padding: Padding.p_9xs,
    marginLeft: 3,
    justifyContent: "center",
    borderTopRightRadius: Border.br_9xs,
    flexDirection: "row",
    alignItems: "center",
  },
  upperSection: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    display: "flex",
    alignItems: "flex-end",
    width: 108,
    height: 20,
    textTransform: "capitalize",
    fontWeight: "700",
    fontSize: FontSize.normal1_size,
    color: Color.colorBlack,
    letterSpacing: 0,
    textAlign: "left",
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
    backgroundColor: Color.transprent,
    borderRadius: Border.br_8xs,
    marginLeft: -16,
    marginTop: -16,
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
    marginLeft: -10,
    height: 24,
    width: 21,
  },
  text1: {
    color: Color.fontWhite,
    fontSize: FontSize.normal2_size,
    fontFamily: FontFamily.openSansSemiBold,
    letterSpacing: 0,
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
  },
  statusBar1: {
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowRadius: 6,
    elevation: 6,
    paddingVertical: Padding.p_9xs,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    paddingHorizontal: Padding.p_base,
    backgroundColor: Color.fontWhite,
  },
  text2: {
    fontSize: FontSize.bold_size,
    fontFamily: FontFamily.normal,
    textAlign: "left",
    color: Color.colorBlack,
    letterSpacing: 0,
  },
  misterPaithangChewlo: {
    fontFamily: FontFamily.bold,
    fontWeight: "700",
    textTransform: "capitalize",
  },
  id11112222: {
    marginLeft: -85,
    fontFamily: FontFamily.normal,
    left: "50%",
    textAlign: "center",
    top: 0,
    position: "absolute",
  },
  fileCopyIcon: {
    marginTop: -8.5,
    marginLeft: 69,
    left: "50%",
    top: "50%",
  },
  id1111222233334444Parent: {
    width: 170,
    height: 19,
    marginTop: 8,
  },
  frameParent: {
    alignItems: "center",
  },
  scanChild: {
    marginTop: -140,
    marginLeft: -140,
    borderRadius: Border.br_base,
    borderColor: Color.theme12,
    borderWidth: 1,
    borderStyle: "solid",
    left: "50%",
    top: "50%",
    position: "absolute",
    backgroundColor: Color.fontWhite,
  },
  image6Icon: {
    marginTop: -100,
    marginLeft: -100,
    width: 201,
    height: 202,
    left: "50%",
    position: "absolute",
  },
  image6Wrapper: {
    top: 40,
    left: 40,
    width: 200,
    height: 200,
    position: "absolute",
    overflow: "hidden",
  },
  groupChild: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.theme13,
    top: 0,
    left: 0,
    position: "absolute",
    width: 117,
    height: 32,
  },
  shareQr: {
    left: 20,
    fontFamily: FontFamily.normal,
    top: 0,
    position: "absolute",
  },
  shareIcon: {
    top: 3,
    left: 0,
  },
  shareQrParent: {
    top: 5,
    left: 15,
    width: 87,
    height: 22,
    position: "absolute",
  },
  groupChildLayout: {
    width: 117,
    height: 32,
  },
  groupItem: {
    backgroundColor: Color.theme13,
    borderColor: Color.theme12,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_5xs,
    top: 0,
    left: 0,
    position: "absolute",
  },
  iconlyboldarrowLeftSquar: {
    height: "72.73%",
    width: "13.45%",
    top: "13.64%",
    right: "86.55%",
    bottom: "13.64%",
    left: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
  },
  iconlyboldarrowLeftSquarParent: {
    height: "68.75%",
    width: "79.87%",
    top: "15.63%",
    right: "10.07%",
    bottom: "15.63%",
    left: "10.07%",
    position: "absolute",
  },
  rectangleGroup: {
    marginLeft: 8,
  },
  downloadOrShare: {
    marginTop: 16,
    flexDirection: "row",
  },
  scanParent: {
    marginTop: 32,
    alignItems: "center",
  },
  personalPayment: {
    fontSize: FontSize.bold1_size,
    textAlign: "center",
    color: Color.colorBlack,
    letterSpacing: 0,
  },
  personalPaymentWrapper: {
    width: 343,
    paddingHorizontal: 0,
    paddingVertical: Padding.p_base,
    borderRadius: Border.br_base,
    marginTop: 16,
    backgroundColor: Color.theme13,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  body: {
    marginTop: 56,
    alignItems: "center",
  },
  parent: {
    marginTop: 16,
  },
  all: {
    top: -2,
    alignItems: "center",
    left: 0,
    position: "absolute",
  },
  sellerQr: {
    borderRadius: Border.br_6xl,
    flex: 1,
    width: "100%",
    height: 804,
    overflow: "hidden",
    backgroundColor: Color.fontWhite,
  },
});

export default SellerQR1;
