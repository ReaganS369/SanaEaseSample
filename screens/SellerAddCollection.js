import * as React from "react";
import { Text, StyleSheet, Pressable, View } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, Padding, FontSize } from "../GlobalStyles";

const SellerAddCollection = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.sellerAddCollection}>
      <View style={[styles.dialogBox, styles.dialogBoxPosition]}>
        <View style={styles.upepr}>
          <View style={styles.upper}>
            <Text style={styles.addNewCollection}>Add New Collection</Text>
            <Pressable
              style={styles.vector}
              onPress={() => navigation.navigate("SellerDaskboardItemsUnhide1")}
            >
              <Image
                style={[styles.icon, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/vector15.png")}
              />
            </Pressable>
            <Image
              style={[styles.upperChild, styles.dialogBoxPosition]}
              contentFit="cover"
              source={require("../assets/seperator1.png")}
            />
          </View>
          <View style={[styles.name, styles.tagSpaceBlock]}>
            <Text style={styles.collectionName}>Collection Name</Text>
          </View>
          <View style={styles.tagSpaceBlock}>
            <View style={styles.tags}>
              <View style={styles.groupChildLayout}>
                <View style={[styles.groupChild, styles.childGroupPosition]} />
                <Text style={[styles.tagSample, styles.tagTypo]}>
                  # Tag Sample
                </Text>
                <Image
                  style={[styles.vectorIcon, styles.vectorIconPosition]}
                  contentFit="cover"
                  source={require("../assets/vector16.png")}
                />
              </View>
              <View style={[styles.rectangleGroup, styles.groupLayout]}>
                <View style={[styles.groupItem, styles.groupLayout]} />
                <Text style={[styles.tagSample1, styles.tagTypo]}>
                  # Tag Sample
                </Text>
              </View>
              <View style={[styles.rectangleGroup, styles.groupLayout]}>
                <View style={[styles.groupItem, styles.groupLayout]} />
                <Text style={[styles.tagSample1, styles.tagTypo]}>
                  # Tag Sample
                </Text>
              </View>
              <View style={[styles.rectangleGroup, styles.groupLayout]}>
                <View style={[styles.groupItem, styles.groupLayout]} />
                <Text style={[styles.tagSample1, styles.tagTypo]}>
                  # Tag Sample
                </Text>
              </View>
              <View style={[styles.rectangleParent1, styles.groupChild1Layout]}>
                <View style={[styles.groupChild1, styles.groupChild1Layout]} />
                <Text style={[styles.tagSample4, styles.tagTypo]}>
                  # Tag Sample
                </Text>
                <Image
                  style={[styles.vectorIcon1, styles.vectorIconPosition]}
                  contentFit="cover"
                  source={require("../assets/vector17.png")}
                />
              </View>
            </View>
            <Text style={[styles.tagName, styles.tagTypo]}>Tag Name|</Text>
            <View style={[styles.tagChild, styles.childGroupPosition]} />
            <Image
              style={[styles.vectorIcon2, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/vector18.png")}
            />
          </View>
        </View>
        <View style={styles.lowerButton}>
          <View style={[styles.edit, styles.addFlexBox]}>
            <Text style={[styles.editdeleteCategory, styles.categoryTypo]}>
              Edit/Delete Category
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
            <Text style={[styles.addCategory, styles.categoryTypo]}>
              Add Category
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  dialogBoxPosition: {
    left: "50%",
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  tagSpaceBlock: {
    marginTop: 16,
    backgroundColor: Color.fontWhite,
    borderRadius: Border.br_5xs,
    alignItems: "center",
  },
  childGroupPosition: {
    borderRadius: Border.br_8xs,
    left: 0,
    top: 0,
    position: "absolute",
  },
  tagTypo: {
    fontFamily: FontFamily.normal,
    textAlign: "left",
    letterSpacing: 0,
    position: "absolute",
  },
  vectorIconPosition: {
    height: 12,
    marginTop: -6,
    maxWidth: "100%",
    top: "50%",
    position: "absolute",
    overflow: "hidden",
  },
  groupLayout: {
    width: 106,
    height: 24,
  },
  groupChild1Layout: {
    width: 186,
    height: 24,
  },
  addFlexBox: {
    paddingHorizontal: Padding.p_84xl,
    width: 343,
    flexDirection: "row",
    alignItems: "center",
  },
  categoryTypo: {
    textAlign: "center",
    fontFamily: FontFamily.bold,
    fontWeight: "700",
    letterSpacing: 0,
    fontSize: FontSize.bold1_size,
  },
  addNewCollection: {
    marginLeft: -89.5,
    display: "flex",
    width: 179,
    height: 24,
    top: 0,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.bold,
    fontWeight: "700",
    letterSpacing: 0,
    fontSize: FontSize.bold1_size,
    justifyContent: "center",
    alignItems: "center",
    left: "50%",
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  vector: {
    left: "88.61%",
    top: "0%",
    right: "4.57%",
    bottom: "33.33%",
    width: "6.82%",
    height: "66.67%",
    position: "absolute",
  },
  upperChild: {
    marginLeft: -180,
    top: 36,
    width: 360,
    height: 1,
  },
  upper: {
    height: 36,
    width: 359,
  },
  collectionName: {
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.bold,
    fontWeight: "700",
    letterSpacing: 0,
    fontSize: FontSize.bold1_size,
  },
  name: {
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_2xs,
    flexDirection: "row",
    width: 327,
    overflow: "hidden",
  },
  groupChild: {
    backgroundColor: Color.theme12,
    width: 248,
    height: 24,
  },
  tagSample: {
    left: 26,
    width: 197,
    fontSize: FontSize.normal1_size,
    marginTop: -9,
    fontFamily: FontFamily.normal,
    color: Color.black,
    top: "50%",
  },
  vectorIcon: {
    width: "4.6%",
    right: "5.73%",
    left: "89.68%",
  },
  groupChildLayout: {
    width: 248,
    height: 24,
  },
  groupItem: {
    backgroundColor: Color.theme12,
    borderRadius: Border.br_8xs,
    left: 0,
    top: 0,
    position: "absolute",
  },
  tagSample1: {
    left: 11,
    fontSize: FontSize.normal1_size,
    marginTop: -9,
    fontFamily: FontFamily.normal,
    color: Color.black,
    top: "50%",
  },
  rectangleGroup: {
    marginLeft: 8,
  },
  groupChild1: {
    backgroundColor: Color.theme12,
    borderRadius: Border.br_8xs,
    left: 0,
    top: 0,
    position: "absolute",
  },
  tagSample4: {
    left: 19,
    width: 147,
    fontSize: FontSize.normal1_size,
    marginTop: -9,
    fontFamily: FontFamily.normal,
    color: Color.black,
    top: "50%",
  },
  vectorIcon1: {
    width: "6.13%",
    right: "8.33%",
    left: "85.54%",
  },
  rectangleParent1: {
    marginLeft: 8,
  },
  tags: {
    top: 204,
    left: 8,
    width: 300,
    flexWrap: "wrap",
    zIndex: 0,
    flexDirection: "row",
    position: "absolute",
  },
  tagName: {
    top: 11,
    left: 16,
    fontSize: FontSize.normal_size,
    zIndex: 1,
    color: Color.colorBlack,
  },
  tagChild: {
    borderStyle: "solid",
    borderColor: Color.black1,
    borderWidth: 1,
    height: 44,
    zIndex: 2,
    width: 327,
  },
  vectorIcon2: {
    height: "3.8%",
    width: "4.77%",
    top: "5.33%",
    right: "4.77%",
    bottom: "90.87%",
    left: "90.46%",
    zIndex: 3,
    position: "absolute",
  },
  upepr: {
    alignItems: "center",
  },
  editdeleteCategory: {
    color: Color.colorBlack,
  },
  edit: {
    justifyContent: "space-between",
    paddingVertical: Padding.p_5xs,
    backgroundColor: Color.theme12,
    borderRadius: Border.br_5xs,
    width: 343,
  },
  addCategory: {
    color: Color.fontWhite,
  },
  add: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorSaddlebrown_100,
    paddingVertical: Padding.p_base_5,
    marginTop: 8,
    justifyContent: "center",
    overflow: "hidden",
  },
  lowerButton: {
    marginTop: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  dialogBox: {
    marginTop: -287.5,
    marginLeft: -179.5,
    borderRadius: Border.br_base,
    backgroundColor: Color.theme13,
    paddingHorizontal: 0,
    paddingVertical: Padding.p_base,
    justifyContent: "center",
    alignItems: "center",
    width: 359,
    top: "50%",
    left: "50%",
  },
  sellerAddCollection: {
    borderRadius: Border.br_6xl,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default SellerAddCollection;
