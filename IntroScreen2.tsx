import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const IntroScreen2 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.introScreen}>
      <Image
        style={[styles.image5Icon, styles.leftIconPosition]}
        contentFit="cover"
        source={require("../assets/image-5.png")}
      />
      <Image
        style={styles.introScreenChild}
        contentFit="cover"
        source={require("../assets/vector-123.png")}
      />
      <Image
        style={styles.introScreenItem}
        contentFit="cover"
        source={require("../assets/group-1492.png")}
      />
      <Text style={styles.heading1}>{`Can you help me get some ? `}</Text>
      <Image
        style={styles.introScreenInner}
        contentFit="cover"
        source={require("../assets/ellipse-3061.png")}
      />
      <View style={[styles.groupParent, styles.parentLayout]}>
        <View style={[styles.vectorParent, styles.parentLayout]}>
          <Image
            style={[styles.groupChild, styles.groupChildPosition]}
            contentFit="cover"
            source={require("../assets/vector-11.png")}
          />
          <View style={[styles.earsParent, styles.earsLayout1]}>
            <View style={[styles.ears, styles.earsLayout]}>
              <Image
                style={[styles.leftIcon, styles.leftIconPosition]}
                contentFit="cover"
                source={require("../assets/left6.png")}
              />
              <Image
                style={[styles.rightIcon, styles.earsLayout]}
                contentFit="cover"
                source={require("../assets/right7.png")}
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
              source={require("../assets/nose3.png")}
            />
            <Image
              style={[styles.blushesIcon, styles.groupChildPosition]}
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
            style={styles.groupInner}
            contentFit="cover"
            source={require("../assets/ellipse-271.png")}
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
      <Pressable
        style={styles.wrapper}
        onPress={() => navigation.navigate("IntroScreen1")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/group-1561.png")}
        />
      </Pressable>
      <Image
        style={styles.groupIcon}
        contentFit="cover"
        source={require("../assets/group-148.png")}
      />
      <Image
        style={styles.introScreenChild1}
        contentFit="cover"
        source={require("../assets/group-154.png")}
      />
      <Pressable
        style={styles.polygonParent}
        onPress={() => navigation.navigate("InstructionScreen")}
      >
        <Image
          style={styles.polygonIcon}
          contentFit="cover"
          source={require("../assets/polygon-11.png")}
        />
        <View style={[styles.rectangleParent, styles.rectangleLayout]}>
          <View style={[styles.rectangleView, styles.groupChild2ShadowBox]} />
          <View style={[styles.groupChild2, styles.groupChild2ShadowBox]} />
          <Image
            style={[styles.rectangleIcon, styles.groupChild3Position]}
            contentFit="cover"
            source={require("../assets/rectangle-15.png")}
          />
          <Text style={styles.yes}>{`YES `}</Text>
          <Image
            style={[styles.groupChild3, styles.groupChild3Position]}
            contentFit="cover"
            source={require("../assets/ellipse-3.png")}
          />
        </View>
      </Pressable>
      <Image
        style={styles.introScreenChild2}
        contentFit="cover"
        source={require("../assets/ellipse-312.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  leftIconPosition: {
    left: 0,
    top: 0,
  },
  parentLayout: {
    height: 631,
    width: 646,
    position: "absolute",
  },
  groupChildPosition: {
    left: 145,
    position: "absolute",
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
  rectangleLayout: {
    width: 329,
    height: 121,
    left: 0,
    top: 0,
  },
  groupChild2ShadowBox: {
    shadowOpacity: 1,
    elevation: 0,
    shadowRadius: 0,
    shadowOffset: {
      width: 0,
      height: 8.033909797668457,
    },
    borderRadius: 40,
    position: "absolute",
  },
  groupChild3Position: {
    left: 27,
    position: "absolute",
  },
  image5Icon: {
    width: 1512,
    height: 1130,
    position: "absolute",
  },
  introScreenChild: {
    top: 624,
    left: 286,
    width: 789,
    height: 291,
    position: "absolute",
  },
  introScreenItem: {
    top: 178,
    left: 845,
    width: 516,
    height: 220,
    position: "absolute",
  },
  heading1: {
    top: 207,
    left: 888,
    fontSize: FontSize.size_25xl_9,
    fontWeight: "800",
    fontFamily: FontFamily.nunitoExtraBold,
    color: Color.colorCadetblue,
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: 477,
    height: 102,
    position: "absolute",
  },
  introScreenInner: {
    top: 775,
    left: 168,
    width: 41,
    height: 34,
    position: "absolute",
  },
  groupChild: {
    top: 285,
    width: 501,
    height: 346,
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
    left: 247,
    height: 52,
    top: 271,
  },
  blushesIcon: {
    top: 293,
    width: 272,
    height: 44,
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
    height: 44,
    position: "absolute",
  },
  ellipseIcon: {
    top: 436,
    left: 233,
    width: 94,
    height: 118,
    position: "absolute",
  },
  vectorParent: {
    left: 0,
    top: 0,
  },
  groupChild1: {
    top: 306,
    left: 243,
    width: 73,
    height: 58,
    position: "absolute",
  },
  groupParent: {
    left: 452,
    top: 271,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    left: 43,
    top: 45,
    width: 194,
    height: 194,
    position: "absolute",
  },
  groupIcon: {
    top: 41,
    left: 306,
    width: 755,
    height: 41,
    position: "absolute",
  },
  introScreenChild1: {
    height: "17.91%",
    width: "11.46%",
    top: "-3.46%",
    right: "26.3%",
    bottom: "85.55%",
    left: "62.24%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  polygonIcon: {
    top: 16,
    left: 285,
    borderRadius: 10,
    width: 88,
    height: 88,
    position: "absolute",
  },
  rectangleView: {
    shadowColor: "#ffd540",
    backgroundColor: Color.colorKhaki,
    borderRadius: 40,
    width: 329,
    height: 121,
    left: 0,
    top: 0,
  },
  groupChild2: {
    top: 6,
    left: 10,
    shadowColor: "#edb900",
    backgroundColor: Color.colorGold_100,
    width: 309,
    height: 100,
    borderRadius: 40,
  },
  rectangleIcon: {
    width: 269,
    top: 18,
    borderRadius: 40,
    height: 44,
  },
  yes: {
    left: 97,
    fontSize: FontSize.size_45xl_3,
    letterSpacing: 3.8,
    fontWeight: "900",
    fontFamily: FontFamily.nunitoBlack,
    color: Color.colorWhite,
    textAlign: "center",
    top: 18,
    position: "absolute",
  },
  groupChild3: {
    top: 8,
    width: 38,
    height: 37,
  },
  rectangleParent: {
    position: "absolute",
  },
  polygonParent: {
    top: 794,
    left: 1078,
    width: 373,
    height: 121,
    position: "absolute",
  },
  introScreenChild2: {
    top: 877,
    left: 1363,
    width: 19,
    height: 18,
    position: "absolute",
  },
  introScreen: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 982,
    overflow: "hidden",
    width: "100%",
  },
});

export default IntroScreen2;
