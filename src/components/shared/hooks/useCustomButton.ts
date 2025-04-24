import { colors } from "@src/resources/color/color";

export const useCustomButton = () => {
  const getButtonColor = (
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
    getButtonColor,
  };
};
