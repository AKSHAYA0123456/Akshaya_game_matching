import * as React from "react";
import { StyleSheet, View } from "react-native";

const RectangleVector = () => {
  return <View style={styles.rectangleView} />;
};

const styles = StyleSheet.create({
  rectangleView: {
    backgroundColor: "#d9d9d9",
    width: 792,
    height: 241,
    display: "none",
  },
});

export default RectangleVector;
