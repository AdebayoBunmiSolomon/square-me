import { appScreenNames } from "@src/navigation";
import { RootStackScreenProps } from "@src/router/types";
import React from "react";
import { Screen } from "../Screen";
import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import { DVH, DVW, moderateScale } from "@src/resources/responsiveness";
import { colors } from "@src/resources/color/color";
import { ActionHeader, StatusBar } from "@src/common";
import { CustomText } from "@src/components/shared";
import { rewards } from "@src/constants/badges";
import { Image } from "expo-image";

export const Rewards = ({
  navigation,
}: RootStackScreenProps<appScreenNames.REWARDS>) => {
  return (
    <Screen safeArea style={styles.screen}>
      <StatusBar bgColor={colors.white} style='dark' />
      <ActionHeader
        title='My Rewards'
        onPressBackArrow={() => navigation.goBack()}
      />
      <View
        style={{
          gap: moderateScale(15),
        }}>
        <CustomText type='medium' size={20} style={{ color: "#23262F" }}>
          Hello, Gift
        </CustomText>
        <View style={styles.tittleContainer}>
          <CustomText
            type='regular'
            size={14}
            style={{
              color: "#70747E",
            }}>
            You are at
          </CustomText>
          <CustomText type='medium' size={15} lightPurple>
            Beginner Level
          </CustomText>
        </View>
      </View>
      <View style={styles.totalPointsContainer}>
        <CustomText type='light' size={12} style={{ color: "#23262F" }}>
          Total Points: 200
        </CustomText>
      </View>
      <View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            flexGrow: 1,
          }}>
          {rewards &&
            rewards.map((item, index) => (
              <TouchableOpacity key={index} style={styles.rewardBtn}>
                <Image
                  source={item}
                  contentFit='fill'
                  style={styles.rewardIcon}
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
  tittleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: moderateScale(5),
  },
  totalPointsContainer: {
    paddingVertical: moderateScale(10),
  },
  rewardBtn: {
    width: "47%",
    height: DVH(40),
    overflow: "hidden",
    marginRight: moderateScale(20),
    marginVertical: moderateScale(30),
  },
  rewardIcon: {
    width: "100%",
    height: "100%",
  },
});
