import { CustomText } from "@src/components/shared";
import { DVH, moderateScale } from "@src/resources/responsiveness";
import { Image } from "expo-image";
import React from "react";
import { StyleSheet, View } from "react-native";

export const Step8: React.FC<{}> = () => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Image
          style={styles.icon}
          contentFit='contain'
          source={require("@src/assets/png/email.png")}
        />
      </View>
      <View style={styles.textContainer}>
        <CustomText type='semi-bold' size={24} blue>
          Stay in the Loop!
        </CustomText>
        <CustomText
          type='regular'
          size={15}
          blue
          style={{
            textAlign: "center",
            lineHeight: moderateScale(22),
          }}>
          {
            "Get ready to be the first to know about all the cool stuff happening at Squareme! From new features and product updates to exclusive offers and insider tips, we’ll make sure you’re always ahead of the curve.Excited to stay connected? Just hit the button below and let us keep you in the know!"
          }
        </CustomText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  iconContainer: {
    width: "50%",
    height: DVH(20),
    alignSelf: "center",
    marginBottom: moderateScale(20),
  },
  icon: {
    width: "100%",
    height: "100%",
  },
  textContainer: {
    justifyContent: "center",
    alignItems: "center",
    gap: moderateScale(10),
  },
});
