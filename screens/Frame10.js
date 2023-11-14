import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Padding, Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const Frame10 = () => {
  return (
    <View style={styles.frameParent}>
      <View>
        <View style={[styles.editWrapper, styles.wrapperFlexBox]}>
          <Text style={styles.edit}>Edit</Text>
        </View>
        <View style={[styles.deleteWrapper, styles.wrapperFlexBox]}>
          <Text style={styles.edit}>Delete</Text>
        </View>
        <View style={[styles.addVarientsWrapper, styles.wrapperFlexBox]}>
          <Text style={styles.edit}>Add Varients</Text>
        </View>
      </View>
      <View style={styles.selectWrapper}>
        <Text style={styles.edit}>Select</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapperFlexBox: {
    paddingVertical: Padding.p_4xs,
    paddingHorizontal: Padding.p_24xl,
    flexDirection: "row",
    width: 200,
    backgroundColor: Color.colorSaddlebrown_100,
    justifyContent: "center",
    alignItems: "center",
  },
  edit: {
    fontSize: FontSize.bold1_size,
    letterSpacing: 0,
    fontWeight: "700",
    fontFamily: FontFamily.bold,
    color: Color.fontWhite,
    textAlign: "center",
  },
  editWrapper: {
    borderTopLeftRadius: Border.br_base,
    borderTopRightRadius: Border.br_base,
    overflow: "hidden",
    borderBottomWidth: 1,
    borderColor: Color.transprent,
    borderStyle: "solid",
    paddingVertical: Padding.p_4xs,
    paddingHorizontal: Padding.p_24xl,
  },
  deleteWrapper: {
    overflow: "hidden",
    borderBottomWidth: 1,
    borderColor: Color.transprent,
    borderStyle: "solid",
    paddingVertical: Padding.p_4xs,
    paddingHorizontal: Padding.p_24xl,
  },
  addVarientsWrapper: {
    borderBottomRightRadius: Border.br_base,
    borderBottomLeftRadius: Border.br_base,
  },
  selectWrapper: {
    borderRadius: Border.br_base,
    paddingHorizontal: 34,
    paddingVertical: Padding.p_5xs,
    marginTop: 4,
    flexDirection: "row",
    width: 200,
    backgroundColor: Color.colorSaddlebrown_100,
    justifyContent: "center",
    alignItems: "center",
  },
  frameParent: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Frame10;
