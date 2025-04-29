import { ActionHeader, StatusBar } from "@src/common";
import { CustomText } from "@src/components/shared";
import { request } from "@src/constants/more";
import { appScreenNames, bottomTabScreenNames } from "@src/navigation";
import { colors } from "@src/resources/color/color";
import { DVH, DVW, moderateScale } from "@src/resources/responsiveness";
import { BottomTabBarScreenProps } from "@src/router/types";
import { Screen } from "@src/screens/Screen";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Image } from "expo-image";

export const Payments = ({
  navigation,
}: BottomTabBarScreenProps<bottomTabScreenNames.PAYMENTS>) => {
  return (
    <Screen style={styles.screen} safeArea>
      <StatusBar style='dark' bgColor={colors.white} />
      <ActionHeader
        title='Request'
        onPressBackArrow={() => navigation.goBack()}
      />
      <View style={styles.itemContainer}>
        {request &&
          request.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.moreIconBtn}
              onPress={() => {
                if (index === 0) {
                  navigation.navigate(appScreenNames.REQUEST_USING_SQUARE_TAG);
                } else if (index === 1) {
                  navigation.navigate(appScreenNames.REQUEST_USING_BENEFICIARY);
                } else if (index === 2) {
                  navigation.navigate(
                    appScreenNames.REQUEST_USING_CONTACT_LIST
                  );
                }
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
                  size={14}
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
    </Screen>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: "#FFFFFF",
    paddingHorizontal: moderateScale(15),
  },
  itemContainer: {
    marginTop: moderateScale(0),
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
});
