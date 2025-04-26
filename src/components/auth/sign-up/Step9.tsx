import { CustomInput } from "@src/components/shared";
import { moderateScale } from "@src/resources/responsiveness";
import React from "react";
import { Controller } from "react-hook-form";
import { StyleSheet, View } from "react-native";

interface IEnterEmailAddressProps {
  useFormProps: any;
}

export const Step9: React.FC<IEnterEmailAddressProps> = ({ useFormProps }) => {
  const props = useFormProps;
  return (
    <View style={styles.formContainer}>
      <Controller
        control={props?.control}
        render={({ field }) => (
          <CustomInput
            titleType='regular'
            title='Email address'
            titleColor={"#000000"}
            placeholder=''
            type='custom'
            keyboardType='default'
            onChangeText={(value) => field.onChange(value)}
            value={field.value}
            showErrorText
            error={props?.errors?.email_address?.message}
          />
        )}
        name='email_address'
        defaultValue={""}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    marginTop: moderateScale(30),
  },
});
