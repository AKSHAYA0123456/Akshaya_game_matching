import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Padding, FontFamily, Color } from "../GlobalStyles";

const ActivityScreen3 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.activityScreen}>
      <Image
        style={[styles.image5Icon, styles.wrapperPosition]}
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
      <LinearGradient
        style={[styles.wrapper, styles.wrapperPosition]}
        locations={[0, 1]}
        colors={["rgba(149, 233, 246, 0.45)", "rgba(186, 230, 26, 0.38)"]}
      >
        <Pressable
          style={[styles.pressable, styles.iconLayout]}
          onPress={() => navigation.navigate("ActivityScreen4")}
        />
      </LinearGradient>
      <Pressable
        style={styles.container}
        onPress={() => navigation.navigate("ActivityScreen2")}
      >
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/group-1563.png")}
        />
      </Pressable>
      <Image
        style={styles.activityScreenChild}
        contentFit="cover"
        source={require("../assets/group-1481.png")}
      />
      <Image
        style={[styles.activityScreenItem, styles.vector219Layout]}
        contentFit="cover"
        source={require("../assets/group-154.png")}
      />
      <View style={[styles.card, styles.cardIconLayout]}>
        <LinearGradient
          style={[styles.background, styles.cardIconLayout]}
          locations={[0, 0.46, 1]}
          colors={[
            "#fba8c1",
            "rgba(251, 168, 193, 0.54)",
            "rgba(251, 168, 193, 0.97)",
          ]}
        />
        <Image
          style={styles.cardIconLayout}
          contentFit="cover"
          source={require("../assets/frame2.png")}
        />
        <View style={styles.heartShadowBox1}>
          <Image
            style={styles.heartIcon}
            contentFit="cover"
            source={require("../assets/heart.png")}
          />
        </View>
      </View>
      <View style={[styles.card1, styles.cardIconLayout]}>
        <LinearGradient
          style={[styles.background, styles.cardIconLayout]}
          locations={[0, 0.46, 1]}
          colors={[
            "#fba8c1",
            "rgba(251, 168, 193, 0.54)",
            "rgba(251, 168, 193, 0.97)",
          ]}
        />
        <Image
          style={styles.cardIconLayout}
          contentFit="cover"
          source={require("../assets/frame2.png")}
        />
        <View style={styles.heartShadowBox1}>
          <Image
            style={styles.heartIcon}
            contentFit="cover"
            source={require("../assets/heart.png")}
          />
        </View>
      </View>
      <View style={[styles.card2, styles.cardShadowBox2]}>
        <LinearGradient
          style={[styles.background, styles.cardIconLayout]}
          locations={[0, 0.46, 1]}
          colors={[
            "#fba8c1",
            "rgba(251, 168, 193, 0.54)",
            "rgba(251, 168, 193, 0.97)",
          ]}
        />
        <Image
          style={styles.cardIconLayout}
          contentFit="cover"
          source={require("../assets/frame2.png")}
        />
        <View style={styles.heartShadowBox1}>
          <Image
            style={styles.heartIcon}
            contentFit="cover"
            source={require("../assets/heart.png")}
          />
        </View>
      </View>
      <View style={[styles.card3, styles.cardShadowBox2]}>
        <LinearGradient
          style={[styles.background, styles.cardIconLayout]}
          locations={[0, 0.46, 1]}
          colors={[
            "#fba8c1",
            "rgba(251, 168, 193, 0.54)",
            "rgba(251, 168, 193, 0.97)",
          ]}
        />
        <Image
          style={styles.cardIconLayout}
          contentFit="cover"
          source={require("../assets/frame2.png")}
        />
        <View style={styles.heartShadowBox1}>
          <Image
            style={styles.heartIcon}
            contentFit="cover"
            source={require("../assets/heart.png")}
          />
        </View>
      </View>
      <View style={[styles.card4, styles.cardPosition1]}>
        <LinearGradient
          style={[styles.background, styles.cardIconLayout]}
          locations={[0, 0.46, 1]}
          colors={[
            "#fba8c1",
            "rgba(251, 168, 193, 0.54)",
            "rgba(251, 168, 193, 0.97)",
          ]}
        />
        <Image
          style={styles.cardIconLayout}
          contentFit="cover"
          source={require("../assets/frame2.png")}
        />
        <View style={styles.heartShadowBox1}>
          <Image
            style={styles.heartIcon}
            contentFit="cover"
            source={require("../assets/heart.png")}
          />
        </View>
      </View>
      <View style={[styles.card5, styles.cardPosition]}>
        <LinearGradient
          style={[styles.background, styles.cardIconLayout]}
          locations={[0, 0.46, 1]}
          colors={["#a2e3f3", "rgba(162, 227, 243, 0.29)", "#a2e3f3"]}
        />
        <Image
          style={styles.cardIconLayout}
          contentFit="cover"
          source={require("../assets/frame1.png")}
        />
        <View style={styles.heartShadowBox}>
          <Image
            style={styles.heartIcon}
            contentFit="cover"
            source={require("../assets/heart1.png")}
          />
        </View>
      </View>
      <View style={[styles.cardParent, styles.cardPosition]}>
        <Image
          style={[styles.cardIcon, styles.cardIconLayout]}
          contentFit="cover"
          source={require("../assets/card5.png")}
        />
        <Image
          style={[styles.groupChild, styles.vector219Layout]}
          contentFit="cover"
          source={require("../assets/group-660.png")}
        />
        <Text style={styles.a}>A</Text>
        <Image
          style={[styles.vector219Stroke, styles.vector219Layout]}
          contentFit="cover"
          source={require("../assets/vector-219-stroke.png")}
        />
        <Image
          style={[styles.vector219Stroke1, styles.vector219Layout]}
          contentFit="cover"
          source={require("../assets/vector-219-stroke1.png")}
        />
      </View>
      <View style={[styles.card6, styles.cardShadowBox1]}>
        <LinearGradient
          style={[styles.background, styles.cardIconLayout]}
          locations={[0, 0.46, 1]}
          colors={["#a2e3f3", "rgba(162, 227, 243, 0.29)", "#a2e3f3"]}
        />
        <Image
          style={styles.cardIconLayout}
          contentFit="cover"
          source={require("../assets/frame1.png")}
        />
        <View style={styles.heartShadowBox}>
          <Image
            style={styles.heartIcon}
            contentFit="cover"
            source={require("../assets/heart1.png")}
          />
        </View>
      </View>
      <View style={[styles.card7, styles.cardShadowBox1]}>
        <LinearGradient
          style={[styles.background, styles.cardIconLayout]}
          locations={[0, 0.46, 1]}
          colors={["#a2e3f3", "rgba(162, 227, 243, 0.29)", "#a2e3f3"]}
        />
        <Image
          style={styles.cardIconLayout}
          contentFit="cover"
          source={require("../assets/frame1.png")}
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
          style={[styles.background, styles.cardIconLayout]}
          locations={[0, 0.46, 1]}
          colors={["#a2e3f3", "rgba(162, 227, 243, 0.29)", "#a2e3f3"]}
        />
        <Image
          style={styles.cardIconLayout}
          contentFit="cover"
          source={require("../assets/frame1.png")}
        />
        <View style={styles.heartShadowBox}>
          <Image
            style={styles.heartIcon}
            contentFit="cover"
            source={require("../assets/heart1.png")}
          />
        </View>
      </View>
      <View style={[styles.card9, styles.cardShadowBox]}>
        <LinearGradient
          style={[styles.background, styles.cardIconLayout]}
          locations={[0, 0.46, 1]}
          colors={["#a2e3f3", "rgba(162, 227, 243, 0.29)", "#a2e3f3"]}
        />
        <Image
          style={styles.cardIconLayout}
          contentFit="cover"
          source={require("../assets/frame1.png")}
        />
        <View style={styles.heartShadowBox}>
          <Image
            style={styles.heartIcon}
            contentFit="cover"
            source={require("../assets/heart1.png")}
          />
        </View>
      </View>
      <Image
        style={[styles.cardIcon1, styles.cardPosition1]}
        contentFit="cover"
        source={require("../assets/card4.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapperPosition: {
    width: 1512,
    left: 0,
    top: 0,
    position: "absolute",
  },
  frameLayout: {
    height: 62,
    width: 430,
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  vector219Layout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  cardIconLayout: {
    height: 221,
    width: 173,
  },
  cardShadowBox2: {
    top: 513,
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
  },
  cardPosition1: {
    left: 539,
    position: "absolute",
    overflow: "hidden",
  },
  cardPosition: {
    left: 801,
    height: 221,
    width: 173,
    position: "absolute",
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
  pressable: {
    backgroundColor: "transparent",
  },
  wrapper: {
    height: 977,
  },
  container: {
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
  background: {
    backgroundColor: "transparent",
    left: 0,
    top: 0,
    width: 173,
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
    elevation: 9.4,
    shadowRadius: 9.4,
    shadowOffset: {
      width: 3,
      height: 4,
    },
    shadowColor: "rgba(235, 235, 235, 0.31)",
    top: 264,
    overflow: "hidden",
    left: 121,
    position: "absolute",
  },
  card1: {
    left: 330,
    shadowOpacity: 1,
    elevation: 9.4,
    shadowRadius: 9.4,
    shadowOffset: {
      width: 3,
      height: 4,
    },
    shadowColor: "rgba(235, 235, 235, 0.31)",
    top: 264,
    overflow: "hidden",
    position: "absolute",
  },
  card2: {
    left: 121,
    position: "absolute",
    overflow: "hidden",
  },
  card3: {
    left: 334,
    position: "absolute",
    overflow: "hidden",
  },
  card4: {
    top: 513,
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
    shadowOpacity: 1,
    elevation: 9.4,
    shadowRadius: 9.4,
    shadowOffset: {
      width: 3,
      height: 4,
    },
    shadowColor: "rgba(235, 235, 235, 0.31)",
    top: 264,
    overflow: "hidden",
  },
  cardIcon: {
    left: 0,
    top: 0,
    width: 173,
    position: "absolute",
    overflow: "hidden",
  },
  groupChild: {
    height: "95.7%",
    width: "84.17%",
    top: "0.9%",
    right: "7.74%",
    bottom: "3.39%",
    left: "8.09%",
  },
  a: {
    top: 52,
    left: 54,
    fontSize: 98,
    fontFamily: FontFamily.righteousRegular,
    color: "#56b000",
    textAlign: "center",
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: {
      width: 7,
      height: 8,
    },
    textShadowRadius: 14.4,
    position: "absolute",
  },
  vector219Stroke: {
    height: "6.33%",
    width: "8.38%",
    top: "40.72%",
    right: "55.23%",
    bottom: "52.94%",
    left: "36.4%",
  },
  vector219Stroke1: {
    height: "3.44%",
    width: "4.39%",
    top: "62.44%",
    right: "34.95%",
    bottom: "34.12%",
    left: "60.66%",
  },
  cardParent: {
    top: 516,
  },
  card6: {
    top: 264,
  },
  card7: {
    top: 516,
  },
  card8: {
    top: 264,
  },
  card9: {
    top: 516,
  },
  cardIcon1: {
    top: 252,
    width: 183,
    height: 233,
  },
  activityScreen: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 982,
    overflow: "hidden",
    width: "100%",
  },
});

export default ActivityScreen3;
