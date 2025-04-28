import { CustomText } from "@src/components/shared";
import React from "react";
import {
  StyleProp,
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  View,
} from "react-native";

interface IQuickActionProps {
  leftText?: string;
  actionText?: string;
  onPressActionText?: () => void;
  leftTextStyle?: StyleProp<TextStyle>;
  actionTextStyle?: StyleProp<TextStyle>;
}

export const QuickAction: React.FC<IQuickActionProps> = ({
  leftText,
  actionText,
  onPressActionText,
  leftTextStyle,
  actionTextStyle,
}) => {
  return (
    <View style={styles.quickActionContainer}>
      <CustomText type='medium' size={17} black style={leftTextStyle}>
        {leftText}
      </CustomText>
      <TouchableOpacity onPress={onPressActionText}>
        <CustomText type='medium' size={14} lightPurple style={actionTextStyle}>
          {actionText}
        </CustomText>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  quickActionContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
