import {
  CustomInput,
  CustomPhoneInput,
  CustomText,
} from "@src/components/shared";
import { DVW, moderateScale } from "@src/resources/responsiveness";
import React, { useState } from "react";
import { Controller } from "react-hook-form";
import { StyleSheet, View } from "react-native";

interface IStep1Props {
  useFormProps: any;
}

export const Step2: React.FC<IStep1Props> = ({ useFormProps }) => {
  const [enteredPhNumber, setEnteredPhNumber] = useState<string>("");
  const props = useFormProps;
  return (
    <View style={styles.formContainer}>
      <Controller
        control={props?.control}
        render={({ field }) => (
          <CustomInput
            titleType='regular'
            title='Amount'
            titleColor={"#000000"}
            placeholder='NGN 5,000'
            type='custom'
            keyboardType='phone-pad'
            onChangeText={(value) => field.onChange(value)}
            value={field.value}
            showErrorText
            error={props?.errors?.amount?.message}
          />
        )}
        name='amount'
        defaultValue={""}
      />

      <Controller
        control={props?.control}
        render={({ field }) => (
          <CustomPhoneInput
            value={field.value}
            titleColor={"#000000"}
            title='Recipient Phone Number'
            titleType='regular'
            onChangeText={(value) => {
              field.onChange(value);
              setEnteredPhNumber(value);
            }}
            placeholder='080 0000 000'
            showErrorText
            error={props?.errors?.phone_number?.message}
          />
        )}
        name='phone_number'
        defaultValue={""}
      />

      {enteredPhNumber && enteredPhNumber.length >= 10 && (
        <View style={styles.beneficiaryContainer}>
          <CustomText type='regular' size={15} black>
            {"DAVID OLAOYE"}
          </CustomText>
        </View>
      )}

      <Controller
        control={props?.control}
        render={({ field }) => (
          <CustomInput
            titleType='regular'
            title='Add a note (Optional)'
            titleColor={"#000000"}
            placeholder=''
            type='custom'
            keyboardType='default'
            onChangeText={(value) => {
              field.onChange(value);
            }}
            value={field.value}
            showErrorText
            error={props?.errors?.note?.message}
            multiLine
            height={10}
          />
        )}
        name='note'
        defaultValue={""}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    gap: moderateScale(20),
  },
  beneficiaryContainer: {
    backgroundColor: "#ECFDF3",
    borderRadius: moderateScale(10),
    borderWidth: DVW(0.3),
    borderColor: "#12B76A",
    paddingVertical: moderateScale(13),
    paddingHorizontal: moderateScale(13),
  },
});
