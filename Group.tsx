import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";

const Group = () => {
  return (
    <View style={styles.groupParent}>
      <View style={[styles.vectorParent, styles.leftIconPosition]}>
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
              source={require("../assets/left3.png")}
            />
            <Image
              style={[styles.rightIcon, styles.earsLayout]}
              contentFit="cover"
              source={require("../assets/right4.png")}
            />
          </View>
          <Image
            style={styles.unionIcon}
            contentFit="cover"
            source={require("../assets/union.png")}
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
              source={require("../assets/left1.png")}
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
      <Image
        style={styles.groupChild1}
        contentFit="cover"
        source={require("../assets/ellipse-313.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  leftIconPosition: {
    left: 0,
    top: 0,
  },
  earsLayout1: {
    width: 643,
    left: 0,
  },
  earsLayout: {
    height: 171,
    position: "absolute",
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
    left: 153,
    width: 48,
    height: 46,
    position: "absolute",
  },
  groupInner: {
    top: 459,
    left: 364,
    width: 49,
  },
  ellipseIcon: {
    top: 436,
    left: 233,
    width: 94,
    height: 118,
    position: "absolute",
  },
  vectorParent: {
    width: 646,
    position: "absolute",
    height: 631,
  },
  groupChild1: {
    top: 306,
    left: 243,
    width: 73,
    height: 58,
    position: "absolute",
  },
  groupParent: {
    flex: 1,
    width: "100%",
    display: "none",
    height: 631,
  },
});

export default Group;
