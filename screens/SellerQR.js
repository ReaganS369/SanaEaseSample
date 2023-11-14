import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize, Padding } from "../GlobalStyles";

const SellerQR = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.sellerQr}>
      <View style={[styles.qr, styles.qrLayout]}>
        <View style={styles.upper}>
          <Image
            style={[styles.seperatorIcon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/seperator1.png")}
          />
          <View style={[styles.heading, styles.closePosition]}>
            <Text style={[styles.yourPayment, styles.yourPaymentTypo]}>
              Your Payment
            </Text>
          </View>
          <View style={[styles.close, styles.closePosition]}>
            <Pressable
              style={styles.vector}
              onPress={() => navigation.navigate("SellerRegister")}
            >
              <Image
                style={styles.icon}
                contentFit="cover"
                source={require("../assets/vector8.png")}
              />
            </Pressable>
          </View>
        </View>
        <View style={styles.body}>
          <Text style={[styles.misterPaithangChewlo, styles.yourPaymentTypo]}>
            Mister Paithang Chewlo
          </Text>
          <View style={styles.qr1SpaceBlock}>
            <View style={styles.qr2}>
              <View style={styles.scan}>
                <Text style={[styles.text, styles.textTypo]}>Scan</Text>
              </View>
              <View style={[styles.scan1, styles.scanLayout]}>
                <View style={[styles.scanChild, styles.scanLayout]} />
                <View style={styles.image6Wrapper}>
                  <Image
                    style={[styles.image6Icon, styles.iconPosition]}
                    contentFit="cover"
                    source={require("../assets/image-6.png")}
                  />
                </View>
              </View>
            </View>
            <View style={styles.btn}>
              <Text style={styles.addQr}>Add QR</Text>
            </View>
          </View>
          <View style={[styles.upis, styles.qr1SpaceBlock]}>
            <View style={styles.upi}>
              <View style={styles.scan}>
                <Text style={[styles.text, styles.textTypo]}>UPI</Text>
              </View>
              <View style={styles.upiParent}>
                <View style={styles.upi1}>
                  <Text style={[styles.dasffssaddd, styles.textTypo]}>
                    dasffss@addd
                  </Text>
                  <Image
                    style={styles.fileCopyIcon}
                    contentFit="cover"
                    source={require("../assets/file-copy1.png")}
                  />
                </View>
                <View style={styles.upi2}>
                  <Text style={[styles.dasffssaddd, styles.textTypo]}>
                    afdsfsdfdfff@dafd
                  </Text>
                  <Image
                    style={styles.fileCopyIcon}
                    contentFit="cover"
                    source={require("../assets/file-copy1.png")}
                  />
                </View>
              </View>
            </View>
            <View style={styles.btn}>
              <Text style={styles.addQr}>Add UPI</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  qrLayout: {
    borderRadius: Border.br_base,
    top: "50%",
  },
  iconPosition: {
    left: "50%",
    position: "absolute",
  },
  closePosition: {
    left: 0,
    top: 0,
    paddingVertical: 0,
    flexDirection: "row",
    width: 359,
    position: "absolute",
  },
  yourPaymentTypo: {
    color: Color.colorBlack,
    fontFamily: FontFamily.bold,
    fontWeight: "700",
    letterSpacing: 0,
  },
  textTypo: {
    fontFamily: FontFamily.normal,
    color: Color.colorBlack,
    letterSpacing: 0,
  },
  scanLayout: {
    height: 280,
    width: 280,
  },
  qr1SpaceBlock: {
    marginTop: 24,
    alignItems: "center",
  },
  seperatorIcon: {
    marginLeft: -180,
    top: 36,
    width: 360,
    height: 1,
  },
  yourPayment: {
    textAlign: "center",
    fontSize: FontSize.bold1_size,
    color: Color.colorBlack,
  },
  heading: {
    paddingHorizontal: Padding.p_62xl,
    paddingVertical: 0,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  vector: {
    width: 24,
    height: 24,
  },
  close: {
    justifyContent: "flex-end",
    paddingHorizontal: Padding.p_base,
    paddingVertical: 0,
    flexDirection: "row",
  },
  upper: {
    height: 36,
    width: 359,
  },
  misterPaithangChewlo: {
    fontSize: FontSize.normal_size,
    textTransform: "capitalize",
    textAlign: "left",
  },
  text: {
    fontSize: FontSize.bold_size,
    textAlign: "left",
  },
  scan: {
    paddingHorizontal: Padding.p_13xl,
    paddingVertical: 0,
    flexDirection: "row",
    width: 359,
    alignItems: "center",
  },
  scanChild: {
    marginTop: -140,
    marginLeft: -140,
    backgroundColor: Color.fontWhite,
    borderStyle: "solid",
    borderColor: Color.theme12,
    borderWidth: 1,
    left: "50%",
    position: "absolute",
    borderRadius: Border.br_base,
    top: "50%",
  },
  image6Icon: {
    marginTop: -100,
    marginLeft: -100,
    width: 201,
    height: 202,
    top: "50%",
    left: "50%",
  },
  image6Wrapper: {
    top: 40,
    left: 40,
    width: 200,
    height: 200,
    position: "absolute",
    overflow: "hidden",
  },
  scan1: {
    marginTop: 8,
  },
  qr2: {
    width: 359,
    justifyContent: "center",
    alignItems: "center",
  },
  addQr: {
    color: Color.fontWhite,
    textAlign: "center",
    fontFamily: FontFamily.bold,
    fontWeight: "700",
    letterSpacing: 0,
    fontSize: FontSize.bold1_size,
  },
  btn: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorSaddlebrown_100,
    width: 327,
    justifyContent: "space-between",
    paddingVertical: Padding.p_5xs,
    marginTop: 16,
    flexDirection: "row",
    paddingHorizontal: 0,
    overflow: "hidden",
  },
  dasffssaddd: {
    fontSize: FontSize.normal1_size,
    textAlign: "center",
  },
  fileCopyIcon: {
    width: 16,
    height: 16,
    marginLeft: 4,
    overflow: "hidden",
  },
  upi1: {
    flexDirection: "row",
    alignItems: "center",
  },
  upi2: {
    marginTop: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  upiParent: {
    paddingHorizontal: 40,
    marginTop: 8,
    paddingVertical: 0,
  },
  upi: {
    width: 359,
  },
  upis: {
    justifyContent: "center",
  },
  body: {
    marginTop: 16,
    alignItems: "center",
  },
  qr: {
    marginTop: -337.5,
    left: 12,
    backgroundColor: Color.theme13,
    paddingVertical: Padding.p_base,
    paddingHorizontal: 0,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  sellerQr: {
    borderRadius: Border.br_6xl,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default SellerQR;
