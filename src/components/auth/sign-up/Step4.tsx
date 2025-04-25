import { CustomOTPInput, CustomText } from "@src/components/shared";
import { moderateScale } from "@src/resources/responsiveness";
import React, { useState } from "react";
import { Controller } from "react-hook-form";
import { StyleSheet, View } from "react-native";

interface ISecurityPinProps {
  useFormProps: any;
}

export const Step4: React.FC<ISecurityPinProps> = ({ useFormProps }) => {
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
          />
        )}
        name='security_pin'
        defaultValue={""}
      />
      {props?.errors?.security_pin?.message && (
        <CustomText
          size={12}
          type='regular'
          danger
          style={{
            marginTop: moderateScale(-30),
          }}>
          {props?.errors?.security_pin?.message}
        </CustomText>
      )}
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
});
