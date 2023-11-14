import * as React from "react";
import { Text, StyleSheet, Pressable, View } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const CustomersSellerFilter = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.customersSellerFilter, styles.iconLayout]}>
      <View style={styles.contactSeller}>
        <View style={styles.upper}>
          <Text style={[styles.contactSeller1, styles.phoneNumberFlexBox]}>
            Contact Seller
          </Text>
          <Pressable
            style={styles.vector}
            onPress={() => navigation.navigate("SellerDaskboardItemsUnhide1")}
          >
            <Image
              style={[styles.icon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/vector34.png")}
            />
          </Pressable>
          <Image
            style={[styles.upperChild, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/line-321.png")}
          />
        </View>
        <View style={styles.body}>
          <View style={styles.misterPaithangChewloParent}>
            <Text style={[styles.misterPaithangChewlo, styles.phoneNumberTypo]}>
              Mister Paithang Chewlo
            </Text>
            <View style={styles.id1111222233334444Parent}>
              <Text style={[styles.id11112222, styles.id11112222Typo]}>
                id: 1111 2222 3333 4444
              </Text>
              <Image
                style={[styles.fileCopyIcon, styles.iconPosition]}
                contentFit="cover"
                source={require("../assets/file-copy2.png")}
              />
            </View>
          </View>
          <View style={styles.scanWrapper}>
            <View style={styles.scanLayout}>
              <View style={[styles.scanChild, styles.scanLayout]} />
              <View style={styles.image6Wrapper}>
                <Image
                  style={[styles.image6Icon, styles.iconPosition]}
                  contentFit="cover"
                  source={require("../assets/image-62.png")}
                />
              </View>
            </View>
          </View>
          <View style={styles.scanWrapper}>
            <View style={styles.parentFlexBox}>
              <Text style={[styles.phoneNumber, styles.id11112222Typo]}>
                Phone Number
              </Text>
              <Text style={[styles.text, styles.textTypo]}>
                +91 98765 43120
              </Text>
            </View>
            <View style={[styles.emailParent, styles.parentFlexBox]}>
              <Text style={[styles.phoneNumber, styles.id11112222Typo]}>
                Email
              </Text>
              <Text style={[styles.tombunggmailcom, styles.textTypo]}>
                tombung@gmail.com
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    width: "100%",
    overflow: "hidden",
  },
  phoneNumberFlexBox: {
    display: "flex",
    alignItems: "center",
  },
  iconPosition: {
    left: "50%",
    position: "absolute",
  },
  phoneNumberTypo: {
    textAlign: "left",
    fontSize: FontSize.normal_size,
  },
  id11112222Typo: {
    fontFamily: FontFamily.normal,
    letterSpacing: 0,
  },
  scanLayout: {
    height: 280,
    width: 280,
  },
  textTypo: {
    marginLeft: 4,
    fontFamily: FontFamily.normal,
    height: 19,
    textAlign: "left",
    fontSize: FontSize.normal_size,
    display: "flex",
    color: Color.colorBlack,
    letterSpacing: 0,
    alignItems: "center",
  },
  parentFlexBox: {
    flexDirection: "row",
    width: 327,
    alignItems: "center",
  },
  contactSeller1: {
    marginLeft: -61.5,
    fontSize: FontSize.bold1_size,
    width: 123,
    height: 24,
    textAlign: "center",
    top: 0,
    color: Color.colorBlack,
    left: "50%",
    position: "absolute",
    fontFamily: FontFamily.bold,
    fontWeight: "700",
    letterSpacing: 0,
    display: "flex",
    justifyContent: "center",
  },
  icon: {
    height: "100%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  vector: {
    left: "88.6%",
    top: "0%",
    right: "4.56%",
    bottom: "33.33%",
    width: "6.84%",
    height: "66.67%",
    position: "absolute",
  },
  upperChild: {
    top: 36,
    width: 352,
    height: 1,
    left: "50%",
    marginLeft: -176,
  },
  upper: {
    width: 351,
    height: 36,
  },
  misterPaithangChewlo: {
    textTransform: "capitalize",
    color: Color.colorBlack,
    fontSize: FontSize.normal_size,
    fontFamily: FontFamily.bold,
    fontWeight: "700",
    letterSpacing: 0,
  },
  id11112222: {
    marginLeft: -85,
    fontSize: FontSize.normal1_size,
    textAlign: "center",
    top: 0,
    color: Color.colorBlack,
    left: "50%",
    position: "absolute",
    fontFamily: FontFamily.normal,
  },
  fileCopyIcon: {
    marginTop: -8.5,
    marginLeft: 69,
    width: 16,
    height: 16,
    top: "50%",
    left: "50%",
    overflow: "hidden",
  },
  id1111222233334444Parent: {
    width: 170,
    marginTop: 8,
    height: 19,
  },
  misterPaithangChewloParent: {
    alignItems: "center",
  },
  scanChild: {
    marginTop: -140,
    marginLeft: -140,
    borderStyle: "solid",
    borderColor: Color.theme12,
    borderWidth: 1,
    borderRadius: Border.br_base,
    height: 280,
    width: 280,
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
  scanWrapper: {
    marginTop: 32,
    alignItems: "center",
  },
  phoneNumber: {
    color: Color.black,
    width: 150,
    height: 22,
    textAlign: "left",
    fontSize: FontSize.normal_size,
    display: "flex",
    alignItems: "center",
  },
  text: {
    width: 151,
  },
  tombunggmailcom: {
    width: 181,
  },
  emailParent: {
    marginTop: 8,
    overflow: "hidden",
  },
  body: {
    marginTop: 35,
    alignItems: "center",
  },
  contactSeller: {
    marginTop: -281.5,
    backgroundColor: Color.theme13,
    paddingTop: Padding.p_base,
    paddingBottom: Padding.p_13xl,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: Border.br_base,
    left: "50%",
    top: "50%",
    marginLeft: -176,
    position: "absolute",
  },
  customersSellerFilter: {
    borderRadius: Border.br_6xl,
    flex: 1,
    height: 812,
    overflow: "hidden",
    backgroundColor: Color.fontWhite,
    width: "100%",
  },
});

export default CustomersSellerFilter;
