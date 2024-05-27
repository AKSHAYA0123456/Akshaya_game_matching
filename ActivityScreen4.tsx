import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Padding, Color, FontSize, FontFamily } from "../GlobalStyles";

const ActivityScreen4 = () => {
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
      <View style={[styles.card4, styles.cardShadowBox2]}>
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
      <View style={[styles.card5, styles.cardLayout]}>
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
      <View style={[styles.card7, styles.cardShadowBox1]}>
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
      <View style={[styles.card9, styles.cardShadowBox]}>
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
      <View style={[styles.activityScreenChild, styles.image5IconLayout]} />
      <Text style={styles.heading1}>It’s a match !</Text>
      <Pressable
        style={styles.wrapper}
        onPress={() => navigation.navigate("ActivityScreen3")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/group-1564.png")}
        />
      </Pressable>
      <Image
        style={styles.activityScreenItem}
        contentFit="cover"
        source={require("../assets/group-1482.png")}
      />
      <Image
        style={styles.activityScreenInner}
        contentFit="cover"
        source={require("../assets/group-1543.png")}
      />
      <Image
        style={styles.groupIcon}
        contentFit="cover"
        source={require("../assets/group-662.png")}
      />
      <Image
        style={styles.cardIcon}
        contentFit="cover"
        source={require("../assets/card6.png")}
      />
      <Image
        style={styles.vectorIcon}
        contentFit="cover"
        source={require("../assets/vector-225.png")}
      />
      <Image
        style={styles.activityScreenChild1}
        contentFit="cover"
        source={require("../assets/vector-226.png")}
      />
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
  card4: {
    left: 539,
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
    left: 801,
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
  activityScreenChild: {
    top: 2,
    left: -4,
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
    textAlign: "center",
    display: "flex",
    width: 723,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
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
  groupIcon: {
    top: 417,
    left: 660,
    width: 339,
    height: 388,
    position: "absolute",
  },
  cardIcon: {
    top: 214,
    left: 406,
    width: 311,
    height: 371,
    position: "absolute",
    overflow: "hidden",
  },
  vectorIcon: {
    top: 78,
    left: 974,
    width: 11,
    height: 18,
    position: "absolute",
  },
  activityScreenChild1: {
    top: 65,
    left: 975,
    width: 18,
    height: 16,
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

export default ActivityScreen4;
