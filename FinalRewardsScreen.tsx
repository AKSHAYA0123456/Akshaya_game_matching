import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Padding, Color } from "../GlobalStyles";

const FinalRewardsScreen = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.finalRewardsScreen}>
      <Image
        style={[styles.image5Icon, styles.image5IconLayout]}
        contentFit="cover"
        source={require("../assets/image-5.png")}
      />
      <View style={styles.ellipseParent}>
        <Image
          style={styles.frameLayout}
          contentFit="cover"
          source={require("../assets/ellipse-316.png")}
        />
        <Image
          style={[styles.frameItem, styles.frameLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-316.png")}
        />
        <Image
          style={[styles.frameItem, styles.frameLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-316.png")}
        />
      </View>
      <View style={[styles.card, styles.cardLayout]}>
        <LinearGradient
          style={[styles.background, styles.cardLayout]}
          locations={[0, 0.46, 1]}
          colors={[
            "#fba8c1",
            "rgba(251, 168, 193, 0.54)",
            "rgba(251, 168, 193, 0.97)",
          ]}
        />
        <Image
          style={styles.cardLayout}
          contentFit="cover"
          source={require("../assets/frame3.png")}
        />
        <View style={[styles.heart, styles.heartPosition]}>
          <Image
            style={styles.heartIcon}
            contentFit="cover"
            source={require("../assets/heart.png")}
          />
        </View>
      </View>
      <View style={[styles.finalRewardsScreenChild, styles.image5IconLayout]} />
      <Pressable
        style={styles.wrapper}
        onPress={() => navigation.navigate("ActivityScreen5")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/group-156.png")}
        />
      </Pressable>
      <Image
        style={styles.finalRewardsScreenItem}
        contentFit="cover"
        source={require("../assets/group-1486.png")}
      />
      <Image
        style={[styles.finalRewardsScreenInner, styles.groupChildLayout]}
        contentFit="cover"
        source={require("../assets/group-1565.png")}
      />
      <Image
        style={[styles.groupIcon, styles.groupChildLayout]}
        contentFit="cover"
        source={require("../assets/group-1565.png")}
      />
      <Image
        style={[styles.finalRewardsScreenChild1, styles.groupChildLayout]}
        contentFit="cover"
        source={require("../assets/group-1566.png")}
      />
      <Image
        style={[styles.finalRewardsScreenChild2, styles.groupChildLayout]}
        contentFit="cover"
        source={require("../assets/group-1567.png")}
      />
      <Image
        style={[styles.finalRewardsScreenChild3, styles.heartPosition]}
        contentFit="cover"
        source={require("../assets/group-146.png")}
      />
      <View style={[styles.groupParent, styles.groupLayout]}>
        <View style={[styles.groupContainer, styles.groupLayout]}>
          <View style={[styles.groupContainer, styles.groupLayout]}>
            <View style={[styles.groupContainer, styles.groupLayout]}>
              <Image
                style={[styles.groupChild, styles.groupChildPosition]}
                contentFit="cover"
                source={require("../assets/vector-12.png")}
              />
              <View style={[styles.earsParent, styles.earsLayout1]}>
                <View style={[styles.ears, styles.earsLayout]}>
                  <Image
                    style={[styles.leftIcon, styles.iconPosition]}
                    contentFit="cover"
                    source={require("../assets/left7.png")}
                  />
                  <Image
                    style={[styles.rightIcon, styles.earsLayout]}
                    contentFit="cover"
                    source={require("../assets/right8.png")}
                  />
                </View>
                <Image
                  style={styles.unionIcon}
                  contentFit="cover"
                  source={require("../assets/union3.png")}
                />
                <Image
                  style={styles.faceIcon}
                  contentFit="cover"
                  source={require("../assets/face2.png")}
                />
                <Image
                  style={styles.intersectIcon}
                  contentFit="cover"
                  source={require("../assets/intersect2.png")}
                />
                <Image
                  style={[styles.shadeIcon, styles.shadeIconLayout]}
                  contentFit="cover"
                  source={require("../assets/shade1.png")}
                />
                <Image
                  style={styles.unionIcon1}
                  contentFit="cover"
                  source={require("../assets/union4.png")}
                />
                <Image
                  style={[styles.eyesIcon, styles.eyesIconLayout]}
                  contentFit="cover"
                  source={require("../assets/eyes.png")}
                />
                <Image
                  style={[styles.eyesIcon1, styles.eyesIconLayout]}
                  contentFit="cover"
                  source={require("../assets/eyes1.png")}
                />
                <Image
                  style={[styles.noseIcon, styles.eyesIconLayout]}
                  contentFit="cover"
                  source={require("../assets/nose4.png")}
                />
                <Image
                  style={[styles.blushesIcon, styles.groupChildPosition]}
                  contentFit="cover"
                  source={require("../assets/blushes2.png")}
                />
              </View>
              <Image
                style={styles.groupItem}
                contentFit="cover"
                source={require("../assets/ellipse-2702.png")}
              />
              <Image
                style={styles.groupInner}
                contentFit="cover"
                source={require("../assets/ellipse-2722.png")}
              />
            </View>
            <Image
              style={styles.ellipseIcon}
              contentFit="cover"
              source={require("../assets/ellipse-3131.png")}
            />
          </View>
          <Image
            style={[styles.groupChild1, styles.shadeIconLayout]}
            contentFit="cover"
            source={require("../assets/group-663.png")}
          />
        </View>
        <Image
          style={[styles.groupChild2, styles.groupChildLayout]}
          contentFit="cover"
          source={require("../assets/group-160.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image5IconLayout: {
    width: 1512,
    position: "absolute",
  },
  frameLayout: {
    height: 62,
    width: 430,
  },
  cardLayout: {
    height: 221,
    width: 173,
  },
  heartPosition: {
    top: 79,
    position: "absolute",
  },
  groupChildLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupLayout: {
    height: 283,
    width: 290,
    position: "absolute",
  },
  groupChildPosition: {
    left: 65,
    position: "absolute",
  },
  earsLayout1: {
    width: 288,
    left: 0,
  },
  earsLayout: {
    height: 77,
    position: "absolute",
  },
  iconPosition: {
    left: 0,
    top: 0,
  },
  shadeIconLayout: {
    height: 70,
    position: "absolute",
  },
  eyesIconLayout: {
    height: 23,
    width: 29,
    position: "absolute",
  },
  image5Icon: {
    height: 1130,
    left: 0,
    top: 0,
  },
  frameItem: {
    marginLeft: 49,
  },
  ellipseParent: {
    top: 737,
    left: 82,
    flexDirection: "row",
    position: "absolute",
  },
  background: {
    backgroundColor: "transparent",
    left: 0,
    top: 0,
    position: "absolute",
  },
  heartIcon: {
    height: 56,
    width: 64,
  },
  heart: {
    left: 55,
    shadowColor: "#fb83a7",
    shadowRadius: 17.2,
    elevation: 17.2,
    height: 64,
    alignItems: "center",
    justifyContent: "center",
    padding: Padding.p_3xs,
    width: 64,
    shadowOpacity: 1,
    shadowOffset: {
      width: 3,
      height: 4,
    },
  },
  card: {
    top: 513,
    left: 539,
    shadowColor: "rgba(235, 235, 235, 0.31)",
    shadowRadius: 9.4,
    elevation: 9.4,
    shadowOpacity: 1,
    shadowOffset: {
      width: 3,
      height: 4,
    },
    position: "absolute",
    overflow: "hidden",
  },
  finalRewardsScreenChild: {
    top: 3,
    left: -1,
    backgroundColor: Color.colorGray_200,
    height: 977,
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
  finalRewardsScreenItem: {
    top: 41,
    left: 306,
    width: 755,
    height: 41,
    position: "absolute",
  },
  finalRewardsScreenInner: {
    top: "-4.48%",
    right: "25.42%",
    bottom: "81.11%",
    left: "59.59%",
    width: "14.99%",
    height: "23.37%",
    maxWidth: "100%",
  },
  groupIcon: {
    top: "23.83%",
    right: "18.88%",
    bottom: "52.8%",
    left: "66.14%",
    width: "14.99%",
    height: "23.37%",
    maxWidth: "100%",
  },
  finalRewardsScreenChild1: {
    height: "21.56%",
    width: "14.25%",
    top: "42.66%",
    right: "9.85%",
    bottom: "35.78%",
    left: "75.9%",
  },
  finalRewardsScreenChild2: {
    height: "158.26%",
    width: "103.04%",
    top: "-24.2%",
    right: "-2.7%",
    bottom: "-34.06%",
    left: "-0.34%",
  },
  finalRewardsScreenChild3: {
    left: 471,
    width: 557,
    height: 746,
  },
  groupChild: {
    top: 128,
    width: 225,
    height: 155,
  },
  leftIcon: {
    width: 58,
    height: 58,
    position: "absolute",
  },
  rightIcon: {
    left: 187,
    width: 102,
    top: 0,
  },
  ears: {
    top: 69,
    width: 288,
    left: 0,
  },
  unionIcon: {
    width: 38,
    height: 39,
  },
  faceIcon: {
    top: 16,
    left: 29,
    width: 187,
    height: 169,
    position: "absolute",
  },
  intersectIcon: {
    width: 157,
    height: 67,
  },
  shadeIcon: {
    top: 22,
    left: 44,
    width: 153,
  },
  unionIcon1: {
    width: 149,
    height: 89,
  },
  eyesIcon: {
    top: 92,
    left: 149,
  },
  eyesIcon1: {
    top: 93,
    left: 74,
  },
  noseIcon: {
    top: 121,
    left: 111,
  },
  blushesIcon: {
    top: 131,
    width: 122,
    height: 20,
  },
  earsParent: {
    height: 185,
    top: 0,
    position: "absolute",
  },
  groupItem: {
    top: 204,
    left: 69,
    width: 22,
    height: 21,
    position: "absolute",
  },
  groupInner: {
    top: 196,
    left: 104,
    width: 42,
    height: 53,
    position: "absolute",
  },
  groupContainer: {
    left: 0,
    top: 0,
  },
  ellipseIcon: {
    top: 137,
    left: 109,
    width: 33,
    height: 26,
    position: "absolute",
  },
  groupChild1: {
    top: 159,
    left: 169,
    width: 43,
  },
  groupChild2: {
    height: "29.54%",
    width: "28.47%",
    top: "42.47%",
    right: "17.43%",
    bottom: "27.99%",
    left: "54.11%",
  },
  groupParent: {
    top: 416,
    left: 615,
  },
  finalRewardsScreen: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 982,
    overflow: "hidden",
    width: "100%",
  },
});

export default FinalRewardsScreen;
