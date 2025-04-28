import { StatusBar } from "@src/common";
import { appScreenNames } from "@src/navigation";
import { colors } from "@src/resources/color/color";
import { RootStackScreenProps } from "@src/router/types";
import { Screen } from "../Screen";
import { StyleSheet } from "react-native";
import { moderateScale } from "@src/resources/responsiveness";

export const Notifications =
  ({}: RootStackScreenProps<appScreenNames.NOTIFICATIONS>) => {
    return (
      <Screen style={styles.screen}>
        <StatusBar bgColor={colors.white} style='dark' />
      </Screen>
    );
  };

const styles = StyleSheet.create({
  screen: {
    backgroundColor: "#FFFFFF",
    paddingHorizontal: moderateScale(15),
  },
});
