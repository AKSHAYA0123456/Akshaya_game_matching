import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Padding, Color, FontSize, FontFamily } from "../GlobalStyles";

const ActivityScreen5 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.activityScreen}>
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
      <View style={[styles.card2, styles.cardShadowBox2]}>
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
      <View style={[styles.card3, styles.cardShadowBox2]}>
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
      <View style={[styles.card4, styles.cardShadowBox1]}>
        <LinearGradient
          style={[styles.background, styles.cardLayout]}
          locations={[0, 0.46, 1]}
          colors={["#a2e3f3", "rgba(162, 227, 243, 0.29)", "#a2e3f3"]}
        />
        <Image
          style={styles.cardLayout}
          contentFit="cover"
          source={require("../assets/frame3.png")}
        />
        <View style={styles.heartShadowBox}>
          <Image
            style={styles.heartIcon}
            contentFit="cover"
            source={require("../assets/heart1.png")}
          />
        </View>
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
          source={require("../assets/frame3.png")}
        />
        <View style={styles.heartShadowBox}>
          <Image
            style={styles.heartIcon}
            contentFit="cover"
            source={require("../assets/heart1.png")}
          />
        </View>
      </View>
      <View style={[styles.card6, styles.cardShadowBox]}>
        <LinearGradient
          style={[styles.background, styles.cardLayout]}
          locations={[0, 0.46, 1]}
          colors={["#a2e3f3", "rgba(162, 227, 243, 0.29)", "#a2e3f3"]}
        />
        <Image
          style={styles.cardLayout}
          contentFit="cover"
          source={require("../assets/frame3.png")}
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
          source={require("../assets/frame3.png")}
        />
        <View style={styles.heartShadowBox}>
          <Image
            style={styles.heartIcon}
            contentFit="cover"
            source={require("../assets/heart1.png")}
          />
        </View>
      </View>
      <View style={[styles.activityScreenChild, styles.image5IconLayout]} />
      <Text style={[styles.heading1, styles.nextFlexBox]}>It’s a match !</Text>
      <Pressable
        style={styles.wrapper}
        onPress={() => navigation.navigate("ActivityScreen8")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/group-1561.png")}
        />
      </Pressable>
      <Image
        style={styles.activityScreenItem}
        contentFit="cover"
        source={require("../assets/group-1483.png")}
      />
      <Image
        style={styles.activityScreenInner}
        contentFit="cover"
        source={require("../assets/group-1544.png")}
      />
      <Image
        style={styles.vectorIcon}
        contentFit="cover"
        source={require("../assets/vector-2251.png")}
      />
      <Image
        style={styles.activityScreenChild1}
        contentFit="cover"
        source={require("../assets/vector-2261.png")}
      />
      <Image
        style={styles.cardIcon}
        contentFit="cover"
        source={require("../assets/card7.png")}
      />
      <Image
        style={styles.cardIcon1}
        contentFit="cover"
        source={require("../assets/card8.png")}
      />
      <Image
        style={styles.ellipseIcon}
        contentFit="cover"
        source={require("../assets/ellipse-3151.png")}
      />
      <Pressable
        style={styles.polygonParent}
        onPress={() => navigation.navigate("FinalRewardsScreen")}
      >
        <Image
          style={styles.groupChild}
          contentFit="cover"
          source={require("../assets/polygon-1.png")}
        />
        <View style={[styles.rectangleParent, styles.groupItemLayout]}>
          <View style={[styles.groupItem, styles.groupShadowBox]} />
          <View style={[styles.groupInner, styles.groupShadowBox]} />
          <Image
            style={[styles.rectangleIcon, styles.groupChild1Position]}
            contentFit="cover"
            source={require("../assets/rectangle-15.png")}
          />
          <Text style={[styles.next, styles.nextFlexBox]}>NEXT</Text>
          <Image
            style={[styles.groupChild1, styles.groupChild1Position]}
            contentFit="cover"
            source={require("../assets/ellipse-3.png")}
          />
        </View>
      </Pressable>
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
  nextFlexBox: {
    textAlign: "center",
    position: "absolute",
  },
  groupItemLayout: {
    width: 329,
    height: 121,
    left: 0,
    top: 0,
  },
  groupShadowBox: {
    elevation: 0,
    shadowRadius: 0,
    borderRadius: 40,
    shadowOpacity: 1,
    shadowOffset: {
      width: 3,
      height: 4,
    },
    position: "absolute",
  },
  groupChild1Position: {
    left: 27,
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
  heartShadowBox1: {
    padding: Padding.p_3xs,
    height: 64,
    elevation: 17.2,
    shadowRadius: 17.2,
    shadowColor: "#fb83a7",
    left: 55,
    top: 79,
    justifyContent: "center",
    alignItems: "center",
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
    width: 173,
    top: 264,
    position: "absolute",
    overflow: "hidden",
    left: 121,
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
    width: 173,
    top: 264,
    position: "absolute",
    overflow: "hidden",
  },
  card2: {
    left: 121,
  },
  card3: {
    left: 334,
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
  card4: {
    top: 264,
  },
  card5: {
    top: 516,
  },
  card6: {
    top: 264,
  },
  card7: {
    top: 516,
  },
  activityScreenChild: {
    top: 2,
    left: -2,
    backgroundColor: Color.colorGray_200,
    height: 977,
  },
  heading1: {
    top: 200,
    left: 711,
    fontSize: FontSize.size_77xl,
    letterSpacing: 7.7,
    fontWeight: "800",
    fontFamily: FontFamily.nunitoExtraBold,
    color: Color.colorChocolate,
    display: "flex",
    width: 723,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
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
  activityScreenItem: {
    top: 41,
    left: 306,
    width: 755,
    height: 41,
    position: "absolute",
  },
  activityScreenInner: {
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
  vectorIcon: {
    top: 78,
    left: 974,
    width: 22,
    height: 23,
    position: "absolute",
  },
  activityScreenChild1: {
    top: 63,
    left: 975,
    width: 27,
    height: 20,
    position: "absolute",
  },
  cardIcon: {
    top: 302,
    left: 450,
    width: 301,
    height: 357,
    position: "absolute",
    overflow: "hidden",
  },
  cardIcon1: {
    top: 410,
    left: 748,
    width: 321,
    height: 375,
    position: "absolute",
    overflow: "hidden",
  },
  ellipseIcon: {
    top: 85,
    left: 981,
    width: 14,
    height: 11,
    position: "absolute",
  },
  groupChild: {
    top: 16,
    left: 285,
    borderRadius: 10,
    width: 88,
    height: 88,
    position: "absolute",
  },
  groupItem: {
    shadowColor: "#ffd540",
    backgroundColor: Color.colorKhaki,
    borderRadius: 40,
    width: 329,
    height: 121,
    left: 0,
    top: 0,
  },
  groupInner: {
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
    height: 44,
    top: 18,
    borderRadius: 40,
  },
  next: {
    left: 72,
    fontSize: FontSize.size_45xl_3,
    letterSpacing: 3.8,
    fontWeight: "900",
    fontFamily: FontFamily.nunitoBlack,
    color: Color.colorWhite,
    top: 18,
  },
  groupChild1: {
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
  activityScreen: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 982,
    overflow: "hidden",
    width: "100%",
  },
});

export default ActivityScreen5;
