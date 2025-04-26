import { CustomText } from "@src/components/shared";
import { DVH, moderateScale } from "@src/resources/responsiveness";
import { Image } from "expo-image";
import React from "react";
import { StyleSheet, View } from "react-native";

export const Step11: React.FC<{}> = () => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Image
          style={styles.icon}
          contentFit='contain'
          source={require("@src/assets/png/success.png")}
        />
      </View>
      <View style={styles.textContainer}>
        <CustomText type='medium' size={17} blue>
          Email added successfully!
        </CustomText>
        <CustomText type='regular' size={13} blue>
          Your email address has been added successfully.
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
