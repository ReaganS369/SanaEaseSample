import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Padding, Border } from "../GlobalStyles";

const TermsAndConditions = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.termsAndConditions}>
      <View style={styles.body}>
        <View style={styles.upperSection}>
          <View style={styles.upper}>
            <Image
              style={styles.seperatorIcon}
              contentFit="cover"
              source={require("../assets/seperator1.png")}
            />
            <View style={[styles.heading, styles.closePosition]}>
              <Text style={[styles.userAgreement, styles.bFlexBox]}>
                User Agreement
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
          <Text style={[styles.b, styles.bFlexBox]}>
            Last Update on: 10/10/2023
          </Text>
        </View>
        <View style={[styles.body1, styles.bodyLayout]}>
          <View style={[styles.body2, styles.bodyLayout]}>
            <View style={styles.jenBiography}>
              <Text style={[styles.clause1, styles.clause1Typo]}>Clause 1</Text>
              <Text style={[styles.loremIpsumDolor, styles.clause1Typo]}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
                condimentum eget purus in. Consectetur eget id morbi amet amet,
                in. Ipsum viverra pretium tellus neque. Ullamcorper suspendisse
                aenean leo pharetra in sit semper et. Amet quam placerat sem.
              </Text>
            </View>
            <View style={styles.jenBiography1}>
              <Text style={[styles.clause1, styles.clause1Typo]}>
                2. Clause 2
              </Text>
              <Text
                style={[styles.loremIpsumDolor, styles.clause1Typo]}
              >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra condimentum eget purus in. Consectetur eget id morbi amet amet, in. Ipsum viverra pretium tellus neque. Ullamcorper suspendisse aenean leo pharetra in sit semper et. Amet quam placerat sem.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra condimentum eget purus in. Consectetur eget id morbi amet amet, in. Ipsum viverra pretium tellus neque. Ullamcorper suspendisse aenean leo pharetra in sit semper et. Amet quam placerat sem.`}</Text>
            </View>
          </View>
          <View style={styles.scrollbar}>
            <View style={[styles.scrollbarChild, styles.scrollbarPosition]} />
            <View style={[styles.scrollbarItem, styles.scrollbarPosition]} />
          </View>
        </View>
        <Pressable
          style={[styles.lowerButton, styles.headingFlexBox]}
          onPress={() =>
            navigation.navigate("BottomTabsRoot", { screen: "SellerDaskboard" })
          }
        >
          <Text
            style={[styles.agreedContinue, styles.bFlexBox]}
          >{`Agreed & Continue`}</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  closePosition: {
    paddingVertical: 0,
    flexDirection: "row",
    left: 0,
    top: 0,
    width: 359,
    position: "absolute",
  },
  bFlexBox: {
    textAlign: "center",
    letterSpacing: 0,
  },
  bodyLayout: {
    height: 360,
    width: 343,
  },
  clause1Typo: {
    textAlign: "left",
    fontFamily: FontFamily.normal,
    color: Color.colorBlack,
    letterSpacing: 0,
  },
  scrollbarPosition: {
    width: 9,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  headingFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  seperatorIcon: {
    top: 36,
    height: 1,
    width: 359,
    left: "50%",
    marginLeft: -179.5,
    position: "absolute",
  },
  userAgreement: {
    color: Color.colorBlack,
    textAlign: "center",
    letterSpacing: 0,
    fontFamily: FontFamily.bold,
    fontWeight: "700",
    fontSize: FontSize.bold1_size,
  },
  heading: {
    paddingHorizontal: Padding.p_62xl,
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
  },
  upper: {
    height: 36,
    width: 359,
  },
  b: {
    fontSize: FontSize.normal2_size,
    fontWeight: "600",
    fontFamily: FontFamily.openSansSemiBold,
    marginTop: 4,
    color: Color.colorBlack,
    textAlign: "center",
    letterSpacing: 0,
  },
  upperSection: {
    alignItems: "center",
  },
  clause1: {
    fontSize: FontSize.bold1_size,
    textAlign: "left",
    fontFamily: FontFamily.normal,
  },
  loremIpsumDolor: {
    fontSize: FontSize.normal_size,
    width: 311,
    marginTop: 9,
  },
  jenBiography: {
    alignSelf: "stretch",
  },
  jenBiography1: {
    alignSelf: "stretch",
    marginTop: 16,
  },
  body2: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.fontWhite,
    padding: Padding.p_base,
    left: 0,
    top: 0,
    height: 360,
    width: 343,
    alignItems: "center",
    position: "absolute",
  },
  scrollbarChild: {
    marginTop: -292.2,
    marginLeft: -3.8,
    borderRadius: 50,
    height: 583,
    backgroundColor: Color.theme13,
    width: 9,
  },
  scrollbarItem: {
    marginTop: -107,
    marginLeft: -5,
    height: 139,
    backgroundColor: Color.colorSaddlebrown_100,
  },
  scrollbar: {
    top: 7,
    left: 337,
    width: 4,
    height: 348,
    position: "absolute",
    overflow: "hidden",
    borderRadius: Border.br_6xl,
  },
  body1: {
    marginTop: 16,
  },
  agreedContinue: {
    color: Color.fontWhite,
    fontFamily: FontFamily.bold,
    fontWeight: "700",
    fontSize: FontSize.bold1_size,
    textAlign: "center",
    letterSpacing: 0,
  },
  lowerButton: {
    width: 335,
    paddingVertical: Padding.p_base_5,
    backgroundColor: Color.colorSaddlebrown_100,
    marginTop: 16,
    flexDirection: "row",
    justifyContent: "center",
    paddingHorizontal: 0,
    borderRadius: Border.br_base,
    overflow: "hidden",
  },
  body: {
    marginTop: -268.5,
    paddingVertical: Padding.p_base,
    paddingHorizontal: 0,
    borderRadius: Border.br_base,
    top: "50%",
    alignItems: "center",
    backgroundColor: Color.theme13,
    left: "50%",
    marginLeft: -179.5,
    position: "absolute",
    overflow: "hidden",
  },
  termsAndConditions: {
    flex: 1,
    height: 804,
    overflow: "hidden",
    borderRadius: Border.br_6xl,
    width: "100%",
  },
});

export default TermsAndConditions;
