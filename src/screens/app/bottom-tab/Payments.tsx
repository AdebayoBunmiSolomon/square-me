import { CustomText } from "@src/components/shared";
import { bottomTabScreenNames } from "@src/navigation";
import { moderateScale } from "@src/resources/responsiveness";
import { BottomTabBarScreenProps } from "@src/router/types";
import { Screen } from "@src/screens/Screen";
import React from "react";
import { StyleSheet } from "react-native";

export const Payments =
  ({}: BottomTabBarScreenProps<bottomTabScreenNames.PAYMENTS>) => {
    return (
      <Screen style={styles.screen} safeArea>
        <CustomText type='regular' size={14}>
          Payments Screen
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
