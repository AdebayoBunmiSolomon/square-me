import { StatusBar } from "@src/common";
import { CustomText } from "@src/components/shared";
import { profileSettings } from "@src/constants/profile-settings";
import { useAuthStore } from "@src/hooks/zustand";
import { bottomTabScreenNames } from "@src/navigation";
import { colors } from "@src/resources/color/color";
import { DVH, DVW, moderateScale } from "@src/resources/responsiveness";
import { BottomTabBarScreenProps } from "@src/router/types";
import { Screen } from "@src/screens/Screen";
import { Image } from "expo-image";
import { ChevronRight, LogOut } from "lucide-react-native";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

export const Profile = ({
  navigation,
}: BottomTabBarScreenProps<bottomTabScreenNames.PROFILE>) => {
  const { setIsAuthenticated } = useAuthStore();
  return (
    <Screen style={styles.screen} safeArea>
      <StatusBar style='dark' bgColor={colors.white} />
      <CustomText type='medium' size={20} blue>
        Profile
      </CustomText>
      <TouchableOpacity style={styles.profileHeadContainer}>
        <Image
          source={require("@src/assets/png/profile.png")}
          contentFit='fill'
          style={styles.profileHeadImg}
        />
      </TouchableOpacity>
      <View style={styles.itemContainer}>
        {profileSettings &&
          profileSettings.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.itemBtn}
              onPress={() => navigation.navigate(item?.navigation)}>
              <View style={styles.iconTitleContainer}>
                <View style={styles.iconContainer}>
                  <Image
                    source={item?.icon}
                    contentFit='cover'
                    style={styles.icon}
                  />
                </View>
                <CustomText type='regular' size={17} blue>
                  {item?.title}
                </CustomText>
              </View>
              <ChevronRight color={"#B7BABF"} size={moderateScale(20)} />
            </TouchableOpacity>
          ))}
      </View>
      <View style={styles.bottomActionContainer}>
        <TouchableOpacity
          style={styles.logOutBtn}
          onPress={() => setIsAuthenticated(false)}>
          <LogOut color={"#F04438"} size={moderateScale(20)} />
          <CustomText
            type='medium'
            size={17}
            style={{
              color: "#F04438",
            }}>
            Log out
          </CustomText>
        </TouchableOpacity>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: "#FFFFFF",
    paddingHorizontal: moderateScale(15),
  },
  profileHeadContainer: {
    width: "100%",
    height: DVH(7),
    overflow: "hidden",
    marginVertical: moderateScale(20),
  },
  profileHeadImg: {
    width: "100%",
    height: "100%",
  },
  iconContainer: {
    width: DVW(8),
    height: DVH(4),
    overflow: "hidden",
  },
  icon: {
    width: "100%",
    height: "100%",
  },
  iconTitleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: moderateScale(10),
  },
  itemBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: moderateScale(7),
  },
  itemContainer: {
    gap: moderateScale(15),
  },
  bottomActionContainer: {
    position: "absolute",
    bottom: moderateScale(20),
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  logOutBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: moderateScale(12),
  },
});
