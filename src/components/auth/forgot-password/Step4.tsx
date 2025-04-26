import { CustomOTPInput, CustomText } from "@src/components/shared";
import { moderateScale } from "@src/resources/responsiveness";
import React, { useState } from "react";
import { Controller } from "react-hook-form";
import { StyleSheet, TouchableOpacity, View } from "react-native";

interface IVerifyProps {
  useFormProps: any;
}

export const Step4: React.FC<IVerifyProps> = ({ useFormProps }) => {
  const props = useFormProps;
  const [otp, setOtp] = useState<string>("");

  return (
    <View style={styles.formContainer}>
      <Controller
        control={props?.control}
        render={({ field }) => (
          <CustomOTPInput
            numberOfInput={6}
            onComplete={(enteredOTP) => {
              if (enteredOTP.length === 6) {
                setOtp(enteredOTP);
                field.onChange(enteredOTP);
              }
            }}
            containerStyle={styles.OTPContainer}
            inputStyle={{
              width: moderateScale(45),
            }}
          />
        )}
        name='pin'
        defaultValue={""}
      />
      {props?.errors?.pin?.message && (
        <CustomText
          size={12}
          type='regular'
          danger
          style={{
            marginTop: moderateScale(-30),
          }}>
          {props?.errors?.pin?.message}
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
