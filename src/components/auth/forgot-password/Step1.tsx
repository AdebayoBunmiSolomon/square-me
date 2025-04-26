import { CustomPhoneInput } from "@src/components/shared";
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
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    gap: moderateScale(20),
  },
});
