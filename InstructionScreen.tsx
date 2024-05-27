import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Border, Color, Padding, FontSize, FontFamily } from "../GlobalStyles";

const InstructionScreen = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.instructionScreen}>
      <Image
        style={[styles.image5Icon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/image-5.png")}
      />
      <Pressable
        style={styles.wrapper}
        onPress={() => navigation.navigate("IntroScreen2")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/group-1561.png")}
        />
      </Pressable>
      <Image
        style={styles.instructionScreenChild}
        contentFit="cover"
        source={require("../assets/group-148.png")}
      />
      <Image
        style={styles.instructionScreenItem}
        contentFit="cover"
        source={require("../assets/group-1541.png")}
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
      <Image
        style={styles.instructionScreenInner}
        contentFit="cover"
        source={require("../assets/vector-7.png")}
      />
      <View style={[styles.rectangleView, styles.instructionChildLayout1]} />
      <View
        style={[styles.instructionScreenChild1, styles.instructionChildLayout1]}
      />
      <View
        style={[styles.instructionScreenChild2, styles.instructionChildLayout1]}
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
          source={require("../assets/frame.png")}
        />
        <View style={[styles.heart, styles.heartPosition]}>
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
          colors={["#a2e3f3", "rgba(162, 227, 243, 0.29)", "#a2e3f3"]}
        />
        <Image
          style={styles.cardLayout}
          contentFit="cover"
          source={require("../assets/frame.png")}
        />
        <View style={[styles.heart1, styles.heartPosition]}>
          <Image
            style={styles.heartIcon}
            contentFit="cover"
            source={require("../assets/heart1.png")}
          />
        </View>
      </View>
      <View style={styles.rectangleParent}>
        <View style={[styles.groupChild, styles.childLayout]} />
        <Text style={[styles.text, styles.textFlexBox]}>01</Text>
        <Image
          style={[styles.groupItem, styles.groupItemLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-309.png")}
        />
        <Image
          style={[styles.groupInner, styles.instructionChildLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-310.png")}
        />
      </View>
      <View style={[styles.instructionScreenChild3, styles.childLayout]} />
      <Text style={[styles.text1, styles.textFlexBox]}>03</Text>
      <Image
        style={[styles.ellipseIcon, styles.groupItemLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-309.png")}
      />
      <Image
        style={[styles.instructionScreenChild4, styles.instructionChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-3121.png")}
      />
      <View style={[styles.instructionScreenChild5, styles.childLayout]} />
      <Text style={[styles.text2, styles.textFlexBox]}>02</Text>
      <Image
        style={[styles.instructionScreenChild6, styles.groupItemLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-309.png")}
      />
      <Image
        style={[styles.instructionScreenChild7, styles.instructionChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-3121.png")}
      />
      <Text style={[styles.heading1, styles.headingTypo1]}>
        Select a pink card.
      </Text>
      <Text style={[styles.heading11, styles.headingTypo1]}>
        Select a blue card.
      </Text>
      <Text style={[styles.heading12, styles.headingTypo1]}>Its a match !</Text>
      <Text style={[styles.heading13, styles.headingTypo]}>It has images.</Text>
      <Text style={[styles.heading14, styles.headingTypo]}>
        It has alphabets.
      </Text>
      <Text style={[styles.heading15, styles.headingTypo]}>
        If they’re same
      </Text>
      <Text style={[styles.heading16, styles.headingTypo]}>
        otherwise retry :(
      </Text>
      <View style={styles.ellipseGroup}>
        <Image
          style={styles.groupChild1}
          contentFit="cover"
          source={require("../assets/ellipse-319.png")}
        />
        <Image
          style={styles.cardIcon}
          contentFit="cover"
          source={require("../assets/card.png")}
        />
        <Image
          style={[styles.cardIcon1, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/card1.png")}
        />
      </View>
      <Image
        style={styles.cardIcon2}
        contentFit="cover"
        source={require("../assets/card2.png")}
      />
      <Pressable
        style={styles.polygonParent}
        onPress={() => navigation.navigate("ActivityScreen")}
      >
        <Image
          style={styles.polygonIcon}
          contentFit="cover"
          source={require("../assets/polygon-11.png")}
        />
        <View style={styles.groupPosition}>
          <View style={[styles.groupChild2, styles.groupPosition]} />
          <View style={[styles.groupChild3, styles.groupChildShadowBox]} />
          <Image
            style={[styles.rectangleIcon, styles.groupChild4Position]}
            contentFit="cover"
            source={require("../assets/rectangle-15.png")}
          />
          <Text style={[styles.play, styles.textFlexBox]}>PLAY</Text>
          <Image
            style={[styles.groupChild4, styles.groupChild4Position]}
            contentFit="cover"
            source={require("../assets/ellipse-3.png")}
          />
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  iconPosition: {
    left: 0,
    top: 0,
  },
  frameLayout: {
    height: 62,
    width: 430,
  },
  instructionChildLayout1: {
    height: 438,
    width: 351,
    borderRadius: Border.br_50xl,
    top: 330,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  cardLayout: {
    height: 221,
    width: 173,
  },
  heartPosition: {
    padding: Padding.p_3xs,
    justifyContent: "center",
    alignItems: "center",
    height: 64,
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
  childLayout: {
    borderBottomLeftRadius: Border.br_8xs,
    borderBottomRightRadius: Border.br_xl,
    borderTopRightRadius: Border.br_xl,
    borderTopLeftRadius: Border.br_8xs,
    elevation: 0,
    shadowRadius: 0,
    height: 58,
    width: 58,
    shadowOpacity: 1,
    shadowOffset: {
      width: 3,
      height: 4,
    },
    position: "absolute",
  },
  textFlexBox: {
    textAlign: "center",
    position: "absolute",
  },
  groupItemLayout: {
    height: 13,
    width: 16,
    position: "absolute",
  },
  instructionChildLayout: {
    height: 7,
    width: 9,
    position: "absolute",
  },
  headingTypo1: {
    width: 243,
    display: "flex",
    color: Color.colorCadetblue,
    fontSize: FontSize.size_21xl,
    textAlign: "center",
    fontFamily: FontFamily.nunitoExtraBold,
    fontWeight: "800",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  headingTypo: {
    color: Color.colorYellowgreen_100,
    fontSize: FontSize.size_5xl,
    width: 243,
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.nunitoExtraBold,
    fontWeight: "800",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  groupPosition: {
    width: 329,
    height: 121,
    left: 0,
    top: 0,
    position: "absolute",
  },
  groupChildShadowBox: {
    elevation: 0,
    shadowRadius: 0,
    borderRadius: 40,
    shadowOpacity: 1,
    shadowOffset: {
      width: 3,
      height: 4,
    },
  },
  groupChild4Position: {
    left: 27,
    position: "absolute",
  },
  image5Icon: {
    width: 1512,
    height: 1130,
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
  instructionScreenChild: {
    top: 41,
    left: 306,
    width: 755,
    height: 41,
    position: "absolute",
  },
  instructionScreenItem: {
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
  frameItem: {
    marginLeft: 49,
  },
  ellipseParent: {
    top: 737,
    left: 82,
    flexDirection: "row",
    position: "absolute",
  },
  instructionScreenInner: {
    top: 428,
    left: 271,
    width: 1003,
    height: 306,
    position: "absolute",
  },
  rectangleView: {
    left: 127,
    height: 438,
    width: 351,
    borderRadius: Border.br_50xl,
    top: 330,
  },
  instructionScreenChild1: {
    left: 597,
    height: 438,
    width: 351,
    borderRadius: Border.br_50xl,
    top: 330,
  },
  instructionScreenChild2: {
    left: 1067,
    height: 438,
    width: 351,
    borderRadius: Border.br_50xl,
    top: 330,
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
    shadowColor: "#fb83a7",
    shadowRadius: 17.2,
    elevation: 17.2,
  },
  card: {
    left: 210,
    shadowOpacity: 1,
    elevation: 9.4,
    shadowRadius: 9.4,
    shadowOffset: {
      width: 3,
      height: 4,
    },
    shadowColor: "rgba(235, 235, 235, 0.31)",
    top: 373,
    width: 173,
    position: "absolute",
    overflow: "hidden",
  },
  heart1: {
    shadowColor: "#39c9ec",
    shadowRadius: 20.8,
    elevation: 20.8,
  },
  card1: {
    left: 695,
    shadowOpacity: 1,
    elevation: 9.4,
    shadowRadius: 9.4,
    shadowOffset: {
      width: 3,
      height: 4,
    },
    shadowColor: "rgba(235, 235, 235, 0.31)",
    top: 373,
    width: 173,
    position: "absolute",
    overflow: "hidden",
  },
  groupChild: {
    shadowColor: "#d29901",
    backgroundColor: "#ffbc0b",
    left: 0,
    top: 0,
  },
  text: {
    top: 9,
    left: 7,
    color: Color.colorGray_100,
    fontFamily: FontFamily.nunitoExtraBold,
    fontWeight: "800",
    letterSpacing: 0.7,
    fontSize: FontSize.size_17xl,
    textAlign: "center",
  },
  groupItem: {
    top: 4,
    left: 38,
  },
  groupInner: {
    top: 48,
    left: 2,
  },
  rectangleParent: {
    top: 594,
    height: 58,
    width: 58,
    left: 127,
    position: "absolute",
  },
  instructionScreenChild3: {
    top: 620,
    shadowColor: "#c56204",
    backgroundColor: "#fb993d",
    left: 1067,
  },
  text1: {
    top: 629,
    left: 1074,
    color: Color.colorGray_100,
    fontFamily: FontFamily.nunitoExtraBold,
    fontWeight: "800",
    letterSpacing: 0.7,
    fontSize: FontSize.size_17xl,
    textAlign: "center",
  },
  ellipseIcon: {
    top: 624,
    left: 1105,
  },
  instructionScreenChild4: {
    top: 668,
    left: 1069,
  },
  instructionScreenChild5: {
    top: 613,
    shadowColor: "#8bad1d",
    backgroundColor: "#a7cd25",
    left: 597,
  },
  text2: {
    top: 622,
    left: 604,
    color: Color.colorGray_100,
    fontFamily: FontFamily.nunitoExtraBold,
    fontWeight: "800",
    letterSpacing: 0.7,
    fontSize: FontSize.size_17xl,
    textAlign: "center",
  },
  instructionScreenChild6: {
    top: 617,
    left: 635,
  },
  instructionScreenChild7: {
    top: 661,
    left: 599,
  },
  heading1: {
    left: 179,
    top: 603,
    width: 243,
    display: "flex",
    color: Color.colorCadetblue,
    fontSize: FontSize.size_21xl,
  },
  heading11: {
    left: 655,
    top: 603,
    width: 243,
    display: "flex",
    color: Color.colorCadetblue,
    fontSize: FontSize.size_21xl,
  },
  heading12: {
    top: 643,
    left: 1136,
  },
  heading13: {
    left: 183,
    top: 713,
    color: Color.colorYellowgreen_100,
    fontSize: FontSize.size_5xl,
  },
  heading14: {
    left: 652,
    top: 713,
    color: Color.colorYellowgreen_100,
    fontSize: FontSize.size_5xl,
  },
  heading15: {
    top: 616,
    left: 1123,
  },
  heading16: {
    top: 696,
    left: 1130,
  },
  groupChild1: {
    top: 203,
    left: 39,
    width: 186,
    height: 52,
    position: "absolute",
  },
  cardIcon: {
    top: 66,
    left: 86,
    width: 185,
    height: 149,
    position: "absolute",
    overflow: "hidden",
  },
  cardIcon1: {
    width: 165,
    height: 170,
    position: "absolute",
    overflow: "hidden",
  },
  ellipseGroup: {
    top: 368,
    left: 1113,
    width: 271,
    height: 255,
    position: "absolute",
  },
  cardIcon2: {
    top: 344,
    left: 242,
    width: 204,
    height: 250,
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
  groupChild2: {
    shadowColor: "#ffd540",
    backgroundColor: Color.colorKhaki,
    borderRadius: 40,
    elevation: 0,
    shadowRadius: 0,
    shadowOpacity: 1,
    shadowOffset: {
      width: 3,
      height: 4,
    },
  },
  groupChild3: {
    top: 6,
    left: 10,
    shadowColor: "#edb900",
    backgroundColor: Color.colorGold_100,
    width: 309,
    height: 100,
    borderRadius: 40,
    position: "absolute",
  },
  rectangleIcon: {
    width: 269,
    height: 44,
    top: 18,
    borderRadius: 40,
  },
  play: {
    left: 76,
    fontSize: FontSize.size_45xl_3,
    letterSpacing: 3.8,
    fontWeight: "900",
    fontFamily: FontFamily.nunitoBlack,
    color: Color.colorWhite,
    top: 18,
  },
  groupChild4: {
    top: 8,
    width: 38,
    height: 37,
  },
  polygonParent: {
    top: 794,
    left: 1078,
    width: 373,
    height: 121,
    position: "absolute",
  },
  instructionScreen: {
    flex: 1,
    height: 982,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default InstructionScreen;
