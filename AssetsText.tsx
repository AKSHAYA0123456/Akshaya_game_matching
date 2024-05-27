import * as React from "react";
import { Text, StyleSheet } from "react-native";
import { FontFamily } from "../GlobalStyles";

const AssetsText = () => {
  return <Text style={styles.assets}>Assets</Text>;
};

const styles = StyleSheet.create({
  assets: {
    fontSize: 200,
    fontFamily: FontFamily.interRegular,
    color: "#000",
    textAlign: "left",
    width: 858,
    height: 241,
    display: "none",
  },
});

export default AssetsText;
