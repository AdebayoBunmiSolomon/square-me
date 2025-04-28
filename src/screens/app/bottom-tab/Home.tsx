import { QuickAction, StatusBar } from "@src/common";
import { AccountCard, HomeHeader } from "@src/components/app/home";
import { quickActions, suggestedActions } from "@src/constants/quickActions";
import { bottomTabScreenNames } from "@src/navigation";
import { colors } from "@src/resources/color/color";
import { DVH, DVW, moderateScale } from "@src/resources/responsiveness";
import { BottomTabBarScreenProps } from "@src/router/types";
import { Screen } from "@src/screens/Screen";
import React, { useState } from "react";
import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import { Image } from "expo-image";
import { ScrollContainer } from "@src/screens/Scroll-Container";
import { transactions } from "@src/constants/transactions";
import { CustomText } from "@src/components/shared";

export const Home =
  ({}: BottomTabBarScreenProps<bottomTabScreenNames.HOME>) => {
    const [seeMore, setSeeMore] = useState<boolean>(false);
    return (
      <Screen style={styles.screen} safeArea>
        <StatusBar style='dark' bgColor={colors.white} />
        <HomeHeader />
        <ScrollContainer>
          <AccountCard />
          <QuickAction
            leftText='Quick Actions'
            actionText={seeMore ? "See Less" : "See More"}
            onPressActionText={() => setSeeMore(!seeMore)}
          />
          <View style={styles.quickActionIconContainer}>
            {quickActions &&
              (!seeMore ? quickActions.slice(0, 4) : quickActions).map(
                (item, index) => (
                  <TouchableOpacity
                    key={index}
                    style={styles.quickActionsIconBtn}>
                    <Image
                      source={item.image}
                      contentFit='contain'
                      style={styles.quickActionsIcon}
                    />
                  </TouchableOpacity>
                )
              )}
          </View>
          <View>
            <QuickAction
              leftText='Transactions'
              actionText={"View all"}
              onPressActionText={() => {}}
            />
            <View style={styles.transCard}>
              {transactions &&
                transactions.map((item, index) => (
                  <TouchableOpacity key={index} style={styles.itemContainer}>
                    <View style={styles.imgNTitleContainer}>
                      <Image
                        source={require("@src/assets/png/transaction.png")}
                        contentFit='contain'
                        style={styles.transIcon}
                      />
                      <View
                        style={{
                          gap: moderateScale(5),
                        }}>
                        <CustomText type='regular' black size={15}>
                          {item.title}
                        </CustomText>
                        <CustomText
                          type='regular'
                          style={{
                            color: "#70747E",
                          }}
                          size={13}>
                          {item.date}
                        </CustomText>
                      </View>
                    </View>
                    <View
                      style={{
                        gap: moderateScale(7),
                      }}>
                      <CustomText type='regular' size={15}>
                        {item.type === "plus" ? "+" : "-"}
                        NGN {item.amount}
                      </CustomText>
                      <CustomText
                        type='regular'
                        style={{
                          color: item.type === "plus" ? "#00B300" : "#FF0000",
                          textAlign: "right",
                        }}
                        size={13}>
                        {item.status}
                      </CustomText>
                    </View>
                  </TouchableOpacity>
                ))}
            </View>
          </View>
          <View style={styles.suggestedActionContainer}>
            <QuickAction
              leftText='Suggested actions'
              actionText={""}
              onPressActionText={() => {}}
            />
            <ScrollView
              contentContainerStyle={{
                flexGrow: 1,
                paddingHorizontal: moderateScale(10),
              }}
              horizontal
              showsHorizontalScrollIndicator={false}>
              {suggestedActions &&
                suggestedActions.map((item, index) => (
                  <TouchableOpacity
                    key={index}
                    style={[
                      styles.suggestedActionBtn,
                      {
                        backgroundColor: index === 0 ? "#F9F9F9" : "#D7E5FF",
                      },
                    ]}>
                    <CustomText
                      type='medium'
                      size={15}
                      style={{
                        color: "#2E3A59",
                        maxWidth: "90%",
                      }}>
                      {item.title}
                    </CustomText>
                    <View style={styles.suggestedActionImgContainer}>
                      <Image
                        source={item?.image}
                        contentFit='cover'
                        style={styles.suggestedActionImgIcon}
                      />
                    </View>
                  </TouchableOpacity>
                ))}
            </ScrollView>
          </View>
        </ScrollContainer>
      </Screen>
    );
  };

const styles = StyleSheet.create({
  screen: {
    backgroundColor: "#FFFFFF",
    paddingHorizontal: moderateScale(15),
  },
  quickActionIconContainer: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingVertical: moderateScale(10),
  },
  quickActionsIconBtn: {
    width: DVW(20),
    height: DVH(10),
    overflow: "hidden",
    marginBottom: moderateScale(10),
  },
  quickActionsIcon: {
    width: "100%",
    height: "100%",
  },
  transCard: {
    paddingVertical: moderateScale(10),
    paddingHorizontal: moderateScale(10),
    backgroundColor: colors.white,
    borderRadius: moderateScale(10),
    shadowOpacity: 15,
    shadowRadius: 20,
    elevation: 6,
    marginTop: moderateScale(15),
    marginBottom: moderateScale(15),
  },
  transIcon: {
    width: DVW(15),
    height: DVH(7.5),
  },
  imgNTitleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: moderateScale(10),
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: moderateScale(10),
  },
  suggestedActionContainer: {
    paddingVertical: moderateScale(10),
    marginBottom: moderateScale(20),
  },
  suggestedActionImgContainer: {
    width: DVW(50),
    height: DVH(25),
    overflow: "hidden",
  },
  suggestedActionImgIcon: {
    width: "100%",
    height: "100%",
  },
  suggestedActionBtn: {
    marginVertical: moderateScale(20),
    paddingVertical: moderateScale(10),
    width: DVW(60),
    borderRadius: moderateScale(10),
    paddingHorizontal: moderateScale(10),
    marginRight: moderateScale(20),
  },
});
