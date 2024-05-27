import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";

const Group2 = () => {
  return (
    <View style={styles.groupParent}>
      <Image
        style={[styles.groupIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/group.png")}
      />
      <Image
        style={[styles.vectorIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/vector.png")}
      />
      <Image
        style={styles.groupChild}
        contentFit="cover"
        source={require("../assets/ellipse-3132.png")}
      />
      <Image
        style={styles.groupItem}
        contentFit="cover"
        source={require("../assets/ellipse-314.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  groupIcon: {
    height: "100%",
    width: "100%",
    top: "0%",
    right: "-48.78%",
    bottom: "0%",
    left: "48.78%",
  },
  vectorIcon: {
    height: "11.3%",
    width: "11.87%",
    top: "26.57%",
    right: "-2.19%",
    bottom: "62.13%",
    left: "90.32%",
  },
  groupChild: {
    top: 251,
    left: 50,
    width: 62,
    height: 56,
    position: "absolute",
  },
  groupItem: {
    top: 171,
    left: 322,
    width: 50,
    height: 34,
    position: "absolute",
  },
  groupParent: {
    width: 398,
    height: 410,
    display: "none",
  },
});

export default Group2;
