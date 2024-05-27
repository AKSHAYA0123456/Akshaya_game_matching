import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Padding, FontFamily, Color } from "../GlobalStyles";

const ActivityScreen8 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <Pressable
      style={styles.activityScreen}
      onPress={() => navigation.navigate("ActivityScreen5")}
    >
      <Image
        style={[styles.image5Icon, styles.backgroundPosition]}
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
          source={require("../assets/frame.png")}
        />
        <View style={styles.heartShadowBox1}>
          <Image
            style={styles.heartIcon}
            contentFit="cover"
            source={require("../assets/heart.png")}
          />
        </View>
      </View>
      <View style={[styles.card1, styles.cardLayout]}>
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
          source={require("../assets/frame.png")}
        />
        <View style={styles.heartShadowBox1}>
          <Image
            style={styles.heartIcon}
            contentFit="cover"
            source={require("../assets/heart.png")}
          />
        </View>
      </View>
      <View style={[styles.card2, styles.cardPosition]}>
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
          source={require("../assets/frame.png")}
        />
        <View style={styles.heartShadowBox1}>
          <Image
            style={styles.heartIcon}
            contentFit="cover"
            source={require("../assets/heart.png")}
          />
        </View>
      </View>
      <Image
        style={[styles.cardIcon, styles.cardPosition]}
        contentFit="cover"
        source={require("../assets/card10.png")}
      />
      <View style={[styles.card3, styles.cardPosition]}>
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
          source={require("../assets/frame.png")}
        />
        <View style={styles.heartShadowBox1}>
          <Image
            style={styles.heartIcon}
            contentFit="cover"
            source={require("../assets/heart.png")}
          />
        </View>
      </View>
      <View style={[styles.card4, styles.card4Layout]}>
        <View style={[styles.background4, styles.card4Layout]} />
        <Image
          style={styles.card4Layout}
          contentFit="cover"
          source={require("../assets/frame4.png")}
        />
        <Image
          style={[styles.cardChild, styles.cardChildLayout]}
          contentFit="cover"
          source={require("../assets/group-666.png")}
        />
        <Text style={styles.o}>O</Text>
      </View>
      <View style={[styles.card5, styles.cardShadowBox1]}>
        <LinearGradient
          style={[styles.background, styles.cardLayout]}
          locations={[0, 0.46, 1]}
          colors={["#a2e3f3", "rgba(162, 227, 243, 0.29)", "#a2e3f3"]}
        />
        <Image
          style={styles.cardLayout}
          contentFit="cover"
          source={require("../assets/frame.png")}
        />
        <View style={styles.heartShadowBox}>
          <Image
            style={styles.heartIcon}
            contentFit="cover"
            source={require("../assets/heart1.png")}
          />
        </View>
      </View>
      <View style={[styles.card6, styles.cardShadowBox1]}>
        <LinearGradient
          style={[styles.background, styles.cardLayout]}
          locations={[0, 0.46, 1]}
          colors={["#a2e3f3", "rgba(162, 227, 243, 0.29)", "#a2e3f3"]}
        />
        <Image
          style={styles.cardLayout}
          contentFit="cover"
          source={require("../assets/frame.png")}
        />
        <View style={styles.heartShadowBox}>
          <Image
            style={styles.heartIcon}
            contentFit="cover"
            source={require("../assets/heart1.png")}
          />
        </View>
      </View>
      <View style={[styles.card7, styles.cardShadowBox]}>
        <LinearGradient
          style={[styles.background, styles.cardLayout]}
          locations={[0, 0.46, 1]}
          colors={["#a2e3f3", "rgba(162, 227, 243, 0.29)", "#a2e3f3"]}
        />
        <Image
          style={styles.cardLayout}
          contentFit="cover"
          source={require("../assets/frame.png")}
        />
        <View style={styles.heartShadowBox}>
          <Image
            style={styles.heartIcon}
            contentFit="cover"
            source={require("../assets/heart1.png")}
          />
        </View>
      </View>
      <View style={[styles.card8, styles.cardShadowBox]}>
        <LinearGradient
          style={[styles.background, styles.cardLayout]}
          locations={[0, 0.46, 1]}
          colors={["#a2e3f3", "rgba(162, 227, 243, 0.29)", "#a2e3f3"]}
        />
        <Image
          style={styles.cardLayout}
          contentFit="cover"
          source={require("../assets/frame.png")}
        />
        <View style={styles.heartShadowBox}>
          <Image
            style={styles.heartIcon}
            contentFit="cover"
            source={require("../assets/heart1.png")}
          />
        </View>
      </View>
      <Pressable
        style={styles.wrapper}
        onPress={() => navigation.navigate("ActivityScreen7")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/group-1561.png")}
        />
      </Pressable>
      <Image
        style={styles.activityScreenChild}
        contentFit="cover"
        source={require("../assets/group-1485.png")}
      />
      <Image
        style={[styles.activityScreenItem, styles.cardChildLayout]}
        contentFit="cover"
        source={require("../assets/group-154.png")}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  backgroundPosition: {
    left: 0,
    top: 0,
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
  cardPosition: {
    top: 513,
    position: "absolute",
    overflow: "hidden",
  },
  card4Layout: {
    height: 264,
    width: 206,
  },
  cardChildLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  cardShadowBox1: {
    left: 1010,
    height: 221,
    width: 173,
    shadowOpacity: 1,
    elevation: 9.4,
    shadowRadius: 9.4,
    shadowOffset: {
      width: 3,
      height: 4,
    },
    shadowColor: "rgba(235, 235, 235, 0.31)",
    position: "absolute",
    overflow: "hidden",
  },
  cardShadowBox: {
    left: 1219,
    height: 221,
    width: 173,
    shadowOpacity: 1,
    elevation: 9.4,
    shadowRadius: 9.4,
    shadowOffset: {
      width: 3,
      height: 4,
    },
    shadowColor: "rgba(235, 235, 235, 0.31)",
    position: "absolute",
    overflow: "hidden",
  },
  image5Icon: {
    width: 1512,
    height: 1130,
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
  heartShadowBox1: {
    padding: Padding.p_3xs,
    justifyContent: "center",
    alignItems: "center",
    height: 64,
    elevation: 17.2,
    shadowRadius: 17.2,
    shadowColor: "#fb83a7",
    left: 55,
    top: 79,
    width: 64,
    shadowOpacity: 1,
    shadowOffset: {
      width: 3,
      height: 4,
    },
    position: "absolute",
  },
  card: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 3,
      height: 4,
    },
    shadowColor: "rgba(235, 235, 235, 0.31)",
    elevation: 9.4,
    shadowRadius: 9.4,
    width: 173,
    left: 121,
    top: 264,
    position: "absolute",
    overflow: "hidden",
  },
  card1: {
    left: 330,
    shadowOpacity: 1,
    shadowOffset: {
      width: 3,
      height: 4,
    },
    shadowColor: "rgba(235, 235, 235, 0.31)",
    elevation: 9.4,
    shadowRadius: 9.4,
    width: 173,
    top: 264,
    position: "absolute",
    overflow: "hidden",
  },
  card2: {
    height: 221,
    width: 173,
    shadowOpacity: 1,
    shadowOffset: {
      width: 3,
      height: 4,
    },
    shadowColor: "rgba(235, 235, 235, 0.31)",
    elevation: 9.4,
    shadowRadius: 9.4,
    left: 121,
  },
  cardIcon: {
    left: 316,
    width: 200,
    height: 255,
  },
  card3: {
    left: 539,
    height: 221,
    width: 173,
    shadowOpacity: 1,
    shadowOffset: {
      width: 3,
      height: 4,
    },
    shadowColor: "rgba(235, 235, 235, 0.31)",
    elevation: 9.4,
    shadowRadius: 9.4,
  },
  background4: {
    backgroundColor: "#a2e3f3",
    left: 0,
    top: 0,
    position: "absolute",
  },
  cardChild: {
    height: "94%",
    width: "77.13%",
    top: "2.85%",
    right: "11.19%",
    bottom: "3.15%",
    left: "11.68%",
  },
  o: {
    top: 51,
    left: 53,
    fontSize: 123,
    fontFamily: FontFamily.righteousRegular,
    color: "#8776f0",
    textAlign: "center",
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: {
      width: 8.829675674438477,
      height: 10.091057777404785,
    },
    textShadowRadius: 18.16,
    transform: [
      {
        rotate: "-0.2deg",
      },
    ],
    position: "absolute",
  },
  card4: {
    top: 234,
    left: 768,
    shadowRadius: 11.21,
    elevation: 11.21,
    shadowOpacity: 1,
    shadowOffset: {
      width: 3,
      height: 4,
    },
    shadowColor: "rgba(235, 235, 235, 0.31)",
    width: 206,
    position: "absolute",
    overflow: "hidden",
  },
  heartShadowBox: {
    elevation: 20.8,
    shadowRadius: 20.8,
    shadowColor: "#39c9ec",
    padding: Padding.p_3xs,
    justifyContent: "center",
    alignItems: "center",
    height: 64,
    width: 64,
    left: 55,
    top: 79,
    shadowOpacity: 1,
    shadowOffset: {
      width: 3,
      height: 4,
    },
    position: "absolute",
  },
  card5: {
    top: 264,
  },
  card6: {
    top: 516,
  },
  card7: {
    top: 264,
  },
  card8: {
    top: 516,
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
  activityScreenChild: {
    top: 41,
    left: 306,
    width: 755,
    height: 41,
    position: "absolute",
  },
  activityScreenItem: {
    height: "17.91%",
    width: "11.46%",
    top: "-3.46%",
    right: "26.3%",
    bottom: "85.55%",
    left: "62.24%",
  },
  activityScreen: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 982,
    overflow: "hidden",
    width: "100%",
  },
});

export default ActivityScreen8;
