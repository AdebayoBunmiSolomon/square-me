import React from "react";
import { StyleProp, Text, TextStyle } from "react-native";
import { useCustomText } from "../hooks";
import { moderateScale } from "@src/resources/responsiveness";

export type textType =
  | "bold"
  | "semi-bold"
  | "light"
  | "extra-light"
  | "medium"
  | "regular"
  | "variable";

interface ICustomTextProps {
  children: React.ReactNode;
  size: number;
  type?: textType;
  blue?: boolean;
  lightSkyBlue?: boolean;
  lightPurple?: boolean;
  black?: boolean;
  gray?: boolean;
  lightGreen?: boolean;
  white?: boolean;
  danger?: boolean;
  style?: StyleProp<TextStyle>;
}

export const CustomText: React.FC<ICustomTextProps> = ({
  children,
  size,
  type,
  blue,
  lightSkyBlue,
  lightPurple,
  black,
  gray,
  lightGreen,
  white,
  danger,
  style,
}) => {
  const { getFontFamily, getTextColor } = useCustomText();
  const fontFamily = getFontFamily(type ? type : "regular");
  const textColor = getTextColor(
    blue,
    lightSkyBlue,
    lightPurple,
    black,
    gray,
    lightGreen,
    white,
    danger
  );
  return (
    <Text
      style={[
        {
          fontFamily: fontFamily,
          fontSize: moderateScale(size),
          color: textColor,
        },
        style,
      ]}>
      {children && children}
    </Text>
  );
};
