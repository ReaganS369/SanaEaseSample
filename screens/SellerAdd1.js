import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize, Padding } from "../GlobalStyles";

const SellerAdd1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.sellerAdd}>
      <View style={styles.body}>
        <View style={[styles.choose, styles.chooseLayout]}>
          <Image
            style={styles.nativeBottomSheetIndicato}
            contentFit="cover"
            source={require("../assets/native--bottom-sheet-indicator.png")}
          />
          <Pressable
            style={styles.tab3}
            onPress={() => navigation.navigate("SellerAddNewItemitemVarie")}
          >
            <Image
              style={styles.seperatorIcon}
              contentFit="cover"
              source={require("../assets/seperator3.png")}
            />
            <Text style={[styles.document, styles.documentTypo]}>
              Add New Items
            </Text>
          </Pressable>
          <View style={styles.addSelection}>
            <View style={styles.rectangle} />
            <Text style={[styles.location, styles.documentTypo]}>
              Add New Category
            </Text>
          </View>
        </View>
        <Pressable
          style={[styles.cancelButton, styles.chooseLayout]}
          onPress={() => navigation.navigate("SellerDaskboardItemsUnhide1")}
        >
          <Text style={styles.cancel}>Cancel</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  chooseLayout: {
    backgroundColor: Color.theme13,
    borderRadius: Border.br_base,
    width: 359,
    overflow: "hidden",
  },
  documentTypo: {
    textAlign: "center",
    color: Color.black,
    fontFamily: FontFamily.bold,
    fontWeight: "700",
    top: "50%",
    letterSpacing: 0,
    fontSize: FontSize.bold1_size,
    left: "50%",
    position: "absolute",
  },
  nativeBottomSheetIndicato: {
    borderTopLeftRadius: Border.br_base,
    borderTopRightRadius: Border.br_base,
    height: 24,
    width: 359,
  },
  seperatorIcon: {
    bottom: 0,
    left: 0,
    height: 1,
    width: 359,
    position: "absolute",
  },
  document: {
    marginTop: -13,
    marginLeft: -66.5,
  },
  tab3: {
    height: 56,
    width: 359,
    overflow: "hidden",
  },
  rectangle: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    position: "absolute",
    width: "100%",
  },
  location: {
    marginTop: -12.5,
    marginLeft: -80.5,
  },
  addSelection: {
    height: 57,
    width: 359,
    overflow: "hidden",
  },
  choose: {
    width: 359,
  },
  cancel: {
    fontFamily: FontFamily.normal,
    color: Color.colorBlack,
    textAlign: "left",
    letterSpacing: 0,
    fontSize: FontSize.bold1_size,
  },
  cancelButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 149,
    paddingVertical: Padding.p_base,
    marginTop: 8,
    width: 359,
  },
  body: {
    marginLeft: -179.5,
    bottom: 90,
    left: "50%",
    position: "absolute",
  },
  sellerAdd: {
    borderRadius: Border.br_6xl,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default SellerAdd1;
