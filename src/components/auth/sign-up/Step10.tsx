import { CustomOTPInput, CustomText } from "@src/components/shared";
import { DVH, moderateScale } from "@src/resources/responsiveness";
import { Image } from "expo-image";
import React, { useState } from "react";
import { Controller } from "react-hook-form";
import { StyleSheet, TouchableOpacity, View } from "react-native";

interface IVerifyProps {
  useFormProps: any;
}

export const Step10: React.FC<IVerifyProps> = ({ useFormProps }) => {
  const props = useFormProps;
  const [otp, setOtp] = useState<string>("");

  return (
    <View style={styles.formContainer}>
      <Controller
        control={props?.control}
        render={({ field }) => (
          <CustomOTPInput
            numberOfInput={5}
            onComplete={(enteredOTP) => {
              if (enteredOTP.length === 5) {
                setOtp(enteredOTP);
                field.onChange(enteredOTP);
              }
            }}
            containerStyle={styles.OTPContainer}
            inputStyle={{
              width: moderateScale(55),
            }}
          />
        )}
        name='code'
        defaultValue={""}
      />
      {props?.errors?.code?.message && (
        <CustomText
          size={12}
          type='regular'
          danger
          style={{
            marginTop: moderateScale(-30),
          }}>
          {props?.errors?.code?.message}
        </CustomText>
      )}
      <View style={styles.bottomActionText}>
        <CustomText type='medium' size={13} lightPurple>
          0:00
        </CustomText>
        <TouchableOpacity>
          <CustomText type='medium' size={13} lightPurple>
            Resend code
          </CustomText>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    gap: moderateScale(20),
  },
  OTPContainer: {
    paddingTop: moderateScale(25),
    paddingBottom: moderateScale(15),
  },
  iconContainer: {
    width: "50%",
    height: DVH(10),
    alignSelf: "center",
    marginTop: moderateScale(30),
  },
  icon: {
    width: "100%",
    height: "100%",
  },
  textContainer: {
    gap: moderateScale(10),
  },
  bottomActionText: {
    justifyContent: "space-between",
    marginTop: moderateScale(-20),
    alignItems: "center",
    flexDirection: "row",
  },
});
