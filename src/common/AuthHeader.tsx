import { DVH, DVW, moderateScale } from "@src/resources/responsiveness";
import { Image } from "expo-image";
import React from "react";
import {
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import { CircleHelp, MoveLeft } from "lucide-react-native";
import { colors } from "@src/resources/color/color";
import { CustomText } from "@src/components/shared";

interface IIconHeaderProps {
  title?: string;
  desc?: string;
  textContainerStyle?: StyleProp<ViewStyle>;
}

export const IconHeader: React.FC<IIconHeaderProps> = ({
  title,
  desc,
  textContainerStyle,
}) => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.iconContainer}>
          <Image
            source={require("@src/assets/png/icon-header.png")}
            style={styles.icon}
            contentFit='contain'
          />
        </View>
        <CircleHelp color={colors.blue} />
      </View>
      <View style={[styles.textContainer, textContainerStyle]}>
        <CustomText type='medium' size={20} blue>
          {title}
        </CustomText>
        <CustomText type='regular' size={15} blue>
          {desc}
        </CustomText>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: moderateScale(20),
  },
  icon: {
    width: "100%",
    height: "100%",
  },
  iconContainer: {
    height: DVH(5),
    width: "45%",
  },
  textContainer: {
    gap: moderateScale(5),
  },
});

interface IActionHeaderProps {
  onPressBackArrow: () => void;
  title?: string;
  desc?: string;
}

export const ActionHeader: React.FC<IActionHeaderProps> = ({
  onPressBackArrow,
  title,
  desc,
}) => {
  return (
    <>
      <View style={actionHeaderStyles.container}>
        <TouchableOpacity
          onPress={onPressBackArrow}
          style={actionHeaderStyles.arrowBtn}>
          <MoveLeft color={colors.blue} size={moderateScale(25)} />
        </TouchableOpacity>
        <CustomText type='medium' size={20} blue>
          {title}
        </CustomText>
      </View>
      {desc && (
        <CustomText type='regular' size={15} blue>
          {desc}
        </CustomText>
      )}
    </>
  );
};

const actionHeaderStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: moderateScale(30),
    paddingBottom: moderateScale(30),
  },
  arrowBtn: {
    paddingVertical: moderateScale(2),
  },
});
