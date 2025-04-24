import React from "react";
import { Screen } from "./Screen";
import { DVH, screenHeight, screenWidth } from "@src/resources/responsiveness";
import { Loader } from "@src/common";
import { colors } from "@src/resources/color/color";
import { StyleSheet, View } from "react-native";
import { Image } from "expo-image";

export const AppLoader = () => {
  return (
    <Screen
      bgColor={colors.blue}
      style={{
        width: screenWidth,
        height: screenHeight,
        justifyContent: "center",
        alignItems: "center",
      }}>
      <View style={loaderStyles.iconContainer}>
        <Image
          source={require("@src/assets/png/app-icon.png")}
          contentFit='contain'
          style={loaderStyles.icon}
        />
      </View>
      <View style={loaderStyles.container}>
        <Loader size='large' color={colors.white} />
      </View>
    </Screen>
  );
};

const loaderStyles = StyleSheet.create({
  container: {
    height: "10%",
  },
  iconContainer: {
    width: "50%",
    height: DVH(10),
  },
  icon: {
    width: "100%",
    height: "100%",
  },
});
