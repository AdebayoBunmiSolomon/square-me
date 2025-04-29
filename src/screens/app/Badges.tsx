import { appScreenNames } from "@src/navigation";
import { RootStackScreenProps } from "@src/router/types";
import React from "react";
import { Screen } from "../Screen";
import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import { DVH, DVW, moderateScale } from "@src/resources/responsiveness";
import { colors } from "@src/resources/color/color";
import { ActionHeader, QuickAction, StatusBar } from "@src/common";
import { Image } from "expo-image";
import { Info } from "lucide-react-native";
import { CustomText } from "@src/components/shared";
import { badges } from "@src/constants/badges";

export const Badges = ({
  navigation,
}: RootStackScreenProps<appScreenNames.BADGES>) => {
  return (
    <Screen safeArea style={styles.screen}>
      <StatusBar bgColor={colors.white} style='dark' />
      <ActionHeader
        title='Badges'
        desc=''
        onPressBackArrow={() => navigation.goBack()}
      />
      <View style={styles.cupIconContainer}>
        <Image
          source={require("@src/assets/png/cup.png")}
          style={styles.cupIcon}
          contentFit='fill'
        />
      </View>
      <View style={styles.cupIconContainer}>
        <Image
          source={require("@src/assets/png/rewards.png")}
          style={styles.cupIcon}
          contentFit='fill'
        />
      </View>
      <View style={styles.beginnerIconContainer}>
        <Image
          source={require("@src/assets/png/beginner-level.png")}
          style={styles.cupIcon}
          contentFit='fill'
        />
      </View>
      <TouchableOpacity style={styles.beginnerIconContainer}>
        <Image
          source={require("@src/assets/png/my-rewards.png")}
          style={styles.cupIcon}
          contentFit='fill'
        />
      </TouchableOpacity>
      <View style={styles.infoContainer}>
        <Info color={colors.lightPurple} size={moderateScale(17)} />
        <CustomText type='regular' size={12}>
          Note: Your rewards will expire on 31st December, 2024
        </CustomText>
      </View>
      <View style={styles.quickActionContainer}>
        <QuickAction leftText='Explore Badges' />
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            flexGrow: 1,
            marginVertical: moderateScale(20),
          }}>
          {badges &&
            badges.map((item, index) => (
              <TouchableOpacity key={index} style={styles.badgeBtn}>
                <Image
                  source={item}
                  contentFit='fill'
                  style={styles.badgeIcon}
                />
              </TouchableOpacity>
            ))}
        </ScrollView>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  screen: {
    paddingHorizontal: moderateScale(15),
    backgroundColor: colors.white,
  },
  cupIconContainer: {
    width: DVW(30),
    height: DVH(15),
    overflow: "hidden",
    alignSelf: "center",
  },
  cupIcon: {
    width: "100%",
    height: "100%",
  },
  beginnerIconContainer: {
    width: "100%",
    height: DVH(9),
    alignSelf: "center",
    marginTop: moderateScale(20),
  },
  infoContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: moderateScale(5),
    paddingVertical: moderateScale(10),
  },
  quickActionContainer: {
    paddingVertical: moderateScale(20),
  },
  badgeBtn: {
    width: DVW(20),
    height: DVH(13),
    overflow: "hidden",
    marginHorizontal: moderateScale(10),
  },
  badgeIcon: {
    width: "100%",
    height: "100%",
  },
});
