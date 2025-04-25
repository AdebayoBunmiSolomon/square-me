import { CustomText } from "@src/components/shared";
import { moderateScale } from "@src/resources/responsiveness";
import React from "react";
import { ViewStyle } from "react-native";
import {
  StyleProp,
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  View,
} from "react-native";

interface IActionTextProps {
  leftText?: string;
  actionText?: string;
  leftTextStyle?: StyleProp<TextStyle>;
  actionTextStyle?: StyleProp<TextStyle>;
  onPressAction?: () => void;
  actionContainerStyle?: StyleProp<ViewStyle>;
}

export const ActionText: React.FC<IActionTextProps> = ({
  leftText,
  actionText,
  leftTextStyle,
  actionTextStyle,
  onPressAction,
  actionContainerStyle,
}) => {
  return (
    <View style={[styles.actionContainer, actionContainerStyle]}>
      {leftText && (
        <CustomText type='regular' size={15} blue style={leftTextStyle}>
          {leftText}
        </CustomText>
      )}
      {actionText && (
        <TouchableOpacity onPress={onPressAction}>
          <CustomText
            type='regular'
            size={15}
            lightPurple
            style={actionTextStyle}>
            {actionText}
          </CustomText>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  actionContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: moderateScale(5),
  },
});
