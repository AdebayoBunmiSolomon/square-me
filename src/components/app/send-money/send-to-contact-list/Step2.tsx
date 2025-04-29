import { CustomText } from "@src/components/shared";
import { colors } from "@src/resources/color/color";
import { DVH, moderateScale } from "@src/resources/responsiveness";
import { Image } from "expo-image";
import React from "react";
import { StyleSheet, View } from "react-native";

export const Step2: React.FC<{}> = () => {
  return (
    <View style={styles.formContainer}>
      <View style={styles.card}>
        <CustomText type='regular' size={15} white>
          Amount
        </CustomText>
        <CustomText type='medium' size={20} white>
          NGN 5,000
        </CustomText>
      </View>
      <View style={styles.beneficiaryContainer}>
        <Image
          source={require("@src/assets/png/beneficiary-card.png")}
          style={styles.beneficiaryIcon}
          contentFit='fill'
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    gap: moderateScale(20),
  },
  card: {
    backgroundColor: colors.blue,
    borderRadius: moderateScale(10),
    paddingVertical: moderateScale(15),
    alignItems: "center",
    gap: moderateScale(7),
    marginVertical: moderateScale(30),
  },
  beneficiaryContainer: {
    width: "100%",
    height: DVH(15),
    overflow: "hidden",
  },
  beneficiaryIcon: {
    width: "100%",
    height: "100%",
  },
});
