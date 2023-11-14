import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Padding, Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const SellerCustomerFilter = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.sellerCustomerFilter}>
      <View style={[styles.body, styles.bodyPosition]}>
        <View style={styles.topSection}>
          <Image
            style={styles.nativeBottomSheetIndicato}
            contentFit="cover"
            source={require("../assets/native--bottom-sheet-indicator.png")}
          />
          <View style={styles.upper}>
            <Image
              style={[styles.seperatorIcon, styles.seperatorIconLayout]}
              contentFit="cover"
              source={require("../assets/seperator2.png")}
            />
            <View style={styles.heading}>
              <Text style={styles.sort}>Sort</Text>
            </View>
            <View style={[styles.close, styles.closeSpaceBlock]}>
              <Pressable
                style={styles.vector}
                onPress={() => navigation.navigate("SellerRegister")}
              >
                <Image
                  style={styles.icon}
                  contentFit="cover"
                  source={require("../assets/vector11.png")}
                />
              </Pressable>
            </View>
          </View>
        </View>
        <View style={styles.sorts}>
          <View style={styles.tabSpaceBlock}>
            <View style={[styles.documentParent, styles.closeSpaceBlock]}>
              <Text style={styles.document}>Relevance</Text>
              <Image
                style={styles.checkmarkCircle2Icon}
                contentFit="cover"
                source={require("../assets/checkmarkcircle2.png")}
              />
            </View>
            <Image
              style={[styles.seperatorIcon1, styles.seperatorIconLayout]}
              contentFit="cover"
              source={require("../assets/seperator3.png")}
            />
          </View>
          <View style={[styles.tab3, styles.tabSpaceBlock]}>
            <View style={[styles.documentParent, styles.closeSpaceBlock]}>
              <Text style={styles.documentTypo}>Name</Text>
              <Image
                style={styles.sortIconLayout}
                contentFit="cover"
                source={require("../assets/sort-icon.png")}
              />
              <Image
                style={styles.checkmarkCircle2Icon}
                contentFit="cover"
                source={require("../assets/select-dot.png")}
              />
            </View>
            <Image
              style={[styles.seperatorIcon1, styles.seperatorIconLayout]}
              contentFit="cover"
              source={require("../assets/seperator3.png")}
            />
          </View>
          <View style={[styles.tab3, styles.tabSpaceBlock]}>
            <View style={[styles.documentParent, styles.closeSpaceBlock]}>
              <View style={styles.documentContainer}>
                <Text style={[styles.document2, styles.documentTypo]}>
                  Visits
                </Text>
                <Image
                  style={[styles.sortIcon1, styles.sortIconLayout]}
                  contentFit="cover"
                  source={require("../assets/sort-icon.png")}
                />
              </View>
              <Image
                style={styles.checkmarkCircle2Icon}
                contentFit="cover"
                source={require("../assets/select-dot.png")}
              />
            </View>
            <Image
              style={[styles.seperatorIcon1, styles.seperatorIconLayout]}
              contentFit="cover"
              source={require("../assets/seperator3.png")}
            />
          </View>
          <View style={[styles.tab3, styles.tabSpaceBlock]}>
            <View style={[styles.documentParent, styles.closeSpaceBlock]}>
              <View style={styles.documentContainer}>
                <Text style={[styles.document2, styles.documentTypo]}>
                  Earnings
                </Text>
                <Image
                  style={[styles.sortIcon1, styles.sortIconLayout]}
                  contentFit="cover"
                  source={require("../assets/sort-icon.png")}
                />
              </View>
              <Image
                style={styles.checkmarkCircle2Icon}
                contentFit="cover"
                source={require("../assets/select-dot.png")}
              />
            </View>
            <Image
              style={[styles.seperatorIcon1, styles.seperatorIconLayout]}
              contentFit="cover"
              source={require("../assets/seperator3.png")}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bodyPosition: {
    left: "50%",
    marginLeft: -179.5,
    position: "absolute",
  },
  seperatorIconLayout: {
    height: 1,
    width: 359,
  },
  closeSpaceBlock: {
    paddingHorizontal: Padding.p_base,
    paddingVertical: 0,
    flexDirection: "row",
  },
  tabSpaceBlock: {
    paddingTop: Padding.p_base,
    width: 359,
    alignItems: "center",
    overflow: "hidden",
  },
  documentTypo: {
    width: 120,
    textAlign: "left",
    color: Color.inkDarkest,
    fontFamily: FontFamily.normal,
    fontSize: FontSize.normal_size,
    letterSpacing: 0,
  },
  sortIconLayout: {
    width: 11,
    height: 20,
  },
  nativeBottomSheetIndicato: {
    borderTopLeftRadius: Border.br_base,
    borderTopRightRadius: Border.br_base,
    height: 24,
    width: 359,
  },
  seperatorIcon: {
    top: 36,
    left: "50%",
    marginLeft: -179.5,
    position: "absolute",
  },
  sort: {
    fontSize: FontSize.bold1_size,
    fontWeight: "700",
    fontFamily: FontFamily.bold,
    color: Color.colorBlack,
    textAlign: "center",
    letterSpacing: 0,
  },
  heading: {
    paddingHorizontal: Padding.p_62xl,
    paddingVertical: 0,
    flexDirection: "row",
    justifyContent: "center",
    left: 0,
    top: 0,
    width: 359,
    alignItems: "center",
    position: "absolute",
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
    left: 0,
    top: 0,
    position: "absolute",
    width: 359,
  },
  upper: {
    height: 36,
    width: 359,
  },
  topSection: {
    alignItems: "center",
  },
  document: {
    color: Color.inkDarkest,
    fontFamily: FontFamily.normal,
    fontSize: FontSize.normal_size,
    textAlign: "center",
    letterSpacing: 0,
  },
  checkmarkCircle2Icon: {
    width: 20,
    height: 20,
  },
  documentParent: {
    width: 354,
    justifyContent: "space-between",
    alignItems: "center",
  },
  seperatorIcon1: {
    marginTop: 16,
  },
  tab3: {
    marginTop: 8,
  },
  document2: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  sortIcon1: {
    top: 1,
    left: 206,
    position: "absolute",
    width: 11,
  },
  documentContainer: {
    width: 217,
    height: 22,
  },
  sorts: {
    marginTop: 8,
    justifyContent: "center",
    width: 359,
    alignItems: "center",
  },
  body: {
    top: 426,
    borderRadius: Border.br_base,
    backgroundColor: Color.theme13,
    paddingBottom: Padding.p_base,
    alignItems: "center",
    overflow: "hidden",
  },
  sellerCustomerFilter: {
    borderRadius: Border.br_6xl,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default SellerCustomerFilter;
