import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { BottomTabBarStackParamList } from "./types";
import { bottomTabScreens } from "@src/navigation/bottom-tab-screen";
import { fontFamily } from "@src/resources/fonts/font-family";
import { DVH, moderateScale } from "@src/resources/responsiveness";
import { Platform } from "react-native";
import { CustomText } from "@src/components/shared";
import { bottomTabScreenNames } from "@src/navigation";
import {
  Banknote,
  Home,
  House,
  MessageSquareMore,
  UserRound,
} from "lucide-react-native";
import { colors } from "@src/resources/color/color";

const Tab = createBottomTabNavigator<BottomTabBarStackParamList>();

export const BottomTabStack = () => {
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
          focused && route.name === bottomTabScreenNames.HOME ? (
            <House color={"#8B9DC7"} size={moderateScale(25)} />
          ) : !focused && route.name === bottomTabScreenNames.HOME ? (
            <House color={"#4C525E"} size={moderateScale(25)} />
          ) : focused && route.name === bottomTabScreenNames.PAYMENTS ? (
            <Banknote color={"#8B9DC7"} size={moderateScale(25)} />
          ) : !focused && route.name === bottomTabScreenNames.PAYMENTS ? (
            <Banknote color={"#4A4A4A"} size={moderateScale(25)} />
          ) : focused && route.name === bottomTabScreenNames.MORE ? (
            <MessageSquareMore color={"#8B9DC7"} size={moderateScale(25)} />
          ) : !focused && route.name === bottomTabScreenNames.MORE ? (
            <MessageSquareMore color={"#4A4A4A"} size={moderateScale(25)} />
          ) : focused && route.name === bottomTabScreenNames.PROFILE ? (
            <UserRound color={"#8B9DC7"} size={moderateScale(25)} />
          ) : !focused && route.name === bottomTabScreenNames.PROFILE ? (
            <UserRound color={"#4A4A4A"} size={moderateScale(25)} />
          ) : undefined,
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
