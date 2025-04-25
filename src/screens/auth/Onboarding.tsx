import React, { useState } from "react";
import { CustomButton, CustomText } from "@src/components/shared";
import { StyleSheet, View } from "react-native";
import { AuthScreenProps } from "@src/router/types";
import { authScreenNames } from "@src/navigation/navigation-names";
import { colors } from "@src/resources/color/color";
import {
  DVH,
  DVW,
  moderateScale,
  screenWidth,
} from "@src/resources/responsiveness";
import { onboarding } from "@src/constants/onboarding";
import ReanimatedCarousel from "react-native-reanimated-carousel";
import { Image } from "expo-image";
import { StatusBar } from "@src/common";

export const Onboarding = ({
  navigation,
}: AuthScreenProps<authScreenNames.ONBOARDING>) => {
  const [currIndex, setCurrIndex] = useState<number>(0);
  return (
    <>
      <StatusBar style='dark' bgColor={colors.white} />
      <View
        style={{
          width: "100%",
          height: "55%",
        }}>
        <ReanimatedCarousel
          data={onboarding}
          renderItem={({ item, index }) => (
            <Image
              key={index}
              source={item?.image}
              contentFit='cover'
              style={{
                width: "100%",
                height: "100%",
              }}
            />
          )}
          onSnapToItem={(index) => setCurrIndex(index)}
          pagingEnabled={true}
          width={screenWidth}
          loop={true}
          scrollAnimationDuration={500}
          autoPlay
          autoPlayInterval={3000}
        />
      </View>
      <View style={styles.overLayContainer}>
        <View style={styles.carouselIndicatorContainer}>
          {onboarding &&
            onboarding.map((__, index) => (
              <View
                key={index}
                style={{
                  height: DVH(0.7),
                  width: DVW(7),
                  borderRadius: moderateScale(5),
                  backgroundColor:
                    currIndex === index ? colors.blue : "#DEDEDE",
                }}
              />
            ))}
        </View>
        <CustomText type='semi-bold' size={24} blue>
          {onboarding[currIndex].topTitle}
        </CustomText>
        <CustomText type='semi-bold' size={24} blue>
          {onboarding[currIndex].bottomTitle}
        </CustomText>
        <View style={styles.descContainer}>
          <CustomText
            type='light'
            size={14}
            style={{
              color: "#4C525E",
            }}>
            {onboarding[currIndex].description}
          </CustomText>
        </View>
        <CustomButton
          buttonType='Solid'
          title='Create an account'
          textType='light'
          textSize={15}
          onPress={() => navigation.navigate(authScreenNames.SIGN_UP)}
          blue
          textWhite
          btnStyle={{
            marginBottom: moderateScale(10),
          }}
        />
        <CustomButton
          buttonType='Outline'
          title='I already have an account'
          textType='regular'
          textSize={15}
          onPress={() => navigation.navigate(authScreenNames.LOGIN)}
          textBlue
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: moderateScale(0),
  },
  overLayContainer: {
    position: "absolute",
    bottom: moderateScale(0),
    width: "100%",
    height: "45%",
    alignItems: "center",
    backgroundColor: colors.white,
    paddingVertical: moderateScale(30),
    gap: moderateScale(7),
    paddingHorizontal: moderateScale(5),
  },
  descContainer: {
    paddingVertical: moderateScale(20),
  },
  carouselIndicatorContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: moderateScale(5),
    paddingVertical: moderateScale(10),
  },
});
