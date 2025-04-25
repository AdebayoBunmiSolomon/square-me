import { ActionText } from "@src/common";
import { CustomInput, CustomPhoneInput } from "@src/components/shared";
import { moderateScale } from "@src/resources/responsiveness";
import React from "react";
import { Controller } from "react-hook-form";
import { StyleSheet, View } from "react-native";

interface ICreateAcctProps {
  useFormProps: any;
}

export const Step1: React.FC<ICreateAcctProps> = ({ useFormProps }) => {
  const props = useFormProps;
  return (
    <View style={styles.formContainer}>
      <Controller
        control={props?.control}
        render={({ field }) => (
          <CustomPhoneInput
            value={field.value}
            titleColor={"#000000"}
            title='Phone Number'
            titleType='regular'
            onChangeText={(value) => field.onChange(value)}
            placeholder='080 0000 000'
            showErrorText
            error={props?.errors?.phone_number?.message}
          />
        )}
        name='phone_number'
        defaultValue={""}
      />

      <Controller
        control={props?.control}
        render={({ field }) => (
          <CustomInput
            titleType='regular'
            title='Referral Code (Optional)'
            titleColor={"#000000"}
            placeholder='Enter amount'
            type='custom'
            keyboardType='default'
            onChangeText={(value) => field.onChange(value)}
            value={field.value}
            showErrorText
            error={props?.errors?.referral_code?.message}
          />
        )}
        name='referral_code'
        defaultValue={""}
      />

      <ActionText
        leftText='By signing up, you accept our'
        actionText='Terms & Conditions'
        leftTextStyle={{
          fontSize: moderateScale(13),
        }}
        actionTextStyle={{
          fontSize: moderateScale(13),
        }}
        actionContainerStyle={styles.actionTextContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  actionTextContainer: {
    paddingTop: moderateScale(20),
    justifyContent: "flex-start",
  },
  formContainer: {
    gap: moderateScale(20),
  },
});
