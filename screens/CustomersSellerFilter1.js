import * as React from "react";
import { Text, StyleSheet, Pressable, View } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Padding, Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const CustomersSellerFilter1 = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.customersSellerFilter, styles.iconLayout]}>
      <View style={[styles.all, styles.allPosition]}>
        <View style={styles.upper}>
          <Text style={[styles.sorts, styles.sortsFlexBox]}>Sorts</Text>
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
            style={[styles.upperChild, styles.allPosition]}
            contentFit="cover"
            source={require("../assets/line-321.png")}
          />
        </View>
        <View style={styles.body}>
          <View style={styles.fills}>
            <View style={styles.selectParentBorder}>
              <Text style={styles.selectCategory}>Select category</Text>
              <Image
                style={styles.sortIcon}
                contentFit="cover"
                source={require("../assets/sort-icon5.png")}
              />
            </View>
            <View
              style={[styles.selectDistrictParent, styles.selectParentBorder]}
            >
              <Text style={styles.selectCategory}>Select District</Text>
              <Image
                style={styles.sortIcon}
                contentFit="cover"
                source={require("../assets/sort-icon5.png")}
              />
            </View>
            <View
              style={[styles.selectDistrictParent, styles.selectParentBorder]}
            >
              <Text style={styles.selectCategory}>Select Sub-District</Text>
              <Image
                style={styles.sortIcon}
                contentFit="cover"
                source={require("../assets/sort-icon5.png")}
              />
            </View>
            <View
              style={[styles.selectDistrictParent, styles.selectParentBorder]}
            >
              <Text style={styles.selectCategory}>Select Locality</Text>
              <Image
                style={styles.sortIcon}
                contentFit="cover"
                source={require("../assets/sort-icon5.png")}
              />
            </View>
          </View>
          <View style={styles.bodyLower}>
            <View style={styles.headingSSpaceBlock}>
              <Text style={styles.document}>Sort Options</Text>
            </View>
            <View style={[styles.filetrOptions, styles.sortsFlexBox]}>
              <View style={styles.nameSpaceBlock}>
                <View style={[styles.location1, styles.headingSSpaceBlock]}>
                  <Text style={styles.document1}>By location</Text>
                  <Image
                    style={[styles.sortIcon4, styles.sortIconLayout]}
                    contentFit="cover"
                    source={require("../assets/sort-icon6.png")}
                  />
                  <Image
                    style={styles.checkmarkCircle2Icon}
                    contentFit="cover"
                    source={require("../assets/checkmarkcircle22.png")}
                  />
                </View>
                <Image
                  style={styles.seperatorIcon}
                  contentFit="cover"
                  source={require("../assets/seperator7.png")}
                />
              </View>
              <View style={[styles.name, styles.nameSpaceBlock]}>
                <View style={[styles.location1, styles.headingSSpaceBlock]}>
                  <Text style={styles.document1}>By name</Text>
                  <Image
                    style={[styles.sortIcon4, styles.sortIconLayout]}
                    contentFit="cover"
                    source={require("../assets/sort-icon6.png")}
                  />
                  <Image
                    style={styles.checkmarkCircle2Icon}
                    contentFit="cover"
                    source={require("../assets/select-dot7.png")}
                  />
                </View>
                <Image
                  style={styles.seperatorIcon}
                  contentFit="cover"
                  source={require("../assets/seperator7.png")}
                />
              </View>
              <View style={[styles.name, styles.nameSpaceBlock]}>
                <View style={[styles.location1, styles.headingSSpaceBlock]}>
                  <View style={styles.documentParent}>
                    <Text style={[styles.document3, styles.documentTypo]}>
                      By sellings
                    </Text>
                    <Image
                      style={[styles.sortIcon6, styles.sortIcon6Position]}
                      contentFit="cover"
                      source={require("../assets/sort-icon6.png")}
                    />
                  </View>
                  <Image
                    style={styles.checkmarkCircle2Icon}
                    contentFit="cover"
                    source={require("../assets/select-dot7.png")}
                  />
                </View>
                <Image
                  style={styles.seperatorIcon}
                  contentFit="cover"
                  source={require("../assets/seperator7.png")}
                />
              </View>
              <View style={[styles.customer, styles.nameSpaceBlock]}>
                <View style={[styles.location1, styles.headingSSpaceBlock]}>
                  <View style={styles.documentParent}>
                    <Text style={[styles.document4, styles.sortIcon6Position]}>
                      By customers
                    </Text>
                    <Image
                      style={[styles.sortIcon6, styles.sortIcon6Position]}
                      contentFit="cover"
                      source={require("../assets/sort-icon6.png")}
                    />
                  </View>
                  <Image
                    style={styles.checkmarkCircle2Icon}
                    contentFit="cover"
                    source={require("../assets/select-dot7.png")}
                  />
                </View>
                <Image
                  style={styles.seperatorIcon3}
                  contentFit="cover"
                  source={require("../assets/seperator8.png")}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    overflow: "hidden",
    width: "100%",
  },
  allPosition: {
    left: "50%",
    position: "absolute",
  },
  sortsFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  selectParentBorder: {
    paddingVertical: Padding.p_5xs_5,
    paddingHorizontal: Padding.p_base,
    flexDirection: "row",
    width: 320,
    borderWidth: 1,
    borderColor: Color.theme12,
    borderStyle: "solid",
    backgroundColor: Color.fontWhite,
    borderRadius: Border.br_5xs,
    justifyContent: "space-between",
    alignItems: "center",
  },
  headingSSpaceBlock: {
    paddingVertical: 0,
    paddingHorizontal: Padding.p_base,
    flexDirection: "row",
  },
  sortIconLayout: {
    width: 11,
    height: 20,
  },
  nameSpaceBlock: {
    paddingTop: Padding.p_base,
    width: 359,
    alignItems: "center",
    overflow: "hidden",
  },
  documentTypo: {
    left: 0,
    fontFamily: FontFamily.normal,
    fontSize: FontSize.normal_size,
    color: Color.inkDarkest,
    textAlign: "left",
    letterSpacing: 0,
  },
  sortIcon6Position: {
    top: 1,
    position: "absolute",
  },
  sorts: {
    marginLeft: -61.5,
    color: Color.colorBlack,
    textAlign: "center",
    display: "flex",
    width: 123,
    height: 24,
    fontFamily: FontFamily.bold,
    fontWeight: "700",
    letterSpacing: 0,
    fontSize: FontSize.bold1_size,
    justifyContent: "center",
    top: 0,
    left: "50%",
    position: "absolute",
  },
  icon: {
    height: "100%",
    maxWidth: "100%",
    maxHeight: "100%",
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
    marginLeft: -176,
    top: 36,
    width: 352,
    height: 1,
  },
  upper: {
    width: 351,
    height: 36,
  },
  selectCategory: {
    color: Color.black,
    textAlign: "left",
    fontFamily: FontFamily.bold,
    fontWeight: "700",
    letterSpacing: 0,
    fontSize: FontSize.bold1_size,
  },
  sortIcon: {
    width: 13,
    height: 24,
  },
  selectDistrictParent: {
    marginTop: 8,
  },
  fills: {
    alignItems: "center",
  },
  document: {
    fontSize: FontSize.normal1_size,
    textTransform: "capitalize",
    color: Color.inkDarkest,
    textAlign: "left",
    fontFamily: FontFamily.bold,
    fontWeight: "700",
    letterSpacing: 0,
  },
  document1: {
    width: 120,
    fontFamily: FontFamily.normal,
    fontSize: FontSize.normal_size,
    color: Color.inkDarkest,
    textAlign: "left",
    letterSpacing: 0,
  },
  sortIcon4: {
    height: 20,
  },
  checkmarkCircle2Icon: {
    width: 20,
    height: 20,
  },
  location1: {
    width: 354,
    justifyContent: "space-between",
    paddingVertical: 0,
    alignItems: "center",
  },
  seperatorIcon: {
    width: 359,
    marginTop: 16,
    height: 1,
  },
  name: {
    marginTop: 8,
  },
  document3: {
    width: 120,
    top: 0,
    left: 0,
    position: "absolute",
  },
  sortIcon6: {
    left: 206,
    height: 20,
    width: 11,
  },
  documentParent: {
    width: 217,
    height: 22,
  },
  document4: {
    width: 176,
    left: 0,
    fontFamily: FontFamily.normal,
    fontSize: FontSize.normal_size,
    color: Color.inkDarkest,
    textAlign: "left",
    letterSpacing: 0,
  },
  seperatorIcon3: {
    width: 356,
    marginTop: 16,
    height: 1,
  },
  customer: {
    height: 55,
    marginTop: 8,
  },
  filetrOptions: {
    marginTop: 16,
  },
  bodyLower: {
    marginTop: 24,
  },
  body: {
    marginTop: 35,
    alignItems: "center",
  },
  all: {
    marginTop: -295.5,
    marginLeft: -180,
    top: "50%",
    borderRadius: Border.br_base,
    backgroundColor: Color.theme13,
    paddingHorizontal: 0,
    paddingVertical: Padding.p_base,
  },
  customersSellerFilter: {
    borderRadius: Border.br_6xl,
    flex: 1,
    height: 812,
  },
});

export default CustomersSellerFilter1;
