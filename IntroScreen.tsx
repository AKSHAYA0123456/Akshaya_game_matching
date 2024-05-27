import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Padding, FontFamily, Color, FontSize } from "../GlobalStyles";

const IntroScreen = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.introScreen}>
      <Image
        style={[styles.introScreenChild, styles.shadeIconLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-315.png")}
      />
      <Image
        style={[styles.image5Icon, styles.leftIconPosition]}
        contentFit="cover"
        source={require("../assets/image-5.png")}
      />
      <Image
        style={styles.introScreenItem}
        contentFit="cover"
        source={require("../assets/vector-123.png")}
      />
      <Image
        style={styles.introScreenInner}
        contentFit="cover"
        source={require("../assets/group-149.png")}
      />
      <Text style={styles.heading1}>Welcome Kiddo !</Text>
      <View style={[styles.cog, styles.cogShadowBox]}>
        <Image
          style={styles.cogIcon}
          contentFit="cover"
          source={require("../assets/cog.png")}
        />
      </View>
      <View style={[styles.star, styles.cogShadowBox]}>
        <Image
          style={styles.starIcon}
          contentFit="cover"
          source={require("../assets/star.png")}
        />
      </View>
      <Image
        style={[styles.ellipseIcon, styles.ellipseIconLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-306.png")}
      />
      <Image
        style={[styles.ellipseIcon, styles.ellipseIconLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-308.png")}
      />
      <Image
        style={[styles.introScreenChild2, styles.ellipseIconLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-306.png")}
      />
      <Image
        style={[styles.introScreenChild3, styles.introChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-307.png")}
      />
      <Image
        style={[styles.introScreenChild4, styles.introChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-307.png")}
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
                source={require("../assets/left2.png")}
              />
              <Image
                style={[styles.rightIcon, styles.earsLayout]}
                contentFit="cover"
                source={require("../assets/right2.png")}
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
              source={require("../assets/face.png")}
            />
            <Image
              style={styles.intersectIcon}
              contentFit="cover"
              source={require("../assets/intersect1.png")}
            />
            <Image
              style={[styles.shadeIcon, styles.shadeIconLayout]}
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
                source={require("../assets/right1.png")}
              />
            </View>
            <Image
              style={[styles.noseIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/nose1.png")}
            />
            <Image
              style={[styles.blushesIcon, styles.groupChildPosition]}
              contentFit="cover"
              source={require("../assets/blushes.png")}
            />
          </View>
          <Image
            style={styles.groupItem}
            contentFit="cover"
            source={require("../assets/ellipse-270.png")}
          />
          <Image
            style={styles.groupInner}
            contentFit="cover"
            source={require("../assets/ellipse-271.png")}
          />
          <Image
            style={styles.groupChild1}
            contentFit="cover"
            source={require("../assets/ellipse-272.png")}
          />
        </View>
        <Image
          style={styles.groupChild2}
          contentFit="cover"
          source={require("../assets/ellipse-313.png")}
        />
      </View>
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
                source={require("../assets/left.png")}
              />
              <Image
                style={[styles.rightIcon, styles.earsLayout]}
                contentFit="cover"
                source={require("../assets/right3.png")}
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
              source={require("../assets/face.png")}
            />
            <Image
              style={styles.intersectIcon}
              contentFit="cover"
              source={require("../assets/intersect1.png")}
            />
            <Image
              style={[styles.shadeIcon, styles.shadeIconLayout]}
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
                source={require("../assets/right1.png")}
              />
            </View>
            <Image
              style={[styles.noseIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/nose1.png")}
            />
            <Image
              style={[styles.blushesIcon, styles.groupChildPosition]}
              contentFit="cover"
              source={require("../assets/blushes.png")}
            />
          </View>
          <Image
            style={styles.groupItem}
            contentFit="cover"
            source={require("../assets/ellipse-270.png")}
          />
          <Image
            style={styles.groupInner}
            contentFit="cover"
            source={require("../assets/ellipse-271.png")}
          />
          <Image
            style={styles.groupChild1}
            contentFit="cover"
            source={require("../assets/ellipse-2721.png")}
          />
        </View>
        <Image
          style={styles.groupChild2}
          contentFit="cover"
          source={require("../assets/ellipse-313.png")}
        />
      </View>
      <Pressable
        style={styles.polygonParent}
        onPress={() => navigation.navigate("IntroScreen1")}
      >
        <Image
          style={styles.polygonIcon}
          contentFit="cover"
          source={require("../assets/polygon-1.png")}
        />
        <View style={[styles.rectangleParent, styles.rectangleLayout]}>
          <View style={[styles.rectangleView, styles.groupChild7ShadowBox]} />
          <View style={[styles.groupChild7, styles.groupChild7ShadowBox]} />
          <Image
            style={[styles.rectangleIcon, styles.groupChild8Position]}
            contentFit="cover"
            source={require("../assets/rectangle-15.png")}
          />
          <Text style={styles.start}>START</Text>
          <Image
            style={[styles.groupChild8, styles.groupChild8Position]}
            contentFit="cover"
            source={require("../assets/ellipse-3.png")}
          />
        </View>
      </Pressable>
      <Image
        style={styles.introScreenChild5}
        contentFit="cover"
        source={require("../assets/ellipse-312.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  shadeIconLayout: {
    height: 156,
    position: "absolute",
  },
  leftIconPosition: {
    left: 0,
    top: 0,
  },
  cogShadowBox: {
    padding: Padding.p_3xs,
    justifyContent: "center",
    alignItems: "center",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    top: 816,
    height: 64,
    width: 64,
    position: "absolute",
  },
  ellipseIconLayout: {
    height: 34,
    width: 41,
    position: "absolute",
  },
  introChildLayout: {
    height: 13,
    top: 894,
    width: 19,
    position: "absolute",
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
  groupChild7ShadowBox: {
    elevation: 0,
    shadowRadius: 0,
    borderRadius: 40,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    position: "absolute",
  },
  groupChild8Position: {
    left: 27,
    position: "absolute",
  },
  introScreenChild: {
    left: 568,
    width: 327,
    top: 306,
  },
  image5Icon: {
    width: 1512,
    height: 1130,
    position: "absolute",
  },
  introScreenItem: {
    top: 624,
    left: 286,
    width: 789,
    height: 291,
    position: "absolute",
  },
  introScreenInner: {
    top: 140,
    left: 827,
    width: 516,
    height: 220,
    position: "absolute",
  },
  heading1: {
    top: 178,
    left: 872,
    fontSize: 56,
    fontWeight: "800",
    fontFamily: FontFamily.nunitoExtraBold,
    color: Color.colorCadetblue,
    textAlign: "left",
    position: "absolute",
  },
  cogIcon: {
    width: 61,
    height: 64,
  },
  cog: {
    left: 108,
    flexDirection: "row",
  },
  starIcon: {
    height: 62,
    width: 64,
  },
  star: {
    left: 330,
  },
  ellipseIcon: {
    top: 775,
    left: 168,
  },
  introScreenChild2: {
    top: 779,
    left: 386,
  },
  introScreenChild3: {
    left: 84,
  },
  introScreenChild4: {
    left: 304,
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
  groupChild1: {
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
  groupChild2: {
    left: 243,
    width: 73,
    height: 58,
    top: 306,
    position: "absolute",
  },
  groupParent: {
    top: 276,
    left: 515,
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
  groupChild7: {
    top: 6,
    left: 10,
    shadowColor: "#edb900",
    backgroundColor: "#fed33b",
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
  start: {
    left: 51,
    fontSize: FontSize.size_45xl_3,
    letterSpacing: 3.8,
    fontWeight: "900",
    fontFamily: FontFamily.nunitoBlack,
    color: Color.colorWhite,
    textAlign: "center",
    top: 18,
    position: "absolute",
  },
  groupChild8: {
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
  introScreenChild5: {
    top: 877,
    left: 1363,
    height: 18,
    width: 19,
    position: "absolute",
  },
  introScreen: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 982,
    overflow: "hidden",
  },
});

export default IntroScreen;
