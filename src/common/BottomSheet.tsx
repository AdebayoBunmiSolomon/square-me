import React from "react";
import SwipeModal from "@birdwingo/react-native-swipe-modal";
import { StyleProp, StyleSheet, TextStyle, View } from "react-native";
import { colors } from "@src/resources/color/color";
import { DVH, DVW, moderateScale } from "@src/resources/responsiveness";
import { KeyboardDismissal } from "@src/screens/Keyboard-Dismissal";
import { CustomText } from "@src/components/shared";

interface IBottomSheetProps {
  title: string;
  scrollEnabled?: boolean;
  titleStyle?: StyleProp<TextStyle>;
  bgColor?: string;
  modalRef: any;
  maxHeight?: number;
  onHideModal: () => void;
  children: React.ReactNode;
}

export const BottomSheet: React.FC<IBottomSheetProps> = ({
  title,
  scrollEnabled,
  titleStyle,
  modalRef,
  bgColor,
  maxHeight,
  onHideModal,
  children,
}) => {
  return (
    <SwipeModal
      scrollContainerStyle={{
        height: "90%",
      }}
      scrollEnabled={scrollEnabled}
      ref={modalRef}
      bg={bgColor || colors.white}
      style={styles.modalContainer}
      maxHeight={DVH(Number(maxHeight)) || DVH(40)}
      onHide={() => onHideModal()}>
      <KeyboardDismissal>
        {title && (
          <CustomText
            type='medium'
            size={16}
            blue
            style={[
              {
                marginTop: scrollEnabled ? undefined : moderateScale(-10),
              },
              titleStyle,
            ]}>
            {title}
          </CustomText>
        )}
        <View>{children && children}</View>
      </KeyboardDismissal>
    </SwipeModal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    borderTopLeftRadius: moderateScale(20),
    borderTopRightRadius: moderateScale(20),
    paddingHorizontal: DVW(5),
  },
});
