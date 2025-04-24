import { colors } from "@src/resources/color/color";
import { fontFamily } from "@src/resources/fonts/font-family";
import { textType } from "../text/CustomText";

export const useCustomText = () => {
  const getFontFamily = (type: textType) => {
    if (type === "bold") {
      return fontFamily.bold;
    } else if (type === "semi-bold") {
      return fontFamily.semi_bold;
    } else if (type === "light") {
      return fontFamily.light;
    } else if (type === "extra-light") {
      return fontFamily.extra_light;
    } else if (type === "medium") {
      return fontFamily.medium;
    } else if (type === "regular") {
      return fontFamily.regular;
    } else if (type === "variable") {
      return fontFamily.variable;
    }
  };

  const getTextColor = (
    blue?: boolean,
    lightSkyBlue?: boolean,
    lightPurple?: boolean,
    black?: boolean,
    gray?: boolean,
    lightGreen?: boolean,
    white?: boolean,
    danger?: boolean
  ) => {
    if (blue) {
      return colors?.blue;
    } else if (lightSkyBlue) {
      return colors.lightSkyBlue;
    } else if (lightPurple) {
      return colors.lightPurple;
    } else if (black) {
      return colors.black;
    } else if (gray) {
      return colors.gray;
    } else if (lightGreen) {
      return colors.lightGreen;
    } else if (white) {
      return colors.white;
    } else if (danger) {
      return colors.danger;
    }
  };

  return {
    getFontFamily,
    getTextColor,
  };
};
