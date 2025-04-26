import { StatusBar } from "@src/common";
import { CustomText } from "@src/components/shared";
import { bottomTabScreenNames } from "@src/navigation";
import { colors } from "@src/resources/color/color";
import { moderateScale } from "@src/resources/responsiveness";
import { BottomTabBarScreenProps } from "@src/router/types";
import { Screen } from "@src/screens/Screen";
import React from "react";
import { StyleSheet } from "react-native";

export const More =
  ({}: BottomTabBarScreenProps<bottomTabScreenNames.MORE>) => {
    return (
      <Screen style={styles.screen} safeArea>
        <StatusBar style='dark' bgColor={colors.white} />
        <CustomText type='regular' size={14}>
          More Screen
        </CustomText>
      </Screen>
    );
  };

const styles = StyleSheet.create({
  screen: {
    backgroundColor: "#FFFFFF",
    paddingHorizontal: moderateScale(15),
  },
});
