import { appScreenNames, bottomTabScreenNames } from "@src/navigation";
import {
  BottomTabBarStackParamList,
  RootStackScreenProps,
} from "@src/router/types";
import React from "react";
import { Screen } from "../Screen";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { colors } from "@src/resources/color/color";
import { DVH, DVW, moderateScale } from "@src/resources/responsiveness";
import { CustomText } from "@src/components/shared";
import { QuickAction, StatusBar } from "@src/common";
import { billPayment } from "@src/constants/bill-payment";
import { Image } from "expo-image";
import { fontFamily } from "@src/resources/fonts/font-family";
import { NavigationProp, useNavigation } from "@react-navigation/native";

export const BillPayment =
  ({}: RootStackScreenProps<appScreenNames.BILL_PAYMENT>) => {
    const navigation: NavigationProp<BottomTabBarStackParamList> =
      useNavigation();
    return (
      <Screen style={styles.screen} safeArea>
        <StatusBar style='dark' bgColor={colors.white} />
        <CustomText type='medium' size={20} blue>
          Payments
        </CustomText>
        <View style={styles.itemContainer}>
          {billPayment &&
            billPayment.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.moreIconBtn}
                onPress={() => {
                  navigation.navigate(item?.screen);
                }}>
                <View style={styles.moreIconContainer}>
                  <Image
                    source={item.icon}
                    contentFit='contain'
                    style={styles.moreIcon}
                  />
                </View>
                <View
                  style={{
                    gap: moderateScale(5),
                  }}>
                  <CustomText type='medium' size={15} blue>
                    {item?.title}
                  </CustomText>
                  <CustomText
                    type='regular'
                    size={15}
                    blue
                    style={{
                      maxWidth: DVW(75),
                    }}>
                    {item?.desc}
                  </CustomText>
                </View>
              </TouchableOpacity>
            ))}
        </View>
        <View style={styles.recentTransaction}>
          <QuickAction
            leftText='Recent Transactions'
            leftTextStyle={{
              color: "#656565",
              fontSize: moderateScale(14),
              fontFamily: fontFamily.medium,
            }}
          />

          <TouchableOpacity style={styles.iconContainer}>
            <Image
              source={require("@src/assets/png/withdrawal.png")}
              contentFit='contain'
              style={styles.icon}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.seeMoreBtn}>
            <Image
              source={require("@src/assets/png/see-more.png")}
              contentFit='contain'
              style={styles.seeMoreIcon}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.bannerContainer}>
          <Image
            source={require("@src/assets/png/banner.png")}
            contentFit='fill'
            style={styles.bannerImg}
          />
        </View>
      </Screen>
    );
  };

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.white,
    paddingHorizontal: moderateScale(15),
  },
  itemContainer: {
    marginTop: moderateScale(20),
  },
  moreIconContainer: {
    width: DVW(15),
    height: DVH(7.5),
    overflow: "hidden",
  },
  moreIcon: {
    width: "100%",
    height: "100%",
  },
  moreIconBtn: {
    flexDirection: "row",
    alignItems: "center",
    gap: moderateScale(15),
    paddingVertical: moderateScale(15),
    borderBottomWidth: DVW(0.2),
    borderBottomColor: "#deefef",
  },
  iconContainer: {
    width: "100%",
    height: DVH(10),
    overflow: "hidden",
  },
  icon: {
    width: "100%",
    height: "100%",
  },
  recentTransaction: {
    paddingVertical: moderateScale(30),
    gap: moderateScale(10),
  },
  seeMoreBtn: {
    width: DVW(20),
    height: DVH(10),
    overflow: "hidden",
    alignSelf: "center",
  },
  seeMoreIcon: {
    width: "100%",
    height: "100%",
  },
  bannerContainer: {
    width: "100%",
    height: DVH(25),
    overflow: "hidden",
    alignSelf: "center",
  },
  bannerImg: {
    width: "100%",
    height: "100%",
  },
});
