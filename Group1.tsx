import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";

const Group1 = () => {
  return (
    <View style={styles.vectorParent}>
      <Image
        style={styles.groupChild}
        contentFit="cover"
        source={require("../assets/vector-11.png")}
      />
      <View style={[styles.earsParent, styles.earsLayout1]}>
        <View style={[styles.ears, styles.earsLayout]}>
          <Image
            style={[styles.leftIcon, styles.leftIconPosition]}
            contentFit="cover"
            source={require("../assets/left4.png")}
          />
          <Image
            style={[styles.rightIcon, styles.earsLayout]}
            contentFit="cover"
            source={require("../assets/right6.png")}
          />
        </View>
        <Image
          style={styles.unionIcon}
          contentFit="cover"
          source={require("../assets/union2.png")}
        />
        <Image
          style={styles.faceIcon}
          contentFit="cover"
          source={require("../assets/face1.png")}
        />
        <Image
          style={styles.intersectIcon}
          contentFit="cover"
          source={require("../assets/intersect.png")}
        />
        <Image
          style={styles.shadeIcon}
          contentFit="cover"
          source={require("../assets/shade.png")}
        />
        <Image
          style={styles.unionIcon1}
          contentFit="cover"
          source={require("../assets/union1.png")}
        />
        <View style={styles.eyes}>
          <Image
            style={[styles.leftIcon1, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/left5.png")}
          />
          <Image
            style={[styles.rightIcon1, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/right5.png")}
          />
        </View>
        <Image
          style={[styles.noseIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/nose2.png")}
        />
        <Image
          style={[styles.blushesIcon, styles.groupInnerLayout]}
          contentFit="cover"
          source={require("../assets/blushes1.png")}
        />
      </View>
      <Image
        style={styles.groupItem}
        contentFit="cover"
        source={require("../assets/ellipse-2701.png")}
      />
      <Image
        style={[styles.groupInner, styles.groupInnerLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-2711.png")}
      />
      <Image
        style={styles.ellipseIcon}
        contentFit="cover"
        source={require("../assets/ellipse-272.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  earsLayout1: {
    width: 643,
    left: 0,
  },
  earsLayout: {
    height: 171,
    position: "absolute",
  },
  leftIconPosition: {
    left: 0,
    top: 0,
  },
  iconLayout: {
    width: 65,
    position: "absolute",
  },
  groupInnerLayout: {
    height: 44,
    position: "absolute",
  },
  groupChild: {
    top: 285,
    width: 501,
    height: 346,
    left: 145,
    position: "absolute",
  },
  leftIcon: {
    width: 129,
    height: 129,
    position: "absolute",
  },
  rightIcon: {
    left: 416,
    width: 227,
    top: 0,
  },
  ears: {
    top: 154,
    width: 643,
    left: 0,
  },
  unionIcon: {
    width: 85,
    height: 86,
  },
  faceIcon: {
    top: 36,
    left: 65,
    width: 416,
    height: 376,
    position: "absolute",
  },
  intersectIcon: {
    width: 349,
    height: 150,
  },
  shadeIcon: {
    top: 49,
    left: 98,
    width: 341,
    height: 156,
    position: "absolute",
  },
  unionIcon1: {
    width: 331,
    height: 198,
  },
  leftIcon1: {
    height: 81,
    left: 0,
    top: 0,
  },
  rightIcon1: {
    left: 174,
    height: 81,
    top: 0,
  },
  eyes: {
    top: 206,
    left: 158,
    width: 238,
    height: 81,
    position: "absolute",
  },
  noseIcon: {
    top: 271,
    left: 247,
    height: 52,
  },
  blushesIcon: {
    top: 293,
    width: 272,
    left: 145,
  },
  earsParent: {
    height: 412,
    top: 0,
    position: "absolute",
  },
  groupItem: {
    top: 455,
    left: 168,
    width: 48,
    height: 46,
    position: "absolute",
  },
  groupInner: {
    top: 485,
    left: 364,
    width: 49,
  },
  ellipseIcon: {
    top: 436,
    left: 237,
    width: 94,
    height: 118,
    position: "absolute",
  },
  vectorParent: {
    flex: 1,
    width: "100%",
    height: 631,
    display: "none",
  },
});

export default Group1;
