import * as React from "react";
import { ImageBackground, StyleSheet } from "react-native";

const Image1 = () => {
  return (
    <ImageBackground
      style={styles.image5Icon}
      resizeMode="cover"
      source={require("../assets/image5.png")}
    />
  );
};

const styles = StyleSheet.create({
  image5Icon: {
    flex: 1,
    width: "100%",
    height: 1130,
    display: "none",
  },
});

export default Image1;
