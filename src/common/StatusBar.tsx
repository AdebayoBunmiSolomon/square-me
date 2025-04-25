import React from "react";
import { Platform, StatusBar as RNStatusBar } from "react-native";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";

interface IStatusBarProps {
  style: "light" | "dark";
  bgColor: string;
}

export const StatusBar: React.FC<IStatusBarProps> = ({ style, bgColor }) => {
  return (
    <>
      {Platform.OS === "ios" ? (
        <RNStatusBar backgroundColor={"#052C22"} />
      ) : (
        <ExpoStatusBar style={style} backgroundColor={bgColor} />
      )}
    </>
  );
};
