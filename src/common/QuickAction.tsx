import { CustomText } from "@src/components/shared";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

interface IQuickActionProps {
  leftText: string;
  actionText: string;
  onPressActionText: () => void;
}

export const QuickAction: React.FC<IQuickActionProps> = ({
  leftText,
  actionText,
  onPressActionText,
}) => {
  return (
    <View style={styles.quickActionContainer}>
      <CustomText type='medium' size={17} black>
        {leftText}
      </CustomText>
      <TouchableOpacity onPress={onPressActionText}>
        <CustomText type='medium' size={14} lightPurple>
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
