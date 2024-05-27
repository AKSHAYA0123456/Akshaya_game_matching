import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Color } from "../GlobalStyles";

const Vector = () => {
  return <View style={styles.vectorView} />;
};

const styles = StyleSheet.create({
  vectorView: {
    borderRadius: 11,
    borderStyle: "dashed",
    borderColor: Color.colorGray_100,
    borderWidth: 7,
    width: 243,
    height: 558,
    transform: [
      {
        rotate: "-90.5deg",
      },
    ],
  },
});

export default Vector;
