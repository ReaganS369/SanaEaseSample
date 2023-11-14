import * as React from "react";
import { Text, StyleSheet, Pressable, View } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";

const SellerAddNewItemitemVarie = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.sellerAddNewItemitemVarie}>
      <View style={styles.bdr}>
        <View style={[styles.all, styles.childPosition]}>
          <View style={styles.frameParent}>
            <View style={styles.groupParent}>
              <View style={styles.addNewItemParent}>
                <Text style={[styles.addNewItem, styles.addItemTypo]}>
                  Add New Item
                </Text>
                <Pressable
                  style={styles.vector}
                  onPress={() =>
                    navigation.navigate("SellerDaskboardItemsUnhide1")
                  }
                >
                  <Image
                    style={[styles.icon, styles.iconLayout]}
                    contentFit="cover"
                    source={require("../assets/vector19.png")}
                  />
                </Pressable>
                <Image
                  style={[styles.groupChild, styles.addNewItemPosition]}
                  contentFit="cover"
                  source={require("../assets/line-32.png")}
                />
              </View>
              <View style={styles.nameParent}>
                <View style={styles.name}>
                  <View style={[styles.nameChild, styles.childPosition]} />
                  <Text style={[styles.anyName, styles.nameFlexBox]}>
                    Any Name|
                  </Text>
                  <Text style={[styles.itemName, styles.nameFlexBox]}>
                    Item Name
                  </Text>
                </View>
                <View style={styles.itemNicknamemore}>
                  <View
                    style={[styles.itemNicknamemoreChild, styles.childPosition]}
                  />
                  <Text
                    style={[styles.itemsNickname, styles.itemsNicknameTypo]}
                  >
                    Items Nickname
                  </Text>
                </View>
                <View style={styles.itemPriceRangeAdd}>
                  <View
                    style={[
                      styles.itemPriceRangeAddChild,
                      styles.childGroupPosition,
                    ]}
                  />
                  <Text
                    style={[styles.itemsNickname, styles.itemsNicknameTypo]}
                  >
                    Add Price
                  </Text>
                </View>
                <View style={styles.availableQuantityParent}>
                  <Text style={[styles.availableQuantity, styles.nameFlexBox]}>
                    Available Quantity
                  </Text>
                  <View
                    style={[styles.groupWrapper, styles.categorySpaceBlock]}
                  >
                    <View style={styles.wrapper}>
                      <Text style={[styles.text, styles.nameFlexBox]}>
                        1,000
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={[styles.category, styles.categoryLayout]}>
                  <Text style={styles.itemsNicknameTypo}>Select category</Text>
                  <Image
                    style={styles.sortIcon}
                    contentFit="cover"
                    source={require("../assets/sort-icon3.png")}
                  />
                </View>
              </View>
              <View style={styles.tag}>
                <View style={styles.tags}>
                  <View style={styles.groupItemLayout}>
                    <View style={[styles.groupItem, styles.groupItemLayout]} />
                    <Text style={[styles.tagSample, styles.tagTypo]}>
                      # Tag Sample
                    </Text>
                    <Image
                      style={[styles.vectorIcon, styles.vectorIconLayout]}
                      contentFit="cover"
                      source={require("../assets/vector20.png")}
                    />
                  </View>
                  <View style={[styles.rectangleGroup, styles.groupLayout]}>
                    <View style={[styles.groupInner, styles.groupLayout]} />
                    <Text style={[styles.tagSample1, styles.tagTypo]}>
                      # Tag Sample
                    </Text>
                  </View>
                  <View style={[styles.rectangleGroup, styles.groupLayout]}>
                    <View style={[styles.groupInner, styles.groupLayout]} />
                    <Text style={[styles.tagSample1, styles.tagTypo]}>
                      # Tag Sample
                    </Text>
                  </View>
                  <View style={[styles.rectangleGroup, styles.groupLayout]}>
                    <View style={[styles.groupInner, styles.groupLayout]} />
                    <Text style={[styles.tagSample1, styles.tagTypo]}>
                      # Tag Sample
                    </Text>
                  </View>
                  <View
                    style={[styles.rectangleParent1, styles.groupChild2Layout]}
                  >
                    <View
                      style={[styles.groupChild2, styles.groupChild2Layout]}
                    />
                    <Text style={[styles.tagSample4, styles.tagTypo]}>
                      # Tag Sample
                    </Text>
                    <Image
                      style={[styles.vectorIcon1, styles.vectorIconLayout]}
                      contentFit="cover"
                      source={require("../assets/vector21.png")}
                    />
                  </View>
                </View>
                <Text style={[styles.tagName, styles.nameFlexBox]}>
                  Tag Name|
                </Text>
                <View style={[styles.tagChild, styles.categoryLayout]} />
                <Image
                  style={[styles.vectorIcon2, styles.iconLayout]}
                  contentFit="cover"
                  source={require("../assets/vector22.png")}
                />
              </View>
            </View>
            <View style={styles.lower}>
              <View style={[styles.edit, styles.editFlexBox]}>
                <Text style={styles.editdeleteCategory}>
                  Edit/Delete Category
                </Text>
              </View>
              <Pressable
                style={[styles.button, styles.editFlexBox]}
                onPress={() =>
                  navigation.navigate("BottomTabsRoot", {
                    screen: "SellerDaskboard",
                  })
                }
              >
                <Text style={[styles.addItem, styles.addItemTypo]}>
                  add Item
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  childPosition: {
    left: 0,
    position: "absolute",
  },
  addItemTypo: {
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.bold,
    fontWeight: "700",
    letterSpacing: 0,
    fontSize: FontSize.bold1_size,
    justifyContent: "center",
    alignItems: "center",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  addNewItemPosition: {
    left: "50%",
    position: "absolute",
  },
  nameFlexBox: {
    textAlign: "left",
    letterSpacing: 0,
  },
  itemsNicknameTypo: {
    color: Color.black,
    textAlign: "left",
    fontFamily: FontFamily.bold,
    fontWeight: "700",
    letterSpacing: 0,
    fontSize: FontSize.bold1_size,
  },
  childGroupPosition: {
    borderRadius: Border.br_8xs,
    top: 0,
    left: 0,
    position: "absolute",
  },
  categorySpaceBlock: {
    paddingHorizontal: Padding.p_base,
    backgroundColor: Color.fontWhite,
    borderRadius: Border.br_5xs,
  },
  categoryLayout: {
    borderWidth: 1,
    borderStyle: "solid",
    width: 327,
  },
  groupItemLayout: {
    width: 248,
    height: 24,
  },
  tagTypo: {
    fontSize: FontSize.normal1_size,
    marginTop: -9,
    color: Color.black,
    textAlign: "left",
    fontFamily: FontFamily.normal,
    letterSpacing: 0,
    top: "50%",
    position: "absolute",
  },
  vectorIconLayout: {
    height: 12,
    maxWidth: "100%",
    top: "50%",
    position: "absolute",
    overflow: "hidden",
  },
  groupLayout: {
    width: 106,
    height: 24,
  },
  groupChild2Layout: {
    width: 186,
    height: 24,
  },
  editFlexBox: {
    width: 343,
    flexDirection: "row",
    alignItems: "center",
  },
  addNewItem: {
    marginLeft: -61.5,
    width: 123,
    height: 24,
    color: Color.colorBlack,
    left: "50%",
    position: "absolute",
    top: 0,
  },
  icon: {
    height: "100%",
    width: "100%",
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
  groupChild: {
    marginLeft: -175.5,
    top: 36,
    height: 1,
    width: 351,
  },
  addNewItemParent: {
    height: 36,
    width: 351,
  },
  nameChild: {
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 6,
    elevation: 6,
    shadowOpacity: 1,
    backgroundColor: Color.fontWhite,
    borderRadius: Border.br_5xs,
    height: 48,
    width: 327,
    top: 0,
  },
  anyName: {
    top: 18,
    fontFamily: FontFamily.normal,
    fontSize: FontSize.normal_size,
    textAlign: "left",
    left: 16,
    position: "absolute",
    color: Color.colorBlack,
  },
  itemName: {
    left: 24,
    fontSize: FontSize.normal2_size,
    fontWeight: "600",
    fontFamily: FontFamily.openSansSemiBold,
    color: Color.colorBlack,
    top: 0,
    position: "absolute",
  },
  name: {
    height: 48,
    width: 327,
  },
  itemNicknamemoreChild: {
    backgroundColor: Color.fontWhite,
    borderRadius: Border.br_5xs,
    height: 48,
    width: 327,
    top: 0,
  },
  itemsNickname: {
    marginTop: -13,
    left: 16,
    position: "absolute",
    top: "50%",
  },
  itemNicknamemore: {
    marginTop: 8,
    height: 48,
    width: 327,
  },
  itemPriceRangeAddChild: {
    width: 335,
    backgroundColor: Color.fontWhite,
    height: 48,
  },
  itemPriceRangeAdd: {
    opacity: 0.9,
    marginTop: 8,
    borderRadius: Border.br_5xs,
    height: 48,
    width: 327,
    overflow: "hidden",
  },
  availableQuantity: {
    fontFamily: FontFamily.normal,
    fontSize: FontSize.normal_size,
    textAlign: "left",
    color: Color.colorBlack,
  },
  text: {
    marginTop: -11,
    color: Color.colorDarkslategray,
    fontFamily: FontFamily.normal,
    fontSize: FontSize.normal_size,
    textAlign: "left",
    left: 0,
    position: "absolute",
    top: "50%",
  },
  wrapper: {
    width: 40,
    height: 22,
  },
  groupWrapper: {
    alignItems: "flex-end",
    paddingVertical: Padding.p_8xs,
    justifyContent: "center",
  },
  availableQuantityParent: {
    paddingHorizontal: Padding.p_5xs,
    paddingTop: Padding.p_5xs,
    paddingBottom: Padding.p_base,
    justifyContent: "space-between",
    flexDirection: "row",
    marginTop: 8,
    width: 327,
    alignItems: "center",
  },
  sortIcon: {
    width: 13,
    height: 24,
  },
  category: {
    borderColor: Color.theme12,
    paddingVertical: Padding.p_2xs,
    paddingHorizontal: Padding.p_base,
    backgroundColor: Color.fontWhite,
    borderRadius: Border.br_5xs,
    justifyContent: "space-between",
    flexDirection: "row",
    marginTop: 8,
    alignItems: "center",
  },
  nameParent: {
    marginTop: 16,
    width: 327,
  },
  groupItem: {
    backgroundColor: Color.theme12,
    borderRadius: Border.br_8xs,
    top: 0,
    left: 0,
    position: "absolute",
  },
  tagSample: {
    left: 26,
    width: 197,
  },
  vectorIcon: {
    marginTop: -6,
    width: "4.6%",
    right: "5.73%",
    left: "89.68%",
  },
  groupInner: {
    backgroundColor: Color.theme12,
    borderRadius: Border.br_8xs,
    top: 0,
    left: 0,
    position: "absolute",
  },
  tagSample1: {
    left: 11,
  },
  rectangleGroup: {
    marginLeft: 8,
  },
  groupChild2: {
    backgroundColor: Color.theme12,
    borderRadius: Border.br_8xs,
    top: 0,
    left: 0,
    position: "absolute",
  },
  tagSample4: {
    left: 19,
    width: 147,
  },
  vectorIcon1: {
    marginTop: 58,
    width: "6.13%",
    right: "-52.96%",
    left: "146.83%",
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
    zIndex: 1,
    fontFamily: FontFamily.normal,
    fontSize: FontSize.normal_size,
    textAlign: "left",
    left: 16,
    position: "absolute",
    color: Color.colorBlack,
  },
  tagChild: {
    borderColor: Color.black1,
    height: 44,
    zIndex: 2,
    borderRadius: Border.br_8xs,
    top: 0,
    left: 0,
    position: "absolute",
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
  tag: {
    backgroundColor: Color.fontWhite,
    borderRadius: Border.br_5xs,
    marginTop: 16,
    alignItems: "center",
  },
  groupParent: {
    height: 647,
    alignItems: "center",
  },
  editdeleteCategory: {
    textAlign: "center",
    fontFamily: FontFamily.bold,
    fontWeight: "700",
    letterSpacing: 0,
    fontSize: FontSize.bold1_size,
    color: Color.colorBlack,
  },
  edit: {
    paddingHorizontal: Padding.p_84xl,
    paddingVertical: Padding.p_5xs,
    backgroundColor: Color.theme12,
    justifyContent: "space-between",
    borderRadius: Border.br_5xs,
  },
  addItem: {
    color: Color.fontWhite,
    width: 80,
    height: 29,
  },
  button: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorSaddlebrown_100,
    paddingHorizontal: 127,
    paddingVertical: Padding.p_smi,
    marginTop: 8,
  },
  lower: {
    marginTop: 24,
    alignItems: "center",
  },
  frameParent: {
    alignItems: "center",
  },
  all: {
    marginTop: -316.6,
    backgroundColor: Color.theme13,
    paddingHorizontal: 0,
    paddingVertical: Padding.p_base,
    justifyContent: "center",
    alignItems: "center",
    top: "50%",
    borderRadius: Border.br_base,
  },
  bdr: {
    top: 73,
    left: 12,
    height: 634,
    width: 351,
    borderRadius: Border.br_base,
    position: "absolute",
  },
  sellerAddNewItemitemVarie: {
    borderRadius: Border.br_6xl,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default SellerAddNewItemitemVarie;
