import * as React from "react";
import { StyleSheet, View } from "react-native";

const Ellipse = () => {
  return <View style={styles.ellipseView} />;
};

const styles = StyleSheet.create({
  ellipseView: {
    backgroundColor: "rgba(255, 255, 255, 0.64)",
    width: 17,
    height: 9,
    transform: [
      {
        rotate: "-38.5deg",
      },
    ],
  },
});

export default Ellipse;
