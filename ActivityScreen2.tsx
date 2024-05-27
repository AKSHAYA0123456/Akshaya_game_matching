import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Padding, FontSize, FontFamily, Color } from "../GlobalStyles";

const ActivityScreen2 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.activityScreen}>
      <Image
        style={styles.image5Icon}
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
        style={[styles.activityScreenChild, styles.backgroundPosition]}
        locations={[0, 1]}
        colors={["rgba(149, 233, 246, 0.45)", "rgba(186, 230, 26, 0.38)"]}
      />
      <Pressable
        style={styles.wrapper}
        onPress={() => navigation.navigate("ActivityScreen1")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/group-1563.png")}
        />
      </Pressable>
      <Image
        style={styles.activityScreenItem}
        contentFit="cover"
        source={require("../assets/group-1481.png")}
      />
      <Image
        style={styles.activityScreenInner}
        contentFit="cover"
        source={require("../assets/group-1542.png")}
      />
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
          source={require("../assets/frame1.png")}
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
          source={require("../assets/frame1.png")}
        />
        <View style={styles.heartShadowBox1}>
          <Image
            style={styles.heartIcon}
            contentFit="cover"
            source={require("../assets/heart.png")}
          />
        </View>
      </View>
      <View style={[styles.card2, styles.cardShadowBox3]}>
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
          source={require("../assets/frame1.png")}
        />
        <View style={styles.heartShadowBox1}>
          <Image
            style={styles.heartIcon}
            contentFit="cover"
            source={require("../assets/heart.png")}
          />
        </View>
      </View>
      <View style={[styles.card3, styles.cardShadowBox3]}>
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
          source={require("../assets/frame1.png")}
        />
        <View style={styles.heartShadowBox1}>
          <Image
            style={styles.heartIcon}
            contentFit="cover"
            source={require("../assets/heart.png")}
          />
        </View>
      </View>
      <View style={[styles.card4, styles.cardPosition]}>
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
          source={require("../assets/frame1.png")}
        />
        <View style={styles.heartShadowBox1}>
          <Image
            style={styles.heartIcon}
            contentFit="cover"
            source={require("../assets/heart.png")}
          />
        </View>
      </View>
      <View style={[styles.card5, styles.cardShadowBox2]}>
        <LinearGradient
          style={[styles.background, styles.cardLayout]}
          locations={[0, 0.46, 1]}
          colors={["#a2e3f3", "rgba(162, 227, 243, 0.29)", "#a2e3f3"]}
        />
        <Image
          style={styles.cardLayout}
          contentFit="cover"
          source={require("../assets/frame2.png")}
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
        style={[styles.card6, styles.cardShadowBox2]}
        onPress={() => navigation.navigate("ActivityScreen3")}
      >
        <LinearGradient
          style={[styles.background, styles.cardLayout]}
          locations={[0, 0.46, 1]}
          colors={["#a2e3f3", "rgba(162, 227, 243, 0.29)", "#a2e3f3"]}
        />
        <Image
          style={styles.cardLayout}
          contentFit="cover"
          source={require("../assets/frame2.png")}
        />
        <View style={styles.heartShadowBox}>
          <Image
            style={styles.heartIcon}
            contentFit="cover"
            source={require("../assets/heart1.png")}
          />
        </View>
      </Pressable>
      <View style={[styles.card7, styles.cardShadowBox1]}>
        <LinearGradient
          style={[styles.background, styles.cardLayout]}
          locations={[0, 0.46, 1]}
          colors={["#a2e3f3", "rgba(162, 227, 243, 0.29)", "#a2e3f3"]}
        />
        <Image
          style={styles.cardLayout}
          contentFit="cover"
          source={require("../assets/frame2.png")}
        />
        <View style={styles.heartShadowBox}>
          <Image
            style={styles.heartIcon}
            contentFit="cover"
            source={require("../assets/heart1.png")}
          />
        </View>
      </View>
      <View style={[styles.card8, styles.cardShadowBox1]}>
        <LinearGradient
          style={[styles.background, styles.cardLayout]}
          locations={[0, 0.46, 1]}
          colors={["#a2e3f3", "rgba(162, 227, 243, 0.29)", "#a2e3f3"]}
        />
        <Image
          style={styles.cardLayout}
          contentFit="cover"
          source={require("../assets/frame2.png")}
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
          source={require("../assets/frame2.png")}
        />
        <View style={styles.heartShadowBox}>
          <Image
            style={styles.heartIcon}
            contentFit="cover"
            source={require("../assets/heart1.png")}
          />
        </View>
      </View>
      <View style={[styles.card10, styles.cardShadowBox]}>
        <LinearGradient
          style={[styles.background, styles.cardLayout]}
          locations={[0, 0.46, 1]}
          colors={["#a2e3f3", "rgba(162, 227, 243, 0.29)", "#a2e3f3"]}
        />
        <Image
          style={styles.cardLayout}
          contentFit="cover"
          source={require("../assets/frame2.png")}
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
        style={[styles.cardIcon, styles.cardPosition]}
        contentFit="cover"
        source={require("../assets/card4.png")}
      />
      <Image
        style={[styles.vectorIcon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/vector-2241.png")}
      />
      <Image
        style={[styles.groupIcon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/group-1494.png")}
      />
      <Text style={styles.heading1}>Now select second card .</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  frameLayout: {
    height: 62,
    width: 430,
  },
  backgroundPosition: {
    backgroundColor: "transparent",
    left: 0,
    top: 0,
    position: "absolute",
  },
  cardLayout: {
    height: 221,
    width: 173,
  },
  cardShadowBox3: {
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
  cardPosition: {
    left: 539,
    position: "absolute",
    overflow: "hidden",
  },
  cardShadowBox2: {
    left: 801,
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
  iconPosition: {
    top: 673,
    position: "absolute",
  },
  image5Icon: {
    height: 1130,
    width: 1512,
    left: 0,
    top: 0,
    position: "absolute",
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
  activityScreenChild: {
    height: 977,
    width: 1512,
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
  card9: {
    top: 264,
  },
  card10: {
    top: 516,
  },
  cardIcon: {
    top: 252,
    width: 183,
    height: 233,
  },
  vectorIcon: {
    left: 913,
    width: 270,
    height: 198,
  },
  groupIcon: {
    left: 639,
    width: 262,
    height: 123,
  },
  heading1: {
    top: 689,
    left: 630,
    fontSize: FontSize.size_13xl,
    fontWeight: "800",
    fontFamily: FontFamily.nunitoExtraBold,
    color: Color.colorCadetblue,
    textAlign: "center",
    display: "flex",
    width: 267,
    height: 54,
    justifyContent: "center",
    alignItems: "center",
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

export default ActivityScreen2;
