import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { BottomTabBarStackParamList } from "./types";
import { bottomTabScreens } from "@src/navigation/bottom-tab-screen";
import { DVH, DVW } from "@src/resources/responsiveness";
import { ImageSourcePropType, Platform, StyleSheet, View } from "react-native";
import { CustomText } from "@src/components/shared";
import { bottomTabScreenNames } from "@src/navigation";
import { Image } from "expo-image";

const Tab = createBottomTabNavigator<BottomTabBarStackParamList>();

export const BottomTabStack = () => {
  const renderBottomTabIcon = (src: ImageSourcePropType) => {
    return (
      <View style={styles.iconContainer}>
        <Image source={src} contentFit='cover' style={styles.icon} />
      </View>
    );
  };

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#F9F9F9F0",
          height: Platform.OS === "ios" ? DVH(12) : DVH(9),
        },
        tabBarLabel: ({ focused }) =>
          focused ? (
            <CustomText type='medium' size={13} blue>
              {route?.name}
            </CustomText>
          ) : (
            <CustomText type='regular' size={13} style={{ color: "#4C525E" }}>
              {route?.name}
            </CustomText>
          ),
        tabBarIcon: ({ focused }) =>
          focused && route.name === bottomTabScreenNames.HOME
            ? renderBottomTabIcon(
                require("@src/assets/png/bottom-tab/home-focused.png")
              )
            : !focused && route.name === bottomTabScreenNames.HOME
            ? renderBottomTabIcon(
                require("@src/assets/png/bottom-tab/home-nfocused.png")
              )
            : focused && route.name === bottomTabScreenNames.PAYMENTS
            ? renderBottomTabIcon(
                require("@src/assets/png/bottom-tab/payments-focused.png")
              )
            : !focused && route.name === bottomTabScreenNames.PAYMENTS
            ? renderBottomTabIcon(
                require("@src/assets/png/bottom-tab/payments-nfocused.png")
              )
            : focused && route.name === bottomTabScreenNames.MORE
            ? renderBottomTabIcon(
                require("@src/assets/png/bottom-tab/more-focused.png")
              )
            : !focused && route.name === bottomTabScreenNames.MORE
            ? renderBottomTabIcon(
                require("@src/assets/png/bottom-tab/more-nfocused.png")
              )
            : focused && route.name === bottomTabScreenNames.PROFILE
            ? renderBottomTabIcon(
                require("@src/assets/png/bottom-tab/profile-focused.png")
              )
            : !focused && route.name === bottomTabScreenNames.PROFILE
            ? renderBottomTabIcon(
                require("@src/assets/png/bottom-tab/profile-nfocused.png")
              )
            : undefined,
      })}>
      {bottomTabScreens &&
        bottomTabScreens.map((screen, index) => (
          <Tab.Screen
            name={screen.screenName}
            key={index}
            component={screen.component}
          />
        ))}
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    width: DVW(7),
    height: DVH(3.5),
    overflow: "hidden",
  },
  icon: {
    width: "100%",
    height: "100%",
  },
});
