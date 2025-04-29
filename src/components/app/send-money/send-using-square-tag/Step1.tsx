import { CustomInput } from "@src/components/shared";
import { moderateScale } from "@src/resources/responsiveness";
import React from "react";
import { Controller } from "react-hook-form";
import { StyleSheet, View } from "react-native";

interface IStep1Props {
  useFormProps: any;
}

export const Step1: React.FC<IStep1Props> = ({ useFormProps }) => {
  const props = useFormProps;
  return (
    <View style={styles.formContainer}>
      <Controller
        control={props?.control}
        render={({ field }) => (
          <CustomInput
            titleType='regular'
            title='Enter Squareme tag'
            titleColor={"#000000"}
            placeholder='@'
            type='custom'
            keyboardType='default'
            onChangeText={(value) => {
              const formattedValue = value.startsWith("@")
                ? value
                : `@${value}`;
              field.onChange(formattedValue);
            }}
            value={field.value}
            showErrorText
            error={props?.errors?.square_tag?.message}
          />
        )}
        name='square_tag'
        defaultValue={""}
      />

      <Controller
        control={props?.control}
        render={({ field }) => (
          <CustomInput
            titleType='regular'
            title='Purpose for sending (Optional)'
            titleColor={"#000000"}
            placeholder=''
            type='custom'
            keyboardType='default'
            onChangeText={(value) => field.onChange(value)}
            value={field.value}
            showErrorText
            error={props?.errors?.purpose?.message}
          />
        )}
        name='purpose'
        defaultValue={""}
      />

      <Controller
        control={props?.control}
        render={({ field }) => (
          <CustomInput
            titleType='regular'
            title='Amount'
            titleColor={"#000000"}
            placeholder='₦'
            type='custom'
            keyboardType='phone-pad'
            onChangeText={(value) => {
              const formattedValue = value.startsWith("₦ ")
                ? value
                : `₦ ${value}`;
              field.onChange(formattedValue);
            }}
            value={field.value}
            showErrorText
            error={props?.errors?.amount?.message}
          />
        )}
        name='amount'
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
