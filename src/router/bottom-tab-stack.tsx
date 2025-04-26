import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { BottomTabBarStackParamList } from "./types";
import { bottomTabScreens } from "@src/navigation/bottom-tab-screen";
import { fontFamily } from "@src/resources/fonts/font-family";
import { DVH } from "@src/resources/responsiveness";
import { Platform } from "react-native";
import { CustomText } from "@src/components/shared";

const Tab = createBottomTabNavigator<BottomTabBarStackParamList>();

export const BottomTabStack = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarLabelStyle: {
          fontFamily: fontFamily.regular,
          verticalAlign: "middle",
        },
        tabBarStyle: {
          backgroundColor: "#F9F9F9F0",
          height: Platform.OS === "ios" ? DVH(12) : DVH(10),
        },
        tabBarLabel: ({ focused }) =>
          focused ? (
            <CustomText type='regular' size={10} blue>
              {route?.name}
            </CustomText>
          ) : (
            <CustomText type='regular' size={10} style={{ color: "#4C525E" }}>
              {route?.name}
            </CustomText>
          ),
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
